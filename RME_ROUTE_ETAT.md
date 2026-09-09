# RME Route — état maître

Date : 2026-09-09 (Audit pre-deployment complété)

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

## ✅ Production-Ready
- [x] Code compile (TypeScript strict)
- [x] Aucun secret en git
- [x] Pas de prix/horaires fictifs sans disclaimer
- [x] API routes server-side prêtes
- [x] Env vars documentés (.env.example)
- [x] .gitignore complet
- [x] Documentation déploiement complète

## ⚠️ Encore non fait (v1.0.0 → v1.1.0)
- Géocodage réel et autocomplétion
- Routing multi-alternatives de production
- Péages fiables par pays
- Prix carburant temps réel
- Ferries temps réel
- Carte MapLibre/POI
- GPS/Qibla/prière dynamiques par position
- Signalements communautaires Supabase
- PWA/offline robuste (Service Worker)
- Authentification/anti-spam/modération
- Analytics + tracking conformité
- **CI GitHub et tests automatisés** ← HIGH PRIORITY
- **Rate limiting sur API** ← HIGH PRIORITY
- **CORS/CSP headers** ← HIGH PRIORITY

## 🚀 Prochaines étapes immédiates
1. Merger branch `production-ready` en `main`
2. Déployer en web (Vercel recommandé)
3. Tester 1 semaine en beta
4. Implémenter GitHub Actions + tests (blocking)
5. Ajouter monitoring (Sentry, analytics)

## 📋 Règles de travail multi-IA (UPDATED)
1. Lire ce fichier avant toute modification
2. Ne jamais prétendre qu'une intégration externe est active sans preuve
3. Ne jamais committer de secret (utiliser .env.example)
4. Une modification = un commit clair avec message explicite
5. Toute modification importante doit mettre à jour ce fichier
6. En cas de conflit entre une proposition et le code réel, le code + tests font foi
7. PRs doivent être revues avant merge
8. Production deployments require passing CI (à implémenter)

## 📊 Version History
- **v0.1.0** (2026-09-08) — Initial consolidation
- **v1.0.0** (2026-09-09) — Production-ready + audit complet
- **v1.1.0** (TBD) — Real APIs + mobile + testing