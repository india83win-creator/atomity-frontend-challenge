# Atomity Frontend Engineering Challenge

This repository contains my submission for the Atomity Frontend Engineering Challenge. I have architected and designed a premium, highly-interactive mock platform tailored specifically for a B2B Cloud Optimization SaaS.

## 🚀 Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎨 Design Philosophy & Aesthetics
To match the cutting-edge nature of a cloud infrastructure company like Atomity, I enforced a strict, premium **Dark Mode** aesthetic utilizing **Glassmorphism**.
- **Liquid Animated Backgrounds:** Custom CSS animations create a slow-pulsing, organic background using CSS `blur` and `mix-blend-mode`, giving the platform a "living" feel.
- **Glass Panels:** Custom CSS utility classes (`glass-card`, `glass-panel`) provide frosted glass transparency with subtle borders and drop shadows, ensuring content pops against the dark background.
- **Micro-Animations:** Implemented pure CSS keyframe animations (`animate-fade-in-up`, `animate-scale-in`) so every page load and modal interaction feels incredibly smooth and premium without requiring heavy animation libraries.

---

## 🛠️ Key Features Implemented

### 1. Interactive Pricing Checkout Flows (`/pricing`)
I completely overhauled the pricing section to mimic a real production application:
- **Mock Checkout UI:** The "Pro" tier opens a beautiful split-pane checkout modal.
- **Strict Form Validation:** The checkout form requires a valid 16-digit credit card, `MM/YY` expiry, and 3-4 digit CVC. The UPI option requires a valid `@` string. Submission is blocked dynamically on failure.
- **B2B Email Enforcement:** The "Enterprise" tier opens a lead generation form. It actively blocks common personal email domains (like `@gmail.com` and `@yahoo.com`), forcing users to provide a legitimate company email.

### 2. Intelligent Scheduling Calendar (`/demo`)
I built a completely custom React calendar component from scratch to handle demo bookings:
- **Strict Real-World Logic:** Prevents users from navigating to past months.
- **Bounding Limits:** Dynamically calculates a hard 3-month future limit, disabling dates beyond that window to ensure realistic sales pipelines.
- **Persistent State:** Safely stores the selected date and time using React state (`useState`), ensuring smooth UI updates and conditional rendering (e.g. only showing the time picker after a date is selected).

### 3. Dedicated Pro Workspace (`/pro-workspace`)
To showcase application routing and post-checkout user flows, successfully checking out on the Pricing page routes the user to a mock dashboard.
- Displays realistic telemetry data (Active Nodes, Uptime, Projected Savings).
- Features external links (`target="_blank"`) directly to the official AWS and Google Cloud consoles for a realistic integration feel.

---

## 🏗️ Technical Stack & Architecture

- **Next.js (App Router):** Leveraged the latest App Router architecture for seamless page transitions and structured routing.
- **React (Client Components):** Used `'use client'` where necessary to handle complex local state (modals, calendars, form validations, toast notifications).
- **Tailwind CSS:** Used extensively for all responsive layout grids and utility styling.
- **Custom CSS (`globals.css`):** Extracted recurring complex styles (glassmorphism rules, keyframe animations) into clean, reusable CSS classes to keep the React code easily readable.
- **Lucide React:** Utilized consistent, modern SVG iconography throughout the platform.

---

## 💡 Tradeoffs & Decisions
- **No External UI Component Libraries:** Instead of installing Radix UI or Material UI, I built the modals, toast notifications, and calendar entirely from scratch. This demonstrates a deep understanding of underlying React state management and CSS styling.
- **No Heavy Animation Libraries:** Instead of pulling in Framer Motion, I opted to write native CSS keyframe animations (`fade-in-up`, `scale-in`). This drastically reduces the JavaScript bundle size while achieving the same premium feel.

---

## 🔮 What I would improve with more time
- **Global State Management:** Move modal and user authentication state to React Context or Zustand to allow seamless data sharing across multiple routes.
- **Component Extraction:** Break the large `PricingPage` and `DemoPage` files down into smaller, granular components (`<CheckoutModal />`, `<CalendarWidget />`) for better testability and reusability.
- **Testing:** Add comprehensive unit tests for the calendar logic and form validation rules using Jest and React Testing Library.
