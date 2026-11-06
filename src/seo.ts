/**
 * Search identity for "Laith Mimi" (constitution III, contracts/routes.md) plus service targeting.
 * Every absolute URL is built from seo.siteUrl — never hard-code the domain elsewhere.
 */
import type { Profile, Project, Service } from './content/types'
import { plain } from './content/tbd'
import type { Locale } from './content'
import { localePath } from './i18n/ui'

export const seo = {
  author: 'Laith Mimi',
  siteUrl: 'https://laith-mimi.pages.dev',
  siteName: 'Laith Mimi Portfolio',
  twitterHandle: '@laithmimi',
  jobTitle: 'Software Engineer & AI Developer',
  /** Mirrors --color-bg in src/styles/site.css: a meta tag cannot read a CSS variable (the one allowed duplicate). */
  themeColor: '#111111',
  /** The real portrait for structured data (PNG: some crawlers handle it more reliably than WebP). */
  personImage: { path: '/static/laith-photo-nobg.png', width: 576, height: 1024 },
  personDescription:
    'Laith Mimi is a software engineer and Co-founder & CEO of Quest, specializing in Agentic AI, RAG systems, AI training for educators and AI automation for businesses.',
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'RAG Systems',
    'LangChain',
    'AI Training for Educators',
    'AI Automation',
    'Business Process Automation',
    'Full Stack Development',
    'MVP Development',
    'React',
    'Python',
    'TypeScript',
    'Educational Technology',
    'FastAPI',
    'Firebase',
    'Prompt Engineering',
  ],
  /** Per-locale head copy. Titles keep the name first and stay ≤ 60 characters. */
  page: {
    en: {
      title: 'Laith Mimi – Software Engineer, AI Workshops & Automation',
      description:
        'Jerusalem-based software engineer Laith Mimi, Co-founder & CEO of Quest: AI workshops for educators, AI automation for Arabic-speaking businesses and fast MVPs.',
      ogDescription:
        "Laith Mimi's portfolio: software engineer and Co-founder & CEO of Quest. AI workshops, AI automation for Arabic-speaking businesses, document AI assistants and MVP builds.",
      keywords:
        'Laith Mimi, Laith Mimi software engineer, Laith Mimi Quest, AI workshops for teachers, AI training for educators, AI automation Arabic businesses, WhatsApp bot, custom AI assistant, RAG, MVP development, Jerusalem, Israel',
      ogImage: { path: '/static/og-en.png', width: 1200, height: 630, alt: 'Laith Mimi – Software Engineer & AI Developer' },
      inLanguage: 'en',
    },
    ar: {
      title: 'ليث ميمي Laith Mimi – مهندس برمجيات وورش وأتمتة بالذكاء الاصطناعي',
      description:
        'ليث ميمي، مهندس برمجيات من القدس وشريك مؤسس والرئيس التنفيذي لـ Quest: ورش ذكاء اصطناعي للمعلّمين، وأتمتة بالذكاء الاصطناعي للشركات الناطقة بالعربية، وبناء منتجات أولية سريعة.',
      ogDescription:
        'ليث ميمي: مهندس برمجيات وشريك مؤسس لـ Quest. ورش ذكاء اصطناعي، وأتمتة للشركات الناطقة بالعربية، ومساعدون أذكياء على مستنداتك، وبناء منتجات أولية.',
      keywords:
        'ليث ميمي, Laith Mimi, ورش ذكاء اصطناعي للمعلمين, تدريب الذكاء الاصطناعي, أتمتة بالذكاء الاصطناعي, روبوت واتساب, مساعد ذكي, بناء منتج أولي, القدس',
      ogImage: { path: '/static/og-ar.png', width: 1200, height: 630, alt: 'ليث ميمي – مهندس برمجيات ومطوّر ذكاء اصطناعي' },
      inLanguage: 'ar',
    },
  },
} as const

export const abs = (path = '/') => `${seo.siteUrl}${path}`

const today = () => new Date().toISOString().split('T')[0]

const languageCodes: Record<string, string> = { Arabic: 'ar', English: 'en', Hebrew: 'he' }

