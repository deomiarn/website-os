# WebDesign-OS Workflow

> Zentrale Workflow-Definition für WebDesign-OS Projekte.
> Wird von GSD Commands gelesen (`/gsd:create-roadmap`, `/gsd:plan-phase`).

## Overview

WebDesign-OS nutzt einen strukturierten 8-Phasen-Workflow.
Jede Phase hat definierte Inputs, Tasks und Outputs.

**Reihenfolge:** 1 → 2 → 3 → 4 → 5 → 6 → 7 (optional) → 8

---

## Phase 1: Content Planning

**Goal:** Define content quantities and structure per page

**Input:**
- `webdesign-os/config/project.json` (Projekt-Definition)

**Tasks:**
- Analyze pages defined in project.json
- For each page, define sections needed (Hero, Features, Testimonials, FAQ, CTA, etc.)
- For each section, define content quantities:
  - Features: 3-6 items
  - Testimonials: 2-4 items
  - FAQs: 4-8 items
  - Team members: 2-6 items
- Clarify image availability (real images vs placeholders)
- Create content-inventory.json

**Output:** `webdesign-os/config/content-inventory.json`

**Research:** Unlikely (internal planning)

---

## Phase 2: Design System

**Goal:** Create visual foundation based on inspirations

**Input:**
- `webdesign-os/inspirations/` (Inspiration images)
- `webdesign-os/config/project.json` (Brand info)

**Tasks:**
- Analyze inspiration images in `webdesign-os/inspirations/`
- Extract color palette (Primary, Secondary, Accent, Neutral) in OKLCH
- Identify typography style (Display font + Body font)
- Define spacing system (4px base, scale: 4, 8, 12, 16, 24, 32, 48, 64, 96)
- Define border-radius pattern (sharp, rounded, pill)
- Define shadow style (none, subtle, elevated)
- Create design-tokens.json

**Output:** `webdesign-os/config/design-tokens.json`

**Research:** Unlikely (uses inspiration images as reference)

---

## Phase 3: Shape Pages

**Goal:** Design each page section by section

**Input:**
- `webdesign-os/config/content-inventory.json`
- `webdesign-os/config/design-tokens.json`
- `webdesign-os/inspirations/` (for layout reference)

**Tasks:**
- For each page from content-inventory.json:
  - Define section order
  - Select shadcnblocks component per section
  - Assign style reference image (optional)
  - Choose layout variant (grid, stack, split, centered)
- Create page-shapes/{page-name}.json per page

**Output:** `webdesign-os/config/page-shapes/*.json`

**Research:** Likely (shadcnblocks component selection)

**Research Topics:**
- shadcnblocks registry
- Available components and variants
- Component customization options

---

## Phase 4: Write Specs

**Goal:** Create technical implementation specs

**Input:**
- `webdesign-os/config/page-shapes/*.json`
- `webdesign-os/config/design-tokens.json`

**Tasks:**
- For each page from page-shapes:
  - Define component props
  - Specify responsive behavior (mobile-first breakpoints)
  - Define animations and micro-interactions
  - Document edge cases (empty content, long text, etc.)
- Create specs/{page-name}.md per page

**Output:** `webdesign-os/specs/*.md`

**Research:** Unlikely (internal documentation)

---

## Phase 5: Implement

**Goal:** Build all pages per specs

**Input:**
- `webdesign-os/specs/*.md`
- `webdesign-os/config/design-tokens.json`
- `webdesign-os/config/page-shapes/*.json`

**Tasks:**
- Initialize Next.js project (if not exists)
- Install and configure shadcn/ui
- Integrate design tokens into Tailwind config
- For each page/section:
  - Use shadcnblocks component as base
  - Customize per spec and design tokens
  - Run Design Excellence Check (must score >= 7/10)
  - If score < 7: iterate until passing
- Build to `exports/{project-name}/`

**Output:** Next.js project in `exports/`

**Research:** Likely (Next.js patterns, shadcn/ui setup)

**Research Topics:**
- Next.js 15 App Router
- shadcn/ui configuration
- Tailwind theming with OKLCH

---

## Phase 6: SEO

**Goal:** Optimize for search engines

**Input:**
- Implemented pages in `exports/`
- `webdesign-os/config/project.json` (Brand, Keywords)

**Tasks:**
- For each page:
  - Title tag (50-60 chars)
  - Meta description (150-160 chars)
  - Open Graph tags
  - Canonical URL
- Add schema markup:
  - Organization
  - LocalBusiness (if applicable)
  - BreadcrumbList
  - FAQ (if FAQ section exists)
- Create sitemap.xml
- Create robots.txt
- Optimize internal linking
- Add alt texts to all images

**Output:** SEO-optimized pages

**Research:** Unlikely (standard SEO patterns)

---

## Phase 7: Refine (Optional)

**Goal:** Polish based on feedback

**Input:**
- User feedback
- Implemented pages

**Tasks:**
- Collect user feedback
- Prioritize changes (High/Medium/Low impact)
- Implement refinements
- Re-run Design Excellence checks
- Performance optimizations if needed

**Output:** Refined implementation

**Research:** Unlikely (iteration on existing work)

**Note:** This phase can be skipped if no refinements needed.

---

## Phase 8: Verify & Export

**Goal:** Final quality assurance and production build

**Input:**
- Complete implementation in `exports/`

**Tasks:**
- Run Lighthouse audit:
  - Performance >= 90
  - Accessibility >= 90
  - Best Practices >= 90
  - SEO >= 90
- Responsive tests:
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1280px)
  - Large Desktop (1920px)
- Design review against specs
- Cross-browser check (Chrome, Firefox, Safari)
- Create production build
- Generate export documentation

**Output:** Production-ready project

**Research:** Unlikely (standard verification)

---

## Config Files Reference

| File | Purpose |
|------|---------|
| `webdesign-os/config/project.json` | Project definition (brand, audience, pages) |
| `webdesign-os/config/content-inventory.json` | Content quantities per page/section |
| `webdesign-os/config/design-tokens.json` | Colors, typography, spacing (OKLCH) |
| `webdesign-os/config/page-shapes/*.json` | Section layouts per page |
| `webdesign-os/specs/*.md` | Technical implementation specs |
| `webdesign-os/inspirations/` | Reference images for design |

---

## Important Notes

### Inspiration Images

- **Layout reference ONLY** - Inspirations define structure, not colors/fonts
- Colors and fonts come from `design-tokens.json`
- Place images in `webdesign-os/inspirations/` BEFORE starting

### Design Excellence Check

During Phase 5, each section must pass a Design Excellence Check:
- Score >= 7/10 required
- Criteria: Visual hierarchy, spacing, typography, color usage, responsiveness
- If score < 7: iterate and improve

### Anti-patterns

- Do NOT skip phases (except Phase 7 which is optional)
- Do NOT merge phases
- Do NOT add custom phases
- Do NOT ignore inspiration images
- Do NOT use generic designs - always reference inspirations

---

*WebDesign-OS Workflow v1.0*
