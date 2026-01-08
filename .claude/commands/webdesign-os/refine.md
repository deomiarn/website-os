---
name: refine
description: Verfeinere einzelne Seiten - Layout, Visual, Content, Animation Anpassungen
args: "[page-name]"
---

# Refine

Verfeinere und optimiere einzelne Seiten nach der Implementation.

## Usage

```
/refine           → Zeigt alle Seiten, fragt welche
/refine home      → Verfeinert Homepage
/refine about     → Verfeinert About-Seite
```

## Voraussetzungen

Step 5 (Implement) muss abgeschlossen sein.

## Anweisung

Du führst jetzt den **Refine** Workflow durch - **interaktive Verfeinerung**.

### 1. Seiten-Übersicht

"**Refine - Seiten verfeinern**

| Seite | Status | Letzte Änderung |
|-------|--------|-----------------|
| Home | Implementiert | {date} |
| About | Implementiert | {date} |
| Services | Implementiert | {date} |
| Contact | Implementiert | {date} |

Welche Seite möchtest du verfeinern?"

### 2. Seite laden

Lade die gewählte Seite und zeige aktuelle Struktur:

"**{Seitenname} - Aktuelle Struktur**

| # | Section | Layout | Details |
|---|---------|--------|---------|
| 1 | Hero | Split 50/50 | Bild rechts, 2 CTAs |
| 2 | Features | 3 Cards | Mit Icons |
| 3 | Testimonials | 3er Grid | Mit Fotos |
| 4 | FAQ | Accordion | 6 Fragen |
| 5 | CTA | Centered | Gradient BG |

**Was möchtest du ändern?**

Beispiele:
- 'Hero Bild nach links'
- 'Features: 4 statt 3 Karten'
- 'Mehr Abstand zwischen Sections'
- 'Animation für Testimonials hinzufügen'
- 'Section entfernen: FAQ'
- 'Neue Section nach Features: Stats'"

### 3. Änderungen verarbeiten

#### Layout-Änderungen

User: "Hero Bild nach links"
→ Update HeroSection: imagePosition = "left"

User: "Features: 4 statt 3 Karten"
→ Update FeaturesSection: columns = 4
→ ggf. Grid anpassen

User: "FAQ entfernen"
→ Section aus Page entfernen

User: "Stats Section nach Features hinzufügen"
→ Führe Mini-Section-Dialog (wie in /shape-pages)
→ Erstelle neue Section
→ Füge in Page ein

#### Visual-Änderungen

User: "Mehr Abstand zwischen Sections"
→ Update Section Padding

User: "Hero Headline größer"
→ Update Typography Scale

User: "Cards mit stärkerem Schatten"
→ Update Shadow Utility

User: "Primary Button runder"
→ Update Border Radius für Buttons

#### Content-Änderungen

User: "Hero Headline ändern zu 'Neuer Text'"
→ Update Content

User: "CTA Text: 'Jetzt starten' statt 'Los geht's'"
→ Update Button Text

#### Animation-Änderungen

User: "Testimonials: Fade-in Animation"
→ Add Framer Motion Animation

User: "Keine Animation für Features"
→ Remove Animation

User: "Schnellere Animationen"
→ Update Duration

### 4. Änderung implementieren

"**Änderung: {beschreibung}**

Implementiere...
- [x] Component updated
- [x] Styles angepasst
- [x] Preview bereit

**Änderung gemacht!**

Preview: http://localhost:3000{path}

Weitere Änderungen an {Seitenname}?"

### 5. Iterativer Prozess

Wiederhole bis User zufrieden:

1. User beschreibt Änderung
2. AI implementiert
3. Preview anbieten
4. "Weitere Änderungen?"

### 6. Seite abschließen

"**{Seitenname} - Verfeinerung abgeschlossen**

Änderungen:
- Hero: Bild nach links verschoben
- Features: 4 statt 3 Karten
- Neue Section: Stats
- Testimonials: Animation hinzugefügt

**Andere Seite verfeinern oder fertig?**"

### 7. Refine beenden

"**Refine abgeschlossen!**

Verfeinerte Seiten:
- Home: 4 Änderungen
- About: 2 Änderungen

**Nächster Schritt:** `/verify`"

## Änderungs-Kategorien

### Layout
| Aktion | Beispiel |
|--------|----------|
| Position ändern | "Bild links statt rechts" |
| Spalten ändern | "3 statt 4 Karten" |
| Section verschieben | "CTA nach oben" |
| Section entfernen | "FAQ entfernen" |
| Section hinzufügen | "Stats nach Hero" |
| Breite ändern | "Hero 60/40 statt 50/50" |

### Visual
| Aktion | Beispiel |
|--------|----------|
| Spacing | "Mehr Abstand zwischen Sections" |
| Typography | "Headline größer" |
| Shadows | "Stärkere Schatten" |
| Colors | "CTA Background dunkler" |
| Radius | "Buttons runder" |
| Borders | "Cards mit Rahmen" |

### Content
| Aktion | Beispiel |
|--------|----------|
| Text ändern | "Headline: 'Neuer Text'" |
| CTA ändern | "Button: 'Jetzt starten'" |
| Anzahl | "Nur 5 FAQ statt 7" |

### Animation
| Aktion | Beispiel |
|--------|----------|
| Hinzufügen | "Fade-in für Section" |
| Entfernen | "Keine Animation" |
| Ändern | "Schnellere Animation" |
| Effekt | "Slide statt Fade" |

### Responsive
| Aktion | Beispiel |
|--------|----------|
| Mobile Layout | "Mobile: Stack statt Grid" |
| Tablet | "Tablet: 2 Spalten" |
| Breakpoint | "Features ab 1024px als Grid" |

## Skills

Nutze: `frontend-design`, `animation-library`, `responsive-patterns`

## Output

- Updated components in `exports/{project-name}/`
- `webdesign-os/config/workflow-state.json`
