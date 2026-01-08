"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { FilterTabs } from "@/components/ui/FilterTabs"

interface ServiceItem {
  id: string
  title: string
  description: string
  image?: string
  href: string
  audience: string[]
  size: "large" | "medium"
}

interface Tab {
  id: string
  label: string
}

interface MasonryGridProps {
  services: ServiceItem[]
  tabs?: Tab[]
  showFilter?: boolean
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
} as const

export function MasonryGrid({
  services,
  tabs = [
    { id: "all", label: "Alle" },
    { id: "private", label: "Privatpersonen" },
    { id: "kmu", label: "KMU" },
  ],
  showFilter = true,
}: MasonryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredServices = useMemo(() => {
    if (activeFilter === "all") return services
    return services.filter((s) => s.audience.includes(activeFilter))
  }, [activeFilter, services])

  return (
    <section className="py-section-md">
      <Container>
        {showFilter && (
          <div className="mb-10">
            <FilterTabs
              tabs={tabs}
              activeTab={activeFilter}
              onChange={setActiveFilter}
            />
          </div>
        )}

        <motion.div
          layout
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gridAutoRows: "minmax(180px, auto)",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${
                  service.size === "large"
                    ? "sm:row-span-2"
                    : "sm:row-span-1"
                }`}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full min-h-[180px] overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg">
                    {/* Background Image */}
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={`${service.title} - SG-WM`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm text-white/80 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}
