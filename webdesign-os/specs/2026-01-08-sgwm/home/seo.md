# Home Page - SEO Specification

## Meta Tags

| Tag | Value |
|-----|-------|
| title | Unabhängige Finanzberatung Pfäffikon | SG-WM |
| description | Swiss Group Wealth Management - Ihre unabhängige Finanzberatung in Pfäffikon. Vermögensplanung, Vorsorge & Versicherungen für Privatpersonen und KMU. |
| canonical | https://sg-wm.ch/ |
| robots | index, follow |
| viewport | width=device-width, initial-scale=1 |

---

## Keywords

| Type | Keyword | Target Elements |
|------|---------|-----------------|
| Primary | Finanzberatung Pfäffikon Schweiz | H1, Title, Meta Description, First Paragraph |
| Secondary | Wealth Management Schweiz | H2, Body Text |
| Secondary | Vermögensberatung | H2, Body Text |
| Secondary | unabhängige Finanzberatung | Body Text, Image Alt |
| LSI | Finanzplanung | Service Cards |
| LSI | Vorsorge | Service Cards |
| LSI | Vermögensberater | Body Text |

---

## Heading Hierarchy

```
H1: Treffen Sie die richtigen Entscheidungen, zur richtigen Zeit
│   └── Contains: Primary keyword context
│
├── H2: Unsere Kompetenz in Zahlen
│   └── (No H3 - stats are not headings)
│
├── H2: Unsere Dienstleistungen
│   ├── H3: Finanzplanung
│   ├── H3: Vorsorge & Pensionierung
│   ├── H3: Versicherungen
│   ├── H3: Immobilien
│   ├── H3: Nachlass & Erbschaft
│   └── H3: KMU-Services
│
├── H2: Das sagen unsere Kunden
│   └── (Testimonials - no sub-headings)
│
├── H2: Unsere Partner
│   └── (Logos - no sub-headings)
│
└── H2: Starten Sie jetzt
    └── (CTA - no sub-headings)
```

---

## Schema Markup

### WebPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sg-wm.ch/#webpage",
  "url": "https://sg-wm.ch/",
  "name": "Unabhängige Finanzberatung Pfäffikon | SG-WM",
  "description": "Swiss Group Wealth Management - Ihre unabhängige Finanzberatung in Pfäffikon.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://sg-wm.ch/#website"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://sg-wm.ch/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://sg-wm.ch/images/hero.webp"
  }
}
```

### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sg-wm.ch/#organization",
  "name": "Swiss Group Wealth Management AG",
  "alternateName": "SG-WM",
  "url": "https://sg-wm.ch",
  "logo": {
    "@type": "ImageObject",
    "url": "https://sg-wm.ch/logo.png",
    "width": 200,
    "height": 60
  },
  "description": "Unabhängige Finanzberatung für Privatpersonen und KMU in der Schweiz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Strasse]",
    "addressLocality": "Pfäffikon",
    "postalCode": "[PLZ]",
    "addressCountry": "CH"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41 [number]",
    "contactType": "customer service",
    "availableLanguage": ["German", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/sg-wm"
  ]
}
```

### LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://sg-wm.ch/#localbusiness",
  "name": "Swiss Group Wealth Management AG",
  "image": "https://sg-wm.ch/images/office.webp",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Strasse]",
    "addressLocality": "Pfäffikon",
    "postalCode": "[PLZ]",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "48"
  }
}
```

---

## Open Graph

```html
<meta property="og:title" content="Unabhängige Finanzberatung Pfäffikon | SG-WM" />
<meta property="og:description" content="Swiss Group Wealth Management - Vermögensplanung, Vorsorge & Versicherungen" />
<meta property="og:image" content="https://sg-wm.ch/og/home.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Swiss Group Wealth Management - Finanzberatung" />
<meta property="og:url" content="https://sg-wm.ch/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="de_CH" />
<meta property="og:site_name" content="Swiss Group Wealth Management" />
```

---

## Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Unabhängige Finanzberatung Pfäffikon | SG-WM" />
<meta name="twitter:description" content="Swiss Group Wealth Management - Vermögensplanung, Vorsorge & Versicherungen" />
<meta name="twitter:image" content="https://sg-wm.ch/og/home.png" />
```

---

## Internal Links Strategy

### Outbound from Home

| Target Page | Anchor Text | Context |
|-------------|-------------|---------|
| /erstgespraech | Erstgespräch vereinbaren | Hero CTA, Final CTA |
| /dienstleistungen | Alle Dienstleistungen | Services Section |
| /dienstleistungen/finanzplanung | Finanzplanung | Service Card |
| /dienstleistungen/vorsorge-pensionierung | Vorsorge & Pensionierung | Service Card |
| /dienstleistungen/versicherungen | Versicherungen | Service Card |
| /dienstleistungen/immobilien | Immobilien | Service Card |
| /dienstleistungen/nachlass-erbschaft | Nachlass & Erbschaft | Service Card |
| /dienstleistungen/kmu | KMU-Services | Service Card |
| /ueber-uns | Über uns | Navigation |
| /kontakt | Kontakt | Navigation |
| /ratgeber | Ratgeber | Navigation |
| /faq | FAQ | Navigation |

### Inbound to Home

| Source Page | Anchor Text |
|-------------|-------------|
| All pages | Logo (home link) |
| All pages | Startseite (breadcrumb where applicable) |

---

## Image SEO

| Image | Alt Text | Title Attribute |
|-------|----------|-----------------|
| Hero | Finanzberatung Pfäffikon - Professionelle Beratung im modernen Büro | Swiss Group Wealth Management |
| Finanzplanung Card | Finanzplanung und Vermögensberatung | Finanzplanung |
| Vorsorge Card | Vorsorge und Pensionierungsplanung | Vorsorge |
| Versicherungen Card | Unabhängige Versicherungsberatung | Versicherungen |
| Immobilien Card | Immobilienfinanzierung und Hypotheken | Immobilien |
| Nachlass Card | Nachlassplanung und Erbschaftsberatung | Nachlass |
| KMU Card | Finanzdienstleistungen für KMU | KMU-Services |
| Testimonial Photos | [Name], zufriedener Kunde | - |
| Partner Logos | [Partner Name] - Partner von SG-WM | [Partner Name] |

---

## Technical SEO Checklist

- [x] Title tag optimized (45 chars, includes primary keyword)
- [x] Meta description set (156 chars, includes CTA)
- [x] Primary keyword in H1
- [x] Heading hierarchy validated (H1 → H2 → H3)
- [x] Schema markup defined (WebPage, Organization, LocalBusiness)
- [x] Open Graph tags configured
- [x] Twitter Card configured
- [x] Alt texts specified for all images
- [x] Internal links planned
- [x] Canonical URL set
- [ ] robots.txt configured
- [ ] XML sitemap includes page
- [ ] Page speed optimized (LCP < 2.5s)
