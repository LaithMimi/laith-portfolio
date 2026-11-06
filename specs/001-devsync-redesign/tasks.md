---

description: "Task list for the DevSync-style portfolio redesign"
---

# Tasks: DevSync-Style Portfolio Redesign

**Input**: Design documents from `specs/001-devsync-redesign/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: The spec does not ask for automated tests, and the constitution makes verification manual. Each story ends with validation tasks that run the matching [quickstart.md](./quickstart.md) checks plus an `/impeccable` UX/UI review (FR-025). There are no test-file tasks.

**Organization**: Tasks are grouped by user story so each story can be built and checked on its own.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on an incomplete task)
- **[Story]**: The user story the task belongs to (US1–US5)
- Line references such as `src/index.tsx:1534-1607` point at the **current** (pre-refactor) file. Use them only while migrating content. Phase 2 removes the old template, so copy the content out first (see T010–T013).

## Ground rules for every task

- **Tokens only**: no hex/rgb values outside the `@theme` block in `src/styles/site.css` (constitution II). Use token utilities or `var(--…)`.
- **Content only from Laith**: never invent copy, numbers, testimonials or links. Mark gaps with `TBD('…')` from `src/content/tbd.ts` (constitution V). Content already on the current site is Laith's, so migrate it as-is.
- **SEO**: never remove anything listed in [contracts/routes.md](./contracts/routes.md). Keep exactly one `<h1>`.
- **No-JS / reduced motion**: every interactive or animated element needs the fallback listed in [research R6](./research.md#r6-interactive-patterns-with-no-js-fallbacks).
- **Proda sync**: when starting or finishing a task, update the matching Proda node (table at the end of this file).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Branch, tooling and static assets every later phase needs.

- [X] T001 Create and switch to git branch `001-devsync-redesign` from `main` (`git switch -c 001-devsync-redesign`), so `main` stays deployable (research R12)
- [X] T002 Add `.playwright-mcp/` and `public/static/site.css` (generated) to `.gitignore`
- [X] T003 Install dev dependencies `tailwindcss@^4` and `@tailwindcss/cli@^4` (`npm i -D`). In `package.json` add scripts `"build:css": "tailwindcss -i src/styles/site.css -o public/static/site.css --minify"` and `"dev:css": "tailwindcss -i src/styles/site.css -o public/static/site.css --watch"`, and change `"build"` to `"npm run build:css && vite build"`. Leave `"deploy"` unchanged (it calls build)
- [X] T004 [P] Capture the reference with the Playwright browser tool. Save full-page screenshots of https://devsync.framer.website/ at 1440×900 and 390×844 to `specs/001-devsync-redesign/reference/devsync-1440.png` and `reference/devsync-390.png`; scroll to the bottom first so lazy content loads, and wait for animations to settle. Write `specs/001-devsync-redesign/reference/behaviour.md` noting the hover, scroll-reveal, ticker/marquee speed and accordion behaviour observed (Proda: Capture the DevSync design reference)
- [X] T005 [P] Download the Space Grotesk variable font (weights 300–700, Latin subset, woff2) from the official Google Fonts / Florian Karsten release. Save it as `public/static/fonts/space-grotesk-latin-var.woff2`, and add its SIL OFL licence as `public/static/fonts/OFL.txt`
- [X] T006 [P] Create hero photo renditions from `public/static/laith-photo-nobg.png` with a one-off `npx sharp-cli` (not a project dependency): `public/static/img/laith-480.webp` and `public/static/img/laith-960.webp`, keeping the alpha channel. Record each file's pixel width and height for T010 (research R8)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Tokens, content layer, SEO module, primitives, document shell and the new route. Together they replace the old template.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete. T010–T013 migrate content out of the old template **before** T018 removes it.

### Styles and primitives

- [X] T007 Create `src/styles/site.css`:
  - `@import "tailwindcss";`
  - A `@theme` block with every token in [contracts/ui-components.md § Tokens](./contracts/ui-components.md#tokens-srcstylessitecss-tailwind-v4-theme) (colours, `--font-sans`, type scale with the exact `clamp()` values, spacing, containers, gutter, radii, ease and duration).
  - `@font-face` for `/static/fonts/space-grotesk-latin-var.woff2` (`font-weight: 300 700; font-display: swap`) plus a size-adjusted `system-ui` fallback face.
  - Base layer: `body` uses `--color-bg`, `--color-text` and `--font-sans`; a global `:focus-visible` outline using `--focus-ring`; a visually hidden skip link that appears on focus; `.tbd` (dashed accent outline, accent text; never hidden); `.sr-only`.
  - `html.js [data-reveal]` hidden state plus `.is-visible`, applied only inside `@media (prefers-reduced-motion: no-preference)`.
  - Shared marquee keyframes and track styles: pause on `:hover`/`:focus-within`; under `prefers-reduced-motion: reduce`, no animation and `overflow-x:auto; scroll-snap-type:x mandatory`.
  - Run `npm run build:css` to confirm it compiles.
- [X] T008 [P] Create `src/content/tbd.ts` and `src/content/types.ts` exactly as specified in [contracts/content-schema.md](./contracts/content-schema.md) (`Tbd`, `TBD()`, `Text`, `IconName`, `Image`, `SocialLink`, `Profile`, `Stat`, `Skill`, `SkillGroup`, `CaseStudy`, `Project`, `Service`, `ProcessStep`, `ExperienceEntry`, `Certification`, `VolunteeringEntry`, `Testimonial`). Add `isTbd(t: Text): t is Tbd`
- [X] T009 [P] Create `src/components/icons.tsx` exporting `Icon({ name, class?, title? })` for every `IconName` (github, linkedin, x, mail, phone, arrow, external, download, close, menu) as inline 24×24 SVG using `currentColor`. Brand paths come from Simple Icons (CC0). The SVG is `aria-hidden="true"` unless `title` is given

### Content migration (copy out of the old template first)

- [X] T010 Create `src/content/profile.ts` exporting `profile: Profile`, migrating from `src/index.tsx`. Use the `seo.structuredData` object (lines 63–165), the hero (lines 1181–1258) and `/api/contact` (lines 2411–2418):
  - `name: 'Laith Mimi'`, `email: 'Laithmimi03@gmail.com'`, `phone: '+972543600249'`, `phoneDisplay` as currently shown.
  - `location: 'Jerusalem, Israel'`.
  - `photo` using the T006 renditions (`srcset`, real width/height, meaningful `alt`).
  - `socials` for LinkedIn and GitHub. The two GitHub URLs in `sameAs` differ only in case, so keep one.
  - `languages: ['Arabic','English','Hebrew']`.
  - `greeting`, `role` and `intro` from the current hero copy. Respect "role: One line, ≤ 60 characters" and "intro: 2–3 sentences, ≤ 320 characters"; use `TBD()` if the current copy doesn't fit.
  - Omit `cvUrl`, because `/static/cv.pdf` does not exist ("Undefined hides the resume button (FR-019)").
- [X] T011 Create `src/content/projects.ts` exporting `projects: Project[]` with slugs `geekshub`, `arabic-tutor` and `ngo-social`, migrating:
  - each card's title, summary and tags from `src/index.tsx:1322-1402`;
  - each case study from the `caseStudies` constant (`src/index.tsx:170-216`) **and** the modal markup (`#modal-geekshub` 1792–1865, `#modal-arabic` 1867–1940, `#modal-ngo` 1942–2010), mapping problem/solution/impact/stack into `CaseStudy` fields.

  Turn every "(Metrics TBD …)" phrase into a `TBD()` marker. Leave `thumbnail` undefined. Respect "title ≤ 40 characters" and "summary: One line, ≤ 110 characters".
