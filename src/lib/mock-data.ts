export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Kältetechniker EFZ (m/w/d)",
    company: "Alpine Klima AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Kältetechniker EFZ für spannende Neubau- und Serviceprojekte im Raum Zürich.",
    responsibilities: [
      "Installation und Inbetriebnahme von Kälte- und Klimaanlagen",
      "Wartung und Entstörung von Kältesystemen",
      "Befüllung und Dichtigkeitskontrolle von Kältemittelkreisläufen",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Kältetechniker EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Lüftungsanlagenbauer EFZ",
    company: "Frischluft & Klima GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Umsetzung von modernen Lüftungsinstallationen in Wohn- und Gewerbebauten.",
    responsibilities: [
      "Montage von Lüftungskanälen und Verteilboxen",
      "Installation von Lüftungsgeräten und Endgeräten",
      "Dichtigkeitsprüfungen und Inbetriebnahme",
      "Allgemeine Montagearbeiten auf der Baustelle"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Lüftungsanlagenbauer EFZ",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Projektleiter HLKK (w/m)",
    company: "KlimaComfort Systems AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie innovative HLKK-Projekte von der Planung bis zur Inbetriebnahme.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageteams",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung im Bereich HLKK oder Gebäudetechnik",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in moderner Klimatechnik",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Kälteanlagenbauer",
    company: "IndustrieKälte Group",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie konstruieren und montieren industrielle Kälteanlagen und Kühlsysteme für die Industrie.",
    responsibilities: [
      "Aufbau und Montage von Kälteanlagen und Rohrleitungssystemen",
      "Prüfung der fertigen Anlagen nach Vorschrift",
      "Fehlersuche und Behebung",
      "Mithilfe bei Inbetriebnahmen"
    ],
    requirements: [
      "Ausbildung in der Kältetechnik oder als Kältetechniker EFZ",
      "Kenntnisse in Kältemitteln und Sicherheitsvorschriften",
      "Selbständige und präzise Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkstatt",
      "Geregelte Arbeitszeiten ohne Schichtbetrieb",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Servicetechniker Kälte",
    company: "KlimaService 24",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Servicetechniker Kälte beheben Sie Störungen an Kälte- und Klimaanlagen direkt bei unseren Kunden vor Ort.",
    responsibilities: [
      "Behebung von Störungen an Kälte- und Klimaanlagen",
      "Kleinere Installationsanpassungen und Erweiterungen",
      "Ausführung von Piketteinsätzen (ca. 1x im Monat)",
      "Kundenberatung vor Ort"
    ],
    requirements: [
      "Ausbildung als Kältetechniker EFZ oder gleichwertig",
      "Freude am Kundenkontakt und gepflegtes Auftreten",
      "Lösungsorientierte Denkweise",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Umfassend ausgerüstetes Servicefahrzeug",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
