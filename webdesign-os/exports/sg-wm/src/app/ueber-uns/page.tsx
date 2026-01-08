import { Metadata } from "next"
import {
  AboutHero,
  ValuesGrid,
  Timeline,
  TeamGrid,
  CertificatesRow,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Über uns | Swiss Group Wealth Management",
  description:
    "Lernen Sie unser Team erfahrener Finanzberater kennen. Unabhängig, kundenorientiert und mit über 25 Jahren Erfahrung in Pfäffikon.",
  openGraph: {
    title: "Über uns | Swiss Group Wealth Management",
    description:
      "Lernen Sie unser Team erfahrener Finanzberater kennen. Unabhängig, kundenorientiert und mit über 25 Jahren Erfahrung in Pfäffikon.",
    url: "https://sg-wm.ch/ueber-uns",
  },
}

// Content Data
const heroData = {
  headline: "Wir sind Swiss Group Wealth Management",
  subheadline:
    "Ihre unabhängigen Partner für alle Finanzfragen seit über 25 Jahren",
  valueHighlights: ["Unabhängig", "Kundenorientiert", "Erfahren"],
}

const valuesData = {
  headline: "Unsere Werte",
  subheadline: "Was uns antreibt und auszeichnet",
  values: [
    {
      icon: "Shield",
      title: "Unabhängigkeit",
      description:
        "Keine Produktbindung – wir empfehlen nur, was für Sie wirklich passt.",
    },
    {
      icon: "Users",
      title: "Kundenzentrierung",
      description:
        "Ihre Ziele stehen im Mittelpunkt jeder unserer Empfehlungen.",
    },
    {
      icon: "Lock",
      title: "Sicherheit",
      description:
        "Schutz Ihres Vermögens durch fundierte Strategien und Expertise.",
    },
    {
      icon: "Eye",
      title: "Transparenz",
      description:
        "Klare Kommunikation über Kosten, Risiken und Chancen.",
    },
    {
      icon: "Circle",
      title: "Ganzheitlichkeit",
      description:
        "Alle Aspekte Ihrer finanziellen Situation werden berücksichtigt.",
    },
  ],
}

const timelineData = {
  headline: "Unsere Geschichte",
  subheadline: "Über 25 Jahre Expertise in der Finanzberatung",
  milestones: [
    {
      year: "1998",
      title: "Gründung",
      description:
        "Swiss Group Wealth Management wird in Pfäffikon gegründet – mit der Vision einer unabhängigen Finanzberatung.",
    },
    {
      year: "2005",
      title: "Expansion",
      description:
        "Erweiterung des Teams und des Dienstleistungsangebots. Start der KMU-Beratung.",
    },
    {
      year: "2015",
      title: "Digitalisierung",
      description:
        "Einführung moderner Analysetools und digitaler Beratungslösungen für unsere Kunden.",
    },
    {
      year: "2023",
      title: "Heute",
      description:
        "Über 500 zufriedene Kunden und 150 Millionen CHF an betreutem Vermögen.",
    },
  ],
}

const teamData = {
  headline: "Unser Team",
  subheadline: "Erfahrene Berater für Ihre finanzielle Zukunft",
  members: [
    {
      name: "Thomas Müller",
      role: "Geschäftsführer & Senior Berater",
      bio: "25 Jahre Erfahrung in der Finanzbranche. Spezialisiert auf Vermögensplanung und Vorsorge für vermögende Privatkunden.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sandra Weber",
      role: "Leiterin Vorsorge",
      bio: "Expertin für Pensionsplanung und Säule 3a. Hilft Kunden seit 15 Jahren bei der optimalen Altersvorsorge.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Peter Schneider",
      role: "Senior Versicherungsberater",
      bio: "Spezialist für Risikoanalyse und massgeschneiderte Versicherungslösungen für Privatpersonen und KMU.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Anna Keller",
      role: "Immobilienfinanzierung",
      bio: "Expertin für Hypothekenberatung und Immobilienfinanzierung. Begleitet Kunden vom Erstgespräch bis zum Abschluss.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Michael Brunner",
      role: "KMU-Berater",
      bio: "Spezialisiert auf Finanzlösungen für kleine und mittlere Unternehmen. BVG und Geschäftsversicherungen.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Lisa Huber",
      role: "Kundenbetreuung",
      bio: "Ihr erster Ansprechpartner für alle Fragen und Terminvereinbarungen. Sorgt für einen reibungslosen Ablauf.",
      linkedin: "https://linkedin.com",
    },
  ],
}

const certificatesData = {
  headline: "Unsere Zertifikate",
  subheadline: "Qualität und Kompetenz, die Sie vertrauen können",
  certificates: [
    {
      name: "IAF Zertifiziert",
      description: "Institute for Applied Finance",
    },
    {
      name: "FinanzPlaner",
      description: "Eidg. Diplom",
    },
    {
      name: "CICERO",
      description: "Weiterbildungsstandard",
    },
    {
      name: "VVG Broker",
      description: "FINMA reguliert",
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <AboutHero {...heroData} />
      <ValuesGrid {...valuesData} />
      <Timeline {...timelineData} />
      <TeamGrid {...teamData} />
      <CertificatesRow {...certificatesData} />
    </>
  )
}
