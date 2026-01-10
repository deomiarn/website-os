---
name: shape-pages
description: Gestaltet Seiten interaktiv - Page by Page, Section by Section mit shadcnblocks Components + Style-Bilder
---

# Shape Pages

Gestalte jede Seite in 2 Phasen:
1. **Phase 1: Page Overview** - Komplette Seiten-Struktur mit Layout-Empfehlungen
2. **Phase 2: Section by Section** - shadcnblocks Component + Style-Bild pro Section

## Voraussetzungen

Prüfe dass Step 2 (Content Plan) und Step 3 (Design System) abgeschlossen sind.

## Anweisung

Du führst jetzt den **Shape Pages** Workflow durch.

**NEUER WORKFLOW mit shadcnblocks:**
1. Du zeigst erst die komplette Page-Struktur (Phase 1)
2. User bestätigt oder passt an
3. Dann gehst du Section für Section durch (Phase 2)
4. Pro Section gibt der User: `@shadcnblocks/component-name` + Style-Bild
5. Das Style-Bild bestimmt den Look, die Component nur das Layout

**WICHTIG:**
- shadcnblocks Component = Layout-Template
- Style-Bild = **NUR LAYOUT** (Struktur, Anordnung, Spacing-Verhältnisse)
- Design Tokens = Farben, Fonts, Component-Styles
- **KEINE Fragen** wie "Wie viele Cards?" → Stattdessen **Empfehlungen** geben

**⚠️ KRITISCH - Was aus Style-Bildern NICHT übernommen wird:**
- ❌ Button-Design (pill, shadow, padding) → aus `design-tokens.json → components.button`
- ❌ Card-Design (border, shadow, radius) → aus `design-tokens.json → components.card`
- ❌ Input-Design → aus `design-tokens.json → components.input`
- ❌ Badge-Design → aus `design-tokens.json → components.badge`
- ❌ Farben → aus `design-tokens.json → colors`
- ❌ Fonts/Typography → aus `design-tokens.json → typography`

**Diese wurden in `/design-system` definiert und gelten GLOBAL für alle Sections!**

### 1. Kontext Laden

Lese:
- `webdesign-os/config/project.json` - Seiten-Liste, Audience, Branche
- `webdesign-os/config/design-tokens.json` - Design Kontext
- `webdesign-os/config/content-inventory.json` - Content-Mengen pro Seite
- `webdesign-os/config/inspiration-analysis.json` - Analysierte Inspirationen
- `webdesign-os/config/section-standards.json` - **Section Minimums pro Seitentyp**
- `webdesign-os/config/design-excellence-config.json` - **Design Excellence Settings**
- `webdesign-os/config/workflow-state.json` - Aktueller Fortschritt

**Inspirationen prüfen:**
- Schaue in `webdesign-os/inspirations/` nach Bildern
- Analysiere sie mit Claude Vision falls noch nicht geschehen
- Extrahiere Layout-Patterns, Styles, Strukturen

### 1.5 Section Standards prüfen (KRITISCH)

Lade `section-standards.json` und bestimme für die gewählte Seite:

"**Section Standards für {Seitenname}:**

| Aspekt | Wert |
|--------|------|
| Seitentyp | {home/about/services/etc.} |
| **Minimum Sections** | **{minimum}** |
| Empfohlen | {recommended} |
| Pflicht-Sections | {required[]} |
| Vorgeschlagene | {suggested[]} |

**⚠️ WICHTIG:** Niemals weniger als **{minimum}** Sections vorschlagen!"

### 1.6 Layout-Komponenten (PFLICHT)

**KRITISCH: Navbar und Footer werden IMMER als separate Komponenten geplant!**

Lade `section-standards.json` und prüfe `globalComponents`:

"**Layout-Komponenten (Pflicht für jede Website):**

| Komponente | Status | Beschreibung |
|------------|--------|--------------|
| **Navbar** | REQUIRED | Navigation Header - sticky/fixed/relative/transparent |
| **Footer** | REQUIRED | Footer - SEPARAT von Contact Section |

