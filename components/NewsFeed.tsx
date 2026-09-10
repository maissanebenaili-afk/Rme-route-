import type { CommunityProfile } from '@/lib/config';

export default function NewsFeed({ community }: { community: CommunityProfile }) {
  return (
    <section id="conseils" className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-bold">🧭 Conseils communauté et infos pratiques</h2>
          <p className="mt-1 text-sm text-slate-500">
            Guides originaux de préparation pour {community.corridor}. Cette zone reste informative
            tant que des sources officielles ou partenaires ne sont pas branchées.
          </p>
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-emerald-700">
          Beta communautaire
        </span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <InfoCard title="Conseils de trajet" items={community.communityTips} />
        <InfoCard title="Ports, frontières, ferries" items={community.practicalInfo} />
        <InfoCard title="Aides famille" items={community.familyHelpers} />
      </div>
    </section>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
