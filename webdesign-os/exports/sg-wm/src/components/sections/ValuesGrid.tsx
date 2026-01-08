"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Users,
  Lock,
  Eye,
  Circle,
  type LucideIcon,
} from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface ValueItem {
  icon: string
  title: string
  description: string
}

interface ValuesGridProps {
  headline?: string
  subheadline?: string
  values: ValueItem[]
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  Lock,
  Eye,
  Circle,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const

export function ValuesGrid({
  headline = "Unsere Werte",
  subheadline,
  values,
}: ValuesGridProps) {
  return (
    <section className="py-section-md">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {values.map((value) => {
            const IconComponent = iconMap[value.icon] || Circle
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
