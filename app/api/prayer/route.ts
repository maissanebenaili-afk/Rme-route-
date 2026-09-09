import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const latitude = params.get("latitude");
  const longitude = params.get("longitude");
  const method = params.get("method") || "3";

  if (!latitude || !longitude) {
    return NextResponse.json({ error: "latitude and longitude are required" }, { status: 400 });
  }

  const upstream = await fetch(
    `https://api.aladhan.com/v1/timings?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&method=${encodeURIComponent(method)}`,
    { next: { revalidate: 300 } }
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: "Prayer provider unavailable" }, { status: 502 });
  }

  return NextResponse.json(await upstream.json());
}