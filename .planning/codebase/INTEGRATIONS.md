# External Integrations

**Analysis Date:** 2026-01-11

## APIs & External Services

**shadcn/ui Components API:**
- Purpose: Component library registry access
- Configuration: `/.mcp.json` - MCP server integration
- Auth: API key in `SHADCNBLOCKS_API_KEY` env var
- SDK: `npx shadcn@latest mcp` command

**Claude Vision API:**
- Purpose: Analyze inspiration images and extract design patterns
- Integration: Via Claude's built-in capabilities (no SDK)
- Used in: `/shape-pages` phase for inspiration analysis

## Data Storage

**Databases:**
- None - File-based JSON configuration only

**File Storage:**
- Local filesystem for all project data
- Configuration files: `webdesign-os/config/*.json`
- Inspiration images: `webdesign-os/inspirations/`
- No cloud storage configured

**Caching:**
- None - All reads are direct filesystem access

## Authentication & Identity

**Auth Provider:**
- None currently implemented
- Optional Supabase Auth mentioned in README for future use

## Monitoring & Observability

**Error Tracking:**
- None - Console.error only

**Analytics:**
- None configured

**Logs:**
- Console output only (stdout/stderr)

## CI/CD & Deployment

**Hosting:**
- Not configured - local development only
- Designed for Vercel deployment

**CI Pipeline:**
- None - No GitHub Actions or test automation

## Environment Configuration

**Development:**
- Required env vars: `SHADCNBLOCKS_API_KEY`
- Secrets location: `.env` at repository root (gitignored)

**Staging/Production:**
- Not configured

## Internal API Routes

**Dashboard APIs** (read-only, filesystem access):
- `GET /api/workflow` - Reads `workflow-state.json`, `project.json`, checks GSD status
- `GET /api/design-tokens` - Reads `config/design-tokens.json`
- `GET /api/inspirations` - Scans `inspirations/` directory
- `GET /api/inspirations/image` - Serves images with path validation

## MCP (Model Context Protocol) Servers

**shadcn MCP Server:**
- Configuration: `/.mcp.json`
- Command: `npx shadcn@latest mcp`
- Purpose: Claude Code integration with shadcn component registry

**Playwright MCP:**
- Location: `.playwright-mcp/`
- Purpose: Browser automation for previews

## Claude Code Skills

Located in `.claude/skills/`:
- **ui-ux-pro-max** - UI/UX design recommendations (Python scripts, 57 styles, 95+ palettes)
- **design-system-creator** - Design token generation
- **animation-library** - Framer Motion animations
- **section-builder** - Component section building
- **seo-technical** - Technical SEO implementation
- **design-excellence** - Quality validation
- **responsive-patterns** - Mobile-first design
- **nextjs-patterns** - Next.js best practices
- **component-validator** - Component validation

## Optional Integrations (Planned)

From `webdesign-os/README.md` - not currently active:
- **Sanity CMS** - Blog content management
- **MedusaJS** - E-commerce functionality
- **Supabase** - Authentication and database
- **Stripe** - Payment processing

Configuration file: `webdesign-os/config/integrations.json` (currently empty)

---

*Integration audit: 2026-01-11*
*Update when adding/removing external services*
