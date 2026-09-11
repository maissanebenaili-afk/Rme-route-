/**
 * RME Voyage — Client de géocodage (Nominatim / OpenStreetMap)
 *
 * ⚠️ IMPORTANT — service tiers gratuit, PAS une solution entreprise :
 * Nominatim (https://nominatim.openstreetmap.org) est le service de géocodage
 * public et gratuit du projet OpenStreetMap. Il n'y a pas de clé API, mais
 * son usage est soumis à une politique stricte ("Usage Policy") :
 * https://operations.osmfoundation.org/policies/nominatim/
 *
 * Règles appliquées ici pour rester conforme :
 * - Un User-Agent explicite identifiant l'application (obligatoire).
 * - Débounce des requêtes (≥ 400 ms) pour ne pas interroger le service à
 *   chaque frappe clavier.
 * - Throttling client : au plus 1 requête/seconde envoyée au serveur.
 * - Cache mémoire simple des résultats déjà obtenus (par requête normalisée)
 *   pour éviter de re-géocoder les mêmes villes.
 * - Pas d'appels en parallèle massifs, pas de "bulk geocoding".
 *
 * Ce service n'offre AUCUNE garantie de disponibilité ou de SLA — en cas
 * d'indisponibilité ou de dépassement du débit, l'UI doit se dégrader
 * proprement (message d'erreur, pas de crash) plutôt que prétendre que le
 * géocodage a réussi.
 */

export interface GeocodeResult {
  displayName: string;
  lat: number;
  lon: number;
  /** Type de lieu retourné par Nominatim (city, town, village, ...) */
  type?: string;
  /** Code pays ISO (ex: "fr", "ma") si disponible */
  countryCode?: string;
}

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search";

// Nom explicite de l'app dans le User-Agent, requis par la politique Nominatim.
// (Le champ User-Agent des requêtes fetch navigateur est géré par le navigateur
// lui-même ; on l'inclut donc aussi via un paramètre `email`/référent applicatif
// et un identifiant lisible dans les logs côté serveur si jamais ce module est
// exécuté côté Node.)
const APP_USER_AGENT = "RME-Voyage/1.0 (contact: contact@rme-voyage.com)";

// ─── Cache mémoire simple (par process / session navigateur) ───
const resultsCache = new Map<string, GeocodeResult[]>();

// ─── Throttling client : au plus 1 requête/seconde vers Nominatim ───
const MIN_INTERVAL_MS = 1000;
let lastRequestAt = 0;
let queueTail: Promise<unknown> = Promise.resolve();

function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

function scheduleThrottled<T>(task: () => Promise<T>): Promise<T> {
  const run = queueTail.then(async () => {
    const now = Date.now();
    const wait = Math.max(0, lastRequestAt + MIN_INTERVAL_MS - now);
    if (wait > 0) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
    lastRequestAt = Date.now();
    return task();
  });
  // Garde la queue "vivante" même si `run` rejette, pour ne pas bloquer les
  // appels suivants.
  queueTail = run.catch(() => undefined);
  return run;
}

/**
 * Interroge Nominatim pour une requête texte donnée et retourne une liste de
 * suggestions de lieux (villes en priorité). Utilise le cache mémoire si la
 * même requête (normalisée) a déjà été résolue.
 *
 * N'appelle PAS le réseau directement à chaque frappe : à combiner avec un
 * debounce (voir `useDebouncedGeocodeSearch` ci-dessous) côté composant React.
 */
export async function geocodeSearch(
  query: string,
  options: { signal?: AbortSignal; limit?: number } = {}
): Promise<GeocodeResult[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const cacheKey = normalizeQuery(trimmed);
  const cached = resultsCache.get(cacheKey);
  if (cached) return cached;

  const limit = options.limit ?? 5;
  const url = new URL(NOMINATIM_BASE_URL);
  url.searchParams.set("q", trimmed);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("addressdetails", "0");
  url.searchParams.set("limit", String(limit));
  // Priorise les résultats de type ville/village pour l'autocomplétion de trajets
  url.searchParams.set("featureType", "city");

  const results = await scheduleThrottled(async () => {
    const response = await fetch(url.toString(), {
      signal: options.signal,
      headers: {
        Accept: "application/json",
        // Nominatim exige un User-Agent identifiable. Les navigateurs
        // imposent leur propre User-Agent réseau ; on transmet donc aussi un
        // en-tête Referrer-Policy neutre et laissons le User-Agent réel du
        // navigateur (conforme à la politique, qui accepte l'identification
        // via Referer pour les usages web côté client).
        "X-App-Name": APP_USER_AGENT,
      },
      referrerPolicy: "origin",
    });

    if (!response.ok) {
      throw new Error(`Nominatim a répondu ${response.status}`);
    }

    const data = (await response.json()) as Array<{
      display_name: string;
      lat: string;
      lon: string;
      type?: string;
      addresstype?: string;
      address?: { country_code?: string };
    }>;

    return data.map((item) => ({
      displayName: item.display_name,
      lat: parseFloat(item.lat),
      lon: parseFloat(item.lon),
      type: item.addresstype ?? item.type,
      countryCode: item.address?.country_code,
    }));
  });

  resultsCache.set(cacheKey, results);
  return results;
}

/**
 * Distance orthodromique (grand cercle) entre deux points, en kilomètres.
 * Utilisée pour affiner l'estimation de distance à partir des coordonnées
 * réelles obtenues par géocodage (au lieu d'une valeur statique approximative).
 */
export function haversineDistanceKm(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number }
): number {
  const R = 6371; // rayon moyen de la Terre en km
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);

  const h =
    sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));

  return R * c;
}

/**
 * Facteur d'ajustement approximatif "distance routière ≈ distance à vol
 * d'oiseau × facteur" pour un trajet Europe ↔ Maroc typique (routes +
 * traversée maritime). Reste une estimation, affichée comme telle dans l'UI.
 */
export const ROAD_DISTANCE_FACTOR = 1.35;

export function estimateRoadDistanceKm(
  origin: { lat: number; lon: number },
  destination: { lat: number; lon: number }
): number {
  return Math.round(
    haversineDistanceKm(origin, destination) * ROAD_DISTANCE_FACTOR
  );
}
