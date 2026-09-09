import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { buildFerryAffiliateUrl, buildFlightAffiliateUrl } from "../../../affiliate";
import { calculateTravelCost } from "../../../lib/costCalculator";

type JsonRecord = Record<string, unknown>;
type SeededRun = { refs: JsonRecord; records: JsonRecord[] };

const runs = new Map<string, SeededRun>();

function isValidSignature(rawBody: string, signature: string | null) {
  const secret = process.env.AUTONOMA_SHARED_SECRET;
  if (!secret || !signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const received = Buffer.from(signature, "utf8");
  const calculated = Buffer.from(expected, "utf8");
  return received.length === calculated.length && timingSafeEqual(received, calculated);
}

function tokenValue(value: unknown, testRunId: string) {
  if (typeof value !== "string") return value;
  return value.replaceAll("{{testRunId}}", testRunId).replaceAll("{{testRunShortId}}", testRunId.slice(0, 8));
}

function materialize(record: JsonRecord, testRunId: string) {
  return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, tokenValue(value, testRunId)]));
}

function createEntity(entity: string, input: JsonRecord, testRunId: string) {
  const record = materialize(input, testRunId);
  if (entity === "AffiliateLink") {
    const params = {
      origin: String(record.origin || ""),
      destination: String(record.destination || ""),
      date: typeof record.date === "string" ? record.date : undefined
    };
    const url = record.provider === "travelpayouts"
      ? buildFlightAffiliateUrl(params)
      : buildFerryAffiliateUrl(params);
    return { ...record, url: url || record.url };
  }
  if (entity === "CostCalculationResult") {
    return { ...record, ...calculateTravelCost({
      distanceKm: Number(record.distanceKm),
      fuelPricePerLiter: Number(record.fuelPricePerLiter),
      consumptionPer100Km: Number(record.consumptionPer100Km),
      tollFeesEstimate: Number(record.tollFeesEstimate),
      ferryTicketCost: Number(record.ferryTicketCost)
    }) };
  }
  return record;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  if (!isValidSignature(rawBody, request.headers.get("x-signature"))) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: JsonRecord;
  try {
    body = JSON.parse(rawBody) as JsonRecord;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.action === "discover") {
    return NextResponse.json({
      protocol: "autonoma-sdk",
      endpoint: "/api/autonoma",
      entities: ["AffiliateLink", "RouteSearchQuery", "CostCalculationResult", "PrayerTimeRequest"]
    });
  }

  if (body.action === "up") {
    const testRunId = String(body.testRunId || crypto.randomUUID());
    const create = (body.create || {}) as Record<string, JsonRecord[]>;
    const records: JsonRecord[] = [];
    const refs: JsonRecord = {};
    for (const [entity, items] of Object.entries(create)) {
      refs[entity] = items.map((item) => {
        const created = createEntity(entity, item, testRunId);
        records.push(created);
        return { alias: item._alias, value: created };
      });
    }
    const refsToken = Buffer.from(JSON.stringify({ testRunId, nonce: crypto.randomUUID() })).toString("base64url");
    runs.set(refsToken, { refs, records });
    return NextResponse.json({ refsToken, refs, auth: { headers: {} } });
  }

  if (body.action === "down") {
    const refsToken = String(body.refsToken || "");
    const deleted = runs.delete(refsToken);
    return NextResponse.json({ ok: true, deleted });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}