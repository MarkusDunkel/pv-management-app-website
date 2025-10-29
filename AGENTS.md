# Repository Guidelines

This document serves as a contributor and setup guide for this Astro-based static website project.

---

## Project Overview

This repository contains a **single-page Astro website** built with **Tailwind CSS** and **shadcn/ui**.  
The page is **responsive**, **scrollable**, and composed of multiple vertically stacked sections.  
A **sidebar** is shown on desktop, while a **top navigation bar** with a dropdown menu appears on mobile.
The site includes only static assets (text, images, links) — no backend or CMS.

---

## Project Structure & Module Organization

```
/
├─ public/                # Static assets (images, icons, etc.)
├─ src/
│  ├─ components/         # UI components (Sidebar, MobileTopbar, etc.)
│  ├─ layouts/            # Layout wrappers
│  ├─ pages/              # Page routes (index.astro)
│  ├─ styles/             # Tailwind and global CSS
│  └─ lib/                # Optional utilities
├─ package.json
├─ astro.config.mjs
└─ tailwind.config.mjs
```
Each section of the single page is defined in `index.astro`.

---

## Page Content & Sections

The site consists of **five vertically stacked sections**, navigable via the sidebar or mobile menu.

### 1. About
- **Header:** `Photovoltaik Surveillance and Analytics`
- **Purpose:** Introduces the project and invites interaction.
- **Content:** Intro paragraph + prominent **“Try the Demo”** button.
- **Visuals:** Hero banner; include 1 key image (e.g., solar array) with descriptive alt text.

### 2. Features
- **Purpose:** Showcase capabilities.
- **Structure:** Cards (icon, title, 2–3 lines).
- **Examples:** Real-time visualization, anomaly detection, remote monitoring, trend analytics.
- **Visuals:** Small illustrative images or diagrams where relevant.

### 3. Infrastructure
- **Purpose:** Explain architecture & deployment.
- **Content:** Paragraph + **diagram/figure** + secondary **“View on GitHub”** button (muted/outline).
- **Visuals:** Architecture graphic placed above or beside the text.

### 4. Key Challenges
- **Purpose:** Demonstrate problem-solving.
- **Format:** Subsections per challenge (3–5 sentences). Optional code snippets/mini-diagrams.

### 5. About the Developer
- **Purpose:** Personal profile.
- **Content:** Short bio; links to GitHub, LinkedIn, Email; optional photo/avatar.

---

## Design & Theming

- **Modes:** Support **dark** and **light** mode (system-preference + toggle).
- **Palette:** Neutral grays for surfaces; **strong accent** color for primary actions (e.g., “Try the Demo”) and links on hover.
- **Accessibility:** Maintain 4.5:1 contrast; ensure focus rings are visible in both modes.
- **Tailwind:** Centralize tokens in `tailwind.config` and CSS variables (e.g., `--background`, `--foreground`, `--accent`).

---

## Build, Test & Development Commands

```bash
npm install            # deps
npm run dev            # local dev
npm run build          # prod build -> ./dist
npm run preview        # preview build
npm run lint && npm run format
```

---

## Code Style & Conventions

- **Stack:** Astro + React islands; Tailwind + shadcn/ui.
- **Indentation:** 2 spaces; files `kebab-case`, components `PascalCase`, variables `camelCase`, constants `UPPER_CASE`.
- **Imports:** Prefer `@/` alias; include ARIA labels; images in `public/images/` with meaningful alt text.

---

## Testing & QA

- **Tools:** Vitest (unit), Playwright (optional e2e). Target ≥ 80% coverage.
- **Placement:** Component tests under `src/components/__tests__/`; integration under `tests/`.
- **Commands:** `npm run test`, `npm run coverage`.

---

## Contribution Workflow

1. Branch: `feat/<feature>` or `fix/<issue>`.
2. Update tests/docs; verify `npm run lint && npm run build`.
3. PR with summary, screenshots (light/dark), and notes for new images/sections.

---

## Deployment

Host static `dist/` on **Google Cloud Storage (GCS)** or **Firebase Hosting** (HTTPS/CDN, low cost). No server runtime required.
