---
name: implement
description: Implementiert die Website mit shadcnblocks Components, angepasst nach Style-Bildern
args: "[page-name]"
---

# Implement

Implementiere die Website mit shadcnblocks Components + Style-Bild Anpassung + Playwright Verifikation.

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

---

## ⚠️ KRITISCHE SKILL-ANFORDERUNGEN

### PFLICHT: Skills laden BEVOR du implementierst!

```
Skill: frontend-design       ← KRITISCH für Design-Qualität
Skill: design-excellence     ← KRITISCH für Validation
Skill: section-builder       ← Für visuelle Standards
Skill: animation-library     ← Für Animationen
```

**WARUM:** Ohne diese Skills wird generischer, amateurhafter Code produziert.
Die Skills enthalten die Design-Philosophie und Quality-Standards die EINGEHALTEN werden MÜSSEN.

### Design-Philosophie Erinnerung (aus frontend-design):

| Prinzip | VERBOTEN | ERFORDERLICH |
|---------|----------|--------------|
| Typography | Inter, Roboto, Arial | Distinctive fonts (Playfair, Fraunces, DM Serif) |
| Colors | Gleichverteilung, generic blue | Dominant + Accent Strategie |
| Spacing | py-8, py-12 | py-24 minimum, py-32 bevorzugt |
| Backgrounds | Plain white/gray | Gradient mesh, noise, blur shapes |
| Layout | Alles zentriert | Asymmetrie, Layering, visuelle Hierarchie |

---

## Anweisung

Du führst jetzt den **Implement** Workflow durch mit **shadcnblocks Components**.

**NEUER WORKFLOW:**
Jede Section wird implementiert mit:
1. **shadcnblocks Download** - Exakter Befehl aus page-shapes
2. **Custom Styles entfernen** - Keine h1/h2 Styles, Farben von shadcnblocks
3. **Design System anwenden** - Fonts, Farben, Spacing aus Design Tokens
4. **Container centern** - IMMER `mx-auto max-w-7xl`
5. **Playwright Screenshot + AI-Analyse** - Gegen Style-Bild vergleichen
6. **Iterieren bis Match** - Anpassen bis es wie im Bild aussieht

**KRITISCH:**
- shadcnblocks = Layout-Template (Struktur übernehmen)
- Style-Bild = Finaler Look (Layout, Spacing, Proportionen)
- Design Tokens = Farben, Fonts (NICHT aus Component/Bild!)

### 1. Kontext laden

Lese:
- `webdesign-os/config/pages.json` - Seiten mit Design-Details und SEO
- `webdesign-os/specs/{projekt}/` - Spezifikationen
- `webdesign-os/config/design-tokens.json` - Design System
- `webdesign-os/config/inspiration-analysis.json` - **KRITISCH** Analysierte Inspirationen
- `webdesign-os/config/section-standards.json` - Section Minimums pro Seitentyp

### 1.5 Inspiration-Guidelines extrahieren und ANZEIGEN

**PFLICHT:** Zeige dem User die extrahierten Design-Richtlinien:

"**📸 Aktive Inspirationen für dieses Projekt:**

| Inspiration | Layout-Stil | Struktur |
|-------------|-------------|----------|
| {name1} | {layout} | {struktur} |
| {name2} | {layout} | {struktur} |

**⚠️ WICHTIG: Inspirationen = NUR LAYOUT!**

Aus Inspirationen übernehmen:
- ✅ Layout-Struktur, Grid-Anordnung
- ✅ Section-Aufbau, Element-Positionen
- ✅ Bild-Positionen, Asymmetrie
- ✅ Spacing-Verhältnisse, Whitespace

**NICHT aus Inspirationen (→ Design Tokens):**
- ❌ Farben
- ❌ Fonts/Typography
- ❌ Schriftgrößen

**Farben, Fonts, Typography kommen aus den Design Tokens!**

Diese Layout-Richtlinien werden bei JEDER Section angewendet!"

### 1.6 Section-Minimum validieren

**PFLICHT:** Prüfe ob die geplanten Sections das Minimum erfüllen:

