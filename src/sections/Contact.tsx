import type { Profile } from '../content/types'
import type { NavItem } from './Nav'
import { ContactRows, SlashLinks, type Tone } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/** Closing CTA (FR-014): huge uppercase line with the round mint action set inside it. */
export function Contact({ tone, profile, ui }: { tone: Tone; profile: Profile; ui: Ui }) {
  return (
    <section id="contact" class={`section contact tone-${tone}`} aria-labelledby="contact-title">
      <div class="contact-glow" aria-hidden="true" />
      <div class="container-content contact-inner">
        <div class="contact-head" data-reveal="">
          <h2 class="contact-title" id="contact-title">
            {ui.contact.title}
          </h2>
          <a class="contact-orb" href={`mailto:${profile.email}`}>
            <span>{ui.contact.cta}</span>
            <Icon name="arrow" class="icon-dir" />
          </a>
        </div>
        <p class="contact-lede" data-reveal="">
          {ui.contact.lede}
        </p>
        <div class="contact-details" data-reveal="">
          <ContactRows ui={ui} email={profile.email} phone={profile.phone} phoneDisplay={profile.phoneDisplay} />
          <SlashLinks ui={ui} links={profile.socials} />
        </div>
      </div>
    </section>
  )
}

export function Footer({ tone, profile, nav, ui, alternate }: { tone: Tone; profile: Profile; nav: NavItem[]; ui: Ui; alternate: { href: string; lang: string; label: string } }) {
  return (
    <footer class={`site-footer tone-${tone}`}>
      <div class="container-content footer-inner">
        <div class="footer-col">
          <p class="footer-heading">{ui.footer.links}</p>
          <ul class="footer-links">
            {nav.map((n) => (
              <li>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-heading">{ui.footer.social}</p>
          <ul class="footer-links">
            {profile.socials.map((s) => (
              <li>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span class="sr-only"> {ui.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-heading">{ui.footer.speak}</p>
          <ul class="tag-list">
            {profile.languages.map((l) => (
              <li class="tag">
                {l.name}
                <span class="tag-note">({l.level})</span>
              </li>
            ))}
          </ul>
          <p class="footer-heading footer-heading-lang">{ui.footer.language}</p>
          <a class="footer-lang" href={alternate.href} hreflang={alternate.lang} lang={alternate.lang}>
            {alternate.label}
          </a>
        </div>
      </div>
      <div class="container-content footer-base">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top" class="footer-top">
          {ui.footer.top} <Icon name="arrow-down" class="footer-top-icon" />
        </a>
      </div>
    </footer>
  )
}
