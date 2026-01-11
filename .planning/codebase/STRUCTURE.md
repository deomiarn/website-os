# Codebase Structure

**Analysis Date:** 2026-01-11

## Directory Layout

```
webdesign-os/                          # Repository root
├── .claude/                           # Claude Code configuration
│   ├── agents/                        # Agent definitions (10 agents)
│   ├── commands/webdesign-os/         # Slash commands (10 commands)
│   └── skills/                        # Skill modules (15 skills)
├── .planning/                         # GSD planning documents
├── webdesign-os/                      # Main project folder
│   ├── config/                        # JSON configuration files
│   ├── dashboard/                     # Next.js 15 web dashboard
│   │   ├── src/app/                   # App Router pages and APIs
│   │   ├── src/components/            # React components
│   │   └── src/lib/                   # Utilities (empty)
│   ├── inspirations/                  # User inspiration images
│   ├── specs/                         # Generated specifications
│   └── standards/                     # Quality standards docs
├── .env                               # Environment variables
├── .mcp.json                          # MCP server configuration
└── README.md                          # Repository documentation
```

## Directory Purposes

**`.claude/agents/`**
- Purpose: Agent definitions for Claude Code subagents
- Contains: `.md` files defining agent roles and capabilities
- Key files: `implementer.md`, `component-builder.md`, `verifier.md`

**`.claude/commands/webdesign-os/`**
- Purpose: Slash command definitions for 9-phase workflow
- Contains: `.md` files with command prompts
- Key files: `init-project.md`, `design-system.md`, `shape-pages.md`, `implement.md`

**`.claude/skills/`**
- Purpose: Reusable skill modules with specialized knowledge
- Contains: Subdirectories with skill definitions and data
- Key directories: `ui-ux-pro-max/`, `design-system-creator/`, `seo-technical/`

**`webdesign-os/config/`**
- Purpose: Project state and configuration
- Contains: JSON files storing workflow state, project info, design tokens
- Key files:
  - `workflow-state.json` - 9-step status tracking
  - `project.json` - Brand, audience, pages, features
  - `design-tokens.json` - Colors, typography, spacing
  - `pages.json` - Page structure and sections
  - `integrations.json` - Feature toggles

**`webdesign-os/dashboard/`**
- Purpose: Next.js 15 monitoring dashboard
- Contains: React application with API routes
- Subdirectories:
  - `src/app/` - App Router pages and API endpoints
  - `src/components/` - Reusable React components
  - `src/lib/` - Utility functions (currently empty)

**`webdesign-os/inspirations/`**
- Purpose: User-provided design reference images
- Contains: Image files organized by category
- Subdirectories: `general/`, `sections/`, `pages/`

## Key File Locations

**Entry Points:**
- `webdesign-os/dashboard/src/app/page.tsx` - Dashboard main page
- `webdesign-os/dashboard/src/app/layout.tsx` - Root layout

**Configuration:**
- `webdesign-os/dashboard/tsconfig.json` - TypeScript config (strict mode, @/* alias)
- `webdesign-os/dashboard/tailwind.config.ts` - Tailwind theme
- `webdesign-os/dashboard/next.config.js` - Next.js config
- `.env` - Environment variables (SHADCNBLOCKS_API_KEY)

**API Routes:**
- `webdesign-os/dashboard/src/app/api/workflow/route.ts` - Workflow state
- `webdesign-os/dashboard/src/app/api/design-tokens/route.ts` - Design tokens
- `webdesign-os/dashboard/src/app/api/inspirations/route.ts` - Inspiration images
- `webdesign-os/dashboard/src/app/api/inspirations/image/route.ts` - Image serving

**Components:**
- `webdesign-os/dashboard/src/components/Sidebar.tsx` - Step navigation
- `webdesign-os/dashboard/src/components/StepDetail.tsx` - Step display
- `webdesign-os/dashboard/src/components/GuidancePanel.tsx` - Context tips
- `webdesign-os/dashboard/src/components/ProgressRing.tsx` - Progress visualization
- `webdesign-os/dashboard/src/components/previews/` - Design token and inspiration previews

## Naming Conventions

**Files:**
- PascalCase for React components: `Sidebar.tsx`, `GuidancePanel.tsx`
- kebab-case for config files: `workflow-state.json`, `design-tokens.json`
- `route.ts` for Next.js API routes (convention)

**Directories:**
- kebab-case: `design-tokens/`, `shape-pages/`
- Lowercase for standard directories: `src/`, `config/`, `components/`

**Special Patterns:**
- `index.ts` not used (Next.js App Router convention)
- `page.tsx` and `layout.tsx` for route segments
- `route.ts` for API endpoints

## Where to Add New Code

**New Slash Command:**
- Primary code: `.claude/commands/webdesign-os/{command-name}.md`
- Agent if needed: `.claude/agents/{agent-name}.md`

**New Dashboard Component:**
- Implementation: `webdesign-os/dashboard/src/components/{ComponentName}.tsx`
- Preview component: `webdesign-os/dashboard/src/components/previews/{PreviewName}.tsx`

**New API Endpoint:**
- Implementation: `webdesign-os/dashboard/src/app/api/{endpoint}/route.ts`

**New Config File:**
- Location: `webdesign-os/config/{name}.json`

**New Skill:**
- Directory: `.claude/skills/{skill-name}/`
- Definition: `.claude/skills/{skill-name}/index.md`

## Special Directories

**`.next/`**
- Purpose: Next.js build output
- Source: Auto-generated by Next.js
- Committed: No (in .gitignore)

**`node_modules/`**
- Purpose: npm dependencies
- Source: Auto-installed by npm
- Committed: No (in .gitignore)

---

*Structure analysis: 2026-01-11*
*Update when directory structure changes*
