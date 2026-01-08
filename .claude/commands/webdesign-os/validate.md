---
name: validate
description: Validiert implementierte Komponenten - TypeScript, Design Tokens, Responsive, Accessibility, Performance
args: "[section-name]"
---

# Validate

Checkpoint-Validierung nach jeder Section-Implementation.

## Usage

```
/validate             → Validiert alle implementierten Sections
/validate hero        → Validiert nur Hero Section
/validate --quick     → Schnelle Validierung (nur TypeScript + Tokens)
```

## Anweisung

Du führst jetzt eine **Checkpoint-Validierung** durch.

### 1. Kontext laden

Lese:
- `webdesign-os/config/workflow-state.json` - Welche Sections implementiert
- `webdesign-os/specs/{projekt}/` - Spec-Anforderungen
- Implementierte Dateien in `src/` oder `app/`

### 2. Validierungs-Checks ausführen

Für jede Section:

#### 2.1 TypeScript Check

```bash
npx tsc --noEmit
```

| Ergebnis | Status |
|----------|--------|
| 0 Errors | ✓ Pass |
| 1+ Errors | ✗ Fail |

#### 2.2 Design Token Check

Durchsuche die Section-Datei nach:

**Verboten (Hardcoded):**
- `bg-blue-*`, `bg-red-*`, etc. (statt `bg-primary`)
- `text-gray-*` (statt `text-foreground`)
- `rounded-lg`, `rounded-xl` (wenn nicht im Token System)

**Erlaubt:**
- `bg-primary`, `bg-secondary`, `bg-muted`
- `text-foreground`, `text-muted-foreground`
- `rounded-radius` oder konfigurierte Werte

| Ergebnis | Status |
|----------|--------|
| Alle Tokens | ✓ Pass |
| 1-2 Hardcoded | ⚠️ Warning |
| 3+ Hardcoded | ✗ Fail |

#### 2.3 Responsive Check

Prüfe ob diese Klassen vorhanden sind:
- `md:` Breakpoint verwendet
- `lg:` Breakpoint verwendet
- Grid/Flex mit responsive columns

| Breakpoint | Check |
|------------|-------|
| Mobile (375px) | Kein horizontal Overflow |
| Tablet (768px) | Layout passt sich an |
| Desktop (1440px) | Max-widths eingehalten |

#### 2.4 Accessibility Check

| Check | Wie prüfen |
|-------|-----------|
| Alt-Texte | Alle `<Image>` haben `alt` |
| Heading Order | H1 → H2 → H3 (nicht H1 → H3) |
| Focus States | `:focus-visible` Styles vorhanden |
| Color Contrast | Foreground auf Background prüfen |
| Touch Targets | Buttons mindestens 44x44px |

#### 2.5 Animation Performance

| Check | Kriterium |
|-------|-----------|
| GPU-Beschleunigt | Nur `transform`, `opacity` animiert |
| Keine Layout Shifts | Keine `height`, `margin` Animation |
| viewport: once | `whileInView` mit `viewport={{ once: true }}` |
| Vernünftige Duration | 200-800ms |

#### 2.6 SEO Check

| Check | Kriterium |
|-------|-----------|
| Heading mit Keyword | H1/H2 enthält Target Keyword |
| Alt-Texte beschreibend | Nicht nur "image" |
| Semantisches HTML | `<section>`, `<article>` verwendet |

### 3. Report generieren

"**Validation Report: {SectionName}**

| Check | Status | Details |
|-------|--------|---------|
| TypeScript | {status} | {errorCount} errors |
| Design Tokens | {status} | {tokenUsage}% |
| Responsive | {status} | {breakpointsOk}/3 |
| Accessibility | {status} | {a11yScore} |
| Animation | {status} | {perfStatus} |
| SEO | {status} | {seoStatus} |

**Issues gefunden:**
{list of issues with file:line references}

**Empfehlungen:**
{actionable fixes}

**Gesamtstatus:** {overall status}

{if fail} → **Bitte Issues fixen bevor du zur nächsten Section gehst.**
{if pass} → **Bereit für nächste Section!**"

### 4. Bei Fehlern: Fix-Vorschläge

Für jedes Issue, zeige konkreten Fix:

```
Issue: Hardcoded color `bg-blue-500` in hero-split.tsx:23
Fix: Ersetze mit `bg-primary`

Issue: Missing alt text on Image in features-grid.tsx:45
Fix: Füge alt="{beschreibender Text}" hinzu

Issue: H1 followed by H3 (skipped H2) in page.tsx
Fix: Ändere H3 zu H2 oder füge H2 dazwischen ein
```

### 5. Workflow Integration

Nach erfolgreicher Validierung:
- Update `workflow-state.json` mit Validation-Status
- Markiere Section als "validated"

"**{SectionName} validiert!**

Nächster Schritt: Nächste Section implementieren oder `/implement` fortsetzen."

## Validation Levels

| Level | Beschreibung | Aktion |
|-------|--------------|--------|
| ✓ Pass | Alle Checks bestanden | Weiter |
| ⚠️ Warning | Kleine Issues | Fix empfohlen, kann weiter |
| ✗ Fail | Kritische Issues | Muss fixen vor weiter |

## Quick Validation (--quick)

Nur die wichtigsten Checks:
1. TypeScript Errors
2. Hardcoded Colors (grep)
3. Missing Alt-Texte

Für schnelle Iteration während der Entwicklung.

## Skills

Nutze: `component-validator`

## Output

- Validation Report im Terminal
- Update `webdesign-os/config/workflow-state.json` (validation status)
