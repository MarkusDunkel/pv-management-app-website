# PV Management Landing Page

This repository hosts the marketing landing page for the **homewatts.xyz** app, a photovoltaic fleet management platform. The site explains the product value and funnels visitors to the secure demo of the operational dashboard.

## Highlights

- **Bilingual storytelling** (English/German) with persistent language preference via the shared `LanguageContext`.
- **Astro + React + Tailwind** stack for a fast static shell with client-side interactivity where it matters (navigation, modals, Mermaid diagrams).
- **Guided demo flow** that collects an optional `demo-access-key` and opens either the local dev sandbox (`https://localhost:5173`) or the production app (`https://app.homewatts.xyz`).
- **Infrastructure deep dive** rendered with Mermaid to show how telemetry, forecasting, and automation fit together.
- **Component-driven layout** (`AppShell`, `Sidebar`, `SectionHeading`, etc.) so sections remain reusable and testable.

## Tech Stack

- [Astro](https://astro.build/) for static-first routing and rendering
- React 18 for interactive islands
- Tailwind CSS for utility-first styling
- Vitest for unit testing
- Prettier for formatting

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   Astro prints a local URL (default `http://localhost:4321`). Append `?demo-access-key=YOUR_KEY` to mirror the production deep link.
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Quality Tooling

- `npm run lint` – type and integration checks via `astro check`
- `npm run format` / `npm run format:write` – enforce Prettier styles
- `npm run test` – execute Vitest suites (`npm run coverage` for Istanbul reports)

## Project Layout

```
src/
  components/        Reusable UI (AppShell, SectionHeading, Mermaid wrapper, etc.)
  context/           Global providers (LanguageContext) for localization state
  hooks/             Helpers like `useTranslations` for typed copy access
  layouts/           Top-level Astro layouts
  lib/               Utilities (URL helpers, translation dictionaries)
  pages/             Astro routes (landing page entry point in `index.astro`)
  styles/            Tailwind layer configuration
```

## Deployment Notes

- The site is static and can be deployed to any CDN (e.g., Vercel, Netlify, Firebase Hosting – see `firebase.json`).
- Environment detection in `LocalizedContent` switches demo links between the local sandbox and `app.homewatts.xyz`, ensuring CTA buttons always land in the right environment.
