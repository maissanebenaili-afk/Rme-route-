# Autonoma Integration

## Checklist

- [x] Endpoint `/api/autonoma` with signed discover/up/down handling implemented
- [x] Factory: `AffiliateLink`
- [x] Factory: `RouteSearchQuery`
- [x] Factory: `CostCalculationResult`
- [x] Factory: `PrayerTimeRequest`
- [x] Scoped teardown by refs token
- [ ] Auth callback with real credentials
- [x] Maintenance note
- [ ] Full-recipe up/down pass
- [ ] Concurrent-instances proof
- [x] Clean `sdk check` on `recipe.json`
- [ ] Pushed branch and opened pull request

## Current validation

- `npm install` succeeds after repairing the malformed manifest.
- `npm test -- --runInBand` passes: 17 tests.
- `npm run build` passes and compiles `/api/autonoma`, `/api/affiliates`, and `/api/prayer`.
- Signed CLI validation is blocked because `AUTONOMA_SHARED_SECRET` is not present in the current environment. No secret was hardcoded or committed.

## Blockers

The recipe in `C:\Users\benai\.autonoma\c-users-benai\recipe.json` passes `sdk check`, but full lifecycle validation remains pending. The current handler stores seeded records in process memory because this application has no database schema or authentication system; production-grade persistence and real auth credentials still need to be added before treating the integration as complete.