⚠️ **WICHTIG - Contact Section ≠ Footer:**
- **Contact Section** = Content-Section (Kontaktformular, Map, Kontakt-Infos, Öffnungszeiten)
- **Footer** = Layout-Komponente (Navigation Links, Copyright, Social Icons, Newsletter)
- **BEIDES** muss implementiert werden - SEPARAT!

**Navbar Design:**
| Aspekt | Optionen |
|--------|----------|
| Stil | Sticky / Fixed / Transparent on Hero / Relative |
| Logo Position | Links / Center |
| Mobile | Hamburger Menu / Slide-in / Bottom Nav |
| CTA Button | Ja (welcher?) / Nein |

**Footer Design:**
| Aspekt | Optionen |
|--------|----------|
| Stil | Simple / Multi-Column / Mega-Footer / Minimal |
| Inhalte | Links / Social / Newsletter / Copyright |
| Columns | 2 / 3 / 4 |

**Welchen Stil soll Navbar und Footer haben?**"

### 2. Seiten-Übersicht zeigen

"**Shape Pages - Seiten gestalten**

Du hast folgende Seiten definiert:
{für jede Seite aus project.pages}
- [ ] **{name}** - {status}
{/für}

**Inspirationen vorhanden:**
- General: {anzahl} Bilder
- Section-spezifisch: {anzahl} Bilder
- Page-spezifisch: {anzahl} Bilder

Welche Seite möchtest du als nächstes gestalten?"

### 3. SEO-Grundlagen für die Seite

**BEVOR** Sections designed werden, SEO-Basis etablieren:

"**{Seitenname} - SEO Grundlagen**

| Aspekt | Frage |
|--------|-------|
| **Target Keyword** | Was ist das Haupt-Keyword für diese Seite? |
| **Secondary Keywords** | 2-3 Neben-Keywords? |
| **Page Title** | Wie soll der Title Tag lauten? (max. 60 Zeichen) |
| **Meta Description** | Kurze Beschreibung für Suchergebnisse? (max. 160 Zeichen) |
| **URL Slug** | z.B. `/about-us` oder `/ueber-uns` |

Diese Informationen beeinflussen die Heading-Struktur und Content-Optimierung."

### 4. PHASE 1: Page Overview (ZUERST!)

**KRITISCH:** Zeige ZUERST die komplette Page-Struktur bevor du in Details gehst!

Basierend auf Content-Inventory zeige diese Übersicht:

"**═══════════════════════════════════════════════════════════════
                    PAGE OVERVIEW: {Seitenname}
═══════════════════════════════════════════════════════════════**

```
┌───────────────────────────────────────────────────────────────┐
│ NAVBAR                                                        │
│ Sticky mit Logo links, Nav-Links, CTA-Button rechts.          │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 1. HERO                                                       │
│ {1-2 Sätze Layout-Beschreibung basierend auf Content}         │
│ {z.B. "Split-Layout mit Text links, Bild rechts."}            │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 2. {SECTION-TYP} ({X} Items)                                  │
│ {Layout-Empfehlung basierend auf Anzahl Items}                │
│ {z.B. "Grid 4x3 mit Icon-Cards. 4 Spalten Desktop, 2 Mobile."} │
└───────────────────────────────────────────────────────────────┘

... weitere Sections basierend auf Content-Inventory ...

┌───────────────────────────────────────────────────────────────┐
│ FOOTER                                                        │
│ Simpel mit Logo, rechtlichen Links, Copyright.                │
└───────────────────────────────────────────────────────────────┘
```

**Empfehlungen basierend auf Content-Mengen:**
{Nutze die Empfehlungslogik aus section-builder Skill}

| Section | Items | Empfohlenes Layout |
|---------|-------|-------------------|
| Services | 12 | Grid 4x3 Desktop, 3x4 Tablet, 2x6 Mobile |
| Team | 5 | Featured Lead + Grid 4x1 darunter |
| Testimonials | 3 | 3-Column Grid |

**Du kannst jetzt:**
- Reihenfolge ändern
- Sections hinzufügen/entfernen
- Layout-Beschreibungen anpassen

**Passt die Struktur? Dann gehen wir Section für Section durch.**"

### 4.5 PHASE 2: Section by Section mit shadcnblocks

Erst NACH bestätigter Overview gehe jede Section einzeln durch:

"**PHASE 2: Section Details**

