---
name: dashboard
description: Startet das Web Dashboard zur Workflow-Visualisierung
---

# Dashboard

Starte das Web Dashboard für die Workflow-Übersicht.

## Anweisung

Du startest jetzt das **WebDesign-OS Dashboard**.

### 1. Dashboard Starten

Das Dashboard zeigt den aktuellen Workflow-Status.

```bash
cd webdesign-os/dashboard
npm run dev
```

### 2. Browser Öffnen

Öffne http://localhost:3333

### 3. Dashboard Features

Das Dashboard zeigt:

**Workflow Steps:**
```
[ ] Step 1: Init Project     → /init-project
[✓] Step 2: Design System   → Primary: oklch(...), Fonts: Inter
[→] Step 3: Shape Pages     → /shape-pages
[ ] Step 4: Write Spec      → /write-spec
[ ] Step 5: Implement       → /implement
[ ] Step 6: Verify & Export → /verify
```

**Für jeden Step:**
- Status (pending, in_progress, completed)
- Command zum Ausführen oder Zusammenfassung
- Edit Button (wenn completed)

**Live Updates:**
- Dashboard aktualisiert automatisch wenn Configs geändert werden
- WebSocket Verbindung zur CLI

### 4. Meldung

"**Dashboard gestartet!**

🌐 http://localhost:3333

Das Dashboard zeigt deinen aktuellen Workflow-Status.
Führe die angezeigten Commands in dieser CLI aus.

Zum Beenden: `Ctrl+C` im Dashboard Terminal."

## Hinweis

Falls das Dashboard noch nicht existiert:

"Das Dashboard muss erst erstellt werden.

Momentan kannst du den Workflow-Status hier sehen:

```bash
cat webdesign-os/config/workflow-state.json
```

Aktueller Stand:
{workflow-state Übersicht}"

## Output

- Web Dashboard auf localhost:3333
- Live Workflow-Visualisierung