- [X] T012 [P] Create `src/content/skills.ts` exporting `skillGroups: SkillGroup[]`. Migrate the four groups (AI & ML, Languages, Web Development, DevOps & Tools) and their skills from `src/index.tsx:1404-1532`. Attach `tooltip` text from the `microcopy` constant (`src/index.tsx:218-228`) to the matching skills. Rule: "2–5 groups"
- [X] T013 [P] Create `src/content/experience.ts` (`experience: ExperienceEntry[]`: Quest Solutions, WeGrw Solutions, Blend.ar from `src/index.tsx:1534-1607`; "points (Text[], 1–4)"), `src/content/certifications.ts` (`certifications: Certification[]`: Agentic AI Bootcamp, AI in Healthcare, QA & Automation from 1609–1647, with credential URLs if present) and `src/content/volunteering.ts` (`volunteering: VolunteeringEntry[]`: Datahack, PERACH Program from 1649–1686). Copy wording verbatim

### SEO, shell and route

- [X] T014 Create `src/seo.ts`. Move `seo` (title, description, ogDescription, keywords, author, `siteUrl`, twitterHandle, locale) from `src/index.tsx:63-165` and add `themeColor: '#111111'`, documented as mirroring `--color-bg` (the one allowed duplicate, per contracts/routes.md). Export:
  - `jsonLd(profile, projects)`, returning the five blocks currently at `src/index.tsx:313-440`: Person, WebSite **without** `SearchAction`, ProfilePage, ItemList **generated from `projects`**, and BreadcrumbList. Every URL and `@id` is built from `seo.siteUrl`; `email`, `telephone`, `sameAs`, `knowsLanguage` and `image` come from `profile`.
  - `sitemapXml()` and `robotsTxt()`, ported from `src/index.tsx:2313-2409` with the domain taken from `seo.siteUrl`.
  - `serializeJsonLd(obj)`, which escapes `<` as `<` (research R3, R9).