Für jede Section brauchst du:
1. **shadcnblocks Component** - Download-Befehl (z.B. `@shadcnblocks/hero-1`)
2. **Style-Bild** - Als Chat-Anhang

---

**⚠️ Style-Bild Interpretation - NUR LAYOUT!**

Das Bild zeigt dir das **LAYOUT** - nicht die Komponenten-Styles:

| Im Bild sichtbar | Was übernehmen | Was IGNORIEREN |
|------------------|----------------|----------------|
| Button | Position, Anzahl | Design (pill, shadow) → design-tokens |
| Cards | Grid-Struktur, Anzahl | Border, Shadow → design-tokens |
| Farben | Verhältnisse (was dunkler/heller) | Konkrete Farben → design-tokens |
| Fonts | Hierarchie (was größer/kleiner) | Font-Family → design-tokens |
| Inputs | Position im Layout | Border-Style → design-tokens |

**Beispiel:**
Inspiration zeigt 4 Cards mit dünnem Border und Pill-Buttons:
- ✅ ÜBERNEHMEN: 4 Cards im Grid
- ❌ IGNORIEREN: Border-Style der Cards (dein Card-Design gilt)
- ❌ IGNORIEREN: Pill-Button Design (dein Button-Design gilt)

---

Ich frage dich pro Section danach.

---

**Section 1: HERO**

Layout-Empfehlung: Split mit Text links, Bild rechts, volle Viewport-Höhe.

**Welche shadcnblocks Component + Style-Bild für Hero?**
→ Beispiel: `@shadcnblocks/hero-1` + [Bild anhängen]"

Bei Antwort des Users:

"**Hero Section - Konfiguration**

| Aspekt | Wert |
|--------|------|
| shadcnblocks | `{component}` |
| Download | `pnpm dlx shadcn add {component}` |
| Style-Bild | {gespeichert in inspirations/{page}/hero-style.jpg} |
| Layout | {aus Overview} |

**Deine Style-Notizen:**
{Falls User Wünsche genannt hat, dokumentiere sie hier}
{z.B. "Bild zeigt 6 Cards, implementiere aber für 12"}

**Weiter zu Section 2?**"

Wiederhole für jede Section.

### 5. Section-by-Section durchgehen (MIT DESIGN EXCELLENCE)

Für JEDE Section:
1. Custom Design basierend auf Inspiration
2. **Design Excellence Check** (Score muss >= 7)

---

#### Hero Section

"**Section 1: Hero**

**Inspiration-Analyse:**

⚠️ **WICHTIG: Inspirationen gelten NUR für LAYOUT/AUFBAU!**

Aus Inspiration-Bildern extrahiere NUR:
- ✅ Layout-Struktur (Split, Grid, Centered, Asymmetric)
- ✅ Section-Aufbau (Reihenfolge, Anordnung der Elemente)
- ✅ Bild-Positionen (Links, Rechts, Hintergrund, Overlay)
- ✅ Spacing/Whitespace Verhältnisse
- ✅ Visuelle Hierarchie

❌ NICHT aus Inspirationen übernehmen:
- ❌ Farben → kommen aus Design Tokens
- ❌ Fonts → kommen aus Design Tokens
- ❌ Typografie-Größen → kommen aus Design Tokens

{Falls Inspiration vorhanden, beschreibe was du siehst}
- Layout: Split/Centered/Fullscreen?
- Bild-Position: Links/Rechts/Hintergrund?
- Struktur: Welche Elemente, wie angeordnet?
- Besonderheiten: Overlays, Layering, Asymmetrie?

**Design-Vorschlag basierend auf Inspiration (NUR LAYOUT!):**

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | {aus Inspiration} | Split / Centered / Fullscreen / Minimal |
| Bild-Position | {aus Inspiration} | Links / Rechts / Hintergrund / Kein Bild |
| Bild-Typ | {aus Inspiration} | Foto / Illustration / Abstrakt / Video |
| CTA-Stil | Primary + Ghost | Nur Primary / Primary + Secondary / Primary + Ghost |
| Animation | Fade-in + Slide | Keine / Fade / Slide / Parallax |
| **Background** | aus Design Tokens | Gradient / Texture / Image / Solid mit Treatment |
| **Typography** | aus Design Tokens | Dramatische Hierarchy mit Display Font |

