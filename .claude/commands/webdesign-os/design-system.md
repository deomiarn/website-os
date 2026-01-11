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

### 2.5 UI UX Pro Max Empfehlungen (NEU)

**Nach der Inspiration-Analyse, hole Empfehlungen aus UI UX Pro Max:**

```bash
# 1. Product-Type Empfehlungen basierend auf Branche
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "{branche} {projektTyp}" --domain product

# 2. Style-Empfehlungen basierend auf Mood
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "{styleKeywords}" --domain style

# 3. Typography-Empfehlungen
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "{styleKeywords}" --domain typography

# 4. Color-Palette Empfehlungen
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "{branche}" --domain color
```

**Zeige dem User die Empfehlungen:**

"**UI UX Pro Max Empfehlungen für {branche}:**

| Aspekt | Empfehlung | Quelle |
|--------|------------|--------|
| **Style** | {style aus search} | UI UX Pro Max |
| **Colors** | {palette aus search} | UI UX Pro Max |
| **Typography** | {fonts aus search} | UI UX Pro Max |
| **Aus Inspirations** | {patterns aus Bildern} | Claude Vision |

**Diese Empfehlungen informieren die folgenden Fragen.**
**Du entscheidest final - dies sind nur Vorschläge!**"

**WICHTIG:**
- Die Empfehlungen sind VORSCHLÄGE, nicht automatische Übernahmen
- User-Entscheidung hat immer Vorrang
- Inspirations-Bilder haben Vorrang vor generischen Empfehlungen

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

**Übersicht:**
| Option | Base Size | Beschreibung |
|--------|-----------|--------------|
| **Compact** | 0.875rem | Dichte Info, viel Content |
| **Standard** (Recommended) | 1rem | Balanced, vielseitig |
| **Spacious** | 1.125rem | Luftig, statement-lastig |

**Explizite Tailwind-Klassen (WICHTIG - direkt verwenden!):**

| Scale | h1 | h2 | h3 | body | small |
|-------|----|----|----|----- |-------|
| **Compact** | `text-3xl md:text-4xl` | `text-2xl md:text-3xl` | `text-lg md:text-xl` | `text-sm md:text-base` | `text-xs` |
| **Standard** | `text-4xl md:text-5xl lg:text-6xl` | `text-3xl md:text-4xl` | `text-xl md:text-2xl` | `text-base md:text-lg` | `text-sm` |
| **Spacious** | `text-5xl md:text-6xl lg:text-7xl` | `text-3xl md:text-5xl` | `text-2xl md:text-3xl` | `text-lg` | `text-base` |

**Speichern:** Diese Klassen werden in `design-tokens.json → typography.scale` gespeichert und bei der Implementation 1:1 verwendet.

---

#### Frage 7: Animation Style

"Welchen Animations-Stil bevorzugst du?"

**Übersicht:**
| Option | Beschreibung |
|--------|--------------|
| **Subtle** (Recommended) | Sanfte Übergänge, dezente Hover-States |
| **Dynamic** | Scroll-Animationen, einfliegende Elemente |
| **Minimal** | Kaum Animationen, schnell, fokussiert |
| **Playful** | Bounce-Effekte, kreative Transitions |

**Präzise Timing-Werte (für Implementation):**

| Option | Entrance Duration | Stagger | Hover Duration | Easing |
|--------|-------------------|---------|----------------|--------|
| **Subtle** | 400ms | 80ms | 200ms | `ease-out` |
| **Dynamic** | 600ms | 100ms | 250ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Minimal** | 200ms | 0ms | 150ms | `ease` |
| **Playful** | 500ms | 120ms | 300ms | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |

**Framer Motion Variants (generiert basierend auf Wahl):**
```tsx
// Beispiel für "Subtle":
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}
```

**Speichern:** In `design-tokens.json → animations` mit allen Timing-Werten.

---

### 3.5 Component Styling (via Bilder)

Nach den abstrakten Tokens definieren wir jetzt konkrete Component-Styles.
Der User kann entweder ein Bild anhängen oder einen Preset wählen.

---

#### Frage 8: Button Style

"Wie sollen deine Buttons aussehen? Hänge ein Bild an oder wähle einen Preset."

**Presets:**
| Preset | Beschreibung |
|--------|--------------|
| **Minimal** | Flach, kein Shadow, subtiler Hover (opacity change) |
| **Elevated** | Leichter Shadow, lift on hover |
| **Bold** | Kräftig gefüllt, volle Farbe, statement |
| **Pill** | Maximal rund (border-radius: 9999px), modern |

