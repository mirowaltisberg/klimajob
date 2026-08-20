import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  assertDirectHireOpportunity,
  buildDirectHireOpportunities,
  serializeDirectHireOpportunity,
} from "./direct-hire-opportunities";
import { assertNoForbiddenPublicFields } from "./public-job-boundary";

for (const [realCount, expected] of [[0, 12], [1, 11], [11, 1], [12, 0], [999, 0]]) {
  test(`fills ${realCount} visible real rows with ${expected} controlled opportunities`, () => {
    assert.equal(buildDirectHireOpportunities({ visibleRealCount: realCount }).length, expected);
  });
}

test("uses controlled trade roles and validated preferences for strange input", () => {
  const opportunities = buildDirectHireOpportunities({
    visibleRealCount: 0,
    q: '<script>alert("arbeitgeber")</script> 🧯',
    loc: "Zürich 🚀 <img src=x>",
    type: "CEO<script>",
    workload: "999-1000%",
    remote: "true",
  });

  assert.equal(opportunities.length, 12);
  assert.ok(opportunities.every((item) => item.location === "Schweiz"));
  assert.ok(opportunities.every((item) => item.preferenceSummary === "Region Schweiz · Remote bevorzugt"));
  assert.equal(JSON.stringify(opportunities).includes("<script>"), false);
  assert.equal(JSON.stringify(opportunities).includes("999"), false);
});

test("generates deterministic unique non-vacancy IDs and a separate safe DTO", () => {
  const preferences = {
    visibleRealCount: 1,
    q: "Kältesystem-Monteur EFZ",
    loc: "Zürich, ZH",
    type: "Festanstellung",
    workload: "80-100%",
    remote: "false" as const,
  };
  const first = buildDirectHireOpportunities(preferences);
  const second = buildDirectHireOpportunities(preferences);

  assert.deepEqual(first, second);
  assert.equal(new Set(first.map((item) => item.id)).size, first.length);
  assert.ok(first.every((item) => item.id.startsWith("direct-hire-klima-")));
  assert.ok(first.every((item) => !/^scraped-klima-[0-9a-f]{12}$/.test(item.id)));
  assert.ok(first.every((item) => item.location === "Zürich, ZH"));
  assert.ok(first.every((item) => item.preferenceSummary === "Region Zürich, ZH · Festanstellung · Pensum 80–100% · Arbeit vor Ort bevorzugt"));
  assert.ok(first.every((item) => item.disclosure === "Keine konkrete offene Stelle"));

  for (const opportunity of first) {
    const serialized = serializeDirectHireOpportunity(opportunity);
    assertDirectHireOpportunity(serialized);
    assertNoForbiddenPublicFields(serialized, "DirectHireOpportunity");
    assert.equal(serialized.contactHref.includes("/jobs/"), false);
    assert.equal(Object.hasOwn(serialized, "salary"), false);
    assert.equal(Object.hasOwn(serialized, "employer"), false);
    assert.equal(Object.hasOwn(serialized, "source"), false);
    assert.equal(Object.hasOwn(serialized, "datePosted"), false);
  }
});

test("rejects unreviewed fields at the direct-hire boundary", () => {
  const opportunity = buildDirectHireOpportunities({ visibleRealCount: 11 })[0];
  assert.throws(
    () => assertDirectHireOpportunity({ ...opportunity, salary: "CHF 9'999" } as typeof opportunity),
    /unreviewed field/,
  );
});

test("keeps opportunities outside real-job schema, URL, sitemap, and application flows", () => {
  const homepagePath = new URL("../app/_components/homepage-search.tsx", import.meta.url);
  const pagePath = new URL("../app/page.tsx", import.meta.url);
  const apiPath = new URL("../app/api/jobs/route.ts", import.meta.url);
  const sitemapPath = new URL("../app/sitemap.ts", import.meta.url);
  const catalogPath = new URL("./job-catalog.ts", import.meta.url);
  const homepage = readFileSync(homepagePath, "utf8");
  const page = readFileSync(pagePath, "utf8");
  const api = readFileSync(apiPath, "utf8");
  const sitemap = readFileSync(sitemapPath, "utf8");
  const catalog = readFileSync(catalogPath, "utf8");

  assert.ok(homepage.indexOf("jobs.map") < homepage.indexOf("directHireOpportunities.map"));
  assert.match(homepage, /data-nosnippet/);
  assert.equal(homepage.includes("`/jobs/${opportunity.id}`"), false);
  assert.equal(homepage.includes("ApplyModal"), false);
  assert.match(page, /initialData\.jobs\.map/);
  assert.equal(page.includes("directHireOpportunities.map"), false);
  assert.match(api, /jobs: result\.jobs\.map\(serializePublicJob\)/);
  assert.match(api, /directHireOpportunities: result\.directHireOpportunities\.map\(serializeDirectHireOpportunity\)/);
  assert.match(catalog, /visibleRealCount = Math\.min\(total, normalized\.offset \+ paged\.length\)/);
  assert.equal(homepage.match(/setDirectHireOpportunities\(data\.directHireOpportunities \?\? \[\]\)/g)?.length, 1);
  assert.equal(sitemap.includes("directHire"), false);
});
