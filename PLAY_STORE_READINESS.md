# MRE Route — préparation Android Play Store

## Ce que ce dépôt couvre maintenant

- Build Next.js de production validé.
- Lint non interactif configuré.
- Tests Jest existants conservés et étendus pour les nouveaux cas d'erreur.
- Fallbacks utilisateur plus sûrs pour les horaires de prière et les liens partenaires indisponibles.
- Permission de géolocalisation retirée tant qu'elle n'est pas réellement utilisée.
- Coque Capacitor minimale fournie pour éviter un projet Android vide ou trompeur.
- Page `/privacy` ajoutée comme base honnête pour la politique de confidentialité publiée.

## Contraintes importantes

- L'application dépend encore de routes API Next.js côté serveur (`/api/prayer`, `/api/affiliates`).
- En conséquence, la version Android ne doit pas embarquer une exportation statique incomplète.
- Avant de synchroniser Android, il faut déployer l'application web en HTTPS puis définir `CAPACITOR_SERVER_URL`.

## Commandes de préparation

```bash
npm ci
npm run lint
npm run test -- --runInBand
npm run build
CAPACITOR_SERVER_URL=https://votre-domaine.example npx cap add android
CAPACITOR_SERVER_URL=https://votre-domaine.example npm run cap:build
```

## Étapes manuelles restantes avant soumission Play Store

1. Déployer l'application Next.js sur une URL HTTPS stable.
2. Générer le projet natif Android avec `npx cap add android`.
3. Définir l'identifiant d'application final, le nom, les icônes, le splash screen et le versioning Android.
4. Signer l'application avec un keystore de production et activer Play App Signing.
5. Publier la page de confidentialité avec un contact réel et des informations juridiques complètes.
6. Compléter la fiche Google Play : captures, description, catégories, classification du contenu et formulaire sécurité des données.
7. Tester la version release sur appareil Android réel : premier lancement, réseau lent, mode hors ligne, redirections partenaires, retours arrière.
8. Valider que seuls des partenaires réellement approuvés et des données non fictives sont exposés en production.

## Risques encore ouverts

- Les dépendances de production `next`/`postcss` remontent encore un avis de sécurité sans correctif non majeur disponible sur la branche actuelle.
- Aucun pipeline CI complet de release Android n'est encore présent dans le dépôt.
- L'application native chargera une URL distante tant que les routes API resteront nécessaires au produit.
