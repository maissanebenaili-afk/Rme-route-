'use client';

import { useMemo, useState } from 'react';

import CostCalculator from '@/components/CostCalculator';
import NewsFeed from '@/components/NewsFeed';
import PrayerWidget from '@/components/PrayerWidget';
import RouteSearch from '@/components/RouteSearch';
import ServicesMap from '@/components/ServicesMap';
import { COMMUNITY_PROFILES, DEFAULT_COMMUNITY_ID } from '@/lib/config';

export default function HomePage() {
  const [selectedCommunityId, setSelectedCommunityId] = useState(DEFAULT_COMMUNITY_ID);

  const community = useMemo(
    () => COMMUNITY_PROFILES.find(({ id }) => id === selectedCommunityId) ?? COMMUNITY_PROFILES[0],
    [selectedCommunityId]
  );

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <header className="rounded-3xl bg-emerald-800 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                Diaspora travel beta
              </div>
              <div className="mt-2 text-3xl font-black sm:text-4xl">MRE Route</div>
              <p className="mt-3 max-w-3xl text-emerald-50">
                L&apos;application communautaire pour préparer les voyages diaspora entre
                l&apos;Europe et le pays d&apos;origine : trajet, budget, arrêts utiles et conseils
                pratiques à partager.
              </p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm font-medium">
              {[
                ['Communautés', '#communautes'],
                ['Préparer le trajet', '#preparer'],
                ['Arrêts utiles', '#arrets'],
                ['Conseils', '#conseils'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  className="rounded-full border border-emerald-600 bg-emerald-700/70 px-4 py-2 text-white transition hover:bg-emerald-700"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-4 rounded-2xl bg-emerald-900/40 p-4 text-sm text-emerald-50">
            {community.flag} <strong>{community.corridor}</strong> — {community.audience} Les
            modules port, frontière et recommandations locales sont présentés comme des espaces
            informatifs ou bêta tant qu&apos;ils ne reposent pas sur des sources validées.
          </div>
        </header>

        <section id="communautes" className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Choisir une communauté</h2>
              <p className="mt-1 max-w-3xl text-sm text-slate-500">
                Une seule base produit, avec des variantes de couloir, de langue et de conseils à
                enrichir progressivement sans cloner une app par marché.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-emerald-700">
              MRE Maroc reste le point de départ
            </span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {COMMUNITY_PROFILES.map((profile) => {
              const isSelected = profile.id === community.id;
              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => setSelectedCommunityId(profile.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-lg font-bold">
                      {profile.flag} {profile.label}
                    </div>
                    <span className="text-xs text-slate-500">
                      {profile.id === DEFAULT_COMMUNITY_ID ? 'Couloir actif' : 'Espace bêta'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{profile.corridor}</p>
                  <p className="mt-2 text-sm text-slate-500">{profile.audience}</p>
                </button>
              );
            })}
          </div>
        </section>

        <RouteSearch community={community} />
        <CostCalculator />
        <ServicesMap community={community} />
        <NewsFeed community={community} />
        <PrayerWidget />

        <footer className="pb-8 text-center text-xs text-slate-400">
          MRE Route — produit diaspora en évolution. Les données temps réel et recommandations
          vérifiées nécessitent des partenaires ou sources officielles confirmés.
        </footer>
      </div>
    </main>
  );
}
