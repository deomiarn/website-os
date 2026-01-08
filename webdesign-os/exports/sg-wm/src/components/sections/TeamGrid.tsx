"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface TeamMember {
  name: string
  role: string
  image?: string
  bio: string
  linkedin?: string
}

interface TeamGridProps {
  headline?: string
  subheadline?: string
  members: TeamMember[]
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

export function TeamGrid({
  headline = "Unser Team",
  subheadline,
  members,
}: TeamGridProps) {
  return (
    <section className="py-section-md">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} bei SG-WM`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-4xl font-bold text-primary/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm text-white/90 line-clamp-4">
                    {member.bio}
                  </p>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
