export type RoutingPoint = {
  latitude: number;
  longitude: number;
};

export type RoutingResult = {
  geometry: [number, number][];
  distanceMeters: number;
  durationSeconds: number;
};

export function isRoutingPoint(value: unknown): value is RoutingPoint {
  if (!value || typeof value !== "object") return false;
  const point = value as Record<string, unknown>;
  return (
    typeof point.latitude === "number" &&
    Number.isFinite(point.latitude) &&
    point.latitude >= -90 &&
    point.latitude <= 90 &&
    typeof point.longitude === "number" &&
    Number.isFinite(point.longitude) &&
    point.longitude >= -180 &&
    point.longitude <= 180
  );
}
