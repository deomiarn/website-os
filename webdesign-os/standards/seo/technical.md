# Technical SEO Standards

Guidelines for technical SEO implementation in Next.js websites.

## Metadata Configuration

### Global Metadata (layout.tsx)
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Site Name - Tagline",
    template: "%s | Site Name"
  },
  description: "Default site description",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Author Name" }],
  creator: "Creator Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Site Name",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Site preview"
    }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@twitterhandle"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}
```

### Page-Specific Metadata
```tsx
export const metadata: Metadata = {
  title: "Page Title",  // Uses template: "Page Title | Site Name"
  description: "Page-specific description",
  openGraph: {
    title: "Page Title",
    description: "Page description",
    images: ["/page-og.jpg"]
  }
}
```

### Dynamic Metadata
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [post.image]
    },
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  }
}
```

## Sitemap

### app/sitemap.ts
```tsx
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://example.com"

  // Static pages
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ]

  // Dynamic pages (blog, products, etc.)
  const posts = await getAllPosts()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
```

### Multiple Sitemaps (Large Sites)
```tsx
// app/sitemap.ts
export async function generateSitemaps() {
  const totalPosts = await getPostCount()
  const sitemapsNeeded = Math.ceil(totalPosts / 50000)

  return Array.from({ length: sitemapsNeeded }, (_, i) => ({ id: i }))
}

export default async function sitemap({ id }): Promise<MetadataRoute.Sitemap> {
  const start = id * 50000
  const posts = await getPosts({ start, limit: 50000 })

  return posts.map((post) => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }))
}
```

## Robots.txt

### app/robots.ts
```tsx
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/thank-you",  // Don't index conversion pages
        ],
      },
    ],
    sitemap: "https://example.com/sitemap.xml",
  }
}
```

## Canonical URLs

### Preventing Duplicate Content
```tsx
// In metadata
export const metadata: Metadata = {
  alternates: {
    canonical: "https://example.com/page",
  }
}

// For paginated content - always point to page 1
export async function generateMetadata({ searchParams }) {
  return {
    alternates: {
      canonical: "https://example.com/blog",
    }
  }
}

// For URL parameters (filters, sorts)
// /products?sort=price → canonical: /products
```

## Structured Data (Schema.org)

### JSON-LD Component
```tsx
// components/structured-data.tsx
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Organization Schema (Global)
```tsx
// app/layout.tsx
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Company Name",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  sameAs: [
    "https://twitter.com/company",
    "https://linkedin.com/company/company"
  ]
}

<StructuredData data={organizationSchema} />
```

### Article Schema (Blog Posts)
```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  image: post.image,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  author: {
    "@type": "Person",
    name: post.author.name
  },
  publisher: {
    "@type": "Organization",
    name: "Site Name",
    logo: {
      "@type": "ImageObject",
      url: "https://example.com/logo.png"
    }
  }
}
```

### FAQ Schema
```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
}
```

### Breadcrumb Schema
```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://example.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://example.com/blog" },
    { "@type": "ListItem", position: 3, name: post.title }
  ]
}
```

## Performance (Core Web Vitals)

### LCP Optimization
```tsx
// Preload critical images
<link
  rel="preload"
  href="/hero.jpg"
  as="image"
  fetchPriority="high"
/>

// Priority loading for hero
<Image src="/hero.jpg" alt="Hero" priority />

// Preconnect to external resources
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

### CLS Prevention
```tsx
// Always specify image dimensions
<Image src="/img.jpg" alt="" width={800} height={600} />

// Reserve space for dynamic content
<div className="min-h-[400px]">
  <Suspense fallback={<Skeleton />}>
    <DynamicContent />
  </Suspense>
</div>
```

### FID/INP Optimization
```tsx
// Defer non-critical scripts
<Script src="/analytics.js" strategy="lazyOnload" />

// Use dynamic imports
const HeavyComponent = dynamic(() => import("./heavy"), {
  ssr: false,
  loading: () => <Skeleton />
})
```

## HTTPS & Security

### Security Headers (middleware.ts)
```tsx
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=()")

  return response
}
```

## Internationalization (Optional)

### Alternate Language Tags
```tsx
export const metadata: Metadata = {
  alternates: {
    canonical: "https://example.com/page",
    languages: {
      "en-US": "https://example.com/en/page",
      "de-DE": "https://example.com/de/page",
    }
  }
}
```

## Monitoring

### Google Search Console
- Submit sitemap
- Monitor indexing status
- Check for crawl errors
- Review Core Web Vitals

### Structured Data Testing
- Use Google's Rich Results Test
- Validate JSON-LD syntax

## Checklist

- [ ] Metadata configured (title, description, OG)
- [ ] Sitemap generated and submitted
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Schema markup implemented
- [ ] Core Web Vitals optimized
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Search Console configured
- [ ] Structured data validated
