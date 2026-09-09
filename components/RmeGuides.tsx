import {
  GUIDE_SECTIONS,
  READINESS_NOTES,
  SUPPORT_ACTIONS,
} from "@/lib/rmeContent";

export default function RmeGuides() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Parcours d'assistance RME</h2>
            <p className="mt-1 max-w-3xl text-sm text-slate-600">
              Une structure produit orientée diaspora: préparation, route,
              traversée, famille, conseils pratiques et assistance utile autour
              d'un trajet Maroc-centrique.
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Guide éditorial, pas flux temps réel
          </span>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {GUIDE_SECTIONS.map((section) => (
            <article key={section.id} className="rounded-2xl border border-slate-200 p-4">
              <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{section.description}</p>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <div key={item.title} className="rounded-xl bg-slate-50 p-3">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.4fr,1fr]">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold">Assistance et contacts utiles</h2>
          <p className="mt-1 text-sm text-slate-600">
            Sans prétendre remplacer un service public ou un centre d'appel, le
            produit peut déjà aider chaque famille RME à partir avec un plan de
            secours clair.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {SUPPORT_ACTIONS.map((action) => (
              <li key={action} className="rounded-xl bg-slate-50 p-3">
                {action}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-slate-900 p-5 text-white shadow-sm">
          <h2 className="text-xl font-bold">Readiness MVP</h2>
          <div className="mt-4 space-y-3">
            {READINESS_NOTES.map((note) => (
              <div key={note.title} className="rounded-xl bg-white/10 p-3">
                <div className="text-sm font-semibold">{note.title}</div>
                <p className="mt-1 text-sm text-slate-100">{note.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
