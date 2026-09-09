export default function ServicesMap() {
  const services = ["⛽ Stations-service", "🕌 Mosquées", "🥘 Halal", "🏛️ Consulats", "🛏️ Repos"];

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm border">
      <h2 className="text-lg font-bold">📍 Services sur votre route</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {services.map((service) => (
          <button key={service} className="rounded-full border px-3 py-2 text-sm hover:bg-slate-50">
            {service}
          </button>
        ))}
      </div>
      <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
        Carte interactive à connecter à MapLibre / OpenStreetMap.
      </div>
    </section>
  );
}
