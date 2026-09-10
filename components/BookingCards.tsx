'use client';

import { useState } from 'react';

type Props = {
  origin: string;
  destination: string;
  date?: string;
};

export default function BookingCards({ origin, destination, date }: Props) {
  const [loading, setLoading] = useState<'flight' | 'ferry' | null>(null);

  async function go(type: 'flight' | 'ferry') {
    setLoading(type);
    try {
      const q = new URLSearchParams({
        type,
        origin,
        destination,
        ...(date ? { date } : {}),
      });
      const res = await fetch(`/api/affiliates?${q.toString()}`);
      const data = await res.json();

      if (data.configured && data.affiliateUrl) {
        window.location.assign(data.affiliateUrl);
      } else {
        alert(
          type === 'ferry'
            ? "Le partenaire ferry n'est pas encore configuré."
            : "Le partenaire vols n'est pas encore configuré."
        );
      }
    } finally {
      setLoading(null);
    }
  }

  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Comparer des options de départ</h2>
      <p className="mt-1 text-sm text-slate-500">
        Comparez puis réservez auprès de partenaires validés. Les liens affiliés ne sont utilisés
        que lorsqu&apos;un compte partenaire est effectivement configuré.
      </p>

      <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        Couloir sélectionné : <strong>{origin}</strong> → <strong>{destination}</strong>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => go('ferry')}
          disabled={loading !== null}
          className="rounded-xl bg-emerald-700 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ⛴️ {loading === 'ferry' ? 'Recherche…' : 'Comparer les ferries'}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Traversées et liaisons utiles
          </span>
        </button>

        <button
          onClick={() => go('flight')}
          disabled={loading !== null}
          className="rounded-xl bg-slate-900 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ✈️ {loading === 'flight' ? 'Recherche…' : 'Comparer les vols'}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Retour rapide ou aller simple
          </span>
        </button>
      </div>
    </section>
  );
}
