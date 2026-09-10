import Link from 'next/link';
import { ArrowRight, CalendarCheck, CircleDollarSign, MapPinned, ShipWheel } from 'lucide-react';

const features = [
  {
    icon: MapPinned,
    title: 'Préparez votre trajet',
    text: 'Organisez votre voyage entre l’Europe et le Maroc en un seul endroit.',
  },
  {
    icon: CircleDollarSign,
    title: 'Estimez votre budget',
    text: 'Comparez les options de transport et anticipez les principaux coûts.',
  },
  {
    icon: ShipWheel,
    title: 'Ferry, avion et route',
    text: 'Retrouvez les informations utiles pour choisir la solution adaptée à votre voyage.',
  },
  {
    icon: CalendarCheck,
    title: 'Voyagez sereinement',
    text: 'Accédez aux services, horaires de prière et informations pratiques pendant votre trajet.',
  },
];

export const metadata = {
  title: 'Découvrir RME Route',
  description: 'La plateforme pour préparer vos trajets entre l’Europe et le Maroc.',
};

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" className="text-lg font-black tracking-tight">
          RME Route
        </Link>
        <Link
          href="/telecharger"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
        >
          Ouvrir l&apos;application
        </Link>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pt-24">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Europe ↔ Maroc
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Votre voyage vers le Maroc, mieux préparé.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            RME Route rassemble les outils essentiels pour planifier votre itinéraire, estimer votre
            budget et retrouver les services utiles sur la route.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300"
            >
              Préparer mon voyage <ArrowRight size={18} />
            </Link>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
            >
              Découvrir le service
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/25 to-slate-900 p-7 shadow-2xl shadow-emerald-950/40 sm:p-9">
          <p className="text-sm font-bold text-emerald-200">Un seul point de départ</p>
          <div className="mt-7 space-y-5">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-slate-300">Itinéraire</p>
              <p className="mt-1 text-xl font-bold">Europe → Maroc</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Transport</p>
                <p className="mt-1 font-bold">Comparé</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Budget</p>
                <p className="mt-1 font-bold">Estimé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Pensé pour votre trajet
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Les informations utiles, sans multiplier les outils.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-slate-200 p-7">
                <Icon className="text-emerald-700" size={28} />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-emerald-400 px-7 py-12 text-center text-slate-950 sm:px-12">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Prêt à organiser votre voyage ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            Accédez à RME Route et commencez votre préparation dès maintenant.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800"
          >
            Ouvrir l&apos;application <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        RME Route — Informations indicatives. Vérifiez les conditions des transporteurs avant le
        départ.
      </footer>
    </main>
  );
}
