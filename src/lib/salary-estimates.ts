/**
 * Approximate annual CHF salary ranges for Swiss HVAC and Kältetechnik roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["bauleiter gebäudetechnik", "bauleiter hlkk"],
    range: { min: 88_000, max: 115_000 },
  },
  {
    patterns: ["bauleiter"],
    range: { min: 88_000, max: 115_000 },
  },
  {
    patterns: ["projektleiter hlkk", "projektleiter klima"],
    range: { min: 90_000, max: 120_000 },
  },
  {
    patterns: ["projektleiter"],
    range: { min: 90_000, max: 120_000 },
  },
  // Planning / design
  {
    patterns: ["hlkk-planer", "hlkk planer"],
    range: { min: 82_000, max: 105_000 },
  },
  // Core trades
  {
    patterns: ["wärmepumpen-spezialist", "wärmepumpen spezialist", "wärmepumpe"],
    range: { min: 75_000, max: 92_000 },
  },
  {
    patterns: ["gebäudetechniker klima", "gebäudetechniker"],
    range: { min: 78_000, max: 95_000 },
  },
  {
    patterns: ["kältetechniker"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["klimatechniker"],
    range: { min: 70_000, max: 88_000 },
  },
  {
    patterns: ["servicetechniker kälte", "servicetechniker klima"],
    range: { min: 70_000, max: 88_000 },
  },
  {
    patterns: ["servicetechniker", "kundendiensttechniker"],
    range: { min: 70_000, max: 88_000 },
  },
  {
    patterns: ["heizungsinstallateur"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["kälteanlagenbauer"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["lüftungsanlagenbauer"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["lüftungsmonteur"],
    range: { min: 62_000, max: 78_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["techniker"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["monteur"],
    range: { min: 62_000, max: 80_000 },
  },
  {
    patterns: ["heizung", "lüftung", "klima", "kälte", "sanitär", "hlk", "hvac"],
    range: { min: 68_000, max: 88_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