/**
 * The JSON-LD blocks (Person with makesOffer, WebSite, ProfilePage, ItemList, BreadcrumbList).
 * Identity always comes from the English profile so both locales describe the same Person;
 * services and projects come from the page's own locale so markup matches what is visible.
 */
export function jsonLd(opts: {
  locale: Locale
  identity: Profile
  projects: Project[]
  services: Service[]
}) {
  const { locale, identity: profile, projects, services } = opts
  const page = seo.page[locale]
  const pageUrl = abs(localePath(locale))
  const personId = abs('/#person')

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    givenName: 'Laith',
    familyName: 'Mimi',
    alternateName: ['Laith', 'ليث ميمي'],
    url: abs('/'),
    image: {
      '@type': 'ImageObject',
      url: abs(seo.personImage.path),
      width: seo.personImage.width,
      height: seo.personImage.height,
    },
    jobTitle: seo.jobTitle,
    description: seo.personDescription,
    email: profile.email,
    telephone: profile.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Jerusalem', addressCountry: 'Israel' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Azrieli College of Engineering',
      url: 'https://www.jce.ac.il',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Quest',
      description: 'SaaS agency focused on educational technology',
      founder: { '@id': personId },
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: { '@type': 'City', name: 'Jerusalem' },
    },
    knowsAbout: seo.knowsAbout,
    knowsLanguage: profile.languages.map((l) => ({
      '@type': 'Language',
      name: l.name,
      alternateName: languageCodes[l.name],
    })),
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: plain(s.title),
        description: plain(s.description),
        provider: { '@id': personId },
        areaServed: [
          { '@type': 'City', name: 'Jerusalem' },
          { '@type': 'Country', name: 'Israel' },
        ],
        availableLanguage: ['ar', 'he', 'en'],
      },
    })),
    sameAs: profile.socials.map((s) => s.url),
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: 'Laith Mimi - Official Portfolio',
    alternateName: ['Laith Mimi Portfolio', 'Laith Mimi', 'ليث ميمي'],
    url: abs('/'),
    description: page.description,
    inLanguage: ['en', 'ar'],
    author: { '@id': personId },
    publisher: { '@id': personId },
  }

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profilepage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: page.inLanguage,
    mainEntity: { '@id': personId },
    dateCreated: '2025-11-01',
    dateModified: today(),
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Laith Mimi's Projects",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${pageUrl}#case-${p.slug}`,
      item: {
        '@type': 'SoftwareApplication',
        name: plain(p.title),
        description: plain(p.summary),
        applicationCategory: p.category,
        operatingSystem: 'Web',
        author: { '@id': personId },
        ...(p.links?.live ? { url: p.links.live } : {}),
      },
    })),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laith Mimi', item: pageUrl },
      { '@type': 'ListItem', position: 2, name: locale === 'ar' ? 'المشاريع' : 'Projects', item: `${pageUrl}#projects` },
      { '@type': 'ListItem', position: 3, name: locale === 'ar' ? 'تواصل' : 'Contact', item: `${pageUrl}#contact` },
    ],
  }

  return [person, website, profilePage, itemList, breadcrumbs]
}

/** JSON for a <script type="application/ld+json">, safe against closing the tag early. */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')

const xmlEscape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Both locale URLs, each listing its hreflang alternates. */
export function sitemapXml() {
  const urls: Locale[] = ['en', 'ar']
  const alternates = [
    `    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(abs('/'))}"/>`,
    `    <xhtml:link rel="alternate" hreflang="ar" href="${xmlEscape(abs('/ar'))}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(abs('/'))}"/>`,
  ].join('\n')
  const entries = urls
    .map(
      (l) => `  <url>
    <loc>${xmlEscape(abs(localePath(l)))}</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === 'en' ? '1.0' : '0.9'}</priority>
${alternates}
    <image:image>
      <image:loc>${xmlEscape(abs(seo.personImage.path))}</image:loc>
      <image:title>Laith Mimi</image:title>
    </image:image>
  </url>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`
}

export function robotsTxt() {
  return `# Robots.txt for Laith Mimi Portfolio
# ${seo.siteUrl}

User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${abs('/sitemap.xml')}
`
}
