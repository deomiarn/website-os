import { Metadata } from "next"
import {
  HeroSection,
  StatsSection,
  ServicesGrid,
  TestimonialsCarousel,
  LogoCloud,
  CTASection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Unabhängige Finanzberatung Pfäffikon",
  description:
    "Swiss Group Wealth Management - Ihre unabhängige Finanzberatung in Pfäffikon. Vermögensplanung, Vorsorge & Versicherungen für Privatpersonen und KMU.",
  openGraph: {
    title: "Unabhängige Finanzberatung Pfäffikon | SG-WM",
    description:
      "Swiss Group Wealth Management - Vermögensplanung, Vorsorge & Versicherungen",
    url: "https://sg-wm.ch/",
  },
}

// Content Data
const heroData = {
  headline: "Treffen Sie die richtigen Entscheidungen, zur richtigen Zeit.",
  subheadline:
    "Unabhängige Finanzberatung für Privatpersonen und KMU in der Schweiz",
  primaryCTA: {
    text: "Erstgespräch vereinbaren",
    href: "/erstgespraech",
  },
  secondaryCTA: {
    text: "Mehr erfahren",
    href: "#services",
  },
}

const statsData = {
  stats: [
    { value: 25, label: "Jahre Erfahrung", suffix: "+" },
    { value: 500, label: "Zufriedene Kunden", suffix: "+" },
    { value: 150, label: "Mio. CHF betreut", prefix: "CHF ", suffix: "M+" },
    { value: 98, label: "Kundenzufriedenheit", suffix: "%" },
  ],
}

const servicesData = {
  headline: "Unsere Dienstleistungen",
  subheadline: "Massgeschneiderte Lösungen für Ihre finanzielle Zukunft",
  services: [
    {
      title: "Finanzplanung",
      description:
        "Ganzheitliche Vermögensberatung für Ihre finanziellen Ziele",
      href: "/dienstleistungen/finanzplanung",
    },
    {
      title: "Vorsorge & Pensionierung",
      description: "Säule 3a, Pensionskasse und Frühpensionierung planen",
      href: "/dienstleistungen/vorsorge-pensionierung",
    },
    {
      title: "Versicherungen",
      description: "Unabhängige Beratung für optimalen Versicherungsschutz",
      href: "/dienstleistungen/versicherungen",
    },
    {
      title: "Immobilien",
      description: "Hypothekenberatung und Immobilienfinanzierung",
      href: "/dienstleistungen/immobilien",
    },
    {
      title: "Nachlass & Erbschaft",
      description: "Testament und Vermögensübertragung professionell regeln",
      href: "/dienstleistungen/nachlass-erbschaft",
    },
    {
      title: "KMU-Services",
      description: "Finanzlösungen speziell für kleine und mittlere Unternehmen",
      href: "/dienstleistungen/kmu",
    },
  ],
}

const testimonialsData = {
  headline: "Das sagen unsere Kunden",
  testimonials: [
    {
      quote:
        "Die Beratung von SG-WM hat unsere finanzielle Situation grundlegend verbessert. Wir fühlen uns bestens aufgehoben.",
      author: "Thomas M.",
      role: "Unternehmer",
      company: "Zürich",
    },
    {
      quote:
        "Endlich eine Finanzberatung, die wirklich unabhängig ist und nur unsere Interessen verfolgt. Absolute Empfehlung!",
      author: "Sandra K.",
      role: "Privatkundin",
      company: "Pfäffikon",
    },
    {
      quote:
        "Die ganzheitliche Vorsorgeplanung hat mir die Sicherheit gegeben, die ich für meine Zukunft brauche.",
      author: "Peter H.",
      role: "Pensionär",
      company: "Schwyz",
    },
  ],
}

const logosData = {
  headline: "Unsere Partner",
  logos: [], // Placeholder - will be filled with real partner logos
}

const ctaData = {
  headline: "Bereit für den nächsten Schritt?",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroData} />
      <StatsSection {...statsData} />
      <ServicesGrid {...servicesData} />
      <TestimonialsCarousel {...testimonialsData} />
      <LogoCloud {...logosData} />
      <CTASection {...ctaData} />
    </>
  )
}
