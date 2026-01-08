# Performance Standards

Guidelines for building fast, efficient websites that score 90+ on Lighthouse.

## Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID/INP | < 100ms | First Input Delay / Interaction to Next Paint |
| CLS | < 0.1 | Cumulative Layout Shift |

## Image Optimization

### Use next/image
```tsx
import Image from "next/image"

// Local images (automatically optimized)
import heroImage from "@/public/hero.jpg"

<Image
  src={heroImage}
  alt="Descriptive alt text"
  placeholder="blur"       // Shows blur while loading
  priority                 // Preload for above-fold images
/>

// Remote images
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Fill container
<div className="relative aspect-video">
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

### Image Configuration
```js
// next.config.js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.example.com",
      },
    ],
  },
}
```

### Priority Loading
```tsx
// Preload critical above-fold images
<Image src="/hero.jpg" alt="Hero" priority />

// Or use link preload
<link
  rel="preload"
  href="/critical-image.jpg"
  as="image"
  fetchPriority="high"
/>
```

## Font Optimization

### Use next/font
```tsx
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",        // Prevent FOIT
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### Preconnect to Font Origins
```tsx
// If using external fonts
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

## JavaScript Optimization

### Dynamic Imports
```tsx
import dynamic from "next/dynamic"

// Lazy load heavy components
const HeavyChart = dynamic(() => import("./chart"), {
  loading: () => <ChartSkeleton />,
  ssr: false  // Disable SSR if client-only
})

// Lazy load on interaction
const Modal = dynamic(() => import("./modal"))

function Page() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open</button>
      {showModal && <Modal />}  {/* Only loads when opened */}
    </>
  )
}
```

### Script Loading
```tsx
import Script from "next/script"

// Analytics - load after page is interactive
<Script
  src="https://analytics.example.com/script.js"
  strategy="lazyOnload"
/>

// Third-party that's needed early
<Script
  src="https://widget.example.com/embed.js"
  strategy="afterInteractive"
/>
```

### Avoid Blocking Scripts
```tsx
// Bad: Blocks rendering
<script src="/heavy-script.js"></script>

// Good: Deferred
<Script src="/heavy-script.js" strategy="lazyOnload" />
```

## CSS Optimization

### Avoid Large CSS Files
```css
/* Bad: Importing everything */
@import "tailwindcss";

/* Good: Only what you need */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Critical CSS
Next.js automatically inlines critical CSS. For custom setups:

```tsx
// Inline critical styles
<style dangerouslySetInnerHTML={{
  __html: criticalCSS
}} />

// Load non-critical async
<link
  rel="preload"
  href="/styles/non-critical.css"
  as="style"
  onLoad="this.onload=null;this.rel='stylesheet'"
/>
```

## Layout Shift Prevention

### Reserve Space for Images
```tsx
// Always specify dimensions
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>

// Or use aspect ratio
<div className="aspect-video">
  <Image src="/image.jpg" alt="Description" fill />
</div>
```

### Reserve Space for Dynamic Content
```tsx
// Reserve space for content that loads async
<div className="min-h-[400px]">
  <Suspense fallback={<Skeleton className="h-[400px]" />}>
    <DynamicContent />
  </Suspense>
</div>
```

### Font Display Swap
```tsx
// Prevents layout shift from font loading
const font = Inter({
  subsets: ["latin"],
  display: "swap",  // Show fallback immediately, swap when loaded
})
```

## Caching

### Static Page Caching
```tsx
// Static by default in App Router
export default function Page() {
  return <StaticContent />
}

// Force revalidation
export const revalidate = 3600 // Revalidate every hour
```

### Data Caching
```tsx
// Cached by default
const data = await fetch("https://api.example.com/data")

// Revalidate periodically
const data = await fetch("https://api.example.com/data", {
  next: { revalidate: 3600 }
})

// No caching
const data = await fetch("https://api.example.com/data", {
  cache: "no-store"
})
```

## Bundle Size

### Analyze Bundle
```bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({})

# Run analysis
ANALYZE=true npm run build
```

### Tree Shaking
```tsx
// Bad: Imports entire library
import _ from "lodash"
_.debounce(fn, 300)

// Good: Import only what you need
import debounce from "lodash/debounce"
debounce(fn, 300)

// Better: Use native or smaller alternative
const debounce = (fn, ms) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), ms)
  }
}
```

## Server Components

### Minimize Client JavaScript
```tsx
// Server Component - no client JS
export default async function ProductList() {
  const products = await getProducts()
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  )
}

// Only use "use client" when needed
"use client"
export function AddToCartButton({ id }) {
  return <button onClick={() => addToCart(id)}>Add</button>
}
```

## Monitoring

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://example.com/
            https://example.com/about
          budgetPath: ./budget.json
```

### Performance Budget
```json
// budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 2000 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "total-blocking-time", "budget": 300 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 300 },
      { "resourceType": "total", "budget": 1000 }
    ]
  }
]
```

## Checklist

- [ ] All images use next/image
- [ ] Above-fold images have `priority`
- [ ] Fonts use next/font with `display: swap`
- [ ] Heavy components use dynamic imports
- [ ] Third-party scripts use next/script
- [ ] No layout shifts (dimensions specified)
- [ ] Server Components used by default
- [ ] Bundle size monitored
- [ ] Lighthouse score 90+
