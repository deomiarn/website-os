import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Immobilien & Hypotheken | Swiss Group Wealth Management",
  description:
    "Unabhängige Hypothekenberatung für Ihr Eigenheim oder Ihre Anlageimmobilie. Wir finden die beste Finanzierung für Sie.",
  openGraph: {
    title: "Immobilien & Hypotheken | Swiss Group Wealth Management",
    description:
      "Unabhängige Hypothekenberatung für Ihr Eigenheim oder Ihre Anlageimmobilie.",
    url: "https://sg-wm.ch/dienstleistungen/immobilien",
  },
}

const heroData = {
  badge: "Immobilien",
  headline: "Hypotheken & Immobilienfinanzierung",
  description:
    "Vom Traum vom Eigenheim bis zur Anlageimmobilie – wir begleiten Sie bei der Finanzierung und finden die beste Hypothek für Ihre Situation.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "Tragbarkeitsberechnung",
      description: "Ermittlung Ihres maximalen Finanzierungsrahmens.",
    },
    {
      title: "Hypothekenvergleich",
      description: "Unabhängiger Vergleich von über 100 Anbietern.",
    },
    {
      title: "Strategieberatung",
      description: "Optimale Kombination von Hypothekarmodellen.",
    },
    {
      title: "Verhandlung",
      description: "Wir verhandeln für Sie die besten Konditionen.",
    },
    {
      title: "Erneuerungsplanung",
      description: "Rechtzeitige Planung vor Ablauf der Festhypothek.",
    },
    {
      title: "Amortisationsplanung",
      description: "Optimale Rückzahlungsstrategie inkl. Steueraspekten.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Bedarfsanalyse",
      description: "Erfassung Ihrer Wünsche und Möglichkeiten",
    },
    {
      number: 2,
      title: "Marktvergleich",
      description: "Einholung von Angeboten",
    },
    {
      number: 3,
      title: "Verhandlung",
      description: "Aushandeln der besten Konditionen",
    },
    {
      number: 4,
      title: "Abschluss",
      description: "Begleitung bis zur Unterzeichnung",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen zu Hypotheken",
  faqs: [
    {
      question: "Wie viel Eigenkapital brauche ich?",
      answer:
        "Mindestens 20% des Kaufpreises, davon maximal 10% aus der Pensionskasse. Wir zeigen Ihnen alle Optionen.",
    },
    {
      question: "Festhypothek oder SARON?",
      answer:
        "Das hängt von Ihrer Risikobereitschaft und dem Zinsumfeld ab. Wir berechnen beide Varianten für Sie.",
    },
    {
      question: "Kann ich früher amortisieren?",
      answer:
        "Bei SARON-Hypotheken jederzeit, bei Festhypotheken oft mit Vorfälligkeitsentschädigung. Wir klären die Details.",
    },
    {
      question: "Was passiert bei Ablauf der Festhypothek?",
      answer:
        "Wir kontaktieren Sie rechtzeitig und sichern Ihnen die besten Konditionen für die Erneuerung.",
    },
  ],
}

const ctaData = {
  headline: "Finanzieren Sie Ihr Eigenheim optimal",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function ImmobilienPage() {
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
