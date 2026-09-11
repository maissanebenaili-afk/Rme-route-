"use client";

import { useState } from "react";
import { Ship, Plane, Loader2 } from "lucide-react";

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
    <section className="rounded-3xl border border-sable-300 bg-white p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-zellige-800">Réserver au meilleur prix</h2>
      <p className="mt-1.5 text-sm leading-6 text-sable-700">
        Comparez puis réservez auprès de nos partenaires. Les liens affiliés
        sont utilisés uniquement lorsqu&apos;un compte partenaire est configuré.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => go("ferry")}
          disabled={loading !== null}
          className="group flex items-start gap-3 rounded-2xl bg-zellige-700 p-4 text-left font-bold text-white shadow-warm transition hover:bg-zellige-600 disabled:opacity-60"
        >
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15">
            {loading === "ferry" ? <Loader2 size={18} className="animate-spin" /> : <Ship size={18} />}
          </span>
          <span>
            {loading === "ferry" ? "Recherche…" : "Comparer les ferries"}
            <span className="mt-1 block text-xs font-normal text-white/75">
              Espagne / France ↔ Maroc
            </span>
          </span>
        </button>

        <button
          onClick={() => go("flight")}
          disabled={loading !== null}
          className="group flex items-start gap-3 rounded-2xl bg-terracotta-600 p-4 text-left font-bold text-white shadow-warm transition hover:bg-terracotta-500 disabled:opacity-60"
        >
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15">
            {loading === "flight" ? <Loader2 size={18} className="animate-spin" /> : <Plane size={18} />}
          </span>
          <span>
            {loading === "flight" ? "Recherche…" : "Comparer les vols"}
            <span className="mt-1 block text-xs font-normal text-white/75">
              Europe ↔ Maroc
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
