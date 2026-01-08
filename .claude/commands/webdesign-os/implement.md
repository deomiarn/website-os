---
name: implement
description: Implementiert die Website Page by Page mit Custom Sections basierend auf Inspirationen und User Code
args: "[page-name]"
---

# Implement

Implementiere die Website Page by Page mit Custom Sections und Validierung.

## Usage

```
/implement           → Zeigt Übersicht, fragt welche Seite
/implement setup     → Nur Projekt-Setup (einmalig)
/implement home      → Implementiert nur Homepage
/implement about     → Implementiert nur About-Seite
/implement all       → Alle Seiten nacheinander
```

## Voraussetzungen

Prüfe dass Step 5 (Write Spec) abgeschlossen ist.

## Anweisung

Du führst jetzt den **Implement** Workflow durch - **Page by Page mit Custom Sections**.

**WICHTIG:** Es gibt KEINE vorgefertigten Templates. Jede Section wird **custom** erstellt basierend auf:
1. Spezifikationen aus `/write-spec`
2. User-Inspirationen
3. User Code-Snippets (falls vorhanden)
4. Design Tokens

### 1. Kontext laden

Lese:
- `webdesign-os/config/pages.json` - Seiten mit Design-Details und SEO
- `webdesign-os/specs/{projekt}/` - Spezifikationen
- `webdesign-os/config/design-tokens.json` - Design System
- `webdesign-os/config/inspiration-analysis.json` - Analysierte Inspirationen

### 2. Projekt-Setup (einmalig)

Beim ersten Aufruf oder `/implement setup`:

"**Implement - Projekt Setup**

Ich erstelle das Next.js Projekt:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (mit deinem Theme)
- Framer Motion

**Projekt-Name:** {projectName}
**Ziel-Ordner:** `exports/{projectName}/`

Starte Setup?"

Bei Bestätigung:

```bash
# Next.js erstellen
npx create-next-app@latest exports/{project-name} \
  --typescript --tailwind --eslint --app --src-dir

# In Projekt wechseln
cd exports/{project-name}

# Dependencies
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge

# shadcn/ui
npx shadcn@latest init -y
npx shadcn@latest add button card badge separator skeleton accordion switch input textarea label
```

Dann:
- Design Tokens → tailwind.config.ts
- CSS Variables → globals.css
- Shared Components erstellen (Container, SectionHeader, etc.)

"**Setup abgeschlossen!**

- [x] Next.js Projekt erstellt
- [x] Dependencies installiert
- [x] shadcn/ui konfiguriert
- [x] Design Tokens eingerichtet
- [x] Shared Components erstellt

**Projekt starten:**
```bash
cd exports/{project-name}
npm run dev
```

**Welche Seite als erste implementieren?**"

### 3. Seiten-Übersicht

"**Implement - Seiten bauen**

| Seite | Status | Sections | User Code |
|-------|--------|----------|-----------|
| Home | Pending | 6 | 2 Snippets |
| About | Pending | 5 | 0 Snippets |
| Services | Pending | 4 | 1 Snippet |
| Contact | Pending | 3 | 0 Snippets |

**Alle Sections:** Custom (keine Templates)
**Zu erstellen:** Jede Section individuell nach Spec

Welche Seite implementieren?"

### 4. Seite implementieren (Custom)

Für die gewählte Seite:

#### 4.1 Spec-Check

"**{Seitenname} - Spec prüfen**

Laut Spec werden diese Custom Sections benötigt:

| Section | Design-Basis | User Code | Priorität |
|---------|--------------|-----------|-----------|
| Hero | Inspiration + Spec | Ja | Hoch |
| Features | Spec | Nein | Normal |
| Testimonials | Spec | Nein | Normal |
| FAQ | Spec | Nein | Normal |
| CTA | Spec | Nein | Normal |

**Inspirationen zu berücksichtigen:**
- `inspirations/sections/hero/hero1.png`
- `inspirations/general/bild2.jpg`

Los geht's?"

#### 4.2 Section für Section (Custom Build + Validation)

Für jede Section:

1. **Erstelle Custom Component** nach Spec
2. **Integriere User Code** falls vorhanden
3. **Wende Design Tokens an**
4. **Füge Animationen hinzu**
5. **Validiere** (Checkpoint!)

"**Section 1/6: Hero (Custom)**

**Design-Basis:**
- Inspiration: `inspirations/sections/hero/hero1.png`
- User Code: Ja (wird integriert)

**Erstelle Custom Component:**

```tsx
// components/sections/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

interface HeroSectionProps {
  headline: string
  subheadline?: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  image: {
    src: string
    alt: string
  }
}

const containerVariants = {
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

export function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image
}: HeroSectionProps) {
  return (
    <section className="py-section-md">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl lg:text-5xl font-bold text-foreground"
            >
              {headline}
            </motion.h1>
            {subheadline && (
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground"
              >
                {subheadline}
              </motion.p>
            )}
            <motion.div variants={itemVariants} className="flex gap-4">
              <Button size="lg" asChild>
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              {secondaryCTA && (
                <Button variant="ghost" size="lg" asChild>
                  <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
                </Button>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/3]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover rounded-radius"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
```

**Implementiert:**
- [x] Custom Component erstellt
- [x] Inspiration berücksichtigt
- [x] User Code integriert
- [x] Design Tokens verwendet
- [x] Framer Motion Animationen
- [x] SEO Alt-Text gesetzt