```
Seitentyp: {pageType}
Minimum Sections: {minimum aus section-standards.json}
Geplante Sections: {anzahl}

{Falls geplant < minimum: "⚠️ BLOCKIERT - Mindestens {minimum} Sections erforderlich!"}
```

### 2. Projekt-Setup (einmalig)

Beim ersten Aufruf oder `/implement setup`:

#### 2.1 shadcn Preset Auswahl

**PFLICHT: Frage den User ZUERST nach dem shadcn Preset:**

"**🎨 shadcn Preset Auswahl**

Bevor ich das Projekt erstelle, welches shadcn Preset soll ich verwenden?

| Option | Beschreibung |
|--------|--------------|
| **Default** | Vordefiniertes Theme mit Vega Style, neutral colors, Inter font |
| **Custom** | Du gibst mir einen eigenen shadcn create Befehl |

**Default Befehl:**
```bash
pnpm dlx shadcn@latest create --preset "https://ui.shadcn.com/init?base=radix&style=vega&baseColor=neutral&theme=neutral&iconLibrary=lucide&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next" --template next
```

**Welche Option: Default oder Custom?**"

- Bei **Default**: Verwende den vordefinierten Befehl
- Bei **Custom**: Warte auf den User-Befehl

#### 2.2 Projekt erstellen

"**Implement - Projekt Setup**

Ich erstelle das Next.js Projekt mit shadcn:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui ({preset-type}: {default/custom})
- Framer Motion

**Projekt-Name:** {projectName}
**Ziel-Ordner:** `exports/{projectName}/`

Starte Setup?"

Bei Bestätigung:

**Option A - Default Preset:**
```bash
# shadcn create mit Default Preset (erstellt Next.js + shadcn in einem Schritt)
cd exports
pnpm dlx shadcn@latest create --preset "https://ui.shadcn.com/init?base=radix&style=vega&baseColor=neutral&theme=neutral&iconLibrary=lucide&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next" --template next {project-name}

# In Projekt wechseln
cd {project-name}

# Zusätzliche Dependencies
pnpm add framer-motion class-variance-authority clsx tailwind-merge

# Weitere shadcn Komponenten (oder via shadcn MCP)
pnpm dlx shadcn@latest add button card badge separator skeleton accordion switch input textarea label
```

**shadcn MCP für Komponenten:**
```
Tool: mcp__shadcn__search_items_in_registries
→ Suche nach Komponenten

Tool: mcp__shadcn__get_add_command_for_items
→ Hole Installations-Befehl
```

**Option B - Custom Preset:**
```bash
# User's custom shadcn create Befehl
cd exports
{user-provided-command} {project-name}

# In Projekt wechseln
cd {project-name}

# Zusätzliche Dependencies
pnpm add framer-motion class-variance-authority clsx tailwind-merge

# Weitere shadcn Komponenten
pnpm dlx shadcn@latest add button card badge separator skeleton accordion switch input textarea label
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
pnpm dev
```

#### 2.3 Next.js MCP für Development

**Nach dem Start des Dev-Servers:**

Verwende Next.js MCP für besseres Debugging:

```
1. nextjs_index → Entdecke laufenden Dev-Server
2. nextjs_call → Hole Errors, Routes, Build-Status
```

**Beispiel:**
```
Tool: mcp__next-devtools__nextjs_index
→ Zeigt Port, verfügbare Tools

Tool: mcp__next-devtools__nextjs_call
→ port: "3000", toolName: "get_errors"
→ Zeigt Compilation/Runtime Errors
```

**Nutze dies bei jedem Build-Problem!**

**Welche Seite als erste implementieren?**"

#### 2.4 Layout-Komponenten (PFLICHT - VOR Sections!)

**KRITISCH: Navbar und Footer werden ZUERST implementiert!**

Lade `section-standards.json` und prüfe `globalComponents` - beide sind REQUIRED:

"**Layout-Komponenten erstellen (PFLICHT):**

**1. Navbar implementieren:**
- Datei: `components/layout/header.tsx`
- Mobile Menu: `components/layout/mobile-nav.tsx`
- Design nach Spec aus `/shape-pages`

