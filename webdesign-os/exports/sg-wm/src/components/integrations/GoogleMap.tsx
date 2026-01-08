"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Container } from "@/components/layout/container"

interface GoogleMapProps {
  embedUrl?: string
  title?: string
  height?: string
}

export function GoogleMap({
  embedUrl,
  title = "Unser Standort",
  height = "400px",
}: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Pfäffikon SZ location - placeholder embed URL
  const defaultEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10856.89!2d8.78!3d47.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab6e5d8f4f7c7%3A0x4f0c6c5a5c9f3!2sPf%C3%A4ffikon%20SZ!5e0!3m2!1sen!2sch!4v1640000000000!5m2!1sen!2sch"

  return (
    <section className="pb-section-md">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg border border-border"
          style={{ height }}
        >
          {/* Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
              <MapPin className="h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">{title}</p>
            </div>
          )}

          <iframe
            src={embedUrl || defaultEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </Container>
    </section>
  )
}
