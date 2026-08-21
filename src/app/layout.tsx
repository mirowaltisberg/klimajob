import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://klimajob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klima Jobs Schweiz | Stellen für Kälte- und Klima-Fachkräfte",
    template: "%s | klimajob.ch",
  },
  description:
    "Finde Stellen für Kältesystem-Monteurinnen und Kältesystem-Monteure, Kältemonteure, Servicetechnik, Planung und Projektleitung Klima in der Schweiz.",
  keywords: [
    "Klimajobs",
    "Klimajobs Schweiz",
    "Kältesystem-Monteur Jobs",
    "Projektleiter Kälte/Klima",
    "Kältemonteur",
    "Kältesystem-Planer Jobs",
    "Servicetechniker Kälte/Klima",
    "Stellen Kälte- und Klimabranche Schweiz",
    "Klima Job Schweiz",
    "Klima Stellen Schweiz",
    "Kältesystem-Monteur Stellenangebote",
    "Kältemonteur Jobs Schweiz",
    "Kältesystem-Monteur Temporär",
    "Klima Festanstellung",
    "Kältesystem-Monteur Lohn Schweiz",
  ],
  openGraph: {
    title: "Klima Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Kältesystem-Monteur EFZ, Kältemonteur, Servicetechnik, Planung und Projektleitung Klima.",
    type: "website",
    url: "/",
    siteName: "klimajob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klima Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Kältesystem-Monteur EFZ, Kältemonteur, Servicetechnik, Planung und Projektleitung Klima.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "klimajob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "klimajob.ch bündelt Stellenangebote mit klarem Bezug zum Kälte- und Klimagewerk in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "klimajob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Kälte- und Klima-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