**SEO für Hero:**
- H1: Enthält '{targetKeyword}'?
- Alt-Text Strategie für Hero-Bild?

**Hast du einen Code-Snippet für den Hero?**"

#### 5.X Design Excellence Checkpoint (NACH JEDER SECTION)

**MANDATORY:** Nach JEDER Section Design Excellence Check durchführen.

Lade Skill: `design-excellence`

"**🎨 Design Excellence Check: {SectionName}**

**Inspiration-Referenz:** {inspiration-file oder 'Custom based on tokens'}

| Kategorie | Score (0-10) | Details |
|-----------|--------------|---------|
| 1. Inspiration Alignment | ?/10 | {wie matcht es die Inspiration} |
| 2. Typography Distinction | ?/10 | {Font: xyz, Hierarchy: dramatic/flat} |
| 3. Color Intentionality | ?/10 | {Dominant: x, Accent: y sparingly} |
| 4. Spatial Composition | ?/10 | {Padding: py-32, Asymmetry: yes/no} |
| 5. Visual Details | ?/10 | {Background treatment, effects} |
| 6. Animation Strategy | ?/10 | {Entrance: staggered, Hover: lift} |
| 7. Anti-Generic Check | ?/10 | {Distinctive elements} |

**Gesamt-Score: {average}/10**

**3 Distinctive Elements:**
1. {element 1 - was macht es einzigartig}
2. {element 2}
3. {element 3}

{Falls Score < 7}
**❌ REDESIGN ERFORDERLICH**

Diese Section würde generisch aussehen. Probleme:
- {Problem 1}
- {Problem 2}

**Verbesserungsvorschläge:**
- {Vorschlag 1}
- {Vorschlag 2}

**Bitte Design anpassen bevor wir fortfahren.**
{Falls Score >= 7}
**✅ Design Excellence Check bestanden!**

Weiter zur nächsten Section?
{/Falls}"

---

#### Features Section

"**Section 2: Features**

**Content-Plan sagt:** {featureCount} Features

**Inspiration-Analyse:**
{Falls vorhanden: Layout, Card-Stil, Icons vs Bilder}

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | Grid | Grid / Bento / Alternating / Liste |
| Columns | {basierend auf Anzahl} | 2 / 3 / 4 |
| Visuell | Mit Icons | Icons / Bilder / Nur Text |
| Card-Stil | {aus Inspiration} | Minimal / Bordered / Shadow / Filled / Glassmorphism |
| **Background** | {treatment} | Gradient mesh / Noise / Blurred shapes |
| **Card Hover** | {effect} | Lift + Shadow / Glow / Scale / Border gradient |

**SEO für Features:**
- H2 mit Secondary Keyword?
- Feature-Titel als H3?

**Hast du einen Code-Snippet für Features?**"

[Design Excellence Check durchführen]

---

#### Testimonials Section

"**Section 3: Testimonials**

**Content-Plan sagt:** {testimonialCount} Testimonials

**Inspiration-Analyse:**
{Falls vorhanden: Layout, Avatar-Größe, Quote-Stil}

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | Grid | Grid / Carousel / Masonry / Single Featured |
| Mit Foto | Ja | Ja / Nein / Avatar-Initials |
| Rating | Nein | Sterne / Nein |
| Columns | {basierend auf Anzahl} | 1 / 2 / 3 |
| Quote-Stil | Mit Anführungszeichen | Mit Icon / Ohne / Highlighted |
| **Card-Treatment** | {effect} | Floating / Bordered / Background accent |

**Hast du einen Code-Snippet für Testimonials?**"

[Design Excellence Check durchführen]

---

#### FAQ Section

"**Section 4: FAQ**

**Content-Plan sagt:** {faqCount} FAQs

**Inspiration-Analyse:**
{Falls vorhanden: Accordion-Stil, Layout}

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | Accordion | Accordion / Grid / Split (FAQ + CTA) |
| Columns | 1 | 1 / 2 |
| Stil | Minimal | Minimal / Bordered / Card |
| Icon | Plus/Minus | Plus/Minus / Chevron / Keins |

