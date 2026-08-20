import { resolveLocationCoordinate } from "@/lib/location-distance";
import type { RemoteFilter } from "@/lib/job-types";

export const MINIMUM_RESULT_FEED_SIZE = 12;

export interface DirectHireOpportunity {
  kind: "direct-hire-opportunity";
  id: string;
  role: string;
  location: string;
  preferenceSummary: string;
  disclosure: "Keine konkrete offene Stelle";
  description: string;
  ctaLabel: "Interesse an Direktanstellung";
  contactHref: string;
}

interface DirectHirePreferences {
  visibleRealCount: number;
  q?: string;
  loc?: string;
  type?: string;
  workload?: string;
  remote?: RemoteFilter;
}

interface ControlledRole {
  key: string;
  label: string;
  aliases: string[];
}

const CONTROLLED_ROLES: ControlledRole[] = [
  {
    key: "kaeltesystem-montage",
    label: "Kältesystem-Monteur/in",
    aliases: ["kältesystem-monteur", "kaeltesystem-monteur", "kältemonteur", "kaeltemonteur"],
  },
  {
    key: "kaelte-klima-servicetechnik",
    label: "Kälte- und Klimatechniker/in",
    aliases: ["kältetechniker", "kaeltetechniker", "klimatechniker"],
  },
  {
    key: "lueftungs-montage",
    label: "Lüftungsanlagenbauer/in",
    aliases: ["lüftungsanlagenbauer", "lueftungsanlagenbauer", "lüftungsmonteur", "lueftungsmonteur"],
  },
  {
    key: "kaelte-klima-planung",
    label: "Fachplaner/in Kälte/Klima",
    aliases: ["kältesystem-planer", "kaeltesystem-planer", "gebäudetechnikplaner", "gebaeudetechnikplaner", "planer"],
  },
  {
    key: "kaelte-klima-projektleitung",
    label: "Projektleiter/in Kälte/Klima",
    aliases: ["projektleiter", "projektleitung", "bauleiter"],
  },
  {
    key: "kaelte-klima-inbetriebnahme",
    label: "Inbetriebnahmetechniker/in Kälte/Klima",
    aliases: ["inbetriebnahme", "regelungstechnik", "anlagenoptimierung"],
  },
  {
    key: "kaeltesystem-praktik",
    label: "Kältesystem-Monteurpraktiker/in EBA",
    aliases: ["kältesystem-monteurpraktiker", "kaeltesystem-monteurpraktiker", "eba"],
  },
  {
    key: "kaelte-klima-service",
    label: "Servicetechniker/in Kälte/Klima",
    aliases: ["servicetechniker kälte", "servicetechniker kaelte", "service klima"],
  },
  {
    key: "klima-anlagenbau",
    label: "Anlagenbauer/in Lüftung/Klima",
    aliases: ["anlagenbauer", "anlagenbauerin", "anlagenbau klima"],
  },
  {
    key: "kaelte-klima-chefmontage",
    label: "Chefmonteur/in Kälte/Klima",
    aliases: ["chefmonteur", "chefmonteurin", "chefmontage"],
  },
  {
    key: "kaelte-klima-kundendienst",
    label: "Kundendiensttechniker/in Kälte/Klima",
    aliases: ["kundendiensttechniker", "kundendiensttechnikerin", "kundendienst klima"],
  },
  {
    key: "kaelte-klima-kalkulation",
    label: "Kalkulator/in Kälte/Klima",
    aliases: ["kalkulator", "kalkulatorin", "kalkulation klima"],
  },
];

const CONTROLLED_EMPLOYMENT_TYPES = new Map([
  ["festanstellung", "Festanstellung"],
  ["temporar", "Temporär"],
  ["temporär", "Temporär"],
  ["teilzeit", "Teilzeit"],
  ["vollzeit", "Vollzeit"],
]);

const CONTROLLED_LOCATION_LABELS = new Map([
  "Zürich", "Bern", "Luzern", "Uri", "Schwyz", "Obwalden", "Nidwalden",
  "Glarus", "Zug", "Freiburg", "Solothurn", "Basel-Stadt", "Basel-Landschaft",
  "Schaffhausen", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "St. Gallen",
  "Graubünden", "Aargau", "Thurgau", "Tessin", "Waadt", "Wallis", "Neuenburg",
  "Genf", "Jura", "Zürich, ZH", "Bern, BE", "Basel, BS", "Luzern, LU",
  "St. Gallen, SG", "Winterthur, ZH", "Aarau, AG", "Biel, BE", "Thun, BE",
  "Chur, GR", "Schaffhausen, SH", "Solothurn, SO", "Zug, ZG", "Fribourg, FR",
  "Lausanne, VD", "Lugano, TI", "Grossraum Zürich", "Zentralschweiz",
  "Nordwestschweiz", "Ostschweiz", "Mittelland", "Westschweiz / Romandie",
].map((label) => [normalizeText(label), label] as const));

const OPPORTUNITY_KEYS = new Set([
  "kind",
  "id",
  "role",
  "location",
  "preferenceSummary",
  "disclosure",
  "description",
  "ctaLabel",
  "contactHref",
]);

function normalizeText(value: string): string {
  return value.normalize("NFKC").toLocaleLowerCase("de-CH").replace(/\s+/g, " ").trim();
}

function deterministicHash(value: string): string {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).padStart(7, "0").slice(0, 7);
}

