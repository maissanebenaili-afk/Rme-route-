const serviceCategories = [
  {
    title: "Stations et ravitaillement",
    body: "Identifier les arrêts carburant, restauration simple, eau et besoins essentiels avant une longue portion de route.",
  },
  {
    title: "Prière et halte calme",
    body: "Préparer les pauses autour des mosquées, salles de prière ou lieux calmes utiles pendant le trajet.",
  },
  {
    title: "Famille et repos",
    body: "Prioriser sanitaires, ombre, espace enfant, nuit de repos et étape rassurante lorsque le trajet se prolonge.",
  },
  {
    title: "Assistance et relais",
    body: "Repérer consulat, dépannage, pharmacie, hôpital ou contacts d'arrivée à garder à portée de main.",
  },
];

export default function ServicesMap() {
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-bold">Arrêts utiles sur votre parcours</h2>
          <p className="mt-1 text-sm text-slate-600">
            Cette zone prépare la future couche carte et POI du produit. Pour le
            moment, elle sert de structure honnête pour les types d'arrêts que
            les familles RME veulent retrouver rapidement.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Carte interactive à connecter ensuite
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {serviceCategories.map((service) => (
          <div key={service.title} className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-900">{service.title}</div>
            <p className="mt-1 text-sm text-slate-600">{service.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex h-44 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
        Future intégration MapLibre / OpenStreetMap / données POI validées
      </div>
    </section>
  );
}
