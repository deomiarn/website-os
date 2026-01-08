"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"

interface MinimalHeroProps {
  headline: string
  subheadline?: string
}

export function MinimalHero({ headline, subheadline }: MinimalHeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {subheadline}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
