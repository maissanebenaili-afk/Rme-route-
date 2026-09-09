import RouteSearch from "../RouteSearch";
import CostCalculator from "../components/CostCalculator";
import PrayerWidget from "../PrayerWidget";
import ServicesMap from "../ServicesMap";
import NewsFeed from "../NewsFeed";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-5">
        <header className="rounded-3xl bg-emerald-800 p-6 text-white shadow-lg">
          <div className="text-3xl font-black">MRE Route</div>
          <p className="mt-2 max-w-2xl text-emerald-50">L&apos;assistant de voyage Europe - Maroc : itineraire, budget, ferry, avion, prieres et services utiles.</p>
        </header>
        <RouteSearch />
        <CostCalculator />
        <PrayerWidget />
        <ServicesMap />
        <NewsFeed />
      </div>
    </main>
  );
}