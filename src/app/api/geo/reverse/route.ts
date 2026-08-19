import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "lat and lng required" }, { status: 400 });
  }
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) {
    return NextResponse.json({ error: "invalid coordinates" }, { status: 400 });
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lng));
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("zoom", "16");
    url.searchParams.set("addressdetails", "1");

    const res = await fetch(url, {
      headers: {
        "User-Agent": "deandiego.com-deer-recovery/1.0 (https://deandiego.com/drone/recover)",
        Accept: "application/json",
        "Accept-Language": "en",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ label: "" }, { status: 200 });
    }
    const data = (await res.json()) as { display_name?: string };
    return NextResponse.json({ label: data.display_name || "" });
  } catch {
    return NextResponse.json({ label: "" }, { status: 200 });
  }
}
