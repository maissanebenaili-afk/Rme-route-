# RME Route — état maître

Date : 2026-09-11 (Refonte design/UX concours — v1.2.0)

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
- **NEW (v1.2.0) :** Refonte complète du design/UX (identité visuelle RME Voyage, typographie Boska/General Sans, animations framer-motion) — voir section Version History pour le détail

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
- **v1.2.0** (2026-09-11) — Refonte design/UX pour le concours (voir détail ci-dessous)
- **v1.1.0** (TBD) — Real APIs + mobile + testing

### v1.2.0 (2026-09-11) — Refonte design/UX "identité RME Voyage"

**Objectif :** élever le design et l'UX pour le concours national, sans toucher à la logique métier ni au contenu multilingue existant.

**Système de design (`tailwind.config.ts`)**
- Palette de marque : `terracotta` (rouille), `zellige` (bleu profond marocain, utilisé comme fond hero `zellige-800`), `safran` (doré accent CTA), `sable` (neutres crème), chacune en échelle 50–900.
- Typographie distinctive via CDN Fontshare : `font-display` = **Boska** (serif éditorial, titres H1/H2), `font-sans` = **General Sans** (corps de texte), avec fallback `next/font/google` (Inter, Plus Jakarta Sans) et **Amiri** pour l'arabe/RTL.
- Échelle de taille fluide, `borderRadius`, `boxShadow` (`warm`, `warm-lg`, `gold`), `backgroundImage` (`zellige-grid`), animation `marquee`.
- CSP (`middleware.ts`) mise à jour pour autoriser `api.fontshare.com` / `cdn.fontshare.com` (style-src/font-src).

**Pages retravaillées** (contenu et logique inchangés) :
- `app/page.tsx` (accueil) — titres passés en `font-display`, nouvelle hiérarchie visuelle sur le hero zellige.
- `app/decouvrir/page.tsx`, `app/guide/page.tsx`, `app/telecharger/page.tsx` — réécriture visuelle complète (hero zellige, accents safran/terracotta, cartes bordées, disclaimers honnêtes conservés).

**Composants sublimés :**
- `HadakAI.tsx` — animations `framer-motion` : bouton flottant avec halo pulsant et transition d'icône, panneau de chat en `AnimatePresence` (slide + scale spring), bulles de message animées, indicateur de frappe et suggestions rapides animées. Base de connaissances et logique de correspondance multilingue inchangées.
- `JuryPack.tsx` — typographie display, animations d'entrée `whileInView` sur les métriques, libellé CTA reformulé ("Ouvrir l'aperçu de l'app") avec mention explicite que les liens de démonstration ne sont pas garantis actifs (conformité règle n°2 ci-dessus).
- `BookingCards.tsx`, `CostCalculator.tsx`, `InteractiveMap.tsx`, `InteractiveMapWrapper.tsx` — recolorisation complète vers les tokens terracotta/zellige/safran/sable (remplacement des couleurs slate/emerald/blue/orange/purple hors charte). Calculs et logique métier non modifiés.
- `LanguageSwitcher.tsx` — restylé (fond `zellige-800`, ombre `warm-lg`), rendu RTL-aware, et **rendu compact sur mobile** (code langue au lieu du libellé complet) pour corriger un débordement horizontal.
- `TravelWidgets.tsx` — titres de section passés en `font-display` (Météo, Darija, douanes, urgences, calendrier, zakat, fuseau/SIM, carburant).

**Corrections de bugs découverts pendant la QA visuelle (non liées au design pur) :**
- CSP : `connect-src` ne listait pas `https://api.open-meteo.com`, ce qui bloquait silencieusement le widget météo (affichait "Indisponible"). Corrigé — vérifié par une QA sans erreur console CSP.
- Nav mobile (375px) : le bouton "Planifier" débordait de ~30px hors du viewport sur la page d'accueil à cause du `LanguageSwitcher` + CTA trop larges côte à côte. Corrigé (switcher compact, paddings réduits, `whitespace-nowrap`, `shrink-0`) — confirmé 0 débordement horizontal sur les 4 pages (accueil, découvrir, guide, télécharger) en desktop et mobile.

**QA effectuée :**
- `npm run build` passant sans erreur après chaque commit.
- Captures d'écran Playwright desktop (1440px) et mobile (375px) pour les 4 pages, plus captures ciblées HadakAI (ouvert) et JuryPack.
- Aucune régression visuelle détectée après corrections ; RTL arabe/darija vérifié dans HadakAI.

**Rappel de conformité :** aucune intégration externe n'est présentée comme active sans preuve (JuryPack précise que les liens de démo dépendent de la disponibilité de l'hébergement), aucun secret commité, un commit clair par modification (voir historique git).