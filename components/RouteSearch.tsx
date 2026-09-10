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
        <h2 className="text-xl font-bold">Planifiez votre trajet Europe → Maroc</h2>
        <p className="mt-1 text-sm text-slate-500">
          RME Voyage centralise les informations essentielles pour préparer un départ serein.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <input value={origin} onChange={e=>setOrigin(e.target.value)}
            className="rounded-xl border p-3" aria-label="Départ"/>
          <input value={destination} onChange={e=>setDestination(e.target.value)}
            className="rounded-xl border p-3" aria-label="Destination"/>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)}
            className="rounded-xl border p-3" aria-label="Date"/>
        </div>
      </section>
      <BookingCards origin={origin} destination={destination} date={date || undefined}/>
    </>
  );
}