- [X] T015 Create `src/components/primitives.tsx` with `Section`, `Eyebrow`, `SectionHeading`, `Button`, `Tag`, `Card`, `Index`, `SlashLink`, `Tbd`, `Marquee` and a `renderText(t: Text)` helper that renders `Tbd` as `<span data-tbd class="tbd">TBD: {note}</span>`. Implement exactly the rules in [contracts/ui-components.md § Primitives](./contracts/ui-components.md#primitives-srccomponentsprimitivestsx). In particular: the `SectionHeading` `</` and `>` glyphs are `aria-hidden`; buttons have a minimum 44×44px target; `Marquee` duplicates its children with the second copy `aria-hidden`; `Section` takes `id`, `tone: 'bg' | 'surface'` and `labelledBy`
- [X] T016 Create `src/components/Document.tsx`, which renders `raw('<!DOCTYPE html>')` and then `<html lang="en" class="no-js">` with a `<head>` containing every item in [contracts/routes.md § head](./contracts/routes.md#head-must-contain-in-this-order-of-importance), in that order:
  - meta tags, OG and Twitter values from `seo`;
  - the font preload and `/static/site.css`;
  - an inline no-js→js swap of 200 bytes or less;
  - `<script src="/static/site.js" defer>`;
  - JSON-LD via `dangerouslySetInnerHTML` + `serializeJsonLd`;
  - a `<noscript><style>` that shows `dialog.case-study` elements as static blocks.

  The `<body>` has a skip link to `#main`, a `header` slot, `<main id="main">` for its children, and a `footer` slot. No third-party origins
- [X] T017 [P] Create `public/static/site.js` (plain ES2020, no build step, wrapped in an IIFE):
  - a `reducedMotion` media-query helper;
  - an `onReady` registry;
  - the scroll-reveal module: an IntersectionObserver adds `is-visible` to `[data-reveal]` once, and does nothing under reduced motion.

  Later tasks add their modules to this file
- [X] T018 Rewrite `src/index.tsx` so it holds the Hono app and routes only:
  - `serveStatic` for `/static/*`.
  - `GET /` returns `c.html(<Document>…sections…</Document>)`, composing sections in a `sections` array (empty for now apart from a temporary `<p>` stating the redesign is in progress).
  - `/sitemap.xml` and `/robots.txt` use `seo.ts`.
  - `/api/contact` returns `{ email, phone, linkedin, github }` from `profile`.
  - `/googled00677178c1e649e.html` and `/api/health` stay unchanged.

  Delete the old template literal, the `caseStudies` and `microcopy` constants and the brand comment blocks; their content now lives in `src/content/*`
- [X] T019 [P] Delete dead files: `src/renderer.tsx`, `public/static/app.js`, `public/static/styles.css`, `public/static/style.css` and `public/static/laith-photo.png`. Then run `grep` to confirm nothing references them
- [X] T020 Add a dev-only route `GET /__styleguide` in `src/index.tsx`, registered only when `import.meta.env.DEV`, rendering `src/sections/Styleguide.tsx`. That file shows every primitive and state on both `bg` and `surface` tones: eyebrow and heading, primary and outline buttons with hover/focus, tags, a card, `Index` in both styles, `SlashLink`, `Tbd`, and a `Marquee` of tags — **Superseded**: the `/impeccable` comp-led flow replaced the styleguide route (plan and asset review accepted, hero gate passed at 78%).
- [X] T021 Run gate 1: `npm run build` and `npx tsc --noEmit` both clean. Then run [quickstart.md §2 and §3](./quickstart.md) against `npm run preview`. All routes respond per contract; the `<head>` has 5 JSON-LD blocks and 0 third-party origins (the `<h1>` count is checked after US1)
- [X] T022 Run `/impeccable` critique on `http://localhost:5173/__styleguide` at 375 and 1280px against `reference/devsync-1440.png`/`devsync-390.png`. Fix every high-severity finding in `src/styles/site.css` or `src/components/primitives.tsx`. Then ask Laith to pass the Proda checkpoint **Foundation review**

**Checkpoint**: Foundation ready. User story phases can start, in parallel if desired.

---

## Phase 3: User Story 1 – A recruiter gets a strong first impression in the hero (Priority: P1) 🎯 MVP

**Goal**: The first screen shows who Laith is, what he does and how to reach him, in the DevSync visual language.

**Independent Test**: At 375px and 1280px, without scrolling: greeting, role line, mint "Laith Mimi" `<h1>`, intro, E/T contact rows, slash socials, and the resume button only when `cvUrl` is set. The scroll cue moves to the next section. Exactly one `<h1>` is on the page.

- [X] T023 [US1] Create `src/sections/Hero.tsx`:
  - `Section id="hero" tone="surface"`, using `--spacing-hero-top` and `--container-wide`.
  - Greeting and role in `--text-lead` (weight 700).
  - `<h1>` with `profile.name` in `--text-display`, accent colour. It is the only `<h1>` on the page and must wrap to two lines at 360px without overflow.
  - Intro paragraph (`--text-body`).
  - E/T rows: single-letter labels in weight 600, `mailto:`/`tel:` links showing `phoneDisplay`.
  - `SlashLink` socials.
  - Resume `Button` (outline, download icon) rendered only `if (profile.cvUrl)`.
  - Scroll cue `<a href="#skills">` with an accessible name "Scroll to skills".
  - Photo `<img>` with `srcset`, `sizes`, `width`, `height` and `alt`, placed per `reference/devsync-1440.png`/`390.png`. Use `fetchpriority="high"` only if it is above the fold at 390px, otherwise `loading="lazy"`.

  All copy goes through `renderText`
- [X] T024 [P] [US1] Create `src/sections/NameTicker.tsx`: a full-width band wrapped in `aria-hidden="true"`, containing a `Marquee` of `profile.name` repeated in `--text-ticker`, weight 700, `--color-muted`. Use no heading elements (research R2)
- [X] T025 [US1] Add hero, scroll-cue and ticker styles to `src/styles/site.css` `@layer components`:
  - hero grid (stacked < 1024px, photo beside the text at ≥ 1024px);
  - scroll-cue bob animation only under `prefers-reduced-motion: no-preference`;
  - ticker speed from `reference/behaviour.md`;
  - no horizontal overflow at 360px.
- [X] T026 [US1] Register `Hero` and `NameTicker` (in that order) in the `sections` array in `src/index.tsx`, and remove the temporary placeholder `<p>` from T018
- [X] T027 [US1] Run `/impeccable` critique on the hero at 375, 768 and 1280px against the reference screenshots. Fix every high-severity finding in `src/sections/Hero.tsx`, `src/sections/NameTicker.tsx` or `src/styles/site.css`
- [X] T028 [US1] Validate US1 with [quickstart.md](./quickstart.md):
  - §4 rows "First screen" and "Scroll cue";
  - §3 `grep -c "<h1"` = 1;
  - §5 with reduced motion and with JS disabled (hero fully readable, ticker static).

  Record the results in the Proda task "Build the hero"

**Checkpoint**: The MVP hero is complete and can be demoed on its own.

---

## Phase 4: User Story 2 – A visitor browses projects and opens a case study (Priority: P1)

**Goal**: A "// Explore Work" card grid where each card opens an accessible case-study dialog.

**Independent Test**: For every project, open the case study with the mouse and with the keyboard only, read it, close it with the close button and with Escape, and confirm focus returns to the card. With JS disabled, all case studies are readable after the grid.

- [X] T029 [P] [US2] Create `src/sections/CaseStudy.tsx`, rendering `<dialog id="case-{slug}" class="case-study" aria-labelledby="case-{slug}-title">` with:
  - a close `<button>` (icon `close`, `aria-label="Close case study"`);
  - an `<h3 id="case-{slug}-title">` with the title and the tagline;
  - sub-sections Overview, Role, Tech stack (Tags), Key features, Challenges & solutions, Outcome — each hidden when its list or value is empty;
  - optional live/repo links (`target="_blank" rel="noopener"`, with an external icon).
- [X] T030 [US2] Create `src/sections/Projects.tsx`:
  - `Section id="projects" tone="surface"` with `SectionHeading` (eyebrow "Explore Work", H2 from content, or `TBD('projects heading')` if Laith hasn't supplied one).
  - A grid of 1/2/3 columns at <768/<1280/≥1280px.
  - Each card is an `<a href="#case-{slug}" data-case="{slug}">` containing the 16:10 thumbnail (or a same-size placeholder `div` with the project's initials when `thumbnail` is undefined), an `<h3>` title in `--text-h3`, the summary in `--color-muted` and `Tag`s.
  - After the grid, render one `CaseStudy` per project.
- [X] T031 [US2] Add the dialog module to `public/static/site.js`:
  - Clicking or pressing Enter on a `[data-case]` link calls `preventDefault`, then `showModal()`, records the trigger and focuses the close button.
  - Close on the close button, on Escape (native `cancel`) and on backdrop click (`event.target === dialog`).
  - On `close`, restore focus to the trigger and unlock body scroll.
  - Lock body scroll while open (`document.documentElement.style.overflow='hidden'`).
  - On load, if `location.hash` matches `#case-…`, open that dialog.
- [X] T032 [US2] Add project card, thumbnail placeholder and dialog styles to `src/styles/site.css`:
  - card hover lifts 2px with an accent border (border change only under reduced motion);
  - `dialog.case-study` uses `--color-raised` and `--radius-card`, with `max-height: 90dvh; overflow:auto` so it scrolls inside on small phones;
  - `::backdrop` is a darkened `--color-bg`;
  - fade/scale entrance only under `no-preference`;
  - the `<noscript>` static layout from T016 is checked visually.
- [X] T033 [US2] Register `Projects` after `NameTicker` in `src/index.tsx`
- [ ] T034 [US2] Run `/impeccable` critique on the projects grid and one open dialog at 375 and 1280px. Fix every high-severity finding
- [X] T035 [US2] Validate US2 with [quickstart.md](./quickstart.md) §4 row "Project card → dialog" and §5 step 1 (keyboard trials for **every** project; focus must return every time, SC-003) and step 3 (JS disabled: case studies visible). Confirm the JSON-LD ItemList names match the card titles

**Checkpoint**: US1 and US2 work independently. The page now has its core proof-of-work content.

---

## Phase 5: User Story 3 – A visitor understands Laith's skills, services, process and background (Priority: P2)

**Goal**: Skills and stats, the numbered services accordion, the three-step process, and experience/certifications/volunteering in the same visual language.

**Independent Test**: Scroll the full page. Each section uses the shared eyebrow and heading. Stats count up once (or show final values under reduced motion or no JS). Opening one service closes the others, "Hire Me" goes to `#contact`, and everything works by keyboard.

### Content

- [X] T036 [P] [US3] Create `src/content/stats.ts` exporting `stats: Stat[] = []`, with a comment that Laith supplies 0–3 real figures (Proda: Choose the stats numbers) and that an empty array hides the stats row. Rules: "value: Integer ≥ 0", "label ≤ 32 characters"
- [X] T037 [P] [US3] Create `src/content/services.ts` exporting `services: [Service, Service, Service, Service]`, every `title` and `description` set to `TBD('service N title')`/`TBD('service N description')` (Proda: Write the services and process steps). Rule: "description (Text, ≤ 300 characters). Exactly 4 items"
- [X] T038 [P] [US3] Create `src/content/process.ts` exporting `processSteps: [ProcessStep, ProcessStep, ProcessStep]`, all fields `TBD(...)`. Rule: "description (Text, ≤ 200 characters). Exactly 3 items"

### Sections

- [X] T039 [US3] Create `src/sections/Skills.tsx`:
  - `Section id="skills"` with `SectionHeading` (eyebrow "Skills").
  - Each `SkillGroup` shows its name (16px/600) followed by `Tag`s. A skill with a `tooltip` gets a `title` attribute **and** a visually hidden `<span class="sr-only">` with the same text (no hover-only info).
  - Stats row (hidden when `stats.length === 0`): each value is server-rendered as its final number inside `<span data-count="{value}">`, with the suffix and an accent label.
  - Resume `Button` only `if (profile.cvUrl)`.
- [X] T040 [US3] Add the count-up module to `public/static/site.js`. On the first intersection of each `[data-count]`, animate from 0 to the value over about 1.2s with requestAnimationFrame and an ease-out. Skip entirely under reduced motion. Never change the final server-rendered text if JS fails
- [X] T041 [P] [US3] Create `src/sections/Services.tsx`:
  - `Section id="services"` with `SectionHeading` (eyebrow "Service").
  - Four `<details name="services">` items; the first has `open`.
  - Each `<summary>` shows `Index` `(01)`–`(04)`, the title and a chevron icon.
  - The body has the description and a primary `Button` "Hire Me" → `#contact`.
- [X] T042 [P] [US3] Create `src/sections/Process.tsx`: `Section id="process"` with `SectionHeading` (eyebrow "Process") and three step cards with `Index` `01`–`03`, title and description. Three columns ≥ 1024px, stacked below
- [X] T043 [P] [US3] Create `src/sections/Experience.tsx`: `Section id="experience"` with `SectionHeading` (eyebrow "Experience") and numbered rows (`Index`, role, organization, period, bullet points)
- [X] T044 [P] [US3] Create `src/sections/Certifications.tsx` (returns `null` when empty): `Section id="certifications"` with a card grid of name, issuer, date and an optional "View credential" link
- [X] T045 [P] [US3] Create `src/sections/Volunteering.tsx` (returns `null` when empty): `Section id="volunteering"` with cards of role, organization, period and summary
- [X] T046 [US3] Add styles to `src/styles/site.css`: skills group layout, stats row, accordion (summary layout, chevron rotate only under `no-preference`, open-item `--color-raised` background, hidden default marker), process columns, experience rows, and certification/volunteering grids. Add `data-reveal` to section children
- [X] T047 [US3] In `src/index.tsx`, register sections in the order Skills (after NameTicker, before Projects), then Services, Process, Experience, Certifications, Volunteering after Projects (FR-005). Implement tone alternation by render order: filter out sections that render `null`, then assign `bg`/`surface` alternately starting after the hero's `surface`, so neighbours never share a tone (contracts/ui-components.md § Section anchors)
- [ ] T048 [US3] Run `/impeccable` critique on Skills, Services, Process, Experience, Certifications and Volunteering at 375 and 1280px. Fix every high-severity finding
- [X] T049 [US3] Validate US3 with [quickstart.md](./quickstart.md) §4 rows "Stats" and "Services" and §5 (keyboard toggles services; reduced motion and no-JS show final stat values and expandable services)

**Checkpoint**: US1–US3 work independently.

---

## Phase 6: User Story 4 – A visitor gets in touch (Priority: P2)

**Goal**: The sticky nav's "Start Project" button, "Hire Me" and the closing contact section all lead to working email, phone and social links.

**Independent Test**: From the top, middle and bottom of the page, every contact entry point reaches `#contact` or opens the correct mail, phone or profile target. The nav works by keyboard and on mobile.

- [X] T050 [P] [US4] Create `src/sections/Contact.tsx` exporting:
  - `Contact`: `Section id="contact"` with `SectionHeading` (eyebrow "Get In Touch"), a large CTA heading (`TBD('contact CTA')` unless supplied), E/T `mailto:`/`tel:` rows and `SlashLink` socials.
  - `Footer`: language badges as `Tag`s from `profile.languages`, socials, and `© {current year} Laith Mimi` — no microdata (research R9).
- [X] T051 [P] [US4] Create `src/sections/Nav.tsx`, rendering `<header id="top">` with:
  - a sticky bar, max `--container-wide`;
  - the name/mark linking to `#hero` on the left;
  - links derived from a `navItems` prop (only sections that render; labels per contracts/ui-components.md § Section anchors);
  - a primary `Button` "Start Project" → `#contact`.

  Below 768px: a menu `<button aria-expanded="false" aria-controls="nav-panel">` (hidden under `html.no-js`, where the links wrap instead) and a `#nav-panel` list.
- [X] T052 [US4] Add the nav module to `public/static/site.js`:
  - toggle `is-scrolled` on `header` when `scrollY > 8` (passive listener + rAF);
  - the menu button toggles `aria-expanded` and the panel; Escape closes it and returns focus to the button; clicking a panel link closes it;
  - scrollspy: an IntersectionObserver sets `aria-current="true"` on the link of the section in view.
- [X] T053 [US4] Add nav, contact and footer styles to `src/styles/site.css`: a transparent bar that becomes `--color-bg` with a bottom `--color-line` border when `.is-scrolled` (instant under reduced motion); mobile panel; active-link accent; `scroll-margin-top` on sections equal to the bar height; contact CTA type; footer layout
- [X] T054 [US4] In `src/index.tsx`, render `Nav` through `Document`'s header slot with `navItems` computed from the rendered sections, render `Contact` last in `sections`, and render `Footer` through the footer slot
- [ ] T055 [US4] Run `/impeccable` critique on the nav (closed and open mobile menu), contact and footer at 375 and 1280px. Fix every high-severity finding
- [X] T056 [US4] Validate US4 with [quickstart.md](./quickstart.md) §4 row "Nav" (from the top, middle and bottom), click every `mailto:`, `tel:` and social link, and run §5 keyboard checks for the skip link and menu

**Checkpoint**: US1–US4 work. The page is complete except for testimonials.

---

## Phase 7: User Story 5 – Social proof via testimonials (Priority: P3)

**Goal**: A looping quote strip that appears only when real testimonials exist.

**Independent Test**: With `testimonials = []` the section and its nav link are absent. With one or more entries (temporary local check), the strip loops, pauses on hover/focus and becomes a static scroll row under reduced motion.

- [X] T057 [P] [US5] Create `src/content/testimonials.ts` exporting `testimonials: Testimonial[] = []`. Add a comment: "Must be real and approved by Laith. TBD is not allowed here: a testimonial is either present or absent." Rule: "quote (string, ≤ 280 characters)"
- [X] T058 [US5] Create `src/sections/Testimonials.tsx`, which returns `null` when empty. Otherwise it renders `Section id="testimonials"` with `SectionHeading` (eyebrow "Testimonials") and a `Marquee` of quote `Card`s, each a `<figure>` with `<blockquote>` and `<figcaption>` (author and role). Cards are not focusable
- [X] T059 [US5] Register `Testimonials` between Volunteering and Contact in `src/index.tsx`, so it joins nav and tone alternation only when non-empty. Add quote card styles to `src/styles/site.css`
- [ ] T060 [US5] Validate US5 with [quickstart.md](./quickstart.md) §4 row "Testimonials":
  1. With `[]`, confirm the section and nav link are absent.
  2. Temporarily add two clearly fake entries in an **uncommitted** local edit, check the marquee pauses on hover/focus and the reduced-motion scroll row, then revert with `git checkout src/content/testimonials.ts`.
  3. Confirm `git diff` is empty.

**Checkpoint**: All user stories are complete. Proda milestone **All sections built** can complete.

---

## Phase 8: Content Integration (Laith + agent)

**Purpose**: Replace every `TBD` with Laith's real content (spec FR-017–FR-019). The tasks marked "Laith" need his input; agents must not fill them in.

- [ ] T061 [P] Laith supplies, and the agent enters, the hero greeting, role and intro in `src/content/profile.ts` ("role ≤ 60 characters", "intro 2–3 sentences, ≤ 320 characters") (Proda: Write the hero and intro copy)
- [ ] T062 [P] Laith reviews and updates `src/content/skills.ts` groups (Proda: Update the skill groups)
- [ ] T063 [P] Laith supplies project copy and 16:10 thumbnails. Convert the thumbnails to `public/static/projects/{slug}.webp` (one-off `npx sharp-cli`, about 1200px wide) and set `thumbnail` with width, height and alt in `src/content/projects.ts`. Replace the case-study `TBD`s (Proda: Prepare project content and thumbnails)
- [X] T064 [P] Laith supplies the 4 services and 3 process steps. Enter them in `src/content/services.ts` and `src/content/process.ts` (Proda: Write the services and process steps)
- [X] T065 [P] Laith reviews `src/content/experience.ts`, `certifications.ts` and `volunteering.ts` (Proda: Update experience, certifications and volunteering)
- [ ] T066 [P] Laith supplies real testimonials (or confirms skipping them). Enter them in `src/content/testimonials.ts` (Proda: Collect testimonials)
- [ ] T067 [P] Laith supplies the CV. Save it as `public/static/cv.pdf` and set `cvUrl: '/static/cv.pdf'` in `src/content/profile.ts` (Proda: Add the CV PDF)
- [ ] T068 [P] Laith picks 0–3 stats. Enter them in `src/content/stats.ts` (Proda: Choose the stats numbers)
- [ ] T069 Update `seo.title`, `seo.description` and `seo.ogDescription` in `src/seo.ts` to match the final copy (the title still starts with "Laith Mimi"). Check `og:image` and `twitter:image` render correctly in a preview. Run the [quickstart.md §6](./quickstart.md) launch gate: `data-tbd` count = 0 and linked assets return 200 (Proda: Integrate final content and update SEO)

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Motion, responsiveness, accessibility, performance, docs and launch.

- [ ] T070 Tune motion in `src/styles/site.css` and `public/static/site.js` against `reference/behaviour.md`: reveal timing and stagger, card/button/link hover states, and marquee speeds. Re-verify that every effect is off under reduced motion (Proda: Add animations and interactions)
- [ ] T071 [P] Responsive pass at 360, 375, 768, 1024, 1280, 1440 and 1920px: check that `document.documentElement.scrollWidth === innerWidth` at each width, and that long titles, tags and the hero name wrap cleanly. Fix issues in `src/styles/site.css` (Proda: Do the responsive pass)
- [ ] T072 [P] Accessibility pass: run Lighthouse accessibility and the [quickstart.md §5](./quickstart.md) keyboard script for the skip link, nav, menu, every dialog and services. Check focus visibility on every interactive element, that all images have alt text and dimensions, and that there are 0 contrast failures (Proda: Do the accessibility pass)
- [ ] T073 [P] Performance pass:
  - confirm the font preload works and there are no third-party requests;
  - confirm `public/static/site.js` ≤ 8 KB and `public/static/site.css` ≤ 25 KB gzipped (`gzip -c file | wc -c`);
  - check images are WebP with dimensions;
  - run `npx lighthouse` on mobile against `npm run preview`: every category ≥ 90.

  Fix regressions (Proda: Do the performance pass)
- [ ] T074 Run the final `/impeccable` audit on the whole page at 375 and 1280px and resolve every high-severity finding (FR-025, SC-009)
- [ ] T075 Design QA: compare every section side by side with `reference/devsync-1440.png` and `devsync-390.png`, and get Laith's sign-off (SC-001; Proda checkpoint **Design QA against DevSync**)
- [X] T076 [P] Update `CLAUDE.md`'s Overview, Commands and Architecture sections to describe the new structure (`src/seo.ts`, `src/content/*`, `src/components/*`, `src/sections/*`, `src/styles/site.css` → `public/static/site.css`, `public/static/site.js`, the `dev:css` second terminal, the `/__styleguide` dev route). Remove the obsolete gotchas (template-literal escaping, unused `caseStudies`, missing cv.pdf, hard-coded domains)
- [ ] T077 [P] Generate `DESIGN.md` at the repo root from the finished build with the `impeccable-documenter` agent. It records tokens, primitives and section patterns for future work
- [ ] T078 Run the whole of [quickstart.md](./quickstart.md) (§1–§6) against `npm run build && npm run preview`. Every check passes (Proda: Build and preview the site)
- [ ] T079 **With Laith's explicit go-ahead only**: merge `001-devsync-redesign` into `main` and run `npm run deploy`. Spot-check https://laith-mimi-portfolio.pages.dev and repeat [quickstart.md](./quickstart.md) §2, §3 and §7 step 3 against it (Proda: Deploy to Cloudflare Pages)
- [ ] T080 Post-launch SEO: resubmit the sitemap in Google Search Console, test OG previews (LinkedIn Post Inspector, X), and run the Rich Results Test for Person, ProfilePage and BreadcrumbList with no errors. Proda milestone **Redesign live** then completes (Proda: Do the post-launch SEO checks)

---

## Dependencies & Execution Order

### Phase dependencies

- **Setup (Phase 1)**: no dependencies. T004–T006 run in parallel after T001–T003.
- **Foundational (Phase 2)**: depends on Setup. Inside the phase:
  - T007, T008 and T009 start first.
  - T010–T013 need T008.
  - T014 needs T010 and T011.
  - T015 needs T007, T008 and T009.
  - T016 needs T014 and T015.
  - T018 needs T010–T017.
  - T019 and T020 come after T018, then T021, then T022.
  - **This phase blocks all stories.**
- **User stories (Phases 3–7)**: each depends only on Phase 2. They are independent of each other; T047, T054 and T059 only add entries to the composition in `src/index.tsx`.
- **Content (Phase 8)**: T061–T068 can start as soon as the matching content file exists (Phase 2 or that story's phase), in parallel with the build. T069 needs all of T061–T068.
- **Polish (Phase 9)**: T070–T074 need all wanted stories. T075 needs T070–T074 and T069. T078 → T079 → T080 run strictly in sequence.

### User story dependencies

| Story | Depends on | Shares a file with |
|---|---|---|
| US1 Hero (P1) | Phase 2 | `src/index.tsx` composition and `site.css` (append-only) |
| US2 Projects (P1) | Phase 2 (content from T011) | `site.js` (adds a module) |
| US3 Skills/Services/Process/Background (P2) | Phase 2 (content from T012, T013) | `site.js` (count-up module) |
| US4 Contact/Nav (P2) | Phase 2 | `Document` slots, `site.js` (nav module) |
| US5 Testimonials (P3) | Phase 2 | — |

### Within each story

Content file → section component → client module → styles → register in `src/index.tsx` → `/impeccable` → validate.

### Parallel opportunities

- **Phase 1**: T004, T005 and T006.
- **Phase 2**: T008 and T009 (with T007); T012 and T013 (with T010 and T011); T017 and T019.
- **Once Phase 2 is done**: US1–US5 can each go to a different agent or session. Edits to the shared `src/styles/site.css`, `public/static/site.js` and `src/index.tsx` are append-only blocks, so merges stay small.
- **Within US3**: T036–T038 together, then T041–T045 together.
- **Phase 8**: T061–T068 are all independent (one content file each).
- **Phase 9**: T071, T072 and T073 together; T076 and T077 together.

---

## Parallel Example: User Story 3

```text
# After Phase 2, start the content files together:
Task: "T036 Create src/content/stats.ts"
Task: "T037 Create src/content/services.ts"
Task: "T038 Create src/content/process.ts"

# After T039 (Skills) and T040 (count-up), build the independent sections together:
Task: "T041 Create src/sections/Services.tsx"
Task: "T042 Create src/sections/Process.tsx"
Task: "T043 Create src/sections/Experience.tsx"
Task: "T044 Create src/sections/Certifications.tsx"
Task: "T045 Create src/sections/Volunteering.tsx"

# Then in sequence: T046 styles → T047 register → T048 /impeccable → T049 validate
```

---

## Implementation Strategy

### MVP first (User Story 1 only)

1. Phase 1 Setup, then Phase 2 Foundational (includes the **Foundation review** checkpoint).
2. Phase 3 (US1 hero and ticker).
3. **Stop and validate** (T028): the branch preview shows a finished DevSync-style hero with the SEO head intact.

### Incremental delivery

1. Foundation → US1 (hero) → US2 (projects): the two P1 stories. This is the minimum worth showing Laith side by side with DevSync.
2. US3 and US4 (P2), then US5 (P3). Validate after each story.
3. Laith's content (Phase 8) runs alongside the build; T069 closes it.
4. Polish → QA checkpoint → deploy only with Laith's approval (T079).

`main` (the live site) is untouched until T079, so partial progress never reaches visitors.

---

## Proda Mapping

The roadmap is https://proda.work/projects/ad3b4bcc-869a-468a-917b-9c5c0cf8fb80. Update the matching node when a task starts or finishes.

| Tasks | Proda node |
|---|---|
| T004 | Capture the DevSync design reference |
| T003, T005, T007 | Define design tokens |
| T008, T010–T014, T016, T018–T019 | Restructure index.tsx for the rebuild |
| T009, T015, T017, T020 | Build shared UI primitives |
| T021–T022 | ✓ Foundation review (checkpoint) |
| T051–T053 | Build the navigation bar |
| T023–T028 | Build the hero |
| T036, T039–T040 | Build the about and skills section |
| T029–T035 | Build the projects section |
| T037, T041 | Build the services accordion |
| T038, T042 | Build the process section |
| T043–T045 | Restyle experience, certifications and volunteering |
| T057–T060 | Build the testimonials marquee |
| T050, T054–T056 | Build the contact section and footer |
| (spec FR-015) | Decide on the clients and blog sections: defaulted to "skip" |
| T061–T068 | The eight `content`/`laith` tasks (named in each task) |
| T069 | Integrate final content and update SEO |
| T070 / T071 / T072 / T073 | Add animations and interactions / Do the responsive pass / Do the accessibility pass / Do the performance pass |
| T074–T075 | ✓ Design QA against DevSync (checkpoint) |
| T078 / T079 / T080 | Build and preview the site / Deploy to Cloudflare Pages / Do the post-launch SEO checks |

## Notes

- `[P]` means a different file and no dependency on an incomplete task. Shared append-only files (`site.css`, `site.js`, `src/index.tsx`) are deliberately **not** marked `[P]`.
- Commit after each task or logical group on branch `001-devsync-redesign`.
- Stop at any checkpoint to validate the story on its own.
- Never deploy, merge to `main`, or fill in Laith's content without his explicit say-so.

---

## Phase 10: SEO — name + services, Arabic version (plan: seo-plan.md)

- [X] T081 Rewrite per-locale titles/descriptions for name + services in `src/seo.ts` (`seo.page`)
- [X] T082 Add `makesOffer` (4 Services) to the Person JSON-LD and make service titles `<h3>` in `src/sections/Services.tsx`
- [X] T083 Add the Arabic page at `/ar`: `src/content/ar/*`, `src/i18n/ui.ts`, `getContent()` in `src/content/index.ts`, `renderPage()` in `src/index.tsx`
- [X] T084 RTL layout and Arabic type (Readex Pro) in `src/styles/site.css`; language switch in `src/sections/Nav.tsx` and the footer
- [X] T085 Canonical + hreflang (`en`/`ar`/`x-default`) in `src/components/Document.tsx`; bilingual sitemap in `src/seo.ts`
- [X] T086 1200×630 social cards `public/static/og-en.png` / `og-ar.png` from the dev route `/__og/:locale` (`.impeccable/build/og.cjs`)
- [X] T087 404 page with `noindex`; fix the `serveStatic` typing error in `src/index.tsx`
- [X] T088 Constitution PATCH 1.0.1: one page per locale (`.specify/memory/constitution.md`)
- [ ] T089 Laith approves the Arabic draft copy in `src/content/ar/*` and `src/i18n/ui.ts`
- [ ] T090 Record the Search Console baseline before launch (Laith's login)
- [ ] T091 After deploy: resubmit the sitemap, inspect `/ar`, run the Rich Results Test, check the OG previews
- [ ] T092 Authority: link the site from LinkedIn, GitHub, WeGrw, Datahack, Station J and Quest (Laith)
- [ ] T093 First KPI review against `seo-plan.md`; apply the decision rule
