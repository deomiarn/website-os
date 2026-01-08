# Accessibility Standards

Guidelines for building websites that are accessible to all users.

## Target Level: WCAG 2.1 AA (Basis)

Focus on the most impactful accessibility improvements.

## Semantic HTML

### Use Proper Elements
```tsx
// Bad: Divs for everything
<div onClick={handleClick}>Click me</div>
<div>Navigation</div>
<div>Article title</div>

// Good: Semantic elements
<button onClick={handleClick}>Click me</button>
<nav>Navigation</nav>
<h1>Article title</h1>
```

### Document Structure
```tsx
<body>
  <header>
    <nav aria-label="Main navigation">
      {/* Navigation */}
    </nav>
  </header>

  <main>
    <article>
      <h1>Page Title</h1>
      <section>
        <h2>Section Title</h2>
        {/* Content */}
      </section>
    </article>
  </main>

  <footer>
    {/* Footer */}
  </footer>
</body>
```

### Heading Hierarchy
```tsx
// Bad: Skipping levels
<h1>Title</h1>
<h3>Subtitle</h3>  {/* Skipped h2 */}

// Good: Sequential levels
<h1>Title</h1>
<h2>Subtitle</h2>
<h3>Sub-subtitle</h3>
```

## Images

### Alt Text
```tsx
// Informative images: Describe content
<Image
  src="/team-photo.jpg"
  alt="Our team of 5 engineers gathered around a whiteboard"
/>

// Decorative images: Empty alt
<Image
  src="/decorative-pattern.svg"
  alt=""
  aria-hidden="true"
/>

// Complex images: Detailed description
<figure>
  <Image
    src="/chart.png"
    alt="Sales chart showing 40% growth in Q4"
  />
  <figcaption>
    Quarterly sales data: Q1 $100k, Q2 $120k, Q3 $130k, Q4 $180k
  </figcaption>
</figure>
```

### SVG Icons
```tsx
// Icon with visible text
<button>
  <SearchIcon aria-hidden="true" />
  <span>Search</span>
</button>

// Icon-only button
<button aria-label="Search">
  <SearchIcon aria-hidden="true" />
</button>
```

## Color Contrast

### Minimum Ratios
- **Normal text**: 4.5:1 contrast ratio
- **Large text (18px+ bold, 24px+ normal)**: 3:1 contrast ratio
- **UI components**: 3:1 contrast ratio

### Testing
```tsx
// Use design tokens that meet contrast requirements
<p className="text-foreground">
  {/* 4.5:1 against background */}
</p>

<p className="text-muted-foreground">
  {/* Ensure this also meets 4.5:1 */}
</p>
```

### Don't Rely on Color Alone
```tsx
// Bad: Color-only indication
<span className="text-red-500">Error</span>

// Good: Color + icon + text
<span className="text-destructive flex items-center gap-2">
  <AlertCircle className="h-4 w-4" />
  Error: Please enter a valid email
</span>
```

## Focus States

### Visible Focus
```css
/* Ensure all interactive elements have visible focus */
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

/* Don't remove focus styles */
/* Bad: :focus { outline: none; } */
```

### Focus Order
```tsx
// Natural tab order follows DOM order
// Use tabIndex sparingly

// Remove from tab order
<div tabIndex={-1}>Not focusable</div>

// Add to tab order (avoid positive values)
<div tabIndex={0} role="button">Focusable</div>
```

## Forms

### Labels
```tsx
// Every input needs a label
<div>
  <Label htmlFor="email">Email address</Label>
  <Input
    id="email"
    type="email"
    name="email"
    autoComplete="email"
  />
</div>

// Hidden label for icon inputs
<div>
  <Label htmlFor="search" className="sr-only">Search</Label>
  <Input
    id="search"
    type="search"
    placeholder="Search..."
  />
</div>
```

### Error Messages
```tsx
<div>
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    aria-invalid={!!error}
    aria-describedby={error ? "email-error" : undefined}
  />
  {error && (
    <p id="email-error" className="text-destructive text-sm mt-1">
      {error}
    </p>
  )}
</div>
```

### Required Fields
```tsx
<Label htmlFor="name">
  Name <span aria-hidden="true">*</span>
  <span className="sr-only">(required)</span>
</Label>
<Input id="name" required aria-required="true" />
```

## Interactive Elements

### Buttons vs Links
```tsx
// Use button for actions
<button onClick={handleSubmit}>Submit</button>
<button onClick={openModal}>Open Settings</button>

// Use links for navigation
<Link href="/about">About Us</Link>
<a href="https://example.com">External Site</a>
```

### Touch Targets
```tsx
// Minimum 44x44px touch target
<button className="min-h-[44px] min-w-[44px] p-3">
  <Icon />
</button>

// Adequate spacing between targets
<nav className="flex gap-4">
  <Link>Link 1</Link>
  <Link>Link 2</Link>
</nav>
```

## Screen Reader Text

```tsx
// Visually hidden but accessible
<span className="sr-only">
  Opens in a new tab
</span>

// Tailwind's sr-only class
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Skip Links

```tsx
// First element in body
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground"
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

## ARIA Usage

### Use Sparingly
```tsx
// Prefer semantic HTML
<nav> instead of <div role="navigation">
<button> instead of <div role="button">
<main> instead of <div role="main">

// ARIA for complex widgets
<div
  role="tablist"
  aria-label="Account settings"
>
  <button
    role="tab"
    aria-selected={activeTab === "profile"}
    aria-controls="profile-panel"
  >
    Profile
  </button>
</div>
```

### Live Regions
```tsx
// Announce dynamic updates
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  {statusMessage}
</div>

// Urgent announcements
<div
  role="alert"
  aria-live="assertive"
>
  {errorMessage}
</div>
```

## Reduced Motion

```tsx
// Respect user preference
import { useReducedMotion } from "framer-motion"

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Content
    </motion.div>
  )
}
```

```css
/* CSS fallback */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Checklist

- [ ] Semantic HTML elements used
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] All images have appropriate alt text
- [ ] Color contrast meets 4.5:1 (text) / 3:1 (large text, UI)
- [ ] Focus states are visible
- [ ] All form inputs have labels
- [ ] Error messages are associated with inputs
- [ ] Touch targets are 44x44px minimum
- [ ] Skip link provided
- [ ] Reduced motion preference respected
