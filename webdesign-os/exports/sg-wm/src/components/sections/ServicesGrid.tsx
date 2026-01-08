"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceItem {
  title: string
  description: string
  image?: string
  href: string
  icon?: React.ReactNode
}

interface ServicesGridProps {
  headline: string
  subheadline?: string
  services: ServiceItem[]
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

export function ServicesGrid({
  headline,
  subheadline,
  services,
}: ServicesGridProps) {
  return (
    <section id="services" className="py-section-md">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:border-accent hover:shadow-lg">
                  {service.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} - SG-WM`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  {!service.image && (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      {service.icon || (
                        <div className="h-12 w-12 rounded-full bg-primary/10" />
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {service.title}
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