**SEO für FAQ:**
- FAQ Schema Markup aktivieren? (empfohlen)
- Fragen mit Keywords formulieren?

**Hast du einen Code-Snippet für FAQ?**"

[Design Excellence Check durchführen]

---

#### CTA Section

"**Section 5: CTA**

**Inspiration-Analyse:**
{Falls vorhanden: Background, Layout}

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | Centered | Centered / Split (mit Bild) |
| Background | {aus Inspiration} | Gradient mesh / Image + Overlay / Pattern / Solid accent |
| Größe | Large | Small / Medium / Large |
| **Visual Treatment** | {effect} | Blur shapes / Noise texture / Decorative elements |

**Hast du einen Code-Snippet für CTA?**"

[Design Excellence Check durchführen]

---

#### Weitere Sections (bei Bedarf)

Für jede weitere Section (Pricing, Contact, Stats, Logos, Team, etc.):
- Inspiration analysieren
- Design-Optionen vorschlagen
- Nach Code-Snippets fragen
- SEO-Aspekte berücksichtigen
- **Design Excellence Check durchführen**

---

### 6. Code-Snippets verarbeiten

Wenn der User Code-Snippets bereitstellt:

"**Code-Snippet erhalten für {SectionName}**

Ich analysiere den Code:
- Framework/Library: {React/Vue/HTML/etc.}
- Styling: {Tailwind/CSS/styled-components/etc.}
- Komponenten: {was wird verwendet}

**Anpassungen für unser Projekt:**
1. Konvertiere zu Next.js/React falls nötig
2. Ersetze Farben mit Design Tokens
3. Füge Framer Motion Animationen hinzu
4. Mache responsive (falls nicht bereits)
5. Accessibility optimieren
6. **Design Excellence Standards einhalten**

**Soll ich auf diesem Code aufbauen?**"

### 7. Seiten-Zusammenfassung

Nach allen Sections:

"**{Seitenname} - Zusammenfassung**

**SEO:**
| Aspekt | Wert |
|--------|------|
| Target Keyword | {keyword} |
| Title Tag | {title} |
| Meta Description | {description} |
| URL | {slug} |

**Layout-Komponenten (PFLICHT):**
| Komponente | Design | Status |
|------------|--------|--------|
| Navbar | {style: sticky/fixed/etc.} | ✓ geplant |
| Footer | {style: simple/multi-column/etc.} | ✓ geplant |

⚠️ **Contact Section und Footer sind SEPARATE Komponenten!**

**Sections mit shadcnblocks:**
| # | Section | shadcnblocks Component | Download Command | Style-Bild |
|---|---------|------------------------|------------------|------------|
| 1 | Hero | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |
| 2 | Services | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |
| 3 | Team | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |
| 4 | About | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |
| 5 | CTA | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |
| 6 | Contact | `{component}` | `pnpm dlx shadcn add {component}` | ✓ |

**Style-Bilder gespeichert in:**
`webdesign-os/inspirations/{page}/`

**Section-Standard Check:**
- Minimum: {minimum} ✓
- Aktuell: {count} Sections ✓

**Style-Notizen pro Section:**
{Falls User spezielle Wünsche hatte}
- Hero: "Mehr Whitespace als im Bild"
- Services: "Bild zeigt 6, aber 12 implementieren"

**Heading-Struktur:**
- H1: {heroHeadline}
- H2: Services, Team, About, Contact
- H3: Service-Titel, Team-Namen

**Schema Markup:**
- WebPage
- FAQ (wenn FAQ-Section)
- LocalBusiness (wenn Contact)

**Passt das so für {Seitenname}?**"

### 7.5 Validation Gate (VOR DEM SPEICHERN)

**MANDATORY:** Vor dem Speichern prüfen:

"**✅ Validation Gate für {Seitenname}**

| Check | Status | Aktion |
|-------|--------|--------|
| Section-Minimum ({min}) erreicht | {ja/nein} | {blockiert wenn nein} |
| Empfohlen ({rec}) erreicht | {ja/nein} | {Warnung wenn nein} |
| Alle Excellence Scores >= 7 | {ja/nein} | {blockiert wenn nein} |
| Durchschnittlicher Score | {average}/10 | {info} |

