"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

interface ServiceHeroProps {
  badge?: string
  headline: string
  description: string
  image?: string
  cta?: {
    text: string
    href: string
  }
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

export function ServiceHero({
  badge,
  headline,
  description,
  image,
  cta,
}: ServiceHeroProps) {
  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-[40vh] lg:h-auto lg:min-h-[600px]">
          {image ? (
            <Image
              src={image}
              alt={headline}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:hidden" />
        </div>

        {/* Content Side */}
        <Container className="flex items-center py-12 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {badge && (
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="mb-4">
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>

            {cta && (
              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href={cta.href}>{cta.text}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
