# Feature Specification: DevSync-Style Portfolio Redesign

**Feature Branch**: `001-devsync-redesign`

**Created**: 2026-11-04

**Status**: Draft

**Input**: User description: "i want to redesign the website to match this web design: https://devsync.framer.website/ and i will update my portfolio content, use /impeccable fo the ui to ensure perfect ui/ux experience"

**Tracking**: Proda "Portfolio" roadmap (https://proda.work/projects/ad3b4bcc-869a-468a-917b-9c5c0cf8fb80). Requirement groups below map to its tags: foundation, sections, content, polish, launch.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A recruiter gets a strong first impression in the hero (Priority: P1)

A recruiter or hiring manager opens the portfolio (often on a phone, from a LinkedIn or CV link). Within the first screen they see who Laith is, what he does, how to reach him, and a way to download his CV, all in the DevSync visual language: dark background, mint accent, oversized name, code-flavored details.

**Why this priority**: The hero is the only part every visitor sees. A redesigned hero plus the new design system is already a shippable improvement on its own.

**Independent Test**: Load the page at 375px and 1280px wide. Without scrolling, confirm the greeting, role line, name, short intro, email and phone rows, social links and a CV button are visible and styled to match the reference hero.

**Acceptance Scenarios**:

1. **Given** a visitor opens the home page, **When** the first screen renders, **Then** they see a greeting, a role line, "Laith Mimi" as the page's only top-level heading in large mint type, a 2-3 sentence intro, labeled email and phone rows, slash-prefixed social links and a resume button.
2. **Given** the visitor clicks the resume button, **When** the CV file exists, **Then** the CV opens or downloads; **When** it does not exist yet, **Then** the button is not shown (no broken link).
3. **Given** the visitor sees the scroll indicator, **When** they activate it, **Then** the page moves to the next section.

---

### User Story 2 - A visitor browses projects and opens a case study (Priority: P1)

A visitor scrolls to the "// Explore Work" section, scans a grid of project cards (thumbnail, title, one-line summary, tech tags), and opens one to read the full case study in an overlay, then returns to where they were.

**Why this priority**: Projects are the evidence behind every claim on the page; this is the main reason technical reviewers visit.

**Independent Test**: Scroll to projects, open each card's case study with mouse and with keyboard only, read it, close it with the close button and with Escape, and confirm focus returns to the card that opened it.

**Acceptance Scenarios**:

1. **Given** the projects section is in view, **When** the visitor scans it, **Then** each project shows a thumbnail, title, one-line description and pill-shaped tech tags.
2. **Given** a visitor activates a project card, **When** the case study opens, **Then** it shows the project's overview, role, tech stack, key features, challenges and outcome in the new style, and the page behind it does not scroll.
3. **Given** a case study is open, **When** the visitor presses Escape or the close control, **Then** it closes and focus returns to the card.

---

### User Story 3 - A visitor understands Laith's skills, services, process and background (Priority: P2)

A visitor continues scrolling through grouped skills with headline stats, a numbered services list that expands one item at a time, a three-step working process, and Laith's experience, certifications and volunteering, all in the same visual language.

**Why this priority**: These sections turn the first impression into a decision; they matter after the hero and projects are right.

**Independent Test**: Scroll the full page; expand each service with mouse and keyboard; confirm each section uses the shared eyebrow/heading pattern and that stats count up once when they come into view.

**Acceptance Scenarios**:

1. **Given** the skills section, **When** it is viewed, **Then** skills appear as pills in named groups, with a stats row whose numbers animate up to their final values once.
2. **Given** the services list numbered (01)-(04), **When** the visitor opens one item, **Then** its description and a "Hire Me" call-to-action appear and any other open item closes.
3. **Given** the experience, certifications and volunteering sections (which the reference does not have), **When** they are viewed, **Then** they use the same eyebrow, heading, card and numbering patterns as the rest of the page.

---

### User Story 4 - A visitor gets in touch (Priority: P2)

From the sticky navigation's "Start Project" button, a service's "Hire Me" button, or the closing contact section, a visitor reaches Laith's contact options and can email him, call him, or open his social profiles.

**Why this priority**: Contact is the conversion goal, but the current site already provides it, so the redesign only restyles it.

**Independent Test**: From the top, middle and bottom of the page, use each contact entry point and confirm it reaches the contact section or opens the right mail/phone/social target.

**Acceptance Scenarios**:

1. **Given** the visitor is anywhere on the page, **When** they use the navigation's primary call-to-action, **Then** they arrive at the contact section.
2. **Given** the contact section, **When** the visitor activates email, phone or a social link, **Then** the correct mail client, dialer or profile opens.

---

### User Story 5 - Social proof via testimonials (Priority: P3)

If Laith supplies testimonials, visitors see them as a continuously scrolling strip of quote cards that pauses when hovered or focused.

**Why this priority**: Valuable but depends entirely on content Laith may not have yet.

**Independent Test**: With two or more testimonials supplied, confirm the strip scrolls, pauses on hover/focus and stops moving under reduced-motion settings. With none supplied, confirm the section does not appear at all.

**Acceptance Scenarios**:

1. **Given** at least one testimonial exists, **When** the section is in view, **Then** quote cards scroll horizontally in a loop showing quote, name and role.
2. **Given** no testimonials exist, **When** the page renders, **Then** the section and any navigation link to it are absent.

---

### Edge Cases

- Content Laith has not supplied yet is shown as a visible "TBD" placeholder in development builds and tracked as a task; it is never filled with invented or template sample text (e.g. DevSync's "Bruno Simon", sample clients or stats).
- Optional sections with no content (testimonials, clients, blog) are omitted entirely rather than shown empty.
- Visitors with reduced-motion preferences get no marquee movement, count-up or scroll-reveal animation; final values and content show immediately.
- Visitors with JavaScript disabled can still read every section's content, including stats' final numbers and all services' descriptions.
- Very long project titles, tag lists or translated names wrap without breaking card layouts from 360px to 1920px wide.
- A missing project thumbnail falls back to a styled placeholder of the same size so the grid does not shift.
- Opening a case study on a small phone fits the viewport and remains scrollable inside the overlay.

## Requirements *(mandatory)*

### Functional Requirements

**Visual system (foundation)**

- **FR-001**: The site MUST adopt the DevSync visual direction defined in the project constitution: near-black base, mint accent, muted grey secondary text, white body text, and the Space Grotesk typeface across a defined display and body type scale.
- **FR-002**: Every color, font and spacing value MUST come from one named set of design tokens, so a future restyle is a token change.
- **FR-003**: Shared patterns MUST be defined once and reused by every section: the `// Label` eyebrow, section headings framed by `</` and `>` glyphs, primary (mint) and outline buttons, pill tags, cards, and zero-padded numbering such as `01` and `(01)`.
- **FR-004**: The previous visual theme (indigo/violet palette, previous typeface, glass effects) MUST be fully removed; no section may mix old and new styles.

**Page sections**

- **FR-005**: The site MUST remain a single page, in this order: navigation, hero, skills and stats, projects, services, process, experience, certifications, volunteering, testimonials (when present), contact, footer.
- **FR-006**: The navigation MUST stay visible while scrolling, change its background once the visitor scrolls past the top, offer a "Start Project" call-to-action and in-page links, and collapse into an accessible menu on small screens.
- **FR-007**: The hero MUST include a greeting, a role line, the name "Laith Mimi" as the page's only top-level heading in oversized mint type, a short intro, email and phone rows with single-letter labels (E, T), slash-prefixed social links, a resume button, a scroll indicator, and Laith's photo.
- **FR-008**: The skills section MUST show skills as pills within named groups, followed by a stats row of up to three figures that count up once when first in view. Existing skill tooltip text MUST be kept where it fits.
- **FR-009**: The projects section MUST show a card grid (thumbnail, title, one-line description, tech tags). Each card MUST open the project's case study (the existing GeeksHub, Arabic tutor and NGO case studies, plus any Laith adds) in an overlay restyled to the new system.
- **FR-010**: The services section MUST list four numbered services as an accordion with one item open at a time, each with a description and a "Hire Me" call-to-action leading to contact.
- **FR-011**: The process section MUST show three numbered steps side by side on wide screens and stacked on narrow ones.
- **FR-012**: Experience, certifications and volunteering MUST be kept and rebuilt using the shared patterns, since the reference has no equivalent.
- **FR-013**: Testimonials, when supplied, MUST appear as a looping horizontal strip that pauses on hover and keyboard focus; with none supplied the section MUST NOT render.
- **FR-014**: The contact section and footer MUST provide a large call-to-action, email, phone, social links and language badges.
- **FR-015**: Clients and blog sections from the reference are OUT of scope for this feature. They may be added later only if Laith supplies real content (tracked by the Proda decision task "Decide on the clients and blog sections").
- **FR-016**: The reference's template-sales footer (purchase links, "Get this template", Framer badge) MUST NOT be reproduced.

**Content**

- **FR-017**: All copy, project details, stats, testimonials and links MUST be Laith's own. Missing items MUST be visibly marked "TBD" and tracked, never invented.
- **FR-018**: Page content MUST be editable in one place per content type (hero, skills, projects, services, process, experience, certifications, volunteering, testimonials, stats) without editing layout markup.
- **FR-019**: The resume button MUST link to Laith's CV file once it is provided, and MUST be hidden until then.

**Interaction & quality**

- **FR-020**: Scroll-reveal, count-up, marquee, accordion and hover effects MUST match the reference's feel and MUST be disabled or reduced under the visitor's reduced-motion preference.
- **FR-021**: Every interactive element MUST work by keyboard with a visible focus indicator; overlays MUST trap focus, close on Escape, and return focus to their trigger; the accordion MUST expose its open/closed state to assistive technology.
- **FR-022**: Text and interactive elements MUST meet WCAG 2.2 AA contrast against their backgrounds, including mint and grey text on the dark base.
- **FR-023**: All content MUST remain readable with scripts disabled.
- **FR-024**: Layouts MUST work without horizontal scrolling from 360px to 1920px wide.
- **FR-025**: The UI MUST pass a structured UX/UI design review (hierarchy, spacing, typography, states, motion, accessibility) before launch, with every issue rated high severity resolved.

**Search identity (must not regress)**

- **FR-026**: The page title, meta description, canonical URL, Open Graph and Twitter tags, Person structured data, sitemap, robots file and search-console verification route MUST all be preserved, and the structured data MUST be updated to match the new visible content.

### Key Entities

- **Profile**: name, greeting, role line, intro, email, phone, photo, CV link, social links (label + URL), spoken languages.
- **Stat**: label, numeric value, suffix (e.g. "+").
- **Skill Group**: group name, ordered list of skills; each skill has a name and optional tooltip text.
- **Project**: slug, title, one-line description, tech tags, thumbnail, and case-study content (overview, role, tech stack, key features, challenges & solutions, outcome, optional live/repo links).
- **Service**: number, title, description.
- **Process Step**: number, title, description.
- **Experience Entry**: role, organization, period, summary points.
- **Certification**: name, issuer, date, optional credential link.
- **Volunteering Entry**: role, organization, period, summary.
- **Testimonial**: quote, author name, author role/organization.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In a side-by-side review against reference screenshots at desktop (1440px) and mobile (390px) widths, every shared pattern (eyebrow, heading glyphs, buttons, pills, cards, numbering) and every section that exists in the reference is judged a match by Laith.
- **SC-002**: A first-time visitor on a phone can identify Laith's name, role and a contact method within 5 seconds of the page appearing, without scrolling.
- **SC-003**: A visitor can open, read and close any case study using only the keyboard, with focus returning to the starting card, in 100% of trials.
- **SC-004**: The production page scores at least 90 in each of the four Lighthouse categories (performance, accessibility, best practices, SEO) on mobile.
- **SC-005**: Zero contrast failures at WCAG 2.2 AA in an automated accessibility scan of the page.
- **SC-006**: No horizontal scrolling at any width from 360px to 1920px.
- **SC-007**: Zero instances of template sample content (e.g. "Bruno Simon", sample clients, sample testimonials) and zero unresolved "TBD" markers on the production site at launch.
- **SC-008**: All search-identity elements listed in FR-026 are present after launch, structured data validates without errors in a rich-results test, and the page still has exactly one top-level heading containing "Laith Mimi".
- **SC-009**: The structured UX/UI design review finds no unresolved high-severity issues at launch.

## Assumptions

- The visual tokens recorded in the constitution and the Proda "Start here" note (measured from the live reference) are the source of truth for colors, typeface and type scale. Spacing, container width and motion timing still need to be captured from reference screenshots (Proda task "Capture the DevSync design reference").
- The reference's separate pages (project list, project detail, contact, blog) are folded into the single page: the project list becomes the projects section, project detail pages become case-study overlays, and the contact page becomes the contact section. This follows the constitution's single-page principle.
- Clients and blog sections are excluded by default because there is no real content for them; this can be revisited via the existing Proda decision task.
- Laith writes all new content in parallel with the build (Proda tasks tagged `content`). The build proceeds with "TBD" placeholders until content arrives.
- Laith's photo stays in the hero; its exact placement follows the reference layout and is settled during the hero build.
- The structured design review in FR-025 is performed with the project's `/impeccable` UI/UX workflow during build and polish, as requested.
- Contact stays link-based (email, phone, socials), as it is today and on the reference; no contact form is added. Existing auxiliary routes are kept as-is.
- The site domain does not change.
