"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Logo {
  name: string
  src: string
  width?: number
  height?: number
}

interface LogoCloudProps {
  headline?: string
  subheadline?: string
  logos: Logo[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function LogoCloud({
  headline = "Unsere Partner",
  subheadline,
  logos,
}: LogoCloudProps) {
  return (
    <section className="py-section-md">
      <Container>
        {headline && <SectionHeader title={headline} subtitle={subheadline} />}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-12 w-24 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 lg:h-16 lg:w-32">
                <Image
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder logos if none provided */}
        {logos.length === 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-12 w-24 rounded bg-muted lg:h-16 lg:w-32"
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
