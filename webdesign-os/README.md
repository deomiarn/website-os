# WebDesign-OS

Ein Claude Code-basiertes System zur Erstellung hochwertiger, SEO-optimierter Websites mit Custom Designs basierend auf User-Inspirationen.

## Vision

WebDesign-OS löst das Problem generischer AI-Designs. Durch klare Standards, ein strukturiertes Design System und **Custom Sections basierend auf User-Inspirationen** entstehen Websites auf Dribbble-Level Qualität.

**Key Features:**
- **100% Custom Design** - Keine vorgefertigten Templates, jede Section wird individuell erstellt
- **Inspiration-First** - Claude Vision analysiert deine Inspirationsbilder und extrahiert Patterns
- **User Code Integration** - Bringe eigene Code-Snippets ein, die integriert werden
- **Design Excellence** - Hochwertige visuelle Gestaltung nach deinen Vorstellungen
- **Performance** - Page Speed + Core Web Vitals optimiert
- **SEO** - Von Grund auf SEO-ready (Schema Markup, Metadata, Sitemaps)
- **Flexibilität** - Optional: Blog (Sanity), E-Commerce (MedusaJS), Auth (Supabase), Payments (Stripe)

## Quick Start

```bash
# 1. Repository klonen (falls noch nicht geschehen)
git clone <repo-url> && cd webdesign-os

# 2. In Claude Code öffnen
claude

# 3. Projekt starten
/init-project
```

## Workflow (9 Phasen)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  Step 1       Step 2         Step 3          Step 4        Step 5                   │
│  ───────      ──────         ──────          ──────        ──────                   │
│  /init     →  /content-plan → /design-system → /shape-pages → /write-spec           │
│  project                                                                             │
│                                                                                      │
│  Step 6       Step 7         Step 8          Step 9                                 │
│  ──────       ──────         ──────          ──────                                 │
│  /implement → /seo         → /refine       → /verify                                │
│                              (optional)                                              │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Phase 1: `/init-project`
Interaktives Questionnaire für Projekt-Setup:
- Brand Info (Name, Tagline, Branche)
- Zielgruppe (Wer, Probleme, Bedürfnisse)
- Website-Typ (Corporate, Portfolio, Landing Page, SaaS)
- Benötigte Seiten
- Features (Blog, E-Commerce, Auth, Contact Form)

→ Output: `config/project.json`, `config/integrations.json`

### Phase 2: `/content-plan`
Content-Planung pro Seite:
- Headline-Längen
- Feature/Testimonial/FAQ-Anzahlen
- Bild-Verfügbarkeit

→ Output: `config/content-inventory.json`

### Phase 3: `/design-system`
Generierung des kompletten Design Systems:
- OKLCH Color Palette
- Typography (Font-Pairing, Type Scale)
- Spacing System
- Animation Presets
- shadcn Theme Customization

→ Output: `config/design-tokens.json`, Tailwind Config

### Phase 4: `/shape-pages`
Seiten-Architektur planen mit **Custom Design**:
- Inspirationen analysieren (Claude Vision)
- Sections pro Seite festlegen
- Design-Optionen basierend auf Inspirationen
- User Code-Snippets integrieren
- SEO Meta-Daten pro Seite

→ Output: `config/pages.json`

### Phase 5: `/write-spec`
Detaillierte Spezifikation:
- Custom Component-Breakdown pro Seite
- Responsive-Verhalten dokumentieren
- Animations/Interactions definieren
- Edge Cases berücksichtigen
- User Code Integration planen

→ Output: `specs/[spec]/spec.md`

### Phase 6: `/implement`
Implementation mit **Custom Sections**:
- Next.js Projekt Setup
- shadcn/ui Installation + Theme
- Custom Komponenten erstellen (basierend auf Inspiration)
- User Code integrieren
- Seiten implementieren
- SEO Setup
- Validation Checkpoints nach jeder Section

→ Output: Funktionierendes Next.js Projekt

### Phase 7: `/seo`
SEO Verification & Refinement:
- Meta Tags prüfen
- Schema Markup validieren
- Internal Links optimieren
- Image SEO

→ Output: SEO-optimierte Seiten

### Phase 8: `/refine` (optional)
Page-by-Page Refinement:
- Layout-Anpassungen
- Visual Tweaks
- Content Updates
- Animation-Änderungen

→ Output: Verfeinerte Seiten

### Phase 9: `/verify`
Verification & Export:
- Design-Review gegen Spec
- Performance-Audit (Lighthouse)
- SEO-Audit
- Responsive-Test (Desktop/Tablet/Mobile)
- Export-Generierung

→ Output: `exports/[project-name]/`

## Weitere Commands

| Command | Beschreibung |
|---------|--------------|
| `/preview` | Startet Playwright Preview in 3 Viewports (Desktop, Tablet, Mobile) |
| `/dashboard` | Öffnet Web Dashboard auf localhost:3333 |
| `/validate` | Validiert implementierte Sections |

## Ordnerstruktur

