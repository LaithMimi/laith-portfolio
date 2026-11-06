<!--
Sync Impact Report
- Version change: 1.0.0 → 1.0.1 (PATCH: clarifications, no principle added, removed or redefined)
- Modified principles:
  I. Edge-Rendered Simplicity: "single-page" clarified as one page per locale (English `/`,
     Arabic `/ar`), sharing all sections, components and styles; no other routes implied
  III. SEO & Identity Preservation: the one-`<h1>` and canonical rules apply to every locale page;
     locale pages are linked with hreflang alternates
- Added sections: none
- Removed sections: none
- Templates: plan/spec/tasks templates read this file at runtime; no template edits made
- Deferred TODOs: none
- Approval: Laith approved the Arabic `/ar` version in the SEO plan (2026-11-06)
-->

# Laith Mimi Portfolio Constitution

## Core Principles

### I. Edge-Rendered Simplicity

The site MUST stay a single-page portfolio served by Hono on Cloudflare Pages.

- "Single page" means one page per locale: the same page MAY be served in more than one
  language at its own path (currently English at `/` and Arabic at `/ar`), sharing all sections,
  components and styles. This allows no other new page routes.
- New runtime dependencies beyond `hono` MUST be justified in the plan's Complexity Tracking.
- No client-side framework (React, Vue, etc.), database, or server-side state may be added
  without a constitution amendment.
- Client behavior MUST be plain JavaScript that degrades gracefully: all content is readable
  with JavaScript disabled.

Rationale: a personal portfolio gains nothing from extra moving parts; every dependency is
maintenance a solo owner pays for.

### II. Design-System Fidelity

Every visual value MUST come from a named design token.

- Colors, font families, type scale and spacing MUST be defined once as CSS custom properties
  (mirrored in the Tailwind theme) and referenced everywhere else; hard-coded hex values outside
  the token definitions are a defect.
- The current visual direction is the DevSync reference (https://devsync.framer.website/):
  dark `#111111` base, mint `#7AF298` accent, `#B5B5B5` muted text, Space Grotesk.
  Changing the direction is a MINOR amendment to this principle.
- Shared patterns (section eyebrow, heading, button, tag, card) MUST be built once and reused.

Rationale: a consistent visual system is what makes a redesign match its reference, and
tokens make the next redesign a token swap rather than a rewrite.

### III. SEO & Identity Preservation (NON-NEGOTIABLE)

Ranking for the name "Laith Mimi" is a primary goal of the site.

- Every change MUST keep: the `<title>`, meta description, canonical URL, Open Graph and
  Twitter tags, Person JSON-LD, `/sitemap.xml`, `/robots.txt`, and the Google Search Console
  verification route.
- Every locale page MUST have exactly one `<h1>`, and it MUST contain the name "Laith Mimi".
- Every locale page MUST have its own canonical URL and MUST link all locale versions with
  hreflang alternates (including `x-default`).
- The site URL MUST be referenced from a single source (`seo.siteUrl`) wherever the template
  allows it.
- Structured data MUST match the visible content (same name, role, links).

Rationale: search identity is built slowly and lost quickly; restructuring must not silently
drop it.

### IV. Accessible & Fast by Default

- Text contrast MUST meet WCAG 2.2 AA (4.5:1 body, 3:1 large text) against its background.
- All interactive elements (nav, modals, accordions, links) MUST be keyboard operable with a
  visible focus state; modals MUST trap and restore focus and close on Escape.
- All motion MUST respect `prefers-reduced-motion: reduce`.
- Images MUST have meaningful `alt` text (or empty `alt` when decorative) and explicit
  dimensions.
- The production page MUST score at least 90 in Lighthouse Performance, Accessibility, Best
  Practices and SEO on mobile.
- Layouts MUST work without horizontal scroll from 360px to 1920px wide.

Rationale: recruiters open portfolios on phones and slow connections; an inaccessible or
sluggish page undercuts the skills it advertises.

### V. Authentic, Owner-Approved Content

- Copy, metrics, testimonials, client names and project claims MUST come from Laith. Agents
  MUST NOT invent them.
- Missing content MUST be marked with a visible `TBD` placeholder and tracked as a task, never
  filled with plausible fiction or template sample text (for example DevSync's "Bruno Simon").
- Content SHOULD live in data constants (as `seo`, `caseStudies` and `microcopy` do today), not
  scattered through markup, so it can be updated without touching layout.

Rationale: a portfolio is a factual statement about a real person; fabricated details are a
reputational risk.

## Technical Constraints

- **Runtime**: Hono on Cloudflare Pages via `@hono/vite-build`; entry `src/index.tsx`.
- **Styling**: Tailwind CSS plus custom CSS built on the tokens above. External scripts and
  styles are limited to Tailwind, Font Awesome and Google Fonts unless the plan justifies more.
- **Static assets**: live under `public/static/` and are served via `serveStatic`.
- **Template literals**: the page is rendered from a JS template literal, so a literal backtick
  or `${` inside the inline markup, CSS or JS MUST be escaped.
- **Secrets**: no credentials or tokens in source; bindings go through `wrangler.jsonc` or
  Pages environment variables.
- **Dead code**: files the page does not load MUST be removed rather than left to drift.

## Development Workflow & Quality Gates

The repository has no automated test suite, so verification is explicit and manual. Every
change MUST pass these gates before it is merged to `main` or deployed:

1. `npm run build` succeeds, and `npx tsc --noEmit` reports no new errors.
2. The change is viewed in a browser (`npm run dev` or `npm run preview`) at 375px, 768px and
   1280px wide, with the console free of new errors.
3. For visual work, sections are compared side by side with the reference screenshots.
4. For changes touching the `<head>`, routes or copy, the Principle III checklist is
   re-verified.
5. Deploys (`npm run deploy`) happen only from a build that passed gates 1–4. After deploying,
   the live URL is spot-checked.

Work is planned in Spec Kit (`specs/`) and tracked on the Proda "Portfolio" roadmap; task
status there MUST reflect reality.

## Governance

- This constitution supersedes other practice documents. `CLAUDE.md` provides runtime guidance
  for agents and MUST NOT contradict it.
- Amendments are made through `/speckit-constitution`, recorded with a Sync Impact Report, and
  approved by the project owner (Laith Mimi).
- Versioning follows semantic versioning: MAJOR for removing or redefining a principle, MINOR
  for adding a principle or materially expanding guidance, PATCH for clarifications.
- Every `/speckit-plan` MUST include a Constitution Check against Principles I–V. Any violation
  MUST be justified in Complexity Tracking or the plan changed.

**Version**: 1.0.1 | **Ratified**: 2026-11-04 | **Last Amended**: 2026-11-06
