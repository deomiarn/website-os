"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  items: FAQItem[]
}

interface FAQAccordionProps {
  categories: FAQCategory[]
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

export function FAQAccordion({ categories }: FAQAccordionProps) {
  return (
    <section className="py-section-md">
      <Container>
        <div className="mx-auto max-w-3xl">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              id={category.category.toLowerCase().replace(/\s/g, "-")}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mb-12 last:mb-0"
            >
              <motion.h2
                variants={itemVariants}
                className="mb-6 font-display text-2xl font-bold text-foreground"
              >
                {category.category}
              </motion.h2>

              <Accordion type="single" collapsible className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div key={itemIndex} variants={itemVariants}>
                    <AccordionItem
                      value={`${categoryIndex}-${itemIndex}`}
                      className="rounded-lg border border-border bg-card px-6 data-[state=open]:border-accent"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
