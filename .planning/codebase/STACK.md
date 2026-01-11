# Technology Stack

**Analysis Date:** 2026-01-11

## Languages

**Primary:**
- TypeScript 5.0 - All dashboard application code (`webdesign-os/dashboard/`)
- Python 3 - UI UX Pro Max skill scripts (`.claude/skills/ui-ux-pro-max/scripts/`)

**Secondary:**
- JavaScript - Configuration files (`next.config.js`, `postcss.config.js`)
- CSS - Tailwind CSS styling (`globals.css`)

## Runtime

**Environment:**
- Node.js (implicit, no .nvmrc detected)
- Next.js 15 App Router (server and client rendering)
- React 19 (client-side)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present in `webdesign-os/dashboard/`

## Frameworks

**Core:**
- Next.js 15.0.0 - Full-stack React framework with App Router - `webdesign-os/dashboard/package.json`
- React 19.0.0 - UI library - `webdesign-os/dashboard/package.json`

**Styling:**
- Tailwind CSS 3.4.0 - Utility-first CSS - `webdesign-os/dashboard/tailwind.config.ts`
- PostCSS 8.0.0 - CSS processing - `webdesign-os/dashboard/postcss.config.js`
- Autoprefixer 10.0.0 - Vendor prefixes - `webdesign-os/dashboard/postcss.config.js`

**Testing:**
- None detected (no vitest, jest, or testing-library)

**Build/Dev:**
- TypeScript 5.0.0 - Type safety and compilation - `webdesign-os/dashboard/tsconfig.json`
- Chokidar 3.5.3 - File system watching - `webdesign-os/dashboard/package.json`

## Key Dependencies

**UI:**
- lucide-react 0.460.0 - Icon library - `webdesign-os/dashboard/package.json`

**Types:**
- @types/node 20.0.0 - Node.js type definitions
- @types/react 19.0.0 - React type definitions

## Configuration

**Environment:**
- `.env` file at repository root
- Contains: `SHADCNBLOCKS_API_KEY` for shadcn component registry

**Build:**
- `webdesign-os/dashboard/next.config.js` - Minimal Next.js config
- `webdesign-os/dashboard/tsconfig.json` - TypeScript config with strict mode, path alias `@/*` → `src/*`
- `webdesign-os/dashboard/tailwind.config.ts` - CSS variables for theming (background, foreground, primary, muted, border, success, warning)
- `webdesign-os/dashboard/postcss.config.js` - Tailwind + Autoprefixer

**Design System:**
- `webdesign-os/config/design-tokens.json` - OKLCH colors, typography, spacing, animations
- shadcn/ui components (referenced, installed via CLI)

## Platform Requirements

**Development:**
- macOS/Linux/Windows (any platform with Node.js)
- No Docker required

**Production:**
- Vercel (optimized for Next.js deployment)
- Any Node.js hosting platform

---

*Stack analysis: 2026-01-11*
*Update after major dependency changes*
