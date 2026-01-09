# Home (Onepager) Component Specification

## Component Overview

| Component | Type | Location |
|-----------|------|----------|
| HeroSection | Custom Section | `components/sections/HeroSection.tsx` |
| AboutSection | Custom Section | `components/sections/AboutSection.tsx` |
| ServicesSection | Custom Section | `components/sections/ServicesSection.tsx` |
| TeamSection | Custom Section | `components/sections/TeamSection.tsx` |
| FeaturesSection | Custom Section | `components/sections/FeaturesSection.tsx` |
| CTASection | Custom Section | `components/sections/CTASection.tsx` |
| ContactSection | Custom Section | `components/sections/ContactSection.tsx` |
| Container | Shared | `components/ui/Container.tsx` |
| SectionHeader | Shared | `components/ui/SectionHeader.tsx` |
| Button | shadcn/ui | `components/ui/button.tsx` |
| Card | shadcn/ui | `components/ui/card.tsx` |
| Input | shadcn/ui | `components/ui/input.tsx` |
| Textarea | shadcn/ui | `components/ui/textarea.tsx` |

---

## TypeScript Interfaces

### Shared Types

```typescript
// types/index.ts

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export interface CTAProps {
  text: string;
  action: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
```

---

## Section Components

### 1. HeroSection

```typescript
// components/sections/HeroSection.tsx

interface HeroSectionProps extends SectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAProps;
  phone?: string;
  showPhone?: boolean;
  image: ImageProps;
}

// Default values
const defaultProps = {
  headline: "Ihre Zahnarztpraxis in Dielsdorf",
  subheadline: "Familiäre Atmosphäre. Moderne Behandlung.",
  primaryCTA: {
    text: "Termin vereinbaren",
    action: "#contact",
    variant: "primary"
  },
  phone: "+41 44 853 22 74",
  showPhone: true,
  image: {
    src: "/images/hero-placeholder.jpg",
    alt: "Zahnarztpraxis Dr. Mirjam Gaggl in Dielsdorf",
    priority: true
  }
};
```

**Implementation Notes:**
- Use `motion.div` from Framer Motion for animations
- Headline: `text-5xl font-display font-bold`
- Subheadline: `text-lg text-muted-foreground`
- Layout: CSS Grid with `grid-cols-1 lg:grid-cols-[1.2fr_1fr]`
- Image: `rounded-lg` with `object-cover`

---

### 2. AboutSection

```typescript
// components/sections/AboutSection.tsx

interface Value {
  icon: "shield-check" | "award" | "heart";
  title: string;
  description: string;
}

interface AboutSectionProps extends SectionProps {
  headline: string;
  text: string | string[];  // Can be single string or array of paragraphs
  values: Value[];
  image: ImageProps;
  includeHistory?: boolean;
}

// Default values
const defaultProps = {
  headline: "Willkommen in unserer Praxis",
  text: "...",
  values: [
    { icon: "shield-check", title: "Vertrauen", description: "Ihre Gesundheit in guten Händen" },
    { icon: "award", title: "Kompetenz", description: "Moderne Zahnmedizin auf höchstem Niveau" },
    { icon: "heart", title: "Freundlichkeit", description: "Familiäre Atmosphäre für Ihr Wohlbefinden" }
  ],
  image: {
    src: "/images/about-placeholder.jpg",
    alt: "Praxis-Innenraum"
  },
  includeHistory: true
};
```

**Implementation Notes:**
- Values as horizontal cards on desktop, vertical on mobile
- Icon colors: `text-primary`
- Background: `bg-card`

---

### 3. ServicesSection

```typescript
// components/sections/ServicesSection.tsx

interface Service {
  name: string;
  description: string;
  icon?: string;
}

interface Category {
  name: string;
  services: Service[];
}

interface ServicesSectionProps extends SectionProps {
  headline: string;
  subheadline: string;
  categories: Category[];
  displayType?: "cards" | "list";
  groupByCategory?: boolean;
}

// Default values
const defaultProps = {
  headline: "Unsere Behandlungen",
  subheadline: "Das gesamte Spektrum der modernen Zahnmedizin",
  categories: [
    {
      name: "Vorsorge",
      services: [
        { name: "Prophylaxe", description: "Vorbeugung" },
        { name: "Dentalhygiene", description: "Zahnreinigung" }
      ]
    },
    {
      name: "Zahnerhalt",
      services: [
        { name: "Konservierende Zahnmedizin", description: "Zahnerhalt" },
        { name: "Inlay / Onlay", description: "Keramikfüllung" },
        { name: "Endodontologie", description: "Wurzelbehandlung" }
      ]
    },
    {
      name: "Zahnfleisch",
      services: [
        { name: "Parodontologie", description: "Zahnfleischbehandlung" }
      ]
    },
    {
      name: "Ästhetik",
      services: [
        { name: "Bleaching", description: "Bleichen" },
        { name: "Veneers", description: "Keramik-Verblendschalen" },
        { name: "Invisalign", description: "Unsichtbare Zahnspange" }
      ]
    },
    {
      name: "Zahnersatz",
      services: [
        { name: "Kronen- / Brücken-Prothetik", description: "Festsitzender Zahnersatz" },
        { name: "Teil- / Total-Prothetik", description: "Abnehmbarer Zahnersatz" }
      ]
    }
  ],
  displayType: "cards",
  groupByCategory: true
};
```

