# Contract: HTTP Routes and Document Head

The redesign must not change any public URL. All routes are served by the single Hono worker. `/static/*` is served by Cloudflare Pages assets (excluded from the worker via the generated `_routes.json`), with `serveStatic` as the dev-time equivalent.

## Routes

| Method & path | Response | Change in this feature |
|---|---|---|
| `GET /` | `200 text/html`, the full portfolio page (contract below) | Rebuilt |
| `GET /sitemap.xml` | `200 application/xml`; one `<url>` for `{siteUrl}/` with `<lastmod>` and an `<image:image>` for the profile photo | Built from `seo.siteUrl` (no hard-coded domain) |
| `GET /robots.txt` | `200 text/plain`; `Allow: /` and `Sitemap: {siteUrl}/sitemap.xml` | Built from `seo.siteUrl` |
| `GET /googled00677178c1e649e.html` | `200 text/html`, Search Console verification body (byte-identical) | Unchanged |
| `GET /api/contact` | `200 application/json` `{ email, phone, linkedin, github }` | Values now read from `content/profile.ts` (same keys) |
| `GET /api/health` | `200 application/json` `{ status: "ok", timestamp, version }` | Unchanged |
| `GET /static/*` | Static assets | `site.css`, `site.js`, `fonts/`, `img/`, `projects/` added; dead files removed |

## `GET /` document contract

### `<head>` must contain, in this order of importance

1. `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">`.
2. `<title>`: `seo.title` (must begin with "Laith Mimi").
3. `<meta name="description">`: `seo.description`.
4. `<link rel="canonical" href="{siteUrl}/">`.
5. Open Graph: `og:type=profile`, `og:title`, `og:description`, `og:url`, `og:image` (`{siteUrl}/static/laith-photo-nobg.png`, with width/height/alt), `og:locale`, `og:site_name`, `profile:first_name`, `profile:last_name`.
6. Twitter: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:creator` (when a handle is set).
7. `<meta name="theme-color" content="#111111">` (value read from the token constant in `seo.ts`, which mirrors `--color-bg`; this is the one allowed duplicate, because a meta tag cannot reference a CSS variable).
8. Icons: `apple-touch-icon` and favicon.
9. `<link rel="preload" href="/static/fonts/space-grotesk-latin-var.woff2" as="font" type="font/woff2" crossorigin>`.
10. `<link rel="stylesheet" href="/static/site.css">`, the only stylesheet.
11. An inline script of 200 bytes or less that replaces `no-js` with `js` on `<html>`. It is the only inline script.
12. `<script src="/static/site.js" defer>`.
13. JSON-LD scripts: Person (`@id {siteUrl}/#person`), WebSite (no SearchAction), ProfilePage, ItemList (generated from projects), BreadcrumbList.
14. `<noscript><style>` exposing case-study dialogs as static blocks.

### `<head>` must NOT contain

- Any third-party `<script>` or stylesheet (Tailwind CDN, Font Awesome, Google Fonts, jsDelivr).
- A hard-coded site domain outside values derived from `seo.siteUrl`.

### `<body>` contract

- `<html lang="en" class="no-js">`.
- Exactly one `<h1>`, whose text content contains "Laith Mimi".
- Landmarks: one `<header>` (nav), one `<main>`, one `<footer>`. Every `<section>` has an `id` from [ui-components.md § Section anchors](./ui-components.md#section-anchors) and an `aria-labelledby` pointing to its H2.
- A skip link ("Skip to content" → `#main`) as the first focusable element.
- No element has `data-tbd` in a production launch build (SC-007).
- No text from the DevSync template's sample identity ("Bruno Simon", "brunosimon", "Launchly", "Drift & Bloom", "BankTech").