**2. Footer implementieren:**
- Datei: `components/layout/footer.tsx`
- **SEPARAT von Contact Section!**
- Design nach Spec aus `/shape-pages`

**3. Layout zusammenbauen:**
```tsx
// app/layout.tsx
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />    {/* ← PFLICHT */}
        <main>{children}</main>
        <Footer />    {/* ← PFLICHT, SEPARAT von Contact */}
      </body>
    </html>
  )
}
```

⚠️ **WICHTIG - Contact Section ≠ Footer:**
- **Contact Section** = Content-Section (Kontaktformular, Google Map, Kontakt-Infos, Öffnungszeiten)
- **Footer** = Layout-Komponente (Navigation Links, Copyright, Social Icons, Newsletter)
- **BEIDES** implementieren, **SEPARAT**!

Layout-Komponenten fertig?"

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

#### 4.2 Section für Section (6-Step shadcnblocks Process)

**⚠️ KRITISCH: Für JEDE Section den 6-Step Process durchlaufen!**

---

##### 🔷 STEP 1: shadcnblocks Download

Hole den Download-Befehl aus page-shapes und führe ihn aus:

"**Section: {name} - Component Download**

```bash
# Aus page-shapes/{page}.json
{downloadCommand aus shadcnblocks.downloadCommand}
# z.B.: pnpm dlx shadcn add @shadcnblocks/feature-grid-2
```

Component heruntergeladen. Jetzt Custom Styles entfernen."

---

##### 🔷 STEP 2: Custom Styles entfernen (PFLICHT!)

**Diese Styles MÜSSEN ersetzt werden:**

| Finden in Component | Ersetzen mit |
|---------------------|--------------|
| `text-3xl`, `text-4xl` auf h1/h2 | `font-display text-4xl` |
| `text-gray-600`, `text-slate-500` | `text-muted-foreground` |
| `bg-white`, `bg-gray-50` | `bg-background`, `bg-muted` |
| `text-blue-600`, `text-indigo-500` | `text-primary` |
| `font-semibold`, `font-medium` | Design Token Weights |
| `py-12`, `py-16` | Minimum `py-24` |
| `gap-4`, `gap-6` | Minimum `gap-8` |
| `max-w-6xl`, `max-w-5xl` | `max-w-7xl` |
| Inline `style={}` | Tailwind Classes |

**Container Centering (PFLICHT):**
```tsx
// IMMER so:
<div className="container mx-auto max-w-7xl px-4">
```

---

##### 🔷 STEP 3: Design System anwenden

Wende die Design Tokens aus `design-tokens.json` an:

"**Design Tokens für {section}:**

| Token | Wert | Anwendung |
|-------|------|-----------|
| font-display | {fontFamily} | Alle Headlines h1, h2, h3 |
| font-body | {fontFamily} | Body text, descriptions |
| --primary | {oklch Wert} | Accent elements, CTAs |
| --muted-foreground | {oklch Wert} | Secondary text |
| py-section | py-24 minimum | Section padding |
| gap | gap-8 minimum | Grid/flex gaps |"

---

##### 🔷 STEP 4: Style-Bild Analyse

Lade das Style-Bild aus page-shapes und analysiere:

"**Style-Bild Analyse: {section}**

Bild: `{styleReference.image}`
Notizen: `{styleReference.notes}`

**Aus dem Bild übernehmen (NUR Layout!):**
- Grid-Struktur: {z.B. "4 Spalten"}
- Spacing: {z.B. "Viel Whitespace zwischen Cards"}
- Proportionen: {z.B. "Cards quadratisch"}
- Hierarchie: {z.B. "Headline sehr gross"}

**NICHT aus Bild (→ Design Tokens):**
- Farben
- Fonts
- Genaue Schriftgrössen

**Notiz vom User:**
{styleReference.notes, z.B. "Bild zeigt 6, aber 12 implementieren"}"

---

##### 🔷 STEP 5: Playwright Screenshot + AI-Analyse

Nach der Implementation Screenshot machen und vergleichen:

"**Screenshot + Vergleich**

