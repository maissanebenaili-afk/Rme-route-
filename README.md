# MRE Route — base GitHub consolidée

MVP mobile-first pour les voyages Europe ↔ Maroc.

## État
Cette version consolide la base commerciale et la base MVP corrigée disponibles au 8 septembre 2026. Elle n’affirme pas que les fournisseurs ferry/vol, péages ou trafic sont déjà connectés.

## Lancer
```bash
npm install
npm run dev
```

Build :
```bash
npm run build
```

## Architecture
- Next.js App Router + TypeScript + Tailwind
- API server-side pour les secrets d’affiliation et AlAdhan
- Capacitor préparé pour une future app mobile
- Les données temps réel doivent provenir de fournisseurs contractuels/validés

## Règles
- Aucun secret dans le client.
- Aucun prix ou horaire fictif présenté comme temps réel.
- Ne pas utiliser `output: export` tant que les routes API server-side font partie du produit web.
- Le dépôt GitHub devient la source de vérité du code.

## Prochaine étape
1. Installer et lancer le build.
2. Corriger les erreurs éventuelles.
3. Brancher géocodage + routing réel.
4. Brancher les partenaires d’affiliation réellement validés.
5. Ajouter tests, sécurité, analytics et CI.
