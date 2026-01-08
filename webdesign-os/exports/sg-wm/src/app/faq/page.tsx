import { Metadata } from "next"
import { MinimalHero, FAQAccordion, CTASection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Häufige Fragen | SG-WM",
  description:
    "Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen, Kosten und Ablauf bei Swiss Group Wealth Management.",
  openGraph: {
    title: "Häufige Fragen | Swiss Group Wealth Management",
    description:
      "Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen, Kosten und Ablauf.",
    url: "https://sg-wm.ch/faq",
  },
}

// Content Data
const heroData = {
  headline: "Häufig gestellte Fragen",
  subheadline: "Hier finden Sie Antworten auf die wichtigsten Fragen",
}

const faqData = {
  categories: [
    {
      category: "Allgemein",
      items: [
        {
          question: "Was macht Swiss Group Wealth Management?",
          answer:
            "Wir sind eine unabhängige Finanzberatung für Privatpersonen und KMU in der Schweiz. Unser Fokus liegt auf ganzheitlicher Finanzplanung, Vorsorgeberatung, Versicherungsoptimierung und Immobilienfinanzierung.",
        },
        {
          question: "Was bedeutet 'unabhängig'?",
          answer:
            "Wir sind an keine Bank, Versicherung oder Finanzprodukt-Anbieter gebunden. Das bedeutet, wir empfehlen nur Lösungen, die wirklich zu Ihrer Situation passen – ohne versteckte Provisionsinteressen.",
        },
        {
          question: "Für wen ist Ihre Beratung geeignet?",
          answer:
            "Für alle Privatpersonen und KMU in der Schweiz, die ihre Finanzen optimieren möchten – ob Vermögensaufbau, Vorsorge, Versicherungscheck oder Nachfolgeplanung.",
        },
        {
          question: "Wo sind Sie tätig?",
          answer:
            "Unser Büro befindet sich in Pfäffikon SZ, wir beraten jedoch Kunden in der gesamten Schweiz – persönlich vor Ort oder per Video.",
        },
      ],
    },
    {
      category: "Kosten",
      items: [
        {
          question: "Was kostet das Erstgespräch?",
          answer:
            "Das Erstgespräch ist kostenlos und unverbindlich. Wir lernen uns kennen und besprechen Ihre Situation und Ziele – ohne jegliche Verpflichtung Ihrerseits.",
        },
        {
          question: "Wie werden Ihre Leistungen vergütet?",
          answer:
            "Wir arbeiten mit transparenten Honoraren oder erhalten Provisionen von den empfohlenen Produktanbietern. Welches Modell für Sie passt, besprechen wir individuell – immer mit voller Kostentransparenz.",
        },
        {
          question: "Gibt es versteckte Kosten?",
          answer:
            "Nein, wir legen alle Kosten und möglichen Provisionen im Voraus offen. Transparenz ist einer unserer Kernwerte.",
        },
      ],
    },
    {
      category: "Ablauf",
      items: [
        {
          question: "Wie läuft die Zusammenarbeit ab?",
          answer:
            "Nach dem kostenlosen Erstgespräch analysieren wir Ihre aktuelle Situation, entwickeln eine massgeschneiderte Strategie und begleiten Sie bei der Umsetzung. Danach bieten wir auf Wunsch eine laufende Betreuung.",
        },
        {
          question: "Wie lange dauert eine Beratung?",
          answer:
            "Je nach Komplexität und Umfang dauert der Beratungsprozess zwischen 2 und 8 Wochen. Eine einfache Versicherungsoptimierung geht schneller, eine umfassende Finanzplanung benötigt mehr Zeit.",
        },
        {
          question: "Muss ich alle Unterlagen offenlegen?",
          answer:
            "Für eine ganzheitliche Beratung ist es wichtig, Ihre finanzielle Situation vollständig zu verstehen. Alle Daten werden selbstverständlich streng vertraulich behandelt.",
        },
      ],
    },
    {
      category: "Services",
      items: [
        {
          question: "Welche Dienstleistungen bieten Sie an?",
          answer:
            "Unser Angebot umfasst Finanzplanung, Vorsorge und Pensionierung, Versicherungsberatung, Immobilienfinanzierung, Nachlass- und Erbschaftsplanung sowie spezielle KMU-Services.",
        },
        {
          question: "Beraten Sie auch Unternehmen?",
          answer:
            "Ja, wir haben spezielle Services für KMU: BVG-Optimierung, Geschäftsversicherungen, Nachfolgeplanung und Unternehmervorsorge.",
        },
      ],
    },
  ],
}

const ctaData = {
  headline: "Frage nicht gefunden?",
  description: "Kontaktieren Sie uns direkt – wir helfen gerne weiter.",
  cta: {
    text: "Kontakt aufnehmen",
    href: "/kontakt",
  },
  variant: "muted" as const,
}

export default function FAQPage() {
  return (
    <>
      <MinimalHero {...heroData} />
      <FAQAccordion {...faqData} />
      <CTASection {...ctaData} />
    </>
  )
}
