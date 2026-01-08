"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Container } from "@/components/layout/container"
import { ContactForm } from "@/components/forms/ContactForm"

interface ContactInfo {
  phone: string
  email: string
  address: string[]
  hours: string
}

interface ContactSplitProps {
  headline?: string
  subheadline?: string
  info: ContactInfo
}

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
}

export function ContactSplit({
  headline = "Kontaktieren Sie uns",
  subheadline,
  info,
}: ContactSplitProps) {
  const contactItems = [
    {
      icon: "Phone",
      label: "Telefon",
      value: info.phone,
      href: `tel:${info.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "Mail",
      label: "E-Mail",
      value: info.email,
      href: `mailto:${info.email}`,
    },
    {
      icon: "MapPin",
      label: "Adresse",
      value: info.address,
    },
    {
      icon: "Clock",
      label: "Öffnungszeiten",
      value: info.hours,
    },
  ]

  return (
    <section className="py-section-md">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {headline}
            </h1>
            {subheadline && (
              <p className="mt-3 text-lg text-muted-foreground">{subheadline}</p>
            )}
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border border-border bg-muted/30 p-6 lg:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Direkter Kontakt
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir freuen uns von Ihnen zu hören
              </p>

              <div className="mt-8 space-y-6">
                {contactItems.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap]
                  const isLink = "href" in item && item.href

                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {Array.isArray(item.value) ? (
                          item.value.map((line, i) => (
                            <p key={i} className="text-foreground">
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )

                  return isLink ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
