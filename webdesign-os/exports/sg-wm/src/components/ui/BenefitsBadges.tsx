"use client"

import { motion } from "framer-motion"
import { Gift, Shield, User, Target, type LucideIcon } from "lucide-react"
import { Container } from "@/components/layout/container"

interface Benefit {
  icon: string
  text: string
}

interface BenefitsBadgesProps {
  benefits: Benefit[]
}

const iconMap: Record<string, LucideIcon> = {
  Gift,
  Shield,
  User,
  Target,
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as const

export function BenefitsBadges({ benefits }: BenefitsBadgesProps) {
  return (
    <section className="py-8">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Gift
            return (
              <motion.div
                key={benefit.text}
                variants={itemVariants}
                className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2"
              >
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {benefit.text}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
