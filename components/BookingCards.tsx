"use client";

import { useState } from "react";

type Props = {
  origin: string;
  destination: string;
  date?: string;
};

export default function BookingCards({ origin, destination, date }: Props) {
  const [loading, setLoading] = useState<"flight"|"ferry"|null>(null);

  async function go(type: "flight"|"ferry") {
    setLoading(type);
    // Affiliate links not yet configured - show informational message
    setTimeout(() => {
      alert(
        type === "ferry"
          ? "Le partenaire ferry n'est pas encore configuré. Utilisez DirectFerries ou AFerry pour réserver votre traversée."
          : "Le partenaire vols n'est pas encore configuré. Utilisez Skyscanner ou Kayak pour comparer les vols."
      );
      setLoading(null);
    }, 500);
  }

  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Réserver au meilleur prix</h2>
      <p className="mt-1 text-sm text-slate-500">
        Comparez puis réservez auprès de nos partenaires. Les liens affiliés
        sont utilisés uniquement lorsqu'un compte partenaire est configuré.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => go("ferry")}
          disabled={loading !== null}
          className="rounded-xl bg-emerald-700 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ⛴️ {loading === "ferry" ? "Recherche…" : "Comparer les ferries"}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Espagne / France ↔ Maroc
          </span>
        </button>

        <button
          onClick={() => go("flight")}
          disabled={loading !== null}
          className="rounded-xl bg-slate-900 p-4 text-left font-bold text-white disabled:opacity-60"
        >
          ✈️ {loading === "flight" ? "Recherche…" : "Comparer les vols"}
          <span className="mt-1 block text-xs font-normal opacity-90">
            Europe ↔ Maroc
          </span>
        </button>
      </div>
    </section>
  );
}
