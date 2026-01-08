"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

interface CTASectionProps {
  headline: string
  description?: string
  cta: {
    text: string
    href: string
  }
  variant?: "primary" | "muted"
}

export function CTASection({
  headline,
  description,
  cta,
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary"

  return (
    <section
      className={`py-section-md ${isPrimary ? "bg-primary" : "bg-muted/50"}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
              isPrimary ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {headline}
          </h2>

          {description && (
            <p
              className={`mt-4 text-lg ${
                isPrimary
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className={
                isPrimary
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }
            >
              <Link href={cta.href}>{cta.text}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
