---
name: init-project
description: Initialisiert ein neues Website-Projekt durch interaktives Questionnaire
---

# Initialize Project

Starte ein neues Website-Projekt mit WebDesign-OS.

## Anweisung

Du führst jetzt den **Project Initialization** Workflow durch.

### 0. GSD Integration Check (NEU)

**Prüfe ZUERST ob GSD verwendet wurde:**

```bash
# Prüfe ob PROJECT.md existiert
ls .planning/PROJECT.md 2>/dev/null
```

**Falls `.planning/PROJECT.md` existiert:**

"Ich sehe, dass du bereits `/gsd:new-project` verwendet hast!

Ich übernehme die Infos aus **PROJECT.md** für WebDesign-OS:

| GSD | WebDesign-OS |
|-----|--------------|
| Vision | Brand Tagline |
| Target Users | Audience |
| Core Features | Pages + Features |
| Tech Stack | Framework Selection |

**Soll ich die Daten übernehmen oder neu erfragen?**"

Bei Übernahme:
- Lese `.planning/PROJECT.md`
- Extrahiere relevante Felder
- Überspringe entsprechende Questionnaire-Fragen
- Frage nur was fehlt (Design-Präferenzen, spezifische Seiten)

**Falls keine PROJECT.md existiert:**
- Weise auf GSD hin: "Tipp: Für komplexe Projekte kannst du zuerst `/gsd:new-project` für tiefes Context-Gathering nutzen."
- Fahre mit normalem Questionnaire fort

---

### 1. Begrüßung

Begrüße den Benutzer und erkläre kurz den Prozess:

"Willkommen bei **WebDesign-OS**! Ich werde dir einige Fragen stellen, um dein Website-Projekt zu verstehen. Antworte einfach in deinen eigenen Worten.

Los geht's!"

### 1.5 Bestehende Website (Optional)

**Frage ZUERST ob eine bestehende Website existiert:**

"**Hat der Kunde bereits eine Website?**

| Option | Beschreibung |
|--------|--------------|
| **Ja** | Gib mir die URL - ich analysiere sie für mehr Kontext |
| **Nein** | Wir starten komplett neu |

Falls **Ja**, gib mir die URL:"

#### Bei URL-Angabe:

1. **Website fetchen:**
   - **Primär:** WebFetch Tool verwenden
   - **Fallback bei 403:** browser_eval MCP (manche Websites blockieren Bots)

2. **Content analysieren** (Styling ist egal, nur Inhalt zählt):
   - Brand Name, Tagline (aus Header/Logo/Title)
   - Branche/Industry (aus Content-Themen)
   - Seitenstruktur (Navigation Links)
   - Content-Themen und Texte
   - Features (Blog, Shop, Kontaktformular, etc.)
   - Grobe Kategorisierung des Stils

3. **Zusammenfassung zeigen:**

"**📊 Analyse der bestehenden Website:**

| Aspekt | Erkannt |
|--------|---------|
| Brand | {name} |
| Tagline | {tagline} |
| Branche | {industry} |
| Seiten | {pages} |
| Features | {features} |
| Stil | {grobe Kategorisierung} |

**Diese Infos nutze ich als Basis. Du kannst im Questionnaire alles anpassen.**"

4. **Questionnaire anpassen:**
   - Erkannte Werte als Vorschläge/Defaults zeigen
   - User kann bestätigen oder ändern
   - Beispiel: "Ich habe **{brand-name}** erkannt. Stimmt das?"

### 2. Questionnaire

Stelle folgende Fragen nacheinander (warte auf Antworten):

**Frage 1 - Brand:**
"Erzähl mir von deiner Marke/deinem Unternehmen:
- Wie heißt es?
- Was ist euer Slogan (falls vorhanden)?
- In welcher Branche seid ihr?
- Wofür steht ihr?"

**Frage 2 - Zielgruppe:**
"Wer ist deine Zielgruppe?
- Beschreibe deine idealen Besucher
- Welche Probleme haben sie?
- Was suchen sie auf deiner Website?"

**Frage 3 - Website-Typ:**
"Was für eine Website brauchst du?
- Was ist der Hauptzweck?
- Ist es Corporate, Portfolio, Landing Page, Blog, Shop, oder was anderes?"

**Frage 4 - Seiten:**
"Welche Seiten brauchst du?
- Liste alle Seiten auf (z.B. Home, About, Services, Contact, Blog...)
- Gibt es spezielle Seiten?"

**Frage 5 - Features:**
"Welche Funktionen brauchst du?
- Blog (Artikel schreiben)?
- E-Commerce (Produkte verkaufen)?
- Kontaktformular?
- Newsletter?
- Dark Mode?"

**Frage 6 - Design:**
"Wie soll die Website aussehen?
- Welcher Stil? (modern, minimalistisch, verspielt, professionell...)
- Farbpräferenzen?
- Hast du Inspirations-Bilder in `webdesign-os/inspirations/` abgelegt?"

### 3. Daten Extrahieren

Aus den Antworten extrahiere:
- `name`: Projektname
- `brand`: name, tagline, industry, values
- `audience`: primary, problems, needs
- `type`: corporate/portfolio/landing/saas/blog/ecommerce
- `pages`: Array der Seiten
- `features`: blog, commerce, auth, contactForm, newsletter, darkMode
- `designPreferences`: style, colorPreferences

### 4. Speichern

Aktualisiere `webdesign-os/config/project.json` mit allen extrahierten Daten.

Aktualisiere `webdesign-os/config/integrations.json`:
- Wenn blog=true: Sanity aktivieren
- Wenn commerce=true: Medusa aktivieren
- Wenn auth=true: Supabase aktivieren

Aktualisiere `webdesign-os/config/workflow-state.json`:
- Step 1: status = "completed", summary = Kurze Zusammenfassung
- Step 2: status = "pending" (unlock)

### 5. Zusammenfassung

Zeige eine Zusammenfassung:

"**Projekt initialisiert!**

📋 **{name}**
🏢 Branche: {industry}
🎯 Typ: {type}
📄 Seiten: {pages}
⚙️ Features: {features}
🎨 Stil: {style}

Alles gespeichert in `webdesign-os/config/`.

**Nächster Schritt:** `/design-system`"

## Skills

Nutze: Keine spezifischen Skills nötig

## Output

- `webdesign-os/config/project.json`
- `webdesign-os/config/integrations.json`
- `webdesign-os/config/workflow-state.json`
