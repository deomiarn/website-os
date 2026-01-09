---
name: write-spec
description: Erstellt technische Spezifikationen inkl. SEO - Page by Page mit interaktivem Review
args: "[page-name]"
---

# Write Spec

Erstelle detaillierte technische Spezifikationen für jede Seite, inklusive SEO-Anforderungen.

## Usage

```
/write-spec           → Zeigt Übersicht, fragt welche Seite
/write-spec home      → Spec nur für Homepage
/write-spec all       → Alle Seiten nacheinander
```

## Voraussetzungen

Prüfe dass Step 4 (Shape Pages) abgeschlossen ist.

## Anweisung

Du führst jetzt den **Write Spec** Workflow durch - **Page by Page**.

**WICHTIG:** Alle Sections werden **custom** erstellt basierend auf:
- User-Inspirationen (analysiert)
- User-Code-Snippets (falls vorhanden)
- Design Tokens
- Best Practices

### 1. Kontext Laden

Lese:
- `webdesign-os/config/pages.json` - Alle Seiten mit Sections + SEO + Design-Details
- `webdesign-os/config/design-tokens.json` - Design System
- `webdesign-os/config/project.json` - Projekt-Kontext
- `webdesign-os/config/content-inventory.json` - Content-Mengen
- `webdesign-os/config/inspiration-analysis.json` - Analysierte Inspirationen

### 2. Seiten-Übersicht

"**Write Spec - Technische Spezifikationen**

| Seite | Sections | SEO | Spec Status |
|-------|----------|-----|-------------|
| Home | 6 | ✓ | Pending |
| About | 5 | ✓ | Pending |
| Services | 4 | ✓ | Pending |
| Contact | 3 | ✓ | Pending |

Welche Seite soll spezifiziert werden?"

### 2.5 Layout-Komponenten Spec (PFLICHT)

**BEVOR Sections spezifiziert werden - Layout-Komponenten definieren:**

Lade `section-standards.json` und prüfe `globalComponents`:

"**Layout-Komponenten Spezifikation (PFLICHT)**

**Navbar:**
| Aspekt | Spezifikation |
|--------|---------------|
| Stil | {sticky/fixed/transparent/relative} |
| Logo Position | {left/center} |
| Nav Items | {items aus project.json pages} |
| Mobile | {hamburger/slide-in/bottom} |
| CTA Button | {ja/nein, welcher Text, welche Aktion} |
| Breakpoint | {wann Mobile Menu} |

**Footer:**
| Aspekt | Spezifikation |
|--------|---------------|
| Stil | {simple/multi-column/mega-footer/minimal} |
| Columns | {anzahl, was in welcher Column} |
| Links | {welche Seiten/Kategorien} |
| Social Links | {ja/nein, welche Plattformen} |
| Newsletter | {ja/nein} |
| Copyright | {text} |
| Zusätzlich | {Adresse, Telefon, etc.} |

⚠️ **WICHTIG - Footer ≠ Contact Section!**
- **Contact Section:** Kontaktformular, Google Map, detaillierte Kontakt-Infos, Öffnungszeiten (Content)
- **Footer:** Navigation Links, Copyright, Social Icons, Newsletter Signup (Layout)
- **BEIDES** muss spezifiziert und implementiert werden - **SEPARAT**!

**Layout-Komponenten Specs bestätigen?**"

### 3. Für jede Seite: Spec generieren

#### 3.1 SEO Specification

"**{Seitenname} - SEO Specification**

**Meta Data:**
| Element | Wert | Zeichen |
|---------|------|---------|
| Title Tag | {title} | {charCount}/60 |
| Meta Description | {description} | {charCount}/160 |
| Canonical URL | {baseUrl}/{slug} | - |

**Keywords:**
| Typ | Keyword | Platzierung |
|-----|---------|-------------|
| Primary | {keyword} | H1, Title, Meta, 1. Paragraph |
| Secondary | {keyword2} | H2s, Body |
| Secondary | {keyword3} | H2s, Body |

**Heading Struktur:**
```
H1: {heroHeadline} ← Enthält Primary Keyword
├── H2: Features Headline
│   ├── H3: Feature 1 Title
│   ├── H3: Feature 2 Title
│   └── H3: Feature 3 Title
├── H2: Testimonials Headline
├── H2: FAQ Headline
│   └── [FAQ Items - nicht als Headings]
└── H2: CTA Headline
```

**Schema Markup:**
| Type | Anwendung |
|------|-----------|
| WebPage | Basis-Schema |
| Organization | Auf Home |
| FAQPage | Bei FAQ-Section |
| LocalBusiness | Bei Contact-Section |
| BreadcrumbList | Alle Unterseiten |

