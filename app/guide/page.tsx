import Link from "next/link";
import {
  ArrowRight,
  BadgeEuro,
  BellRing,
  Download,
  Route,
  ShieldCheck,
  Ticket,
} from "lucide-react";

const pillars = [
  {
    icon: Route,
    title: "Organiser",
    text: "Itinéraire, budget et étapes utiles avant le départ.",
  },
  {
    icon: Ticket,
    title: "Comparer",
    text: "Ferry et vols via des partenaires affichés en toute transparence.",
  },
  {
    icon: BellRing,
    title: "Rester informé",
    text: "Un espace dédié aux alertes voyage, publié uniquement à partir de sources vérifiées.",
  },
];

export const metadata = {
  title: "MRE Route | Préparer son voyage vers le Maroc",
  description:
    "Comparez, planifiez et voyagez plus sereinement entre l’Europe et le Maroc.",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-slate-950">
      <header className="border-b border-emerald-950/10 bg-[#073b34] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            MRE Route
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-950 hover:bg-emerald-100"
          >
            Utiliser l&apos;app
          </Link>
        </div>
      </header>
      <section className="overflow-hidden bg-[#073b34] px-5 pb-24 pt-14 text-white sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[.18em] text-amber-300">
              Le guide de route des MRE
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight sm:text-7xl">
              Partir au Maroc, sans laisser votre budget au hasard.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
              MRE Route vous aide à organiser le trajet, comparer vos options et
              garder les informations pratiques au même endroit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-extrabold text-emerald-950 hover:bg-amber-200"
              >
                <Download size={18} /> Ouvrir l&apos;application
              </Link>
              <a
                href="#comparer"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-bold hover:bg-white/10"
              >
                Comparer mon voyage
              </a>
            </div>
            <p className="mt-5 text-sm text-emerald-100">
              Gratuit à utiliser. Certaines redirections peuvent être des liens
              affiliés, signalés avant toute réservation.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#0e5148] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <p className="font-bold text-amber-200">
              Votre départ, en 3 minutes
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "Indiquez votre départ et votre arrivée",
                "Estimez carburant, péages et ferry",
                "Comparez les options puis réservez chez le partenaire",
              ].map((item, index) => (
                <li className="flex gap-4" key={item}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 font-black text-emerald-950">
                    {index + 1}
                  </span>
                  <span className="pt-1 font-medium text-emerald-50">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[.18em] text-emerald-700">
          Un réflexe avant de partir
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Moins de recherches, plus de certitudes.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article
              className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm"
              key={title}
            >
              <Icon size={30} className="text-emerald-700" />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="comparer" className="bg-emerald-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-7 shadow-lg sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[.18em] text-emerald-700">
                Comparateur utile
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Votre budget devient une décision, pas une surprise.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Utilisez le calculateur puis comparez les traversées et vols
                disponibles. Les prix, disponibilités et conditions finales sont
                toujours ceux du partenaire.
              </p>
              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800"
              >
                <BadgeEuro size={18} /> Calculer mon trajet{" "}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-3xl bg-amber-50 p-7">
              <ShieldCheck className="text-emerald-700" size={34} />
              <h3 className="mt-5 text-xl font-black">
                Monétisation transparente
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                MRE Route peut recevoir une commission lorsqu’une réservation
                est réalisée auprès d’un partenaire. Cela ne modifie pas le prix
                indiqué par ce partenaire.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[.18em] text-amber-300">
              Infos & actualités
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Ce qui compte avant de prendre la route.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Formalités, conditions des transporteurs, circulation et conseils
              de voyage : cette rubrique sera alimentée par des sources
              officielles vérifiées.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <BellRing className="text-amber-300" size={30} />
            <h3 className="mt-5 text-xl font-black">
              Aucune actualité inventée
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Les sujets politiques ou d’actualité ne seront affichés qu’avec
              une source, une date et un lien de référence. Activez cette partie
              après connexion de flux éditoriaux vérifiés.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-amber-300 px-7 py-14 text-center text-emerald-950 sm:px-12">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Votre prochain trajet commence ici.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Préparez votre voyage Europe ↔ Maroc avec MRE Route.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-7 py-3 font-bold text-white hover:bg-emerald-900"
          >
            Commencer gratuitement <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
