---
name: responsive-patterns
description: Implement mobile-first responsive design patterns for all screen sizes. Use when building layouts that need to work across desktop, tablet, and mobile devices.
---

# Responsive Design Patterns

This skill provides patterns for building websites that look great and function perfectly on all devices.

## When to Use This Skill

- Creating responsive layouts
- Adapting designs for different screen sizes
- Implementing mobile navigation
- Optimizing images for different devices
- Building fluid typography systems

## Core Principles

### 1. Mobile-First Approach

Always start with mobile styles, then add complexity for larger screens.

```css
/* Mobile styles (default) */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

**Tailwind Mobile-First:**
```tsx
// Base = mobile, md: = tablet, lg: = desktop
<div className="p-4 md:p-8 lg:p-12">
```

### 2. Breakpoints

**Standard Breakpoints:**
| Name | Width | Target |
|------|-------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

**Tailwind Config:**
```ts
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### 3. Layout Patterns

**Stack to Grid:**
```tsx
// Mobile: stacked, Desktop: side-by-side
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Sidebar Layout:**
```tsx
// Mobile: no sidebar, Desktop: sidebar
<div className="flex flex-col lg:flex-row">
  <aside className="w-full lg:w-64 lg:shrink-0">
    Sidebar
  </aside>
  <main className="flex-1">
    Main Content
  </main>
</div>
```

**Hero Split:**
```tsx
// Mobile: image on top, Desktop: side by side
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div className="order-2 lg:order-1">
    <h1>Headline</h1>
    <p>Description</p>
  </div>
  <div className="order-1 lg:order-2">
    <Image src="..." />
  </div>
</section>
```

### 4. Navigation Patterns

**Mobile Menu:**
```tsx
"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button>CTA</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <NavLinks vertical />
            <Button className="w-full">CTA</Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

**Slide-Out Menu:**
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav className="flex flex-col gap-4">
      <NavLinks />
    </nav>
  </SheetContent>
</Sheet>
```

### 5. Responsive Typography

**Fluid Type Scale:**
```css
/* clamp(minimum, preferred, maximum) */
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}

h2 {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
}

p {
  font-size: clamp(1rem, 1vw + 0.75rem, 1.125rem);
}
```

**Tailwind Responsive Typography:**
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Responsive Headline
</h1>

<p className="text-base md:text-lg">
  Body text that scales
</p>
```

### 6. Responsive Images

**Next.js Image:**
```tsx
import Image from "next/image"

// Responsive with sizes hint
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-auto"
/>
```

**Art Direction (Different images per breakpoint):**
```tsx
<picture>
  <source media="(min-width: 1024px)" srcSet="/hero-desktop.jpg" />
  <source media="(min-width: 768px)" srcSet="/hero-tablet.jpg" />
  <img src="/hero-mobile.jpg" alt="Hero" className="w-full" />
</picture>
```

**Aspect Ratio Container:**
```tsx
// Maintains aspect ratio at all sizes
<div className="relative aspect-video">
  <Image
    src="/video-thumbnail.jpg"
    alt="Video"
    fill
    className="object-cover"
  />
</div>
```

### 7. Responsive Spacing

**Fluid Spacing:**
```css
/* Section padding that scales */
.section {
  padding-block: clamp(3rem, 8vw, 8rem);
}
```

**Tailwind Responsive Spacing:**
```tsx
<section className="py-12 md:py-16 lg:py-24">
  <div className="container px-4 md:px-6 lg:px-8">
    Content
  </div>
</section>
```

### 8. Responsive Tables

**Horizontal Scroll:**
```tsx
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* Table content */}
  </table>
</div>
```

**Card Stack on Mobile:**
```tsx
// Desktop: table, Mobile: cards
<div className="hidden md:block">
  <Table>{/* Table markup */}</Table>
</div>

<div className="md:hidden space-y-4">
  {data.map((item) => (
    <Card key={item.id}>
      <CardContent>
        {/* Card layout of table data */}
      </CardContent>
    </Card>
  ))}
</div>
```

### 9. Container Patterns

**Max-Width Container:**
```tsx
// Standard container with responsive padding
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>
```

**Full-Bleed with Contained Content:**
```tsx
<section className="bg-primary">
  {/* Full-width background */}
  <div className="container mx-auto px-4">
    {/* Contained content */}
  </div>
</section>
```

### 10. Hide/Show Elements

```tsx
// Hide on mobile, show on desktop
<div className="hidden md:block">
  Desktop only content
</div>

// Show on mobile, hide on desktop
<div className="md:hidden">
  Mobile only content
</div>

// Visibility (maintains layout space)
<div className="invisible md:visible">
  Hidden but takes space
</div>
```

### 11. Testing Checklist

**Desktop Viewports:**
- [ ] 1920px (Full HD)
- [ ] 1440px (Common laptop)
- [ ] 1280px (Small laptop)

**Tablet Viewports:**
- [ ] 1024px (iPad Pro landscape)
- [ ] 768px (iPad portrait)

**Mobile Viewports:**
- [ ] 430px (iPhone Pro Max)
- [ ] 390px (iPhone 14)
- [ ] 375px (iPhone SE)
- [ ] 320px (Small phones)

### 12. Common Issues & Solutions

**Issue: Text too small on mobile**
```tsx
// Bad
<p className="text-sm">Text</p>

// Good - never go below 16px for body text
<p className="text-base">Text</p>
```

**Issue: Touch targets too small**
```tsx
// Bad
<button className="p-1">Tap</button>

// Good - minimum 44x44px
<button className="p-3 min-h-[44px] min-w-[44px]">Tap</button>
```

**Issue: Horizontal overflow**
```tsx
// Add to root element
<html className="overflow-x-hidden">
```

**Issue: Fixed elements covering content**
```tsx
// Add padding to account for fixed header
<main className="pt-16"> {/* height of fixed header */}
```

## Quality Checklist

- [ ] Works on all breakpoints (320px - 1920px)
- [ ] No horizontal scrolling (except tables)
- [ ] Touch targets minimum 44x44px
- [ ] Text readable without zooming (16px+ body)
- [ ] Images don't break layout
- [ ] Navigation accessible on mobile
- [ ] Forms usable on mobile
- [ ] No cut-off content
