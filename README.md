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

## Quick Start

```bash
# 1. Clone the repository
git clone <repo-url> && cd webdesign-os

# 2. Open in Claude Code
claude

# 3. Start a new project
/init-project
```

## Workflow

WebDesign-OS uses a 9-phase workflow:

```
/init-project → /content-plan → /design-system → /shape-pages → /write-spec
     ↓
/implement → /seo → /refine (optional) → /verify
```

| Phase | Command | Description |
|-------|---------|-------------|
| 1 | `/init-project` | Interactive project setup questionnaire |
| 2 | `/content-plan` | Plan content quantities per page |
| 3 | `/design-system` | Generate OKLCH colors, typography, spacing |
| 4 | `/shape-pages` | Design sections based on your inspirations |
| 5 | `/write-spec` | Create detailed technical specifications |
| 6 | `/implement` | Build custom sections with validation |
| 7 | `/seo` | SEO verification and refinement |
| 8 | `/refine` | Optional page-by-page refinements |
| 9 | `/verify` | Final verification and export |

## How It Works

### 1. Provide Inspirations

Drop images into `webdesign-os/inspirations/`:

```
inspirations/
├── general/              # Overall style inspiration
├── sections/
│   ├── hero/            # Hero section inspiration
│   ├── features/        # Features section inspiration
│   └── ...
└── pages/
    └── home/            # Page-specific inspiration
```

Claude Vision analyzes your images and extracts:
- Layout structure
- Color palette
- Typography style
- Spacing/whitespace
- UI patterns
- Animations

### 2. Optionally Provide Code Snippets

You can share code snippets that get integrated:
- In the chat directly
- As files
- As links to CodePen/Stackblitz

Supported formats: React, HTML/CSS, Tailwind, Vue (converted)

### 3. Custom Sections Get Built

Every section is custom-built based on:
- Your analyzed inspirations
- Your code snippets (if provided)
- Design tokens from your design system
- Best practices for the section type

## Project Structure

```
webdesign-os/
├── config/                      # Project configurations
│   ├── project.json            # Main config
│   ├── design-tokens.json      # Design system tokens
│   ├── pages.json              # Page structure
│   └── workflow-state.json     # Current workflow status
│
├── inspirations/               # Your inspiration images
├── specs/                      # Generated specifications
├── standards/                  # Quality standards
├── dashboard/                  # Web dashboard
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

## Documentation

See [`webdesign-os/README.md`](./webdesign-os/README.md) for detailed documentation.

## License

MIT
