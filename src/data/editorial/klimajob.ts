// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "kaeltetechniker-efz::zh": {
    whatDoes:
      "Ein Kältetechniker EFZ in Zürich plant, montiert und nimmt gewerbliche Kälteanlagen, Klimaanlagen, Wärmepumpen und Kühlräume in Betrieb. Der Alltag wechselt zwischen Neumontagen auf Baustellen, Service-Touren bei Detailhandel und Gastronomie sowie Inbetriebnahmen in Bürogebäuden. Im Kanton Zürich prägen drei Trends das Auftragsbuch: der Wärmepumpen-Boom im Wohnungsbau, die Umrüstung gewerblicher Anlagen auf natürliche Kältemittel wie CO2 (R744), Propan (R290) und Ammoniak (R717) statt FKW, sowie die hohe Dichte an Datacentern und Pharmazulieferern, die ganzjährig auf zuverlässige Prozesskälte angewiesen sind.",
    salary:
      "Ein Kältetechniker EFZ verdient im Kanton Zürich typisch CHF 75'000 bis 90'000 pro Jahr — am oberen Ende des Schweizer Bands. Pikettbereitschaft und Notdienst-Zulagen heben das Salär um 5 bis 10 Prozent. Wer den Aufstieg zum Servicetechniker oder Vorarbeiter schafft, rechnet mit CHF 85'000 bis 100'000. Mit der berufsbegleitenden Weiterbildung zum dipl. Kältetechniker HF (3 Jahre) öffnet sich das Band CHF 95'000 bis 115'000. Der eidg. dipl. Kältemeister liegt im Raum Zürich häufig bei CHF 110'000 bis 135'000. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich rekrutieren vor allem Kälte- und Klima-Spezialfirmen mit 15 bis 80 Mitarbeitenden, die Gewerbe- und Industriekälte, Klimaanlagen sowie Wärmepumpen-Service abdecken. Daneben besetzen Anlagenbauer für Supermarktkälte und Detailhandel regelmässig Service- und Montagestellen. Pharma- und Lebensmittel-Service-Organisationen rund um Zürich-Nord brauchen Techniker mit Erfahrung in Reinraum- und prozesssicherer Kälte. Generalunternehmer der Gebäudetechnik und Datacenter-Betreiber besetzen Inbetriebnahme- und Servicestellen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf klimajob.ch sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit klar gelistetem Kältemittel-Schein (EU-Verordnung 517/2014 beziehungsweise das Schweizer Pendant) und konkreten Anlagentypen. Im Kanton Zürich erwarten Arbeitgeber Pikett- und Notdienstbereitschaft, oft inklusive Wochenend-Rotation — gib deine Verfügbarkeit ehrlich an. Fahrausweis Kategorie B ist Pflicht, Kategorie BE ein Plus für grössere Servicefahrzeuge. Sehr gute Deutschkenntnisse und körperliche Eignung für Arbeit in Höhe, Enge und auf Dächern werden geprüft. Belege zu absolvierten Hersteller-Schulungen und ein Foto der Schweizer EFZ-Urkunde im Bewerbungsdossier erhöhen die Trefferquote im Vorauswahl-Schritt deutlich.",
  },

  "klimatechniker::be": {
    whatDoes:
      "Ein Klimatechniker im Kanton Bern installiert, wartet und optimiert Klima-, Lüftungs- und Wärmepumpen-Anlagen in Wohn-, Gewerbe- und Bürobauten. Der Tagesablauf wechselt zwischen Inbetriebnahme-Einsätzen, Service-Touren im Mittelland und Berner Oberland sowie Beratung von Hauswarten und Eigentümerinnen. Aktuell prägen drei Themen den Auftragsmix: der Wärmepumpen-Boom als Ersatz für Öl- und Gasheizungen, die Umstellung gewerblicher Klimaanlagen auf natürliche Kältemittel und der Ausbau der Komfortlüftung in Minergie-Neubauten. Wer gut diagnostiziert und mit Kunden kommuniziert, hat im Kanton Bern langfristig sichere Aufträge.",
    salary:
      "Klimatechniker verdienen im Kanton Bern CHF 72'000 bis 88'000 pro Jahr, je nach Spezialisierung und Pikettanteil. Wer aktiv im 24/7-Notdienst steht, rechnet mit 5 bis 10 Prozent Zulage. Mit Spezialisierung auf Wärmepumpen, MSR-Technik oder Gebäudeautomation sind CHF 88'000 bis 100'000 realistisch. Der Aufstieg zum Servicetechniker beziehungsweise Vorarbeiter erweitert die Verantwortung für Disposition und Schulungen. Die berufsbegleitende Weiterbildung zum dipl. Kältetechniker HF oder zum Projektleiter HLKK öffnet das Band CHF 95'000 bis 120'000. Berufsbegleitende Lehrgänge werden von vielen Berner Betrieben mitfinanziert. Die Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Bern besetzen Kälte- und Klima-Spezialfirmen sowie Gebäudetechnik-KMU mit 20 bis 100 Mitarbeitenden den Grossteil der Stellen. Daneben suchen Anlagenbauer und Generalunternehmer im Raum Bern Inbetriebnehmer für Schul-, Verwaltungs- und Spitalbauten. Pharma- und Lebensmittel-Standorte im Mittelland brauchen Techniker für Prozesskälte und Reinraumtechnik. Tourismus- und Hotelbetriebe im Berner Oberland besetzen saisonale Wartungsstellen für Kälte- und Klimaanlagen. Energieversorger und Wärmeverbund-Betreiber suchen Spezialisten für Grosswärmepumpen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Klimatechniker werden für ihre Selbstständigkeit und Kundenorientierung eingestellt — beton im Lebenslauf konkrete Diagnoseerfahrung, gewartete Anlagentypen und Hersteller-Schulungen. Im Kanton Bern werden weite Anfahrtswege erwartet: Wohnort und Pendelbereitschaft prominent angeben. Der Kältemittel-Sachkundenachweis nach EU 517/2014 oder das Schweizer Pendant gehört zwingend ins Dossier. Sehr gute Deutschkenntnisse sind Voraussetzung — im Berner Mittelland zählt auch Mundartverständnis. Bereite dich auf Fragen zu typischen Störbildern an Wärmepumpen und Klimaanlagen, Pikettbereitschaft sowie körperlicher Eignung für Dach- und Höhenarbeit vor. Ein Foto der EFZ-Urkunde im Anhang beschleunigt die Vorauswahl deutlich.",
  },

  "servicetechniker-kaelte::ag": {
    whatDoes:
      "Ein Servicetechniker Kälte im Kanton Aargau fährt täglich verschiedene Kundenstandorte an, behebt Störungen an Kälteanlagen, Klimaanlagen und Wärmepumpen, führt Wartungen durch und berät zur Anlagenoptimierung. Das Einsatzgebiet reicht oft vom Limmattal über Aarau und Baden bis ins Fricktal — Pendel- und Fahrzeiten gehören zum Berufsbild. Der Arbeitsalltag bringt Industriekälte für Pharma- und Lebensmittelbetriebe, Supermarkt-Kälteanlagen mit CO2-Verbund sowie Wärmepumpen im Wohnbereich auf den Tisch. Wer Schemata sauber liest, mit dem Lecksuchgerät systematisch arbeitet und freundlich mit Kunden kommuniziert, hat im Kanton Aargau langfristig sichere Aufträge.",
    salary:
      "Servicetechniker Kälte verdienen im Kanton Aargau CHF 75'000 bis 90'000 pro Jahr, je nach Pikettanteil und Spezialisierung. Wer aktiv im 24/7-Notdienst steht, rechnet mit 5 bis 12 Prozent Zuschlag plus Inkonvenienzzulagen. Mit Spezialisierung auf CO2-Anlagen, Ammoniak-Industriekälte oder Grosswärmepumpen sind CHF 90'000 bis 102'000 realistisch. Der Aufstieg zum Service- oder Kundendienstleiter erweitert die Verantwortung für Disposition, Schulungen und Garantiefälle und hebt das Salär auf CHF 100'000 bis 115'000. Die berufsbegleitende Weiterbildung zum dipl. Kältetechniker HF wird von vielen Aargauer Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen mittelgrosse Kälte- und Klima-Spezialfirmen mit 15 bis 80 Mitarbeitenden den Grossteil der Service-Stellen. Daneben suchen Pharma- und Lebensmittel-Service-Organisationen rund um das Limmattal und Sisseln Techniker für Prozesskälte und Reinraumanlagen. Anlagenbauer für Supermarktkälte sowie Wärmepumpen-Spezialisten betreiben in der Region eigene Servicemannschaften. Industrie- und Energieversorger besetzen interne Stellen für Kälte- und MSR-Technik. Datacenter-Betreiber im Raum Baden brauchen Techniker für USV-nahe Klima- und Kühlanlagen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Servicetechniker werden für Selbstständigkeit, Diagnosegeschick und Kundenfreundlichkeit eingestellt — beton im Lebenslauf konkrete Reparaturzeiten, betreute Anlagentypen und absolvierte Hersteller-Schulungen. Der Kältemittel-Sachkundenachweis nach EU 517/2014 (oder das Schweizer Pendant) gehört zwingend ins Dossier. Im Kanton Aargau werden weite Anfahrtswege erwartet: Wohnort und Pendelbereitschaft prominent angeben. Fahrausweis Kategorie B ist Pflicht, Kategorie BE ein Plus für grössere Servicefahrzeuge. Pikettbereitschaft inklusive Wochenende und Feiertage wird im Erstgespräch abgefragt — bereite ehrliche Antworten vor. Sehr gute Deutschkenntnisse, körperliche Eignung für Dach- und Höhenarbeit sowie Schwindelfreiheit sind Standardanforderungen.",
  },

  "hlkk-planer::zg": {
    whatDoes:
      "Ein HLKK-Planer im Kanton Zug erstellt Konzepte, Schemata und Ausführungspläne für Heizungs-, Lüftungs-, Klima- und Kälteanlagen — von der Vorprojektierung über die Submission bis zur Inbetriebnahme-Begleitung. Der Alltag teilt sich auf zwischen CAD- und BIM-Arbeit (Plancal Nova, Revit MEP, AutoCAD), Koordinationssitzungen mit Architekten und Elektroplanern sowie Baubesuchen zur Ausführungskontrolle. Im Kanton Zug prägen drei Themen die Aufträge: Hightech- und Pharmazulieferer mit Reinraumtechnik, Datacenter mit komplexen Kühl- und Notfallkonzepten sowie hochwertiger Wohnungs- und Bürobau mit Wärmepumpen, Komfortlüftung und MSR-Technik nach Minergie-P-Standard.",
    salary:
      "HLKK-Planer verdienen im Kanton Zug typisch CHF 85'000 bis 110'000 pro Jahr — am oberen Schweizer Durchschnitt. BIM-Kenntnisse und Erfahrung mit Energiesimulation (IDA ICE, Polysun) heben den Marktwert deutlich. Der Aufstieg zum Planungsleiter, Fachspezialisten Energie oder Projektleiter HLKK öffnet das Band CHF 105'000 bis 130'000. Mit der höheren Fachprüfung zum dipl. HLKK-Planer oder dem Bachelor FH Gebäudetechnik sind im Kanton Zug CHF 115'000 bis 145'000 realistisch. Hightech- und Pharma-Auftraggeber zahlen oft marktführend, dafür wird auch englische Verhandlungssicherheit für internationale Bauherrschaften erwartet. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Zug besetzen vor allem mittelgrosse Ingenieur- und Planungsbüros der Gebäudetechnik mit 10 bis 60 Mitarbeitenden Stellen für HLKK-Planer. Daneben suchen Generalplaner für Pharma-, Hightech- und Spitalbauten regelmässig nach Planungsfachkräften mit Reinraum-Erfahrung. Datacenter-Betreiber rund um Rotkreuz und Baar betreiben interne HLKK-Planungsabteilungen. Architekturbüros mit MEP-Fokus integrieren HLKK-Planer immer häufiger direkt ins Team. Auch Industrie-Inbetriebnehmer und Anlagenbauer für Prozesskälte besetzen Planungsstellen für Eigenprojekte. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Hänge eine kompakte Auswahl bearbeiteter Projekte an — Bauherrschaft anonymisiert, dafür mit Bauvolumen, Nutzungsart, Anlagengrösse und deinem konkreten Planungsanteil. Im Kanton Zug prüfen viele Büros Bewerbungsdossiers explizit auf Normkenntnisse (SIA 382, SIA 384, SIA 380/1) und Erfahrung mit Energiesimulation. Das Software-Toolkit gehört prominent in den Lebenslauf: Plancal Nova, Revit MEP, AutoCAD, IDA ICE, Polysun. Englisch in Wort und Schrift wird in den meisten Hightech- und Pharma-Stellen vorausgesetzt. Reisebereitschaft für Inbetriebnahmen und Bauherrentermine prominent angeben. Im Vorstellungsgespräch werden Berechnungslogik, Termintreue und Koordinationsfähigkeit mit anderen Gewerken vertieft abgefragt.",
  },

  "projektleiter-hlkk::sg": {
    whatDoes:
      "Ein Projektleiter HLKK im Kanton St. Gallen führt Heizungs-, Lüftungs-, Klima- und Kälteprojekte von der Offerte über die Planung und Montagekoordination bis zur Inbetriebnahme und Garantieabwicklung. Der Alltag wechselt zwischen Kalkulation, Submissions- und Bauherrengesprächen, Führung der Montageteams auf der Baustelle und Schnittstellen-Koordination mit Elektro-, Sanitär- und Bauleitung. In der Ostschweiz prägen drei Themen den Auftragsmix: Wärmepumpen-Sanierungen im Wohnungsbestand, Kälteanlagen für Lebensmittelproduzenten und Detailhandel sowie Klimaanlagen und MSR-Technik in Industriebauten und Spitälern rund um St. Gallen, Wil und das Rheintal.",
    salary:
      "Projektleiter HLKK verdienen im Kanton St. Gallen CHF 90'000 bis 115'000 pro Jahr — je nach Projektvolumen, Führungsspanne und Berufserfahrung. Wer regelmässig Projekte über CHF 1 Mio. eigenverantwortlich abwickelt, rechnet im oberen Drittel. Spezialisierung auf Industriekälte (CO2, NH3) oder Grosswärmepumpen bringt 5 bis 10 Prozent Zulage. Der Aufstieg zum Bereichsleiter, Niederlassungsleiter oder Geschäftsführer eines KMU der Gebäudetechnik öffnet das Band CHF 115'000 bis 145'000. Mit der höheren Fachprüfung zum dipl. Projektleiter Gebäudetechnik oder einem Bachelor FH Gebäudetechnik wird die Karrieretür weit aufgestossen. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen mittelgrosse Kälte-, Klima- und Gebäudetechnik-KMU mit 30 bis 150 Mitarbeitenden den Grossteil der Projektleitungsstellen. Daneben suchen Generalunternehmer und Anlagenbauer im Raum St. Gallen, Wil und Rheintal Projektleiter für Industrie- und Spitalbauten. Lebensmittelproduzenten und ihre Inbetriebnehmer besetzen interne Stellen für Prozesskälte- und Klimaprojekte. Pharmazulieferer und Maschinenbauer im Rheintal brauchen Projektleiter mit Reinraum- und Validierungs-Erfahrung. Generalplaner mit MEP-Fokus integrieren Projektleiter HLKK direkt ins Team. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Projektleiter werden für Führungskompetenz, Kalkulationssicherheit und Termintreue eingestellt — beton im Lebenslauf konkrete Projektbeispiele mit Auftragsvolumen, Teamgrösse, Anlagentyp und deiner Rolle. Im Kanton St. Gallen werden Pendelradius bis ins Rheintal, Toggenburg und Appenzellerland erwartet: Mobilität prominent angeben. Sehr gute Deutschkenntnisse sind Voraussetzung — Mundartverständnis ein Plus. Englisch wird bei internationalen Bauherrschaften und Pharmaprojekten erwartet. Erfahrung mit Submissionen nach SIA 118, MEP-Koordination und Garantie-Abwicklung gehört prominent ins Dossier. Im Vorstellungsgespräch werden Konfliktmanagement auf der Baustelle, Umgang mit Nachträgen sowie Kalkulations- und Risikodenken vertieft abgefragt. Belege zu absolvierten Weiterbildungen erhöhen die Trefferquote.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion klimajob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
