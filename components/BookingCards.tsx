"use client";

import { useState } from "react";

type Props = {
  origin: string;
  destination: string;
  date?: string;
};

export default function BookingCards({ origin, destination, date }: Props) {
  const [loading, setLoading] = useState<"flight" | "ferry" | null>(null);

  async function go(type: "flight" | "ferry") {
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
          type === "ferry"
            ? "Le partenaire ferry n'est pas encore configuré. Utilisez ce module comme point de préparation, pas comme prix temps réel."
            : "Le partenaire vols n'est pas encore configuré. Utilisez ce module comme point de préparation, pas comme comparateur temps réel.",
        );
      }
    } finally {
      setLoading(null);
    }
  }

  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Orienter sa réservation</h2>
      <p className="mt-1 text-sm text-slate-500">
        Comparez vos options de traversée ou d'avion uniquement via des liens
        affiliés réellement configurés. Aucun tarif fictif ni intégration
        inventée n'est présenté comme active.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => go("ferry")}
          disabled={loading !== null}
          className="rounded-xl bg-emerald-700 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ⛴️ {loading === "ferry" ? "Recherche…" : "Préparer une traversée ferry"}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Espagne / France ↔ Maroc
          </span>
        </button>

        <button
          onClick={() => go("flight")}
          disabled={loading !== null}
          className="rounded-xl bg-slate-900 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ✈️ {loading === "flight" ? "Recherche…" : "Préparer un trajet avion"}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Europe ↔ Maroc
          </span>
        </button>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
        Si aucun partenaire n'est activé, gardez ces modules comme raccourcis de
        préparation et validez ensuite vos options sur des sources réellement
        disponibles.
      </div>
    </section>
  );
}
