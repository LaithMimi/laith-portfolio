# DevSync Reference: Layout and Behaviour Notes

Captured 2026-11-06 from https://devsync.framer.website/ with Playwright.

Files:
- `devsync-1440.jpg`: full page at 1440×900. Rendered width is 1425 because of the scrollbar. Sliced into `slices-1440/part-0…7.jpg`, each 1600px tall.
- `devsync-390-hero.jpg`: first screen at 390×844. A full-page capture at 390px fails because the page is about 16,500px tall.
- `measure-1440.json`: computed styles.

The floating "Get this template", "Unlock 35+ Templates", "Made in Framer" and WhatsApp widgets are template-sales chrome. **Do not reproduce them** (spec FR-016).

## Layout by section (1440 → 390)

| Section | Desktop layout | Mobile layout |
|---|---|---|
| Header | Not sticky. Uppercase name "logo" at top left (16px, 600). A white pill "Menu" button with a `<>` glyph at top right, 76px tall bar | Same |
| Hero | Background `#191818` with a large radial mint glow behind the photo. Line 1: "Hey, 👋 I'm a Full Stack Developer" (24px/700, one line). The name is **uppercase**, 168px/1.0, mint, on one line. The photo is centred below the name and overlaps it slightly. Bottom left: the `E`/`T` rows. Right column: the intro paragraph (≈354px wide) above a row of slash socials. A vertical "SCROLL" label with a thin line is pinned to the right edge | Greeting and role on two lines. Name at 80px over two lines. Photo below. Intro after it |
| Ticker | The name repeated in uppercase, 80px, `#B5B5B5`, separated by a mint `✱`. Scrolls horizontally right to left in a constant loop. A stack of rotated photos animates over it (decorative; skipped in our build) | 68px tall band |
| Skills | Two columns. **Left (≈550px)**: `// Skills` eyebrow, then groups. Each group is a row with a bold name (16/600), a `</>` glyph on the right, the skills as **plain inline text** (14px, light grey, no pills), and a 1px divider under each group. **Right**: about paragraph (16px/1.6) and a mint pill "My Resume" button with dark text | Stacked |
| Stats | Three columns. Number 48px/700 white with "+" suffix, mint label (16px) below, 1px divider under each | Stacked |
| Section header (all later sections) | H2 (48/54, bold, white) sits in the **right half** of the container, starting at about 56% of the width. Below it is a full-width 1px `#505559` line with a mint `</` at the left end and a mint `>` at the right end. The `// Label` eyebrow sits at the left, level with the H2 | H2 32–36px full width; same divider |
| Projects | Two-column grid of cards with gaps of about 120px horizontally and 110px vertically. Each card: a 16:10-ish image (square corners or a very small radius), a 22px/700 title, a 16px muted 2–3-line description, then pill tags: `#252525`-ish background, **mint text**, 14px, fully rounded. A centred mint pill "View More Projects" button follows | Single column |
| Services | Numbered (01)–(04) accordion on `#111111` (did not render in the capture because of scroll-triggered animation) | — |
| Process | `#191818` band. Three columns divided by 1px vertical lines. Each column is tall (≈380px), with its title (22px/700) and small muted text (14px) at the **bottom** | Stacked |
| Testimonials | A large quote (≈32px/600, white) beside a portrait photo, name and role. A big mint quotation mark. Mint square prev/next arrow buttons. Slides horizontally | — |
| Clients | 4×2 grid of bordered logo cells (out of scope, FR-015) | — |
| Blog | Three cards (out of scope, FR-015) | — |
| CTA | A huge **uppercase** headline (≈64px, white, centred, three lines) with an inline **circular** mint "Start Project" button (≈130px) and a radial mint glow behind it | 32px |
| Footer | Three columns of uppercase links (16/600) under mint column headings (Quick links / Portfolio / Social Link). Email and phone at 22px. Bottom row: small uppercase legal links | Stacked |

## Behaviour

- **Scroll reveals**: sections and items fade and slide up on entering the viewport (Framer default, about 0.6–0.8s, ease-out). Most content is hidden until revealed, which is why parts of the capture are empty. Our build keeps content visible without JS (research R6).
- **Ticker**: constant speed of roughly 60–80px/s, linear and infinite. It does not pause on hover.
- **Hover**: pill buttons lighten or brighten slightly. Project images zoom slightly inside the frame. Links underline or turn mint.
- **Accordion**: one item open at a time; the open item shows its description and a "Hire Me" button.
- **Mobile section padding**: 56px (desktop 120px). Mobile CTA padding 48px 16px.

## Deliberate differences in our build

- A sticky nav with section links and a "Start Project" CTA, not a "Menu"-only button (spec FR-006).
- The ticker is `aria-hidden` and uses no heading elements (research R2).
- Testimonials are a continuous marquee, not an arrow carousel (spec FR-013).
- No floating template widgets, clients or blog.
