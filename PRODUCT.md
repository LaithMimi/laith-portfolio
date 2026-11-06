# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers** evaluating Laith for software/AI engineering roles. They usually arrive from a CV, LinkedIn or a job application, often on a phone and between other tasks. They need to judge quickly who he is, what he has built and how to reach him. (Confirmed: "Both, jobs first".)
- **Secondary: prospective clients** of Laith or his agency, Quest Solutions, looking for an engineer to build a product, especially in EdTech. They need to see relevant work and a clear way to start a conversation.

## Product Purpose

A single-page personal portfolio for Laith Mimi. It turns a first visit into a contact: an interview request or a project inquiry. A second, durable purpose is to rank first in search for the name "Laith Mimi" (see `.specify/memory/constitution.md`, Principle III).

Success means a visitor can name his role, see his strongest projects and reach him without hunting, and that search identity holds.

## Positioning

**An engineer who builds AI that helps people learn.** RAG systems, agentic AI and full-stack products aimed at education: GeeksHub (AI study hub for university students), an Arabic AI tutor, and Quest Solutions (an EdTech SaaS agency he founded). Teaching (Blend.ar) and community work (Datahack, PERACH) back the education focus with real experience. (Confirmed: "AI for education".)

## Operating Context

- Visitors are evaluating, not transacting. They skim the hero, open one or two projects and look for contact details or a CV.
- Typically reached from a LinkedIn profile, CV link, job application or search for his name.
- Laith maintains the site alone and edits content himself, so content must be easy to change without touching layout.

## Capabilities and Constraints

- Hono app on Cloudflare Pages, server-rendered single page, plain JavaScript only. Rules are in `.specify/memory/constitution.md`.
- The page includes project case studies (overlays), services, a working process, experience, certifications, volunteering, optional testimonials, and contact links (email, phone, LinkedIn, GitHub). There is no contact form.
- SEO identity must not regress: title, meta, Open Graph, Person JSON-LD, sitemap, one `<h1>` containing "Laith Mimi".
- **Undecided**: clients and blog sections (left out until real content exists); the final stats; whether testimonials exist.

## Brand Commitments

- Name: **Laith Mimi** (Arabic: ليث ميمي). Based in Jerusalem. Speaks Arabic (native), English (fluent), Hebrew (excellent).
- **Visual direction is pinned by the owner**: match the DevSync reference (https://devsync.framer.website/). It is recorded in the constitution, Principle II, and in `specs/001-devsync-redesign/`.
- Copy is Laith's own. Never use template sample identity (e.g. "Bruno Simon") or invented claims.

## Evidence on Hand

- Profile photo: `public/static/laith-photo-nobg.png` (576×1024, transparent background), with WebP renditions in `public/static/img/`.
- Real content migrated from the previous site: about text, experience (Quest Solutions, WeGrw Solutions, Blend.ar), certifications (Agentic AI Bootcamp, AI in Healthcare, QA & Automation), volunteering (Datahack, PERACH), three case studies (GeeksHub, Arabic Chatbot AI Tutor, NGO Social Platform), skill groups with tooltips, and stats (3 AI projects shipped, 2 companies founded/led, 3 languages, 4 years engineering).
- **Absent, must not be fabricated**: project screenshots and thumbnails, CV PDF, testimonials, client logos, project metrics (marked "TBD" on the old site), services and process copy.

## Product Principles

1. **Proof before polish.** Real projects and real roles carry the page; visual flair supports them and never replaces them.
2. **Thirty-second clarity.** Name, role, positioning and a contact path are understandable from the first screen on a phone.
3. **Jobs first, clients welcome.** Copy reads as a strong candidate, while calls to action still work for someone who wants to start a project.
4. **Honest gaps.** Missing content is visibly marked and tracked, never filled with plausible fiction.
5. **Findable by name.** Nothing ships that weakens search identity for "Laith Mimi".

## Accessibility & Inclusion

WCAG 2.2 AA. Fully keyboard operable. `prefers-reduced-motion` respected. All content readable without JavaScript. Usable from 360px to 1920px wide. Lighthouse mobile ≥ 90 in all categories (constitution, Principle IV).
