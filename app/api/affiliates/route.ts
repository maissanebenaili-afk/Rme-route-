import { NextRequest, NextResponse } from "next/server";
import { buildFerryAffiliateUrl, buildFlightAffiliateUrl } from "../../../affiliate";

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const type = params.get("type");
  const origin = params.get("origin")?.trim();
  const destination = params.get("destination")?.trim();
  const date = params.get("date") || undefined;

  if (!origin || !destination || (type !== "flight" && type !== "ferry")) {
    return NextResponse.json({ error: "type, origin and destination are required" }, { status: 400 });
  }

  const affiliateUrl = type === "flight"
    ? buildFlightAffiliateUrl({ origin, destination, date })
    : buildFerryAffiliateUrl({ origin, destination, date });

  return NextResponse.json({ configured: Boolean(affiliateUrl), affiliateUrl });
}