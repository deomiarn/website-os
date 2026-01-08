"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Step {
  number: number
  title: string
  description: string
}

interface ProcessStepsSimpleProps {
  headline?: string
  subheadline?: string
  steps: Step[]
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
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const

export function ProcessStepsSimple({
  headline = "So läuft es ab",
  subheadline,
  steps,
}: ProcessStepsSimpleProps) {
  return (
    <section className="py-section-md bg-muted/30">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative text-center"
            >
              {/* Number Badge */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                {step.number}
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {step.number < steps.length && (
                <div className="absolute right-0 top-6 hidden h-0.5 w-full -translate-x-1/2 bg-border lg:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
