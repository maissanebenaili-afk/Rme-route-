import type { CommunityProfile } from '@/lib/config';

export default function ServicesMap({ community }: { community: CommunityProfile }) {
  return (
    <section id="arrets" className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-bold">📍 Arrêts utiles et repères communautaires</h2>
          <p className="mt-1 text-sm text-slate-500">
            Sélection de catégories à documenter par communauté. La carte détaillée sera branchée
            sur des sources ouvertes validées lors d&apos;une prochaine étape.
          </p>
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {community.corridor}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {community.usefulStops.map((service) => (
          <button key={service} className="rounded-full border px-3 py-2 text-sm hover:bg-slate-50">
            {service}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        <div className="flex h-48 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
          Carte communautaire à connecter à MapLibre / OpenStreetMap.
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          <div className="font-semibold text-slate-900">À enrichir ensuite</div>
          <ul className="mt-3 space-y-2">
            <li>• haltes recommandées par la communauté</li>
            <li>• conseils port / frontière / ferry</li>
            <li>• points utiles pour familles et groupes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
