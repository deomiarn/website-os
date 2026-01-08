import { Metadata } from "next"
import { MinimalHero, ProcessStepsSimple } from "@/components/sections"
import { BenefitsBadges } from "@/components/ui/BenefitsBadges"
import { CalEmbed } from "@/components/integrations/CalEmbed"
import { AdvisorCard } from "@/components/ui/AdvisorCard"

export const metadata: Metadata = {
  title: "Erstgespräch buchen | SG-WM",
  description:
    "Buchen Sie Ihr kostenloses und unverbindliches Erstgespräch. In 30 Minuten analysieren wir gemeinsam Ihre finanzielle Situation.",
  openGraph: {
    title: "Erstgespräch buchen | Swiss Group Wealth Management",
    description:
      "Buchen Sie Ihr kostenloses und unverbindliches Erstgespräch. In 30 Minuten analysieren wir gemeinsam Ihre finanzielle Situation.",
    url: "https://sg-wm.ch/erstgespraech",
  },
}

// Content Data
const heroData = {
  headline: "Ihr erstes Gespräch",
  subheadline:
    "Kostenlos und unverbindlich - der erste Schritt zu Ihrer finanziellen Zukunft",
}

const benefitsData = {
  benefits: [
    { icon: "Gift", text: "Kostenlos" },
    { icon: "Shield", text: "Unverbindlich" },
    { icon: "User", text: "Persönlich" },
    { icon: "Target", text: "Individuell" },
  ],
}

const processData = {
  headline: "So läuft Ihr Erstgespräch ab",
  steps: [
    {
      number: 1,
      title: "Terminwahl",
      description: "Wählen Sie einen passenden Termin",
    },
    {
      number: 2,
      title: "Kurzes Vorgespräch",
      description: "5 Minuten telefonisch oder per Video",
    },
    {
      number: 3,
      title: "Analyse",
      description: "Wir besprechen Ihre Situation und Ziele",
    },
    {
      number: 4,
      title: "Empfehlungen",
      description: "Sie erhalten erste konkrete Tipps",
    },
  ],
}

const advisorData = {
  headline: "Ihr Ansprechpartner",
  advisor: {
    name: "Thomas Müller",
    role: "Geschäftsführer",
    quote: "Ich freue mich darauf, Sie kennenzulernen und gemeinsam den Grundstein für Ihre finanzielle Zukunft zu legen.",
  },
}

export default function BookingPage() {
  return (
    <>
      <MinimalHero {...heroData} />
      <BenefitsBadges {...benefitsData} />
      <ProcessStepsSimple {...processData} />
      <CalEmbed calLink="team/erstgespraech" />
      <AdvisorCard {...advisorData} />
    </>
  )
}
