# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 (App Router) barbershop website for "REVEAL" - a premium grooming establishment in Bourgoin-Jallieu, France. The site is built with TypeScript, React 19, Tailwind CSS v4, and Framer Motion for animations.

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **React**: v19.2.3 (latest with React Compiler support)
- **TypeScript**: v5 with strict mode enabled
- **Styling**: Tailwind CSS v4 with inline theme configuration in `globals.css`
- **Animations**: Framer Motion v12
- **Icons**: lucide-react
- **Build**: PostCSS with @tailwindcss/postcss plugin

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

```
reveal-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with font configuration (Inter + Playfair Display)
│   │   ├── page.tsx         # Main page composing all sections
│   │   ├── globals.css      # Tailwind imports + theme variables + global styles
│   │   └── favicon.ico
│   └── components/          # All React components (client components using "use client")
│       ├── Header.tsx       # Fixed header with scroll detection and mobile menu
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Team.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Preloader.tsx    # Loading animation on initial page load
│       ├── ScrollToTop.tsx  # Scroll-to-top button
│       └── AnimatedSection.tsx  # Reusable wrapper for scroll-triggered animations
├── public/                  # Static assets (SVGs, images)
├── tsconfig.json           # TypeScript config with @/* path alias
├── eslint.config.mjs       # ESLint v9 flat config
├── postcss.config.mjs
└── package.json
```

## Architecture & Patterns

### Component Architecture

All components are **client components** (using `"use client"` directive) because they use hooks, Framer Motion animations, or browser APIs. The main page (`page.tsx`) is a simple composition of all section components in order.

### Styling Approach

- **Tailwind CSS v4**: Uses the new inline theme syntax in `globals.css` with CSS custom properties
- **Theme variables**: Defined in `@theme inline` block using semantic names (background, foreground, surface, accent, muted, border)
- **No external tailwind.config file**: Configuration is embedded in CSS using the new v4 syntax
- **Fonts**: Two Google Fonts loaded via `next/font/google` - Inter (body) and Playfair Display (headings)

### Animation Patterns

- **Framer Motion** is used extensively for:
  - Scroll-triggered animations via `whileInView` (see `AnimatedSection.tsx`)
  - Page transitions and micro-interactions
  - Mobile menu overlay with `AnimatePresence`
- **AnimatedSection component**: Reusable wrapper that fades in and slides up elements when they enter the viewport
- **Performance**: Uses `viewport={{ once: true }}` to animate only once and `passive: true` on scroll listeners

### Header Navigation

The Header component implements:
- **Scroll spy**: Uses IntersectionObserver to track which section is currently visible and highlight the corresponding nav link
- **Scroll-based backdrop**: Header background appears after scrolling 50px
- **Mobile menu**: Full-screen overlay with staggered animation on links
- **Active section tracking**: Debounced scroll handler with intersection ratio calculation

### Path Aliases

TypeScript is configured with `@/*` alias mapping to `./src/*`, allowing imports like:
```typescript
import Header from "@/components/Header";
```

## Important Notes

- The site is in **French** - all content, navigation, and metadata use French language
- External booking system: Links to Planity (https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu)
- **No traditional Tailwind config file**: Uses Tailwind v4's new CSS-based configuration
- **Accessibility**: Includes focus-visible styles and respects `prefers-reduced-motion`
- Custom scrollbar styling for webkit browsers
- Logo file: `/public/logo.jpg` (inverted via CSS for dark theme)

## ESLint Configuration

Uses ESLint v9 with flat config format. Extends both `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Ignores `.next/`, `out/`, `build/`, and `next-env.d.ts`.

## TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- Module: ESNext with bundler resolution
- JSX: react-jsx (using new JSX transform)
- Incremental compilation enabled
- Next.js TypeScript plugin configured
