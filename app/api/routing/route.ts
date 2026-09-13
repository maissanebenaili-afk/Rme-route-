import { NextRequest, NextResponse } from "next/server";

import { isRoutingPoint, type RoutingPoint, type RoutingResult } from "@/lib/routing";

const PROVIDER_URL = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";
const PROVIDER_TIMEOUT_MS = 8_000;

type ProviderResponse = {
  features?: Array<{
    geometry?: { coordinates?: unknown };
    properties?: { summary?: { distance?: unknown; duration?: unknown } };
  }>;
};

function isCoordinatePair(value: unknown): value is [number, number] {
  return (
    Array.isArray(value) &&
    value.length >= 2 &&
    typeof value[0] === "number" &&
    Number.isFinite(value[0]) &&
    typeof value[1] === "number" &&
    Number.isFinite(value[1])
  );
}

function parseProviderResponse(payload: ProviderResponse): RoutingResult | null {
  const feature = payload.features?.[0];
  const coordinates = feature?.geometry?.coordinates;
  const summary = feature?.properties?.summary;

  if (!Array.isArray(coordinates) || !coordinates.every(isCoordinatePair)) return null;
  if (typeof summary?.distance !== "number" || typeof summary.duration !== "number") return null;

  return {
    geometry: coordinates.map(([longitude, latitude]) => [latitude, longitude]),
    distanceMeters: summary.distance,
    durationSeconds: summary.duration,
  };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENROUTESERVICE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Routing is not configured." }, { status: 503 });
  }

  let body: { origin?: unknown; destination?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid routing request." }, { status: 400 });
  }

  if (!body || !isRoutingPoint(body.origin) || !isRoutingPoint(body.destination)) {
    return NextResponse.json({ error: "Invalid routing request." }, { status: 400 });
  }

  const origin = body.origin as RoutingPoint;
  const destination = body.destination as RoutingPoint;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);

  try {
    const providerResponse = await fetch(PROVIDER_URL, {
      method: "POST",
      headers: { Authorization: apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ coordinates: [[origin.longitude, origin.latitude], [destination.longitude, destination.latitude]] }),
      signal: controller.signal,
    });

    if (providerResponse.status === 429) {
      return NextResponse.json({ error: "Routing provider quota exceeded." }, { status: 429 });
    }
    if (!providerResponse.ok) {
      return NextResponse.json({ error: "Routing provider unavailable." }, { status: 502 });
    }

    const route = parseProviderResponse((await providerResponse.json()) as ProviderResponse);
    if (!route) {
      return NextResponse.json({ error: "Routing provider returned invalid data." }, { status: 502 });
    }

    return NextResponse.json(route, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const message = error instanceof Error && error.name === "AbortError"
      ? "Routing provider timed out."
      : "Routing provider unavailable.";
    return NextResponse.json({ error: message }, { status: 504 });
  } finally {
    clearTimeout(timeout);
  }
}
