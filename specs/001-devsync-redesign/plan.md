# Implementation Plan: DevSync-Style Portfolio Redesign

**Branch**: `001-devsync-redesign` | **Date**: 2026-11-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-devsync-redesign/spec.md`

**Tracking**: Proda "Portfolio" roadmap (https://proda.work/projects/ad3b4bcc-869a-468a-917b-9c5c0cf8fb80)

## Summary

Rebuild the single-page portfolio in the DevSync visual language: near-black surfaces, mint accent, Space Grotesk, `// Label` eyebrows, `</ >`-framed headings, pill tags, numbered lists and marquees. Laith supplies all copy.

The technical approach:
- Replace the 2,000-line template literal in `src/index.tsx` with server-rendered `hono/jsx` section components fed by typed content files.
- Replace the Tailwind Play CDN and Font Awesome with a compiled Tailwind v4 stylesheet whose `@theme` block is the single token source, plus inline SVG icons and a self-hosted font.
- Implement every interaction with native elements (`<details name>`, `<dialog>`) or a few kilobytes of plain JavaScript. All content stays readable without JS, and all motion respects reduced-motion settings.
- Keep SEO identity intact by building all head tags, JSON-LD and the sitemap from one `seo` module.

## Technical Context

**Language/Version**: TypeScript (ESNext, strict) with `hono/jsx` server components. Plain ES2020 JavaScript for the client script.

