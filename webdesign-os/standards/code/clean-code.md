# Clean Code Standards

Guidelines for writing maintainable, readable, and consistent code.

## Component Structure

### File Organization
```tsx
// 1. Imports (grouped and ordered)
import { useState, useEffect } from "react"        // React
import { motion } from "framer-motion"              // Third-party
import { Button } from "@/components/ui/button"    // Internal UI
import { cn } from "@/lib/utils"                   // Utilities
import type { ComponentProps } from "./types"      // Types

// 2. Types/Interfaces
interface HeroProps {
  title: string
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
}

// 3. Constants (if component-specific)
const ANIMATION_DURATION = 0.5

// 4. Component
export function Hero({ title, subtitle, cta }: HeroProps) {
  // 4a. Hooks
  const [isVisible, setIsVisible] = useState(false)

  // 4b. Derived state / computations
  const hasSubtitle = Boolean(subtitle)

  // 4c. Effects
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // 4d. Event handlers
  const handleClick = () => {
    // ...
  }

  // 4e. Render
  return (
    <section>
      {/* JSX */}
    </section>
  )
}
```

## Naming Conventions

### Files & Folders
- **Components**: PascalCase → `Hero.tsx`, `FeatureCard.tsx`
- **Utilities**: camelCase → `formatDate.ts`, `cn.ts`
- **Constants**: SCREAMING_SNAKE_CASE in file → `constants.ts`
- **Types**: PascalCase → `types.ts` (or co-located)

### Variables & Functions
```tsx
// Components: PascalCase
function HeroSection() {}

// Functions: camelCase, verb-first
function formatPrice(amount: number) {}
function handleSubmit(e: FormEvent) {}
function getUserById(id: string) {}

// Booleans: is/has/should prefix
const isLoading = true
const hasError = false
const shouldRender = true

// Constants: SCREAMING_SNAKE_CASE
const MAX_ITEMS = 10
const API_BASE_URL = "https://..."

// Event handlers: handle + Event
const handleClick = () => {}
const handleChange = () => {}
const handleSubmit = () => {}
```

### Props
```tsx
// Descriptive, specific names
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost"  // Not: type, kind
  size: "sm" | "md" | "lg"                    // Not: s, m, l
  isLoading?: boolean                         // Not: loading
  isDisabled?: boolean                        // Not: disabled
  onClick?: () => void                        // Not: click, onPress
}
```

## DRY (Don't Repeat Yourself)

### Extract Repeated Logic
```tsx
// Bad: Repeated formatting
<p>{new Date(post.createdAt).toLocaleDateString()}</p>
<p>{new Date(post.updatedAt).toLocaleDateString()}</p>

// Good: Utility function
const formatDate = (date: string) => new Date(date).toLocaleDateString()
<p>{formatDate(post.createdAt)}</p>
<p>{formatDate(post.updatedAt)}</p>
```

### Extract Repeated Components
```tsx
// Bad: Repeated structure
<div className="p-4 border rounded-lg">
  <h3>{item1.title}</h3>
  <p>{item1.description}</p>
</div>
<div className="p-4 border rounded-lg">
  <h3>{item2.title}</h3>
  <p>{item2.description}</p>
</div>

// Good: Reusable component
function Card({ title, description }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```

## Small Functions

Functions should do ONE thing well.

```tsx
// Bad: Function does too much
function processAndDisplayUser(userId: string) {
  const user = await fetchUser(userId)
  const formattedName = `${user.firstName} ${user.lastName}`
  const avatar = user.avatar || "/default-avatar.png"
  logAnalytics("user_viewed", userId)
  return <UserCard name={formattedName} avatar={avatar} />
}

// Good: Single responsibility
async function fetchUser(userId: string) { /* ... */ }
function formatUserName(user: User) { return `${user.firstName} ${user.lastName}` }
function getAvatarUrl(user: User) { return user.avatar || "/default-avatar.png" }
function UserCard({ name, avatar }: UserCardProps) { /* ... */ }
```

## Early Returns

Reduce nesting with early returns.

```tsx
// Bad: Deep nesting
function getDiscount(user: User) {
  if (user) {
    if (user.isPremium) {
      if (user.yearsActive > 5) {
        return 0.3
      } else {
        return 0.2
      }
    } else {
      return 0.1
    }
  }
  return 0
}

// Good: Early returns
function getDiscount(user: User) {
  if (!user) return 0
  if (!user.isPremium) return 0.1
  if (user.yearsActive > 5) return 0.3
  return 0.2
}
```

## Consistent Formatting

Use Prettier and ESLint with strict rules:

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

## Import Organization

```tsx
// 1. React/Next
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// 2. Third-party libraries
import { motion } from "framer-motion"
import { z } from "zod"

// 3. Internal - absolute imports (@/)
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

// 4. Internal - relative imports
import { Hero } from "./hero"
import type { PageProps } from "./types"

// 5. Styles (if any)
import "./styles.css"
```

## Type Safety

```tsx
// Always type props
interface Props {
  items: Item[]
  onSelect: (item: Item) => void
}

// Use const assertions for literals
const SIZES = ["sm", "md", "lg"] as const
type Size = (typeof SIZES)[number] // "sm" | "md" | "lg"

// Avoid `any` - use `unknown` if truly unknown
function handleData(data: unknown) {
  if (isValidData(data)) {
    // Now TypeScript knows the type
  }
}
```

## Checklist

- [ ] Components have single responsibility
- [ ] Files follow naming conventions
- [ ] No duplicate code (DRY)
- [ ] Functions are small and focused
- [ ] Early returns reduce nesting
- [ ] Imports are organized
- [ ] Types are explicit (no `any`)
- [ ] Code is formatted consistently
