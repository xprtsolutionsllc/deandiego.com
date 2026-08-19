import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";
const XPRT_API = "https://api.goxprt.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendTelegram(fields: Record<string, string>): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return false;
  const line = (label: string, value: string) =>
    `<b>${label}:</b> ${escapeHtml(value || "Not provided")}`;
  const maps =
    fields.lat && fields.lng
      ? `https://maps.google.com/?q=${encodeURIComponent(fields.lat + "," + fields.lng)}`
      : "";
  const message =
    `<b>DEER DISPATCH TONIGHT</b>\n\n` +
    `${line("Name", fields.name)}\n` +
    `${line("Phone", fields.phone)}\n` +
    `${line("Email", fields.email)}\n` +
    `${line("County", fields.county)}\n` +
    `${line("Location", fields.location)}\n` +
    `${line("Pin", maps || (fields.lat && fields.lng ? `${fields.lat},${fields.lng}` : ""))}\n` +
    `${line("Shot at", fields.shotAt)}\n` +
    `${line("Status", fields.deerStatus)}\n` +
    `${line("Thinks it went", fields.direction)}\n` +
    `${line("Shot placement", fields.shotPlacement)}\n` +
    `${line("Terrain", fields.terrain)}\n` +
    `${line("Landowner", fields.landowner)}\n` +
    `${line("Meet tonight / access", fields.accessNotes)}\n` +
    `${line("Waiver", fields.waiverLine)}\n` +
    `${line("Media OK", fields.mediaOk)}`;
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: "HTML" }),
    });
    if (!res.ok) console.error("Telegram deer dispatch failed:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("Telegram deer dispatch threw:", err);
    return false;
  }
}

async function createXprtLead(fields: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch(`${XPRT_API}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        phone: fields.phone || "not provided",
        email: fields.email || null,
        address: fields.location || "See notes (deandiego.com deer recovery)",
        service_type: "deer_recovery",
        notes:
          `DEER DISPATCH TONIGHT\n` +
          `County: ${fields.county || "n/a"}\n` +
          `Shot at: ${fields.shotAt || "n/a"}\n` +
          `Status: ${fields.deerStatus || "n/a"}\n` +
          `Thinks it went: ${fields.direction || "n/a"}\n` +
          `Shot placement: ${fields.shotPlacement || "n/a"}\n` +
          `Terrain: ${fields.terrain || "n/a"}\n` +
          `Landowner: ${fields.landowner || "n/a"}\n` +
          `Pin: ${fields.lat && fields.lng ? `${fields.lat},${fields.lng}` : "n/a"}\n` +
          `Meet tonight / access: ${fields.accessNotes || "n/a"}\n` +
          `Waiver: ${fields.waiverLine}\n` +
          `Media OK: ${fields.mediaOk}`,
        source: "deandiego.com",
        utm_medium: "deer_recovery_form",
        utm_content: "deer-recovery",
      }),
    });
    if (!res.ok) console.error("XPRT deer lead create failed:", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("XPRT deer lead create threw:", err);
    return false;
  }
}

function truthy(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const acceptedAt = new Date().toISOString();
    const waiverOk =
      truthy(data.waiverAgreed) &&
      truthy(data.ohioTaken) &&
      truthy(data.ohioNoDevice) &&
      truthy(data.ohioAliveStop) &&
      truthy(data.ohioLandowner) &&
      text(data.waiverName).length > 1;

    if (!waiverOk) {
      return NextResponse.json(
        { error: "Ohio rules and the waiver must be accepted before submit" },
        { status: 400 },
      );
    }

    const fields = {
      name: text(data.name),
      phone: text(data.phone),
      email: text(data.email),
      county: text(data.county),
      location: text(data.location),
      shotAt: text(data.shotAt),
      deerStatus: text(data.deerStatus),
      direction: text(data.direction),
      shotPlacement: text(data.shotPlacement),
      terrain: text(data.terrain),
      landowner: text(data.landowner),
      accessNotes: text(data.accessNotes),
      lat: text(data.lat),
      lng: text(data.lng),
      mediaOk: truthy(data.mediaOk) ? "yes" : "no",
      waiverLine: `${text(data.waiverName)} agreed ${acceptedAt}${ip ? ` ip ${ip}` : ""}`,
    };

    if (!fields.name || !fields.phone || !fields.location) {
      return NextResponse.json({ error: "Name, phone, and location are required" }, { status: 400 });
    }

    const phoneDigits = fields.phone.replace(/\D/g, "");
    if (phoneDigits.length < 7) {
      return NextResponse.json({ error: "A real callback number is required" }, { status: 400 });
    }

    const [telegramOk, xprtOk] = await Promise.all([
      sendTelegram(fields),
      createXprtLead(fields),
    ]);

    if (!telegramOk && !xprtOk) {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process dispatch" }, { status: 500 });
  }
}
