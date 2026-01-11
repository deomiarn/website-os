# Architecture

**Analysis Date:** 2026-01-11

## Pattern Overview

**Overall:** Layered Web Application with Workflow State Management

**Key Characteristics:**
- Stateful workflow engine tracking 9 sequential phases
- File-based state management (JSON configuration files)
- API-driven dashboard with polling updates
- Decoupled concerns: workflow execution separate from monitoring

## Layers

**API Layer:**
- Purpose: Read filesystem state and provide data to frontend
- Contains: Next.js API route handlers (GET only)
- Location: `webdesign-os/dashboard/src/app/api/`
- Pattern: Simple handlers that read JSON files or scan directories

**UI/Presentation Layer:**
- Purpose: Display workflow progress and contextual guidance
- Contains: React client components with polling
- Location: `webdesign-os/dashboard/src/app/`, `webdesign-os/dashboard/src/components/`
- Pattern: Stateless, data-driven components

**Configuration/State Layer:**
- Purpose: Persist all project and workflow state
- Contains: JSON configuration files
- Location: `webdesign-os/config/`
- Pattern: Flat file storage, no database

**Standards/Reference Layer:**
- Purpose: Quality and design standards documentation
- Contains: Markdown documentation
- Location: `webdesign-os/standards/`

## Data Flow

**Dashboard Polling Flow:**

1. Browser (`page.tsx`) mounts, triggers `loadWorkflow()`
2. `fetch("/api/workflow")` every 3 seconds
3. API handler reads `config/workflow-state.json`, `config/project.json`
4. Checks existence of `.planning/` files for GSD status
5. Returns `NextResponse.json({ steps, currentStep, gsd, project })`
6. React `setState` triggers re-render
7. Sidebar, StepDetail, GuidancePanel reflect changes

**State Management:**
- File-based: All state persists in `.planning/` and `config/` directories
- No persistent in-memory state
- Each request reads fresh data from filesystem
- Polling with 3-second intervals (no WebSockets)

## Key Abstractions

**WorkflowStep:**
- Purpose: Track status of each workflow phase
- Pattern: Finite state machine (pending → in_progress → completed, locked)
- Location: Defined in `webdesign-os/dashboard/src/app/page.tsx`

**Step Descriptions:**
- Purpose: Map step ID to guidance content
- Pattern: Static Record object
- Location: `webdesign-os/dashboard/src/components/StepDetail.tsx`

**Design Tokens:**
- Purpose: Centralized design system configuration
- Pattern: Nested JSON structure (colors, typography, spacing)
- Location: `webdesign-os/config/design-tokens.json`

## Entry Points

**Dashboard Entry:**
- Location: `webdesign-os/dashboard/src/app/page.tsx`
- Triggers: Opening dashboard URL
- Responsibilities: Initialize polling, render layout, manage step selection

**API Endpoints:**
- Location: `webdesign-os/dashboard/src/app/api/*/route.ts`
- Triggers: HTTP GET requests from dashboard
- Responsibilities: Read config files, return JSON data

**Workflow Execution:**
- Location: `.claude/commands/webdesign-os/*.md`
- Triggers: Claude Code slash commands (`/init-project`, `/design-system`, etc.)
- Responsibilities: Execute workflow phases, update config files

## Error Handling

**Strategy:** Try-catch with graceful fallbacks

**Patterns:**
- API routes return null or empty objects on error
- Frontend shows loading state or placeholder content
- Console.error for debugging
- No user-facing error messages

## Cross-Cutting Concerns

**Logging:**
- Console.log/error only
- No structured logging framework

**Validation:**
- TypeScript compile-time type checking
- Path validation in image serving API
- No runtime schema validation

**State Synchronization:**
- Polling-based (3-5 second intervals)
- No optimistic updates
- No WebSocket/SSE real-time updates

---

*Architecture analysis: 2026-01-11*
*Update when major patterns change*
