---
name: component-validator
description: Validates components after implementation - TypeScript, Design Tokens, Responsive, Accessibility, Animation Performance. Use proactively after each section implementation.
---

# Component Validator

This skill provides checkpoint validation after implementing each component or section, catching issues early before they accumulate.

## When to Use This Skill

- **After implementing each section** (mandatory checkpoint)
- After significant component changes
- Before moving to the next page
- When debugging quality issues
- Before final verification

## Validation Checklist

### 1. TypeScript Validation

```bash
# Run type check
npx tsc --noEmit

# Expected: 0 errors
```

**Common Issues:**
| Issue | Fix |
|-------|-----|
| Missing types for props | Define interface |
| `any` usage | Replace with proper type |
| Missing return types | Add explicit returns |
| Null checks missing | Add optional chaining |

### 2. Design Token Usage

Check that components use design tokens, NOT hardcoded values:

**❌ Bad:**
```tsx
<div className="bg-blue-500 text-white rounded-lg">
```

**✅ Good:**
```tsx
<div className="bg-primary text-primary-foreground rounded-radius">
```

**Token Categories to Check:**
| Category | Token Example | Hardcoded (Bad) |
|----------|---------------|-----------------|
| Colors | `bg-primary` | `bg-blue-500` |
| Spacing | `p-section-md` | `p-24` (unless in scale) |
| Radius | `rounded-radius` | `rounded-lg` (unless configured) |
| Typography | `text-foreground` | `text-gray-900` |

### 3. Responsive Validation

Test at 3 breakpoints:

| Breakpoint | Width | What to Check |
|------------|-------|---------------|
| Mobile | 375px | Stacking, touch targets 44px |
| Tablet | 768px | Grid adjustments, spacing |
| Desktop | 1440px | Full layout, max-widths |

**Responsive Checklist:**
- [ ] No horizontal overflow at any breakpoint
- [ ] Text readable at all sizes (min 16px body)
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Grid columns collapse properly
- [ ] Images responsive with `sizes` attribute

### 4. Accessibility Validation

**Must Pass:**
| Check | Requirement |
|-------|-------------|
| Color Contrast | 4.5:1 minimum (text), 3:1 (large text) |
| Focus States | Visible focus ring on all interactive elements |
| Alt Text | All images have descriptive alt text |
| Heading Order | H1 → H2 → H3 (no skipping) |
| Keyboard Nav | All interactive elements reachable |
| ARIA Labels | Complex components labeled |

**Quick Check:**
```bash
# Browser DevTools
# - Run Lighthouse Accessibility audit
# - Check with axe-core extension
```

### 5. Animation Performance

**Performance Budget:**
| Metric | Target |
|--------|--------|
| Frame Rate | 60fps (16.67ms per frame) |
| Animation Duration | 200-600ms typical |
| Stagger Delay | 50-150ms between items |

**Optimizations:**
```tsx
// ✅ Good: GPU-accelerated properties
transform: translateY(20px)
opacity: 0

// ❌ Bad: Causes layout shifts
margin-top: 20px
height: 0
```

**Framer Motion Best Practices:**
```tsx
// Use layout animations sparingly
<motion.div layout /> // Can be expensive

// Prefer transform-based animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// Use viewport detection
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
/>
```

### 6. SEO Validation (Per Section)

| Check | Requirement |
|-------|-------------|
| Heading Structure | Proper H1-H6 hierarchy |
| Image Alt Text | Descriptive, includes keywords where relevant |
| Semantic HTML | Use `<section>`, `<article>`, `<nav>` appropriately |
| Link Text | Descriptive, not "click here" |

## Validation Output Format

After validation, report:

```
## Validation Report: {SectionName}

| Check | Status | Issues |
|-------|--------|--------|
| TypeScript | ✓ | 0 errors |
| Design Tokens | ✓ | Using tokens |
| Responsive | ✓ | All breakpoints |
| Accessibility | ⚠️ | Missing alt on 1 image |
| Animation | ✓ | 60fps, GPU-accelerated |
| SEO | ✓ | H2 with keyword |

### Issues Found:
1. [A11Y] Image missing alt text at line 45

### Recommendations:
- Add descriptive alt text to hero image

### Status: ⚠️ Minor issues - fix before proceeding
```

## Status Levels

| Status | Meaning | Action |
|--------|---------|--------|
| ✓ Pass | All checks pass | Proceed |
| ⚠️ Warning | Minor issues | Fix before next section |
| ✗ Fail | Critical issues | Must fix immediately |

## Automated Checks

### TypeScript
```bash
npx tsc --noEmit
```

### ESLint
```bash
npx eslint . --ext .ts,.tsx
```

### Accessibility (via Playwright)
```typescript
import { injectAxe, checkA11y } from 'axe-playwright'

test('accessibility', async ({ page }) => {
  await page.goto('/')
  await injectAxe(page)
  await checkA11y(page)
})
```

### Lighthouse
```bash
npx lighthouse http://localhost:3000 --only-categories=accessibility,performance
```

## Integration with Workflow

This skill is used:
1. After `/implement` creates each section
2. Before moving to next page
3. During `/verify` final check

**Checkpoint Flow:**
```
Implement Section → Validate → Pass? → Next Section
                              ↓ Fail
                        Fix Issues → Re-validate
```
