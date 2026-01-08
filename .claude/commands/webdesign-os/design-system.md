---
name: design-system
description: Erstellt das Design System durch interaktive Fragen mit Empfehlungen
---

# Design System

Erstelle das komplette Design System für das Projekt durch interaktive Fragen.

## Voraussetzungen

Prüfe dass Step 1 (Init Project) abgeschlossen ist:
```
Lese webdesign-os/config/workflow-state.json
```

## Anweisung

Du führst jetzt den **Design System** Workflow durch.

### 1. Kontext Laden

Lese:
- `webdesign-os/config/project.json` - Brand Info, Branche
- Prüfe `webdesign-os/inspirations/` auf Bilder

### 2. Inspirationen Analysieren (falls vorhanden)

Wenn Bilder in `webdesign-os/inspirations/` existieren:

Für jedes Bild analysiere mit Claude Vision:
- **Farben:** Dominante Farben, Akzente, Neutrals
- **Typografie:** Serif/Sans-Serif, Gewicht, Kontrast
- **Layout:** Grid, Spacing, Ausrichtung
- **Stil:** Mood, Atmosphäre

Speichere Analyse in `webdesign-os/config/inspiration-analysis.json`.

Nutze diese Analyse für die Empfehlungen in den folgenden Fragen.

### 3. Interaktive Fragen

Stelle die folgenden Fragen nacheinander. Gib bei jeder Frage eine Empfehlung basierend auf:
- Brand-Info aus project.json
- Branche
- Inspiration-Analyse (falls vorhanden)

---

#### Frage 1: Typography Style

"Welchen Typografie-Stil bevorzugst du?"

| Option | Display Font | Body Font | Beschreibung |
|--------|-------------|-----------|--------------|
| **Modern** (Recommended für Tech/SaaS) | Space Grotesk | Inter | Clean, geometrisch, zeitgemäß |
| **Elegant** | Playfair Display | Source Sans Pro | Klassisch, sophisticated, luxuriös |
| **Friendly** | Fraunces | Work Sans | Warm, approachable, einladend |
| **Bold** | Clash Display | Satoshi | Statement, impactful, selbstbewusst |
| **Minimal** | Inter | Inter | Reduziert, fokussiert, neutral |
| **Custom** | - | - | Eigene Fonts angeben |

Empfehlung basierend auf Branche:
- Tech/SaaS → Modern
- Luxury/Fashion → Elegant
- Health/Education → Friendly
- Agency/Creative → Bold
- Corporate/Finance → Minimal

---

#### Frage 2: Primary Color

"Welche Primärfarbe soll verwendet werden?"

Zeige Empfehlungen basierend auf Branche:

| Branche | Empfohlene Farbe | OKLCH Wert |
|---------|-----------------|------------|
| Tech/SaaS | Blau | `oklch(0.55 0.2 250)` |
| Health | Grün/Türkis | `oklch(0.6 0.15 170)` |
| Finance | Dunkelblau | `oklch(0.4 0.15 250)` |
| Creative | Violet | `oklch(0.5 0.2 300)` |
| E-Commerce | Orange | `oklch(0.65 0.2 50)` |
| Luxury | Gold/Schwarz | `oklch(0.7 0.15 85)` |

Optionen:
- Empfohlene Farbe verwenden
- Aus Palette wählen (zeige 8-10 Optionen)
- Custom HEX/RGB eingeben (wird zu OKLCH konvertiert)

---

#### Frage 3: Background Mode

"Welchen Hintergrund-Modus bevorzugst du?"

| Option | Background | Foreground | Beschreibung |
|--------|------------|------------|--------------|
| **Light** (Recommended) | `oklch(1 0 0)` | `oklch(0.145 0 0)` | Hell, freundlich, klassisch |
| **Dark** | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Modern, elegant, eye-catching |
| **Off-White** | `oklch(0.97 0.01 90)` | `oklch(0.2 0 0)` | Warm, softer als pure white |
| **Custom** | - | - | Eigene Werte angeben |

---

#### Frage 4: Accent Color (Optional)

"Möchtest du eine Akzentfarbe für CTAs und Highlights?"

| Option | Beschreibung |
|--------|--------------|
| **Komplementär** (Recommended) | Automatisch aus Primary berechnet |
| **Analog** | Ähnlicher Farbton wie Primary |
| **Neutral** | Keine separate Akzentfarbe |
| **Custom** | Eigene Farbe wählen |

