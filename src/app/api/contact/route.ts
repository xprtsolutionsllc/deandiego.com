import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, projectType, budget, timeline, message } = data;

    if (!name || !email || !projectType || !budget || !timeline || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send Telegram notification
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const text =
        `<b>New Project Request</b>\n\n` +
        `<b>Name:</b> ${name}\n` +
        `<b>Email:</b> ${email}\n` +
        `<b>Company:</b> ${company || "Not specified"}\n` +
        `<b>Type:</b> ${projectType || "Not specified"}\n` +
        `<b>Budget:</b> ${budget || "Not specified"}\n` +
        `<b>Timeline:</b> ${timeline || "Not specified"}\n` +
        `\n<b>Message:</b>\n${message}`;

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
