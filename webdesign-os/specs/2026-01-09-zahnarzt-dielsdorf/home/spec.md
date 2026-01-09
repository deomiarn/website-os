# Home (Onepager) Specification

## Overview

| Eigenschaft | Wert |
|-------------|------|
| Page | Home (Onepager) |
| Path | `/` |
| Sections | 7 |
| Custom Components | 7 |
| Design Excellence | 7.6/10 |

---

## Design System Reference

| Token | Wert |
|-------|------|
| Primary | `oklch(0.55 0.1 145)` - Sage Green |
| Accent | `oklch(0.75 0.14 85)` - Warm Gold |
| Background | `oklch(0.97 0.015 85)` - Off-White |
| Display Font | Space Grotesk |
| Body Font | Inter |
| Border Radius | `0.625rem` (md) |
| Animations | Subtle (250ms default) |

---

## Sections

### 1. Hero Section

**Type:** Custom - Asymmetric Split
**Design Score:** 8/10

#### Layout
- Desktop: 60/40 Split, Text links, Bild rechts asymmetrisch
- Tablet: 50/50 Split, kleinere Headline
- Mobile: Bild oben, Text unten, volle Breite

#### Props
```typescript
interface HeroSectionProps {
  headline: string;           // "Ihre Zahnarztpraxis in Dielsdorf"
  subheadline: string;        // "Familiäre Atmosphäre. Moderne Behandlung."
  primaryCTA: {
    text: string;             // "Termin vereinbaren"
    action: string;           // "#contact"
  };
  phone: string;              // "+41 44 853 22 74"
  showPhone: boolean;         // true
  image: ImageProps;          // Placeholder 16:9
}
```

#### Visual Elements
- Grosse Display-Headline (Space Grotesk, 5xl)
- Subline in Muted-Farbe
- Primary CTA Button mit Hover-Animation
- Telefonnummer als sekundärer Link
- Bild mit abgerundeten Ecken (radius-lg)

#### Animation
```typescript
// Framer Motion
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
}
```

#### SEO
- H1: "Ihre Zahnarztpraxis in Dielsdorf" (enthält Primary Keyword)
- Image alt: "Zahnarztpraxis Dr. Mirjam Gaggl in Dielsdorf - Modernes Behandlungszimmer"

---

### 2. About Section (Über uns)

**Type:** Custom - Content-Image Split
**Design Score:** 7/10

#### Layout
- Desktop: 50/50 Split, Text links mit Werte-Icons, Bild rechts
- Tablet: Text oben, Bild unten, Werte 3-spaltig
- Mobile: Bild oben, Text unten, Werte 1-spaltig

#### Props
```typescript
interface AboutSectionProps {
  headline: string;           // "Willkommen in unserer Praxis"
  text: string;               // 2-3 Absätze
  values: {
    icon: string;             // "shield-check" | "award" | "heart"
    title: string;            // "Vertrauen" etc.
    description: string;
  }[];
  image: ImageProps;          // Placeholder 4:3
  includeHistory: boolean;    // true
}
```

#### Visual Elements
- Section-Headline (3xl)
- Body-Text mit guter Lesbarkeit (base, 1.6 line-height)
- 3 Value-Cards mit Icons in Primary-Farbe
- Subtiler Card-Schatten auf Werte

#### Animation
- fadeIn für gesamte Section (on scroll)
- staggered fadeInUp für Werte-Icons

#### SEO
- H2: "Willkommen in unserer Praxis"

---

### 3. Services Section (Behandlungen)

**Type:** Custom - Categorized Grid
**Design Score:** 8/10

#### Layout
- Desktop: 3-4 Spalten Grid, Kategorien als Tabs/Pills
- Tablet: 2 Spalten Grid
- Mobile: 1 Spalte, Kategorien als Accordion

#### Props
```typescript
interface ServicesSectionProps {
  headline: string;           // "Unsere Behandlungen"
  subheadline: string;        // "Das gesamte Spektrum der modernen Zahnmedizin"
  categories: {
    name: string;             // "Vorsorge", "Zahnerhalt", etc.
    services: {
      name: string;
      description: string;
    }[];
  }[];
  displayType: "cards" | "list";
  groupByCategory: boolean;
}
```

