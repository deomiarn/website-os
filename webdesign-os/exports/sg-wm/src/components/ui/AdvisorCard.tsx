"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/layout/container"

interface Advisor {
  name: string
  role: string
  image?: string
  quote: string
}

interface AdvisorCardProps {
  headline?: string
  advisor: Advisor
}

export function AdvisorCard({
  headline = "Ihr Ansprechpartner",
  advisor,
}: AdvisorCardProps) {
  return (
    <section className="py-section-md">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg text-center"
        >
          <h2 className="font-display text-2xl font-bold text-foreground">
            {headline}
          </h2>

          <div className="mt-8 rounded-lg border border-border bg-card p-8 shadow-sm">
            {/* Avatar */}
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
              {advisor.image ? (
                <Image
                  src={advisor.image}
                  alt={`${advisor.name}, ${advisor.role} bei SG-WM`}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="text-3xl font-bold text-primary/50">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              {advisor.name}
            </h3>
            <p className="text-sm text-muted-foreground">{advisor.role}</p>

            {/* Quote */}
            <blockquote className="mt-6 font-display text-lg italic text-foreground">
              &ldquo;{advisor.quote}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