**Implementation Notes:**
- Category Pills: `bg-primary/10 text-primary rounded-full px-4 py-1`
- Service Cards: `bg-card rounded-lg p-4 hover:shadow-md transition`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Mobile: Accordion for categories

---

### 4. TeamSection

```typescript
// components/sections/TeamSection.tsx

interface TeamMember {
  name: string;
  role: string;
  image: ImageProps;
}

interface TeamSectionProps extends SectionProps {
  headline: string;
  subheadline: string;
  members: TeamMember[];
}

// Default values
const defaultProps = {
  headline: "Unser Team",
  subheadline: "Kompetent und herzlich",
  members: [
    { name: "Dr. med. dent. Mirjam Gaggl", role: "Zahnärztin und Praxisinhaberin", image: {...} },
    { name: "Agata Ostrowska-Blystak", role: "Zahnärztin", image: {...} },
    { name: "Rossana Leone", role: "Prophylaxeassistentin", image: {...} },
    { name: "Daniela Vicario", role: "Prophylaxeassistentin", image: {...} },
    { name: "Sandra Schmassmann", role: "Dentalassistentin", image: {...} },
    { name: "Katharina Sandor", role: "Dentalsekretärin", image: {...} },
    { name: "Christine Egli", role: "Dentalsekretärin", image: {...} },
    { name: "Daniela Balbo", role: "Dentalassistentin", image: {...} },
    { name: "Andela Sucur", role: "Dentalassistentin in Ausbildung", image: {...} },
    { name: "Suhejla Kryezi", role: "Dentalassistentin in Ausbildung", image: {...} }
  ]
};
```

**Implementation Notes:**
- Portrait: `aspect-square rounded-full object-cover`
- Name: `font-display font-medium text-lg`
- Role: `text-sm text-muted-foreground`
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`
- Background: `bg-secondary`

---

### 5. FeaturesSection

```typescript
// components/sections/FeaturesSection.tsx

interface Feature {
  name: string;
  headline: string;
  description: string;
  image: ImageProps;
}

interface FeaturesSectionProps extends SectionProps {
  headline: string;
  subheadline: string;
  features: Feature[];
  showNumbers?: boolean;
}

// Default values
const defaultProps = {
  headline: "Moderne Technologie",
  subheadline: "Für Ihre optimale Behandlung",
  features: [
    {
      name: "Invisalign",
      headline: "Unsichtbare Zahnspange",
      description: "Diskrete Zahnkorrektur mit transparenten Schienen",
      image: {...}
    },
    {
      name: "Intraoralscanner",
      headline: "Digitaler Abdruck",
      description: "Präzise 3D-Scans ohne unangenehmes Abdruckmaterial",
      image: {...}
    },
    {
      name: "The Wand Plus",
      headline: "Schmerzfreie Anästhesie",
      description: "Computergesteuerte Betäubung für maximalen Komfort",
      image: {...}
    }
  ],
  showNumbers: true
};
```

**Implementation Notes:**
- Layout: Alternating left/right on desktop
- Numbers: `text-6xl font-display text-accent/30`
- Image: `aspect-video rounded-lg`
- Animation: fadeInUp on scroll

---

### 6. CTASection

```typescript
// components/sections/CTASection.tsx

interface CTAButton {
  text: string;
  icon?: "phone" | "mail";
  action: string;
  variant: "primary" | "secondary";
}

interface CTASectionProps extends SectionProps {
  headline: string;
  subheadline: string;
  buttons: CTAButton[];
  background?: "primary" | "accent";
}