**Open Graph:**
| Property | Wert |
|----------|------|
| og:title | {title} |
| og:description | {description} |
| og:image | {heroImage or ogImage} |
| og:type | website |

**Internal Links:**
| Von | Nach | Anchor Text |
|----|------|-------------|
| {this} | Contact | Kontakt aufnehmen |
| {this} | Services | Unsere Leistungen |
| Home | {this} | {anchorText} |

Passt die SEO-Spezifikation?"

#### 3.2 Component Breakdown (Custom Sections)

"**{Seitenname} - Component Breakdown**

| Section | Design-Basis | Komponenten |
|---------|--------------|-------------|
| Hero | Inspiration + Custom | HeroSection (custom) |
| Features | Custom | FeaturesSection (custom) |
| Testimonials | Custom | TestimonialsSection (custom) |
| FAQ | Custom | FAQSection (custom) |
| CTA | Custom | CTASection (custom) |

**Zu erstellende Custom Components:**
- `components/sections/HeroSection.tsx`
- `components/sections/FeaturesSection.tsx`
- `components/sections/TestimonialsSection.tsx`
- `components/sections/FAQSection.tsx`
- `components/sections/CTASection.tsx`

**Shared Components:**
- `Container` - Max-width wrapper
- `SectionHeader` - Headline + Subheadline
- `Button` - Primary/Secondary variants (shadcn/ui)

**User Code-Snippets integrieren:**
{Liste der Sections mit User-Code und wie sie angepasst werden}

Passt diese Struktur?"

#### 3.3 Responsive Verhalten

"**Responsive Verhalten**

| Section | Desktop (1440px) | Tablet (768px) | Mobile (375px) |
|---------|------------------|----------------|----------------|
| Hero | {aus Design} | {angepasst} | {mobile-first} |
| Features | {aus Design} | {angepasst} | {mobile-first} |
| Testimonials | {aus Design} | {angepasst} | {mobile-first} |
| FAQ | Full-width | Full-width | Full-width |
| CTA | Centered | Centered | Centered, smaller |

Anpassungen gewünscht?"

#### 3.4 Animationen

"**Animationen**

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero Headline | Fade-in + Slide-up | On load | 600ms |
| Hero Image | Fade-in | On load (300ms delay) | 800ms |
| Feature Cards | Stagger fade-in | On scroll | 400ms each |
| Stats Numbers | Count-up | On scroll | 1500ms |
| Section Headers | Fade-in | On scroll | 500ms |

**Framer Motion Config:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
```

Mehr/weniger Animation?"

#### 3.5 States & Edge Cases

"**States & Edge Cases**

**Button States:**
| State | Styling |
|-------|---------|
| Default | bg-primary text-white |
| Hover | bg-primary/90, scale 1.02 |
| Focus | ring-2 ring-primary |
| Active | scale 0.98 |
| Disabled | opacity 50%, cursor not-allowed |
| Loading | spinner, disabled |

**Form States:**
| State | Styling |
|-------|---------|
| Empty | placeholder text |
| Filled | normal text |
| Focus | ring-2 ring-primary |
| Error | ring-2 ring-destructive, error message |
| Success | ring-2 ring-success, checkmark |

**Image Handling:**
| Case | Handling |
|------|----------|
| Loading | Blur placeholder (next/image) |
| Fehlendes Bild | Gradient Placeholder |
| Alt-Text fehlt | ⚠️ Build Warning |

**Content Edge Cases:**
| Case | Handling |
|------|----------|
| Lange Headlines | Wrap, max 3 Zeilen, Balancer |
| Kurze Headlines | Normal, kein Problem |
| Leere Section | Nicht rendern |
| Loading | Skeleton Animation |

Anpassungen?"

#### 3.6 Image Requirements

"**Image Requirements**

| Position | Größe | Format | Alt-Text |
|----------|-------|--------|----------|
| Hero | 1200x800 | WebP/AVIF | {beschreibend + keyword} |
| Features | Icons/SVG | SVG | {feature beschreibung} |
| Testimonials | 100x100 | WebP | {person name} |
| OG Image | 1200x630 | PNG | {page title} |

**Next.js Image Config:**
```tsx
<Image
  src={heroImage}
  alt="{beschreibender Alt-Text mit Keyword}"
  fill
  priority // Für Hero
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL={blurHash}
/>
```

Anpassungen?"

### 4. Spec-Zusammenfassung

"**{Seitenname} - Spec Zusammenfassung**

| Aspekt | Details |
|--------|---------|
| Custom Components | {count} neu zu erstellen |
| Shared Components | {count} wiederverwendet |
| User Code-Snippets | {count} zu integrieren |
| Breakpoints | 1440px / 768px / 375px |
| Animations | {count} animierte Elemente |
| States | Vollständig definiert |

**SEO Checklist:**
- [x] Title Tag optimiert
- [x] Meta Description gesetzt
- [x] Primary Keyword in H1
- [x] Heading-Struktur validiert
- [x] Schema Markup definiert
- [x] Alt-Texte spezifiziert
- [x] Internal Links geplant

**Generiert:**
- `specs/{datum}-website/{page}/spec.md`
- `specs/{datum}-website/{page}/seo.md`
- `specs/{datum}-website/{page}/components.md`

**Spec bestätigen?**"

### 5. Spec-Datei speichern

Speichere in `webdesign-os/specs/{datum}-website/{page}/`:

**spec.md:**
```markdown
# {Seitenname} Specification

