---
name: preview
description: Startet einen Live-Preview mit Desktop, Tablet und Mobile Ansichten
---

# Preview

Starte einen Live-Preview der Website in verschiedenen Viewports.

## Anweisung

Du startest jetzt den **Preview** Modus.

### 1. Projekt Finden

Finde das aktuelle Projekt in `webdesign-os/exports/`.

### 2. Dev Server Starten

```bash
cd webdesign-os/exports/{projekt-name}
npm run dev
```

### 3. Browser Öffnen

Nutze Playwright/Browser Automation um:

**Desktop View (1440px):**
```
- Öffne http://localhost:3000
- Setze Viewport auf 1440x900
- Navigiere durch alle Seiten
```

**Tablet View (768px):**
```
- Öffne neuen Tab
- Setze Viewport auf 768x1024
- Prüfe responsive Layout
- Teste Mobile Navigation
```

**Mobile View (375px):**
```
- Öffne neuen Tab
- Setze Viewport auf 375x812
- Prüfe Mobile Layout
- Teste Touch Targets
```

### 4. Interaktiver Modus

"**Preview läuft!**

🖥️ Desktop: http://localhost:3000 (1440px)
📱 Tablet: Tab 2 (768px)
📱 Mobile: Tab 3 (375px)

**Befehle:**
- `screenshot` - Screenshots aller Viewports
- `page {name}` - Zu Seite navigieren
- `stop` - Preview beenden

Was möchtest du prüfen?"

### 5. Screenshot-Funktion

Bei "screenshot":
- Erstelle Screenshots aller Viewports
- Speichere in `webdesign-os/specs/{spec}/screenshots/`
- Zeige Pfade an

### 6. Navigation

Bei "page {name}":
- Navigiere alle Viewports zur angegebenen Seite
- Melde Erfolg

### 7. Beenden

Bei "stop":
- Schließe Browser
- Stoppe Dev Server
- "Preview beendet."

## Output

- Live Browser mit 3 Viewports
- Optional: Screenshots in `screenshots/`
