# Home Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Home |
| Path | `/` |
| Sections | 6 |
| Purpose | Vertrauensaufbau, Übersicht, Lead-Capture |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Unabhängige Finanzberatung Pfäffikon | SG-WM | 45/60 |
| Description | Swiss Group Wealth Management - Ihre unabhängige Finanzberatung in Pfäffikon. Vermögensplanung, Vorsorge & Versicherungen für Privatpersonen und KMU. | 156/160 |
| Canonical | https://sg-wm.ch/ | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Finanzberatung Pfäffikon Schweiz | H1, Title, Meta, 1. Paragraph |
| Secondary | Wealth Management Schweiz | H2, Body |
| Secondary | Vermögensberatung | H2, Body |
| Secondary | unabhängige Finanzberatung | Body, Alt-Text |

### Heading Structure

```
H1: Treffen Sie die richtigen Entscheidungen, zur richtigen Zeit
├── H2: Unsere Kompetenz in Zahlen (Stats)
├── H2: Unsere Dienstleistungen (Services)
│   ├── H3: Finanzplanung
│   ├── H3: Vorsorge & Pensionierung
│   ├── H3: Versicherungen
│   ├── H3: Immobilien
│   ├── H3: Nachlass & Erbschaft
│   └── H3: KMU-Services
├── H2: Das sagen unsere Kunden (Testimonials)
├── H2: Unsere Partner (Logos)
└── H2: Starten Sie jetzt (CTA)
```

### Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Swiss Group Wealth Management - Unabhängige Finanzberatung",
  "description": "Ihre unabhängige Finanzberatung in Pfäffikon...",
  "publisher": {
    "@type": "Organization",
    "name": "Swiss Group Wealth Management AG",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sg-wm.ch/logo.png"
    }
  }
}
```

Additional Schema:
- `Organization` (with contactPoint, address)
- `LocalBusiness` (for local SEO)

### Open Graph

| Property | Value |
|----------|-------|
| og:title | Unabhängige Finanzberatung Pfäffikon | SG-WM |
| og:description | Swiss Group Wealth Management - Vermögensplanung, Vorsorge & Versicherungen |
| og:image | /og/home.png (1200x630) |
| og:type | website |
| og:url | https://sg-wm.ch/ |

### Internal Links

| From | To | Anchor Text |
|------|-----|------------|
| Home | /erstgespraech | Erstgespräch vereinbaren |
| Home | /dienstleistungen | Alle Dienstleistungen |
| Home | /ueber-uns | Über uns |
| Home | /kontakt | Kontakt |

---

## Design System Reference

| Token | Value |
|-------|-------|
| Primary | oklch(0.35 0.08 250) |
| Accent | oklch(0.70 0.14 85) |
| Background | oklch(0.97 0.01 90) |
| Display Font | Playfair Display |
| Body Font | Source Sans Pro |
| Border Radius | 0.375rem |

---

## Sections

### 1. Hero Section

**Type:** Custom (fullwidth-overlay)
**Inspiration:** hero1.png

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| headline | string | yes | - |
| subheadline | string | no | - |
| image | ImageProps | yes | - |
| primaryCTA | CTAProps | yes | - |
| secondaryCTA | CTAProps | no | - |

#### Content

```typescript
{
  headline: "Treffen Sie die richtigen Entscheidungen, zur richtigen Zeit.",
  subheadline: "Unabhängige Finanzberatung für Privatpersonen und KMU in der Schweiz",
  primaryCTA: {
    text: "Erstgespräch vereinbaren",
    href: "/erstgespraech",
    variant: "gold"
  },
  secondaryCTA: {
    text: "Mehr erfahren",
    href: "#services",
    variant: "ghost"
  }
}
```

#### Responsive

| Breakpoint | Layout | Image | Typography |
|------------|--------|-------|------------|
| Desktop | Fullwidth, text overlay | Cover, 80vh | H1: 4rem |
| Tablet | Fullwidth, text overlay | Cover, 70vh | H1: 3rem |
| Mobile | Stacked, image top | 60vh | H1: 2.5rem |

#### Animation

```typescript
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}
```

---

### 2. Stats Section

**Type:** Custom (horizontal-bar)
**Inspiration:** bild3.jpg

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| stats | StatItem[] | yes | - |
| background | string | no | "primary" |
| animated | boolean | no | true |

#### Content

```typescript
{
  stats: [
    { value: "25+", label: "Jahre Erfahrung", suffix: "" },
    { value: "500", label: "Zufriedene Kunden", suffix: "+" },
    { value: "150", label: "Mio. CHF betreut", prefix: "CHF ", suffix: "M+" },
    { value: "98", label: "Kundenzufriedenheit", suffix: "%" }
  ]
}
```

#### Responsive

| Breakpoint | Layout | Stats Display |
|------------|--------|---------------|
| Desktop | Single row, 4 columns | Inline |
| Tablet | 2x2 grid | Stacked |
| Mobile | Single column | Stacked |

#### Animation

- Counter animation on scroll into view
- `useInView` hook with `triggerOnce: true`
- Duration: 1500ms
- Easing: easeOut

---

### 3. Services Overview Section

**Type:** Custom (image-cards)

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| headline | string | yes | - |
| services | ServiceCard[] | yes | - |
| columns | number | no | 3 |

#### Content

```typescript
{
  headline: "Unsere Dienstleistungen",
  subheadline: "Massgeschneiderte Lösungen für Ihre finanzielle Zukunft",
  services: [
    {
      title: "Finanzplanung",
      description: "Ganzheitliche Vermögensberatung",
      image: "/images/services/finanzplanung.webp",
      href: "/dienstleistungen/finanzplanung"
    },
    // ... 5 more
  ]
}
```

#### Responsive

| Breakpoint | Columns | Card Size |
|------------|---------|-----------|
| Desktop | 3 | 380px width |
| Tablet | 2 | 50% |
| Mobile | 1 | 100% |

#### Animation

- Stagger fade-in on scroll
- Card hover: scale(1.02), shadow-lg
- Gold border on hover

---

### 4. Testimonials Section

**Type:** Custom (carousel)
**Inspiration:** bild2.jpg

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| testimonials | Testimonial[] | yes | - |
| autoplay | boolean | no | false |

#### Responsive

| Breakpoint | Display | Navigation |
|------------|---------|------------|
| Desktop | 1 large quote | Dots + Arrows |
| Tablet | 1 large quote | Dots only |
| Mobile | 1 quote, smaller | Dots only |

#### Animation

- Fade transition between slides
- Quote mark fade-in
- Duration: 400ms

---

### 5. Partner Logos Section

**Type:** Custom (grayscale-hover)
**Inspiration:** bild3.jpg

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| logos | Logo[] | yes | - |
| title | string | no | - |

#### Responsive

| Breakpoint | Logos per row | Logo size |
|------------|---------------|-----------|
| Desktop | 6 | 120px |
| Tablet | 4 | 100px |
| Mobile | 3 | 80px |

#### Animation

- Grayscale to color on hover
- Subtle scale(1.05) on hover

---

### 6. CTA Section

**Type:** Custom (contrast-background)

#### Props

| Prop | Type | Required | Default |
|------|------|----------|---------|
| headline | string | yes | - |
| description | string | no | - |
| cta | CTAProps | yes | - |

#### Content

```typescript
{
  headline: "Bereit für den nächsten Schritt?",
  description: "Vereinbaren Sie ein kostenloses Erstgespräch",
  cta: {
    text: "Erstgespräch buchen",
    href: "/erstgespraech",
    variant: "gold"
  }
}
```

#### Responsive

| Breakpoint | Layout | Padding |
|------------|--------|---------|
| Desktop | Centered, max-w-2xl | py-24 |
| Tablet | Centered | py-16 |
| Mobile | Centered | py-12 |

---

## Components to Create

### Custom Section Components

| Component | Location | Props Interface |
|-----------|----------|-----------------|
| HeroSection | `components/sections/HeroSection.tsx` | HeroSectionProps |
| StatsSection | `components/sections/StatsSection.tsx` | StatsSectionProps |
| ServicesGrid | `components/sections/ServicesGrid.tsx` | ServicesGridProps |
| TestimonialsCarousel | `components/sections/TestimonialsCarousel.tsx` | TestimonialsProps |
| LogoCloud | `components/sections/LogoCloud.tsx` | LogoCloudProps |
| CTASection | `components/sections/CTASection.tsx` | CTASectionProps |

### Shared Components

| Component | Source |
|-----------|--------|
| Container | Custom |
| Button | shadcn/ui |
| Card | shadcn/ui |
| Badge | shadcn/ui |

---

## States & Edge Cases

### Button States

| State | Styling |
|-------|---------|
| Default | bg-accent text-accent-foreground |
| Hover | bg-accent/90, scale-102 |
| Focus | ring-2 ring-accent ring-offset-2 |
| Active | scale-98 |
| Disabled | opacity-50, cursor-not-allowed |

### Image Handling

| Case | Handling |
|------|----------|
| Loading | Blur placeholder |
| Error | Gradient fallback |
| Missing alt | Build warning |

### Content Edge Cases

| Case | Handling |
|------|----------|
| Long headline | max 3 lines, text-balance |
| Missing testimonial | Hide section |
| < 3 services | Adjust grid |

---

## Image Requirements

| Position | Size | Format | Alt Text |
|----------|------|--------|----------|
| Hero | 1920x1080 | WebP/AVIF | Finanzberatung Pfäffikon - Professionelle Beratung |
| Service Cards | 800x600 | WebP | {Service Name} - SG-WM |
| Testimonials | 100x100 | WebP | {Person Name}, {Role} |
| Logos | 200x80 | PNG/SVG | {Partner Name} Logo |
| OG Image | 1200x630 | PNG | Swiss Group Wealth Management |

### Next.js Image Config

```tsx
<Image
  src={heroImage}
  alt="Finanzberatung Pfäffikon - Professionelle Beratung"
  fill
  priority
  sizes="100vw"
  placeholder="blur"
  blurDataURL={heroBlurHash}
  className="object-cover"
/>
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TTI | < 3.5s |

### Optimizations

- Hero image: priority loading
- Below-fold: lazy loading
- Stats: client-side animation (no SSR)
- Testimonials: preload adjacent slides
