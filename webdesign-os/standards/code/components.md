# Component Standards

Guidelines for building reusable, maintainable UI components.

## Component Principles

### Single Responsibility
Each component should do ONE thing well.

```tsx
// Bad: Component does too much
function UserProfile({ userId }) {
  const user = useUser(userId)        // Fetching
  const posts = usePosts(userId)      // More fetching
  const [tab, setTab] = useState()    // State
  // ... lots of logic
  return (/* massive JSX */)
}

// Good: Composed from focused components
function UserProfile({ userId }) {
  return (
    <ProfileLayout>
      <UserHeader userId={userId} />
      <UserTabs userId={userId} />
      <UserContent userId={userId} />
    </ProfileLayout>
  )
}
```

### Composition Over Configuration

```tsx
// Bad: Prop explosion
<Card
  title="Hello"
  subtitle="World"
  image="/img.jpg"
  imageAlt="Image"
  badge="New"
  badgeColor="green"
  footer="Footer"
  footerAlign="right"
  onClick={() => {}}
/>

// Good: Composition
<Card onClick={() => {}}>
  <CardImage src="/img.jpg" alt="Image" />
  <CardHeader>
    <Badge variant="green">New</Badge>
    <CardTitle>Hello</CardTitle>
    <CardDescription>World</CardDescription>
  </CardHeader>
  <CardFooter className="justify-end">
    Footer
  </CardFooter>
</Card>
```

## Props Design

### Clear, Descriptive Names
```tsx
interface ButtonProps {
  // Semantic variants
  variant: "primary" | "secondary" | "destructive" | "ghost" | "link"
  size: "sm" | "md" | "lg"

  // Boolean props use is/has prefix
  isLoading?: boolean
  isDisabled?: boolean

  // Event handlers use on prefix
  onClick?: () => void
  onFocus?: () => void
}
```

### Default Props
```tsx
interface CardProps {
  variant?: "default" | "outlined" | "elevated"
  padding?: "none" | "sm" | "md" | "lg"
}

function Card({
  variant = "default",
  padding = "md",
  children
}: CardProps) {
  // ...
}
```

### Spread Props Carefully
```tsx
// Allow standard HTML attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
}

function Button({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

## Styling with Tailwind + CVA

Use class-variance-authority for variant-based styling:

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

## File Structure

### Co-located Files
```
components/
├── hero/
│   ├── index.ts          # Exports
│   ├── hero.tsx          # Main component
│   ├── hero-content.tsx  # Sub-component
│   ├── hero-image.tsx    # Sub-component
│   └── types.ts          # Types
└── ui/
    ├── button.tsx        # Simple components = single file
    └── card.tsx
```

### Index Exports
```tsx
// components/hero/index.ts
export { Hero } from "./hero"
export { HeroContent } from "./hero-content"
export { HeroImage } from "./hero-image"
export type { HeroProps } from "./types"
```

## Server vs Client Components

### Default to Server Components
```tsx
// app/page.tsx - Server Component by default
export default async function Page() {
  const data = await fetchData()
  return <Content data={data} />
}
```

### Use Client Only When Needed
```tsx
"use client"

// Only for:
// - useState, useEffect, useRef
// - Event handlers (onClick, onChange)
// - Browser APIs (localStorage, window)
// - Third-party client libraries

import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Composition Pattern
```tsx
// Server Component
import { InteractiveButton } from "./interactive-button"

export async function ProductCard({ id }) {
  const product = await getProduct(id)  // Server-side fetch

  return (
    <div>
      <h2>{product.name}</h2>           {/* Server rendered */}
      <p>{product.description}</p>       {/* Server rendered */}
      <InteractiveButton id={id} />      {/* Client component island */}
    </div>
  )
}

// Client Component
"use client"
export function InteractiveButton({ id }) {
  return <button onClick={() => addToCart(id)}>Add to Cart</button>
}
```

## Accessibility

### Semantic HTML
```tsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
```

### ARIA When Needed
```tsx
// Button with loading state
<button
  disabled={isLoading}
  aria-busy={isLoading}
  aria-label={isLoading ? "Loading..." : "Submit form"}
>
  {isLoading ? <Spinner /> : "Submit"}
</button>

// Icon-only button
<button aria-label="Close menu">
  <XIcon />
</button>
```

### Keyboard Navigation
```tsx
// Ensure interactive elements are focusable
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick()
    }
  }}
>
  Interactive element
</div>

// Better: Just use a button
<button onClick={handleClick}>Interactive element</button>
```

## Testing Considerations

```tsx
// Add data-testid for testing
<button data-testid="submit-button">Submit</button>

// Expose refs when needed
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button ref={ref} {...props}>{children}</button>
  )
)
```

## Checklist

- [ ] Single responsibility
- [ ] Props are well-typed
- [ ] Uses composition over configuration
- [ ] Follows naming conventions
- [ ] Styled with CVA + Tailwind
- [ ] Accessible (semantic HTML, ARIA)
- [ ] Server Component by default
- [ ] Client Component only when needed
