"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

interface AboutHeroProps {
  headline: string
  subheadline?: string
  valueHighlights?: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const

export function AboutHero({
  headline,
  subheadline,
  valueHighlights,
}: AboutHeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 lg:py-28">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {subheadline}
            </motion.p>
          )}

          {valueHighlights && valueHighlights.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {valueHighlights.map((value, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  {value}
                </Badge>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
