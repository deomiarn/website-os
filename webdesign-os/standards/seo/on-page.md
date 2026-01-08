# On-Page SEO Standards

Guidelines for optimizing individual pages for search engines.

## Title Tags

### Format
```
Primary Keyword - Secondary Info | Brand Name
```

### Rules
- **Length**: 50-60 characters (displayed in SERPs)
- **Primary keyword** near the beginning
- **Unique** for every page
- **Compelling** - encourage clicks

### Examples
```tsx
// Good
<title>Web Design Services - Custom Websites | Agency Name</title>
<title>Complete Guide to React Hooks (2024) | Blog Name</title>
<title>About Our Team - 10+ Years Experience | Company</title>

// Bad
<title>Home</title>  // Too generic
<title>Web Design Services Web Design Company Best Web Design Agency</title>  // Keyword stuffing
<title>The Ultimate Complete Comprehensive Guide to Everything About React</title>  // Too long
```

### Next.js Implementation
```tsx
// Static
export const metadata: Metadata = {
  title: "Web Design Services - Custom Websites | Agency",
}

// With template (layout.tsx)
export const metadata: Metadata = {
  title: {
    default: "Agency Name",
    template: "%s | Agency Name"
  }
}

// Dynamic
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: `${post.title} | Blog`
  }
}
```

## Meta Descriptions

### Rules
- **Length**: 150-160 characters
- Include **primary keyword** naturally
- Include a **call-to-action**
- **Unique** for every page
- Accurately describe page content

### Examples
```tsx
// Good
<meta
  name="description"
  content="Professional web design services for growing businesses. Custom, responsive websites that convert. Get a free quote today."
/>

// Bad
<meta
  name="description"
  content="We do web design."
/>  // Too short, no CTA

<meta
  name="description"
  content="web design, website design, web development, responsive design, custom websites..."
/>  // Keyword stuffing
```

### Next.js Implementation
```tsx
export const metadata: Metadata = {
  description: "Professional web design services for growing businesses. Custom, responsive websites that convert. Get a free quote today.",
}
```

## Heading Structure

### Hierarchy Rules
- **One H1** per page (the main topic)
- **H2s** for major sections
- **H3s** for subsections
- Never skip levels (H1 → H3)

### Example Structure
```tsx
<h1>Complete Guide to React Hooks</h1>

<section>
  <h2>What are React Hooks?</h2>
  <p>Introduction content...</p>

  <h3>History of Hooks</h3>
  <p>History content...</p>

  <h3>Why Hooks Were Introduced</h3>
  <p>Explanation...</p>
</section>

<section>
  <h2>Common Hooks Explained</h2>

  <h3>useState</h3>
  <p>Details...</p>

  <h3>useEffect</h3>
  <p>Details...</p>
</section>

<section>
  <h2>Conclusion</h2>
  <p>Summary...</p>
</section>
```

## URL Structure

### Rules
- **Lowercase** letters
- **Hyphens** to separate words (not underscores)
- **Descriptive** and readable
- **Short** but meaningful
- Include **target keyword**

### Examples
```
✅ Good URLs:
/services/web-design
/blog/react-hooks-guide
/products/running-shoes-mens

❌ Bad URLs:
/services/12345
/blog?id=abc123
/products/Running_Shoes_Mens_2024_New
```

## Content Optimization

### Keyword Placement
1. **Title tag** - primary keyword
2. **H1** - primary keyword (can be different from title)
3. **First 100 words** - primary keyword naturally
4. **Headings (H2, H3)** - related keywords
5. **Throughout content** - natural usage, no stuffing
6. **Alt text** - where relevant
7. **URL** - primary keyword

### Keyword Density
- **1-2% density** is natural
- Focus on **semantic variations**
- Prioritize **readability** over keyword count

### Example
```markdown
# Complete Guide to React Hooks [primary keyword]

React Hooks revolutionized how we write React components. [primary keyword in first 100 words]
In this guide, you'll learn everything about using hooks effectively. [natural flow]

## What are React Hooks? [keyword in H2]

Hooks are functions that let you "hook into" React state and lifecycle features...

## useState Hook Tutorial [related keyword]

The useState hook is the most commonly used hook for managing component state...
```

## Internal Linking

### Rules
- Use **descriptive anchor text** (not "click here")
- Link to **relevant** pages
- **3-5 internal links** per 1000 words
- Link from **high-authority** pages to important pages
- Maintain a **logical site structure**

### Examples
```tsx
// Good
<p>
  Learn more about our{" "}
  <Link href="/services/web-design">professional web design services</Link>
  {" "}or check out our{" "}
  <Link href="/portfolio">recent client projects</Link>.
</p>

// Bad
<p>
  For more info, <Link href="/services">click here</Link>.
</p>
```

## Image Optimization

### Alt Text
- **Descriptive** - what is in the image
- Include **keywords** where natural
- **Under 125 characters**
- Empty for decorative images

### File Names
```
✅ Good:
react-hooks-diagram.jpg
team-photo-2024.jpg
web-design-process-infographic.png

❌ Bad:
IMG_12345.jpg
screenshot.png
image (1).jpg
```

### Next.js Implementation
```tsx
<Image
  src="/web-design-services-hero.jpg"
  alt="Modern website design on laptop and mobile devices"
  width={1200}
  height={630}
/>
```

## Content Quality

### E-E-A-T Principles
- **Experience**: Show real experience with the topic
- **Expertise**: Demonstrate deep knowledge
- **Authoritativeness**: Build credibility
- **Trust**: Be accurate and transparent

### Implementation
```tsx
// Author bylines
<article>
  <header>
    <h1>React Hooks Guide</h1>
    <div className="flex items-center gap-4">
      <Image src="/author.jpg" alt="John Doe" />
      <div>
        <p className="font-semibold">John Doe</p>
        <p className="text-muted-foreground">
          Senior React Developer, 8 years experience
        </p>
      </div>
    </div>
    <time dateTime="2024-01-15">Updated January 15, 2024</time>
  </header>
  {/* Content */}
</article>
```

## Content Length Guidelines

| Page Type | Minimum Words |
|-----------|---------------|
| Blog Post (comprehensive) | 1,500-2,500 |
| Blog Post (quick guide) | 500-1,000 |
| Product Page | 300-500 |
| Category Page | 500-1,000 |
| Service Page | 500-1,000 |
| Homepage | 500+ |

## Checklist

- [ ] Unique, keyword-rich title (50-60 chars)
- [ ] Compelling meta description (150-160 chars)
- [ ] One H1 with primary keyword
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Clean, descriptive URL
- [ ] Keyword in first 100 words
- [ ] 3-5 internal links with descriptive anchor text
- [ ] Images have descriptive alt text
- [ ] Content demonstrates E-E-A-T
- [ ] Appropriate content length for page type
