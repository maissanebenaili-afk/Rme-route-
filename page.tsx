import HomePage from '@/components/HomePage';

export default function Page() {
  return <HomePage />;
export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-700 p-6 text-white shadow-lg">
          <p className="inline-flex rounded-full border border-emerald-200/30 bg-emerald-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
            RME Voyage 🇲🇦
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Le compagnon de route des Ressortissants Marocains à l’Étranger
          </h1>
          <p className="mt-3 max-w-3xl text-emerald-50">
            RME Voyage vous aide à préparer, organiser et simplifier vos trajets entre l’Europe et le Maroc avec des outils concrets, des repères utiles et une approche pensée pour les familles.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#planifier" className="rounded-xl bg-white px-4 py-2 text-emerald-900">
              Préparer mon voyage
            </a>
            <a href="#services" className="rounded-xl border border-emerald-100/40 px-4 py-2 text-emerald-50">
              Voir les services utiles
            </a>
          </div>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl bg-emerald-900/35 p-3">✅ Préparation claire du départ</div>
            <div className="rounded-xl bg-emerald-900/35 p-3">👨‍👩‍👧‍👦 Conseils adaptés aux voyages en famille</div>
            <div className="rounded-xl bg-emerald-900/35 p-3">🧭 Guidance pratique sur la route Europe ↔ Maroc</div>
          </div>
        </header>
        <section id="planifier" className="space-y-5">
          <RouteSearch />
          <CostCalculator />
        </section>
        <section className="space-y-5">
          <PrayerWidget />
          <div id="services">
            <ServicesMap />
          </div>
          <NewsFeed />
        </section>
        <footer className="pb-8 text-center text-xs text-slate-500">
          RME Voyage — Votre assistant de préparation pour voyager entre l’Europe et le Maroc, sans promesses de données temps réel non vérifiées.
        </footer>
      </div>
    </main>
  );
}
