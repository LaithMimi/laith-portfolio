# Contract: Design Tokens, Primitives and Section Behaviour

Values come from the reference measurements in [research R1](../research.md#r1-reference-measurements-spacing-type-radii). Section builds and the `/impeccable` reviews check against this contract.

## Tokens (`src/styles/site.css`, Tailwind v4 `@theme`)

Hex values appear **only** in this block. Everything else uses the variables or the utilities Tailwind generates from them.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#111111` | Page base, services section |
| `--color-surface` | `#191818` | Hero, process and alternate sections |
| `--color-raised` | `#25282B` | Cards, dialogs, open accordion item |
| `--color-line` | `#505559` | Dividers (2px) |
| `--color-pill` | `rgb(112 112 112 / 0.3)` | Pill/tag background, card borders |
| `--color-accent` | `#7AF298` | Name, eyebrows, glyphs, stats, primary button background |
| `--color-accent-ink` | `#111111` | Text on accent |
| `--color-text` | `#FFFFFF` | Body and headings |
| `--color-muted` | `#B5B5B5` | Secondary text, card descriptions, ticker |
| `--font-sans` | `"Space Grotesk", system-ui, sans-serif` | Everything |
| `--text-display` | `clamp(3.5rem, 11.5vw, 10.5rem)` / line-height 1 | Hero `<h1>` (168px at ≥ 1460px) |
| `--text-ticker` | `clamp(2.5rem, 5.6vw, 5rem)` / 1 | Name ticker |
| `--text-h2` | `clamp(2rem, 3.4vw, 3rem)` / 1.125 | Section headings (48px desktop) |
| `--text-lead` | `clamp(1.25rem, 1.7vw, 1.5rem)` / 1.4 | Greeting, role line |
| `--text-h3` | `1.375rem` / 1.4 | Card titles (22px) |
| `--text-body` | `1rem` / 1.6 | Body (16px) |
| `--text-small` | `0.875rem` / 1.4 | Pills, meta (14px) |
| `--spacing-section` | `clamp(4.5rem, 8.3vw, 7.5rem)` | Section padding (120px desktop) |
| `--spacing-hero-top` | `clamp(7rem, 11vw, 10rem)` | Hero top padding (160px desktop) |
| `--spacing-header` | `3.5rem` | Section header → content (56px) |
| `--spacing-title` | `2rem` | Title → divider (32px) |
| `--container` | `80rem` (1280px) | Section content max width |
| `--container-wide` | `100rem` (1600px) | Nav and hero max width |
| `--gutter` | `1rem` | Side padding (16px) |
| `--radius-pill` | `999px` | Pills, buttons |
| `--radius-card` | `0.75rem` | Cards, thumbnails, dialogs |
| `--radius-sm` | `0.25rem` | Small elements |
| `--focus-ring` | `2px solid var(--color-accent)`, offset 3px | All `:focus-visible` |
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | Reveal and hover transitions |
| `--duration` | `600ms` (reveal), `200ms` (hover) | Motion |

## Primitives (`src/components/primitives.tsx`)

Each primitive is built once and reused everywhere (Principle II).

| Primitive | Renders | Rules |
|---|---|---|
| `Section` | `<section id aria-labelledby>` with alternating `bg`/`surface` tone, section padding and container | Tone is passed in as a prop, never hard-coded per section |
| `Eyebrow` | `<p class="eyebrow">// {label}</p>`, mint, 16px/400 | Text starts with `// ` |
| `SectionHeading` | Eyebrow + `<h2 id>` with mint `</` before and `>` after (the glyphs are `aria-hidden`) + 2px divider | Always an H2. The glyphs are not part of the accessible name |
| `Button` | `<a>` or `<button>`; variants `primary` (accent background, accent-ink text) and `outline` (pill border, text colour) | Minimum target 44×44px; visible focus ring; optional icon |
| `Tag` | Pill: `--color-pill` background, 14px text | Not interactive |
| `Card` | `--color-raised` surface, `--radius-card`, 1px `--color-pill` border; hover lifts 2px and turns the border to accent | Hover effect is disabled under reduced motion (border change only) |
| `Index` | Zero-padded number: `01` or `(01)` style | `aria-hidden` when the number is decorative |
| `SlashLink` | Mint `/ ` + label, external links get `rel="noopener"` | Used for socials |
| `Tbd` | `<span data-tbd class="tbd">TBD: {note}</span>`, dashed accent outline | Never styled to hide |
| `Marquee` | Track holding the items twice; the second copy is `aria-hidden` | Pauses on hover/focus-within; static under reduced motion |

## Section anchors

The order is fixed (FR-005). Ids are used by nav links and must stay stable.

| # | id | Tone | Nav label | Rendered when |
|---|---|---|---|---|
| — | `top` (header) | transparent → `bg` when scrolled | — | always |
| 1 | `hero` | `surface` | — | always |
| 2 | `skills` | `bg` | Skills | always |
| 3 | `projects` (kept from the current site so existing deep links keep working) | `surface` | Work | always |
| 4 | `services` | `bg` | Services | always |
| 5 | `process` | `surface` | Process | always |
| 6 | `experience` | `bg` | Experience | always |
| 7 | `certifications` | `surface` | (in Experience group) | non-empty |
| 8 | `volunteering` | `bg` | (in Experience group) | non-empty |
| 9 | `testimonials` | `surface` | Testimonials | non-empty |
| 10 | `contact` | `bg` | Contact (CTA "Start Project") | always |

The tone alternation is recomputed if an optional section is hidden, so two neighbouring sections never share a tone.

## Section behaviour contract

| Section | Must | Keyboard / AT | Motion (reduced → fallback) |
|---|---|---|---|
| Nav | Sticky. Name or mark on the left, links plus "Start Project" primary button on the right. Below 768px: menu button and panel | Skip link first; menu button has `aria-expanded`/`aria-controls`; Escape closes the panel; the current section gets `aria-current="true"` | Background fade → instant |
| Hero | Greeting, role, `<h1>` name (mint, display size), intro, E/T rows (`mailto:`/`tel:`), slash socials, resume button (only if `cvUrl`), scroll cue linking to `#skills`, photo | Scroll cue is a link with an accessible name | Scroll-cue bob animation → static |
| Name ticker | "Laith Mimi" repeated, muted 80px, between the hero and skills | Whole band is `aria-hidden` | Scroll → static |
| Skills | Groups of Tags (tooltip via `title` attribute and a visually hidden description), stats row, resume button | Stats are plain text | Count-up → final value |
| Projects ("// Explore Work") | Card grid (1 / 2 / 3 columns at < 768 / < 1280 / ≥ 1280px); each card links to `#case-{slug}` and opens a `<dialog>` | Dialog: focus moves to the close button, Tab is trapped, Escape and backdrop close it, focus returns to the card; body scroll locked | Dialog fade/scale → instant |
| Services | Four `<details name="services">` items, (01)–(04); open item shows the description and the "Hire Me" button (`#contact`). The first item is open by default | Native summary toggle; state exposed natively | Chevron rotate → instant |
| Process | Three numbered steps: three columns ≥ 1024px, stacked below | — | Reveal → none |
| Experience / Certifications / Volunteering | Numbered rows (experience) and card grids (certifications, volunteering) using the same primitives | Credential links are real links | Reveal → none |
| Testimonials | Marquee of quote Cards (quote, author, role); omitted when empty | Quote cards are not focusable; the pause also works on `:focus-within` for keyboard users who reach links | Marquee → horizontal scroll-snap row |
| Contact + footer | Large CTA heading, email/phone, socials, language badges, © year + name | All links keyboard reachable | Reveal → none |

## Global rules

- Layout must work from 360px to 1920px with no horizontal scroll. Marquees clip with `overflow: hidden` on their own band, never on `body`.
- Every interactive element shows the `--focus-ring` on `:focus-visible`.
- Hover-only information is not allowed. Tooltip text is also available to assistive technology.
- `[data-reveal]` hides content only under `html.js` and only without reduced motion.