**Bei Bild analysieren:**
- Border-radius (sharp, rounded, pill)
- Shadow (none, subtle, prominent)
- Padding (compact `px-4 py-2`, normal `px-6 py-3`, spacious `px-8 py-4`)
- Hover-Effekt (opacity, lift/translate, scale, color-shift)
- Text-Style (uppercase, normal, letter-spacing)

**Speichern:** Extrahierte Styles in `design-tokens.json → components.button`

---

#### Frage 9: Card Style

"Wie sollen Cards aussehen? (für Features, Team, Services etc.)"

**Presets:**
| Preset | Beschreibung |
|--------|--------------|
| **Flat** | Kein Border, kein Shadow, nur Background |
| **Bordered** | Subtiler Border, kein Shadow |
| **Elevated** | Shadow-lg, kein Border, lift on hover |
| **Glass** | Blur-Background, subtiler Border |

**Bei Bild analysieren:**
- Border (none, subtle `border`, prominent `border-2`)
- Shadow (none, sm, md, lg, xl)
- Corner-radius (sharp, rounded-lg, rounded-2xl, rounded-3xl)
- Hover-Effekt (lift, shadow-increase, border-change, scale)
- Background (solid, gradient, blur)

**Speichern:** Extrahierte Styles in `design-tokens.json → components.card`

---

#### Frage 10: Input Style

"Wie sollen Formularfelder aussehen?"

**Presets:**
| Preset | Beschreibung |
|--------|--------------|
| **Bordered** | Voller Border, rounded corners |
| **Underline** | Nur unterer Border, minimalistisch |
| **Filled** | Hintergrundfarbe, kein Border |
| **Floating** | Floating Label, modern |

**Bei Bild analysieren:**
- Border-style (full-border, underline-only, none)
- Background (transparent, filled/muted)
- Focus-ring (color, spread `ring-2`, style)
- Corner-radius
- Label-position (above, floating, inside placeholder)

**Speichern:** Extrahierte Styles in `design-tokens.json → components.input`

---

#### Frage 11: Badge Style (Optional)

"Wie sollen Tags/Badges aussehen?"

**Presets:**
| Preset | Beschreibung |
|--------|--------------|
| **Pill Filled** | Maximal rund, gefüllter Background |
| **Pill Outline** | Maximal rund, nur Border |
| **Rounded Filled** | Leicht gerundet, gefüllt |
| **Rounded Outline** | Leicht gerundet, nur Border |

**Bei Bild analysieren:**
- Shape (pill `rounded-full`, rounded `rounded-md`, sharp `rounded-none`)
- Fill (solid background, outline only, subtle/muted)
- Size (compact `text-xs px-2`, normal `text-sm px-3`)

**Speichern:** Extrahierte Styles in `design-tokens.json → components.badge`

---

### 3.6 Layout & Spacing

---

#### Frage 12: Section Density

"Wie dicht soll der Content sein?"

| Option | Section Padding | Element Gap | Container | Beschreibung |
|--------|-----------------|-------------|-----------|--------------|
| **Dense** | `py-16 lg:py-24` | `gap-6` | `max-w-6xl` | Kompakt, viel Content |
| **Balanced** (Recommended) | `py-24 lg:py-32` | `gap-8` | `max-w-7xl` | Ausgewogen, vielseitig |
| **Airy** | `py-32 lg:py-48` | `gap-12` | `max-w-6xl` | Premium, viel Whitespace |

**Zusätzliche Spacing-Werte (automatisch generiert):**
```json
"spacing": {
  "sectionPadding": "{gewähltes py}",
  "sectionGap": "space-y-0",
  "containerPadding": "px-4 md:px-6 lg:px-8",
  "containerWidth": "{gewähltes max-w}",
  "elementGap": {
    "tight": "gap-4",
    "normal": "{gewähltes gap}",
    "loose": "gap-12"
  }
}
```

**Speichern:** In `design-tokens.json → spacing.sections`

---

#### Frage 13: Image Style

"Wie sollen Bilder gestylt werden?"

| Preset | Border Radius | Shadow | Beschreibung |
|--------|---------------|--------|--------------|
| **Sharp** | `rounded-none` | `none` | Editorial, kantig, modern |
| **Soft** (Recommended) | `rounded-xl` | `shadow-md` | Freundlich, approachable |
| **Dramatic** | `rounded-2xl` | `shadow-2xl` | Premium, statement |

