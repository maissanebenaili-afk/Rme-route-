/** @jest-environment node */

import { NextRequest } from "next/server";
import { POST } from "../app/api/routing/route";

const originalApiKey = process.env.OPENROUTESERVICE_API_KEY;

afterEach(() => {
  if (originalApiKey === undefined) delete process.env.OPENROUTESERVICE_API_KEY;
  else process.env.OPENROUTESERVICE_API_KEY = originalApiKey;
  jest.restoreAllMocks();
});

describe("POST /api/routing", () => {
  const request = (body: unknown) => new NextRequest("http://localhost/api/routing", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  it("does not call a provider when routing is not configured", async () => {
    delete process.env.OPENROUTESERVICE_API_KEY;
    const fetchMock = jest.spyOn(global, "fetch");

    const response = await POST(request({}));

    expect(response.status).toBe(503);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects invalid coordinates before calling the provider", async () => {
    process.env.OPENROUTESERVICE_API_KEY = "test-key";
    const fetchMock = jest.spyOn(global, "fetch");

    const response = await POST(request({ origin: { latitude: 91, longitude: 0 } }));

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects an empty JSON body", async () => {
    process.env.OPENROUTESERVICE_API_KEY = "test-key";

    const response = await POST(request(null));

    expect(response.status).toBe(400);
  });

  it("returns validated provider geometry and metrics", async () => {
    process.env.OPENROUTESERVICE_API_KEY = "test-key";
    jest.spyOn(global, "fetch").mockResolvedValue(new Response(JSON.stringify({
      features: [{
        geometry: { coordinates: [[2.35, 48.85], [-5.83, 35.76]] },
        properties: { summary: { distance: 1000, duration: 120 } },
      }],
    }), { status: 200 }));

    const response = await POST(request({
      origin: { latitude: 48.85, longitude: 2.35 },
      destination: { latitude: 35.76, longitude: -5.83 },
    }));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      geometry: [[48.85, 2.35], [35.76, -5.83]],
      distanceMeters: 1000,
      durationSeconds: 120,
    });
  });

  it("reports provider quota exhaustion without returning route data", async () => {
    process.env.OPENROUTESERVICE_API_KEY = "test-key";
    jest.spyOn(global, "fetch").mockResolvedValue(new Response(null, { status: 429 }));

    const response = await POST(request({
      origin: { latitude: 48.85, longitude: 2.35 },
      destination: { latitude: 35.76, longitude: -5.83 },
    }));

    expect(response.status).toBe(429);
    await expect(response.json()).resolves.toEqual({ error: "Routing provider quota exceeded." });
  });
});
