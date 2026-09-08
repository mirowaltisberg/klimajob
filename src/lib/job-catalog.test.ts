import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import { getIndexableJobListings, getJobListingById } from "./job-catalog";
import type { DbRow } from "./scraped-jobs";

function row(slug: string, ageDays = 0): DbRow {
  const jobUrl = `https://jobs.example.ch/${slug}`;
  return {
    id: `scraped-klima-${createHash("md5").update(jobUrl).digest("hex").slice(0, 12)}`,
    title: "Kältesystem-Monteur EFZ",
    company: slug,
    location: "Zürich",
    type: "Festanstellung",
    workload: "100%",
    description: "Quellenangaben zur verifizierten Stelle",
    date_posted: new Date(Date.now() - ageDays * 86_400_000).toISOString().slice(0, 10),
    is_new: false,
    is_urgent: false,
    salary: "",
    job_url: jobUrl,
    source: "indeed",
    is_remote: false,
  };
}

test("Sitemap-Inventar verwirft entfernte und abgelaufene Stellen trotz warmer Katalog-Caches", async (t) => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://catalog-test.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "catalog-test-key";
  const previous = row("vorher");
  const current = row("aktuell");
  const expired = row("abgelaufen", 36);
  let rows = [previous];
  let listRequests = 0;
  t.mock.method(globalThis, "fetch", async (input: string | URL | Request) => {
    const url = new URL(typeof input === "string" ? input : input instanceof URL ? input : input.url);
    assert.equal(url.hostname, "catalog-test.supabase.co");
    assert.equal(url.pathname, "/rest/v1/jobs");
    const id = url.searchParams.get("id")?.replace(/^eq\./, "");
    if (!id) listRequests += 1;
    const data = id ? rows.find((job) => job.id === id) ?? null : rows;
    return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
  });

  assert.deepEqual((await getIndexableJobListings()).map((job) => job.id), [previous.id]);
  // Der Import ändert sich vor Ablauf der beiden In-Prozess-Caches.
  rows = [current, expired];
  const indexable = await getIndexableJobListings();
  assert.deepEqual(indexable.map((job) => job.id), [current.id]);
  assert.equal(listRequests, 2);
  for (const job of indexable) {
    assert.equal((await getJobListingById({ id: job.id }))?.id, job.id);
  }
  assert.equal(await getJobListingById({ id: previous.id }), null);
  assert.equal(await getJobListingById({ id: expired.id }), null);
});