**Aspect Ratios (Standard-Defaults):**
| Verwendung | Aspect Ratio | Tailwind-Klasse |
|------------|--------------|-----------------|
| Hero Images | 16:10 | `aspect-[16/10]` |
| Card Images | 4:3 | `aspect-[4/3]` |
| Avatare | 1:1 | `aspect-square rounded-full` |
| Testimonial | 3:4 | `aspect-[3/4]` |

**Speichern:** In `design-tokens.json → components.image`

---

#### Frage 14: Link Style (Optional)

"Wie sollen Text-Links aussehen? (Nicht Buttons)"

| Preset | Beschreibung | Classes |
|--------|--------------|---------|
| **Underline** | Klassisch, zugänglich | `text-primary underline underline-offset-4 hover:no-underline` |
| **Subtle** (Recommended) | Modern, clean | `text-primary hover:underline` |
| **Bold** | Statement | `text-primary font-medium hover:text-primary/80` |

**Zusätzliche Link-Varianten (automatisch generiert):**
```json
"components": {
  "link": {
    "default": "{gewählte Classes}",
    "muted": "text-muted-foreground hover:text-foreground",
    "nav": "text-foreground/80 hover:text-foreground transition-colors"
  }
}
```

**Speichern:** In `design-tokens.json → components.link`

---

### 3.7 Icon Defaults (Keine Frage - Automatisch)

Diese Werte werden automatisch gesetzt:

```json
"components": {
  "icon": {
    "library": "lucide",
    "sizes": {
      "sm": "w-4 h-4",
      "md": "w-5 h-5",
      "lg": "w-6 h-6",
      "xl": "w-8 h-8"
    },
    "defaultSize": "w-5 h-5",
    "defaultColor": "currentColor",
    "featureIconSize": "w-10 h-10",
    "featureIconColor": "text-primary",
    "featureIconBg": "bg-primary/10 rounded-lg p-2"
  }
}
```

---

### 4. Zusammenfassung & Bestätigung

Zeige dem User eine Zusammenfassung aller gewählten Optionen:

