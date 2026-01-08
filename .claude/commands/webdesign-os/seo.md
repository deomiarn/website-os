---
name: seo
description: SEO-Optimierung Page by Page - Meta, Keywords, Schema, Internal Linking
args: "[page-name]"
---

# SEO

Optimiere jede Seite für Suchmaschinen.

## Usage

```
/seo           → Zeigt Übersicht, fragt welche Seite
/seo home      → Optimiert nur Homepage
/seo about     → Optimiert nur About-Seite
/seo all       → Optimiert alle Seiten nacheinander
```

## Voraussetzungen

Prüfe dass Step 5 (Implement) abgeschlossen ist.

## Anweisung

Du führst jetzt den **SEO** Workflow durch - **Page by Page**.

### 1. Kontext Laden

Lese:
- `webdesign-os/config/project.json` - Brand, Branche, Zielgruppe
- `webdesign-os/config/pages.json` - Alle Seiten
- `exports/{project-name}/` - Implementierte Seiten

### 2. Seiten-Übersicht

"**SEO - Suchmaschinenoptimierung**

| Seite | SEO Status | Meta | Schema | Links |
|-------|------------|------|--------|-------|
| Home | Pending | - | - | - |
| About | Pending | - | - | - |
| Services | Pending | - | - | - |
| Contact | Pending | - | - | - |

Welche Seite soll optimiert werden?"

### 3. Für jede Seite: SEO Checkliste

#### 3.1 Meta-Daten

"**{Seitenname} - Meta-Daten**

**Title Tag** (50-60 Zeichen)
Empfehlung: `{generierter Title}`
Aktuell: {currentLength} Zeichen

Passt das oder möchtest du anpassen?"

"**Meta Description** (150-160 Zeichen)
Empfehlung: `{generierte Description}`
Aktuell: {currentLength} Zeichen

Passt das oder möchtest du anpassen?"

#### 3.2 Keywords

"**{Seitenname} - Keywords**

Basierend auf Inhalt und Branche:

**Primary Keyword:**
Empfehlung: `{keyword}`

**Secondary Keywords:**
1. {keyword1}
2. {keyword2}
3. {keyword3}
4. {keyword4}
5. {keyword5}

Passen die Keywords? Andere Vorschläge?"

#### 3.3 Heading Hierarchy

"**{Seitenname} - Heading Struktur**

| Level | Text | Keyword? |
|-------|------|----------|
| H1 | {headline} | ✓ |
| H2 | {section1} | ✓ |
| H2 | {section2} | - |
| H3 | {subsection} | ✓ |

**Analyse:**
- [x] Nur ein H1
- [x] Logische Hierarchie
- [?] Keywords in {count}/{total} Headings

Anpassungen an Headings?"

#### 3.4 Schema Markup

"**{Seitenname} - Schema Markup**

Empfohlene Schemas:

**Seiten-Schema:**
- `{schemaType}` (z.B. WebPage, AboutPage, FAQPage)

**Zusätzliche Schemas:**
{je nach Seitentyp}
- Organization (für Home)
- LocalBusiness (falls lokal)
- FAQPage (falls FAQ vorhanden)
- BreadcrumbList
- WebSite (für Home)

Schemas bestätigen?"

Generiere JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "{schemaType}",
  "name": "{pageName}",
  "description": "{description}",
  ...
}
```

#### 3.5 Internal Linking

"**{Seitenname} - Internal Linking**

**Links ZU dieser Seite:**
| Von | Anchor Text |
|-----|-------------|
| Home | "Über uns" |
| Services | "Mehr über uns" |

**Links VON dieser Seite:**
| Zu | Anchor Text |
|----|-------------|
| Services | "Unsere Leistungen" |
| Contact | "Kontaktieren Sie uns" |

Anpassungen an Verlinkung?"

#### 3.6 Bilder-SEO

"**{Seitenname} - Bilder**

| Bild | Alt-Text | Dateiname |
|------|----------|-----------|
| Hero | {altText} | hero-{keyword}.webp |
| Feature 1 | {altText} | feature-{name}.webp |
| ... | ... | ... |

**Checkliste:**
- [ ] Alle Bilder haben Alt-Text
- [ ] Alt-Texte enthalten Keywords (wo sinnvoll)
- [ ] Dateien sind WebP-optimiert
- [ ] Lazy Loading aktiviert

Anpassungen?"

#### 3.7 Open Graph & Social

"**{Seitenname} - Social Media**

**Open Graph:**
- og:title: `{title}`
- og:description: `{description}`
- og:image: `{imageUrl}`
- og:type: `website`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `{title}`
- twitter:description: `{description}`

Passt das?"

### 4. SEO-Zusammenfassung

"**{Seitenname} - SEO Zusammenfassung**

| Aspekt | Status |
|--------|--------|
| Title Tag | ✓ 58 chars |
| Meta Description | ✓ 155 chars |
| Primary Keyword | ✓ "{keyword}" |
| H1 | ✓ Mit Keyword |
| Schema | ✓ {schemaType} |
| Internal Links | ✓ {inbound} in / {outbound} out |
| Images | ✓ {imageCount} mit Alt |
| Open Graph | ✓ Komplett |

**SEO Score: {score}/100**

Seite optimiert! Nächste Seite?"

### 5. Implementierung

Für jede optimierte Seite, update:

```typescript
// app/{page}/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{title}',
  description: '{description}',
  keywords: ['{keyword1}', '{keyword2}', ...],
  openGraph: {
    title: '{ogTitle}',
    description: '{ogDescription}',
    images: ['{ogImage}'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{twitterTitle}',
    description: '{twitterDescription}',
  },
}
```

Schema in Layout oder Page:
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
/>
```

### 6. Alle Seiten optimiert

"**SEO-Optimierung abgeschlossen!**

| Seite | Score | Title | Schema |
|-------|-------|-------|--------|
| Home | 95/100 | ✓ | WebSite, Organization |
| About | 92/100 | ✓ | AboutPage |
| Services | 90/100 | ✓ | WebPage |
| Contact | 88/100 | ✓ | ContactPage |

**Durchschnitt: {avgScore}/100**

**Generierte Dateien:**
- Metadata in allen Pages
- `sitemap.xml`
- `robots.txt`

**Nächster Schritt:** `/refine` (optional) oder `/verify`"

### 7. Sitemap & Robots

Generiere automatisch:

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://{domain}/</loc>
    <lastmod>{date}</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- weitere URLs -->
</urlset>
```

```txt
# robots.txt
User-agent: *
Allow: /
Sitemap: https://{domain}/sitemap.xml
```

## Skills

Nutze: `seo-technical`, `seo-optimizer`

## Output

- Updated metadata in all pages
- `exports/{project-name}/app/sitemap.ts`
- `exports/{project-name}/app/robots.ts`
- `webdesign-os/config/seo.json` (SEO data per page)
- `webdesign-os/config/workflow-state.json`