## Overview
- Page: {name}
- Path: {path}
- Sections: {count}
- Custom Components: {list}

## SEO
### Meta
- Title: {title}
- Description: {description}
- Canonical: {url}

### Keywords
- Primary: {keyword}
- Secondary: {keywords}

### Schema Markup
{schema types}

### Heading Structure
{h1-h6 hierarchy}

---

## Design System Reference
- Primary: {color}
- Display Font: {font}
- Border Radius: {radius}

---

## Sections

### 1. Hero Section

**Type:** Custom (basierend auf Inspiration)
**Inspiration:** {inspiration-file if any}
**User Code:** {yes/no}

**Props:**
| Prop | Type | Required | Value |
|------|------|----------|-------|
| headline | string | yes | "{h1 text}" |
| subheadline | string | no | "{sub text}" |
| image | ImageProps | yes | {imageConfig} |
| primaryCTA | CTAProps | yes | {ctaConfig} |
| secondaryCTA | CTAProps | no | {ctaConfig} |

**Responsive:**
| Breakpoint | Layout | Image |
|------------|--------|-------|
| Desktop | {from design} | {position} |
| Tablet | {adapted} | {position} |
| Mobile | Stack | Top, full-width |

**Animation:**
- Fade-in + Slide-up
- staggerChildren: 0.15
- delayChildren: 0.1

**SEO:**
- H1: Contains "{primaryKeyword}"
- Image alt: "{descriptive alt with keyword}"

---

### 2. Features Section
[...]
```

**seo.md:**
```markdown
# {Seitenname} SEO Specification

## Meta Tags
| Tag | Value |
|-----|-------|
| title | {title} |
| description | {description} |
| canonical | {url} |
| robots | index, follow |

## Keywords
| Type | Keyword | Target Elements |
|------|---------|-----------------|
| Primary | {kw} | H1, Title, Meta |
| Secondary | {kw} | H2s, Body |

## Heading Hierarchy
[Full hierarchy]

## Schema Markup
```json
{schema json}
```

## Internal Links
| Target | Anchor | Context |
|--------|--------|---------|
| /contact | Contact us | Footer, CTA |

## Image SEO
| Image | Alt Text | Title |
|-------|----------|-------|
| hero | {alt} | {title} |
```

### 6. Nächste Seite

"**{Seitenname} Spec gespeichert!**

Fortschritt:
- [x] Home - {count} Components, SEO ✓
- [ ] About - Pending
- [ ] Services - Pending

**Nächste Seite spezifizieren?**"

### 7. Alle Specs fertig

"**Alle Spezifikationen erstellt!**

| Seite | Custom Components | User Code | SEO |
|-------|-------------------|-----------|-----|
| Home | 6 | 2 | ✓ |
| About | 5 | 0 | ✓ |
| Services | 4 | 1 | ✓ |
| Contact | 3 | 0 | ✓ |

**Summary:**
- Alle Sections: Custom (keine Templates)
- User Code-Snippets integriert: {anzahl}
- Design Tokens: Durchgehend referenziert

**SEO Summary:**
- Keywords definiert für alle Seiten
- Schema Markup für alle Seiten
- Heading-Struktur validiert
- Image Alt-Texte spezifiziert

**Dateien:**
`webdesign-os/specs/{datum}-website/`

**Nächster Schritt:** `/implement`"

Update workflow-state.json:
- Step 5: status = "completed"
- Step 6: status = "pending"

## Skills

Nutze: `section-builder`, `responsive-patterns`, `animation-library`, `seo-technical`

## Output

- `webdesign-os/specs/{datum}-website/{page}/spec.md`
- `webdesign-os/specs/{datum}-website/{page}/seo.md`
- `webdesign-os/specs/{datum}-website/{page}/components.md`
- `webdesign-os/config/workflow-state.json`
