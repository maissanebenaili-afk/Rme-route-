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
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[2.25rem] bg-[#e6a44e]" />
            <div className="relative rounded-[2.25rem] border border-white/10 bg-[#153f39] p-7 shadow-2xl sm:p-9">
              <p className="text-sm font-bold text-[#f5cd93]">Votre carnet de voyage</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Un parcours simple. Des décisions plus sereines.</h2>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5cd93] font-black text-[#103d37]">1</span><div><p className="text-xs text-white/60">Avant le départ</p><p className="font-bold">Itinéraire et budget</p></div></div>
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#73c8b4] font-black text-[#103d37]">2</span><div><p className="text-xs text-white/60">Sur la route</p><p className="font-bold">Services et informations utiles</p></div></div>
              </div>
              <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-white/65">Pensé mobile, lisible et utile, quel que soit votre point de départ.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce3dc] bg-white py-8"><div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:px-8">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#e9f1ed] text-[#0d6255]"><Icon size={21} /></span><div><h2 className="font-extrabold">{title}</h2><p className="mt-1 text-sm leading-6 text-[#5a716c]">{text}</p></div></article>)}</div></section>

      <section id="planifier" className="mx-auto max-w-5xl px-5 py-20 sm:px-8"><div className="mb-10 max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#b45b34]">Préparez sereinement</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">L’essentiel, au bon moment.</h2><p className="mt-4 text-lg leading-8 text-[#5a716c]">Commencez par votre trajet, puis ajustez votre budget avant de comparer vos options.</p></div><div className="space-y-6"><RouteSearch /><CostCalculator /></div></section>

      <section className="bg-[#e8efe7] py-20"><div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="mb-10 max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#b45b34]">En route</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Les repères qui comptent.</h2></div><div className="space-y-6"><PrayerWidget /><ServicesMap /><NewsFeed /></div></div></section>

      <footer className="bg-[#0d3f38] px-5 py-10 text-center text-sm text-white/65">RME Voyage — Votre compagnon de route entre l’Europe, le Maroc et les communautés du monde.</footer>
    </main>
  );
}
