# Research: DevSync-Style Portfolio Redesign

**Feature**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Date**: 2026-11-06

Every unknown from the plan's Technical Context is resolved below. Each entry gives the decision, why it was chosen, and what else was considered.

---

## R1. Reference measurements (spacing, type, radii)

**Decision**: Use the values measured from the live reference at 1440px wide on 2026-11-06 (raw output: [reference/measure-1440.json](./reference/measure-1440.json)):

| Item | Measured value |
|---|---|
| Section vertical padding | 120px top and bottom |
| Hero padding | 160px top, 80px bottom |
| Content container | max 1280px, 16px side gutter (hero and nav: max 1600px) |
| Section header → content gap | 56px; eyebrow/title → divider gap 32px |
| Section divider | 2px line, `#505559` |
| Hero greeting / role line | 24px / 33.6px, weight 700, white |
| Hero name (h1) | 168px / 1.0, weight 700, mint `#7AF298` |
| Name ticker | 80px / 1.0, weight 700, `#B5B5B5`, repeated horizontally |
| Section H2 | 48px / 54px, weight 700, white |
| `</` `>` glyphs | 16px / 18px, weight 600, mint |
| Eyebrow (`// Skills`) | 16px / 25.6px, weight 400, mint |
| Card title (H3) | 22px / 30.8px, weight 700 |
| Body / card description | 16px / 25.6px, weight 400 (white body text, `#B5B5B5` card descriptions) |
| Skill pill text | 14px / 19.6px, weight 400 |
| Skill group label / contact rows / scroll cue | 16px, weight 600 |
| Pill background | `rgba(112,112,112,0.3)`, radius ≈ 43px (fully rounded) |
| Section backgrounds | alternate between `#191818` (hero, process) and `#111111` (services) |
| Other neutrals in use | `#25282B`, `#3A3B3C`, `#505559` |
| Fonts | Space Grotesk only |

The Proda start note lists display sizes of 158, 110 and 60px. Those match the hero name at smaller breakpoints, so the name uses a fluid size that reaches 168px at 1440px and wider.

**Rationale**: Measured values beat guesses and satisfy the constitution's design-fidelity rule. Full-page screenshots at 1440px and 390px are still needed for the side-by-side QA gate. They are the first build task (Proda "Capture the DevSync design reference"), because the screenshot taken during planning came out blank.

**Alternatives considered**: Copying values from the Framer template's marketing copy (rejected: it gives no numbers). Eyeballing values from screenshots (rejected: less accurate).

## R2. Reference behaviours we do NOT copy

**Decision**:
- **Navigation**: the reference has a non-sticky header with a single "Menu" button. We follow the spec (FR-006): a sticky bar with in-page links and a "Start Project" call-to-action, which collapses to a menu button below 768px.
- **Name ticker**: the reference repeats the name as 12 visible `<h2>` elements. Ours is decorative: one `aria-hidden` element with no heading tags, so the page keeps exactly one `<h1>` and no duplicate headings (constitution Principle III).
- **Multi-page structure, template-sales footer, sample identity**: dropped, as the spec requires (FR-005, FR-016, FR-017).

**Rationale**: These reference choices conflict with the spec, accessibility or SEO. The visual language survives without them.

## R3. Rendering approach: template literal → Hono JSX components

**Decision**: Rebuild the page with `hono/jsx` server-rendered components (one file per section) in place of the single 2,000-line template literal. `tsconfig.json` already sets `jsxImportSource: "hono/jsx"`, so no new dependency is needed.

**Rationale**:
- JSX escapes interpolated content automatically, so the "unescaped backtick / `${`" hazard (constitution, Technical Constraints) no longer applies to markup.
- Sections can be built, reviewed and compared one at a time, which matches the Proda roadmap's per-section tasks.
- Content becomes typed props from data files (constitution Principle V, spec FR-018).

**Alternatives considered**: Keep the template literal and split it into string-returning functions (rejected: keeps the escaping hazard and gives no type safety). A client framework (rejected: forbidden by Principle I).

**Notes**: JSON-LD is emitted with `dangerouslySetInnerHTML` from `JSON.stringify(...)`, with `<` escaped as `<`, so the data cannot close the script tag. The doctype is emitted with `raw('<!DOCTYPE html>')`.

## R4. Styling: Tailwind built at compile time, tokens defined once

