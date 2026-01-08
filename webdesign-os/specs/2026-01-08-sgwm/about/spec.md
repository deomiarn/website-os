# Über uns Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Über uns |
| Path | `/ueber-uns` |
| Sections | 5 |
| Purpose | Team, Geschichte, Werte, Unabhängigkeit |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Über uns | Swiss Group Wealth Management | 42/60 |
| Description | Lernen Sie unser Team erfahrener Finanzberater kennen. Unabhängig, kundenorientiert und mit über 25 Jahren Erfahrung in Pfäffikon. | 132/160 |
| Canonical | https://sg-wm.ch/ueber-uns | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Finanzberater Pfäffikon Team | H1, Title, Body |
| Secondary | Vermögensberater Schweiz | H2, Body |
| Secondary | unabhängige Beratung | Body |

### Heading Structure

```
H1: Wir sind Swiss Group Wealth Management
├── H2: Unsere Werte
│   ├── H3: Unabhängigkeit
│   ├── H3: Kundenzentrierung
│   ├── H3: Sicherheit
│   ├── H3: Transparenz
│   └── H3: Ganzheitlichkeit
├── H2: Unsere Geschichte
├── H2: Unser Team
│   ├── H3: [Name 1], [Role]
│   ├── H3: [Name 2], [Role]
│   └── ... (5-8 team members)
└── H2: Unsere Zertifikate
```

### Schema Markup

- `AboutPage` schema
- `Organization` (detailed)
- `Person` schema for team members

---

## Sections

### 1. Hero Section (text-focused)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| headline | string | yes |
| subheadline | string | no |
| valueHighlights | string[] | no |

**Content:**
```typescript
{
  headline: "Wir sind Swiss Group Wealth Management",
  subheadline: "Ihre unabhängigen Partner für alle Finanzfragen seit über 25 Jahren",
  valueHighlights: ["Unabhängig", "Kundenorientiert", "Erfahren"]
}
```

**Responsive:**
| Breakpoint | Typography | Layout |
|------------|------------|--------|
| Desktop | H1: 4rem | Centered, max-w-4xl |
| Tablet | H1: 3rem | Centered |
| Mobile | H1: 2.5rem | Centered, px-4 |

---

### 2. Values Section (icon-grid)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| values | Value[] | yes |
| columns | number | no |

**Content:**
```typescript
{
  values: [
    { icon: "Shield", title: "Unabhängigkeit", description: "Keine Produktbindung..." },
    { icon: "Users", title: "Kundenzentrierung", description: "Ihre Ziele..." },
    { icon: "Lock", title: "Sicherheit", description: "Schutz Ihres Vermögens..." },
    { icon: "Eye", title: "Transparenz", description: "Klare Kommunikation..." },
    { icon: "Circle", title: "Ganzheitlichkeit", description: "Alle Aspekte..." }
  ]
}
```

**Responsive:**
| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Desktop | 5 | 2rem |
| Tablet | 3 | 1.5rem |
| Mobile | 1 | 1rem |

**Animation:** Stagger fade-in, 100ms delay each

---

### 3. Timeline Section (vertical)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| milestones | Milestone[] | yes |
| lineColor | string | no |

**Content:**
```typescript
{
  milestones: [
    { year: "1998", title: "Gründung", description: "..." },
    { year: "2005", title: "Expansion", description: "..." },
    { year: "2015", title: "Digitalisierung", description: "..." },
    { year: "2023", title: "Heute", description: "..." }
  ]
}
```

**Responsive:**
| Breakpoint | Line Position | Card Width |
|------------|---------------|------------|
| Desktop | Center | 45% each side |
| Tablet | Left | 100% |
| Mobile | Left | 100% |

---

### 4. Team Section (grid-hover)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| members | TeamMember[] | yes |
| columns | number | no |

**Content:**
```typescript
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}
```

**Responsive:**
| Breakpoint | Columns | Card Size |
|------------|---------|-----------|
| Desktop | 4 | 280px |
| Tablet | 3 | 220px |
| Mobile | 2 | 50% |

**Hover:** Reveal bio overlay, scale(1.02)

---

### 5. Certificates Section (badge-row)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| certificates | Certificate[] | yes |

**Responsive:**
| Breakpoint | Display |
|------------|---------|
| Desktop | Row, centered |
| Tablet | Row, centered |
| Mobile | Stacked |

---

## Components to Create

| Component | Location |
|-----------|----------|
| AboutHero | `components/sections/AboutHero.tsx` |
| ValuesGrid | `components/sections/ValuesGrid.tsx` |
| Timeline | `components/sections/Timeline.tsx` |
| TeamGrid | `components/sections/TeamGrid.tsx` |
| CertificatesRow | `components/sections/CertificatesRow.tsx` |

---

## Image Requirements

| Position | Size | Format | Alt Text |
|----------|------|--------|----------|
| Team Photos | 400x400 | WebP | [Name], [Role] bei SG-WM |
| Certificates | 200x100 | PNG/SVG | [Certificate Name] |
| OG Image | 1200x630 | PNG | Team SG-WM |

---

## Performance

- Team images: lazy load below fold
- Timeline: intersection observer animation
- Certificates: inline SVG preferred
