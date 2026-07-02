import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";
const XPRT_API = "https://api.goxprt.com";

// Maps the contact form's topic to XPRT Cloud's service_type vocabulary.
const SERVICE_TYPE_BY_TOPIC: Record<string, string> = {
  "drone-realestate": "real_estate",
  "drone-mapping": "mapping",
  "drone-video": "video",
};

async function sendTelegram(data: Record<string, string>): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return false;
  const text =
    `<b>New Project Request</b>\n\n` +
    `<b>Name:</b> ${data.name}\n` +
    `<b>Email:</b> ${data.email}\n` +
    `<b>Phone:</b> ${data.phone || "Not provided"}\n` +
    `<b>Company:</b> ${data.company || "Not specified"}\n` +
    `<b>Type:</b> ${data.projectType || "Not specified"}\n` +
    `<b>Budget:</b> ${data.budget || "Not specified"}\n` +
    `<b>Timeline:</b> ${data.timeline || "Not specified"}\n` +
    `\n<b>Message:</b>\n${data.message}`;
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
    });
    if (!res.ok) console.error("Telegram send failed:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("Telegram send threw:", err);
    return false;
  }
}

// Drone submissions also become leads in XPRT Cloud so they land in the
// dashboard pipeline (lead -> job -> photos -> invoice), not just a chat ping.
async function createXprtLead(data: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch(`${XPRT_API}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone || "not provided",
        email: data.email || null,
        address: "See notes (deandiego.com form)",
        service_type: SERVICE_TYPE_BY_TOPIC[data.topic] || "drone_general",
        notes:
          `${data.message}\n\n` +
          `Company: ${data.company || "n/a"} | Budget: ${data.budget || "n/a"} | Timeline: ${data.timeline || "n/a"}`,
        source: "deandiego.com",
        utm_medium: "contact_form",
        utm_content: data.topic || data.projectType || null,
      }),
    });
    if (!res.ok) console.error("XPRT lead create failed:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("XPRT lead create threw:", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, projectType, budget, timeline, message } = data;

    if (!name || !email || !projectType || !budget || !timeline || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const isDrone = projectType === "drone";
    const [telegramOk, xprtOk] = await Promise.all([
      sendTelegram(data),
      isDrone ? createXprtLead(data) : Promise.resolve(false),
    ]);

    // The lead must land somewhere. If every channel failed, tell the visitor
    // instead of swallowing it — a loud failure beats a vanished lead.
    if (!telegramOk && !(isDrone && xprtOk)) {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
