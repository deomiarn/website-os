# Codebase Concerns

**Analysis Date:** 2026-01-11

## Security Issues

**Exposed API Secret in `.env`:**
- **Severity:** CRITICAL
- **Issue:** `SHADCNBLOCKS_API_KEY` is committed to repository
- **File:** `/.env`
- **Risk:** API key visible in git history, potential unauthorized access
- **Action Required:** Revoke key immediately and rotate to new one

**Missing `.env.example`:**
- **Issue:** No template documenting required environment variables
- **File:** Repository root
- **Impact:** New developers don't know what secrets are required
- **Fix:** Create `.env.example` with placeholder values

## Error Handling Gaps

**Missing Response Validation:**
- **Issue:** `res.json()` called without checking `res.ok`
- **File:** `webdesign-os/dashboard/src/app/page.tsx` (line ~57)
- **Pattern:**
  ```typescript
  const res = await fetch("/api/workflow")
  const data = await res.json()  // No res.ok check
  ```
- **Impact:** API errors leave user in loading state
- **Severity:** Medium

**Inconsistent Error Handling:**
- **Issue:** Some preview components check `res.ok`, main page does not
- **Files:**
  - `webdesign-os/dashboard/src/components/previews/InspirationsPreview.tsx` - Has check
  - `webdesign-os/dashboard/src/components/previews/DesignTokensPreview.tsx` - Has check
  - `webdesign-os/dashboard/src/app/page.tsx` - Missing check

**Generic Error Responses:**
- **Issue:** API returns `null` for any error, no distinction between "not found" vs "server error"
- **File:** `webdesign-os/dashboard/src/app/api/workflow/route.ts` (lines 49-52)
- **Impact:** Frontend can't differentiate error types

**Silent Filesystem Failures:**
- **Issue:** Empty array returned for any filesystem error
- **File:** `webdesign-os/dashboard/src/app/api/inspirations/route.ts` (lines 16-17)
- **Impact:** Permission denied, corrupted files all treated identically

## Performance Concerns

**Aggressive Polling:**
- **Issue:** 3-second polling interval with no backoff
- **File:** `webdesign-os/dashboard/src/app/page.tsx` (line 72)
- **Impact:** 20+ requests per minute per tab
- **Better approach:** WebSocket, SSE, or exponential backoff

**Multiple Concurrent Polls:**
- **Issue:** Three separate polling intervals on dashboard
- **Files:**
  - `page.tsx` - 3 seconds
  - `InspirationsPreview.tsx` - 5 seconds
  - `DesignTokensPreview.tsx` - 5 seconds
- **Impact:** Request storm when dashboard is open

**No Request Deduplication:**
- **Issue:** Multiple components fetch same endpoint independently
- **Opportunity:** Use React Query or SWR for automatic deduplication

## Test Coverage Gaps

**No Automated Tests:**
- **What's not tested:** Entire codebase
- **Risk:** Regressions undetected, refactoring risky
- **Priority:** High
- **Difficulty:** Need to set up test framework from scratch

**No CI/CD Pipeline:**
- **Issue:** No automated testing on commits
- **Risk:** Breaking changes can be merged
- **Action:** Add GitHub Actions workflow

## Code Quality

**Large Component Files:**
- **Issue:** `StepDetail.tsx` is 337 lines with hardcoded content
- **File:** `webdesign-os/dashboard/src/components/StepDetail.tsx`
- **Impact:** Hard to maintain, step descriptions mixed with UI logic
- **Fix:** Extract step descriptions to separate config file

**Type Duplication:**
- **Issue:** `WorkflowStep` interface defined in multiple files
- **Files:** `page.tsx`, `Sidebar.tsx`, `StepDetail.tsx`
- **Fix:** Create shared `types/workflow.ts`

**Magic Numbers:**
- **Issue:** Polling intervals hardcoded throughout
- **Examples:** 3000ms, 5000ms, 6 images limit
- **Fix:** Extract to constants file

## Documentation Gaps

**Security Code Underdocumented:**
- **Issue:** Path traversal protection has minimal comment
- **File:** `webdesign-os/dashboard/src/app/api/inspirations/image/route.ts` (lines 22-28)
- **Missing:** Why `path.resolve()` needed, symlink attack prevention

**Complex State Logic:**
- **Issue:** Two useEffects managing workflow with subtle timing
- **File:** `webdesign-os/dashboard/src/app/page.tsx` (lines 70-81)
- **Missing:** Race condition prevention explanation

## Positive Findings

- Path traversal protection implemented correctly
- No secrets hardcoded in source files
- Intervals properly cleaned up in useEffect
- No TODO/FIXME comments (clean codebase)
- TypeScript strict mode enabled
- Tailwind used consistently for responsive design

## Summary

| Category | Issue Count | Severity |
|----------|-------------|----------|
| Security | 2 | Critical, Medium |
| Error Handling | 4 | Medium-High |
| Performance | 3 | Medium |
| Test Coverage | 2 | High |
| Code Quality | 3 | Medium |
| Documentation | 2 | Low |
| **Total** | **16** | **Actionable** |

---

*Concerns audit: 2026-01-11*
*Update as issues are fixed or new ones discovered*
