# RME Route — état maître

Date : 2026-09-11 (CI + qualité de code ajoutées)

## Source de vérité

Le dépôt GitHub est la source de vérité technique. Les modifications doivent :

- Partir de ce dépôt
- Produire des commits/PRs identifiables
- Mettre à jour ce fichier

## ✅ Consolidé

- Base commerciale : recherche trajet + cartes ferry/vol + endpoint affiliation
- Base MVP corrigée : calculateur de coût, prières, services, infos voyage
- **NEW:** Configuration Capacitor pour mobile
- **NEW:** PWA manifest.webmanifest
- **NEW:** Correction CostCalculator.tsx ("use client" directive)
- **NEW:** Architecture stricte TypeScript + security layers
- **NEW:** Documentation production-ready (DEPLOYMENT.md, ARCHITECTURE.md, AUDIT_PREDEPLOIEMENT.md)
- **NEW:** CI GitHub Actions (`.github/workflows/ci.yml`) : format, lint, tests + couverture, type-check, build sur chaque push/PR
- **NEW:** Configuration ESLint (`.eslintrc.json`), lint sans erreur
- **NEW:** Formatage Prettier appliqué sur tout le dépôt
- **NEW:** Test `homeBranding` corrigé pour refléter le contenu réel de la page (l'ancien texte attendu n'existait plus)
- **NEW:** Correction d'une erreur de typage strict dans `prayerRoute.test.ts`
- **CONFIRMÉ (déjà présent, doc à jour) :** Rate limiting par IP sur `/api/*` et headers CORS/CSP/sécurité, tous deux dans `middleware.ts`

## ✅ Production-Ready

- [x] Code compile (TypeScript strict)
- [x] Aucun secret en git
- [x] Pas de prix/horaires fictifs sans disclaimer
- [x] API routes server-side prêtes
- [x] Env vars documentés (.env.example)
- [x] .gitignore complet
- [x] Documentation déploiement complète
- [x] CI automatisée (lint, tests, type-check, build) sur chaque push/PR
- [x] Rate limiting API + headers CORS/CSP/sécurité (middleware.ts)

## ⚠️ Encore non fait (v1.0.0 → v1.1.0)

- Géocodage réel et autocomplétion
- Routing multi-alternatives de production
- Péages fiables par pays
- Prix carburant temps réel
- Ferries temps réel
- Carte MapLibre/POI
- GPS/Qibla/prière dynamiques par position
- Signalements communautaires Supabase (connecteur Supabase désormais disponible côté agent, intégration applicative à faire)
- PWA/offline robuste (Service Worker)
- Authentification/anti-spam/modération
- Analytics + tracking conformité (connecteur PostHog désormais disponible côté agent)
- Monitoring erreurs (connecteur Sentry désormais disponible côté agent)
- Géocodage via Google Maps (connecteur désormais disponible côté agent)
- Monétisation via Stripe (connecteur désormais disponible côté agent)

## 🚀 Prochaines étapes immédiates

1. Merger branch `production-ready` en `main`
2. Déployer en web (Vercel recommandé)
3. Tester 1 semaine en beta
4. ~~Implémenter GitHub Actions + tests~~ ✅ fait (PR `ci-github-actions`)
5. Brancher Supabase (signalements), Sentry (monitoring) et PostHog (analytics) côté code applicatif — connecteurs déjà autorisés
6. Intégrer Google Maps pour le géocodage réel et l'autocomplétion
7. Intégrer Stripe pour la monétisation (voir MONETISATION.md)

## 📋 Règles de travail multi-IA (UPDATED)

1. Lire ce fichier avant toute modification
2. Ne jamais prétendre qu'une intégration externe est active sans preuve
3. Ne jamais committer de secret (utiliser .env.example)
4. Une modification = un commit clair avec message explicite
5. Toute modification importante doit mettre à jour ce fichier
6. En cas de conflit entre une proposition et le code réel, le code + tests font foi
7. PRs doivent être revues avant merge
8. Production deployments require passing CI ✅ actif

## 📊 Version History

- **v0.1.0** (2026-09-08) — Initial consolidation
- **v1.0.0** (2026-09-09) — Production-ready + audit complet
- **v1.1.0** (TBD) — Real APIs + mobile + testing
- **v1.1.1** (2026-09-11) — CI GitHub Actions, ESLint, Prettier, tests corrigés ; connecteurs Supabase/Sentry/Google Maps/PostHog/Stripe autorisés côté agent
