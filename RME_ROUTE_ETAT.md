# RME Route — état maître

Date : 2026-09-11 (v1.3.0 — CI GitHub Actions, rate limiting, durcissement CORS/CSP)

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
- **NEW (v1.3.0) :** CI GitHub Actions (lint/tests/build), rate limiting in-memory documente sur les routes API sensibles, durcissement CORS/CSP dans `middleware.ts` — voir section Version History pour le détail

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
- ~~CI GitHub et tests automatisés~~ ✅ fait (v1.3.0, voir changelog) — vérifier que la CI est bien verte sur GitHub après merge de la PR
- ~~Rate limiting sur API~~ ✅ fait en v1 in-memory (v1.3.0) — **non distribué**, évolution Upstash/Vercel KV recommandée avant scale multi-instances
- ~~CORS/CSP headers~~ ✅ durci (v1.3.0)

## 🆕 Nouveau suivi (post v1.3.0)
- Rate limiting actuel = Map JS en mémoire par instance : à migrer vers un
  store durable (Upstash Redis / Vercel KV) avant un trafic de production
  significatif sur Vercel serverless (voir commentaire détaillé dans
  `middleware.ts`).

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
- **v1.3.0** (2026-09-11) — CI GitHub Actions + rate limiting + durcissement CORS/CSP (voir détail ci-dessous)
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

### v1.3.0 (2026-09-11) — CI GitHub Actions + rate limiting + durcissement CORS/CSP

**Objectif :** traiter les 3 items HIGH PRIORITY listés ci-dessus, sans changer la logique métier ni le design v1.2.0.

**Contexte / branche `ci-github-actions` :** une branche distante existait déjà
(`origin/ci-github-actions`), issue d'un essai antérieur basé sur le commit
juste avant le merge du design v1.2.0. Son `.github/workflows/ci.yml` et son
`.eslintrc.json` étaient réutilisables tels quels ; en revanche son commit
appliquait aussi un reformatage Prettier complet du dépôt (`format:check`),
qui aurait écrasé/entré en conflit massif avec le design v1.2.0 fraichement
fusionné sur `main`. Cette partie a été sciemment écartée : le travail ci-dessous
repart de `main` (post v1.2.0) et ne reprend que le workflow CI + la config
ESLint.

**1. CI GitHub Actions (`.github/workflows/ci.yml`)**
- Nouveau workflow sur `push`/`pull_request` vers `main` : `npm ci`, puis
  `npm run lint`, `npm run test`, `npm run build`.
- Ajout `.eslintrc.json` (`next/core-web-vitals`) : `main` n'avait aucune
  config ESLint, ce qui rendait `next lint` interactif (bloquant en CI).
- Ajout `eslint@8` + `eslint-config-next` en devDependencies (requis par
  `next lint` avec Next 15 ; leur absence provoquait une erreur
  "Unknown options" avec une version d'ESLint résolue globalement).

**2. Rate limiting (`middleware.ts`, `app/api/affiliates`, `app/api/prayer`)**
- Implémentation in-memory (fenêtre glissante simple, `Map` JS par IP +
  chemin), appliquée spécifiquement aux deux routes API listées (au lieu de
  toutes les routes `/api/*` précédemment).
- **Limite explicitement documentée en commentaire dans le code :** ce
  stockage est local à l'instance du process. Ce n'est **pas** une solution
  distribuée : sur Vercel serverless, des instances différentes ne partagent
  pas cette `Map`, donc la limite globale peut être dépassée si le trafic est
  réparti sur plusieurs instances. Suffisant pour une v1 (anti-abus basique),
  mais **évolution recommandée vers un store durable partagé** (Upstash Redis
  via `@upstash/ratelimit`, ou Vercel KV) avant un trafic de production
  significatif.

**3. CORS / CSP (`middleware.ts`)**
- CORS : ajout d'une whitelist explicite d'origines pour les routes `/api/*`
  (domaines connus de l'app + `NEXT_PUBLIC_APP_URL` optionnel, `localhost`
  uniquement hors production). Toute origine non listée ne reçoit aucun
  header `Access-Control-Allow-Origin` (vérifié manuellement). Gestion de la
  requête preflight `OPTIONS` directement dans le middleware.
- CSP : retrait de `unsafe-eval` (non utilisé par le code de l'app), ajout de
  `frame-ancestors 'none'` et `object-src 'none'`. `X-Frame-Options: DENY`
  et les autres en-têtes (`X-Content-Type-Options`, HSTS, `Referrer-Policy`,
  `Permissions-Policy`) sont conservés.

**Vérifications effectuées avant la PR :**
- `npm install`, `npm run lint`, `npm run test` (29/29, dont un nouveau
  fichier `__tests__/middleware.test.ts`), `npm run build` : tous passants.
- Test manuel avec le serveur de prod local (`npm run build && npm run
  start`) : origine autorisée → CORS + CSP durcie présents ; origine non
  autorisée → pas de header CORS ; `OPTIONS` → 204 ; 31e requête/minute sur
  `/api/prayer` depuis la même IP → 429 avec `Retry-After`.
- Correction incidente découverte pendant la stabilisation des tests : un
  test (`homeBranding.test.tsx`) attendait un ancien texte remplacé par le
  design v1.2.0, et `IntersectionObserver` (utilisé par `framer-motion` dans
  `JuryPack`) n'était pas mocké dans l'environnement jsdom — les deux ont été
  corrigés pour que `npm run test` passe sans erreur.

**Rappel de conformité :** le rate limiting n'est à aucun moment présenté
comme une solution distribuée/robuste multi-instances ; aucun secret commité ;
commits incrémentaux et ciblés (voir historique git de la branche
`opt/ci-et-securite`).