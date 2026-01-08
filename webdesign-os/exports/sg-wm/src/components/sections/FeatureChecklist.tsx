"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Feature {
  title: string
  description: string
}

interface FeatureChecklistProps {
  headline?: string
  subheadline?: string
  features: Feature[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const

export function FeatureChecklist({
  headline = "Was wir für Sie tun",
  subheadline,
  features,
}: FeatureChecklistProps) {
  return (
    <section className="py-section-md">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex gap-4"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