#### Categories & Services
1. **Vorsorge** (2): Prophylaxe, Dentalhygiene
2. **Zahnerhalt** (3): Konservierende Zahnmedizin, Inlay/Onlay, Endodontologie
3. **Zahnfleisch** (1): Parodontologie
4. **Ästhetik** (3): Bleaching, Veneers, Invisalign
5. **Zahnersatz** (2): Kronen/Brücken, Teil/Total-Prothetik

#### Visual Elements
- Zentrierte Section-Headline
- Kategorie-Badges als Pills (Primary Background, light)
- Kompakte Service-Cards mit Icon + Name + Beschreibung
- Hover-Effekt: scale 1.02, shadow-md

#### Animation
- fadeIn für Headline
- staggered scaleIn für Cards (0.1s delay each)

#### SEO
- H2: "Unsere Behandlungen"
- H3: Je eine pro Kategorie

---

### 4. Team Section

**Type:** Custom - Portrait Grid
**Design Score:** 7/10

#### Layout
- Desktop: 5 Spalten Grid (2 Reihen à 5)
- Tablet: 3 Spalten Grid
- Mobile: 2 Spalten Grid

#### Props
```typescript
interface TeamSectionProps {
  headline: string;           // "Unser Team"
  subheadline: string;        // "Kompetent und herzlich"
  members: {
    name: string;
    role: string;
    image: ImageProps;        // Placeholder 1:1
  }[];
}
```

#### Team Members (10)
1. Dr. med. dent. Mirjam Gaggl - Zahnärztin und Praxisinhaberin
2. Agata Ostrowska-Blystak - Zahnärztin
3. Rossana Leone - Prophylaxeassistentin
4. Daniela Vicario - Prophylaxeassistentin
5. Sandra Schmassmann - Dentalassistentin
6. Katharina Sandor - Dentalsekretärin
7. Christine Egli - Dentalsekretärin
8. Daniela Balbo - Dentalassistentin
9. Andela Sucur - Dentalassistentin in Ausbildung
10. Suhejla Kryezi - Dentalassistentin in Ausbildung

#### Visual Elements
- Zentrierte Section-Headline
- Runde Portrait-Placeholder (aspect-ratio 1:1)
- Name in Display-Font (Medium weight)
- Rolle in Muted-Farbe (sm size)
- Subtiler Hover-Effekt: scale 1.05

#### Animation
- staggered fadeInUp für Team-Cards

#### SEO
- H2: "Unser Team"

---

### 5. Features Section (Besonderheiten)

**Type:** Custom - Feature Showcase
**Design Score:** 8/10

#### Layout
- Desktop: Horizontales Layout, alternierend (Bild links/rechts)
- Tablet: Vertikaler Stack mit grösseren Bildern
- Mobile: Vertikaler Stack

#### Props
```typescript
interface FeaturesSectionProps {
  headline: string;           // "Moderne Technologie"
  subheadline: string;        // "Für Ihre optimale Behandlung"
  features: {
    name: string;
    headline: string;
    description: string;
    image: ImageProps;        // Placeholder 16:9
  }[];
}
```

#### Features (3)
1. **Invisalign** - Unsichtbare Zahnspange - Diskrete Zahnkorrektur mit transparenten Schienen
2. **Intraoralscanner** - Digitaler Abdruck - Präzise 3D-Scans ohne unangenehmes Abdruckmaterial
3. **The Wand Plus** - Schmerzfreie Anästhesie - Computergesteuerte Betäubung für maximalen Komfort

#### Visual Elements
- Feature-Cards mit grossem Bild-Placeholder
- Headline für jedes Feature (2xl)
- Nummerierung (01, 02, 03) in Accent-Farbe
- Beschreibungstext

#### Animation
- fadeInUp für jede Feature-Card (on scroll)

#### SEO
- H2: "Moderne Technologie"
- H3: Je eine pro Feature

---

### 6. CTA Section

**Type:** Custom - Centered CTA
**Design Score:** 8/10

#### Layout
- Desktop/Tablet/Mobile: Zentriert, volle Breite
- Mobile: Buttons untereinander

#### Props
```typescript
interface CTASectionProps {
  headline: string;           // "Vereinbaren Sie Ihren Termin"
  subheadline: string;        // "Wir freuen uns auf Sie!"
  buttons: {
    text: string;
    icon: string;             // "phone" | "mail"
    action: string;           // "tel:..." | "mailto:..."
    variant: "primary" | "secondary";
  }[];
  background: "primary" | "accent";
}
```

