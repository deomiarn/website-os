import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Finanzplanung | Swiss Group Wealth Management",
  description:
    "Ganzheitliche Finanzplanung für Ihre Ziele. Vermögensaufbau, Budgetoptimierung und langfristige Strategien von unabhängigen Experten.",
  openGraph: {
    title: "Finanzplanung | Swiss Group Wealth Management",
    description:
      "Ganzheitliche Finanzplanung für Ihre Ziele. Vermögensaufbau, Budgetoptimierung und langfristige Strategien.",
    url: "https://sg-wm.ch/dienstleistungen/finanzplanung",
  },
}

const heroData = {
  badge: "Finanzplanung",
  headline: "Ganzheitliche Finanzplanung für Ihre Zukunft",
  description:
    "Wir analysieren Ihre finanzielle Situation, definieren gemeinsam Ihre Ziele und entwickeln eine massgeschneiderte Strategie für Vermögensaufbau und finanzielle Sicherheit.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "Vermögensanalyse",
      description: "Umfassende Bestandsaufnahme Ihrer aktuellen finanziellen Situation.",
    },
    {
      title: "Zieldefinition",
      description: "Klare Festlegung Ihrer kurz-, mittel- und langfristigen Ziele.",
    },
    {
      title: "Strategieentwicklung",
      description: "Erstellung eines individuellen Finanzplans mit konkreten Massnahmen.",
    },
    {
      title: "Budgetoptimierung",
      description: "Analyse und Optimierung Ihrer Ein- und Ausgaben.",
    },
    {
      title: "Vermögensallokation",
      description: "Optimale Verteilung Ihrer Mittel auf verschiedene Anlageklassen.",
    },
    {
      title: "Laufende Betreuung",
      description: "Regelmässige Überprüfung und Anpassung Ihrer Strategie.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Erstgespräch",
      description: "Kennenlernen und erste Bestandsaufnahme",
    },
    {
      number: 2,
      title: "Analyse",
      description: "Detaillierte Auswertung Ihrer Situation",
    },
    {
      number: 3,
      title: "Strategie",
      description: "Präsentation Ihres individuellen Finanzplans",
    },
    {
      number: 4,
      title: "Umsetzung",
      description: "Gemeinsame Realisierung der Massnahmen",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen zur Finanzplanung",
  faqs: [
    {
      question: "Für wen ist eine Finanzplanung sinnvoll?",
      answer:
        "Für alle, die ihre finanzielle Zukunft aktiv gestalten möchten – unabhängig vom Vermögen. Besonders wichtig bei Lebensereignissen wie Heirat, Immobilienkauf oder Familiengründung.",
    },
    {
      question: "Was kostet eine Finanzplanung?",
      answer:
        "Die Kosten richten sich nach dem Umfang. Das Erstgespräch ist kostenlos. Danach besprechen wir transparent alle Optionen.",
    },
    {
      question: "Wie lange dauert der Prozess?",
      answer:
        "Je nach Komplexität 4-8 Wochen. Eine einfache Planung kann schneller gehen, umfassende Analysen benötigen mehr Zeit.",
    },
    {
      question: "Muss ich alle Unterlagen offenlegen?",
      answer:
        "Für eine ganzheitliche Planung ist Transparenz wichtig. Alle Daten werden streng vertraulich behandelt.",
    },
  ],
}

const ctaData = {
  headline: "Bereit für Ihre finanzielle Zukunft?",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function FinanzplanungPage() {
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
