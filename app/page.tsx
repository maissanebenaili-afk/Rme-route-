import CostCalculator from "@/components/CostCalculator";
import NewsFeed from "@/components/NewsFeed";
import PrayerWidget from "@/components/PrayerWidget";
import RmeGuides from "@/components/RmeGuides";
import RouteSearch from "@/components/RouteSearch";
import ServicesMap from "@/components/ServicesMap";
import { AUDIENCE_PROFILES } from "@/lib/rmeContent";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <header className="rounded-3xl bg-emerald-800 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                RME = Ressortissants Marocains à l'Étranger
              </div>
              <div className="mt-2 text-3xl font-black sm:text-4xl">RME Route 🇲🇦</div>
              <p className="mt-3 max-w-3xl text-emerald-50">
                Assistant de mobilité et d'assistance pour les voyages diaspora
                centrés sur le Maroc: préparation du trajet, budget, traversée,
                arrêts utiles, famille, prières et repères communautaires.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-sm text-emerald-50 lg:max-w-sm">
              Un MVP ambitieux mais honnête: pas de promesse d'accord officiel,
              pas de données temps réel inventées, et une structure pensée pour
              devenir plus complète à mesure que les intégrations réelles arrivent.
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-2">
          {AUDIENCE_PROFILES.map((profile) => (
            <article key={profile.name} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-900">{profile.name}</h2>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {profile.badge}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{profile.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <RouteSearch />

        <section className="grid gap-5 xl:grid-cols-[1.15fr,0.85fr]">
          <CostCalculator />
          <PrayerWidget />
        </section>

        <RmeGuides />
        <ServicesMap />
        <NewsFeed />

        <footer className="pb-8 text-center text-xs text-slate-400">
          RME Route — assistant MVP Maroc-first. Les données officielles,
          intégrations temps réel, modération live et partenariats doivent être
          activés et vérifiés avant d'être présentés comme disponibles.
        </footer>
      </div>
    </main>
  );
}
