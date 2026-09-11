'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold">🗺️ Carte du trajet Europe ↔ Maroc</h2>
      <div className="mt-4 flex h-80 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
        Chargement de la carte...
      </div>
    </section>
  ),
});

export default function InteractiveMapWrapper() {
  return <InteractiveMap />;
}
