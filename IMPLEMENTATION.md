# Autonoma Integration

## Checklist

- [ ] Endpoint `/api/autonoma` with signed discover/up/down handling
- [ ] Factory: `AffiliateLink`
- [ ] Factory: `RouteSearchQuery`
- [ ] Factory: `CostCalculationResult`
- [ ] Factory: `PrayerTimeRequest`
- [ ] Scoped teardown
- [ ] Auth callback with real credentials
- [ ] Maintenance note
- [ ] Full-recipe up/down pass
- [ ] Concurrent-instances proof
- [ ] Clean `sdk check` on `recipe.json`
- [ ] Pushed branch and opened pull request

## Blockers

The application cannot currently be integrated or validated end to end:

- `package.json` contains literal `\\n` sequences and fails `npm install`, `npm test`, and `npm run build` with `EJSONPARSE`.
- The repository has no database schema, ORM/query layer, authentication implementation, or persisted entities. The audited entities are client-side state/calculation results and do not have server-side creation paths.
- The documented `/api/prayer` and `/api/affiliates` routes are absent from the checkout, so the required backend/UI dependency chain cannot run locally.
- The Autonoma SDK adapter documentation endpoint returned HTTP 402, and the installed planner package does not include an adapter or handler API to use offline.

The recipe in `C:\Users\benai\.autonoma\c-users-benai\recipe.json` is a scenario draft only. It has not been marked validated because no endpoint or database exists to execute the required lifecycle checks.