---

**🔍 Validation Checkpoint**

| Check | Status |
|-------|--------|
| TypeScript | ✓ No errors |
| Design Tokens | ✓ Using tokens |
| Responsive | ✓ Grid + breakpoints |
| Accessibility | ✓ Alt text set |
| Animation | ✓ GPU-accelerated |

**Status: ✓ Pass** → Weiter zu Section 2?"

#### 4.3 Nächste Sections

Für jede weitere Section:
- Custom Component nach Spec erstellen
- User Code integrieren falls vorhanden
- Design Tokens verwenden
- Animationen hinzufügen
- Validieren

"**Section 2/6: Features (Custom)**

**Spec sagt:**
- 3 Features
- Grid Layout
- Mit Icons

**Erstelle Custom Component:**

```tsx
// components/sections/FeaturesSection.tsx
"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/layout/section-header"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesSectionProps {
  headline: string
  subheadline?: string
  features: Feature[]
}

// ... implementation
```

[Analog für alle Sections]"

#### 4.4 Page zusammenbauen

```tsx
// app/page.tsx (Home)
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { CTASection } from "@/components/sections/CTASection"

// Content from Spec
const heroData = {
  headline: "...",
  subheadline: "...",
  // ...
}

export default function HomePage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <FeaturesSection {...featuresData} />
      <TestimonialsSection {...testimonialsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </main>
  )
}

// SEO Metadata (from Spec)
export const metadata = {
  title: "{title from spec}",
  description: "{description from spec}",
  openGraph: {
    title: "{og:title}",
    description: "{og:description}",
    images: ["/og-image.png"]
  }
}
```

### 5. Preview & Review

"**{Seitenname} - Preview bereit!**

**Server starten:** (falls noch nicht)
```bash
cd exports/{project-name}
npm run dev
```

**Preview:** http://localhost:3000{path}

---

**Review-Checkliste:**

| Aspekt | Check |
|--------|-------|
| Layout stimmt | ? |
| Abstände passen | ? |
| Farben korrekt | ? |
| Fonts richtig | ? |
| Animationen smooth | ? |
| Responsive Desktop | ? |
| Responsive Tablet | ? |
| Responsive Mobile | ? |

**Was möchtest du anpassen?**"

### 6. Final Page Validation

Nach allen Anpassungen, finale Validierung:

"**🔍 Final Page Validation: {Seitenname}**

| Check | Status | Details |
|-------|--------|---------|
| TypeScript | ✓ | 0 errors |
| All Sections | ✓ | 5/5 custom built |
| Design Tokens | ✓ | 100% token usage |
| Responsive | ✓ | 3/3 breakpoints |
| Accessibility | ✓ | Alt texts, headings OK |
| SEO Metadata | ✓ | Title, description set |
| Animation Perf | ✓ | 60fps verified |

**Page Status: ✓ VALIDATED**

**Fortschritt:**
- [x] Home - 6 Sections, Validated ✓
- [ ] About - Pending
- [ ] Services - Pending

**Nächste Seite implementieren?**"

### 7. Alle Seiten fertig

"**Alle Seiten implementiert!**

| Seite | Sections | User Code | Validated |
|-------|----------|-----------|-----------|
| Home | 6 | 2 | ✓ |
| About | 5 | 0 | ✓ |
| Services | 4 | 1 | ✓ |
| Contact | 3 | 0 | ✓ |

**Summary:**
- Alle Sections: Custom (keine Templates)
- User Code integriert: 3 Snippets
- Design Tokens: 100% verwendet
- All Pages Validated: ✓
- SEO Metadata: All set

**Projekt:**
- 18 Custom Sections
- Alle responsive
- Alle animiert
- Alle validiert

**Server:** http://localhost:3000

**Nächster Schritt:** `/seo` (SEO Verification & Refinement)"

Update workflow-state.json:
- Step 6: status = "completed"
- Step 7: status = "pending"

## Validation Checkpoints

**MANDATORY after each section:**
1. TypeScript errors: 0
2. Design tokens used (keine hardcoded colors)
3. Responsive tested
4. Alt texts set

**Run `/validate` if issues suspected.**

## Datei-Struktur

```
exports/{project-name}/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                   # shadcn
│   ├── sections/             # Custom Sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── section-header.tsx
│   └── shared/
├── lib/utils.ts
├── styles/globals.css
└── tailwind.config.ts
```

## User Code Integration

Wenn User Code-Snippets bereitgestellt wurden:

1. **Analysiere den Code**
   - Framework/Library erkennen
   - Styling-Methode erkennen

2. **Konvertiere wenn nötig**
   - Zu Next.js/React
   - Zu TypeScript

3. **Integriere Design Tokens**
   - Ersetze hardcoded colors
   - Verwende Spacing-Scale
   - Nutze Typography-Tokens

4. **Füge Animationen hinzu**
   - Framer Motion Variants
   - GPU-beschleunigte Properties

5. **Mache responsive**
   - Mobile-first
   - Breakpoints hinzufügen

## Skills

Nutze: `nextjs-patterns`, `frontend-design`, `animation-library`, `responsive-patterns`, `component-validator`

## Output

- `exports/{project-name}/` - Komplettes Next.js Projekt
- `webdesign-os/config/workflow-state.json`
