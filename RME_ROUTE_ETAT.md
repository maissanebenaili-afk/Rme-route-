# RME Route — état maître

Date : 2026-09-09 (pivot produit RME Maroc-first)

## Source de vérité
Le dépôt GitHub est la source de vérité technique. Les modifications doivent :
- Partir de ce dépôt
- Produire des commits/PRs identifiables
- Mettre à jour ce fichier

## ✅ Consolidé
- Base MVP : préparation trajet + budget + prières + services + orientation affiliation
- Positionnement clarifié : `RME = Ressortissants Marocains à l'Étranger`
- **NEW:** Landing et architecture de sections recentrées sur l'assistance diaspora Maroc
- **NEW:** Scaffolding produit pour préparation, famille, traversées, repères communautaires et assistance
- **NEW:** Structure réutilisable pour future déclinaison Algérie sans brouiller la priorité Maroc
- **NEW:** Documentation produit réécrite pour un MVP ambitieux mais honnête

## ✅ Ce que le MVP montre honnêtement
- [x] Assistant de préparation RME Maroc-first
- [x] Estimateur de budget voiture / péages / ferry
- [x] Prières via proxy AlAdhan
- [x] Orientation vers liens affiliés uniquement si réellement configurés
- [x] Sections éditoriales utiles sans faux temps réel ni faux social
- [x] Mention explicite des limites actuelles

## ⚠️ Encore non fait (prochaines itérations)
- Routing et géocodage temps réel
- Carte POI réelle et filtres dynamiques
- Prix carburant / péages / ferries fiables en direct
- Données ports/frontières validées et maintenues
- Signalements communautaires avec modération, anti-spam et backend
- Tableau de bord admin / institutionnel
- Tests automatisés plus larges, CI GitHub, analytics et monitoring
- Conformité store, assets mobiles et publication Android

## 🚀 Prochaines étapes produit
1. Brancher les sources réelles les plus prioritaires (routing, ports/ferries, POI)
2. Définir la gouvernance des contenus et des remontées communautaires
3. Ajouter backend, modération et administration
4. Préparer la publication Android et la présentation institutionnelle
5. Étendre ensuite le modèle à d'autres communautés pertinentes

## 📋 Règles de travail multi-IA
1. Ne jamais prétendre qu'une intégration externe est active sans preuve
2. Ne jamais committer de secret (utiliser .env.example)
3. Une modification = un commit clair avec message explicite
4. Toute modification importante doit mettre à jour ce fichier
5. En cas de conflit entre une proposition et le code réel, le code + tests font foi
6. Les PRs doivent être revues avant merge

## 📊 Version History
- **v0.1.0** (2026-09-08) — Initial consolidation
- **v1.0.0** (2026-09-09) — Production-ready + audit complet
- **v1.1.0** (2026-09-09) — Pivot RME assistance diaspora Maroc-first
