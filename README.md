# klimajob.ch

Independent Swiss job discovery site for vacancies with a clear connection to refrigeration, climate and ventilation technology. The production site is [klimajob.ch](https://klimajob.ch).

## Product rules

- Every public vacancy must come from a real source listing. There is no generated, mock or demo inventory.
- Employer identities, raw descriptions, source URLs and internal source identifiers stay server-side.
- Browser-facing job data is created from a strict allowlist and controlled role profiles.
- Missing, expired, malformed or off-trade job IDs return a real 404.
- Applications are disabled unless the responsible controller and every security dependency are explicitly configured. No automatic employer forwarding is claimed.

## Stack

- Next.js 16, React 19 and Tailwind CSS 4
- Supabase Postgres and private Storage, accessed from server-only code
- Vercel hosting, Analytics and Speed Insights
- Pinned Python JobSpy scraper with secret-free workers and a single guarded publisher

## Local development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

The site fails safely when the server-only Supabase credentials are absent: it does not manufacture replacement vacancies.

## Validation

```bash
npm run lint
npm run build
npm run check:job-safety
npm run check:public-jobs
```

`check:job-safety` verifies TypeScript/Python classifier parity and identity rules. `check:public-jobs` verifies that transformed browser data contains no forbidden employer or source fields.

## Scraper architecture

The scheduled workflow runs five isolated scrape workers. Workers receive no Supabase secret and upload short-lived JSON artifacts. A single publisher then validates the complete snapshot, deduplicates it, enforces absolute and retention thresholds, writes only `trade = klima`, prunes only that trade and verifies the stored count and trade-scoped metadata.

The publisher is intentionally fail-closed. Use `--dry-run` for an offline artifact check. Use `--plan` for aggregate, read-only comparison with the current Klima inventory. Publishing or pruning production rows requires an intentional authorized run.

The Klima snapshot boundary is consistent end to end: scraper, runtime and
publisher all use a 35-day freshness window. A complete five-chunk snapshot
must contain at least 85 validated jobs; this trade-specific floor was
calibrated against a full Swiss matrix and publication fails closed below it.
Worker processes suppress third-party request logging so CI exposes only
aggregate coordinator status and counts.

Before the first authorized publish, apply and verify the reviewed migrations in
`supabase/migrations`, run a complete five-artifact plan, and review its exact
trade-scoped prune count. The scheduled publisher remains disabled unless the
repository variable `KLIMA_PUBLISHING_APPROVED` is explicitly set to `true`;
set it only after that plan and the production change have been approved. The
publisher also checks the trade metadata schema before its first write.

## Applications and privacy

Application intake is off by default. Enabling it requires a verified controller identity, allowed origin, retention and rate-limit settings, a strong IP-hash secret, private Supabase credentials and an approved malware-scanner adapter. The current adapter deliberately returns unavailable, so configuration alone cannot accidentally enable uploads.

Historical application rows and private CV objects are preserved. Do not delete or export them without explicit authorization.
