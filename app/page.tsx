import Link from "next/link";

import RouteSearch from "@/components/RouteSearch";
import CostCalculator from "@/components/CostCalculator";
import PrayerWidget from "@/components/PrayerWidget";
import ServicesMap from "@/components/ServicesMap";
import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-5">
        <header className="rounded-3xl bg-emerald-800 p-6 text-white shadow-lg">
          <div className="text-3xl font-black">MRE Route 🇲🇦</div>
          <p className="mt-2 max-w-2xl text-emerald-50">L’assistant de voyage Europe ↔ Maroc : itinéraire, budget, ferry, avion, prières et services utiles.</p>
        </header>
        <RouteSearch />
        <CostCalculator />
        <PrayerWidget />
        <ServicesMap />
        <NewsFeed />
        <footer className="space-y-2 pb-8 text-center text-xs text-slate-400">
          <p>MRE Route — MVP. Les données temps réel nécessitent des sources partenaires vérifiées.</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/privacy" className="text-emerald-700 underline underline-offset-2">
              Confidentialité
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
