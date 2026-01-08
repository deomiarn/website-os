---
name: content-plan
description: Plant den Content pro Seite bevor das Design erstellt wird - Headlines, Feature-Anzahl, Bilder-Verfügbarkeit
---

# Content Planning

Plane den Content für jede Seite bevor das Design System erstellt wird.

## Anweisung

Du führst jetzt den **Content Planning** Workflow durch.

### 1. Einleitung

"**Content Planning**

Bevor wir mit dem Design starten, möchte ich den Content für jede Seite verstehen. Das hilft mir, die richtigen Design-Entscheidungen zu treffen.

Ich werde pro Seite einige kurze Fragen stellen."

### 2. Prerequisite Check

Lese:
- `webdesign-os/config/project.json` - Liste der Seiten
- `webdesign-os/config/workflow-state.json` - Aktueller Status

Prüfe ob Step 1 (Init) completed ist. Falls nicht:
"Bitte zuerst `/init-project` ausführen."

### 3. Seiten durchgehen

Für JEDE Seite aus project.json:

**Zeige Fortschritt:**
"**Content Plan: {PageName}** ({current}/{total})

Seiten-Fortschritt:
{for each page}
- [{status}] {name}
{/for}"

**Frage 1 - Headlines:**
"**Headlines für {PageName}:**
- Wie lang wird die Haupt-Headline? (ca. Wörter: 3-5 / 5-10 / 10+)
- Gibt es eine Sub-Headline?
- Was ist die Kernbotschaft?"

**Frage 2 - Content-Mengen:**
"**Content-Mengen für {PageName}:**
- Anzahl Features/Services? (0, 3, 4, 6)
- Anzahl Testimonials? (0, 2, 3, 6+)
- Anzahl FAQ Items? (0, 3-5, 6-10)
- Anzahl Team-Mitglieder? (0, 2-4, 6+)
- Gibt es Statistiken/Zahlen? (Nein / 2-3 / 4+)"

**Frage 3 - Bilder:**
"**Bilder für {PageName}:**
- Hast du Hero-Bilder? (Ja / Nein / Placeholder nötig)
- Feature/Service Bilder? (Ja / Icons / Nein)
- Team-Fotos? (Ja / Nein / Placeholder)
- Sonstige Bilder?"

**Frage 4 - Besonderheiten:**
"**Besonderheiten für {PageName}:**
- Gibt es besondere Content-Anforderungen?
- Videos? Animierte Elemente? Downloads?
- Wichtige Keywords für SEO?"

### 4. Seite speichern

Nach jeder Seite:
- Speichere in `webdesign-os/config/content-inventory.json`
- Update workflow-state mit Page-Progress

"**{PageName} Content geplant!**

| Aspekt | Wert |
|--------|------|
| Headline-Stil | {style} |
| Features | {count} |
| Testimonials | {count} |
| FAQs | {count} |
| Bilder-Status | {status} |

Weiter zur nächsten Seite?"

### 5. Zusammenfassung

Wenn alle Seiten fertig:

"**Content Plan Complete!**

| Seite | Features | Testimonials | FAQs | Bilder |
|-------|----------|--------------|------|--------|
{for each page}
| {name} | {features} | {testimonials} | {faqs} | {imageStatus} |
{/for}

**Erkenntnisse:**
- Gesamt-Features: {total}
- Bilder benötigt: {imageNeeded}
- Placeholders: {placeholderCount}

**Empfehlungen für Design System:**
{recommendations based on content}

**Nächster Schritt:** `/design-system`"

### 6. Workflow Update

Update `webdesign-os/config/workflow-state.json`:
- Step 2 (Content Plan): status = "completed"
- Step 3 (Design System): status = "pending"

## Skills

Nutze: Keine spezifischen Skills nötig

## Output

- `webdesign-os/config/content-inventory.json`
- `webdesign-os/config/workflow-state.json`
