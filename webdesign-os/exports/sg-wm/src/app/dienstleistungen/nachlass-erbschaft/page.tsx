import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Nachlass & Erbschaft | Swiss Group Wealth Management",
  description:
    "Professionelle Nachlassplanung und Vermögensübertragung. Testament, Erbvertrag und Schenkungen optimal gestalten.",
  openGraph: {
    title: "Nachlass & Erbschaft | Swiss Group Wealth Management",
    description:
      "Professionelle Nachlassplanung und Vermögensübertragung. Testament, Erbvertrag und Schenkungen optimal gestalten.",
    url: "https://sg-wm.ch/dienstleistungen/nachlass-erbschaft",
  },
}

const heroData = {
  badge: "Nachlass",
  headline: "Nachlass & Erbschaftsplanung",
  description:
    "Sorgen Sie vor für Ihre Liebsten. Wir helfen Ihnen, Ihr Vermögen optimal zu übertragen und Streit zu vermeiden – steueroptimiert und rechtssicher.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "Nachlassanalyse",
      description: "Erfassung Ihres Vermögens und der gesetzlichen Erbfolge.",
    },
    {
      title: "Testamentsberatung",
      description: "Gestaltung eines rechtsgültigen Testaments nach Ihren Wünschen.",
    },
    {
      title: "Erbverträge",
      description: "Verbindliche Regelungen mit allen Beteiligten.",
    },
    {
      title: "Schenkungsplanung",
      description: "Lebzeitige Übertragungen optimal strukturieren.",
    },
    {
      title: "Steueroptimierung",
      description: "Minimierung von Erbschafts- und Schenkungssteuern.",
    },
    {
      title: "Unternehmernachfolge",
      description: "Spezielle Lösungen für die Firmenübergabe.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Bestandsaufnahme",
      description: "Erfassung Vermögen und Wünsche",
    },
    {
      number: 2,
      title: "Analyse",
      description: "Rechtliche und steuerliche Prüfung",
    },
    {
      number: 3,
      title: "Konzept",
      description: "Entwicklung der optimalen Lösung",
    },
    {
      number: 4,
      title: "Umsetzung",
      description: "Erstellung der Dokumente",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen zum Nachlass",
  faqs: [
    {
      question: "Brauche ich ein Testament?",
      answer:
        "Wenn Sie von der gesetzlichen Erbfolge abweichen möchten oder spezielle Wünsche haben – ja. Wir zeigen Ihnen die Möglichkeiten.",
    },
    {
      question: "Was ist der Pflichtteil?",
      answer:
        "Der gesetzlich geschützte Mindestanteil für bestimmte Erben. Er wurde 2023 reduziert, was mehr Gestaltungsfreiheit gibt.",
    },
    {
      question: "Kann ich zu Lebzeiten verschenken?",
      answer:
        "Ja, aber Vorsicht: Schenkungen werden bei der Erbteilung oft angerechnet. Wir planen mit Ihnen die optimale Strategie.",
    },
    {
      question: "Wie hoch ist die Erbschaftssteuer?",
      answer:
        "Das hängt vom Kanton und Verwandtschaftsgrad ab. Ehepartner und Kinder sind in den meisten Kantonen befreit.",
    },
  ],
}

const ctaData = {
  headline: "Regeln Sie Ihren Nachlass",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function NachlassErbschaftPage() {
  return (
    <>
      <ServiceHero {...heroData} />
      <FeatureChecklist {...featuresData} />
      <ProcessSteps {...processData} />
      <ServiceFAQ {...faqData} />
      <CTASection {...ctaData} />
    </>
  )
}
