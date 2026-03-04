// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 8 cantons = 96 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Kältetechniker EFZ": {
    label: "Kältetechniker EFZ",
    roleDescription:
      "Kältetechniker EFZ planen, installieren und warten Kälte- und Kühlsysteme für Gewerbe, Industrie und Klimatechnik. Sie arbeiten mit Kältemitteln, führen Dichtheitskontrollen durch und nehmen Anlagen nach geltenden Sicherheitsvorschriften in Betrieb.",
    salaryRange: "CHF 70'000 – 90'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Kältetechniker EFZ, Kenntnisse der Kältemittel und geltenden Sicherheitsvorschriften, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Kältemeister oder Projektleiter HLKK. Spezialisierung auf natürliche Kältemittel (CO2, NH3) oder industrielle Kälteanlagen.",
    related: ["Klimatechniker", "Servicetechniker Kälte", "Kälteanlagenbauer"],
  },
  "Klimatechniker": {
    label: "Klimatechniker",
    roleDescription:
      "Klimatechniker installieren und warten HLKK-Systeme (Heizung, Lüftung, Klima, Kälte) in Wohn-, Gewerbe- und Industriebauten. Sie nehmen Klimaanlagen in Betrieb, führen Servicearbeiten durch und optimieren den Energieverbrauch von gebäudetechnischen Systemen.",
    salaryRange: "CHF 70'000 – 88'000",
    requirements:
      "Ausbildung im Bereich HLKK oder Gebäudetechnik, Kenntnisse in Kälte- und Klimatechnik, Teamfähigkeit und lösungsorientierte Arbeitsweise.",
    career:
      "Spezialisierung auf energieeffiziente Klimasysteme, Wärmepumpen oder Gebäudeautomation. Weiterbildung zum Projektleiter HLKK.",
    related: ["Kältetechniker EFZ", "Lüftungsanlagenbauer EFZ", "Gebäudetechniker Klima"],
  },
  "Lüftungsanlagenbauer EFZ": {
    label: "Lüftungsanlagenbauer EFZ",
    roleDescription:
      "Lüftungsanlagenbauer EFZ bauen und installieren Lüftungskanalsysteme in Neu- und Umbauten. Sie montieren Kanäle, Klappen und Lüftungsgeräte, führen Dichtigkeitsprüfungen durch und stellen die Funktionsfähigkeit von Lüftungsanlagen sicher.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Lüftungsanlagenbauer EFZ, handwerkliches Geschick, Teamfähigkeit und Bereitschaft zu Baustelleneinsätzen.",
    career:
      "Weiterbildung zum Vorarbeiter oder Projektleiter Lüftung. Spezialisierung auf Komfortlüftung oder industrielle Abluftanlagen.",
    related: ["Lüftungsmonteur", "Klimatechniker", "HLKK-Planer"],
  },
  "Heizungsinstallateur EFZ": {
    label: "Heizungsinstallateur EFZ",
    roleDescription:
      "Heizungsinstallateure EFZ installieren und warten Heizsysteme wie Wärmepumpen, Gas- und Ölheizungen sowie Fernwärmeanschlüsse. Sie verlegen Rohrleitungen, montieren Heizkörper und nehmen Heizungsanlagen in Betrieb.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Heizungsinstallateur EFZ, Kenntnisse in moderner Heiztechnik, sorgfältige und selbstständige Arbeitsweise.",
    career:
      "Weiterbildung zum Wärmepumpen-Spezialist oder Gebäudetechniker Klima. Gefragtes Berufsbild im Rahmen der Energiewende.",
    related: ["Wärmepumpen-Spezialist", "Gebäudetechniker Klima", "Servicetechniker Kälte"],
  },
  "Servicetechniker Kälte": {
    label: "Servicetechniker Kälte",
    roleDescription:
      "Servicetechniker Kälte beheben Störungen an Kälte- und Klimaanlagen direkt vor Ort beim Kunden. Sie führen Wartungsarbeiten durch, tauschen Komponenten aus und beraten Kunden zu Optimierungsmöglichkeiten ihrer Kälteanlagen.",
    salaryRange: "CHF 70'000 – 88'000",
    requirements:
      "Ausbildung als Kältetechniker EFZ oder gleichwertig, Freude am Kundenkontakt, lösungsorientierte Arbeitsweise, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Kundendienstleiter oder Projektleiter Kältetechnik. Spezialisierung auf Industriekälte oder Klimaanlagen.",
    related: ["Kältetechniker EFZ", "Klimatechniker", "Kälteanlagenbauer"],
  },
  "Projektleiter HLKK": {
    label: "Projektleiter HLKK",
    roleDescription:
      "Projektleiter HLKK leiten HVAC-Projekte von der Offerte über die Planung bis zur Inbetriebnahme. Sie führen Montageteams, kontrollieren Kosten und Termine und beraten Bauherren und Architekten in allen Fragen der Klima- und Kältetechnik.",
    salaryRange: "CHF 90'000 – 120'000",
    requirements:
      "Weiterbildung im Bereich HLKK oder Gebäudetechnik, Führungserfahrung, Kenntnisse in modernen Klimasystemen, Verhandlungsgeschick.",
    career:
      "Aufstieg zum Bereichsleiter oder Geschäftsführer eines Klima- und Kältetechnik-Unternehmens.",
    related: ["Bauleiter Gebäudetechnik", "HLKK-Planer", "Gebäudetechniker Klima"],
  },
  "Gebäudetechniker Klima": {
    label: "Gebäudetechniker Klima",
    roleDescription:
      "Gebäudetechniker Klima sind Spezialisten für klimatechnische Systeme in Gebäuden. Sie planen, installieren und optimieren Heizungs-, Lüftungs- und Klimaanlagen und sorgen für energieeffiziente Gebäudebetriebe.",
    salaryRange: "CHF 78'000 – 95'000",
    requirements:
      "Ausbildung im Bereich Gebäudetechnik, Kenntnisse in HLKK-Systemen und Gebäudeautomation, lösungsorientierte Arbeitsweise.",
    career:
      "Spezialisierung auf Smart Building, Energiemanagement oder nachhaltige Gebäudetechnik.",
    related: ["Klimatechniker", "HLKK-Planer", "Projektleiter HLKK"],
  },
  "Kälteanlagenbauer": {
    label: "Kälteanlagenbauer",
    roleDescription:
      "Kälteanlagenbauer konstruieren und montieren industrielle Kälteanlagen und Kühlsysteme. Sie arbeiten mit Kältemitteln, verlegen Rohrleitungen, montieren Kompressoren und nehmen Kälteanlagen nach Sicherheitsvorschriften in Betrieb.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung in der Kältetechnik, metallverarbeitende Grundkenntnisse, sorgfältige und präzise Arbeitsweise.",
    career:
      "Spezialisierung auf CO2- oder NH3-Anlagen, industrielle Kältetechnik oder Supermarkt-Kälteanlagen.",
    related: ["Kältetechniker EFZ", "Servicetechniker Kälte", "Klimatechniker"],
  },
  "Wärmepumpen-Spezialist": {
    label: "Wärmepumpen-Spezialist",
    roleDescription:
      "Wärmepumpen-Spezialisten planen und installieren Wärmepumpensysteme für Heizung und Warmwasser. Sie beraten Kunden zur optimalen Systemauslegung, nehmen Anlagen in Betrieb und führen Servicearbeiten durch.",
    salaryRange: "CHF 75'000 – 92'000",
    requirements:
      "Ausbildung in Heizungstechnik oder Elektro mit Weiterbildung im Bereich Wärmepumpen, Kenntnisse in erneuerbaren Energien.",
    career:
      "Wachstumsfeld im Rahmen der Energiewende — Spezialisierung auf Grosswärmepumpen oder Energieberatung.",
    related: ["Heizungsinstallateur EFZ", "Gebäudetechniker Klima", "Projektleiter HLKK"],
  },
  "Lüftungsmonteur": {
    label: "Lüftungsmonteur",
    roleDescription:
      "Lüftungsmonteure installieren Lüftungsanlagen und Kanalsysteme auf Baustellen. Sie montieren Lüftungsrohre, Verteilboxen und Endgeräte und arbeiten eng mit anderen Gewerken auf der Baustelle zusammen.",
    salaryRange: "CHF 62'000 – 78'000",
    requirements:
      "Ausbildung im Bereich Lüftungstechnik oder handwerkliche Grundausbildung, Teamfähigkeit, Bereitschaft zu Baustelleneinsätzen.",
    career:
      "Weiterbildung zum Vorarbeiter oder Lüftungsanlagenbauer EFZ. Spezialisierung auf Komfortlüftung oder Industrielüftung.",
    related: ["Lüftungsanlagenbauer EFZ", "Klimatechniker", "Heizungsinstallateur EFZ"],
  },
  "HLKK-Planer": {
    label: "HLKK-Planer",
    roleDescription:
      "HLKK-Planer planen und projektieren Heizungs-, Lüftungs-, Klima- und Kälteanlagen für Neu- und Umbauten. Sie erstellen technische Zeichnungen und Berechnungen, dimensionieren Anlagen und arbeiten eng mit Architekten und Bauherren zusammen.",
    salaryRange: "CHF 82'000 – 105'000",
    requirements:
      "Weiterbildung im Bereich Gebäudetechnik oder HLKK, CAD-Kenntnisse, analytisches Denkvermögen und technisches Verständnis.",
    career:
      "Aufstieg zum Planungsleiter oder Spezialisierung auf Energieberatung und nachhaltiges Bauen.",
    related: ["Projektleiter HLKK", "Gebäudetechniker Klima", "Bauleiter Gebäudetechnik"],
  },
  "Bauleiter Gebäudetechnik": {
    label: "Bauleiter Gebäudetechnik",
    roleDescription:
      "Bauleiter Gebäudetechnik koordinieren und überwachen HLKK-Installationen auf Grossbaustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle, Qualitätssicherung und die Führung von Subunternehmern im Bereich Klima- und Kältetechnik.",
    salaryRange: "CHF 88'000 – 115'000",
    requirements:
      "Weiterbildung zum Bauleiter Gebäudetechnik, mehrjährige Berufserfahrung in der HLKK-Branche, Führungskompetenz.",
    career:
      "Aufstieg zum Gesamtprojektleiter oder Geschäftsführer eines Gebäudetechnik-Unternehmens.",
    related: ["Projektleiter HLKK", "HLKK-Planer", "Gebäudetechniker Klima"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the electrical industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, Smart-Building-Initiativen und einer hohen Dichte an Klima- und Kältetechnik-Firmen.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Klima-Fachkräften, besonders in der Bundesstadt und im Berner Oberland — von Wohnbau bis Infrastrukturprojekte mit modernen HLKK-Systemen.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Industriebetrieben, Pharmaunternehmen und grossen Bauprojekten mit hohem Bedarf an Klima-Fachkräften.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Industriestandort mit vielen Energieversorgern und einer hohen Nachfrage nach Klima-Fachkräften in Industrie und Bau.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Klima-Fachkräfte — von KMU-Betrieben bis zu grossen Klima- und Kältetechnik-Firmen.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Klima-Fachkräften stetig — getrieben durch Neubauprojekte, Tourismus-Infrastruktur und den Boom bei Wärmepumpen und energieeffizienten HLKK-Systemen.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Industriestandort zwischen Bern und Basel gute Karrierechancen für Klima-Fachkräfte in Produktion, Bau und Anlagenwartung.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und spannende Projekte im Bereich Klimatechnik, Kälteanlagen und Gebäudetechnik.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Klima-Fachkräfte — besonders in Industrie, Wohnungsbau und moderner Kältetechnik.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Klima-Fachkräfte gefragt — von Tourismusinfrastruktur und Bergbahnen über Kälteanlagen in Hotellerie und Gastronomie bis zu Neubauten in den Ferienorten.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Industriestandort attraktive Stellen für Klima-Fachkräfte, insbesondere in der Maschinenindustrie und im HLKK-Anlagenbau.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Klima-Fachkräften vielfältige Möglichkeiten in Wohnungsbau, Industrie und öffentlicher Infrastruktur.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf klimajob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf klimajob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Klimabranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf klimajob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/klimajobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
