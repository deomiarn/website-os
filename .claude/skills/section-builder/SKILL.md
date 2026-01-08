---
name: section-builder
description: Build high-quality, conversion-optimized website sections. Use when creating hero sections, feature grids, testimonials, pricing tables, CTAs, and other common website sections with modern design patterns.
---

# Section Builder

This skill provides patterns and guidelines for building website sections that are visually stunning, highly functional, and optimized for conversions.

## When to Use This Skill

- Creating any website section (hero, features, pricing, etc.)
- Implementing custom section designs from inspiration
- Building responsive section layouts
- Adding animations and interactions to sections

## Core Principles

### 1. Section Anatomy

Every section should have:
```tsx
<section className="relative py-section-md overflow-hidden">
  {/* Optional: Background layer */}
  <div className="absolute inset-0 -z-10">
    {/* Gradients, patterns, images */}
  </div>

  {/* Container */}
  <div className="container mx-auto px-4">
    {/* Section header (optional) */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-sm font-medium text-primary">Label</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Headline</h2>
      <p className="text-muted-foreground mt-4">Supporting text</p>
    </div>

    {/* Section content */}
    <div className="grid ...">
      {/* Content */}
    </div>
  </div>
</section>
```

### 2. Hero Section Patterns

**Pattern A: Split Hero (Image + Text)**
```tsx
<section className="min-h-[90vh] flex items-center">
  <div className="container grid lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <Badge>New Feature</Badge>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Compelling headline that <span className="text-primary">captures attention</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-lg">
        Supporting description that explains the value proposition clearly.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="lg">Primary CTA</Button>
        <Button size="lg" variant="outline">Secondary CTA</Button>
      </div>
    </div>
    <div className="relative">
      <Image src="..." alt="..." className="rounded-2xl shadow-2xl" />
    </div>
  </div>
</section>
```

**Pattern B: Centered Hero**
```tsx
<section className="min-h-[90vh] flex items-center justify-center text-center">
  <div className="container max-w-4xl space-y-8">
    <Badge className="mx-auto">Announcement</Badge>
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
      Bold statement headline
    </h1>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
      Description text that provides context and builds interest.
    </p>
    <div className="flex justify-center gap-4">
      <Button size="lg">Get Started</Button>
    </div>
  </div>
</section>
```

**Pattern C: Video/Media Hero**
```tsx
<section className="relative min-h-screen flex items-center">
  <video
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="..." type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative container text-white text-center">
    {/* Content */}
  </div>
</section>
```

### 3. Feature Section Patterns

**Grid Layout:**
```tsx
<section className="py-section-lg">
  <div className="container">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2>Features</h2>
      <p>Description</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.id} className="p-6 rounded-2xl border bg-card">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Bento Grid:**
```tsx
<div className="grid grid-cols-4 grid-rows-3 gap-4">
  <div className="col-span-2 row-span-2 bg-card rounded-2xl p-8">
    {/* Large feature */}
  </div>
  <div className="col-span-2 bg-card rounded-2xl p-6">
    {/* Medium feature */}
  </div>
  <div className="bg-card rounded-2xl p-6">
    {/* Small feature */}
  </div>
  <div className="bg-card rounded-2xl p-6">
    {/* Small feature */}
  </div>
</div>
```

### 4. Testimonial Patterns

**Carousel:**
```tsx
<section className="py-section-lg bg-muted/50">
  <div className="container">
    <Carousel>
      {testimonials.map((t) => (
        <Card key={t.id} className="p-8">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-lg mb-6">"{t.quote}"</blockquote>
          <div className="flex items-center gap-4">
            <Avatar src={t.avatar} />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  </div>
</section>
```

**Grid with Masonry:**
```tsx
<div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
  {testimonials.map((t) => (
    <Card key={t.id} className="break-inside-avoid">
      {/* Testimonial content */}
    </Card>
  ))}
</div>
```

### 5. Pricing Section

```tsx
<section className="py-section-lg">
  <div className="container">
    <div className="text-center mb-12">
      <h2>Simple, transparent pricing</h2>
      <div className="flex justify-center gap-2 mt-4">
        <Button variant={billing === 'monthly' ? 'default' : 'outline'}>
          Monthly
        </Button>
        <Button variant={billing === 'yearly' ? 'default' : 'outline'}>
          Yearly (Save 20%)
        </Button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className={cn(
            "p-8",
            plan.popular && "border-primary shadow-lg scale-105"
          )}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
              Most Popular
            </Badge>
          )}
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="text-muted-foreground mt-2">{plan.description}</p>
          <div className="my-6">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
            Get Started
          </Button>
        </Card>
      ))}
    </div>
  </div>
</section>
```

### 6. CTA Section

**Simple CTA:**
```tsx
<section className="py-section-lg bg-primary text-primary-foreground">
  <div className="container text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to get started?
    </h2>
    <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
      Join thousands of satisfied customers today.
    </p>
    <div className="flex justify-center gap-4">
      <Button size="lg" variant="secondary">
        Start Free Trial
      </Button>
    </div>
  </div>
</section>
```

### 7. Responsive Patterns

**Mobile-First Grid:**
```css
/* Stack on mobile, side-by-side on larger screens */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Tailwind Responsive:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### 8. Visual Enhancements

**Gradient Backgrounds:**
```tsx
{/* Mesh gradient */}
<div className="absolute inset-0 -z-10">
  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
</div>
```

**Noise Texture:**
```css
.noise-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
```

## Quality Checklist

- [ ] Section has clear visual hierarchy
- [ ] Content is readable at all breakpoints
- [ ] Proper spacing between elements
- [ ] CTAs are prominent and action-oriented
- [ ] Images are optimized and have alt text
- [ ] Animations enhance, not distract
- [ ] Accessible color contrast
- [ ] Mobile-first responsive design
