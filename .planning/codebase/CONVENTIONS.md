# Coding Conventions

**Analysis Date:** 2026-01-11

## Naming Patterns

**Files:**
- PascalCase for React components: `ProgressRing.tsx`, `Sidebar.tsx`, `GuidancePanel.tsx`
- kebab-case for config files: `workflow-state.json`, `design-tokens.json`
- `route.ts` for Next.js API routes

**Functions:**
- camelCase for all functions: `loadWorkflow()`, `handleCopy()`, `getStatusBadge()`
- No special prefix for async functions
- Descriptive verbs: `get*`, `load*`, `handle*`

**Variables:**
- camelCase for variables: `currentStep`, `selectedStep`, `loading`
- UPPER_SNAKE_CASE for constants: `INSPIRATIONS_DIR`, `IMAGE_EXTENSIONS`
- No underscore prefix for private members

**Types:**
- PascalCase for interfaces: `WorkflowStep`, `GSDStatus`, `PageProgress`
- No I-prefix (use `WorkflowStep` not `IWorkflowStep`)
- Props interfaces: `{ComponentName}Props` pattern

## Code Style

**Formatting:**
- 2-space indentation
- Double quotes for strings (`"use client"`)
- Semicolons required at end of statements
- No explicit Prettier config found

**TypeScript:**
- Strict mode enabled (`strict: true` in tsconfig.json)
- Path alias: `@/*` maps to `src/*`
- Explicit return types optional (inferred)

## Import Organization

**Order:**
1. React imports: `import { useEffect, useState } from "react"`
2. External libraries: `import { RefreshCw, Settings } from "lucide-react"`
3. Internal components: `import { Sidebar } from "@/components/Sidebar"`
4. Types (inline or separate import)

**Grouping:**
- No blank lines between groups (compact style)
- Alphabetical within groups not enforced

**Path Aliases:**
- `@/` maps to `src/` for cleaner imports

## Error Handling

**Patterns:**
- Try-catch with console.error for logging
- Graceful fallbacks (return null or empty objects)
- No custom error classes

**Example pattern:**
```typescript
try {
  const res = await fetch("/api/workflow")
  const data = await res.json()
  setWorkflow(data)
} catch (error) {
  console.error("Failed to load workflow:", error)
}
```

## Logging

**Framework:**
- Console.log for normal output
- Console.error for errors
- No structured logging library

**Patterns:**
- Log at error boundaries
- Include context: `console.error("Failed to load workflow:", error)`

## Comments

**When to Comment:**
- Section dividers in JSX: `{/* Sidebar */}`, `{/* Header */}`
- Inline explanations: `// Auto-select current step if nothing selected`
- Minimal comments - code is self-documenting

**JSDoc/TSDoc:**
- Not used (no explicit documentation)

**TODO Comments:**
- None found in codebase (clean)

## Function Design

**Size:**
- Components can be large (300+ lines)
- Recommend extraction for 100+ line components

**Parameters:**
- Destructured props: `function Sidebar({ currentStep, onStepClick })`
- Options object for complex parameters

**Return Values:**
- Explicit JSX returns
- Early returns for guard clauses

## Module Design

**Exports:**
- Named exports preferred: `export function Sidebar()`
- No default exports (except where required by framework)

**Component Structure:**
1. "use client" directive (if needed)
2. Imports
3. Interface definitions
4. Constants (Record objects for mappings)
5. Component function
6. Helper functions (if any)

## React Patterns

**Client Components:**
- `"use client"` directive at file top
- State with `useState`
- Effects with `useEffect`
- Cleanup in useEffect returns

**Polling Pattern:**
```typescript
useEffect(() => {
  loadData()
  const interval = setInterval(loadData, 3000)
  return () => clearInterval(interval)
}, [])
```

**Conditional Rendering:**
- Ternary for simple conditions
- Early returns for loading/error states

## Tailwind CSS Patterns

**Class Organization:**
- Layout first: `flex`, `grid`
- Sizing: `w-*`, `h-*`
- Spacing: `p-*`, `m-*`, `gap-*`
- Colors: `bg-*`, `text-*`
- Borders: `border-*`, `rounded-*`
- States: `hover:*`, `focus:*`

**Color Variables:**
- CSS variables for theming: `bg-background`, `text-foreground`
- Zinc palette for dark theme: `bg-zinc-800`, `text-zinc-400`

---

*Convention analysis: 2026-01-11*
*Update when patterns change*
