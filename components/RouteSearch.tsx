"use client";

import { useState } from "react";
import BookingCards from "@/components/BookingCards";

export default function RouteSearch() {
  const [origin, setOrigin] = useState("Paris, France");
  const [destination, setDestination] = useState("Tanger, Maroc");
  const [date, setDate] = useState("");

  return (
    <>
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <h1 className="text-xl font-bold">Votre voyage Europe → Maroc</h1>
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
