import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://klimajob.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Klimajobs gibt es auf klimajob.ch?",
    answer:
      "Auf klimajob.ch findest du alle relevanten Stellenprofile der Schweizer Klima- und Kältetechnik-Branche. Dazu gehören die EFZ-Lehrabschluss-Berufe Kältetechniker EFZ, Lüftungsanlagenbauer EFZ und Heizungsinstallateur EFZ sowie die Spezialisten-Profile Klimatechniker, Servicetechniker Kälte, Wärmepumpen-Spezialist, Kälteanlagenbauer und Lüftungsmonteur. Auf der Planungs- und Projektebene listen wir HLKK-Planer, Gebäudetechniker Klima, Bauleiter Gebäudetechnik und Projektleiter HLKK. Spezialisierungen wie Industriekälte mit natürlichen Kältemitteln (CO2 / R744, Ammoniak / R717, Propan / R290), Reinraumtechnik für Pharma- und Lebensmittelproduktion, MSR- und Gebäudeautomation, Komfortlüftung nach Minergie sowie Grosswärmepumpen für Wärmeverbund sind ebenfalls regelmässig vertreten. Auf der Führungsebene findest du Niederlassungsleiter, Fachvorgesetzte und Geschäftsführende von Klima- und Kältebetrieben. Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Wiedereinsteigende die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnden Baustellen. Die Stellen werden täglich aktualisiert und verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, St. Gallen und Zug.",
  },
  {
    question: "Was verdient ein Kältetechniker EFZ in der Schweiz?",
    answer:
      "Ein Kältetechniker EFZ verdient in der Schweiz im Durchschnitt CHF 70'000 bis 90'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. Im Kanton Zürich, in Zug und in Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufseinsteiger nach EFZ-Abschluss starten meist im Bereich CHF 62'000 bis 70'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 78'000 bis 88'000. Spezialisierungen auf Industriekälte mit CO2 oder Ammoniak, Wärmepumpen und Reinraumtechnik bringen 5 bis 12 Prozent Zulage. Servicetechniker mit Pikettbereitschaft sowie der Aufstieg zum dipl. Kältetechniker HF heben das Salärband weiter. Im Vergleich zum Nachbarland Deutschland liegen die Schweizer Bruttolöhne durchschnittlich 60 bis 80 Prozent höher; allerdings sind Lebenshaltungskosten und Krankenkassenprämien ebenfalls deutlich höher. Der 13. Monatslohn ist Standard.",
  },
  {
    question: "Wie finde ich einen Job als Klimatechniker in der Schweiz?",
    answer:
      "Auf klimajob.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile in Klima, Kälte, Lüftung und Heizung), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Branchenmessen wie die Hilsa, die SwissBau und der suissetec-Branchentag bieten zusätzliche Direktkontakte zu Arbeitgebern.",
  },
  {
    question: "Welche Kantone haben die meisten Klimajobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Klima- und Kältetechnik-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Waadt und St. Gallen. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten HLKK-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen Basel-Stadt, Luzern, Genf, Thurgau und Solothurn. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Gewerbe-, Pharma- und Datacenter-Projekte zunehmen, steigt auch die Nachfrage nach Kältetechnikern, Klima- und Lüftungsmonteuren sowie Servicetechnikern. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Basler in Baselland und Solothurn, Zürcher in Schaffhausen, Thurgau und Schwyz. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Wallis, in der Region Biel/Bienne und in Teilen von Fribourg.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Kältetechniker EFZ und Klimatechniker?",
    answer:
      "Der Unterschied liegt in Lehrhintergrund, Anlagenfokus und Befähigung. Der Kältetechniker EFZ absolviert eine 4-jährige Lehre und ist Spezialist für gewerbliche Kälteanlagen, Klimaanlagen, Wärmepumpen sowie Industriekälte mit natürlichen Kältemitteln wie CO2, Propan und Ammoniak statt der schrittweise regulierten FKW. Er führt eigenständig Dichtheitsprüfungen, Inbetriebnahmen und Reparaturen nach geltenden Sicherheitsvorschriften und der EU-Verordnung 517/2014 durch. Der Klimatechniker fokussiert auf Klima- und Lüftungsanlagen im Gebäudebereich, oft mit Schwerpunkt Service, Wartung und Optimierung von Komfortklima- und Komfortlüftungssystemen sowie Wärmepumpen im Wohnbau. Beide Berufe gehören zum HLKK-Bereich (Heizung, Lüftung, Klima, Kälte) und sind in der Schweiz stark gefragt. Der Lohnabstand beträgt durchschnittlich CHF 2'000 bis 5'000 pro Jahr zugunsten des Kältetechnikers EFZ. Wechsel zwischen den Tätigkeitsfeldern sind über berufsbegleitende Weiterbildungen gut möglich — viele Betriebe finanzieren den Schritt vom Klimatechniker zum dipl. Kältetechniker HF mit, weil Fachkräfte mit voller Kältekompetenz aktuell besonders knapp sind. Welcher Beruf besser passt, hängt von Lust auf Mobilität, Diagnose-Arbeit und Pikettbereitschaft ab.",
  },
  {
    question: "Gibt es auf klimajob.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf klimajob.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Teilzeitmodelle sind besonders bei Servicetechnikern Kälte, HLKK-Planern und in der Gebäudetechnik verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg nach Pause und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Klima- und Kältetechnik-Branche zunehmend Standard. Auf der Baustellenseite (Lüftungsmonteur, Lüftungsanlagenbauer, Heizungsinstallateur) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In den Bereichen Planung, Projektleitung und Kundendienst ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von wachsender Akzeptanz für gestaffelte Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate. Frage in Erstgesprächen explizit danach, viele Betriebe bieten dieses Modell ohne aktive Werbung an.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Projektleiter HLKK", range: "CHF 90'000 – 120'000" },
  { role: "Bauleiter Gebäudetechnik", range: "CHF 88'000 – 115'000" },
  { role: "HLKK-Planer", range: "CHF 82'000 – 105'000" },
  { role: "Gebäudetechniker Klima", range: "CHF 78'000 – 95'000" },
  { role: "Wärmepumpen-Spezialist", range: "CHF 75'000 – 92'000" },
  { role: "Kältetechniker EFZ", range: "CHF 70'000 – 90'000" },
  { role: "Klimatechniker", range: "CHF 70'000 – 88'000" },
  { role: "Servicetechniker Kälte", range: "CHF 70'000 – 88'000" },
  { role: "Kälteanlagenbauer", range: "CHF 68'000 – 85'000" },
  { role: "Heizungsinstallateur EFZ", range: "CHF 68'000 – 85'000" },
  { role: "Lüftungsanlagenbauer EFZ", range: "CHF 65'000 – 82'000" },
  { role: "Lüftungsmonteur", range: "CHF 62'000 – 78'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Klima- und Kältetechnik-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Klimajobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf klimajob.ch finden Klima- und Kältetechnik-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Kältetechniker EFZ über Klimatechniker und Lüftungsanlagenbauer bis hin zu
            Heizungsinstallateur, HLKK-Planer und Wärmepumpen-Spezialisten. Ob du deinen nächsten Klimajob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der HLKK-Branche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>

          <p className="text-slate-600 text-base leading-relaxed mt-4">
            Zusätzlich findest du Festanstellungen, Temporärstellen, Teilzeitpensen, Lehrstellen und Stellenangebote mit Lohnband. Besonders gesucht werden Fachkräfte mit EFZ/EBA, Erfahrung im Service, in der Montage oder Projektleitung und regionaler Mobilität. Damit eignet sich die Suche für klassische Klima Jobs in der Schweiz ebenso wie für spezialisierte Profile wie Kältetechniker EFZ, Klimatechniker, Lüftungsanlagenbauer und Projektleiter HLKK.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht HLKK-Berufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Klima- und Kältetechnik-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.svk.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">SVK</a>,{" "}
            <a href="https://www.suissetec.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">suissetec</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Klima- und Kältetechnik-Branche aus den
                Jahres- und Branchenstatistiken von{" "}
                <a
                  href="https://www.svk.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  SVK
                </a>{" "}
                (Schweizerischer Verein für Kältetechnik),{" "}
                <a
                  href="https://www.suissetec.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  suissetec
                </a>{" "}
                (Schweizerisch-Liechtensteinischer Gebäudetechnikverband) und dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf klimajob.ch indexierten
                öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Beliebte Suchseiten
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* SEO-DECISION: Show top 18 landing pages on homepage — enough for internal link equity without overwhelming the page */}
              {TOP_LANDING_PAGES.slice(0, 18).map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
