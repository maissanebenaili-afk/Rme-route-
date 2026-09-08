# RME Route — état maître

Date : 2026-09-08

## Source de vérité
Le dépôt GitHub doit devenir la source de vérité technique. Les autres IA doivent travailler à partir de ce dépôt et produire des commits/PR identifiables.

## Consolidé
- Base commerciale : recherche trajet + cartes ferry/vol + endpoint affiliation.
- Base MVP corrigée : calculateur de coût, prières, services, infos voyage, configuration Capacitor.
- Correction critique : `use client` réparé dans le widget prière.
- Correction d’architecture : suppression de `output: export`, car les routes API server-side ne peuvent pas être embarquées dans un export statique pur.
- Ajout d’un proxy serveur pour AlAdhan.
- Ajout de validation minimale sur l’endpoint affiliation.
- Ajout de `.gitignore`, `.env.example` et README de gouvernance.

## Encore non fait
- Géocodage réel et autocomplétion.
- Routing multi-alternatives de production.
- Péages fiables par pays.
- Prix carburant temps réel.
- Ferries temps réel.
- Carte MapLibre/POI.
- GPS/Qibla/prière dynamiques par position.
- Signalements communautaires Supabase intégrés.
- PWA/offline robuste.
- Authentification/anti-spam/modération.
- Analytics + tracking conformité.
- CI GitHub et tests automatisés.
- Déploiement web et application stores.

## Règle de travail multi-IA
1. Lire ce fichier avant toute modification.
2. Ne jamais prétendre qu’une intégration externe est active sans preuve.
3. Ne jamais committer de secret.
4. Une modification = un commit clair.
5. Toute modification importante doit mettre à jour ce fichier.
6. En cas de conflit entre une proposition IA et le code réellement présent, le code + tests font foi.