**Primary Dependencies**:
- Runtime: `hono` ^4.11 only (unchanged).
- Build: `vite` 6, `@hono/vite-build`, `@hono/vite-dev-server`, `wrangler` (existing).
- New dev-only: `tailwindcss` 4 and `@tailwindcss/cli` (see [research R4](./research.md#r4-styling-tailwind-built-at-compile-time-tokens-defined-once)).

**Storage**: N/A. Content is TypeScript data files compiled into the worker.

**Testing**: No automated suite (constitution). Verification = build + type check + manual multi-width browser checks + Lighthouse + `/impeccable` critique/audit ([research R11](./research.md#r11-verification-tooling), [quickstart.md](./quickstart.md)).

**Target Platform**: Cloudflare Pages (Workers runtime) serving SSR HTML. Evergreen browsers (last 2 versions of Chrome, Edge, Firefox, Safari, plus iOS Safari and Chrome Android).

**Project Type**: Server-rendered single-page website.

**Performance Goals**: Lighthouse mobile ≥ 90 in Performance, Accessibility, Best Practices and SEO (SC-004). Budgets: client JS ≤ 8 KB gzip, CSS ≤ 25 KB gzip, no render-blocking third-party requests, LCP ≤ 2.5 s on Lighthouse mobile throttling, CLS ≤ 0.05.

**Constraints**:
- Readable with JS disabled (FR-023).
- WCAG 2.2 AA (FR-021, FR-022).
- `prefers-reduced-motion` honoured (FR-020).
- No horizontal scroll from 360 to 1920px (FR-024).
- Exactly one `<h1>` containing "Laith Mimi".
- No invented content.

**Scale/Scope**: One page with 11 sections, 3+ case-study dialogs and 6 routes, built from about 25 source files. Traffic is personal-portfolio scale (well within the Pages free tier).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Principle | Requirement | How this plan complies | Status |
|---|---|---|---|
| I. Edge-Rendered Simplicity | Single page on Hono/Pages; no new runtime deps without justification; no client framework; JS-off readable | Still one Hono route `/`. Runtime deps stay `hono` only (Tailwind is a dev-only build tool, noted in Complexity Tracking). Plain JS client script. No-JS fallbacks for every pattern ([R6](./research.md#r6-interactive-patterns-with-no-js-fallbacks)) | ✅ Pass |
| II. Design-System Fidelity | Every value from a named token; tokens defined once (CSS vars mirrored in Tailwind); DevSync direction; shared patterns built once | Tailwind v4 `@theme` in `src/styles/site.css` is the only place a hex value appears. Primitives in `src/components/primitives.tsx` are reused by every section ([contracts/ui-components.md](./contracts/ui-components.md)) | ✅ Pass |
| III. SEO & Identity (NON-NEGOTIABLE) | Keep title, description, canonical, OG, Twitter, Person JSON-LD, sitemap, robots, GSC route; one `<h1>` with the name; `seo.siteUrl` single source; structured data matches content | All kept and generated from `src/seo.ts`. Hard-coded URLs replaced by `seo.siteUrl`. Project ItemList generated from the same content as the cards. The decorative name ticker uses no headings ([R2](./research.md#r2-reference-behaviours-we-do-not-copy), [R9](./research.md#r9-structured-data-and-seo-single-sourcing-fr-026-principle-iii), [contracts/routes.md](./contracts/routes.md)) | ✅ Pass |
| IV. Accessible & Fast | AA contrast; keyboard + visible focus; modal focus trap/restore/Escape; reduced motion; alt + dimensions; Lighthouse ≥ 90 mobile; 360–1920px | Contrast verified for every token pair ([R7](./research.md#r7-contrast-verification-fr-022-sc-005)). Native `<dialog>`/`<details>`. Global `:focus-visible` ring token. Reduced-motion branch for each effect. CDN, Font Awesome and Google Fonts requests removed. Image rules in [R8](./research.md#r8-images) | ✅ Pass |
| V. Authentic Content | Laith's content only; visible TBD for gaps; content in data constants | `src/content/*.ts` per entity ([data-model.md](./data-model.md)). `TBD()` helper with launch gate ([R10](./research.md#r10-tbd-placeholders-and-empty-sections-fr-017-fr-019-sc-007)). No DevSync sample text copied | ✅ Pass |
| Technical Constraints | Hono/Pages; Tailwind + custom CSS on tokens; external assets limited; assets in `public/static`; escape template literals; no secrets; remove dead code | Same runtime. External scripts and styles reduced to zero. JSX removes the template-literal hazard. Dead files deleted (`src/renderer.tsx`, `public/static/app.js`, `styles.css`, `style.css`, `laith-photo.png`) | ✅ Pass |
| Workflow gates | Build + tsc; 375/768/1280 browser check; side-by-side reference compare; SEO checklist; deploy only after gates | Encoded as [quickstart.md](./quickstart.md) §1–§7 and the Proda checkpoints "Foundation review" and "Design QA against DevSync" | ✅ Pass |

**Post-design re-check (after Phase 1)**: ✅ Still passes. The design artifacts add no runtime dependency, no client framework and no new external origin. One deliberate deviation from the reference (sticky multi-link nav instead of the single "Menu" button) comes from spec FR-006 and does not affect any principle.

## Project Structure

### Documentation (this feature)

```text
specs/001-devsync-redesign/
├── spec.md                  # Feature spec (/speckit-specify)
├── plan.md                  # This file
├── research.md              # Phase 0: decisions R1–R12
├── data-model.md            # Phase 1: content entities and validation
├── quickstart.md            # Phase 1: validation and run guide
├── contracts/
│   ├── routes.md            # HTTP routes and head/SEO contract
│   ├── content-schema.md    # TypeScript content types (the editing contract for Laith)
│   └── ui-components.md     # Tokens, primitives, section anchors, a11y/motion behaviour
├── reference/
│   └── measure-1440.json    # Measured reference styles (screenshots added by the capture task)
├── checklists/
│   └── requirements.md      # Spec quality checklist
└── tasks.md                 # Phase 2 (/speckit-tasks; not created here)
```

### Source Code (repository root)

```text
src/
├── index.tsx                # Hono app: static middleware + routes only
├── seo.ts                   # seo constants, head-tag data, JSON-LD builders, sitemap builder
├── content/
│   ├── tbd.ts               # TBD() helper + type
│   ├── types.ts             # Entity types (contracts/content-schema.md)
│   ├── profile.ts           # Profile, social links, languages, CV
│   ├── stats.ts
│   ├── skills.ts            # Skill groups (+ tooltip microcopy)
│   ├── projects.ts          # Projects + case studies (replaces unused caseStudies)
│   ├── services.ts
│   ├── process.ts
│   ├── experience.ts
│   ├── certifications.ts
│   ├── volunteering.ts
│   └── testimonials.ts      # May be an empty array
├── components/
│   ├── Document.tsx         # <html>, <head> (meta, preload, JSON-LD), body shell, no-js swap
│   ├── primitives.tsx       # Eyebrow, SectionHeading, Section, Button, Tag, Card, Index, Tbd
│   └── icons.tsx            # Inline SVG icon set
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx             # + decorative name ticker
│   ├── Skills.tsx           # skill groups + stats + resume
│   ├── Projects.tsx         # grid + CaseStudy dialogs
│   ├── Services.tsx         # <details name="services"> accordion
│   ├── Process.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Volunteering.tsx
│   ├── Testimonials.tsx     # renders nothing when empty
│   └── Contact.tsx          # CTA block + footer
└── styles/
    └── site.css             # Tailwind v4 entry: @theme tokens, @font-face, @layer components

public/
├── googled00677178c1e649e.html
└── static/
    ├── site.css             # GENERATED by tailwind CLI (gitignored)
    ├── site.js              # Client behaviour (reveal, count-up, nav, dialogs)
    ├── fonts/space-grotesk-latin-var.woff2
    ├── img/laith-{w}.webp   # Hero photo renditions
    ├── laith-photo-nobg.png # Kept for OG/Twitter/JSON-LD
    ├── projects/{slug}.webp # Thumbnails (as Laith supplies them)
    └── cv.pdf               # When Laith supplies it
```

**Removed**: `src/renderer.tsx`, `public/static/app.js`, `public/static/styles.css`, `public/static/style.css`, `public/static/laith-photo.png`.

**Scripts** (`package.json`):
- `build:css` → `tailwindcss -i src/styles/site.css -o public/static/site.css --minify`
- `dev:css` → the same command with `--watch`, run in a second terminal next to `npm run dev`
- `build` → `npm run build:css && vite build`
- `deploy` → unchanged; it calls `build`

**Structure Decision**: Keep the single Hono worker. Split it by responsibility (routes / SEO / content / primitives / sections) so each Proda section task touches one section file plus, at most, its content file. Client behaviour stays in one deferred script because the total is small.

## Implementation Phases (input for /speckit-tasks)

These map one-to-one onto the existing Proda tags and checkpoints, so `tasks.md` and the roadmap stay in sync.

1. **Foundation** (Proda: `foundation`)
   1. Create the `001-devsync-redesign` branch.
   2. Capture reference screenshots.
   3. Set up the Tailwind build, tokens and font.
   4. Split `index.tsx` into `seo.ts`, `content/` and `Document.tsx` while keeping the current page rendering (pure refactor, verified by an unchanged `<head>`).
   5. Build the primitives.
   6. Delete dead files.
   7. Run `/impeccable` on the token and primitive set.
   - **Checkpoint**: Foundation review.
2. **Sections** (Proda: `sections`): Nav → Hero → Skills → Projects (with dialogs) → Services → Process → Experience/Certifications/Volunteering → Testimonials → Contact/Footer. Each section is built against the reference, run through `/impeccable`, and checked at 3 widths. Clients/blog stay out (FR-015).
   - **Milestone**: All sections built.
3. **Content** (Proda: `content`, Laith; runs in parallel): fill `src/content/*`, add the CV and thumbnails, then regenerate JSON-LD and the sitemap and check OG.
4. **Polish** (Proda: `polish`): motion tuning, responsive, accessibility, performance (Lighthouse), and a final `/impeccable` audit.
   - **Checkpoint**: Design QA against DevSync.
5. **Launch** (Proda: `launch`): build, preview, deploy, post-launch SEO checks.
   - **Milestone**: Redesign live.

## Complexity Tracking

| Item | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| Dev-only `tailwindcss` + `@tailwindcss/cli` (not a runtime dependency, recorded for transparency) | Removes the in-browser Tailwind JIT from every page load (the main Lighthouse risk). `@theme` gives single-source tokens | Keeping the Play CDN fails the performance budget. Hand-written CSS drops the constitution's named styling tool |
| Second terminal for `dev:css` during development | The Tailwind CLI must watch `src/` while Vite serves the worker | The `@tailwindcss/vite` plugin would need a separate client-mode Vite build with `@hono/vite-build`, which adds more config than one extra command |
