import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { MinimalHero, CTASection } from "@/components/sections"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ratgeber | Swiss Group Wealth Management",
  description:
    "Expertenwissen zu Finanzen, Vorsorge und Versicherungen. Tipps und Ratschläge von unseren unabhängigen Finanzberatern.",
  openGraph: {
    title: "Ratgeber | Swiss Group Wealth Management",
    description:
      "Expertenwissen zu Finanzen, Vorsorge und Versicherungen. Tipps und Ratschläge von unseren unabhängigen Finanzberatern.",
    url: "https://sg-wm.ch/ratgeber",
  },
}

// Placeholder blog posts - will be replaced with Sanity data
const posts = [
  {
    slug: "saule-3a-optimieren",
    title: "So optimieren Sie Ihre Säule 3a",
    excerpt:
      "Die Säule 3a bietet viele Steuervorteile. Wir zeigen Ihnen, wie Sie das Maximum herausholen.",
    category: "Vorsorge",
    date: "15. Dezember 2025",
    readTime: "5 Min.",
  },
  {
    slug: "hypothek-erneuern",
    title: "Hypothek erneuern: Der richtige Zeitpunkt",
    excerpt:
      "Wann sollten Sie Ihre Hypothek erneuern? Tipps für die Planung und Verhandlung.",
    category: "Immobilien",
    date: "10. Dezember 2025",
    readTime: "7 Min.",
  },
  {
    slug: "versicherungscheck-2024",
    title: "Jahresend-Check: Ihre Versicherungen",
    excerpt:
      "Das Jahr ist der perfekte Zeitpunkt, um Ihre Versicherungen zu überprüfen.",
    category: "Versicherungen",
    date: "1. Dezember 2025",
    readTime: "4 Min.",
  },
  {
    slug: "fruehpensionierung-planen",
    title: "Frühpensionierung: So gelingt der Traum",
    excerpt:
      "Mit der richtigen Planung können Sie früher in Pension gehen. Wir zeigen wie.",
    category: "Vorsorge",
    date: "20. November 2025",
    readTime: "8 Min.",
  },
  {
    slug: "kmu-bvg-wechsel",
    title: "KMU: Wann lohnt sich ein BVG-Wechsel?",
    excerpt:
      "Viele KMU verschenken Geld bei der Pensionskasse. Ein Vergleich kann sich lohnen.",
    category: "KMU",
    date: "15. November 2025",
    readTime: "6 Min.",
  },
  {
    slug: "nachlass-testament",
    title: "Testament erstellen: Was Sie wissen müssen",
    excerpt:
      "Ein Testament gibt Ihnen Kontrolle über Ihren Nachlass. Die wichtigsten Punkte.",
    category: "Nachlass",
    date: "10. November 2025",
    readTime: "5 Min.",
  },
]

const heroData = {
  headline: "Ratgeber",
  subheadline: "Expertenwissen zu Finanzen, Vorsorge und Versicherungen",
}

const ctaData = {
  headline: "Haben Sie Fragen?",
  description: "Unsere Experten helfen Ihnen gerne persönlich weiter",
  cta: {
    text: "Kontakt aufnehmen",
    href: "/kontakt",
  },
  variant: "muted" as const,
}

export default function BlogPage() {
  return (
    <>
      <MinimalHero {...heroData} />

      <section className="py-section-md">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/ratgeber/${post.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:border-accent hover:shadow-lg">
                  {/* Placeholder Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/20">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                      Weiterlesen
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection {...ctaData} />
    </>
  )
}
