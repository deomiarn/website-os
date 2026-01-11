---
name: gsd:plan-phase
description: Create execution plan for a WebDesign-OS phase
argument-hint: "[phase]"
allowed-tools:
  - Read
  - Bash
  - Write
  - Glob
  - Grep
  - AskUserQuestion
  - WebFetch
  - Task
---

<objective>
Create executable PLAN.md for a WebDesign-OS phase.

This is a LOCAL OVERRIDE that reads phase details from webdesign-os/WORKFLOW.md.
</objective>

<context>
Phase number: $ARGUMENTS (1-8, or auto-detects next unplanned)

**Load these files:**
@.planning/STATE.md
@.planning/ROADMAP.md
@webdesign-os/WORKFLOW.md
@webdesign-os/config/project.json

**Load previous phase outputs if they exist:**
- Phase 1 output: @webdesign-os/config/content-inventory.json
- Phase 2 output: @webdesign-os/config/design-tokens.json
- Phase 3 output: @webdesign-os/config/page-shapes/
- Phase 4 output: @webdesign-os/specs/

**Load codebase context if exists:**
@.planning/codebase/
</context>

<phase_definitions>
Read EXACT tasks from webdesign-os/WORKFLOW.md for each phase:

**Phase 1: Content Planning**
- Analyze pages from PROJECT.md
- Define sections per page
- Define content quantities per section
- Create content-inventory.json

**Phase 2: Design System**
- Analyze webdesign-os/inspirations/
- Extract colors, typography, spacing
- Create design-tokens.json

**Phase 3: Shape Pages**
- For each page: define sections, select shadcnblocks
- Create page-shapes/*.json

**Phase 4: Write Specs**
- For each page: write technical spec
- Create specs/*.md

**Phase 5: Implement**
- Setup Next.js + shadcn/ui
- Implement each page per spec
- Design Excellence Check per section

**Phase 6: SEO**
- Meta tags per page
- Schema markup
- Sitemap, robots.txt

**Phase 7: Refine (Optional)**
- Implement feedback
- Re-check quality

**Phase 8: Verify & Export**
- Lighthouse audit
- Responsive tests
- Production build
</phase_definitions>

<process>

<step name="validate">
```bash
[ -f .planning/ROADMAP.md ] || { echo "ERROR: No ROADMAP.md. Run /gsd:create-roadmap first."; exit 1; }
[ -f webdesign-os/WORKFLOW.md ] || { echo "ERROR: webdesign-os/WORKFLOW.md not found."; exit 1; }
```
</step>

<step name="detect_phase">
If $ARGUMENTS provided, use that phase number.
Otherwise, detect next unplanned phase from ROADMAP.md (first with status "not started").
</step>

<step name="read_workflow">
Read the phase details from webdesign-os/WORKFLOW.md:

```bash
cat webdesign-os/WORKFLOW.md
```

Find the section for the target phase and extract:
- Goal
- Tasks
- Output files
- Research flag
</step>

<step name="load_previous_outputs">
For phases 2-8, read the outputs from previous phases:

- Phase 2: Read content-inventory.json
- Phase 3: Read design-tokens.json + content-inventory.json
- Phase 4: Read page-shapes/*.json
- Phase 5: Read specs/*.md
- etc.
</step>

<step name="create_plan">
Create PLAN.md in the phase directory:

```bash
PHASE_DIR=$(ls -d .planning/phases/0${PHASE_NUM}-* 2>/dev/null | head -1)
```

Write to `${PHASE_DIR}/${PHASE_NUM}-1-PLAN.md`:

```markdown
# Phase [N]: [Name]

## Objective

[Goal from WORKFLOW.md]

## Context

### Required Reading
- webdesign-os/WORKFLOW.md (phase [N] section)
- [Previous phase outputs]
- webdesign-os/config/project.json

### Accumulated Context
[From STATE.md - decisions, issues, blockers]

## Tasks

<task type="auto">
  <name>[Task 1 from WORKFLOW.md]</name>
  <files>[Output files]</files>
  <action>
    [Specific instructions]
  </action>
  <verify>[How to verify]</verify>
  <done>[Definition of done]</done>
</task>

[... more tasks ...]

## Verification

- [ ] [Output file] created
- [ ] [Quality check passed]

## Output

- [List of files created/modified]
```
</step>

<step name="update_state">
Update .planning/STATE.md:
- Current focus: Phase [N]
- Status: Plan created, ready to execute
</step>

<step name="done">
```
Phase [N] plan created:

- Plan: .planning/phases/0[N]-[name]/[N]-1-PLAN.md
- Tasks: [count]

---

## Next Up

**Execute Phase [N]**

`/gsd:execute-plan`

<sub>`/clear` first → fresh context window</sub>

---

**Also available:**
- Review plan: `cat [plan file]`
- Adjust plan before executing

---
```
</step>

</process>

<success_criteria>
- [ ] Phase identified (from args or auto-detected)
- [ ] WORKFLOW.md read for phase details
- [ ] Previous outputs loaded (if applicable)
- [ ] PLAN.md created with tasks from WORKFLOW.md
- [ ] STATE.md updated
</success_criteria>
