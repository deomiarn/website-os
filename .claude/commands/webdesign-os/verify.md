---
name: verify
description: Verifiziert die Implementation und bereitet den Export vor
---

# Verify

Verifiziere die Implementation gegen die Spezifikation.

## Voraussetzungen

Prüfe dass Step 5 (Implement) abgeschlossen ist.

## Anweisung

Du führst jetzt den **Verification** Workflow durch.

### 1. Build Test

```bash
cd webdesign-os/exports/{projekt-name}
npm run build
```

Falls Fehler: Dokumentiere und stoppe.

### 2. Dev Server Starten

```bash
npm run dev &
```

### 3. Visuelle Prüfung

Prüfe jede Seite bei:
- **Desktop (1440px)**
- **Tablet (768px)**
- **Mobile (375px)**

Nutze Playwright/Browser für Screenshots.

### 4. Design Review

Prüfe gegen Spec:

| Check | ✓/✗ | Notizen |
|-------|-----|---------|
| Hero Section korrekt | | |
| Features Layout | | |
| Typografie stimmt | | |
| Farben korrekt | | |
| Spacing konsistent | | |
| Animationen funktionieren | | |

### 5. Performance Audit

Ziele:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Core Web Vitals:
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### 6. SEO Audit

| Check | ✓/✗ |
|-------|-----|
| Unique Titles | |
| Meta Descriptions | |
| Heading Hierarchy | |
| Alt Texte | |
| Canonical URLs | |
| Open Graph | |
| JSON-LD Schema | |
| Sitemap | |
| Robots.txt | |

### 7. Accessibility Check

| Check | ✓/✗ |
|-------|-----|
| Semantic HTML | |
| Farbkontrast (4.5:1) | |
| Focus States | |
| Form Labels | |
| Skip Link | |

### 8. Verification Report

Erstelle `webdesign-os/specs/{datum}-website/verification-report.md`:

```markdown
# Verification Report

**Datum:** {datum}
**Projekt:** {name}

## Zusammenfassung

| Kategorie | Status | Score |
|-----------|--------|-------|
| Build | ✅ Pass | - |
| Design Match | ✅ Pass | 95% |
| Performance | ✅ Pass | 92 |
| SEO | ✅ Pass | 98 |
| Accessibility | ✅ Pass | 91 |
| Responsive | ✅ Pass | - |

## Status: ✅ BEREIT ZUM EXPORT

## Details
[Detaillierte Findings]

## Issues
[Falls vorhanden]

## Screenshots
[Pfade zu Screenshots]
```

### 9. Export Vorbereiten

```bash
# Aufräumen
rm -rf .next
rm -rf node_modules/.cache
```

### 10. Workflow Update

Aktualisiere `webdesign-os/config/workflow-state.json`:
- Step 6: status = "completed"
- Step 6: summary = "Lighthouse: {scores}, Status: Ready"

### 11. Abschluss

"**Verification abgeschlossen!**

✅ **Status:** Bereit zum Export

📊 **Lighthouse:**
- Performance: {score}
- Accessibility: {score}
- Best Practices: {score}
- SEO: {score}

📱 **Responsive:** Alle Breakpoints OK

📋 **Report:** `verification-report.md`

**Projekt liegt in:**
`webdesign-os/exports/{projekt-name}/`

**Deployen:**
```bash
cd webdesign-os/exports/{projekt-name}
npm install
npm run build
npm run start
```

Oder direkt zu Vercel:
```bash
npx vercel
```"

## Skills

Nutze:
- `seo-technical`
- `responsive-patterns`

## Output

- `webdesign-os/specs/{datum}-website/verification-report.md`
- `webdesign-os/specs/{datum}-website/screenshots/`
- `webdesign-os/config/workflow-state.json`
