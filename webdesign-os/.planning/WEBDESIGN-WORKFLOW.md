# WebDesign-OS Workflow

Dieses Dokument definiert die 8 Phasen des WebDesign-OS Workflows.
GSD nutzt diese Definition um ROADMAP.md und PLAN.md zu erstellen.

---

## Phase 1: Content Planning

**Ziel:** Content-Mengen und -Struktur pro Seite definieren

**Tasks:**
- Analysiere Seiten aus PROJECT.md
- Pro Seite: Welche Sections werden gebraucht?
- Pro Section: Wie viele Items? (Features: 3-6, Testimonials: 2-4, FAQs: 4-8)
- Bildverfügbarkeit klären (echte Bilder vs Platzhalter)
- Erstelle/Update `webdesign-os/config/content-inventory.json`

**Output:**
- `content-inventory.json` mit allen Content-Definitionen pro Seite/Section

**Verification:**
- Jede Seite hat definierte Sections
- Content-Mengen sind realistisch (nicht zu viel, nicht zu wenig)

---

## Phase 2: Design System

**Ziel:** Visuelle Grundlage basierend auf Inspirationen erstellen

**Tasks:**
- Analysiere Inspiration-Bilder in `webdesign-os/inspirations/`
- Extrahiere dominante Farben (Primary, Secondary, Accent)
- Identifiziere Typography-Style (Display + Body Font)
- Definiere Spacing-System (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Border-Radius Pattern (sharp, rounded, pill)
- Shadow-Style (none, subtle, elevated)
- Erstelle/Update `webdesign-os/config/design-tokens.json`

**Output:**
- `design-tokens.json` mit OKLCH Farben, Font-Paaren, Spacing, Radii, Shadows

**Verification:**
- Farben haben ausreichend Kontrast (WCAG AA)
- Fonts sind verfügbar (Google Fonts / System)
- Tokens spiegeln Inspiration-Style wider

---

## Phase 3: Shape Pages

**Ziel:** Jede Seite Section für Section designen

**Tasks:**
- Pro Seite aus content-inventory.json:
  - Sections in Reihenfolge definieren
  - shadcnblocks Component pro Section wählen
  - Style-Referenz-Bild pro Section (optional)
  - Layout-Variante wählen (grid, stack, split, etc.)
- Erstelle `webdesign-os/config/page-shapes/{page-name}.json`

**Output:**
- `page-shapes/*.json` mit Section-Definitionen pro Seite

**Verification:**
- Jede Seite hat mindestens Hero + CTA
- Section-Reihenfolge ist logisch
- Components passen zu Content-Mengen

---

## Phase 4: Write Specs

**Ziel:** Technische Implementierungs-Specs erstellen

**Tasks:**
- Pro Seite aus page-shapes:
  - Component Props definieren
  - Responsive Behavior (Mobile-first)
  - Animationen & Micro-Interactions
  - Edge Cases (leerer Content, langer Text, etc.)
- Erstelle `webdesign-os/specs/{page-name}.md`

**Output:**
- `specs/*.md` mit detaillierten Implementierungs-Specs

**Verification:**
- Specs sind eindeutig (kein Interpretationsspielraum)
- Responsive Breakpoints definiert
- Animations sind performant (transform/opacity only)

---

## Phase 5: Implement

**Ziel:** Website nach Specs bauen

**Tasks:**
- Next.js Projekt initialisieren (falls nicht vorhanden)
- shadcn/ui installieren und konfigurieren
- Design Tokens in Tailwind/CSS integrieren
- Pro Seite/Section implementieren:
  - Component aus shadcnblocks als Basis
  - Anpassung nach Spec und Design Tokens
  - Design Excellence Check (Score >= 7/10)
- Bei Score < 7: Section überarbeiten

**Output:**
- Funktionierendes Next.js Projekt in `exports/{project-name}/`

**Verification:**
- Alle Seiten rendern fehlerfrei
- Design Tokens werden korrekt angewendet
- Responsive funktioniert auf allen Breakpoints

---

## Phase 6: SEO

**Ziel:** Suchmaschinen-Optimierung

**Tasks:**
- Pro Seite:
  - Title Tag (50-60 Zeichen)
  - Meta Description (150-160 Zeichen)
  - Open Graph Tags
  - Canonical URL
- Schema Markup:
  - Organization
  - LocalBusiness (falls relevant)
  - BreadcrumbList
  - FAQ (falls FAQs vorhanden)
- Technical SEO:
  - Sitemap.xml generieren
  - robots.txt erstellen
  - Internal Linking optimieren
- Bilder-SEO:
  - Alt-Texte
  - Lazy Loading
  - WebP Format

**Output:**
- SEO-optimierte Seiten mit allen Meta-Tags

**Verification:**
- Lighthouse SEO Score >= 90
- Schema Markup validiert
- Alle Bilder haben Alt-Texte

---

## Phase 7: Refine (Optional)

**Ziel:** Feinschliff nach User-Feedback

**Tasks:**
- Feedback sammeln und priorisieren
- Pro Feedback-Punkt:
  - Impact bewerten (High/Medium/Low)
  - Änderung implementieren
  - Design Excellence re-check
- Performance-Optimierungen falls nötig

**Output:**
- Verfeinerte Implementation basierend auf Feedback

**Verification:**
- Alle High-Priority Feedback-Punkte adressiert
- Keine Regression in bestehenden Features

---

## Phase 8: Verify & Export

**Ziel:** Finale Qualitätssicherung und Export

**Tasks:**
- Lighthouse Audit:
  - Performance >= 90
  - Accessibility >= 90
  - Best Practices >= 90
  - SEO >= 90
- Responsive Tests:
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1280px)
  - Large Desktop (1920px)
- Design Review:
  - Vergleich gegen Specs
  - Vergleich gegen Inspirationen
- Cross-Browser:
  - Chrome, Firefox, Safari
- Production Build erstellen
- Export dokumentieren

**Output:**
- Produktionsreifes Projekt
- Export-Dokumentation

**Verification:**
- Alle Lighthouse Scores >= 90
- Keine visuellen Bugs auf allen Viewports
- Build erfolgreich ohne Errors
