# SEO Plan: Name + Services, English + Arabic

**Scope (decided with Laith, 2026-11-06)**:
- **Targets**: rank #1 for "Laith Mimi", plus service searches.
- **Locales**: English `/` and Arabic `/ar`.
- **Skipped**: articles and topic clusters (blog content phases).

## Phase 1 — Goal, KPIs, baseline

- **Primary goal**: inquiries, meaning clicks on the email, phone and "Start Project" links and the services' "Hire Me".
- **KPIs** (Google Search Console, reviewed each cycle):
  - impressions and clicks for "Laith Mimi" / "ليث ميمي" (keep position 1);
  - impressions for service queries, e.g. "AI workshops for teachers", "AI automation Arabic business", "WhatsApp bot Jerusalem", "custom AI assistant documents", "MVP developer Israel";
  - CTR on the home pages;
  - indexed pages (expect 2: `/` and `/ar`).
- **Baseline**: record clicks, impressions, top queries and top pages from Search Console **before** launch. This needs Laith's login.

## Phase 2 — Technical foundation (done in code)

| Item | Where |
|---|---|
| Server-rendered HTML, one `<h1>` per locale | `src/index.tsx`, `src/sections/Hero.tsx` |
| Titles/descriptions naming the services + Jerusalem, per locale | `src/seo.ts` `seo.page` |
| Canonical + hreflang `en` / `ar` / `x-default` | `src/components/Document.tsx` |
| JSON-LD: Person with `makesOffer` (4 Services), WebSite, ProfilePage, ItemList, BreadcrumbList | `src/seo.ts` `jsonLd()` |
| Service titles as `<h3>` | `src/sections/Services.tsx` |
| Sitemap with both URLs and `xhtml:link` alternates; robots | `src/seo.ts` |
| 1200×630 social cards per locale | `public/static/og-en.png`, `og-ar.png` (from dev route `/__og/:locale`) |
| Real 404 with `noindex` | `app.notFound` in `src/index.tsx` |
| Core Web Vitals | Lighthouse mobile 100/100/100/100 on both locales (preview), LCP 1.7 s, CLS 0 |

## Phase 3 — Localization (done in code; copy needs approval)

- `/ar`:
  - right-to-left layout;
  - Arabic type in Readex Pro (self-hosted);
  - language switch in the nav and footer.
- Arabic copy (`src/content/ar/*`, `src/i18n/ui.ts`) is a **draft translation** of Laith's English. It must be approved before launch.

## Phase 5 — Authority and review loop (Laith)

1. **After deploy**:
   - resubmit the sitemap and inspect `/ar` in Search Console;
   - run the Rich Results Test on both URLs;
   - check the share previews in LinkedIn Post Inspector and X.
2. **Links**:
   - put the site on the LinkedIn profile (`linkedin.com/in/laith-mimi-0307g`) and the GitHub profile;
   - ask WeGrw, Datahack, Station J and Quest to link to it.
3. **Optional**: a Google Business Profile for the Jerusalem services.
4. **Review cycle**: compare against the KPIs above.
   - **Decision rule**: if no service query earns impressions by the first review, rewrite the service titles and descriptions around the queries that do appear.
