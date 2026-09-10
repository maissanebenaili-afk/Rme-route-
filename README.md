# RME Route — assistant de mobilité RME centré Maroc

`RME` signifie `Ressortissants Marocains à l'Étranger`.

Le dépôt porte un MVP web/mobile-first orienté préparation de voyage diaspora autour du Maroc. L'objectif est de proposer un assistant sérieux et original pour les trajets Europe ↔ Maroc, sans imiter la copie, le design ou les promesses de produits propriétaires de navigation.

## Positionnement actuel

Le produit aide aujourd'hui à :
- cadrer un trajet RME vers le Maroc ;
- orienter une réservation ferry/avion uniquement quand un partenaire réel est configuré ;
- estimer un budget voiture + péages + ferry ;
- structurer des sections utiles autour des arrêts, de la famille, des traversées, des repères communautaires et de l'assistance.

Le produit **ne prétend pas** aujourd'hui fournir :
- un guidage routier temps réel complet ;
- des alertes officielles ou gouvernementales ;
- des partenariats institutionnels actifs ;
- une communauté live non modérée ;
- des prix, horaires ou disponibilités inventés.

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

## Architecture produit
- Next.js App Router + TypeScript + Tailwind
- API server-side pour les secrets d'affiliation et le proxy AlAdhan
- Structure de contenu RME réutilisable pour d'autres diasporas plus tard
- Capacitor préparé pour une future app mobile

## Ce qui reste à brancher ou produire
- routing, géocodage et alternatives réelles ;
- données ports/frontières/POI validées ;
- modération et backend pour les contributions communautaires ;
- tableaux de bord administratifs et workflows institutionnels ;
- assets Android / Play Store / app stores ;
- conformité, analytics, CI, monitoring et sécurité opérationnelle plus larges.

## Principes non négociables
- Aucun secret dans le client.
- Aucune donnée fictive présentée comme temps réel.
- Aucune revendication d'accord officiel sans réalité contractuelle.
- Le dépôt GitHub reste la source de vérité du code.