```
webdesign-os/
├── config/                      # Projekt-Konfigurationen
│   ├── project.json            # Haupt-Config (Brand, Zielgruppe, Features)
│   ├── design-tokens.json      # Design System Tokens
│   ├── pages.json              # Seiten-Struktur mit Design-Details
│   ├── content-inventory.json  # Content-Mengen pro Seite
│   ├── seo.json                # SEO Konfiguration
│   ├── integrations.json       # Aktivierte Integrationen
│   ├── inspiration-analysis.json # Analysierte Inspirationen
│   └── workflow-state.json     # Aktueller Workflow-Status
│
├── inspirations/               # Inspiration-Bilder (Claude Vision analysiert)
│   ├── general/                # Allgemeine Design-Inspiration
│   ├── sections/               # Section-spezifische Inspiration
│   │   ├── hero/
│   │   ├── features/
│   │   └── ...
│   └── pages/                  # Page-spezifische Inspiration
│
├── specs/                      # Spezifikationen
│   └── [YYYY-MM-DD-spec-name]/
│       ├── planning/
│       └── spec.md
│
├── standards/                  # Quality Standards (als Reference)
│   ├── design/
│   ├── code/
│   └── seo/
│
├── dashboard/                  # Web Dashboard (Next.js)
│   └── ...
│
└── exports/                    # Exportierte Projekte
    └── [project-name]/
```

## Custom Sections (Keine Templates!)

**WebDesign-OS verwendet KEINE vorgefertigten Section Templates.**

Stattdessen wird jede Section **custom** erstellt basierend auf:

1. **User-Inspirationen** - Bilder in `inspirations/` werden mit Claude Vision analysiert
2. **User Code-Snippets** - Du kannst eigenen Code einbringen der integriert wird
3. **Design Tokens** - Farben, Typography, Spacing aus dem Design System
4. **Best Practices** - Bewährte Patterns für Hero, Features, Testimonials, etc.

### Inspirationen bereitstellen

Lege Bilder in `webdesign-os/inspirations/`:

```
inspirations/
├── general/          # Allgemeine Stil-Inspiration
│   ├── design1.png
│   └── website-screenshot.jpg
├── sections/
│   ├── hero/        # Hero-Section Inspiration
│   ├── features/    # Feature-Section Inspiration
│   └── ...
└── pages/
    ├── home/        # Homepage Inspiration
    └── ...
```

**Claude analysiert automatisch:**
- Layout-Struktur
- Farb-Palette
- Typography-Stil
- Spacing/Whitespace
- UI Patterns
- Animationen (wenn erkennbar)

### Code-Snippets einbringen

Du kannst Code-Snippets bereitstellen:
- Direkt im Chat
- Als Dateien
- Als Links zu CodePen/Stackblitz/etc.

**Unterstützte Formate:**
- React/Next.js Components
- Plain HTML/CSS
- Tailwind CSS
- Vue Components (werden konvertiert)

**Claude integriert den Code:**
1. Konvertiert zu Next.js/React falls nötig
2. Ersetzt hardcoded colors mit Design Tokens
3. Fügt Framer Motion Animationen hinzu
4. Macht responsive
5. Optimiert Accessibility

## Agents

| Agent | Beschreibung |
|-------|--------------|
| `project-initializer` | Interaktives Questionnaire für Projekt-Setup |
| `content-planner` | Plant Content-Mengen pro Seite |
| `design-architect` | Erstellt Design System basierend auf Brand + Inspirationen |
| `page-architect` | Plant Seiten-Architektur mit Custom Sections |
| `spec-writer` | Schreibt detaillierte Spezifikationen |
| `implementer` | Implementiert Custom Sections nach Spec |
| `verifier` | Verifiziert Implementation gegen Spec |

## Skills

| Skill | Beschreibung |
|-------|--------------|
| `design-system-creator` | OKLCH Colors, Typography, Spacing |
| `section-builder` | Custom Hero, Features, Testimonials, CTAs |
| `animation-library` | Framer Motion, Scroll Animations |
| `responsive-patterns` | Mobile-first Responsive Design |
| `seo-technical` | Schema Markup, Sitemaps, Meta Tags |
| `nextjs-patterns` | Next.js 15 Best Practices |
| `frontend-design` | Design Excellence Guidelines |
| `seo-optimizer` | Content SEO Best Practices |
| `component-validator` | TypeScript, Tokens, Responsive, A11y Checks |

## Integrationen (Optional)

### Blog (Sanity CMS)
```json
// config/integrations.json
{
  "blog": {
    "enabled": true,
    "provider": "sanity"
  }
}
```

### E-Commerce (MedusaJS)
```json
{
  "commerce": {
    "enabled": true,
    "provider": "medusa"
  }
}
```

### Auth (Supabase)
```json
{
  "auth": {
    "enabled": true,
    "provider": "supabase"
  }
}
```

### Payments (Stripe)
```json
{
  "payments": {
    "enabled": true,
    "provider": "stripe"
  }
}
```

## Web Dashboard

Das Dashboard zeigt den aktuellen Workflow-Status:

```bash
# Starten
cd webdesign-os/dashboard
npm install
npm run dev

# Oder via Command
/dashboard
```

Öffnet auf `http://localhost:3333`

**Features:**
- Step-by-Step Workflow Anzeige
- Commands zum Kopieren
- Zusammenfassungen nach jedem Schritt
- Mutable Steps (Edit Button)
- Auto-Refresh alle 2 Sekunden

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui + Tailwind CSS
- **Colors:** OKLCH Color System
- **Animations:** Framer Motion
- **Preview:** Playwright
- **CMS:** Sanity (optional)
- **E-Commerce:** MedusaJS (optional)
- **Auth:** Supabase (optional)
- **Payments:** Stripe (optional)

## Quality Targets

- **Lighthouse Score:** 90+ (alle Kategorien)
- **Core Web Vitals:** Grün
- **Accessibility:** WCAG AA
- **SEO:** On-Page + Technical optimiert

## License

MIT
