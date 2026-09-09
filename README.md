# MRE Route — produit voyage diaspora

MRE Route évolue d'un MVP route/travel générique vers une application communautaire de préparation de trajets diaspora entre l'Europe et le pays d'origine.

## Ce que montre cette version

- une page d'accueil orientée communautés diaspora
- un scaffold léger pour plusieurs couloirs (`Maroc`, `Algérie`, `Portugal`, `Roumanie`, `Turquie`, `diasporas africaines`)
- des sections originales pour budget, arrêts utiles, conseils communauté, aides famille et informations pratiques
- une présentation honnête : les ports, frontières, ferries, alertes et recommandations vérifiées ne sont pas présentés comme des flux temps réel tant qu'ils ne sont pas réellement connectés

## Lancer

```bash
npm install
npm run dev
```

Build :

```bash
npm run build
```

Tests :

```bash
npm test
```

## Architecture

- Next.js App Router + TypeScript + Tailwind
- API server-side pour les secrets d'affiliation et AlAdhan
- configuration simple de communautés dans `lib/config.ts`
- Capacitor préparé pour une future app mobile

## Principes produit

- pas de copie de marque, contenu ou parcours d'un concurrent
- pas de secret dans le client
- pas de prix, horaires ou alertes fictifs présentés comme du temps réel
- une seule base produit, extensible par communauté, langue et couloir

## Suites recommandées

1. brancher de vraies sources validées pour cartes, ferries, ports et frontières
2. localiser le contenu par langue et communauté prioritaire
3. ajouter des tests UI supplémentaires autour du sélecteur de communauté et des sections informatives
4. poursuivre la préparation mobile/Play Store quand les données et parcours seront réellement prêts
