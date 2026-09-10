'use client';

import { useEffect, useState } from 'react';

import type { CommunityProfile } from '@/lib/config';

import BookingCards from './BookingCards';

export default function RouteSearch({ community }: { community: CommunityProfile }) {
  const [origin, setOrigin] = useState(community.defaultOrigin);
  const [destination, setDestination] = useState(community.defaultDestination);
  const [date, setDate] = useState('');

  useEffect(() => {
    setOrigin(community.defaultOrigin);
    setDestination(community.defaultDestination);
    setDate('');
  }, [community.defaultDestination, community.defaultOrigin]);

  return (
    <>
      <section id="preparer" className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-bold">Préparer un trajet {community.corridor}</h1>
            <p className="mt-1 text-sm text-slate-500">
              Base de préparation communautaire : origine, destination et date sont éditables pour
              vos propres variantes de voyage.
            </p>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-emerald-700">
            {community.flag} {community.label}
          </span>
        </div>
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Planifiez votre trajet Europe → Maroc</h2>
        <p className="mt-1 text-sm text-slate-500">
          RME Voyage centralise les informations essentielles pour préparer un départ serein.
        </p>
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