---

#### Frage 5: Border Radius

"Welchen Ecken-Stil bevorzugst du?"

| Option | Wert | Beschreibung | Beispiel |
|--------|------|--------------|----------|
| **Sharp** | `0` | Kantig, modern, editorial | ▢ |
| **Subtle** | `0.375rem` | Leicht abgerundet, professionell | ▢ |
| **Rounded** (Recommended) | `0.625rem` | Freundlich, modern, balanced | ▢ |
| **Extra Rounded** | `1rem` | Soft, playful, approachable | ▢ |
| **Pill** | `9999px` | Maximal rund für Buttons | ⬭ |

Empfehlung basierend auf Style:
- Modern/Minimal → Subtle oder Sharp
- Friendly → Rounded oder Extra Rounded
- Bold → Sharp
- Elegant → Subtle

---

#### Frage 6: Typography Scale

"Wie groß soll die Typografie sein?"

| Option | Base Size | H1 Size | Beschreibung |
|--------|-----------|---------|--------------|
| **Compact** | 0.875rem | 2.25rem | Dichte Info, viel Content |
| **Standard** (Recommended) | 1rem | 3rem | Balanced, vielseitig |
| **Spacious** | 1.125rem | 3.75rem | Luftig, statement-lastig |

---

#### Frage 7: Animation Style

"Welchen Animations-Stil bevorzugst du?"

| Option | Beschreibung |
|--------|--------------|
| **Subtle** (Recommended) | Sanfte Übergänge, dezente Hover-States |
| **Dynamic** | Scroll-Animationen, einfliegende Elemente |
| **Minimal** | Kaum Animationen, schnell, fokussiert |
| **Playful** | Bounce-Effekte, kreative Transitions |

---

### 4. Zusammenfassung & Bestätigung

Zeige dem User eine Zusammenfassung aller gewählten Optionen:

```
Design System Zusammenfassung:

Typography: Modern (Space Grotesk + Inter)
Primary: oklch(0.55 0.2 250) ███
Background: Light Mode
Accent: Komplementär oklch(0.6 0.2 50) ███
Border Radius: 0.625rem (Rounded)
Scale: Standard (1rem base)
Animations: Subtle

Passt das so?
```

Wenn ja → Weiter zu Schritt 5
Wenn nein → Zurück zur entsprechenden Frage

---

### 5. Design Tokens Generieren

Basierend auf den Antworten, generiere das komplette Token-Set:

**Farben (Light + Dark Mode):**
- Primary + Foreground
- Secondary + Foreground
- Accent + Foreground
- Muted + Foreground
- Background + Foreground
- Destructive
- Border, Input, Ring

**Wichtig:** Alle Farben müssen WCAG AA Kontrast (4.5:1) erfüllen!

**Typography:**
- Font Family (Display, Body, Mono)
- Type Scale mit `clamp()` für Fluid Typography
- Line Heights
- Letter Spacing

**Spacing:**
- Base-4 Scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- Section Padding (fluid)

**Radius:**
- Gewählter Border Radius
- Scale für verschiedene Elemente (sm, md, lg, xl)

**Animations:**
- Duration (fast, normal, slow)
- Easing Functions basierend auf gewähltem Style

### 6. Design Tokens Speichern

Aktualisiere `webdesign-os/config/design-tokens.json` mit allen Werten.

### 7. Workflow Update

Aktualisiere `webdesign-os/config/workflow-state.json`:
- Step 2: status = "completed"
- Step 2: summary = Kurze Zusammenfassung (Fonts, Primary Color)
- Step 3: status = "pending" (unlock)

### 8. Abschluss-Präsentation

"**Design System erstellt!**

**Typography:**
- Display: {displayFont}
- Body: {bodyFont}
- Scale: {scale}

**Farben:**
- Primary: `{primary}` ███
- Accent: `{accent}` ███
- Background: {mode}

**Style:**
- Border Radius: {radius}
- Animations: {animationStyle}

{wenn Inspirationen analysiert}
Basierend auf {count} Inspiration-Bildern.
{/wenn}

**Gespeichert:** `webdesign-os/config/design-tokens.json`

**Nächster Schritt:** `/shape-pages`"

## Skills

Nutze: `design-system-creator`

## Output

- `webdesign-os/config/design-tokens.json`
- `webdesign-os/config/inspiration-analysis.json` (falls Bilder)
- `webdesign-os/config/workflow-state.json`
