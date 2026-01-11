# WebDesign-OS

A Claude Code-based system for creating high-quality, SEO-optimized websites with **100% custom designs** based on user inspirations.

## What is WebDesign-OS?

WebDesign-OS solves the problem of generic AI-generated designs. Through clear standards, a structured design system, and **custom sections based on your inspirations**, it creates websites at Dribbble-level quality.

### Key Features

- **100% Custom Design** - No pre-built templates, every section is individually crafted
- **Inspiration-First** - Claude Vision analyzes your inspiration images and extracts patterns
- **User Code Integration** - Bring your own code snippets that get integrated and enhanced
- **Design Excellence** - High-quality visual design based on your vision
- **Performance** - Page Speed + Core Web Vitals optimized
- **SEO** - SEO-ready from the ground up (Schema Markup, Metadata, Sitemaps)
- **Flexible** - Optional: Blog (Sanity), E-Commerce (MedusaJS), Auth (Supabase), Payments (Stripe)

## Integrated Tools

WebDesign-OS combines three powerful systems:

| Tool | Purpose |
|------|---------|
| **Get Shit Done (GSD)** | Context Engineering, Planning, Atomic Tasks |
| **UI UX Pro Max** | 57 UI Styles, 95 Color Palettes, 56 Font Pairings, UX Guidelines |
| **WebDesign-OS** | Inspiration-Based Design, Design Excellence Checks, Implementation |

## Quick Start

```bash
# 1. Clone the repository
git clone <repo-url> && cd webdesign-os

# 2. Open in Claude Code
claude

# 3. Start with GSD for deep planning (RECOMMENDED)
/gsd:new-project

# OR start directly with WebDesign-OS
/webdesign-os:init-project
```

## Workflow

### Option A: Full Workflow with GSD (Recommended for Complex Projects)

```
GSD Planning Phase:
/gsd:new-project     → Deep context gathering, PROJECT.md
/gsd:create-roadmap  → Phases planning, ROADMAP.md
     ↓
WebDesign-OS Design Phase:
/webdesign-os:init-project   → WebDesign-OS config (reads PROJECT.md)
/webdesign-os:content-plan   → Plan content per page
/webdesign-os:design-system  → Design tokens (with UI UX Pro Max recommendations)
/webdesign-os:shape-pages    → Design sections (UI UX Pro Max + Inspirations)
/webdesign-os:write-spec     → Technical specifications
     ↓
Implementation Phase:
/gsd:plan-phase N    → Atomic task planning
/gsd:execute-plan    → Subagent executes (fresh context = better quality)
/webdesign-os:seo    → SEO verification
/webdesign-os:verify → Final validation
```

### Option B: Quick Workflow (Simple Projects)

```
/webdesign-os:init-project → /webdesign-os:content-plan → /webdesign-os:design-system
     ↓
/webdesign-os:shape-pages → /webdesign-os:write-spec → /webdesign-os:implement
     ↓
/webdesign-os:seo → /webdesign-os:verify
```

## How It Works

### 1. Provide Inspirations

Drop images into `webdesign-os/inspirations/`:

```
inspirations/
├── general/              # Overall style inspiration
│   ├── bild1.jpg
│   └── bild2.jpg
├── sections/
│   ├── hero/            # Hero section inspiration
│   ├── features/        # Features section inspiration
│   └── ...
└── pages/
    └── home/            # Page-specific inspiration
```

Claude Vision analyzes your images and extracts:
- Layout structure
- Color palette (combined with UI UX Pro Max recommendations)
- Typography style
- Spacing/whitespace
- UI patterns
- Animations

### 2. UI UX Pro Max Recommendations

During `/design-system`, UI UX Pro Max provides recommendations:

```bash
# Example searches that happen automatically
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS modern" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "tech startup" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "professional clean" --domain typography
```

**Important:** UI UX Pro Max gives recommendations - YOU decide! Your inspirations always have priority.

### 3. Design Excellence Checks

Every section is validated against a 7-category checklist:
1. Inspiration Alignment
2. Typography Distinction
3. Color Intentionality
4. Spatial Composition
5. Visual Details
6. Animation Strategy
7. Anti-Generic Check

**Minimum Score: 7/10** to proceed. This ensures Dribbble-quality output.

### 4. GSD for Implementation

For complex implementations, GSD ensures quality through:
- **Atomic Tasks** - Max 3 tasks per plan
- **Fresh Context** - Each task runs in clean 200k token context
- **Automatic Commits** - Each task gets its own commit
- **State Management** - STATE.md tracks progress across sessions

## Available Commands

### GSD Commands (Planning & Context)

| Command | Description |
|---------|-------------|
| `/gsd:new-project` | Deep context gathering, creates PROJECT.md |
| `/gsd:create-roadmap` | Create phases roadmap |
| `/gsd:plan-phase N` | Generate atomic task plans |
| `/gsd:execute-plan` | Run plan via subagent |
| `/gsd:progress` | Check current progress |
| `/gsd:help` | Show all GSD commands |

### WebDesign-OS Commands (Design & Build)

| Command | Description |
|---------|-------------|
| `/webdesign-os:init-project` | Project setup (reads GSD PROJECT.md if exists) |
| `/webdesign-os:content-plan` | Plan content quantities per page |
| `/webdesign-os:design-system` | Design tokens with UI UX Pro Max recommendations |
| `/webdesign-os:shape-pages` | Design sections with inspirations + UX guidelines |
| `/webdesign-os:write-spec` | Technical specifications |
| `/webdesign-os:implement` | Build with validation |
| `/webdesign-os:seo` | SEO verification |
| `/webdesign-os:verify` | Final validation |

## Project Structure

```
webdesign-os/
├── .planning/                   # GSD planning files
│   ├── PROJECT.md              # Project vision (from GSD)
│   ├── ROADMAP.md              # Phases roadmap
│   └── STATE.md                # Session state
│
├── .claude/
│   ├── commands/
│   │   ├── gsd/                # GSD commands (global)
│   │   └── webdesign-os/       # WebDesign-OS commands
│   └── skills/
│       └── ui-ux-pro-max/      # UI UX Pro Max skill
│           ├── SKILL.md
│           ├── scripts/
│           └── data/           # 57 styles, 95 palettes, 56 fonts...
│
├── webdesign-os/
│   ├── config/                 # Project configurations
│   │   ├── project.json
│   │   ├── design-tokens.json
│   │   └── workflow-state.json
│   ├── inspirations/           # Your inspiration images
│   ├── specs/                  # Generated specifications
│   └── standards/              # Quality standards
│
└── exports/                    # Exported projects
```

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui + Tailwind CSS
- **Colors:** OKLCH Color System
- **Animations:** Framer Motion
- **Optional:** Sanity, MedusaJS, Supabase, Stripe

## Quality Targets

- Lighthouse Score: 90+ (all categories)
- Core Web Vitals: Green
- Accessibility: WCAG AA
- SEO: On-Page + Technical optimized
- Design Excellence: 7/10 minimum per section

## Inspiration Priority

```
1. Your Inspiration Images (HIGHEST - Layout & Visual Direction)
2. Your Design Tokens (Component Styles from /design-system)
3. UI UX Pro Max (Recommendations & Best Practices)
4. WebDesign-OS Defaults (Fallback)
```

## License

MIT
