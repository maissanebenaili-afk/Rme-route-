import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import RouteSearch from '@/components/RouteSearch';
import CostCalculator from '@/components/CostCalculator';
import PrayerWidget from '@/components/PrayerWidget';
import ServicesMap from '@/components/ServicesMap';
import NewsFeed from '@/components/NewsFeed';

const benefits = [
  { icon: MapPinned, title: 'Votre itinéraire', text: 'Préparez chaque étape, à votre rythme.' },
  { icon: Compass, title: 'Vos options', text: 'Route, ferry et vol dans un seul parcours.' },
  { icon: ShieldCheck, title: 'Vos repères', text: 'Les essentiels pour voyager plus sereinement.' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#173a36]">
      <section className="relative isolate overflow-hidden bg-[#0d3f38] text-white">
        <div className="absolute -right-20 -top-24 -z-10 h-96 w-96 rounded-full bg-[#eead59]/20 blur-3xl" />
        <div className="absolute -bottom-36 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#4cc3ac]/15 blur-3xl" />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#e6a44e] text-sm text-[#103d37]">R</span>
            RME <span className="font-medium text-[#f5cd93]">Voyage</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/guide" className="hidden text-sm font-bold text-white/80 hover:text-white sm:inline">Le guide</Link>
            <a href="#planifier" className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#0d3f38] transition hover:bg-[#f5cd93]">Planifier</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pb-28 lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.16em] text-[#f5cd93]"><Sparkles size={14} /> Europe · Maroc · diaspora</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[.96] tracking-tight sm:text-7xl">Le voyage commence <span className="text-[#f2b963]">bien avant le départ.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">RME Voyage réunit itinéraire, budget et repères utiles dans une expérience claire, pensée pour les familles qui voyagent entre l’Europe, le Maroc et au-delà.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#planifier" className="inline-flex items-center gap-2 rounded-full bg-[#e6a44e] px-6 py-3.5 font-extrabold text-[#103d37] shadow-lg shadow-black/20 transition hover:bg-[#f5cd93]">Préparer mon voyage <ArrowRight size={18} /></a>
              <Link href="/decouvrir" className="rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">Découvrir le service</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/70">
              <span className="inline-flex items-center gap-2"><BadgeCheck size={17} className="text-[#f2b963]" /> Gratuit à utiliser</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={17} className="text-[#f2b963]" /> Liens partenaires signalés</span>
            </div>
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
