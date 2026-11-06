# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Laith Mimi, built as a Hono app on Cloudflare Pages (Vite + `@hono/vite-build/cloudflare-pages`), deployed at `https://laith-mimi-portfolio.pages.dev`. The visual direction follows the DevSync reference (dark ground, mint `#7AF298` accent, Space Grotesk) per `.specify/memory/constitution.md`. Product context is in `PRODUCT.md`; the active redesign is Spec Kit feature `specs/001-devsync-redesign/`, tracked on the Proda "Portfolio" roadmap.

There is no automated test suite. Verification is manual (see `specs/001-devsync-redesign/quickstart.md`).

## Commands

```bash
npm run dev:css     # terminal 1: Tailwind v4 CLI watch, src/styles/site.css -> public/static/site.css
npm run dev         # terminal 2: Vite dev server running src/index.tsx via @hono/vite-dev-server
npm run build       # build:css + vite build -> dist/
npm run preview     # wrangler pages dev (serves dist/; run build first)
npm run deploy      # build + wrangler pages deploy (only with Laith's go-ahead)
npx -p typescript@5 tsc --noEmit   # ad-hoc type check (one known error: serveStatic options typing in src/index.tsx)
```

`public/static/site.css` is generated (gitignored). Run `npm run build:css` or keep `dev:css` running, or the page renders unstyled.

## Architecture

- `src/index.tsx`: Hono app with routes only. `/` composes the sections in fixed order (spec FR-005), drops empty optional sections, and alternates `bg`/`surface` tones. Other routes: `/sitemap.xml`, `/robots.txt`, `/googled00677178c1e649e.html`, `/api/contact`, `/api/health`.
- `src/seo.ts`: `seo` constants, the five JSON-LD blocks (Person, WebSite, ProfilePage, ItemList, BreadcrumbList), the sitemap and robots builders. Every absolute URL comes from `seo.siteUrl`.
- **Locales**: the page is served in English at `/` and Arabic at `/ar` (`renderPage(c, locale)` in `src/index.tsx`; constitution 1.0.1 "one page per locale"). Interface strings live in `src/i18n/ui.ts`; `getContent(locale)` in `src/content/index.ts` picks `src/content/en/*` or `src/content/ar/*` (the Arabic files are draft translations awaiting Laith's approval). RTL rules sit at the end of `site.css`; Arabic glyphs use the self-hosted Readex Pro. Hono's JSX dedupes `<link>` tags with the same href, so canonical and hreflang are emitted with `raw()` in `Document.tsx`.
- **SEO**: see `specs/001-devsync-redesign/seo-plan.md`. Social cards `public/static/og-{en,ar}.png` are regenerated from the dev-only route `/__og/:locale` with `node .impeccable/build/og.cjs <playwright-dir>`.
- `src/content/*.ts`: **all copy and data**, typed by `src/content/types.ts`. Missing content uses `TBD('note')` from `tbd.ts`, which renders a visible dashed marker (`data-tbd`); launch requires zero markers. Never invent content (constitution V).
- `src/components/`: `Document.tsx` (`<head>`, no-js→js swap, skip link, slots), `primitives.tsx` (Section, SectionHeading, Button, TagList, Index, SlashLinks, ContactRows, Marquee, `T` text renderer), `icons.tsx` (inline SVG).
- `src/sections/*.tsx`: Nav, Hero (bound to the approved comp's measured layout), Skills, Projects + CaseStudy (native `<dialog>`), Services (`<details name>` accordion), Process, Background (Experience/Certifications/Volunteering), Testimonials (renders nothing when empty), Contact + Footer.
- `src/styles/site.css`: Tailwind v4 entry. The `@theme static` block is the **only** place raw colour/size values may appear (constitution II). Component CSS lives in `@layer components`.
- `public/static/site.js`: plain-JS progressive enhancement (reveal, count-up, nav and mobile menu, scrollspy, dialogs). The page must stay fully readable without it.
- Static assets: `public/static/` (font, `img/` photo renditions, `favicon.svg`). `laith-photo-nobg.png` stays as the OG/JSON-LD image.

## Gotchas

- `/impeccable` artifacts live in `.impeccable/` (approved comp `mocks/comp-a.png`, spec, review captures, capture/interaction scripts in `.impeccable/build/`). The surface brief `.impeccable/surfaces/src-index-tsx.md` holds the direction contract; never copy it into shipped code.
- The portrait is Laith's real photo. Never replace it with an AI-generated likeness.
- Desktop hero positions are percentages of the comp frame. Re-run the hero gate (`impeccable build-phase record hero`) after changing them.
- The browser MCP on this machine runs at 0.67 device scale. For 1:1 captures use `node .impeccable/build/capture.cjs <playwright-dir>` (installed Chrome via Playwright).
- Keep the SEO identity intact: exactly one `<h1>` containing "Laith Mimi", the five JSON-LD blocks, canonical/OG/Twitter tags, sitemap, robots and the GSC route.
