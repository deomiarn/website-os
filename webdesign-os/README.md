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
- **GSD Integration** - Strukturierter Workflow mit Get Shit Done (GSD)

## Quick Start

```bash
# 1. Repository klonen
git clone <repo-url>
cd webdesign-os

# 2. GSD installieren (einmalig)
npx get-shit-done-cc

# 3. Dashboard starten (optional)
cd webdesign-os/dashboard && npm install && npm run dev

# 4. In Claude Code öffnen
cd .. && claude

# 5. Workflow starten
/gsd:map-codebase
```

## GSD Workflow (8 Phasen)

WebDesign-OS nutzt [GSD (Get Shit Done)](https://github.com/cyanheads/get-shit-done) für strukturierte Projekt-Ausführung.

### Projekt initialisieren

```bash
# Schritt 1: Codebase analysieren
/gsd:map-codebase

# Schritt 2: Projekt-Details erfassen (interaktiv)
/gsd:new-project

# Schritt 3: Roadmap erstellen (8 WebDesign-OS Phasen)
/gsd:create-roadmap
```

### Phase ausführen

Pro Phase immer diese Sequenz:

```bash
# Plan erstellen
/gsd:plan-phase N    # N = 1-8

# Plan ausführen
/gsd:execute-plan

# Context leeren (wichtig!)
/clear
```

### Die 8 Phasen

| Phase | Name | Command | Output |
|-------|------|---------|--------|
| 1 | Content Planning | `/gsd:plan-phase 1` | `config/content-inventory.json` |
| 2 | Design System | `/gsd:plan-phase 2` | `config/design-tokens.json` |
| 3 | Shape Pages | `/gsd:plan-phase 3` | `config/page-shapes/*.json` |
| 4 | Write Specs | `/gsd:plan-phase 4` | `specs/*.md` |
| 5 | Implement | `/gsd:plan-phase 5` | Next.js Projekt in `exports/` |
| 6 | SEO | `/gsd:plan-phase 6` | SEO-optimierte Seiten |
| 7 | Refine | `/gsd:plan-phase 7` | Verfeinerte Seiten (optional) |
| 8 | Verify & Export | `/gsd:plan-phase 8` | Production Build |

> Detaillierte Phase-Definitionen: [`webdesign-os/WORKFLOW.md`](./WORKFLOW.md)

### Wichtige GSD Commands

| Command | Beschreibung |
|---------|--------------|
| `/gsd:progress` | Zeigt aktuellen Fortschritt |
| `/gsd:check-todos` | Offene Todos anzeigen |
| `/gsd:resume-work` | Arbeit fortsetzen nach Pause |
| `/gsd:add-todo` | Todo hinzufügen |

## Dashboard

Das Dashboard zeigt den aktuellen Workflow-Status visuell an:

```bash
cd webdesign-os/dashboard
npm install
npm run dev
```

Öffnet auf `http://localhost:3333`

**Features:**
- Step-by-Step Workflow Anzeige
- GSD Commands zum Kopieren
- Tipps und Warnungen pro Phase
- Auto-Refresh alle 2 Sekunden

## Ordnerstruktur

```
webdesign-os/
├── .claude/
│   └── commands/
│       └── gsd/                    # Lokale GSD Command Overrides
│           ├── create-roadmap.md   # Erzwingt 8 WebDesign-OS Phasen
│           └── plan-phase.md       # Liest aus WORKFLOW.md
│
├── webdesign-os/
│   ├── WORKFLOW.md                 # Phase-Definitionen (zentrale Quelle)
│   ├── config/
│   │   ├── project.json            # Projekt-Definition
│   │   ├── design-tokens.json      # Design System (Phase 2)
│   │   ├── content-inventory.json  # Content-Mengen (Phase 1)
│   │   └── page-shapes/            # Seiten-Struktur (Phase 3)
│   │
│   ├── inspirations/               # Inspiration-Bilder
│   │   ├── bild1.jpg
│   │   ├── bild2.jpg
│   │   └── ...
│   │
│   ├── specs/                      # Technische Specs (Phase 4)
│   │   └── *.md
│   │
│   └── dashboard/                  # Web Dashboard (Next.js)
│
├── exports/                        # Exportierte Projekte (Phase 5+)
│   └── [project-name]/
│
└── .planning/                      # GSD generiert (nicht editieren)
    ├── PROJECT.md
    ├── ROADMAP.md
    ├── STATE.md
    └── phases/
```

## Inspirationen bereitstellen

**WICHTIG:** Lege Inspiration-Bilder in `webdesign-os/inspirations/` BEVOR du startest!

```
webdesign-os/inspirations/
├── bild1.jpg     # Allgemeine Stil-Inspiration
├── bild2.png     # Website-Screenshot
└── hero-ref.jpg  # Section-spezifische Inspiration
```

**Claude analysiert automatisch:**
- Layout-Struktur
- Farb-Palette
- Typography-Stil
- Spacing/Whitespace
- UI Patterns

**Wichtig:** Inspirationen definieren **Layout**, nicht Farben/Fonts.
Farben und Fonts kommen aus `design-tokens.json` (Phase 2).

## Custom Sections (Keine Templates!)

**WebDesign-OS verwendet KEINE vorgefertigten Section Templates.**

Jede Section wird **custom** erstellt basierend auf:

1. **User-Inspirationen** - Bilder werden mit Claude Vision analysiert
2. **User Code-Snippets** - Eigener Code kann integriert werden
3. **Design Tokens** - Farben, Typography, Spacing aus dem Design System
4. **shadcnblocks** - Als Basis-Komponenten (customized)

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui + shadcnblocks + Tailwind CSS
- **Colors:** OKLCH Color System
- **Animations:** Framer Motion
- **Workflow:** GSD (Get Shit Done)
- **CMS:** Sanity (optional)
- **E-Commerce:** MedusaJS (optional)

## Quality Targets

- **Lighthouse Score:** 90+ (alle Kategorien)
- **Core Web Vitals:** Grün
- **Accessibility:** WCAG AA
- **Design Excellence:** Score >= 7/10 pro Section

## Troubleshooting

### GSD Commands funktionieren nicht

```bash
# GSD neu installieren
npx get-shit-done-cc
```

### Phase-Output fehlt

Prüfe ob vorherige Phase abgeschlossen ist:
```bash
/gsd:progress
```

### Context zu voll

Nach jeder Phase:
```bash
/clear
```

## License

MIT
