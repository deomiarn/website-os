"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
  image?: string
}

interface TestimonialsCarouselProps {
  headline?: string
  subheadline?: string
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({
  headline = "Das sagen unsere Kunden",
  subheadline,
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-section-md bg-muted/30">
      <Container>
        <SectionHeader title={headline} subtitle={subheadline} />

        <div className="relative mx-auto max-w-4xl">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 left-0 h-12 w-12 text-accent/30 lg:-left-8 lg:h-16 lg:w-16" />

          {/* Testimonial */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <blockquote className="font-display text-xl italic text-foreground md:text-2xl lg:text-3xl leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex flex-col items-center gap-4">
                  {currentTestimonial.image && (
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground">
                      {currentTestimonial.author}
                    </div>
                    {(currentTestimonial.role || currentTestimonial.company) && (
                      <div className="text-sm text-muted-foreground">
                        {currentTestimonial.role}
                        {currentTestimonial.role && currentTestimonial.company && ", "}
                        {currentTestimonial.company}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              {/* Arrows - Desktop */}
              <div className="hidden lg:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -left-16 top-1/2 -translate-y-1/2"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Vorheriges Testimonial</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -right-16 top-1/2 -translate-y-1/2"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Nächstes Testimonial</span>
                </Button>
              </div>

              {/* Dots */}
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-accent"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
