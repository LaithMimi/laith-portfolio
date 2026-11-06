/**
 * Shared building blocks — built once, reused by every section (constitution II).
 * Contract: specs/001-devsync-redesign/contracts/ui-components.md § Primitives
 */
import type { Child } from 'hono/jsx'
import type { IconName } from '../content/types'
import { isTbd, type Text } from '../content/tbd'
import { Icon } from './icons'
import type { Ui } from '../i18n/ui'

export type Tone = 'bg' | 'surface'

/** Renders content text; a TBD becomes a visible, greppable marker (launch gate: no data-tbd). */
export function T({ t }: { t: Text }) {
  if (isTbd(t)) {
    return (
      <span class="tbd" data-tbd="">
        TBD: {t.note}
      </span>
    )
  }
  return <>{t}</>
}

export const pad2 = (i: number) => String(i + 1).padStart(2, '0')

export function Section(props: {
  id: string
  tone: Tone
  labelledBy: string
  class?: string
  children: Child
}) {
  return (
    <section
      id={props.id}
      class={`section tone-${props.tone}${props.class ? ` ${props.class}` : ''}`}
      aria-labelledby={props.labelledBy}
    >
      <div class="container-content">{props.children}</div>
    </section>
  )
}

/**
 * Section heading: `// label` sits beside the H2 on wide screens (never stacked above it),
 * then the `</ ———— >` rule. On narrow screens the label moves into the rule.
 */
export function SectionHeading(props: { id: string; label: string; children: Child }) {
  return (
    <header class="section-head" data-reveal="">
      <p class="section-label" aria-hidden="true">
        // {props.label}
      </p>
      <h2 class="h2" id={props.id}>
        {props.children}
      </h2>
      <div class="divider" aria-hidden="true">
        <span class="glyph-start">&lt;/</span>
        <span class="divider-label">// {props.label}</span>
        <span class="glyph-end">&gt;</span>
      </div>
    </header>
  )
}

export function Button(props: {
  href: string
  variant?: 'primary' | 'outline'
  icon?: IconName
  iconFirst?: boolean
  external?: boolean
  download?: boolean
  class?: string
  children: Child
  [k: string]: unknown
}) {
  const { href, variant = 'primary', icon, iconFirst, external, download, class: cls, children, ...rest } = props
  return (
    <a
      href={href}
      class={`btn btn-${variant}${cls ? ` ${cls}` : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download ? '' : undefined}
      {...rest}
    >
      {icon && iconFirst ? <Icon name={icon} /> : null}
      <span>{children}</span>
      {icon && !iconFirst ? <Icon name={icon} /> : null}
    </a>
  )
}

export function TagList({ tags, class: cls }: { tags: string[]; class?: string }) {
  return (
    <ul class={`tag-list${cls ? ` ${cls}` : ''}`}>
      {tags.map((t) => (
        <li class="tag">{t}</li>
      ))}
    </ul>
  )
}

/** Zero-padded index: `01` or `(01)`. Decorative — the list order already carries it. */
export function Index({ i, paren }: { i: number; paren?: boolean }) {
  return (
    <span class="index" aria-hidden="true">
      {paren ? `(${pad2(i)})` : pad2(i)}
    </span>
  )
}

export function SlashLinks({ links, ui, class: cls }: { links: { label: string; url: string }[]; ui: Ui; class?: string }) {
  return (
    <ul class={`slash-list${cls ? ` ${cls}` : ''}`}>
      {links.map((l) => (
        <li>
          <a class="slash-link" href={l.url} target="_blank" rel="noopener noreferrer">
            {l.label}
            <span class="sr-only"> {ui.newTab}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

/** Contact rows with single-letter labels (E / T). */
export function ContactRows(props: { email: string; phone: string; phoneDisplay: string; ui: Ui; class?: string }) {
  return (
    <dl class={`contact-rows${props.class ? ` ${props.class}` : ''}`}>
      <div class="contact-row">
        <dt>
          <abbr title={props.ui.email}>E</abbr>
        </dt>
        <dd>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </dd>
      </div>
      <div class="contact-row">
        <dt>
          <abbr title={props.ui.phone}>T</abbr>
        </dt>
        <dd>
          <a href={`tel:${props.phone}`} dir="ltr">{props.phoneDisplay}</a>
        </dd>
      </div>
    </dl>
  )
}

/** Infinite marquee: the items twice, the copy hidden from assistive tech. */
export function Marquee(props: {
  items: Child[]
  class?: string
  pausable?: boolean
  scrollable?: boolean
  label?: string
}) {
  const cls = ['marquee', props.pausable && 'marquee-pausable', props.scrollable && 'marquee-scrollable', props.class]
    .filter(Boolean)
    .join(' ')
  return (
    <div class={cls} role={props.label ? 'region' : undefined} aria-label={props.label}>
      <div class="marquee-track">
        <div class="marquee-group">{props.items}</div>
        <div class="marquee-group" aria-hidden="true" data-marquee-clone="">
          {props.items}
        </div>
      </div>
    </div>
  )
}
