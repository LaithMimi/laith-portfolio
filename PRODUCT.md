# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: prospective Quest Solutions clients.** These are organizations, institutions, and founders deciding whether Laith Mimi, through Quest Solutions, can build an AI product for them. They come in from a link, a referral, or a search for his name. They need to find out quickly what he builds, whether it shipped, and how to reach him.

**Secondary: tech recruiters and engineering managers** hiring for software or AI engineering roles. They scan for skills, experience, education, and a CV.

## Product Purpose

The site is the personal portfolio of Laith Mimi, a software engineer and founder in Jerusalem. It does two things:

- Turns a visitor who is evaluating Laith into a contact: email, phone, LinkedIn, or GitHub.
- Holds the search identity for the name "Laith Mimi".

Success means a prospective client finishes the page convinced Laith can build their AI system and knowing how to start that conversation.

## Positioning

Laith is positioned as an **AI engineer who ships end to end**: agentic AI, RAG systems, LLM integration, and the full-stack product around them. He is also the founder of Quest Solutions.

- **Education technology is one strand, not the identity.** GeeksHub, the Arabic AI Tutor, and his Arabic teaching at Blend.ar are proof of this strand. The earlier "I build AI that teaches" framing is being broadened.
- **What a neighbor can't copy:** he combines founder and product leadership with hands-on AI engineering. He also works in Arabic, English, and Hebrew.

## Operating Context

- Visitors evaluate the page on its own, often on a phone, before any call or meeting. Recruiters may also download the CV.
- The real experience the site presents:
  - **Quest Solutions:** Founder, Nov 2025 – present.
  - **WeGrw Solutions:** Project Manager & Instructor, Aug 2025 – present.
  - **Blend.ar:** Arabic Teacher, 2024 – present.
  - **Datahack:** Project Coordinator, Jan 2026 – present (volunteer).
  - **PERACH:** School Guide, 2023–2024.
- **Education:** B.Sc. Software Engineering, Azrieli College of Engineering Jerusalem, 2021–2026.
- **Certifications:**
  - Agentic AI Bootcamp (Brightway)
  - AI in Healthcare (JINNOVATE)
  - QA & Automation with Playwright (Ecom Academy)

## Capabilities and Constraints

- **Format:** a single-page portfolio with the following sections:
  - hero
  - about
  - projects, with case-study modals
  - skills
  - experience
  - certifications
  - volunteering
  - contact
- **Stack:** Hono on Cloudflare Pages (`src/index.tsx`). Deployed at `https://laith-mimi-portfolio.pages.dev`.
- **Governing rules:** project rules live in `.specify/memory/constitution.md`, which takes precedence over this file on process. It requires:
  - an edge-rendered single page with no client framework;
  - every visual value as a token;
  - SEO preservation;
  - WCAG 2.2 AA and Lighthouse ≥ 90;
  - owner-approved content only.
- **SEO is non-negotiable:**
  - exactly one `<h1>`, and it contains "Laith Mimi";
  - keep the title, description, canonical URL, OG/Twitter tags, Person JSON-LD, sitemap, robots, and the Search Console route.
- **Terminology:** "Quest Solutions" (company), "GeeksHub" (flagship product), "Agentic AI", "RAG".

## Brand Commitments

- **Name:** "Laith Mimi" (Arabic: ليث ميمي). It must stay prominent and consistent with the structured data.
- **Photo:** `public/static/laith-photo-nobg.png`. The OG image and JSON-LD reference it.
- **Binding visual reference:** the constitution (Principle II) names DevSync (https://devsync.framer.website/) as the current visual reference. Changing that reference requires a constitution amendment.
- **Voice:** confident, personal, and specific, as in the current copy (for example "calling myself 'just a student' would be selling it short").

## Evidence on Hand

**Available, but must come from Laith:**
- **CV PDF:** to be added at `public/static/cv.pdf`. The hero already links to it, but the file is not in the repo yet.
- **Real project metrics:** they exist and should replace the "Metrics TBD" placeholders in the GeeksHub, Arabic Tutor, and NGO case studies. The numbers have not been supplied yet, so do not invent them.

**Absent. Do not fabricate:**
- project screenshots;
- public demo links or project repos;
- testimonials;
- client names beyond those listed above.

The current modals describe screenshots in words only. Any image slots must stay visibly marked as placeholders until Laith provides real assets.

**Existing copy:**
- the case-study text in the `caseStudies` constant and the modal markup;
- the about and experience text in `src/index.tsx`.

## Product Principles

1. **The client's decision comes first.** Every section should help a prospective client answer three questions: can he build my AI product, has he shipped, and how do I reach him?
2. **Show the AI engineer, not just the educator.** Education projects are evidence of range, not the boundary of what he does.
3. **Real proof or nothing.** Use only Laith's real metrics, assets, and claims. Mark gaps as TBD and never fill them with plausible fiction.
4. **Protect the name.** Search identity for "Laith Mimi" outranks any layout or visual change.
5. **Fast and readable everywhere.** The page is judged on phones and slow connections, so performance and accessibility are part of the pitch.

## Accessibility & Inclusion

- **Standard:** WCAG 2.2 AA contrast, full keyboard operation with visible focus, and modals that trap and restore focus and close on Escape.
- **Motion:** all motion respects `prefers-reduced-motion`.
- **Layout:** no horizontal scroll from 360px to 1920px.
- **Language:** the visitors are multilingual (Arabic, English, Hebrew), but the site is currently English only.
