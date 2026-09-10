"use client";

import { useState } from "react";
import BookingCards from "./BookingCards";

export default function RouteSearch() {
  const [origin, setOrigin] = useState("Paris, France");
  const [destination, setDestination] = useState("Tanger, Maroc");
  const [date, setDate] = useState("");

  return (
    <>
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Préparer un trajet RME vers le Maroc</h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              RME signifie <strong>Ressortissants Marocains à l'Étranger</strong>.
              Cet assistant aide à cadrer un voyage Maroc-centrique, à préparer la
              réservation et à organiser les étapes sans prétendre fournir un
              guidage routier temps réel complet.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900 lg:max-w-xs">
            <div className="font-semibold">MVP honnête</div>
            <p className="mt-1">
              Les partenaires, données officielles et modules communautaires live
              ne sont affichés que lorsqu'ils sont réellement activés.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "🧭 Préparation du départ",
            "⛴️ Traversée ferry ou port",
            "👨‍👩‍👧‍👦 Voyage avec la famille",
            "📍 Arrêts utiles à structurer",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <input
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="rounded-xl border p-3"
            aria-label="Départ"
          />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="rounded-xl border p-3"
            aria-label="Destination"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl border p-3"
            aria-label="Date"
          />
        </div>
      </section>
      <BookingCards origin={origin} destination={destination} date={date || undefined} />
    </>
  );
}
