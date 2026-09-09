function parseNumber(value: string | null) {
  if (!value) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function parseMethod(value: string | null) {
  if (!value) return 3;
  if (!/^\d+$/.test(value)) return null;
  const method = Number.parseInt(value, 10);
  return method >= 0 && method <= 99 ? method : null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = parseNumber(searchParams.get("latitude"));
  const longitude = parseNumber(searchParams.get("longitude"));
  const method = parseMethod(searchParams.get("method"));

  if (latitude === null || latitude < -90 || latitude > 90) {
    return Response.json({ error: "Invalid latitude" }, { status: 400 });
  }

  if (longitude === null || longitude < -180 || longitude > 180) {
    return Response.json({ error: "Invalid longitude" }, { status: 400 });
  }

  if (method === null) {
    return Response.json({ error: "Invalid method" }, { status: 400 });
  }

  const upstreamUrl = new URL("https://api.aladhan.com/v1/timings");
  upstreamUrl.searchParams.set("latitude", latitude.toString());
  upstreamUrl.searchParams.set("longitude", longitude.toString());
  upstreamUrl.searchParams.set("method", method.toString());

  let response: Response;

  try {
    response = await fetch(upstreamUrl, {
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 3600 },
    });
  } catch {
    return Response.json({ error: "Prayer upstream unavailable" }, { status: 502 });
  }

  if (!response.ok) {
    return Response.json({ error: "Prayer API error" }, { status: response.status });
  }

  try {
    const data = await response.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Prayer upstream unavailable" }, { status: 502 });
  }
}
