# Erstgespräch buchen Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Erstgespräch buchen |
| Path | `/erstgespraech` |
| Sections | 5 |
| Purpose | Cal.com Terminbuchung, Lead-Capture |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Erstgespräch buchen | SG-WM | 30/60 |
| Description | Buchen Sie Ihr kostenloses und unverbindliches Erstgespräch. In 30 Minuten analysieren wir gemeinsam Ihre finanzielle Situation. | 130/160 |
| Canonical | https://sg-wm.ch/erstgespraech | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Erstgespräch Finanzberatung buchen | H1, Title |
| Secondary | kostenlose Finanzberatung | Body |
| Secondary | Termin Vermögensberater | Body |

### Schema Markup

```json
{
  "@type": "Service",
  "name": "Kostenloses Erstgespräch",
  "description": "30-minütiges unverbindliches Beratungsgespräch",
  "provider": {
    "@type": "Organization",
    "name": "Swiss Group Wealth Management AG"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CHF"
  }
}
```

---

## Sections

### 1. Hero Section (booking-focused)

**Layout:** Minimal, text-centered

```typescript
{
  headline: "Ihr erstes Gespräch",
  subheadline: "Kostenlos und unverbindlich - der erste Schritt zu Ihrer finanziellen Zukunft"
}
```

---

### 2. Benefits Section (checklist)

**Layout:** Horizontal row of benefit badges

```typescript
{
  benefits: [
    { icon: "Gift", text: "Kostenlos" },
    { icon: "Shield", text: "Unverbindlich" },
    { icon: "User", text: "Persönlich" },
    { icon: "Target", text: "Individuell" }
  ]
}
```

**Styling:**
- Gold checkmarks
- Inline badges on desktop
- 2x2 grid on mobile

---

### 3. Process Explanation (simple-steps)

**Layout:** 4 numbered steps

```typescript
{
  headline: "So läuft Ihr Erstgespräch ab",
  steps: [
    { number: 1, title: "Terminwahl", description: "Wählen Sie einen passenden Termin" },
    { number: 2, title: "Kurzes Vorgespräch", description: "5 Minuten telefonisch oder per Video" },
    { number: 3, title: "Analyse", description: "Wir besprechen Ihre Situation und Ziele" },
    { number: 4, title: "Empfehlungen", description: "Sie erhalten erste konkrete Tipps" }
  ]
}
```

---

### 4. Cal.com Embed Section

**Integration:** Cal.com Inline Embed

```typescript
{
  provider: "cal.com",
  calLink: "[username]/erstgespraech", // To be configured
  embedType: "inline",
  layout: "side-by-side", // Calendar left, benefits right
  styling: {
    theme: "light",
    brandColor: "#1a365d", // Navy
    hideEventTypeDetails: false
  }
}
```

**Layout:**
| Breakpoint | Display |
|------------|---------|
| Desktop | Calendar 60% / Benefits sidebar 40% |
| Tablet | Calendar 100%, benefits above |
| Mobile | Calendar 100%, benefits above |

**Cal.com Script:**
```html
<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", {origin:"https://app.cal.com"});
  Cal("inline", {
    elementOrSelector: "#cal-embed",
    calLink: "[username]/erstgespraech",
  });
</script>
```

---

### 5. Advisor Info Section

**Layout:** Card with photo

```typescript
{
  headline: "Ihr Ansprechpartner",
  advisor: {
    name: "[Name]",
    role: "Geschäftsführer",
    image: "/images/team/advisor.webp",
    quote: "Ich freue mich darauf, Sie kennenzulernen."
  }
}
```

**Styling:**
- Photo: 150x150, rounded
- Quote: Playfair Display, italic
- Card: subtle shadow, centered

---

## Components to Create

| Component | Location |
|-----------|----------|
| BookingHero | `components/sections/BookingHero.tsx` |
| BenefitsBadges | `components/ui/BenefitsBadges.tsx` |
| ProcessStepsSimple | `components/sections/ProcessStepsSimple.tsx` |
| CalEmbed | `components/integrations/CalEmbed.tsx` |
| AdvisorCard | `components/ui/AdvisorCard.tsx` |

---

## Cal.com Integration

### Setup Required

1. Cal.com Account erstellen
2. Event Type "Erstgespräch" (30 min)
3. Verfügbarkeiten setzen
4. Cal Link in config speichern

### Environment Variable

```env
NEXT_PUBLIC_CAL_LINK=username/erstgespraech
```

---

## Conversion Optimization

- **Social Proof:** Benefits prominent
- **Process Clarity:** Steps explain what happens
- **Personal Touch:** Advisor photo builds trust
- **Zero Friction:** Cal.com handles scheduling

---

## Image Requirements

| Image | Size | Format | Alt Text |
|-------|------|--------|----------|
| Advisor | 300x300 | WebP | [Name], Ihr Ansprechpartner bei SG-WM |
| OG | 1200x630 | PNG | Erstgespräch buchen - SG-WM |

---

## Tracking

```typescript
// Track booking completion
Cal("on", {
  action: "bookingSuccessful",
  callback: (e) => {
    // Send to analytics
    gtag('event', 'conversion', {
      'send_to': 'AW-XXXXX/XXXXX',
    });
  }
});
```
