# Atomity Frontend Engineering Challenge

This repository contains my submission for the Atomity Frontend Engineering Challenge.

## Live Demo
[Insert Vercel Live URL Here]

## Which feature I chose and why
Since I am simulating this without visual reference, I chose to implement a highly dynamic **Cloud Infrastructure Optimization & Monitoring** section. This aligns directly with Atomity's product core and showcases complex scrolling animations, dynamic metrics, and server cluster health.

## My approach to animation
I used **Framer Motion** to orchestrate all animations:
1. **Scroll Triggers**: Used `whileInView` with viewport offsets so the animations only trigger when the user actually reaches the section.
2. **Staggered Entrance**: The data cards use a staggered delay based on their index to create a cascading reveal effect.
3. **Micro-interactions**: Added spring-based scaling on hover states for the cards to provide a premium and responsive feel.
4. **Number Counters**: Used Framer Motion's `useSpring` and `useTransform` to create a smooth number counting animation for metrics like CPU load and cost savings.

## How I structured tokens/styles
I utilized **Tailwind CSS v4's modern CSS variables architecture**. 
In `globals.css`, I defined all my colors, border radii, and fonts as standard CSS variables inside Tailwind's `@theme` directive. This ensures:
- No hardcoded hex values in components.
- Seamless Dark/Light mode integration simply by overriding the root CSS variables in the `.dark` class.
- Reusable semantic token names like `bg-primary`, `accent-success`, and `text-secondary`.
I also utilized modern CSS features like `@container` for responsive component sizing (instead of relying solely on window queries), `clamp()` for fluid typography, and `color-mix()` for glassmorphism effects.

## How I handled data fetching and caching
I used **TanStack Query (React Query)** to handle data fetching from `JSONPlaceholder` (simulating a cloud infrastructure API endpoint). 
- **Caching**: The query client is configured with a `staleTime` of 60 seconds and `refetchOnWindowFocus: false` to avoid redundant requests.
- **States**: The component gracefully handles loading states (using a shimmer/pulse skeleton) and error boundaries.

## Libraries used and why
- **Next.js (App Router)**: For a modern, performant React architecture.
- **Tailwind CSS v4**: For rapid styling and robust design token management.
- **Framer Motion**: For declarative and performant animations that handle scroll events natively.
- **TanStack Query**: For robust, production-ready async state management and caching.
- **Lucide React**: For clean, modern SVG icons that match the premium aesthetic.
- **clsx / tailwind-merge**: To easily compose conditional Tailwind classes inside custom components without style conflicts.

## Tradeoffs or decisions I made
- Used a generic public API (`JSONPlaceholder`) and mapped its properties (`id`, `username`) to my domain models (`uptime`, `cpu load`, `node name`) rather than building a custom mock backend.
- Simplified the dark mode toggle to use a basic React state and CSS class toggling rather than adding `next-themes` to keep the dependency footprint small and demonstrate manual token architecture.

## What I would improve with more time
- Add more complex data visualization (e.g., using Recharts for a historical CPU load graph).
- Implement a 3D visualizer using Three.js / React Three Fiber for a literal "cloud node" topology map.
- Add comprehensive unit and integration tests (Jest / Playwright).
- Enhance the accessibility with full keyboard navigation and ARIA live regions for the dynamic data.
