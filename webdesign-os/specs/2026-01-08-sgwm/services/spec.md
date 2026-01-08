# Dienstleistungen Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Dienstleistungen |
| Path | `/dienstleistungen` |
| Sections | 3 |
| Purpose | Übersicht aller Services |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Unsere Dienstleistungen | SG-WM | 35/60 |
| Description | Finanzplanung, Vorsorge, Versicherungen, Immobilien und KMU-Services. Massgeschneiderte Lösungen für Ihre finanzielle Zukunft. | 127/160 |
| Canonical | https://sg-wm.ch/dienstleistungen | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Finanzdienstleistungen Schweiz | H1, Title, Body |
| Secondary | Vermögensberatung | H2, Cards |
| Secondary | Finanzplanung | Card |
| Secondary | Vorsorge | Card |

### Heading Structure

```
H1: Unsere Dienstleistungen
├── H2: Finanzplanung
├── H2: Vorsorge & Pensionierung
├── H2: Versicherungen
├── H2: Immobilien
├── H2: Nachlass & Erbschaft
└── H2: KMU-Services
```

### Schema Markup

```json
{
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Finanzplanung",
      "description": "...",
      "url": "/dienstleistungen/finanzplanung"
    }
    // ... more services
  ]
}
```

---

## Sections

### 1. Hero Section (minimal)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| headline | string | yes |
| subheadline | string | no |

**Content:**
```typescript
{
  headline: "Unsere Dienstleistungen",
  subheadline: "Massgeschneiderte Finanzlösungen für Privatpersonen und KMU"
}
```

---

### 2. Filter Tabs (pill-tabs)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| tabs | Tab[] | yes |
| activeTab | string | yes |
| onChange | function | yes |

**Content:**
```typescript
{
  tabs: [
    { id: "all", label: "Alle" },
    { id: "private", label: "Privatpersonen" },
    { id: "kmu", label: "KMU" }
  ]
}
```

**Styling:**
- Active: bg-accent text-accent-foreground
- Inactive: bg-transparent border-border
- Transition: 200ms ease

---

### 3. Services Grid (masonry)

**Props:**
| Prop | Type | Required |
|------|------|----------|
| services | Service[] | yes |
| filter | string | no |

**Content:**
```typescript
{
  services: [
    {
      id: "finanzplanung",
      title: "Finanzplanung",
      description: "Ganzheitliche Vermögensberatung für Ihre Ziele",
      image: "/images/services/finanzplanung.webp",
      href: "/dienstleistungen/finanzplanung",
      audience: ["private", "kmu"],
      size: "large" // for masonry
    },
    {
      id: "vorsorge",
      title: "Vorsorge & Pensionierung",
      description: "Säule 3a, Pensionskasse, Frühpensionierung",
      image: "/images/services/vorsorge.webp",
      href: "/dienstleistungen/vorsorge-pensionierung",
      audience: ["private"],
      size: "medium"
    },
    // ... more services
  ]
}
```

**Masonry Layout:**
```css
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 1.5rem;
}

.card-large { grid-row: span 2; }
.card-medium { grid-row: span 1; }
```

**Responsive:**
| Breakpoint | Columns | Row Height |
|------------|---------|------------|
| Desktop | 3 | 200px |
| Tablet | 2 | 180px |
| Mobile | 1 | auto |

**Filtering Animation:**
- Filter change: fade out → reorder → fade in
- Duration: 300ms
- Library: framer-motion `AnimatePresence`

---

## Components to Create

| Component | Location |
|-----------|----------|
| MinimalHero | `components/sections/MinimalHero.tsx` |
| FilterTabs | `components/ui/FilterTabs.tsx` |
| MasonryGrid | `components/sections/MasonryGrid.tsx` |
| ServiceCard | `components/ui/ServiceCard.tsx` |

---

## States & Interactions

### Filter State

```typescript
const [activeFilter, setActiveFilter] = useState("all");

const filteredServices = useMemo(() => {
  if (activeFilter === "all") return services;
  return services.filter(s => s.audience.includes(activeFilter));
}, [activeFilter, services]);
```

### Card Hover

| State | Effect |
|-------|--------|
| Default | Normal |
| Hover | scale(1.02), shadow-lg, gold border |
| Focus | ring-2 ring-accent |

---

## Image Requirements

| Position | Size | Format |
|----------|------|--------|
| Service Cards | 800x600 | WebP |
| OG Image | 1200x630 | PNG |

---

## Performance

- Images: lazy load with blur placeholder
- Filter: client-side, no API calls
- Masonry: CSS Grid (no JS library)
