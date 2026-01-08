import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Versicherungen | Swiss Group Wealth Management",
  description:
    "Unabhängige Versicherungsberatung für optimalen Schutz. Wir finden die beste Lösung für Ihre Bedürfnisse ohne Produktbindung.",
  openGraph: {
    title: "Versicherungen | Swiss Group Wealth Management",
    description:
      "Unabhängige Versicherungsberatung für optimalen Schutz. Wir finden die beste Lösung für Ihre Bedürfnisse.",
    url: "https://sg-wm.ch/dienstleistungen/versicherungen",
  },
}

const heroData = {
  badge: "Versicherungen",
  headline: "Unabhängige Versicherungsberatung",
  description:
    "Wir sind an keine Versicherung gebunden und empfehlen nur, was wirklich zu Ihnen passt. Unser Ziel: optimaler Schutz zum besten Preis.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "Versicherungs-Check",
      description: "Analyse aller bestehenden Policen auf Lücken und Überschneidungen.",
    },
    {
      title: "Bedarfsanalyse",
      description: "Ermittlung Ihres individuellen Versicherungsbedarfs.",
    },
    {
      title: "Marktvergleich",
      description: "Unabhängiger Vergleich aller relevanten Anbieter.",
    },
    {
      title: "Prämienoptimierung",
      description: "Senkung Ihrer Kosten bei gleichem oder besserem Schutz.",
    },
    {
      title: "Schadensbegleitung",
      description: "Unterstützung bei der Schadensmeldung und -abwicklung.",
    },
    {
      title: "Laufende Betreuung",
      description: "Jährliche Überprüfung und Anpassung Ihrer Versicherungen.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Analyse",
      description: "Erfassung bestehender Versicherungen",
    },
    {
      number: 2,
      title: "Bedarfsermittlung",
      description: "Definition Ihres Schutzbedarfs",
    },
    {
      number: 3,
      title: "Vergleich",
      description: "Unabhängiger Marktvergleich",
    },
    {
      number: 4,
      title: "Umsetzung",
      description: "Abschluss und Kündigung",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen zu Versicherungen",
  faqs: [
    {
      question: "Welche Versicherungen brauche ich wirklich?",
      answer:
        "Das hängt von Ihrer Lebenssituation ab. Privathaftpflicht und Hausrat sind Basis, dazu kommen je nach Bedarf Rechtsschutz, Unfallversicherung etc.",
    },
    {
      question: "Kann ich während der Vertragslaufzeit wechseln?",
      answer:
        "In der Regel zum Vertragsende mit Kündigungsfrist. Wir überwachen Ihre Fristen und informieren Sie rechtzeitig.",
    },
    {
      question: "Wie neutral sind Sie wirklich?",
      answer:
        "Wir erhalten keine höheren Provisionen von bestimmten Anbietern. Unsere Empfehlung basiert ausschliesslich auf Preis-Leistung.",
    },
    {
      question: "Lohnt sich ein Versicherungs-Check?",
      answer:
        "Fast immer. Viele Kunden sind über- oder unterversichert. Oft sparen wir Prämien bei besserem Schutz.",
    },
  ],
}

const ctaData = {
  headline: "Optimieren Sie Ihren Versicherungsschutz",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function VersicherungenPage() {
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