function controlledLocation(value: string): string {
  const cleaned = value.normalize("NFKC").replace(/\s+/g, " ").trim();
  const controlledLabel = CONTROLLED_LOCATION_LABELS.get(normalizeText(cleaned));
  if (controlledLabel) return controlledLabel;
  const hasReviewedShape =
    /^\d{4}(?:\s+[\p{L}\p{M} .,'’()-]{2,60})?(?:,\s*[A-Z]{2})?$/u.test(cleaned) ||
    /^[\p{L}\p{M} .,'’()-]{2,60},\s*[A-Z]{2}$/u.test(cleaned);
  if (
    !cleaned ||
    cleaned.length > 80 ||
    !/^[\p{L}\p{M}\d .,'’()/-]+$/u.test(cleaned) ||
    !hasReviewedShape ||
    !resolveLocationCoordinate(cleaned)
  ) {
    return "Schweiz";
  }
  return cleaned;
}

function controlledWorkload(value: string): string | null {
  const cleaned = value.normalize("NFKC").replace(/\s+/g, " ").trim();
  const named = normalizeText(cleaned);
  if (named === "vollzeit") return "Vollzeit";
  if (named === "teilzeit") return "Teilzeit";

  const match = /^(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?\s*%$/.exec(cleaned);
  if (!match) return null;
  const lower = Number(match[1]);
  const upper = Number(match[2] ?? match[1]);
  if (lower < 1 || lower > 100 || upper < lower || upper > 100) return null;
  return lower === upper ? `${lower}%` : `${lower}–${upper}%`;
}

function preferredRoleIndex(query: string): number {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return 0;
  const match = CONTROLLED_ROLES.findIndex((role) =>
    role.aliases.some((alias) => normalizedQuery.includes(normalizeText(alias)))
  );
  return match >= 0 ? match : deterministicHash(normalizedQuery).charCodeAt(0) % CONTROLLED_ROLES.length;
}

function buildPreferenceSummary(preferences: DirectHirePreferences, location: string): string {
  const parts = [`Region ${location}`];
  const employmentType = CONTROLLED_EMPLOYMENT_TYPES.get(normalizeText(preferences.type ?? ""));
  const workload = controlledWorkload(preferences.workload ?? "");
  if (employmentType) parts.push(employmentType);
  if (workload) parts.push(`Pensum ${workload}`);
  if (preferences.remote === "true") parts.push("Remote bevorzugt");
  if (preferences.remote === "false") parts.push("Arbeit vor Ort bevorzugt");
  return parts.join(" · ");
}

export function assertDirectHireOpportunity(value: DirectHireOpportunity): void {
  for (const key of Object.keys(value)) {
    if (!OPPORTUNITY_KEYS.has(key)) {
      throw new Error(`DirectHireOpportunity contains unreviewed field: ${key}`);
    }
  }
  if (
    value.kind !== "direct-hire-opportunity" ||
    value.disclosure !== "Keine konkrete offene Stelle" ||
    value.ctaLabel !== "Interesse an Direktanstellung" ||
    !value.id.startsWith("direct-hire-klima-") ||
    !value.contactHref.startsWith("/kontakt?anliegen=direktanstellung&profil=") ||
    value.contactHref.includes("/jobs/")
  ) {
    throw new Error("Invalid controlled DirectHireOpportunity");
  }
}

export function serializeDirectHireOpportunity(
  opportunity: DirectHireOpportunity,
): DirectHireOpportunity {
  assertDirectHireOpportunity(opportunity);
  return {
    kind: opportunity.kind,
    id: opportunity.id,
    role: opportunity.role,
    location: opportunity.location,
    preferenceSummary: opportunity.preferenceSummary,
    disclosure: opportunity.disclosure,
    description: opportunity.description,
    ctaLabel: opportunity.ctaLabel,
    contactHref: opportunity.contactHref,
  };
}

export function buildDirectHireOpportunities(
  preferences: DirectHirePreferences,
): DirectHireOpportunity[] {
  const visibleRealCount = Number.isFinite(preferences.visibleRealCount)
    ? Math.max(0, Math.floor(preferences.visibleRealCount))
    : 0;
  const count = Math.max(0, MINIMUM_RESULT_FEED_SIZE - visibleRealCount);
  if (count === 0) return [];

  const location = controlledLocation(preferences.loc ?? "");
  const startIndex = preferredRoleIndex(preferences.q ?? "");
  const preferenceSummary = buildPreferenceSummary(preferences, location);
  const preferenceKey = [
    normalizeText(preferences.q ?? ""),
    normalizeText(location),
    preferenceSummary,
  ].join("|");

  return Array.from({ length: count }, (_, index) => {
    const role = CONTROLLED_ROLES[(startIndex + index) % CONTROLLED_ROLES.length];
    const sequence = Math.floor(index / CONTROLLED_ROLES.length) + 1;
    const id = `direct-hire-klima-${role.key}-${sequence}-${deterministicHash(`${preferenceKey}|${index}`)}`;
    const opportunity: DirectHireOpportunity = {
      kind: "direct-hire-opportunity",
      id,
      role: role.label,
      location,
      preferenceSummary,
      disclosure: "Keine konkrete offene Stelle",
      description:
        "Unser Team sucht fortlaufend einen passenden Arbeitgeber für dieses Berufsprofil. Falls eine Direktanstellung zustande kommt, erfolgt die Anstellung direkt beim Arbeitgeber.",
      ctaLabel: "Interesse an Direktanstellung",
      contactHref: `/kontakt?anliegen=direktanstellung&profil=${role.key}`,
    };
    assertDirectHireOpportunity(opportunity);
    return opportunity;
  });
}
