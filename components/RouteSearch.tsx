'use client';

import { useState } from 'react';
import BookingCards from './BookingCards';
import { MapPin, Navigation, Calendar } from 'lucide-react';

const popularRoutes = [
  { from: 'Paris', to: 'Tanger', distance: '2 100 km' },
  { from: 'Lyon', to: 'Casablanca', distance: '2 500 km' },
  { from: 'Marseille', to: 'Tanger', distance: '1 600 km' },
  { from: 'Bruxelles', to: 'Rabat', distance: '2 400 km' },
  { from: 'Barcelone', to: 'Tanger', distance: '1 300 km' },
  { from: 'Frankfurt', to: 'Marrakech', distance: '2 800 km' },
];

export default function RouteSearch() {
  const [origin, setOrigin] = useState('Paris, France');
  const [destination, setDestination] = useState('Tanger, Maroc');
  const [date, setDate] = useState('');

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
          <label className="text-sm font-medium">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={12} /> Départ
            </span>
            <input
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
              aria-label="Départ"
              placeholder="Ville de départ"
            />
          </label>
          <label className="text-sm font-medium">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={12} /> Destination
            </span>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 w-full rounded-xl border p-3"
              aria-label="Destination"
              placeholder="Ville d'arrivée"
            />
          </label>
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