{Falls Minimum nicht erreicht}
**❌ BLOCKIERT:** Bitte füge mindestens {difference} weitere Section(s) hinzu.
Vorschläge: {aus suggestedSections}
{/Falls}

{Falls Excellence Score < 7 irgendwo}
**❌ BLOCKIERT:** Section(s) mit Score < 7 müssen überarbeitet werden:
{Liste der Sections}
{/Falls}

{Falls alles OK}
**✅ Alle Checks bestanden - Seite kann gespeichert werden!**
{/Falls}"

### 8. Speichern & Nächste Seite

Bei Bestätigung (nur wenn Validation Gate bestanden):
1. Speichere in `webdesign-os/config/page-shapes/{seitenname}.json` mit shadcnblocks-Konfiguration
2. Update `webdesign-os/config/workflow-state.json`

**Neues page-shapes Schema (pro Section):**
```json
{
  "id": "services",
  "type": "services",
  "order": 2,
  "shadcnblocks": {
    "component": "@shadcnblocks/feature-grid-2",
    "downloadCommand": "pnpm dlx shadcn add @shadcnblocks/feature-grid-2"
  },
  "styleReference": {
    "image": "inspirations/home/services-style.jpg",
    "notes": "Bild zeigt 6 Cards, implementiere aber für 12. Mehr Whitespace."
  },
  "layoutRecommendation": "Grid 4x3 Desktop, 3x4 Tablet, 2x6 Mobile",
  "design": { ... },
  "content": { ... }
}
```

"**{Seitenname} gespeichert!**

- shadcnblocks Components: {anzahl} konfiguriert
- Style-Bilder: {anzahl} gespeichert
- Download-Commands: Bereit für Implementation

Fortschritt:
- [x] Home - {anzahl} Sections mit shadcnblocks ✓
- [ ] About - Pending

**Nächste Seite gestalten oder alle fertig?**"

### 9. Alle Seiten fertig

Wenn alle Seiten gestaltet:

"**Alle Seiten gestaltet!**

| Seite | Sections | Min | Target Keyword | Excellence Score |
|-------|----------|-----|----------------|------------------|
| Home | 6 | 5 ✓ | {keyword} | 8.2/10 ✓ |
| About | 5 | 5 ✓ | {keyword} | 7.8/10 ✓ |
| Services | 5 | 5 ✓ | {keyword} | 8.0/10 ✓ |

**Design-Basis:**
- Alle Sections: Custom basierend auf Inspirationen
- Code-Snippets integriert: {anzahl}
- Design Tokens: Durchgehend verwendet
- **Design Excellence: Alle Sections >= 7/10 ✓**

**SEO-Checkliste:**
- [x] Keywords pro Seite definiert
- [x] Title Tags definiert
- [x] Meta Descriptions definiert
- [x] Heading-Struktur geplant
- [x] Schema Markup geplant

**Nächster Schritt:** `/write-spec`"

## Inspirationen-Ordner

Lege Bilder in `webdesign-os/inspirations/`:

```
inspirations/
├── general/              # Allgemeine Stil-Inspiration
│   ├── design1.png
│   └── website-screenshot.jpg
├── sections/             # Section-spezifische Inspiration
│   ├── hero/
│   ├── features/
│   └── testimonials/
└── pages/                # Page-spezifische Inspiration
    ├── home/
    └── about/
```

**Claude analysiert automatisch:**
- Layout-Struktur
- Farb-Palette
- Typography-Stil
- Spacing/Whitespace
- UI Patterns
- Animationen (wenn erkennbar)

## Code-Snippets

User kann Code-Snippets bereitstellen:
- Direkt im Chat
- Als Dateien in `webdesign-os/sections/` (user-provided)
- Als Links zu CodePen/Stackblitz/etc.

**Unterstützte Formate:**
- React/Next.js Components
- Plain HTML/CSS
- Tailwind CSS
- Vue Components (werden konvertiert)

## Skills

Nutze: `design-excellence`, `frontend-design`, `section-builder`, `seo-optimizer`, `animation-library`, `responsive-patterns`

## Output

- `webdesign-os/config/pages.json` (mit Design-Details + SEO + Excellence Scores)
- `webdesign-os/config/workflow-state.json`
