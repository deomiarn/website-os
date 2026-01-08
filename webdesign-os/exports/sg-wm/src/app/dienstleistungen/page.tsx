import { Metadata } from "next"
import { MinimalHero, MasonryGrid } from "@/components/sections"

export const metadata: Metadata = {
  title: "Unsere Dienstleistungen | SG-WM",
  description:
    "Finanzplanung, Vorsorge, Versicherungen, Immobilien und KMU-Services. Massgeschneiderte Lösungen für Ihre finanzielle Zukunft.",
  openGraph: {
    title: "Unsere Dienstleistungen | Swiss Group Wealth Management",
    description:
      "Finanzplanung, Vorsorge, Versicherungen, Immobilien und KMU-Services. Massgeschneiderte Lösungen für Ihre finanzielle Zukunft.",
    url: "https://sg-wm.ch/dienstleistungen",
  },
}

// Content Data
const heroData = {
  headline: "Unsere Dienstleistungen",
  subheadline: "Massgeschneiderte Finanzlösungen für Privatpersonen und KMU",
}

const servicesData = {
  services: [
    {
      id: "finanzplanung",
      title: "Finanzplanung",
      description:
        "Ganzheitliche Vermögensberatung für Ihre finanziellen Ziele. Wir analysieren Ihre Situation und entwickeln eine massgeschneiderte Strategie.",
      href: "/dienstleistungen/finanzplanung",
      audience: ["private", "kmu"],
      size: "large" as const,
    },
    {
      id: "vorsorge",
      title: "Vorsorge & Pensionierung",
      description:
        "Säule 3a, Pensionskasse und Frühpensionierung optimal planen. Für einen sorgenfreien Ruhestand.",
      href: "/dienstleistungen/vorsorge-pensionierung",
      audience: ["private"],
      size: "medium" as const,
    },
    {
      id: "versicherungen",
      title: "Versicherungen",
      description:
        "Unabhängige Beratung für optimalen Versicherungsschutz. Wir finden die beste Lösung für Ihre Bedürfnisse.",
      href: "/dienstleistungen/versicherungen",
      audience: ["private", "kmu"],
      size: "medium" as const,
    },
    {
      id: "immobilien",
      title: "Immobilien",
      description:
        "Hypothekenberatung und Immobilienfinanzierung. Vom Eigenheim bis zur Anlageimmobilie.",
      href: "/dienstleistungen/immobilien",
      audience: ["private"],
      size: "large" as const,
    },
    {
      id: "nachlass",
      title: "Nachlass & Erbschaft",
      description:
        "Testament und Vermögensübertragung professionell regeln. Für eine geordnete Nachfolge.",
      href: "/dienstleistungen/nachlass-erbschaft",
      audience: ["private"],
      size: "medium" as const,
    },
    {
      id: "kmu",
      title: "KMU-Services",
      description:
        "Finanzlösungen speziell für kleine und mittlere Unternehmen. BVG, Geschäftsversicherungen und mehr.",
      href: "/dienstleistungen/kmu",
      audience: ["kmu"],
      size: "medium" as const,
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <MinimalHero {...heroData} />
      <MasonryGrid {...servicesData} />
    </>
  )
}
