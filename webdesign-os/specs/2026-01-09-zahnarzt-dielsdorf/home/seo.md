# Home (Onepager) SEO Specification

## Meta Tags

| Tag | Value | Characters |
|-----|-------|------------|
| Title | Zahnarzt Dielsdorf \| Praxis Dr. Mirjam Gaggl | 47/60 |
| Description | Ihre Zahnarztpraxis in Dielsdorf. Familiäre Atmosphäre, moderne Behandlungen. Prophylaxe, Invisalign, schmerzfreie Anästhesie. Jetzt Termin vereinbaren! | 152/160 |
| Canonical | https://zahnarzt-dielsdorf.ch/ | - |
| Robots | index, follow | - |

---

## Keywords

| Type | Keyword | Target Elements |
|------|---------|-----------------|
| Primary | Zahnarzt Dielsdorf | H1, Title, Meta, 1. Paragraph |
| Secondary | Zahnarztpraxis Dielsdorf | H2, Body |
| Secondary | Dr. Mirjam Gaggl | About Section, Schema |
| Long-tail | Dentalhygiene Dielsdorf | Services Section |
| Long-tail | Invisalign Dielsdorf | Features Section |
| Long-tail | schmerzfreie Zahnbehandlung | Features Section |
| Local | Zahnarzt Zürich Unterland | Meta, Body |
| Local | Zahnarzt 8157 | Schema, Footer |

---

## Heading Hierarchy

```
H1: Ihre Zahnarztpraxis in Dielsdorf
│
├── H2: Willkommen in unserer Praxis
│
├── H2: Unsere Behandlungen
│   ├── H3: Vorsorge
│   ├── H3: Zahnerhalt
│   ├── H3: Zahnfleisch
│   ├── H3: Ästhetik
│   └── H3: Zahnersatz
│
├── H2: Unser Team
│
├── H2: Moderne Technologie
│   ├── H3: Invisalign - Unsichtbare Zahnspange
│   ├── H3: Intraoralscanner - Digitaler Abdruck
│   └── H3: The Wand Plus - Schmerzfreie Anästhesie
│
├── H2: Vereinbaren Sie Ihren Termin
│
└── H2: Kontakt
```

**Validation:**
- [x] Nur 1x H1
- [x] H2s für alle Sections
- [x] H3s nur wo sinnvoll (Kategorien, Features)
- [x] Keine übersprungenen Levels

---

## Schema Markup

### LocalBusiness (Primary)
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Zahnarzt Dielsdorf - Praxis Dr. Mirjam Gaggl",
  "description": "Ihre Zahnarztpraxis in Dielsdorf. Familiäre Atmosphäre, moderne Behandlungen.",
  "url": "https://zahnarzt-dielsdorf.ch",
  "telephone": "+41 44 853 22 74",
  "email": "info@zahnarzt-dielsdorf.ch",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wehntalerstrasse 44",
    "addressLocality": "Dielsdorf",
    "postalCode": "8157",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.4806,
    "longitude": 8.4556
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://zahnarzt-dielsdorf.ch/og-image.png",
  "sameAs": [],
  "memberOf": {
    "@type": "Organization",
    "name": "SSO - Schweizerische Zahnärzte-Gesellschaft"
  }
}
```

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zahnarzt Dielsdorf",
  "url": "https://zahnarzt-dielsdorf.ch",
  "logo": "https://zahnarzt-dielsdorf.ch/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41 44 853 22 74",
    "contactType": "customer service",
    "availableLanguage": ["German"]
  }
}
```

### MedicalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "medicalSpecialty": "Dentistry",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Prophylaxe",
      "procedureType": "Preventive"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dentalhygiene",
      "procedureType": "Preventive"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Invisalign",
      "procedureType": "Therapeutic"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Bleaching",
      "procedureType": "Cosmetic"
    }
  ]
}
```

---

## Open Graph

| Property | Value |
|----------|-------|
| og:title | Zahnarzt Dielsdorf - Praxis Dr. Mirjam Gaggl |
| og:description | Familiäre Atmosphäre. Moderne Behandlung. Vereinbaren Sie jetzt Ihren Termin. |
| og:image | https://zahnarzt-dielsdorf.ch/og-image.png |
| og:image:width | 1200 |
| og:image:height | 630 |
| og:type | website |
| og:url | https://zahnarzt-dielsdorf.ch/ |
| og:locale | de_CH |
| og:site_name | Zahnarzt Dielsdorf |

---

## Twitter Card

| Property | Value |
|----------|-------|
| twitter:card | summary_large_image |
| twitter:title | Zahnarzt Dielsdorf \| Praxis Dr. Mirjam Gaggl |
| twitter:description | Familiäre Atmosphäre. Moderne Behandlung. Jetzt Termin vereinbaren. |
| twitter:image | https://zahnarzt-dielsdorf.ch/og-image.png |

---

## Internal Links

| From | To | Anchor Text | Context |
|------|----|-------------|---------|
| Hero | #contact | Termin vereinbaren | CTA Button |
| CTA | tel:+41448532274 | Jetzt anrufen | Phone Button |
| CTA | mailto:info@zahnarzt-dielsdorf.ch | E-Mail schreiben | Email Button |
| Contact | local.ch booking | Online buchen | Booking Link |
| Nav | #about | Über uns | Navigation |
| Nav | #services | Behandlungen | Navigation |
| Nav | #team | Team | Navigation |
| Nav | #contact | Kontakt | Navigation |

---

## Image SEO

| Image | Alt Text | Title |
|-------|----------|-------|
| Hero | Zahnarztpraxis Dr. Mirjam Gaggl in Dielsdorf - Modernes Behandlungszimmer | Zahnarztpraxis Dielsdorf |
| About | Praxis-Innenraum der Zahnarztpraxis Dielsdorf | Unsere Praxis |
| Team (Dr. Gaggl) | Dr. med. dent. Mirjam Gaggl - Zahnärztin und Praxisinhaberin | Dr. Mirjam Gaggl |
| Team (Others) | {Name} - {Rolle} bei Zahnarzt Dielsdorf | {Name} |
| Invisalign | Invisalign unsichtbare Zahnspange - Zahnarzt Dielsdorf | Invisalign Behandlung |
| Intraoralscanner | Intraoralscanner für digitale Zahnabdrücke | Digitaler Abdruck |
| The Wand Plus | The Wand Plus schmerzfreie Anästhesie | Schmerzfreie Betäubung |
| OG Image | Zahnarzt Dielsdorf - Praxis Dr. Mirjam Gaggl | - |

---

## Technical SEO

### Performance
- [ ] Core Web Vitals optimiert (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Images: WebP/AVIF, lazy loading (ausser Hero)
- [ ] Fonts: preload, font-display: swap
- [ ] Critical CSS inlined

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Farbkontrast >= 4.5:1
- [ ] Skip-to-content Link
- [ ] ARIA Labels für interaktive Elemente
- [ ] Focus States sichtbar

### Mobile
- [ ] Viewport meta tag
- [ ] Touch targets >= 44px
- [ ] No horizontal scroll
- [ ] Responsive images (srcset)

### Security
- [ ] HTTPS enforced
- [ ] Security headers (CSP, X-Frame-Options)

---

## Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zahnarzt-dielsdorf.ch/</loc>
    <lastmod>2026-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://zahnarzt-dielsdorf.ch/sitemap.xml
```

---

## Metadata

| Field | Value |
|-------|-------|
| Created | 2026-01-09 |
| Last Updated | 2026-01-09 |
| Target Region | Dielsdorf, Zürich Unterland, Schweiz |
| Language | de-CH |
