# Swiss Group Wealth Management - Technical Specifications

**Generated:** 2026-01-08
**Project:** Swiss Group Wealth Management AG
**Website:** sg-wm.ch

---

## Overview

| Metric | Value |
|--------|-------|
| Total Pages | 13 |
| Total Sections | 63 |
| Custom Components | ~25 |
| Shared Components | ~10 |
| Integrations | Sanity (Blog), Cal.com (Booking), Resend (Forms) |

---

## Page Specifications

| Page | Path | Spec | Sections |
|------|------|------|----------|
| Home | `/` | [spec.md](./home/spec.md) | 6 |
| Über uns | `/ueber-uns` | [spec.md](./about/spec.md) | 5 |
| Dienstleistungen | `/dienstleistungen` | [spec.md](./services/spec.md) | 3 |
| Finanzplanung | `/dienstleistungen/finanzplanung` | [spec.md](./financial-planning/spec.md) | 6 |
| Vorsorge | `/dienstleistungen/vorsorge-pensionierung` | [spec.md](./pension/spec.md) | 6 |
| Versicherungen | `/dienstleistungen/versicherungen` | [spec.md](./insurance/spec.md) | 6 |
| Immobilien | `/dienstleistungen/immobilien` | [spec.md](./real-estate/spec.md) | 6 |
| Nachlass | `/dienstleistungen/nachlass-erbschaft` | [spec.md](./estate/spec.md) | 6 |
| KMU | `/dienstleistungen/kmu` | [spec.md](./kmu/spec.md) | 6 |
| Kontakt | `/kontakt` | [spec.md](./contact/spec.md) | 2 |
| Erstgespräch | `/erstgespraech` | [spec.md](./booking/spec.md) | 5 |
| Blog | `/ratgeber` | [spec.md](./blog/spec.md) | 3 |
| FAQ | `/faq` | [spec.md](./faq/spec.md) | 3 |

---

## Templates

| Template | Applies To | Spec |
|----------|------------|------|
| Service Page | 6 service sub-pages | [service-template.md](./service-template.md) |

---

## SEO Summary

### Primary Keywords by Page

| Page | Primary Keyword |
|------|-----------------|
| Home | Finanzberatung Pfäffikon Schweiz |
| Über uns | Finanzberater Pfäffikon Team |
| Dienstleistungen | Finanzdienstleistungen Schweiz |
| Finanzplanung | Finanzplanung Schweiz |
| Vorsorge | Vorsorgeberatung Schweiz |
| Versicherungen | Versicherungsberatung Schweiz |
| Immobilien | Immobilienfinanzierung Schweiz |
| Nachlass | Nachlassplanung Schweiz |
| KMU | KMU Finanzberatung Schweiz |
| Kontakt | Kontakt Finanzberatung Pfäffikon |
| Erstgespräch | Erstgespräch Finanzberatung buchen |
| Blog | Finanz Ratgeber Schweiz |
| FAQ | FAQ Finanzberatung |

### Schema Markup

| Schema Type | Pages |
|-------------|-------|
| WebPage | All |
| Organization | Home |
| LocalBusiness | Home, Contact |
| Service | All service pages |
| FAQPage | FAQ, Service pages |
| Blog | Blog listing |
| Article | Blog posts |
| BreadcrumbList | All except Home |

---

## Components to Create

### Section Components

| Component | Location |
|-----------|----------|
| HeroSection | `components/sections/HeroSection.tsx` |
| AboutHero | `components/sections/AboutHero.tsx` |
| MinimalHero | `components/sections/MinimalHero.tsx` |
| ServiceHero | `components/sections/ServiceHero.tsx` |
| BookingHero | `components/sections/BookingHero.tsx` |
| StatsSection | `components/sections/StatsSection.tsx` |
| ServicesGrid | `components/sections/ServicesGrid.tsx` |
| MasonryGrid | `components/sections/MasonryGrid.tsx` |
| ValuesGrid | `components/sections/ValuesGrid.tsx` |
| Timeline | `components/sections/Timeline.tsx` |
| TeamGrid | `components/sections/TeamGrid.tsx` |
| FeatureChecklist | `components/sections/FeatureChecklist.tsx` |
| ProcessSteps | `components/sections/ProcessSteps.tsx` |
| TestimonialsCarousel | `components/sections/TestimonialsCarousel.tsx` |
| LogoCloud | `components/sections/LogoCloud.tsx` |
| FAQAccordion | `components/sections/FAQAccordion.tsx` |
| CTASection | `components/sections/CTASection.tsx` |
| ContactInfo | `components/sections/ContactInfo.tsx` |

### UI Components

| Component | Location |
|-----------|----------|
| ServiceCard | `components/ui/ServiceCard.tsx` |
| TeamMemberCard | `components/ui/TeamMemberCard.tsx` |
| TestimonialCard | `components/ui/TestimonialCard.tsx` |
| FilterTabs | `components/ui/FilterTabs.tsx` |
| AdvisorCard | `components/ui/AdvisorCard.tsx` |
| BenefitsBadges | `components/ui/BenefitsBadges.tsx` |

### Form Components

| Component | Location |
|-----------|----------|
| ContactForm | `components/forms/ContactForm.tsx` |

### Blog Components

| Component | Location |
|-----------|----------|
| FeaturedPosts | `components/blog/FeaturedPosts.tsx` |
| PostGrid | `components/blog/PostGrid.tsx` |
| PostCard | `components/blog/PostCard.tsx` |
| CategoryFilter | `components/blog/CategoryFilter.tsx` |

### Integration Components

| Component | Location |
|-----------|----------|
| CalEmbed | `components/integrations/CalEmbed.tsx` |
| GoogleMap | `components/integrations/GoogleMap.tsx` |

---

## Design System Reference

| Token | Value |
|-------|-------|
| Primary (Navy) | oklch(0.35 0.08 250) |
| Accent (Gold) | oklch(0.70 0.14 85) |
| Background | oklch(0.97 0.01 90) |
| Display Font | Playfair Display |
| Body Font | Source Sans Pro |
| Border Radius | 0.375rem |

---

## Next Steps

1. `/implement` - Start implementation
2. Set up Next.js project with TypeScript
3. Install dependencies (shadcn/ui, Framer Motion, Sanity)
4. Implement design tokens in Tailwind config
5. Create components following specs
6. Connect Sanity CMS for blog
7. Set up Cal.com integration
8. Configure Resend for forms
