import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Swiss Group Wealth Management | Unabhängige Finanzberatung",
    template: "%s | SG-WM",
  },
  description:
    "Swiss Group Wealth Management - Ihre unabhängige Finanzberatung in Pfäffikon. Vermögensplanung, Vorsorge & Versicherungen für Privatpersonen und KMU.",
  keywords: [
    "Finanzberatung",
    "Wealth Management",
    "Vermögensberatung",
    "Pfäffikon",
    "Schweiz",
    "Vorsorge",
    "Versicherungen",
  ],
  authors: [{ name: "Swiss Group Wealth Management AG" }],
  creator: "Swiss Group Wealth Management AG",
  metadataBase: new URL("https://sg-wm.ch"),
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://sg-wm.ch",
    siteName: "Swiss Group Wealth Management",
    title: "Swiss Group Wealth Management | Unabhängige Finanzberatung",
    description:
      "Ihre unabhängige Finanzberatung in Pfäffikon. Vermögensplanung, Vorsorge & Versicherungen für Privatpersonen und KMU.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