```
1. Dev Server starten (falls nicht)
2. mcp__playwright__browser_navigate → http://localhost:3000#{section-id}
3. mcp__playwright__browser_take_screenshot → Section screenshotten
4. Vergleiche mit Style-Bild
```

**Analyse-Checkliste:**

| Aspekt | Style-Bild | Implementation | Match? |
|--------|------------|----------------|--------|
| Grid/Spalten | {x} | {y} | ✓/✗ |
| Spacing | {beschreibung} | {beschreibung} | ✓/✗ |
| Proportionen | {beschreibung} | {beschreibung} | ✓/✗ |
| Hierarchie | {beschreibung} | {beschreibung} | ✓/✗ |

**Feedback:**
```
✓ Layout passt (4x3 Grid wie im Bild)
✗ Cards zu eng → gap-8 auf gap-12 erhöhen
✗ Headlines zu klein → text-3xl auf text-4xl
```"

---

##### 🔷 STEP 6: Iterieren bis Match

Falls Abweichungen:

"**Anpassungen erforderlich:**

1. {Anpassung 1}
2. {Anpassung 2}

*Führe Anpassungen durch...*

**Neuer Screenshot...**

{Wiederhole bis Match}

**✓ Section {name} fertig - Match mit Style-Bild!**"

---

**WICHTIG:** Diesen 6-Step Process für JEDE Section durchlaufen. Keine Abkürzungen!

```tsx
// components/sections/{SectionName}.tsx
"use client"

import { motion } from "framer-motion"
// ... imports

// GOOD: Atmospheric, distinctive
export function {SectionName}() {
  return (
    <section className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background Treatment - NICHT plain white! */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Dramatic Typography - NICHT text-2xl! */}
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            {/* ... */}
          </h2>
        </motion.div>
      </Container>
    </section>
  )
}
```

---

##### 🔷 STEP 4: Design Excellence Validation

**PFLICHT: Score >= 7 erforderlich um fortzufahren!**

"**🎨 Design Excellence Check: {SectionName}**

| Kategorie | Score | Notizen |
|-----------|-------|---------|
| Inspiration Alignment | ?/10 | {referenziert {file}?} |
| Typography Distinction | ?/10 | {Font: {font}, keine generischen?} |
| Color Intentionality | ?/10 | {Dominant + Accent klar?} |
| Spatial Composition | ?/10 | {py-{x}, Asymmetrie?} |
| Visual Details | ?/10 | {Background treatment?} |
| Animation Strategy | ?/10 | {Staggered, hover states?} |
| Anti-Generic Check | ?/10 | {3 distinctive elements?} |

**Gesamt: ?/10**

**3 Distinctive Elements:**
1. {element}
2. {element}
3. {element}

**Status: {PASS/FAIL}**"

---

##### 🔷 STEP 5: Proceed oder Redesign

```
IF Score >= 7:
  ✓ PROCEED to next section
ELSE:
  ⚠️ REDESIGN REQUIRED

  Issues to fix:
  - {issue1}
  - {issue2}

  → Zurück zu STEP 2 mit Korrekturen
```

---

**WICHTIG:** Diesen 5-Step Process für JEDE Section durchlaufen. Keine Abkürzungen!

"**Beispiel: 5-Step Process für Hero Section**

---

**🔷 STEP 1: Inspiration Reference**

Inspiration: `bild1.png` (Armonia Excursions)
- Mood: Elegant, editorial, warm
- Key Elements: Split layout, large imagery, serif headlines, warm beige

