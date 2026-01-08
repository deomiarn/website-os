"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Certificate {
  name: string
  image?: string
  description?: string
}

interface CertificatesRowProps {
  headline?: string
  subheadline?: string
  certificates: Certificate[]
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const

export function CertificatesRow({
  headline = "Unsere Zertifikate",
  subheadline,
  certificates,
}: CertificatesRowProps) {
  return (
    <section className="py-section-md bg-muted/30">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              {cert.image ? (
                <div className="relative h-16 w-32">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-16 w-32 items-center justify-center rounded bg-muted">
                  <span className="text-xs text-muted-foreground">
                    {cert.name}
                  </span>
                </div>
              )}
              <span className="text-sm font-medium text-foreground">
                {cert.name}
              </span>
              {cert.description && (
                <span className="text-xs text-muted-foreground text-center max-w-[200px]">
                  {cert.description}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder if no certificates */}
        {certificates.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex h-24 w-40 items-center justify-center rounded-lg border border-border bg-muted"
              >
                <span className="text-xs text-muted-foreground">Zertifikat</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