**Decision**: Replace the Tailwind Play CDN script with the Tailwind v4 standalone build (`tailwindcss` + `@tailwindcss/cli` as **dev** dependencies). One source stylesheet, `src/styles/site.css`, defines every token in a `@theme` block and the shared patterns in `@layer components`. It compiles to `public/static/site.css`, which is gitignored and built before `vite build`.

**Rationale**:
- Tailwind v4's `@theme` turns each token into a CSS custom property and a utility class from the same line. That meets "defined once as CSS custom properties, mirrored in the Tailwind theme" (Principle II) with no duplication.
- The Play CDN runs a ~100 KB+ JIT compiler in the visitor's browser on every load. It is the largest single risk to the Lighthouse ≥ 90 mobile target (SC-004). A compiled, minified stylesheet is typically 10–20 KB.
- These are build-time tools only; the deployed worker's runtime dependencies stay at `hono` alone (Principle I).

**Alternatives considered**:
- Keep the CDN (rejected: performance).
- `@tailwindcss/vite` plugin (rejected for now: `@hono/vite-build` builds the server bundle, and getting a client CSS asset out of it needs a second client-mode Vite build. The standalone CLI writing into `public/` is simpler and already works with how `public/` is deployed).
- Hand-written CSS without Tailwind (rejected: the constitution names Tailwind as the styling tool).

## R5. Fonts and icons

**Decision**:
- **Space Grotesk**: self-host the variable-weight woff2 (Latin subset, weights 300–700, SIL OFL) at `public/static/fonts/`, with `<link rel="preload" as="font" crossorigin>` and `font-display: swap`. Fallback stack: `system-ui, sans-serif`, with size-adjust metrics to limit layout shift.
- **Icons**: replace Font Awesome (CDN CSS plus web fonts, ~100 KB) with about 10 inline SVG icons in one `icons.tsx` (GitHub, LinkedIn, X, mail, phone, arrow, close, menu, external link, download). Brand paths come from Simple Icons (CC0).

**Rationale**: Both changes remove render-blocking third-party requests. Self-hosting allows a same-origin preload, which matters most for the giant hero name (likely the largest contentful paint). The constitution allows Google Fonts and Font Awesome but does not require them.

**Alternatives considered**: Google Fonts CSS with preconnect (acceptable fallback, but needs an extra origin and cannot be preloaded as reliably). Keeping Font Awesome (rejected: weight versus the 10 icons actually used).

## R6. Interactive patterns with no-JS fallbacks

| Pattern | Decision | Without JS | Reduced motion |
|---|---|---|---|
| Services accordion (FR-010) | Native `<details name="services">` exclusive accordion (only one open at a time; Chrome 120+, Safari 17.2+, Firefox 130+). Older browsers allow several open, which is acceptable. | Works natively | Open/close has no animation beyond an icon rotate, and that is disabled |
| Case-study overlays (FR-009, FR-021) | Native `<dialog>` opened with `showModal()`. It traps focus and closes on Escape natively; the script also returns focus to the trigger and closes on backdrop click. Each card is an `<a href="#case-{slug}">` that the script upgrades to open the dialog. | A `<noscript>` style shows every case study as a normal block after the project grid, so the card links jump to it | Dialog has no entrance animation |
| Testimonials marquee (FR-013) | CSS `@keyframes` on a track holding the list twice (the second copy `aria-hidden`). Pauses on `:hover` and `:focus-within`. | Animation is CSS-only, so it still runs | No animation: the list becomes a horizontally scrollable, scroll-snapped row |
| Count-up stats (FR-008) | Server renders final values. An IntersectionObserver animates 0→value once on first view. | Final values shown | Final values shown, no animation |
| Scroll reveal (FR-020) | Elements with `data-reveal` start hidden **only** under `html.js`. An IntersectionObserver adds `is-visible`. | Content always visible | No reveal transform or fade |
| Sticky nav background and mobile menu (FR-006) | A scroll listener (passive, throttled with requestAnimationFrame) toggles `is-scrolled`. The menu button sets `aria-expanded` and controls the panel. | Bar uses its solid background, the menu button is hidden, and the links wrap | Not applicable |
| Name ticker (decorative) | Same CSS marquee as testimonials, `aria-hidden` | Runs (CSS) | Static |

A small inline script in `<head>` swaps `html.no-js` for `html.js` before first paint. It is the only inline script; everything else is in `public/static/site.js`, loaded with `defer`.

**Rationale**: Native elements give keyboard support, focus handling and screen-reader state for free (FR-021) and work without JS (FR-023). That keeps `site.js` to a few kilobytes of plain JavaScript (Principle I).

