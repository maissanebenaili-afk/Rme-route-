const guidanceNotes = [
  {
    title: "Veille pratique avant départ",
    body: "Vérifiez vos réservations, documents, horaires d'embarquement, météo et conditions de circulation sur des sources réellement disponibles avant de partir.",
  },
  {
    title: "Cadre communauté",
    body: "Les conseils communautaires affichés ici doivent rester éditorialisés ou modérés. Aucun faux fil social n'est simulé dans ce MVP.",
  },
  {
    title: "Perspective institutionnelle",
    body: "Le produit peut ensuite accueillir des messages vérifiés, des tableaux de bord ou des services d'assistance si des partenaires et workflows réels sont mis en place.",
  },
];

export default function NewsFeed() {
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold">Veille, communauté et crédibilité produit</h2>
      <p className="mt-2 text-sm text-slate-600">
        L'application avance comme assistant de mobilité diaspora, pas comme copie
        d'un navigateur propriétaire. Les futures alertes devront venir de
        sources vérifiées ou d'une modération réelle.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {guidanceNotes.map((note) => (
          <div key={note.title} className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">{note.title}</div>
            <p className="mt-1">{note.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
