# Data Model: DevSync-Style Portfolio Redesign

**Feature**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

All content lives in typed TypeScript modules under `src/content/` and is compiled into the worker. There is no database or runtime state. The exact type signatures are in [contracts/content-schema.md](./contracts/content-schema.md). This file describes the entities, their relationships and their validation rules.

## Shared conventions

- **`Text`**: a string, or a `TBD` marker created with `TBD('what is missing')`. Any field typed `Text` may be TBD until launch. At launch, no TBD may remain (SC-007).
- **Order**: arrays are rendered in the order written. No field controls sort order.
- **URLs**: external links are absolute `https://`. Site-internal assets are root-relative (`/static/...`). Absolute site URLs are never written in content; `seo.ts` builds them from `seo.siteUrl`.
- **Slugs**: lowercase kebab-case, unique within their collection, used for DOM ids (`#case-{slug}`) and file names.

## Entities

### Profile (single object, `profile.ts`)

| Field | Type | Rules |
|---|---|---|
| name | string | Must be exactly "Laith Mimi" (rendered as the only `<h1>`; must match JSON-LD `name`) |
| greeting | Text | Short, e.g. one word plus a comma |
| role | Text | One line, ≤ 60 characters (fits on one line at 375px with the 24px style) |
| intro | Text | 2–3 sentences, ≤ 320 characters |
| email | string | Valid address; rendered as `mailto:`; must match JSON-LD `email` |
| phone | string | E.164 form for `tel:` (`+972...`) plus a `phoneDisplay` string for the visible text |
| location | string | e.g. "Jerusalem, Israel"; must match JSON-LD address |
| photo | Image | See Image below; required |
| cvUrl | string \| undefined | Root-relative path to an existing file in `public/static/`. **Undefined hides the resume button (FR-019)** |
| socials | SocialLink[] | 1–5 items; each URL must also appear in JSON-LD `sameAs` |
| languages | string[] | Spoken languages for the footer badges; must match JSON-LD `knowsLanguage` |

**SocialLink**: `label` (rendered after "/ "), `url`, `icon` (a key from the icon set).

### Stat (`stats.ts`)

| Field | Type | Rules |
|---|---|---|
| value | number | Integer ≥ 0; the server-rendered final value |
| suffix | string | Optional, e.g. "+" |
| label | Text | ≤ 32 characters |

0–3 items (FR-008). An empty array hides the stats row.

### SkillGroup (`skills.ts`)

| Field | Type | Rules |
|---|---|---|
| name | Text | e.g. "AI", "Frontend", "Backend", "Tools" |
| skills | Skill[] | ≥ 1 |

**Skill**: `name` (string), `tooltip?` (string; carries the existing `microcopy` text where one exists). 2–5 groups.

### Project (`projects.ts`)

| Field | Type | Rules |
|---|---|---|
| slug | string | Unique; used for `#case-{slug}` and `/static/projects/{slug}.webp` |
| title | Text | ≤ 40 characters |
| summary | Text | One line, ≤ 110 characters |
| tags | string[] | 1–6 tech tags |
| thumbnail | Image \| undefined | 16:10. Undefined renders a styled placeholder of the same size |
| caseStudy | CaseStudy | Required |
| links | { live?: string; repo?: string } | Optional |

**CaseStudy**: `tagline` (Text), `overview` (Text), `role` (Text[]), `stack` (string[]), `features` (Text[]), `challenges` ({ challenge: Text; solution: Text }[]), `outcome` (Text). Any list may be empty, and an empty list hides its sub-heading.

The existing GeeksHub, Arabic Chatbot AI Tutor and NGO Social Platform case studies move here from the unused `caseStudies` constant and the hard-coded modals. Their "Metrics TBD" phrases become `TBD()` markers. ≥ 1 project.

**Relationship**: Project → JSON-LD `ItemList` (one `ListItem` per project, generated, never hand-written).

### Service (`services.ts`)

`title` (Text), `description` (Text, ≤ 300 characters). Exactly 4 items, matching the reference's (01)–(04) layout; the number is derived from position. The "Hire Me" CTA is the same for every item and links to `#contact`.

### ProcessStep (`process.ts`)

`title` (Text), `description` (Text, ≤ 200 characters). Exactly 3 items; the number is derived from position.

### ExperienceEntry (`experience.ts`)

`role` (Text), `organization` (Text), `period` (string, e.g. "2024 — Present"), `points` (Text[], 1–4). ≥ 1 item.

### Certification (`certifications.ts`)

`name` (Text), `issuer` (Text), `date` (string, "YYYY" or "Mon YYYY"), `url?` (credential link). ≥ 0 items; empty hides the section and its nav link.

### VolunteeringEntry (`volunteering.ts`)

`role` (Text), `organization` (Text), `period` (string), `summary` (Text). ≥ 0 items; empty hides the section and its nav link.

### Testimonial (`testimonials.ts`)

`quote` (string, ≤ 280 characters), `author` (string), `authorRole` (string). **Must be real and approved by Laith. TBD is not allowed here: a testimonial is either present or absent.** ≥ 0 items; empty hides the section and its nav link (FR-013).

### Image (shared value type)

`src` (root-relative), `width`, `height` (intrinsic pixels, required: Principle IV), `alt` (string; empty only if decorative), `srcset?`.

## Derived data (not edited by hand)

| Derived | From | Where |
|---|---|---|
| Nav links | Sections that render (non-empty) | `Nav.tsx` |
| Display numbers `01`, `(01)` | Array index | primitives `Index` |
| JSON-LD Person (`email`, `telephone`, `sameAs`, `knowsLanguage`, `image`) | `profile` + `seo` | `seo.ts` |
| JSON-LD ItemList | `projects` | `seo.ts` |
| Sitemap `<loc>`/`<image:loc>` | `seo.siteUrl` + `profile.photo` | `seo.ts` |

## Validation

Enforced by the TypeScript types (`npx tsc --noEmit`) where possible. Everything else is checked by the launch checks in [quickstart.md §6](./quickstart.md):
- No `data-tbd` in rendered HTML.
- Exactly one `<h1>`.
- JSON-LD and visible name, email, phone and social links match.
- `cvUrl`, if set, returns HTTP 200.
- Every thumbnail and photo has width, height and alt.
