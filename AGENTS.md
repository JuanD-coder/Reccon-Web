# AGENTS.md - Developer Guidelines

This document provides guidelines for AI agents working on the RecCon landing page project.

## Project Overview

- **Project name**: RecCon Landing Page
- **Type**: Next.js 16 web application (React 19)
- **Purpose**: Landing page for RecCon - a mobile app for coffee harvest management
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Package manager**: pnpm

---

## Build/Lint/Test Commands

### Development
```bash
pnpm dev        # Start dev server with Turbo (Next.js 16 turbo mode)
```

### Production
```bash
pnpm build      # Build for production
pnpm start      # Start production server
```

### Linting
```bash
pnpm lint       # Run Next.js linting (ESLint)
```

### Running a Single Test
There are no test frameworks configured (no Vitest, Jest, or Playwright found). Tests can be added using:
```bash
pnpm add -D vitest @testing-library/react jsdom
```

---

## Code Style Guidelines

### TypeScript
- **Strict mode**: Enabled in `tsconfig.json` (`"strict": true`)
- Always use explicit types for function parameters and return types
- Use `type` for unions, intersections, and type aliases
- Use `interface` for object shapes that may be extended
- Prefer `import { type Foo }` over `import { Foo }` when only using types

### React/Next.js
- Use `"use client"` directive for client components
- Use Server Components by default; only add `"use client"` when needed
- Use Next.js `<Image />` component for all images (with `priority` for above-fold images)
- Use the `@/*` path alias (configured in `tsconfig.json`)

### Component Structure
```typescript
// Client component example
"use client"

import { motion } from "framer-motion"
import { SomeIcon } from "lucide-react"

interface HeroProps {
  title: string
}

export function Hero({ title }: HeroProps) {
  return (
    <section>
      <motion.div>
        {/* content */}
      </motion.div>
    </section>
  )
}
```

### Imports Organization
Order imports as follows:
1. React/Next imports (`"use client"`, imports from `react`, `next/*`)
2. Third-party imports (framer-motion, lucide-react, etc.)
3. Relative imports from project (`@/components/*`, `@/lib/*`)
4. Public assets imports (`../../public/*`)

### Naming Conventions
- **Components**: PascalCase (`HeroSection`, `ContactForm`)
- **Files**: kebab-case for components (`hero-section.tsx`), camelCase for utilities (`utils.ts`)
- **CSS Classes**: Tailwind utility classes preferred
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for compile-time constants

### Styling with Tailwind CSS
- Use Tailwind utility classes for all styling
- Use `cn()` utility from `@/lib/utils` for conditional classes:
  ```typescript
  import { cn } from "@/lib/utils"
  
  <div className={cn("base-class", isActive && "active-class")} />
  ```
- Use CSS variables for theme colors: `text-foreground`, `bg-primary`, `text-muted-foreground`
- Avoid arbitrary values; use Tailwind's built-in scale/spacing

### Framer Motion Animations
- Use `motion.` prefix for animated elements
- Common patterns:
  ```typescript
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  />
  ```

### UI Components
This project uses Radix UI primitives wrapped in custom components:
- All UI components live in `components/ui/`
- Use shadcn/ui-style patterns (component + props interface)
- Import icons from `lucide-react`

### Error Handling
- Use TypeScript's strict null checks
- Handle loading states for client-side data
- Use proper TypeScript types instead of `any`

### Accessibility
- Always include `aria-label` for icon-only buttons
- Use semantic HTML elements (`<section>`, `<nav>`, `<main>`, etc.)
- Ensure sufficient color contrast

---

## Project Structure

```
reccon-landing-page/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components (Radix-based)
│   └── landing/          # Landing page sections
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets (images, icons)
├── utils/                # Animation utilities
└── tailwind.config.ts    # Tailwind configuration
```

---

## Key Dependencies

- **UI Components**: Radix UI primitives (`@radix-ui/react-*`)
- **Icons**: `lucide-react`
- **Animations**: `framer-motion`
- **Forms**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **Styling**: `tailwindcss` + `tailwind-merge` + `clsx` + `class-variance-authority`
- **Theming**: `next-themes`

---

## Common Tasks

### Adding a New Landing Section
1. Create component in `components/landing/` (e.g., `features.tsx`)
2. Export as named function with Props interface
3. Import and add to `app/page.tsx`

### Adding a New UI Component
1. Check if Radix UI has a primitive: `npx shadcn@latest add [component]`
2. Or create manually following patterns in `components/ui/`

### Adding New Dependencies
```bash
pnpm add <package>        # Production dependency
pnpm add -D <package>     # Dev dependency
```

---

## VS Code Extensions (Recommended)

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (or similar for Next.js)
