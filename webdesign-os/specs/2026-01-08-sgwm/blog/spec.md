# Blog / Ratgeber Page Specification

## Overview

| Property | Value |
|----------|-------|
| Page | Blog / Ratgeber |
| Path | `/ratgeber` |
| Sections | 3 |
| Purpose | Fachartikel, SEO, Thought Leadership |
| CMS | Sanity |

---

## SEO

### Meta Tags

| Element | Value | Characters |
|---------|-------|------------|
| Title | Ratgeber | Swiss Group Wealth Management | 45/60 |
| Description | Expertenwissen zu Vorsorge, Steuern, Immobilien und mehr. Praktische Tipps für Ihre finanzielle Zukunft von SG-WM. | 118/160 |
| Canonical | https://sg-wm.ch/ratgeber | - |

### Keywords

| Type | Keyword | Placement |
|------|---------|-----------|
| Primary | Finanz Ratgeber Schweiz | H1, Title |
| Secondary | Vorsorge Tipps | Categories |
| Secondary | Steuern Schweiz | Categories |

### Schema Markup

```json
{
  "@type": "Blog",
  "name": "SG-WM Ratgeber",
  "description": "Expertenwissen zu Finanzen, Vorsorge und mehr",
  "publisher": {
    "@type": "Organization",
    "name": "Swiss Group Wealth Management AG"
  }
}
```

---

## Sections

### 1. Featured Posts (bento)

**Layout:** 1 large + 2 small (Bento Grid)

```typescript
{
  layout: "bento",
  mainCard: {
    position: "left",
    size: "2x2"
  },
  sideCards: {
    position: "right",
    count: 2,
    stacked: true
  }
}
```

**Responsive:**
| Breakpoint | Layout |
|------------|--------|
| Desktop | 1 large left, 2 stacked right |
| Tablet | 1 large top, 2 side-by-side |
| Mobile | 3 stacked |

---

### 2. Category Filter (pill-tabs)

**Categories:**
```typescript
{
  categories: [
    { id: "all", label: "Alle" },
    { id: "vorsorge", label: "Vorsorge" },
    { id: "steuern", label: "Steuern" },
    { id: "immobilien", label: "Immobilien" },
    { id: "kmu", label: "KMU" },
    { id: "versicherungen", label: "Versicherungen" },
    { id: "nachlass", label: "Nachlass" }
  ]
}
```

**Behavior:**
- URL updates: `/ratgeber?category=vorsorge`
- Filter applies to post grid
- Animated transition

---

### 3. Post Grid (cards)

**Layout:** 3-column card grid with pagination

```typescript
{
  columns: 3,
  postsPerPage: 9,
  cardStyle: {
    image: "top", // 16:9 ratio
    badge: {
      position: "top-left",
      background: "accent"
    },
    title: "h3",
    excerpt: true,
    date: true,
    readTime: true
  }
}
```

**Card Structure:**
```tsx
<article>
  <div className="relative">
    <Image src={post.image} alt={post.title} />
    <Badge className="absolute top-4 left-4">{post.category}</Badge>
  </div>
  <div className="p-6">
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <div className="flex justify-between text-sm text-muted">
      <span>{formatDate(post.date)}</span>
      <span>{post.readTime} Min.</span>
    </div>
  </div>
</article>
```

**Pagination:**
- Style: "Mehr laden" button (not numbered pages)
- Loads 9 more posts
- Scroll position preserved

**Responsive:**
| Breakpoint | Columns |
|------------|---------|
| Desktop | 3 |
| Tablet | 2 |
| Mobile | 1 |

---

## Sanity Integration

### Schema (Blog Post)

```typescript
// sanity/schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text', rows: 3 },
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'blockContent' },
    { name: 'featured', type: 'boolean', initialValue: false },
    { name: 'seo', type: 'object', fields: [
      { name: 'metaTitle', type: 'string' },
      { name: 'metaDescription', type: 'text' },
      { name: 'keywords', type: 'array', of: [{ type: 'string' }] }
    ]}
  ]
}
```

### Queries

```groq
// Featured posts
*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  image,
  category->,
  publishedAt
}

// All posts with filter
*[_type == "post" && ($category == "all" || category->slug.current == $category)]
  | order(publishedAt desc)[$start...$end] {
  _id,
  title,
  slug,
  excerpt,
  image,
  category->,
  publishedAt,
  "readTime": round(length(pt::text(body)) / 5 / 200)
}
```

---

## Components to Create

| Component | Location |
|-----------|----------|
| FeaturedPosts | `components/blog/FeaturedPosts.tsx` |
| CategoryFilter | `components/blog/CategoryFilter.tsx` |
| PostGrid | `components/blog/PostGrid.tsx` |
| PostCard | `components/blog/PostCard.tsx` |
| Pagination | `components/ui/Pagination.tsx` |

---

## Single Post Page

**Path:** `/ratgeber/[slug]`

**Layout:**
- Hero with image
- Title (H1)
- Meta (date, category, read time, author)
- Body (Portable Text)
- Related posts

**SEO:**
- Dynamic meta from Sanity
- Article schema
- Author schema

---

## Image Requirements

| Image | Size | Format |
|-------|------|--------|
| Post Images | 1200x675 (16:9) | WebP |
| Author | 80x80 | WebP |
| OG | 1200x630 | PNG |

---

## Performance

- ISR: Revalidate every 60 seconds
- Images: Next.js Image with blur placeholder
- Infinite scroll: Intersection Observer
