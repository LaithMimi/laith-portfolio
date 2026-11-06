# Quickstart: Run and Validate the DevSync Redesign

**Feature**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

This guide is how to run the redesign and prove it meets the spec. It covers the constitution's quality gates. It is not an implementation guide.

## Prerequisites

- Node.js 20+ and npm.
- Chrome, for Lighthouse and DevTools device emulation.
- Being on branch `001-devsync-redesign` (`git switch -c 001-devsync-redesign` the first time).
- `npm install` has been run. It adds the dev-only `tailwindcss` and `@tailwindcss/cli`; see [research R4](./research.md#r4-styling-tailwind-built-at-compile-time-tokens-defined-once).

## 1. Run locally

```bash
npm run dev:css     # terminal 1: Tailwind watch → public/static/site.css
npm run dev         # terminal 2: Vite + Hono dev server (URL printed, usually http://localhost:5173)
```

To run the production build locally:

```bash
npm run build       # build:css + vite build → dist/
npm run preview     # wrangler pages dev on http://localhost:8788
```

**Expected**: both commands exit 0. `npx tsc --noEmit` reports no new errors (gate 1).

## 2. Route contract smoke test

Against the preview server (`BASE=http://localhost:8788`):

```bash
curl -s -o /dev/null -w "%{http_code}\n" $BASE/                              # 200
curl -s $BASE/sitemap.xml | grep -c "laith-mimi.pages.dev"         # ≥ 1
curl -s $BASE/robots.txt | grep "Sitemap:"                                   # present
curl -s -o /dev/null -w "%{http_code}\n" $BASE/googled00677178c1e649e.html   # 200
curl -s $BASE/api/contact                                                    # JSON with email, phone, linkedin, github
curl -s $BASE/api/health                                                     # {"status":"ok",...}
```

**Expected**: all match [contracts/routes.md](./contracts/routes.md).

## 3. Head / SEO checklist (gate 4; spec FR-026, SC-008)

```bash
curl -s $BASE/ > /tmp/page.html
grep -c "<h1" /tmp/page.html                                         # exactly 1
grep -o "<title>[^<]*" /tmp/page.html                                 # starts with "Laith Mimi"
grep -c 'application/ld+json' /tmp/page.html                          # 5
grep -Ec 'cdn.tailwindcss|fontawesome|fonts.googleapis|jsdelivr' /tmp/page.html   # 0
grep -Eic 'bruno|launchly|drift & bloom|banktech' /tmp/page.html      # 0
```

Then paste the page source into https://search.google.com/test/rich-results (or validator.schema.org).

**Expected**: Person, ProfilePage and BreadcrumbList parse with no errors. Name, email, phone and social links match the visible page.

## 4. Browser walkthrough (gate 2; user stories 1–5)

Open the page with DevTools device emulation at **375px, 768px and 1280px** (also try 360px and 1920px for SC-006). At each width:

| Check | Expected | Spec |
|---|---|---|
| First screen, no scrolling (375px) | Greeting, role, mint "Laith Mimi", intro, E/T rows, socials and resume button (if CV set) visible | US1, SC-002 |
| Scroll cue | Moves to `#skills` | US1-3 |
| Horizontal scroll | None at any width (`document.documentElement.scrollWidth === innerWidth`) | FR-024 |
| Stats | Count up once on first view, then stay | FR-008 |
| Project card → dialog (mouse) | Opens the case study; page behind does not scroll; backdrop click closes it | US2 |
| Services | Opening one item closes the other; "Hire Me" goes to `#contact` | US3, FR-010 |
| Testimonials | Marquee moves and pauses on hover; section absent if `testimonials = []` | US5, FR-013 |
| Nav | Gains a background after scrolling; "Start Project" goes to `#contact`; mobile menu opens and closes | US4, FR-006 |
| Console | No errors or warnings from site code | gate 2 |

## 5. Keyboard, motion and no-JS checks (FR-020–FR-023, SC-003)

1. **Keyboard only**, from page load:
   - Tab: the skip link appears first.
   - Every link and button shows the mint focus ring.
   - Open a project with Enter: focus lands in the dialog, and Tab stays inside it.
   - Escape closes the dialog, and focus returns to the same card. Repeat for every project; this must pass every time.
   - Space/Enter toggles the services items.
2. **Reduced motion**: in DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce", then reload.
   - **Expected**: no reveal, ticker, marquee or count-up animation. All content and final numbers are visible. Testimonials are a scrollable row.
3. **JavaScript disabled**: in DevTools → Settings → Debugger → Disable JavaScript, then reload.
   - **Expected**: every section's text is readable, including all case studies (shown after the grid) and the services descriptions (expandable natively). Stats show final numbers. The nav links are visible.

## 6. Content launch gate (FR-017, FR-019, SC-007)

```bash
grep -c 'data-tbd' /tmp/page.html          # must be 0 before deploy
grep -o 'href="/static/cv.pdf"' /tmp/page.html && curl -s -o /dev/null -w "%{http_code}\n" $BASE/static/cv.pdf   # 200 if linked
```

**Expected**: no TBD markers, and every linked asset returns 200. During development, TBD markers are expected; they appear as dashed mint "TBD: …" labels.

## 7. Quality gates before deploy (SC-001, SC-004, SC-005, SC-009)

1. **Design fidelity** (gate 3): compare each section side by side with `reference/` screenshots at 1440px and 390px. Laith signs off. This is the Proda checkpoint "Design QA against DevSync".
2. **UX/UI review** (FR-025): run `/impeccable` critique and audit on the running page. **Expected**: no unresolved high-severity findings.
3. **Lighthouse**, mobile:
   ```bash
   npx lighthouse http://localhost:8788 --form-factor=mobile --only-categories=performance,accessibility,best-practices,seo --view
   ```
   **Expected**: each category ≥ 90. Accessibility shows 0 contrast failures.
4. **Deploy** (gate 5): `npm run deploy`. Then repeat §2, §3 and step 3 of this section against `https://laith-mimi.pages.dev`, resubmit the sitemap in Search Console, and test OG previews (LinkedIn Post Inspector, X).

## Done when

All sections above pass on the deployed URL. The Proda milestone "Redesign live" can then be completed.
