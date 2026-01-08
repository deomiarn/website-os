import { Metadata } from "next"
import { ContactSplit } from "@/components/sections"
import { GoogleMap } from "@/components/integrations/GoogleMap"

export const metadata: Metadata = {
  title: "Kontakt | Swiss Group Wealth Management",
  description:
    "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Swiss Group Wealth Management in Pfäffikon - wir freuen uns auf Ihre Nachricht.",
  openGraph: {
    title: "Kontakt | Swiss Group Wealth Management",
    description:
      "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Swiss Group Wealth Management in Pfäffikon.",
    url: "https://sg-wm.ch/kontakt",
  },
}

// Content Data
const contactData = {
  headline: "Kontaktieren Sie uns",
  subheadline: "Wir freuen uns auf Ihre Nachricht",
  info: {
    phone: "+41 55 555 55 55",
    email: "info@sg-wm.ch",
    address: ["Musterstrasse 1", "8808 Pfäffikon SZ"],
    hours: "Mo-Fr: 08:00-18:00",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactSplit {...contactData} />
      <GoogleMap title="Swiss Group Wealth Management AG - Pfäffikon" />
    </>
  )
}
