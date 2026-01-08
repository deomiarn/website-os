import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Vorsorge & Pensionierung | Swiss Group Wealth Management",
  description:
    "Optimale Vorsorgeplanung für einen sorgenfreien Ruhestand. Säule 3a, Pensionskasse und Frühpensionierung von unabhängigen Experten.",
  openGraph: {
    title: "Vorsorge & Pensionierung | Swiss Group Wealth Management",
    description:
      "Optimale Vorsorgeplanung für einen sorgenfreien Ruhestand. Säule 3a, Pensionskasse und Frühpensionierung.",
    url: "https://sg-wm.ch/dienstleistungen/vorsorge-pensionierung",
  },
}

const heroData = {
  badge: "Vorsorge",
  headline: "Vorsorge & Pensionierung optimal planen",
  description:
    "Wir helfen Ihnen, die komplexe Schweizer Vorsorgewelt zu verstehen und das Beste aus den drei Säulen herauszuholen – für einen sorgenfreien Ruhestand.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "Vorsorgeanalyse",
      description: "Vollständige Analyse Ihrer AHV, Pensionskasse und privaten Vorsorge.",
    },
    {
      title: "Säule 3a Optimierung",
      description: "Die beste 3a-Lösung für Ihre Situation – Bank oder Versicherung.",
    },
    {
      title: "Pensionskassen-Check",
      description: "Analyse Ihrer PK-Leistungen und Einkaufspotential.",
    },
    {
      title: "Frühpensionierung",
      description: "Planung und Finanzierung eines vorzeitigen Ruhestands.",
    },
    {
      title: "Kapitalbezug vs. Rente",
      description: "Individuelle Berechnung der optimalen Bezugsform.",
    },
    {
      title: "Steueroptimierung",
      description: "Maximale Steuervorteile durch kluge Vorsorgeplanung.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Bestandsaufnahme",
      description: "Erfassung Ihrer Vorsorgeleistungen",
    },
    {
      number: 2,
      title: "Simulation",
      description: "Berechnung verschiedener Szenarien",
    },
    {
      number: 3,
      title: "Optimierung",
      description: "Konkrete Handlungsempfehlungen",
    },
    {
      number: 4,
      title: "Umsetzung",
      description: "Begleitung bei allen Massnahmen",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen zur Vorsorge",
  faqs: [
    {
      question: "Wann sollte ich mit der Vorsorgeplanung beginnen?",
      answer:
        "Je früher, desto besser. Aber auch mit 50+ lohnt sich eine Optimierung – besonders für die Pensionierung.",
    },
    {
      question: "Lohnt sich ein Einkauf in die Pensionskasse?",
      answer:
        "Oft ja, da steuerlich absetzbar. Wir berechnen für Sie, ob und wann ein Einkauf sinnvoll ist.",
    },
    {
      question: "Soll ich das Kapital oder die Rente wählen?",
      answer:
        "Das hängt von vielen Faktoren ab: Lebenserwartung, Vermögen, Familiensituation. Wir berechnen beide Optionen.",
    },
    {
      question: "Kann ich früher in Pension gehen?",
      answer:
        "Ja, mit der richtigen Planung. Wir zeigen Ihnen, was nötig ist und wie Sie die Lücke schliessen.",
    },
  ],
}

const ctaData = {
  headline: "Planen Sie Ihre Pensionierung",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function VorsorgePensionierungPage() {
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