// Default values
const defaultProps = {
  headline: "Vereinbaren Sie Ihren Termin",
  subheadline: "Wir freuen uns auf Sie!",
  buttons: [
    { text: "Jetzt anrufen", icon: "phone", action: "tel:+41448532274", variant: "primary" },
    { text: "E-Mail schreiben", icon: "mail", action: "mailto:info@zahnarzt-dielsdorf.ch", variant: "secondary" }
  ],
  background: "primary"
};
```

**Implementation Notes:**
- Full-width section with `bg-primary`
- Text: `text-primary-foreground`
- Subheadline: `text-primary-foreground/80`
- Buttons: Inverted colors on primary background
- Padding: `py-16 lg:py-24`

---

### 7. ContactSection

```typescript
// components/sections/ContactSection.tsx

interface Address {
  street: string;
  city: string;
  country: string;
}

interface OpeningHour {
  day: string;
  hours: string;
}

interface ContactSectionProps extends SectionProps {
  headline: string;
  address: Address;
  phone: string;
  email: string;
  openingHours: OpeningHour[];
  googleMaps: {
    enabled: boolean;
    coordinates: { lat: number; lng: number };
  };
  contactForm: {
    enabled: boolean;
    fields: string[];
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

// Default values
const defaultProps = {
  headline: "Kontakt",
  address: {
    street: "Wehntalerstrasse 44",
    city: "8157 Dielsdorf",
    country: "Schweiz"
  },
  phone: "+41 44 853 22 74",
  email: "info@zahnarzt-dielsdorf.ch",
  openingHours: [
    { day: "Montag", hours: "08:00–19:00" },
    { day: "Dienstag", hours: "08:00–20:00" },
    { day: "Mittwoch", hours: "08:00–17:00" },
    { day: "Donnerstag", hours: "08:00–18:00" },
    { day: "Freitag", hours: "08:00–13:00" },
    { day: "Samstag", hours: "Geschlossen" },
    { day: "Sonntag", hours: "Geschlossen" }
  ],
  googleMaps: {
    enabled: true,
    coordinates: { lat: 47.4806, lng: 8.4556 }
  },
  contactForm: {
    enabled: true,
    fields: ["name", "email", "message"]
  },
  onlineBooking: {
    enabled: true,
    url: "https://www.local.ch/..."
  },
  badges: [
    { name: "SSO", description: "Mitglied Schweizerische Zahnärzte-Gesellschaft", showLogo: true }
  ]
};
```

**Implementation Notes:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Icons: Lucide (MapPin, Phone, Mail, Clock)
- Form: shadcn/ui Input, Textarea, Button
- Map: Google Maps Embed or react-google-maps
- Background: `bg-card` or `bg-foreground text-background` (dark variant)

---

## Shared Components

### Container

```typescript
// components/ui/Container.tsx

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeMap = {
  sm: "max-w-screen-sm",   // 640px
  md: "max-w-screen-md",   // 768px
  lg: "max-w-screen-lg",   // 1024px
  xl: "max-w-screen-xl",   // 1280px
  "2xl": "max-w-[1400px]"  // 1400px
};

// Usage
<Container size="xl" className="px-4">
  {children}
</Container>
```

---

### SectionHeader

```typescript
// components/ui/SectionHeader.tsx

interface SectionHeaderProps {
  headline: string;
  subheadline?: string;
  align?: "left" | "center" | "right";
  headlineAs?: "h1" | "h2" | "h3";
  className?: string;
}

// Usage
<SectionHeader
  headline="Unsere Behandlungen"
  subheadline="Das gesamte Spektrum der modernen Zahnmedizin"
  align="center"
  headlineAs="h2"
/>
```

**Implementation:**
```tsx
export function SectionHeader({
  headline,
  subheadline,
  align = "center",
  headlineAs: Heading = "h2",
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <Heading className="text-3xl lg:text-4xl font-display font-bold text-foreground">
        {headline}
      </Heading>
      {subheadline && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
}
```

---

## Animation Utilities

```typescript
// lib/animations.ts

import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};
```

---

## File Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── button.tsx (shadcn)
│   │   ├── card.tsx (shadcn)
│   │   ├── input.tsx (shadcn)
│   │   └── textarea.tsx (shadcn)
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── app/
    ├── page.tsx
    ├── layout.tsx
    └── globals.css
```

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.x | Framework |
| react | ^18.x | UI Library |
| typescript | ^5.x | Type Safety |
| tailwindcss | ^3.x | Styling |
| framer-motion | ^11.x | Animations |
| lucide-react | ^0.x | Icons |
| @radix-ui/* | latest | Headless UI (shadcn) |
| class-variance-authority | ^0.x | Variant Styling |
| clsx | ^2.x | Class Merging |
| tailwind-merge | ^2.x | Tailwind Class Merging |

---

## Metadata

| Field | Value |
|-------|-------|
| Created | 2026-01-09 |
| Components | 7 Sections + 2 Shared |
| Design System | v1.0.0 |
