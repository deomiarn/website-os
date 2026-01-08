"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Milestone {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  headline?: string
  subheadline?: string
  milestones: Milestone[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const

export function Timeline({
  headline = "Unsere Geschichte",
  subheadline,
  milestones,
}: TimelineProps) {
  return (
    <section className="py-section-md bg-muted/30">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              className={`relative mb-8 last:mb-0 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12 md:text-left"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-2 top-2 h-4 w-4 rounded-full border-4 border-primary bg-background md:left-auto ${
                  index % 2 === 0
                    ? "md:-right-2 md:left-auto"
                    : "md:-left-2 md:right-auto"
                }`}
              />

              {/* Year Badge */}
              <div
                className={`mb-2 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground`}
              >
                {milestone.year}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground">
                {milestone.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
