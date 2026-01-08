# FAQ Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | FAQ |
| Path | `/faq` |
| Sections | 3 |
| Purpose | Häufige Fragen, Vertrauensaufbau |
| Template | Custom |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Häufige Fragen | SG-WM | 25/60 |
| Description | Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen, Kosten und Ablauf bei Swiss Group Wealth Management. | 120/160 |
| Canonical | https://sg-wm.ch/faq | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | FAQ Finanzberatung | H1, Title |
| Secondary | Finanzberater Kosten | FAQ items |
| Secondary | Erstgespräch Ablauf | FAQ items |

### Schema Markup (FAQPage)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Finanzberatung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Erstgespräch ist kostenlos..."
      }
    }
    // ... all FAQs
  ]
}
```

---

## Sections

### 1. Category Navigation (sticky-sidebar)

**Layout:** Sticky sidebar left, FAQs right

```typescript
{
  categories: [
    { id: "allgemein", label: "Allgemein", count: 4 },
    { id: "kosten", label: "Kosten", count: 3 },
    { id: "ablauf", label: "Ablauf", count: 3 },
    { id: "services", label: "Services", count: 2 }
  ],
  sticky: true,
  position: "left",
  width: "250px"
}
```

**Behavior:**
- Click scrolls to category
- Active state updates on scroll
- Smooth scroll animation

**Responsive:**
| Breakpoint | Display |
|------------|---------|
| Desktop | Sticky sidebar |
| Tablet | Horizontal tabs above |
| Mobile | Horizontal scroll tabs |

---

### 2. FAQ Accordion (accordion-grouped)

**Layout:** Grouped by category, expandable items

```typescript
{
  faqs: [
    {
      category: "Allgemein",
      items: [
        {
          question: "Was macht Swiss Group Wealth Management?",
          answer: "Wir sind eine unabhängige Finanzberatung..."
        },
        {
          question: "Was bedeutet 'unabhängig'?",
          answer: "Wir sind an keine Bank oder Versicherung gebunden..."
        },
        {
          question: "Für wen ist Ihre Beratung geeignet?",
          answer: "Für Privatpersonen und KMU in der Schweiz..."
        },
        {
          question: "Wo sind Sie tätig?",
          answer: "Unser Büro ist in Pfäffikon, wir beraten schweizweit..."
        }
      ]
    },
    {
      category: "Kosten",
      items: [
        {
          question: "Was kostet das Erstgespräch?",
          answer: "Das Erstgespräch ist kostenlos und unverbindlich."
        },
        {
          question: "Wie werden Ihre Leistungen vergütet?",
          answer: "Wir arbeiten mit transparenten Honoraren..."
        },
        {
          question: "Gibt es versteckte Kosten?",
          answer: "Nein, wir legen alle Kosten offen..."
        }
      ]
    },
    {
      category: "Ablauf",
      items: [
        {
          question: "Wie läuft die Zusammenarbeit ab?",
          answer: "Nach dem Erstgespräch erstellen wir..."
        },
        {
          question: "Wie lange dauert eine Beratung?",
          answer: "Je nach Komplexität 2-8 Wochen..."
        },
        {
          question: "Muss ich alle Unterlagen offenlegen?",
          answer: "Für eine ganzheitliche Beratung ja..."
        }
      ]
    },
    {
      category: "Services",
      items: [
        {
          question: "Welche Dienstleistungen bieten Sie an?",
          answer: "Finanzplanung, Vorsorge, Versicherungen..."
        },
        {
          question: "Beraten Sie auch Unternehmen?",
          answer: "Ja, wir haben spezielle KMU-Services..."
        }
      ]
    }
  ]
}
```

**Accordion Styling:**
```typescript
{
  expandIcon: {
    type: "plus-minus",
    color: "accent" // gold
  },
  border: {
    color: "border",
    radius: "md"
  },
  spacing: "1rem",
  animation: {
    duration: "300ms",
    easing: "ease-out"
  }
}
```

**Accessibility:**
```tsx
<details>
  <summary
    role="button"
    aria-expanded={isOpen}
    aria-controls={`faq-${id}`}
  >
    {question}
  </summary>
  <div id={`faq-${id}`}>
    {answer}
  </div>
</details>
```

---

### 3. CTA Section (question)

**Layout:** Centered with question

```typescript
{
  headline: "Frage nicht gefunden?",
  description: "Kontaktieren Sie uns direkt - wir helfen gerne.",
  cta: {
    text: "Kontaktieren Sie uns",
    href: "/kontakt",
    variant: "primary" // navy
  }
}
```

---

## Components to Create

| Component | Location |
|-----------|----------|
| FAQSidebar | `components/faq/FAQSidebar.tsx` |
| FAQAccordion | `components/faq/FAQAccordion.tsx` |
| FAQItem | `components/faq/FAQItem.tsx` |
| CTAQuestion | `components/sections/CTAQuestion.tsx` |

---

## Interaction

### Scroll Spy

```typescript
const useScrollSpy = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
```

### Smooth Scroll

```typescript
const scrollToCategory = (categoryId: string) => {
  const element = document.getElementById(categoryId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
```

---

## States

### Accordion Item States

| State | Styling |
|-------|---------|
| Collapsed | Plus icon, muted border |
| Expanded | Minus icon, accent border |
| Hover | Background highlight |
| Focus | Ring-2 accent |

---

## Performance

- Single page, no pagination needed
- Accordion content: rendered but hidden (for SEO)
- Intersection Observer for scroll spy

---

## Image Requirements

| Image | Size | Format |
|-------|------|--------|
| OG | 1200x630 | PNG |

No images in FAQ content - text only.
