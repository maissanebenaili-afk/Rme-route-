"use client";

import { useState } from "react";
import BookingCards from "./BookingCards";
import CityAutocomplete from "./CityAutocomplete";
import { Navigation, Calendar, Ruler } from "lucide-react";
import { estimateRoadDistanceKm, type GeocodeResult } from "@/lib/geocoding";

// Distances statiques indicatives (secours si le géocodage n'a pas encore
// résolu de coordonnées réelles pour l'un des deux points).
const popularRoutes = [
  { from: "Paris", to: "Tanger", distance: "2 100 km" },
  { from: "Lyon", to: "Casablanca", distance: "2 500 km" },
  { from: "Marseille", to: "Tanger", distance: "1 600 km" },
  { from: "Bruxelles", to: "Rabat", distance: "2 400 km" },
  { from: "Barcelone", to: "Tanger", distance: "1 300 km" },
  { from: "Frankfurt", to: "Marrakech", distance: "2 800 km" },
];

export default function RouteSearch() {
  const [origin, setOrigin] = useState("Paris, France");
  const [destination, setDestination] = useState("Tanger, Maroc");
  const [date, setDate] = useState("");
  const [originCoords, setOriginCoords] = useState<GeocodeResult | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<GeocodeResult | null>(null);

  const estimatedDistanceKm =
    originCoords && destinationCoords
      ? estimateRoadDistanceKm(originCoords, destinationCoords)
      : null;

  return (
    <>
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Navigation size={20} className="text-emerald-600" />
          <h1 className="text-xl font-bold">Votre voyage Europe → Maroc</h1>
        </div>
        <p className="mt-1 text-sm text-slate-500">
          RME Voyage centralise les informations essentielles pour préparer un départ serein.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <CityAutocomplete
            label="Départ"
            value={origin}
            placeholder="Ville de départ"
            onChange={(v) => {
              setOrigin(v);
              setOriginCoords(null);
            }}
            onSelect={(result) => setOriginCoords(result)}
          />
          <CityAutocomplete
            label="Destination"
            value={destination}
            placeholder="Ville d'arrivée"
            onChange={(v) => {
              setDestination(v);
              setDestinationCoords(null);
            }}
            onSelect={(result) => setDestinationCoords(result)}
          />
          <label className="text-sm font-medium">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={12} /> Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
              aria-label="Date"
            />
          </label>
        </div>

        {estimatedDistanceKm !== null && (
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-zellige-50 px-3 py-2 text-sm text-zellige-800">
            <Ruler size={14} />
            <span>
              Distance estimée (à partir des coordonnées géocodées) : ~{estimatedDistanceKm.toLocaleString("fr-FR")} km
            </span>
          </div>
        )}

        {/* Popular routes */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-400">Trajets populaires :</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {popularRoutes.map((route) => (
              <button
                key={`${route.from}-${route.to}`}
                onClick={() => {
                  setOrigin(`${route.from}`);
                  setDestination(`${route.to}, Maroc`);
                  setOriginCoords(null);
                  setDestinationCoords(null);
                }}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {route.from} → {route.to} <span className="text-slate-400">({route.distance})</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <BookingCards origin={origin} destination={destination} date={date || undefined} />
    </>
  );
}
