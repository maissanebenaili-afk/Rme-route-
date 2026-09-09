# Autonoma Integration

## Checklist

- [x] Endpoint `/api/autonoma` with signed discover/up/down handling implemented and wrong signatures rejected
- [x] Factory: `AffiliateLink`
- [x] Factory: `RouteSearchQuery`
- [x] Factory: `CostCalculationResult`
- [x] Factory: `PrayerTimeRequest`
- [x] Scoped teardown by refs token
- [x] Auth callback: not applicable because the app has no authentication system
- [x] Maintenance note
- [x] Full-recipe up/down pass with the local CLI
- [x] Concurrent-instances proof with `--repeat 3`
- [x] Clean `sdk check` on `recipe.json`
- [x] Pushed branch; PR opening remains unavailable because `gh` is not installed

## Current validation

- `npm install` succeeds after repairing the malformed manifest.
- `npm test -- --runInBand` passes: 17 tests.
- `npm run build` passes and compiles `/api/autonoma`, `/api/affiliates`, and `/api/prayer`.
- Signed CLI validation passed locally with a process-only random secret; no secret was hardcoded or committed.

## Blockers

The recipe in `C:\Users\benai\.autonoma\c-users-benai\recipe.json` passes `sdk check` and the local lifecycle/concurrency checks. The current handler stores seeded records in process memory because this application has no database schema; a real `AUTONOMA_SHARED_SECRET` must also be provisioned in the runtime environment before deployment.