```
Design System Zusammenfassung:

**Tokens:**
Typography: Modern (Space Grotesk + Inter)
Typography Scale: Standard (text-4xl → text-6xl für h1)
Primary: oklch(0.55 0.2 250) ███
Background: Light Mode
Accent: Komplementär oklch(0.6 0.2 50) ███
Border Radius: 0.625rem (Rounded)
Animations: Subtle (400ms entrance, 200ms hover)

**Layout & Spacing:**
Section Density: Balanced (py-24 lg:py-32, gap-8)
Container: max-w-7xl mx-auto

**Component Styles:**
Button: Pill-shaped, uppercase, no shadow [Bild ✓]
Card: Elevated, shadow-lg, lift on hover [Preset]
Input: Bordered, rounded-lg, primary focus ring [Preset]
Badge: Pill outline [Preset]
Image: Soft (rounded-xl, shadow-md) [Preset]
Link: Subtle (hover:underline) [Preset]
Icon: Lucide, w-5 h-5 default [Auto]

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

**Typography (mit expliziter Scale!):**
```json
"typography": {
  "fontFamily": {
    "display": "Space Grotesk",
    "body": "Inter",
    "mono": "JetBrains Mono"
  },
  "scale": {
    "h1": "text-4xl md:text-5xl lg:text-6xl",
    "h2": "text-3xl md:text-4xl",
    "h3": "text-xl md:text-2xl",
    "body": "text-base md:text-lg",
    "small": "text-sm"
  },
  "lineHeight": {
    "tight": "leading-tight",
    "normal": "leading-normal",
    "relaxed": "leading-relaxed"
  },
  "letterSpacing": {
    "tight": "tracking-tight",
    "normal": "tracking-normal",
    "wide": "tracking-wide"
  }
}
```

**Spacing (mit Section Density!):**
```json
"spacing": {
  "base": [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  "sections": {
    "padding": "py-24 lg:py-32",
    "gap": "space-y-0",
    "containerPadding": "px-4 md:px-6 lg:px-8",
    "containerWidth": "max-w-7xl",
    "elementGap": {
      "tight": "gap-4",
      "normal": "gap-8",
      "loose": "gap-12"
    }
  }
}
```

**Radius:**
- Gewählter Border Radius
- Scale für verschiedene Elemente (sm, md, lg, xl)

**Animations (mit präzisen Timings!):**
```json
"animations": {
  "style": "subtle",
  "entrance": {
    "duration": "400ms",
    "stagger": "80ms",
    "easing": "ease-out"
  },
  "hover": {
    "duration": "200ms",
    "easing": "ease-out"
  },
  "transition": {
    "fast": "150ms",
    "normal": "300ms",
    "slow": "500ms"
  },
  "framerMotion": {
    "containerVariants": {
      "hidden": { "opacity": 0 },
      "visible": {
        "opacity": 1,
        "transition": { "staggerChildren": 0.08, "delayChildren": 0.1 }
      }
    },
    "itemVariants": {
      "hidden": { "opacity": 0, "y": 20 },
      "visible": {
        "opacity": 1, "y": 0,
        "transition": { "duration": 0.4, "ease": "easeOut" }
      }
    }
  }
}
```

**Components (Button, Card, Input, Badge + NEU: Image, Link, Icon):**

```json
"components": {
  "button": {
    "styleImage": "inspirations/components/button.jpg",
    "source": "image" | "preset",
    "preset": "pill",
    "extracted": {
      "borderRadius": "9999px",
      "shadow": "none",
      "padding": "px-6 py-3",
      "hoverEffect": "opacity-90",
      "textTransform": "uppercase"
    },
    "tailwindClasses": {
      "base": "rounded-full uppercase font-medium tracking-wide transition-all",
      "primary": "bg-primary text-primary-foreground hover:opacity-90",
      "secondary": "bg-secondary text-secondary-foreground hover:opacity-90",
      "outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      "ghost": "hover:bg-muted"
    }
  },
  "card": {
    "source": "preset",
    "preset": "elevated",
    "tailwindClasses": {
      "base": "rounded-2xl shadow-lg border-0 transition-all hover:shadow-xl hover:-translate-y-0.5"
    }
  },
  "input": {
    "source": "preset",
    "preset": "bordered",
    "tailwindClasses": {
      "base": "rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
    }
  },
  "badge": {
    "source": "preset",
    "preset": "pill-outline",
    "tailwindClasses": {
      "base": "rounded-full border border-primary text-primary px-3 py-1 text-sm"
    }
  },
  "image": {
    "source": "preset",
    "preset": "soft",
    "tailwindClasses": {
      "base": "rounded-xl shadow-md",
      "hero": "aspect-[16/10] rounded-xl shadow-md",
      "card": "aspect-[4/3] rounded-xl shadow-md",
      "avatar": "aspect-square rounded-full",
      "testimonial": "aspect-[3/4] rounded-xl shadow-md"
    }
  },
  "link": {
    "source": "preset",
    "preset": "subtle",
    "tailwindClasses": {
      "default": "text-primary hover:underline",
      "muted": "text-muted-foreground hover:text-foreground",
      "nav": "text-foreground/80 hover:text-foreground transition-colors"
    }
  },
  "icon": {
    "library": "lucide",
    "sizes": {
      "sm": "w-4 h-4",
      "md": "w-5 h-5",
      "lg": "w-6 h-6",
      "xl": "w-8 h-8"
    },
    "defaultSize": "w-5 h-5",
    "defaultColor": "currentColor",
    "featureIconSize": "w-10 h-10",
    "featureIconColor": "text-primary",
    "featureIconBg": "bg-primary/10 rounded-lg p-2"
  }
}
```

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
- Scale: {scale} (h1: {h1Classes}, h2: {h2Classes}, ...)

**Farben:**
- Primary: `{primary}` ███
- Accent: `{accent}` ███
- Background: {mode}

**Layout & Spacing:**
- Section Density: {density} ({sectionPadding}, {elementGap})
- Container: {containerWidth}

**Style:**
- Border Radius: {radius}
- Animations: {animationStyle} ({entranceDuration} entrance, {hoverDuration} hover)

**Component Styles:**
- Button: {buttonStyle} {[Bild ✓] oder [Preset]}
- Card: {cardStyle} {[Bild ✓] oder [Preset]}
- Input: {inputStyle} {[Bild ✓] oder [Preset]}
- Badge: {badgeStyle} {[Bild ✓] oder [Preset]}
- Image: {imageStyle} [Preset]
- Link: {linkStyle} [Preset]
- Icon: Lucide, {iconDefaultSize} [Auto]

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
