import { Metadata } from "next"
import {
  ServiceHero,
  FeatureChecklist,
  ProcessSteps,
  ServiceFAQ,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "KMU-Services | Swiss Group Wealth Management",
  description:
    "Finanzlösungen für kleine und mittlere Unternehmen. BVG-Optimierung, Geschäftsversicherungen und Unternehmervorsorge.",
  openGraph: {
    title: "KMU-Services | Swiss Group Wealth Management",
    description:
      "Finanzlösungen für kleine und mittlere Unternehmen. BVG-Optimierung, Geschäftsversicherungen und Unternehmervorsorge.",
    url: "https://sg-wm.ch/dienstleistungen/kmu",
  },
}

const heroData = {
  badge: "KMU-Services",
  headline: "Finanzlösungen für KMU",
  description:
    "Als Unternehmer haben Sie besondere Anforderungen. Wir unterstützen Sie bei BVG, Geschäftsversicherungen und Ihrer persönlichen Vorsorge als Inhaber.",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

const featuresData = {
  headline: "Was wir für Sie tun",
  features: [
    {
      title: "BVG-Optimierung",
      description: "Die richtige Pensionskassenlösung für Ihr Unternehmen und Ihre Mitarbeiter.",
    },
    {
      title: "Geschäftsversicherungen",
      description: "Haftpflicht, Rechtsschutz, Betriebsunterbrechung und mehr.",
    },
    {
      title: "Unternehmervorsorge",
      description: "Ihre persönliche Absicherung als Geschäftsführer oder Inhaber.",
    },
    {
      title: "Key Person Insurance",
      description: "Absicherung gegen den Ausfall wichtiger Mitarbeiter.",
    },
    {
      title: "Nachfolgeplanung",
      description: "Strukturierte Übergabe an Nachfolger oder Verkauf.",
    },
    {
      title: "Liquiditätsplanung",
      description: "Optimierung von Cashflow und Reserven.",
    },
  ],
}

const processData = {
  headline: "Unser Prozess",
  steps: [
    {
      number: 1,
      title: "Unternehmensanalyse",
      description: "Erfassung Ihrer Firmenstruktur",
    },
    {
      number: 2,
      title: "Risikoanalyse",
      description: "Identifikation von Lücken",
    },
    {
      number: 3,
      title: "Lösungskonzept",
      description: "Massgeschneiderte Empfehlungen",
    },
    {
      number: 4,
      title: "Umsetzung",
      description: "Implementierung der Massnahmen",
    },
  ],
}

const faqData = {
  headline: "Häufige Fragen für KMU",
  faqs: [
    {
      question: "Ab welcher Grösse lohnt sich eine BVG-Beratung?",
      answer:
        "Schon ab 2-3 Mitarbeitern kann sich ein Wechsel lohnen. Wir prüfen Ihre aktuelle Lösung kostenlos.",
    },
    {
      question: "Welche Versicherungen braucht mein KMU?",
      answer:
        "Das hängt von Branche und Grösse ab. Basis sind Betriebshaftpflicht und Gebäude/Inventar. Wir analysieren Ihren Bedarf.",
    },
    {
      question: "Wie sichere ich mich als Inhaber ab?",
      answer:
        "Durch eine Kombination aus Säule 3a, Kadervorsorge und allenfalls Lebensversicherung. Wir zeigen Ihnen die Optionen.",
    },
    {
      question: "Können Sie auch bei der Nachfolge helfen?",
      answer:
        "Ja, von der Bewertung bis zur Übergabe. Bei komplexen Fällen arbeiten wir mit spezialisierten Anwälten zusammen.",
    },
  ],
}

const ctaData = {
  headline: "Optimieren Sie Ihre KMU-Finanzen",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function KMUPage() {
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
