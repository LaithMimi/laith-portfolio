/**
 * 1200x630 social-share card (dev-only route /__og/:locale). Screenshotted to public/static/og-<locale>.png
 * by .impeccable/build/capture.cjs --og. Uses the site's tokens, font and portrait.
 */
import { raw } from 'hono/html'
import type { Locale } from '../content'
import { getContent } from '../content'
import { getUi } from '../i18n/ui'
import { plain } from '../content/tbd'
import { seo } from '../seo'

export function OgCard({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const { profile } = getContent(locale)
  return (
    <>
      {raw('<!DOCTYPE html>')}
      <html lang={ui.lang} dir={ui.dir}>
        <head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/site.css" />
        </head>
        <body class="og-body">
          <div class="og-card">
            <div class="og-glow" />
            <p class="og-role">{plain(profile.role)}</p>
            <p class="og-name" lang="en">
              {profile.name}
            </p>
            <img class="og-portrait" src="/static/img/laith-portrait.webp" width="1100" height="1716" alt="" />
            <p class="og-meta">
              <span>Quest · AI</span>
              <span lang="en">{new URL(seo.siteUrl).host}</span>
            </p>
          </div>
        </body>
      </html>
    </>
  )
}
