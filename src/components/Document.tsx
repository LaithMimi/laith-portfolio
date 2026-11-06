/**
 * Page shell: <head> per contracts/routes.md (SEO identity, constitution III) + body slots.
 * One shell for every locale: lang/dir, canonical, hreflang alternates and OG locale come from `locale`.
 * No third-party origins. The only inline script swaps no-js → js before first paint.
 */
import type { Child } from 'hono/jsx'
import { raw } from 'hono/html'
import { abs, seo, serializeJsonLd } from '../seo'
import type { Locale } from '../content'
import { getUi, localePath } from '../i18n/ui'

const NO_JS_SWAP = "document.documentElement.className=document.documentElement.className.replace('no-js','js')"

/** Without JS, case studies render as normal blocks after the project grid. */
const NOSCRIPT_CSS =
  'dialog.case-study{display:block;position:static;inset:auto;max-height:none;transform:none;opacity:1;margin:2rem auto}.case-close{display:none}'

export function Document(props: {
  locale: Locale
  jsonLd: unknown[]
  /** For pages that must not be indexed (404). */
  noindex?: boolean
  header?: Child
  footer?: Child
  children: Child
}) {
  const { locale } = props
  const ui = getUi(locale)
  const page = seo.page[locale]
  const url = abs(localePath(locale))
  const ogImage = abs(page.ogImage.path)
  const otherLocale: Locale = locale === 'ar' ? 'en' : 'ar'
  return (
    <>
      {raw('<!DOCTYPE html>')}
      <html lang={ui.lang} dir={ui.dir} class="no-js" prefix="og: https://ogp.me/ns#">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{page.title}</title>
          <meta name="description" content={page.description} />
          <meta name="keywords" content={page.keywords} />
          <meta name="author" content={seo.author} />
          <meta
            name="robots"
            content={props.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
          />
          {/* Raw HTML: Hono's JSX dedupes <link> elements that share an href (canonical, en and x-default do). */}
          {props.noindex
            ? null
            : raw(
                `<link rel="canonical" href="${url}"/>` +
                  `<link rel="alternate" hreflang="en" href="${abs('/')}"/>` +
                  `<link rel="alternate" hreflang="ar" href="${abs('/ar')}"/>` +
                  `<link rel="alternate" hreflang="x-default" href="${abs('/')}"/>`
              )}

          <meta property="og:type" content="profile" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={page.title} />
          <meta property="og:description" content={page.ogDescription} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content={String(page.ogImage.width)} />
          <meta property="og:image:height" content={String(page.ogImage.height)} />
          <meta property="og:image:alt" content={page.ogImage.alt} />
          <meta property="og:site_name" content={seo.siteName} />
          <meta property="og:locale" content={ui.ogLocale} />
          <meta property="og:locale:alternate" content={getUi(otherLocale).ogLocale} />
          <meta property="profile:first_name" content="Laith" />
          <meta property="profile:last_name" content="Mimi" />
          <meta property="profile:username" content="laithmimi" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={page.title} />
          <meta name="twitter:description" content={page.ogDescription} />
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:image:alt" content={page.ogImage.alt} />
          <meta name="twitter:creator" content={seo.twitterHandle} />

          <meta name="theme-color" content={seo.themeColor} />
          <meta name="color-scheme" content="dark" />
          <meta name="format-detection" content="telephone=yes" />
          <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href={seo.personImage.path} />

          <link rel="preload" href="/static/fonts/space-grotesk-latin-var.woff2" as="font" type="font/woff2" crossorigin="" />
          {locale === 'ar' ? (
            <link rel="preload" href="/static/fonts/readex-pro-arabic-var.woff2" as="font" type="font/woff2" crossorigin="" />
          ) : null}
          <link rel="stylesheet" href="/static/site.css" />
          <script dangerouslySetInnerHTML={{ __html: NO_JS_SWAP }} />
          <script src="/static/site.js" defer />

          {props.jsonLd.map((block) => (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(block) }} />
          ))}
          <noscript>
            <style dangerouslySetInnerHTML={{ __html: NOSCRIPT_CSS }} />
          </noscript>
        </head>
        <body>
          <a class="skip-link" href="#main">
            {ui.skip}
          </a>
          {props.header}
          <main id="main" tabindex={-1}>
            {props.children}
          </main>
          {props.footer}
        </body>
      </html>
    </>
  )
}
