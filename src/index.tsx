import { Hono } from 'hono'
import type { Context } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import type { Child } from 'hono/jsx'
import { Document } from './components/Document'
import { jsonLd, robotsTxt, sitemapXml } from './seo'
import { getContent, type Locale } from './content'
import { profile as identity } from './content/en/profile'
import { getUi, localePath } from './i18n/ui'
import type { Tone } from './components/primitives'
import { Nav, type NavItem } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Process } from './sections/Process'
import { Experience, Certifications, Volunteering } from './sections/Background'
import { Testimonials } from './sections/Testimonials'
import { Contact, Footer } from './sections/Contact'
import { OgCard } from './sections/OgCard'

const app = new Hono()

// Static assets (Pages serves /static/* directly in production; this covers dev).
app.use('/static/*', serveStatic({ root: './public' } as Parameters<typeof serveStatic>[0]))

// Google Search Console verification (must stay byte-identical).
app.get('/googled00677178c1e649e.html', () => {
  return new Response('google-site-verification: googled00677178c1e649e.html', {
    headers: { 'Content-Type': 'text/html' },
  })
})

/** The single page, rendered in one locale (constitution I: one page per locale). */
function renderPage(c: Context, locale: Locale) {
  const ui = getUi(locale)
  const content = getContent(locale)
  const { profile, projects, skillGroups, stats, services, processSteps, experience, certifications, volunteering, testimonials } =
    content

  // Section order is fixed by spec FR-005. Optional sections (empty content) are dropped
  // before tones are assigned, so neighbouring sections never share a tone.
  type Entry = { id: string; nav?: string; render: (tone: Tone) => Child }
  const all: Entry[] = [
    {
      id: 'skills',
      nav: ui.nav.skills,
      render: (t) => <Skills tone={t} ui={ui} profile={profile} groups={skillGroups} stats={stats} />,
    },
    { id: 'projects', nav: ui.nav.projects, render: (t) => <Projects tone={t} ui={ui} projects={projects} /> },
    { id: 'services', nav: ui.nav.services, render: (t) => <Services tone={t} ui={ui} services={services} /> },
    { id: 'process', render: (t) => <Process tone={t} ui={ui} steps={processSteps} /> },
    { id: 'experience', nav: ui.nav.experience, render: (t) => <Experience tone={t} ui={ui} entries={experience} /> },
    {
      id: 'certifications',
      render: (t) => (certifications.length ? <Certifications tone={t} ui={ui} items={certifications} /> : null),
    },
    {
      id: 'volunteering',
      render: (t) => (volunteering.length ? <Volunteering tone={t} ui={ui} items={volunteering} /> : null),
    },
    {
      id: 'testimonials',
      nav: ui.nav.testimonials,
      render: (t) => (testimonials.length ? <Testimonials tone={t} ui={ui} items={testimonials} /> : null),
    },
    { id: 'contact', nav: ui.nav.contact, render: (t) => <Contact tone={t} ui={ui} profile={profile} /> },
  ]

  // Hero is 'surface'; alternate from there over the sections that actually render.
  const rendered: { id: string; nav?: string; el: Child }[] = []
  for (const entry of all) {
    const tone: Tone = rendered.length % 2 === 0 ? 'bg' : 'surface'
    const el = entry.render(tone)
    if (el) rendered.push({ id: entry.id, nav: entry.nav, el })
  }
  const footerTone: Tone = rendered.length % 2 === 0 ? 'bg' : 'surface'
  const navItems: NavItem[] = rendered.filter((r) => r.nav).map((r) => ({ href: `#${r.id}`, label: r.nav! }))

  const other: Locale = locale === 'ar' ? 'en' : 'ar'
  const alternate = { href: localePath(other), lang: other, label: other === 'ar' ? 'العربية' : 'English' }

  return c.html(
    <Document
      locale={locale}
      jsonLd={jsonLd({ locale, identity, projects, services })}
      header={<Nav name={profile.name} items={navItems} ui={ui} alternate={alternate} />}
      footer={<Footer tone={footerTone} profile={profile} nav={navItems} ui={ui} alternate={alternate} />}
    >
      <Hero profile={profile} ui={ui} />
      {rendered.map((r) => r.el)}
    </Document>
  )
}

app.get('/', (c) => renderPage(c, 'en'))
app.get('/ar', (c) => renderPage(c, 'ar'))
app.get('/ar/', (c) => c.redirect('/ar', 301))

// Dev-only: the 1200x630 social card, screenshotted into public/static/og-<locale>.png.
if (import.meta.env.DEV) {
  app.get('/__og/:locale', (c) => {
    const locale = (c.req.param('locale') === 'ar' ? 'ar' : 'en') as Locale
    return c.html(<OgCard locale={locale} />)
  })
}

app.get('/sitemap.xml', () => {
  return new Response(sitemapXml(), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
})

app.get('/robots.txt', () => {
  return new Response(robotsTxt(), {
    headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=86400' },
  })
})

app.get('/api/contact', (c) => {
  const url = (label: string) => identity.socials.find((s) => s.label === label)?.url
  return c.json({
    email: identity.email,
    phone: identity.phoneDisplay,
    linkedin: url('LinkedIn'),
    github: url('GitHub'),
  })
})

app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString(), version: '2.1.0' })
})

// Not found: a real 404 with noindex, in the language of the requested path.
app.notFound((c) => {
  const locale: Locale = c.req.path.startsWith('/ar') ? 'ar' : 'en'
  const ui = getUi(locale)
  return c.html(
    <Document locale={locale} jsonLd={[]} noindex>
      <section class="section tone-surface not-found" aria-labelledby="nf-title">
        <div class="container-content">
          <p class="not-found-code" aria-hidden="true">
            404
          </p>
          <h1 class="h2" id="nf-title">
            {ui.notFound.title}
          </h1>
          <p class="section-lede">{ui.notFound.body}</p>
          <a class="btn btn-primary" href={localePath(locale)}>
            <span>{ui.notFound.home}</span>
          </a>
        </div>
      </section>
    </Document>,
    404
  )
})

export default app
