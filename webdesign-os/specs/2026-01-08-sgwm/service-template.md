# Service Page Template Specification

Diese Vorlage gilt für alle 6 Service-Unterseiten:
- Finanzplanung
- Vorsorge & Pensionierung
- Versicherungen
- Immobilien
- Nachlass & Erbschaft
- KMU-Services

---

## Common Structure

| Section | Type | Variant |
|---------|------|---------|
| 1. Hero | hero | service-image |
| 2. Features | features | checklist |
| 3. Process | process | horizontal-steps |
| 4. Testimonials | testimonials | single-quote |
| 5. FAQ | faq | accordion |
| 6. CTA | cta | standard |

---

## Shared Props Interface

```typescript
interface ServicePageProps {
  // Hero
  title: string;
  subtitle: string;
  heroImage: ImageProps;

  // Features
  features: Feature[];

  // Process
  processSteps: ProcessStep[];

  // Testimonials
  testimonials: Testimonial[];

  // FAQ
  faqs: FAQ[];

  // CTA
  ctaHeadline?: string;
}

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}
```

---

## Section Specifications

### 1. Hero (service-image)

**Layout:** Split - Image left, Text right
**Image:** Full height, object-cover
**Text:** Vertically centered

```typescript
{
  layout: "split",
  imagePosition: "left",
  content: {
    badge: "Service-Name", // optional
    headline: "[Service Title]",
    description: "[Service description paragraph]",
    cta: {
      text: "Erstgespräch buchen",
      href: "/erstgespraech"
    }
  }
}
```

**Responsive:**
| Breakpoint | Layout | Image |
|------------|--------|-------|
| Desktop | 50/50 split | Left, 100% height |
| Tablet | Stacked | Top, 50vh |
| Mobile | Stacked | Top, 40vh |

---

### 2. Features (checklist)

**Layout:** 2-column grid with gold checkmarks

```typescript
{
  headline: "Was wir für Sie tun",
  features: [
    { title: "Feature 1", description: "..." },
    { title: "Feature 2", description: "..." },
    // 4-6 features
  ],
  checkColor: "accent" // gold
}
```

**Responsive:**
| Breakpoint | Columns |
|------------|---------|
| Desktop | 2 |
| Tablet | 2 |
| Mobile | 1 |

**Animation:** Stagger fade-in from left

---

### 3. Process (horizontal-steps)

**Layout:** 4 steps horizontal with connector line

```typescript
{
  headline: "Unser Prozess",
  steps: [
    { number: 1, title: "Erstgespräch", description: "..." },
    { number: 2, title: "Analyse", description: "..." },
    { number: 3, title: "Strategie", description: "..." },
    { number: 4, title: "Umsetzung", description: "..." }
  ],
  connector: {
    color: "accent",
    style: "solid"
  }
}
```

**Responsive:**
| Breakpoint | Layout |
|------------|--------|
| Desktop | Horizontal, 4 columns |
| Tablet | 2x2 grid |
| Mobile | Vertical stack |

**Animation:**
- Line draws on scroll
- Steps appear sequentially

---

### 4. Testimonials (single-quote)

**Layout:** Large quote card, centered

```typescript
{
  testimonials: [
    {
      quote: "...",
      author: "Name",
      role: "Position, Unternehmen",
      image: "/images/testimonials/person.webp"
    },
    // 2 testimonials, show 1 at a time
  ]
}
```

**Styling:**
- Quote: Playfair Display, italic
- Gold quotation mark decoration
- Author image: 80x80, rounded

---

### 5. FAQ (accordion)

**Layout:** Single column, expandable items

```typescript
{
  headline: "Häufige Fragen",
  faqs: [
    { question: "...", answer: "..." },
    // 4 FAQs per service
  ],
  expandIcon: {
    color: "accent",
    type: "plus-minus"
  }
}
```

**Schema:** FAQPage schema markup

**Accessibility:**
- `aria-expanded`
- `aria-controls`
- Keyboard navigation

---

### 6. CTA (standard)

**Layout:** Centered, accent background option

```typescript
{
  headline: "Bereit für den nächsten Schritt?",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
    variant: "gold"
  },
  background: "primary" // navy
}
```

---

## SEO Template

### Meta Tags Pattern

```
Title: [Service Name] | Swiss Group Wealth Management
Description: [Service-specific description, 120-160 chars]
```

### Heading Structure

```
H1: [Service Name]
├── H2: Was wir für Sie tun
│   └── (Features - not H3)
├── H2: Unser Prozess
│   └── (Steps - not H3)
├── H2: Das sagen unsere Kunden
├── H2: Häufige Fragen
│   └── (FAQ items - not headings, use summary/details)
└── H2: Bereit für den nächsten Schritt?
```

### Schema Markup

```json
{
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Description]",
  "provider": {
    "@type": "Organization",
    "name": "Swiss Group Wealth Management AG"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Switzerland"
  }
}
```

Plus FAQPage schema for the FAQ section.

---

## Breadcrumb

```
Home > Dienstleistungen > [Service Name]
```

Schema:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "/" },
    { "position": 2, "name": "Dienstleistungen", "item": "/dienstleistungen" },
    { "position": 3, "name": "[Service]", "item": "/dienstleistungen/[slug]" }
  ]
}
```

---

## Components (Shared)

| Component | Location |
|-----------|----------|
| ServiceHero | `components/sections/ServiceHero.tsx` |
| FeatureChecklist | `components/sections/FeatureChecklist.tsx` |
| ProcessSteps | `components/sections/ProcessSteps.tsx` |
| TestimonialCard | `components/ui/TestimonialCard.tsx` |
| FAQAccordion | `components/sections/FAQAccordion.tsx` |
| CTASection | `components/sections/CTASection.tsx` |

---

## Image Requirements per Service

| Type | Size | Format |
|------|------|--------|
| Hero | 1200x800 | WebP |
| Testimonial | 80x80 | WebP |
| OG | 1200x630 | PNG |