Aus dieser Inspiration übernehme ich:
1. Asymmetrisches Grid mit größerem Bild-Bereich
2. Warme Beige/Cream Hintergrundfarbe (#F2F0E9)
3. Elegante Serif-Headline (Fraunces)
4. Generous whitespace (py-32+)

---

**🔷 STEP 2: Design-Entscheidungen**

| Aspekt | Entscheidung | Warum |
|--------|--------------|-------|
| Background | bg-[#F2F0E9] warm cream | Wie Armonia Inspiration |
| Typography | Fraunces for h1, text-5xl md:text-7xl | Dramatic serif wie Inspiration |
| Spacing | py-32 lg:py-48 | Generous breathing room |
| Layout | grid lg:grid-cols-[1fr,1.5fr] | Asymmetric, image dominant |
| Colors | Cream dominant, Dark green (#2D3B2D) accent | Aus Inspiration palette |

Distinctive Elements:
1. Warm cream background (nicht plain white)
2. Asymmetric grid layout
3. Dramatic serif typography mit 7xl
4. Image mit shadow + subtle border treatment

---

**🔷 STEP 3: Code Implementation**

```tsx
// components/sections/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

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
    // GOOD: Distinctive background, generous spacing
    <section className="py-32 lg:py-48 bg-[#F2F0E9] relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <Container>
        {/* GOOD: Asymmetric grid */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* GOOD: Dramatic typography */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D3B2D] tracking-tight leading-[1.1]"
            >
              {headline}
            </motion.h1>
            {subheadline && (
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-[#2D3B2D]/70 max-w-md"
              >
                {subheadline}
              </motion.p>
            )}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#2D3B2D] hover:bg-[#2D3B2D]/90 text-white" asChild>
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              {secondaryCTA && (
                <Button variant="ghost" size="lg" className="text-[#2D3B2D] hover:bg-[#2D3B2D]/10" asChild>
                  <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* GOOD: Image with treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative shadow/glow behind image */}
            <div className="absolute -inset-4 bg-[#2D3B2D]/10 rounded-2xl blur-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
```

---

**🔷 STEP 4: Design Excellence Check**

| Kategorie | Score | Notizen |
|-----------|-------|---------|
| Inspiration Alignment | 9/10 | Explizit Armonia referenziert, Elemente übernommen |
| Typography Distinction | 9/10 | Fraunces serif, text-7xl, dramatic |
| Color Intentionality | 9/10 | Cream dominant, dark green accent |
| Spatial Composition | 9/10 | py-32+, asymmetric grid, breathing room |
| Visual Details | 8/10 | Gradient overlay, image glow, shadow |
| Animation Strategy | 8/10 | Staggered entrance, scale on image |
| Anti-Generic Check | 9/10 | 4 distinctive elements |

**Gesamt: 8.7/10**

**3 Distinctive Elements:**
1. Warm cream background (#F2F0E9) - nicht plain white
2. Asymmetric grid (1fr, 1.5fr) - nicht 50/50
3. Dramatic 7xl serif headline mit tight tracking
4. Image mit blur glow treatment

**Status: ✓ PASS** → Weiter zu Section 2"

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
│   ├── layout.tsx            # MIT Header + Footer!
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                   # shadcn
│   ├── sections/             # Content Sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactSection.tsx  # ← SECTION (Formular, Map, Infos)
│   │   └── ...
│   ├── layout/               # Layout Komponenten (PFLICHT!)
│   │   ├── header.tsx        # ← NAVBAR (PFLICHT)
│   │   ├── mobile-nav.tsx
│   │   ├── footer.tsx        # ← FOOTER (PFLICHT, ≠ Contact!)
│   │   ├── container.tsx
│   │   └── section-header.tsx
│   └── shared/
├── lib/utils.ts
├── styles/globals.css
└── tailwind.config.ts
```

**⚠️ Contact Section vs Footer:**
- `ContactSection.tsx` = Content (Kontaktformular, Google Map, Kontakt-Infos)
- `footer.tsx` = Layout (Navigation Links, Copyright, Social Icons)
- **BEIDE implementieren, SEPARAT!**

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

**KRITISCHE Skills (MÜSSEN geladen werden):**
- `frontend-design` ← Design-Philosophie, Anti-Generic Patterns
- `design-excellence` ← 7-Category Scoring, Quality Gates

**Weitere Skills:**
- `section-builder` ← Visual Quality Requirements
- `animation-library` ← Animation Patterns
- `responsive-patterns` ← Mobile-first Breakpoints
- `component-validator` ← Technical Validation
- `nextjs-patterns` ← Next.js Best Practices

## Output

- `exports/{project-name}/` - Komplettes Next.js Projekt
- `webdesign-os/config/workflow-state.json`
