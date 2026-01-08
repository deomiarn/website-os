---
name: shape-pages
description: Gestaltet Seiten interaktiv - Page by Page, Section by Section mit Custom Design basierend auf User-Inspirationen
---

# Shape Pages

Gestalte jede Seite interaktiv mit Custom Sections basierend auf User-Inspirationen und Code-Snippets.

## Voraussetzungen

Prüfe dass Step 2 (Content Plan) und Step 3 (Design System) abgeschlossen sind.

## Anweisung

Du führst jetzt den **Shape Pages** Workflow durch - **Page by Page, Section by Section**.

**WICHTIG:** Es gibt KEINE vorgefertigten Templates. Jede Section wird **custom** erstellt basierend auf:
1. Inspiration-Bilder des Users
2. Code-Snippets die der User bereitstellt
3. Design Tokens aus dem Design System
4. Best Practices für die jeweilige Section-Art

### 1. Kontext Laden

Lese:
- `webdesign-os/config/project.json` - Seiten-Liste, Audience, Branche
- `webdesign-os/config/design-tokens.json` - Design Kontext
- `webdesign-os/config/content-inventory.json` - Content-Mengen pro Seite
- `webdesign-os/config/inspiration-analysis.json` - Analysierte Inspirationen
- `webdesign-os/config/workflow-state.json` - Aktueller Fortschritt

**Inspirationen prüfen:**
- Schaue in `webdesign-os/inspirations/` nach Bildern
- Analysiere sie mit Claude Vision falls noch nicht geschehen
- Extrahiere Layout-Patterns, Styles, Strukturen

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

### 4. Sections vorschlagen (Custom Design)

Basierend auf:
- Seitentyp (Home, About, Services, etc.)
- Content-Inventory (Mengen aus content-inventory.json)
- Branche und Zielgruppe
- **Inspiration-Analyse** (Layout, Style, Patterns)

Schlage passende Sections vor:

"**{Seitenname} - Section-Vorschlag**

Basierend auf deinen Inspirationen und dem Content-Plan empfehle ich:

| # | Section | Inspiration-Match | Design-Ansatz |
|---|---------|-------------------|---------------|
| 1 | Hero | `inspirations/sections/hero/` | Split-Layout wie in Inspiration |
| 2 | Logos | - | Trust-Element, grayscale |
| 3 | Features | `inspirations/general/bild2.jpg` | Grid mit Cards |
| 4 | Testimonials | - | 3-spaltig mit Fotos |
| 5 | FAQ | - | Accordion |
| 6 | CTA | - | Gradient Background |

**Hast du Code-Snippets für bestimmte Sections?**
Falls ja, teile sie und ich baue darauf auf.

**Wichtig:** Die H1 sollte '{targetKeyword}' enthalten.

Passt diese Struktur? Sections hinzufügen/entfernen?"

### 5. Section-by-Section durchgehen

Für JEDE Section: Custom Design basierend auf Inspiration

---

#### Hero Section

"**Section 1: Hero**

**Inspiration-Analyse:**
{Falls Inspiration vorhanden, beschreibe was du siehst}
- Layout: Split/Centered/Fullscreen?
- Bild-Position: Links/Rechts/Hintergrund?
- Typography: Größe, Stil der Headline?
- Besonderheiten: Animationen, Overlays?

**Design-Vorschlag basierend auf Inspiration:**

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | {aus Inspiration} | Split / Centered / Fullscreen / Minimal |
| Bild-Position | {aus Inspiration} | Links / Rechts / Hintergrund / Kein Bild |
| Bild-Typ | {aus Inspiration} | Foto / Illustration / Abstrakt / Video |
| CTA-Stil | Primary + Ghost | Nur Primary / Primary + Secondary / Primary + Ghost |
| Animation | Fade-in + Slide | Keine / Fade / Slide / Parallax |

**SEO für Hero:**
- H1: Enthält '{targetKeyword}'?
- Alt-Text Strategie für Hero-Bild?

**Hast du einen Code-Snippet für den Hero?**"

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
| Card-Stil | Minimal | Minimal / Bordered / Shadow / Filled |

**SEO für Features:**
- H2 mit Secondary Keyword?
- Feature-Titel als H3?

**Hast du einen Code-Snippet für Features?**"

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

**Hast du einen Code-Snippet für Testimonials?**"

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

---

#### CTA Section

"**Section 5: CTA**

**Inspiration-Analyse:**
{Falls vorhanden: Background, Layout}

| Aspekt | Vorschlag | Optionen |
|--------|-----------|----------|
| Layout | Centered | Centered / Split (mit Bild) |
| Background | Gradient | Solid / Gradient / Image / Pattern |
| Größe | Large | Small / Medium / Large |

**Hast du einen Code-Snippet für CTA?**"

---

#### Weitere Sections (bei Bedarf)

Für jede weitere Section (Pricing, Contact, Stats, Logos, Team, etc.):
- Inspiration analysieren
- Design-Optionen vorschlagen
- Nach Code-Snippets fragen
- SEO-Aspekte berücksichtigen

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

**Sections (Custom Design):**
| # | Section | Design-Basis | Code-Snippet |
|---|---------|--------------|--------------|
| 1 | Hero | Inspiration + Custom | {ja/nein} |
| 2 | Features | Custom | {ja/nein} |
| 3 | Testimonials | Custom | {ja/nein} |
| 4 | FAQ | Custom | {ja/nein} |
| 5 | CTA | Custom | {ja/nein} |

**Heading-Struktur:**
- H1: {heroHeadline}
- H2: Features, Testimonials, FAQ
- H3: Feature-Titel

**Schema Markup:**
- WebPage
- FAQ (wenn FAQ-Section)
- LocalBusiness (wenn Contact)

**Inspirationen verwendet:**
{Liste der verwendeten Inspiration-Dateien}

**Code-Snippets verwendet:**
{Liste der Sections mit User-Code}

**Passt das so für {Seitenname}?**"

### 8. Speichern & Nächste Seite

Bei Bestätigung:
1. Speichere in `webdesign-os/config/pages.json` (mit Design-Details + SEO)
2. Update `webdesign-os/config/workflow-state.json`

"**{Seitenname} gespeichert!**

Fortschritt:
- [x] Home - {anzahl} Sections (Custom)
- [ ] About - Pending

**Nächste Seite gestalten oder alle fertig?**"

### 9. Alle Seiten fertig

Wenn alle Seiten gestaltet:

"**Alle Seiten gestaltet!**

| Seite | Sections | Target Keyword | Code-Snippets |
|-------|----------|----------------|---------------|
| Home | 6 | {keyword} | 2 |
| About | 5 | {keyword} | 0 |
| Services | 4 | {keyword} | 1 |

**Design-Basis:**
- Alle Sections: Custom basierend auf Inspirationen
- Code-Snippets integriert: {anzahl}
- Design Tokens: Durchgehend verwendet

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

Nutze: `section-builder`, `seo-optimizer`, `frontend-design`, `animation-library`, `responsive-patterns`

## Output

- `webdesign-os/config/pages.json` (mit Design-Details + SEO)
- `webdesign-os/config/workflow-state.json`