**Alternatives considered**: Custom ARIA accordion and modal (rejected: more code and more ways to get accessibility wrong). Third-party marquee or animation libraries such as GSAP (rejected: a dependency for effects CSS already handles).

## R7. Contrast verification (FR-022, SC-005)

**Decision**: The token palette passes WCAG 2.2 AA for every intended text/background pair (computed 2026-11-06):

| Foreground on background | Ratio | Use |
|---|---|---|
| `#FFFFFF` on `#111111` | 18.88 | body text |
| `#7AF298` on `#111111` | 13.47 | name, eyebrows, glyphs, stats |
| `#111111` on `#7AF298` | 13.47 | primary button text |
| `#7AF298` on `#191818` | 12.64 | accent on alternate sections |
| `#7AF298` on `#25282B` | 10.57 | accent on raised cards |
| `#B5B5B5` on `#111111` | 9.21 | muted text |
| `#B5B5B5` on `#191818` | 8.64 | muted text on alternate sections |
| `#B5B5B5` on `#25282B` | 7.23 | muted text on cards |
| `#707070` on `#111111` | 3.81 | **not allowed for text**; borders and decoration only (passes 3:1 for non-text) |

**Rationale**: Confirms the reference palette needs no adjustment. A lint rule is not needed; the accessibility pass re-checks with Lighthouse/axe.

## R8. Images

**Decision**:
- Convert the hero photo to WebP at 1x and 2x of its displayed size, with explicit `width`/`height`. Use `fetchpriority="high"` only if it sits above the fold on mobile, otherwise `loading="lazy"`.
- Keep `laith-photo-nobg.png` for Open Graph, Twitter and JSON-LD, because some social crawlers handle PNG/JPEG more reliably than WebP.
- Delete the unused `laith-photo.png`.
- Project thumbnails go in `public/static/projects/{slug}.webp` at a fixed 16:10 ratio. A missing thumbnail renders a same-size styled placeholder (spec edge case).
- Conversion is a one-off command (`npx sharp-cli`), not a project dependency.

## R9. Structured data and SEO single-sourcing (FR-026, Principle III)

**Decision**:
- Move `seo` and the JSON-LD builders into `src/seo.ts`. Every absolute URL, including JSON-LD `@id`s, OG image and sitemap, is built from `seo.siteUrl`.
- Keep the five JSON-LD blocks: Person, WebSite, ProfilePage, ItemList, BreadcrumbList.
  - Build the ItemList of projects from `content/projects.ts`, so it always matches the visible cards.
  - Remove the WebSite `SearchAction`: the site has no search, so the markup is inaccurate.
- Drop the hidden or duplicated Person microdata (`itemscope` on the hero and footer). JSON-LD is the single structured-data source; Google advises against marking up hidden content, and two sources can drift apart.

**Alternatives considered**: Keep microdata in sync manually (rejected: two sources of truth).

## R10. "TBD" placeholders and empty sections (FR-017, FR-019, SC-007)

**Decision**:
- Content files use a shared `TBD(note)` helper for missing values.
- During development it renders a visible, dashed-outline mint "TBD: note" marker. In production it renders the same marker (it is never silently hidden), so the launch gate can find it.
- The launch gate (quickstart §6) fails if the rendered page contains `data-tbd`.
- Optional content: an empty `testimonials` array removes the section and its nav link; an unset `profile.cvUrl` removes the resume button.

**Rationale**: Visible markers can't be missed in review, and a single attribute is easy to check mechanically.

## R11. Verification tooling

**Decision**: There is no automated test suite (constitution, Development Workflow). Verification is:
1. `npm run build` and `npx tsc --noEmit`.
2. Manual browser checks at 375, 768 and 1280px using `npm run dev` or `npm run preview`.
3. `npx lighthouse` (mobile preset) against the preview and the deployed URL.
4. A structured `/impeccable` critique and audit pass for UX/UI quality (FR-025). It runs once on the foundation (tokens and primitives), once per section group, and once before launch. Every high-severity finding is resolved.

All steps are in [quickstart.md](./quickstart.md).

**Alternatives considered**: Adding Playwright or Vitest suites (rejected for this feature: the constitution makes verification manual and the scope is visual. It can be revisited if regressions appear).

## R12. Branch

**Decision**: The Spec Kit feature id is `001-devsync-redesign`, but the repository is still on `main`. Implementation should run on a git branch named `001-devsync-redesign`, created before the first code change, so `main` and the live site stay deployable until the launch gate passes.