#### Visual Elements
- Headline in Primary-Foreground (Weiss)
- Subline in leicht transparentem Weiss (opacity 80%)
- Telefon-Button (Primary-Style auf hellem BG)
- E-Mail-Button (Secondary/Outline-Style)
- Icons in Buttons (Lucide)

#### Animation
- fadeIn für gesamte Section

#### SEO
- H2: "Vereinbaren Sie Ihren Termin"

---

### 7. Contact Section (Kontakt/Footer)

**Type:** Custom - Multi-Column Footer
**Design Score:** 7/10

#### Layout
- Desktop: 4 Spalten (Info | Zeiten | Form | Map)
- Tablet: 2 Spalten Grid
- Mobile: 1 Spalte, Map volle Breite

#### Props
```typescript
interface ContactSectionProps {
  headline: string;           // "Kontakt"
  address: {
    street: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
  googleMaps: {
    enabled: boolean;
    coordinates: { lat: number; lng: number };
  };
  contactForm: {
    enabled: boolean;
    fields: string[];         // ["name", "email", "message"]
  };
  onlineBooking: {
    enabled: boolean;
    url: string;
  };
  badges: {
    name: string;
    description: string;
    showLogo: boolean;
  }[];
}
```

#### Opening Hours
| Tag | Zeiten |
|-----|--------|
| Montag | 08:00–19:00 |
| Dienstag | 08:00–20:00 |
| Mittwoch | 08:00–17:00 |
| Donnerstag | 08:00–18:00 |
| Freitag | 08:00–13:00 |
| Samstag | Geschlossen |
| Sonntag | Geschlossen |

#### Visual Elements
- Section-Headline
- Kontaktdaten mit Icons (MapPin, Phone, Mail)
- Öffnungszeiten als Liste
- Kompaktes Kontaktformular (3 Felder)
- Google Maps Embed (responsive)
- SSO-Logo Badge
- Online-Buchung Button (Accent)

#### Animation
- fadeIn für Content

#### SEO
- H2: "Kontakt"
- LocalBusiness Schema Markup

---

## States & Edge Cases

### Button States
| State | Styling |
|-------|---------|
| Default | bg-primary text-white |
| Hover | bg-primary/90, scale 1.02 |
| Focus | ring-2 ring-primary ring-offset-2 |
| Active | scale 0.98 |
| Disabled | opacity 50%, cursor not-allowed |

### Form States
| State | Styling |
|-------|---------|
| Empty | placeholder text (muted) |
| Filled | normal text |
| Focus | ring-2 ring-primary |
| Error | ring-2 ring-destructive, error message below |
| Success | checkmark icon, success message |

### Image Handling
| Case | Handling |
|------|----------|
| Loading | Blur placeholder (next/image) |
| Missing | Gradient Placeholder (primary/10) |
| Alt-Text fehlt | Build Warning |

### Content Edge Cases
| Case | Handling |
|------|----------|
| Lange Headlines | text-balance, max 3 Zeilen |
| Leere Section | Nicht rendern (conditional) |
| Loading | Skeleton Animation |

---

## Image Requirements

| Position | Grösse | Format | Alt-Text |
|----------|--------|--------|----------|
| Hero | 1200x800 | WebP/AVIF | "Zahnarztpraxis Dr. Gaggl Dielsdorf" |
| About | 800x600 | WebP | "Praxis-Innenraum" |
| Team (10x) | 400x400 | WebP | "{Name} - {Rolle}" |
| Features (3x) | 800x450 | WebP | "{Feature-Name}" |
| OG Image | 1200x630 | PNG | "Zahnarzt Dielsdorf" |

### Next.js Image Config
```tsx
<Image
  src={image}
  alt={descriptiveAlt}
  fill
  priority={isHero}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL={blurHash}
  className="object-cover rounded-lg"
/>
```

---

## Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | < 640px | 1-2 |
| Tablet | 640-1024px | 2-3 |
| Desktop | > 1024px | 3-5 |

---

## Metadata

| Feld | Wert |
|------|------|
| Created | 2026-01-09 |
| Design System | v1.0.0 |
| Page Shape | home.json |
