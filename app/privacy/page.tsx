export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border bg-white p-6 shadow-sm">
        <header className="space-y-2">
          <h1 className="text-3xl font-black text-emerald-800">Confidentialité et publication Play Store</h1>
          <p className="text-sm text-slate-600">
            Cette page décrit l&apos;état actuel du dépôt. Elle sert de base honnête avant une
            publication Android et ne remplace pas une revue juridique.
          </p>
        </header>

        <section className="space-y-2 text-sm text-slate-700">
          <h2 className="text-lg font-bold text-slate-900">Données traitées aujourd&apos;hui</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Les recherches de trajet saisies dans l&apos;interface restent locales à la session du navigateur.</li>
            <li>Les horaires de prière sont récupérés via la route serveur <code>/api/prayer</code>, qui interroge le service tiers AlAdhan.</li>
            <li>Les redirections d&apos;affiliation ne sont utilisées que lorsqu&apos;un partenaire validé est configuré côté serveur.</li>
            <li>Le site intègre Vercel Speed Insights pour les mesures de performance de déploiement.</li>
          </ul>
        </section>

        <section className="space-y-2 text-sm text-slate-700">
          <h2 className="text-lg font-bold text-slate-900">Permissions Android</h2>
          <p>
            Le dépôt ne demande pas actuellement la localisation de l&apos;appareil. Le plugin
            geolocation a été retiré de la configuration prête à publier tant qu&apos;une fonctionnalité
            claire, documentée et testée n&apos;en dépend pas.
          </p>
          <p>
            Si une future version ajoute des services proches ou des horaires locaux, la demande de
            permission devra être expliquée dans l&apos;application, dans la fiche Play Store et dans une
            politique de confidentialité finale publiée sur une URL publique.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-700">
          <h2 className="text-lg font-bold text-slate-900">Travail manuel restant avant soumission</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Publier cette politique sur une URL de production durable.</li>
            <li>Ajouter une adresse de contact et un responsable de traitement valides.</li>
            <li>Décrire précisément les partenaires, l&apos;hébergement et la conservation des données réellement utilisés.</li>
            <li>Compléter les formulaires Google Play sur la sécurité des données et les permissions.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
