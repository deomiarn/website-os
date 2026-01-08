# Kontakt Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Kontakt |
| Path | `/kontakt` |
| Sections | 2 |
| Purpose | Formular, Standort, Kontaktdaten |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Kontakt | Swiss Group Wealth Management | 45/60 |
| Description | Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Swiss Group Wealth Management in Pfäffikon - wir freuen uns auf Ihre Nachricht. | 137/160 |
| Canonical | https://sg-wm.ch/kontakt | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Kontakt Finanzberatung Pfäffikon | H1, Title |
| Secondary | Finanzberater kontaktieren | Body |

### Schema Markup

```json
{
  "@type": "ContactPage",
  "name": "Kontakt - SG-WM",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Swiss Group Wealth Management AG",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Strasse]",
      "addressLocality": "Pfäffikon",
      "postalCode": "[PLZ]",
      "addressCountry": "CH"
    },
    "telephone": "+41 [number]",
    "email": "info@sg-wm.ch",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  }
}
```

---

## Sections

### 1. Contact Split Section

**Layout:** Form left, Info right

#### Contact Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | text | yes | min 2 chars |
| email | email | yes | valid email |
| phone | tel | no | valid phone |
| subject | select | yes | predefined options |
| message | textarea | yes | min 10 chars |

**Subject Options:**
- Erstgespräch anfragen
- Allgemeine Anfrage
- Bestandskunden
- Medien / Presse
- Sonstiges

**Form Styling:**
- Floating labels
- Gold focus border
- Error: red border + message
- Success: green checkmark

**Submit:**
- Button: "Nachricht senden" (gold)
- Loading state: spinner
- Success: "Vielen Dank! Wir melden uns."
- Error: "Fehler. Bitte erneut versuchen."

#### Contact Info

**Elements:**
```typescript
{
  phone: {
    label: "Telefon",
    value: "+41 XX XXX XX XX",
    icon: "Phone",
    href: "tel:+41XXXXXXXX"
  },
  email: {
    label: "E-Mail",
    value: "info@sg-wm.ch",
    icon: "Mail",
    href: "mailto:info@sg-wm.ch"
  },
  address: {
    label: "Adresse",
    value: "[Strasse]\n[PLZ] Pfäffikon",
    icon: "MapPin"
  },
  hours: {
    label: "Öffnungszeiten",
    value: "Mo-Fr: 08:00-18:00",
    icon: "Clock"
  }
}
```

**Responsive:**
| Breakpoint | Layout |
|------------|--------|
| Desktop | 60% form / 40% info |
| Tablet | 50% / 50% |
| Mobile | Stacked (info first) |

---

### 2. Map Section

**Provider:** Google Maps Embed

```typescript
{
  center: { lat: XX.XXXX, lng: XX.XXXX },
  zoom: 15,
  height: "400px",
  marker: {
    position: { lat: XX.XXXX, lng: XX.XXXX },
    title: "Swiss Group Wealth Management AG"
  }
}
```

**Responsive:**
| Breakpoint | Height |
|------------|--------|
| Desktop | 400px |
| Tablet | 350px |
| Mobile | 300px |

**Performance:**
- Lazy load iframe
- Loading placeholder with location text

---

## Components to Create

| Component | Location |
|-----------|----------|
| ContactForm | `components/forms/ContactForm.tsx` |
| ContactInfo | `components/sections/ContactInfo.tsx` |
| GoogleMap | `components/ui/GoogleMap.tsx` |

---

## Form Handling

### Submission Flow

```typescript
// API Route: /api/contact
export async function POST(req: Request) {
  const data = await req.json();

  // Validate
  const validated = contactSchema.parse(data);

  // Send via Resend
  await resend.emails.send({
    from: 'noreply@sg-wm.ch',
    to: 'info@sg-wm.ch',
    subject: `Neue Anfrage: ${validated.subject}`,
    react: ContactEmailTemplate({ ...validated })
  });

  return Response.json({ success: true });
}
```

### Validation (Zod)

```typescript
const contactSchema = z.object({
  name: z.string().min(2, "Name zu kurz"),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().optional(),
  subject: z.enum(["erstgespraech", "allgemein", "bestandskunden", "presse", "sonstiges"]),
  message: z.string().min(10, "Nachricht zu kurz")
});
```

---

## States

### Form States

| State | UI |
|-------|-----|
| Empty | Placeholder labels |
| Focus | Gold ring, label floats |
| Filled | Normal |
| Error | Red ring, error message below |
| Submitting | Disabled, spinner |
| Success | Green checkmark, success message |
| Error (submit) | Red alert, retry button |

---

## Accessibility

- All inputs have labels (floating)
- Error messages linked via `aria-describedby`
- Focus visible on all interactive elements
- Submit button disabled during loading
- Success/error announced to screen readers

---

## Image Requirements

| Image | Size | Format |
|-------|------|--------|
| OG | 1200x630 | PNG |

No hero image - text-focused page.
