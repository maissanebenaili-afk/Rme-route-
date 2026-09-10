import Link from "next/link";
import { ArrowRight, Compass, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import RouteSearch from "@/components/RouteSearch";
import CostCalculator from "@/components/CostCalculator";
import PrayerWidget from "@/components/PrayerWidget";
import ServicesMap from "@/components/ServicesMap";
import NewsFeed from "@/components/NewsFeed";

const benefits = [
  { icon: MapPinned, title: "Votre itinéraire", text: "Préparez votre départ, étape par étape." },
  { icon: Compass, title: "Le bon choix", text: "Route, ferry ou avion selon votre voyage." },
  { icon: ShieldCheck, title: "L'esprit léger", text: "Les repères utiles, réunis au même endroit." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#163b37]">
      <div className="relative isolate">
        <div className="morocco-sun absolute -right-20 -top-16 -z-10 h-80 w-80 rounded-full bg-[#e6a44e]/25 blur-3xl" />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0d6255] text-sm text-white">R</span>
            RME <span className="font-medium text-[#b45b34]">Voyage</span>
          </Link>
          <a href="#planifier" className="rounded-full border border-[#0d6255]/20 px-4 py-2 text-sm font-bold transition hover:bg-[#0d6255] hover:text-white">
            Planifier mon voyage
          </a>
        </nav>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pb-28 lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e8efe7] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.16em] text-[#0d6255]">
              <Sparkles size={14} /> Europe — Maroc
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[.96] tracking-tight text-[#123d37] sm:text-7xl">
              Le Maroc commence <span className="text-[#c5663c]">dès la route.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#49645e]">
              Une préparation simple et rassurante pour les voyages entre l&apos;Europe et le Maroc. Itinéraire, budget et services utiles, sans surcharge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#planifier" className="inline-flex items-center gap-2 rounded-full bg-[#0d6255] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#0d6255]/20 transition hover:bg-[#094b41]">
                Préparer mon voyage <ArrowRight size={18} />
              </a>
              <Link href="/decouvrir" className="rounded-full px-6 py-3.5 font-bold text-[#0d6255] transition hover:bg-[#e8efe7]">
                Découvrir RME Voyage
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm font-semibold text-[#49645e]">
              <span className="h-px w-10 bg-[#d9b98b]" /> Pensé pour les familles et les grands départs
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-[#d9824b]" />
            <div className="relative rounded-[2.5rem] bg-[#123d37] p-7 text-white shadow-2xl sm:p-9">
              <p className="text-sm font-bold text-[#efc47f]">Votre carnet de voyage</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">De votre porte au Maroc.</h2>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"><span className="h-3 w-3 rounded-full bg-[#efc47f]" /><div><p className="text-xs text-white/60">Départ</p><p className="font-bold">Europe</p></div></div>
                <div className="ml-5 h-6 border-l border-dashed border-white/30" />
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"><span className="h-3 w-3 rounded-full bg-[#d9824b]" /><div><p className="text-xs text-white/60">Arrivée</p><p className="font-bold">Maroc</p></div></div>
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-white/70">Organisez l&apos;essentiel avant de partir, et profitez davantage du voyage.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-[#e7dfd1] bg-white/60 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
          {benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#f5ead9] text-[#b45b34]"><Icon size={21} /></span><div><h2 className="font-extrabold">{title}</h2><p className="mt-1 text-sm leading-6 text-[#5e746e]">{text}</p></div></div>)}
        </div>
      </section>

      <section id="planifier" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="mb-10 max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#b45b34]">Préparez sereinement</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Tout ce qu&apos;il faut, au bon moment.</h2></div>
        <div className="space-y-6"><RouteSearch /><CostCalculator /></div>
      </section>

      <section className="bg-[#e8efe7] py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="mb-10 max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#b45b34]">En route</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Les repères qui comptent.</h2></div><div className="space-y-6"><PrayerWidget /><ServicesMap /><NewsFeed /></div></div>
      </section>

      <footer className="bg-[#123d37] px-5 py-10 text-center text-sm text-white/65">RME Voyage — Votre compagnon de route entre l&apos;Europe et le Maroc.</footer>
    </main>
  );
}
