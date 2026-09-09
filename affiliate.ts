export type AffiliateProvider = "travelpayouts" | "directferries";

function clean(value: string | undefined) {
  return (value || "").trim();
}

export function buildFlightAffiliateUrl(params: {
  origin: string;
  destination: string;
  date?: string;
}) {
  const marker = clean(process.env.TRAVELPAYOUTS_PARTNER_ID);
  const { origin, destination, date } = params;

  // Never invent a partner marker. Return null until the account is configured.
  if (!marker) return null;

  const datePart = date || "";
  const target =
    `https://www.skyscanner.fr/transport/vols/` +
    `${origin.toLowerCase()}/` +
    `${destination.toLowerCase()}/` +
    `${encodeURIComponent(datePart)}/`;

  return `https://tp.media/r?marker=${encodeURIComponent(marker)}&p=4116&u=${encodeURIComponent(target)}`;
}

export function buildFerryAffiliateUrl(params: {
  origin: string;
  destination: string;
  date?: string;
}) {
  const marker = clean(process.env.DIRECT_FERRIES_PARTNER_ID);
  if (!marker) return null;

  // Provider-specific URL templates must be confirmed from the affiliate account.
  // We deliberately do not fabricate a production endpoint.
  const base = clean(process.env.DIRECT_FERRIES_BASE_URL);
  if (!base) return null;

  const url = new URL(base);
  url.searchParams.set("partner", marker);
  url.searchParams.set("origin", params.origin);
  url.searchParams.set("destination", params.destination);
  if (params.date) url.searchParams.set("date", params.date);
  return url.toString();
}
