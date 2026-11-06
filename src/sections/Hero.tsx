import type { Profile } from '../content/types'
import { ContactRows, SlashLinks, T } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/**
 * First viewport — approved comp .impeccable/mocks/comp-a.png ("the name is the monument").
 * Desktop positions are bound to the measured comp regions (.impeccable/build/scaffold/layout.css).
 */
export function Hero({ profile, ui }: { profile: Profile; ui: Ui }) {
  return (
    <section id="hero" class="hero tone-surface" aria-labelledby="hero-name">
      <div class="hero-glow" aria-hidden="true" />
      <p class="hero-greeting">
        <T t={profile.greeting} /> <T t={profile.role} />
      </p>
      <h1 class="hero-name" id="hero-name" lang="en">
        {profile.name}
      </h1>
      <img
        class="hero-portrait"
        src="/static/img/laith-portrait.webp"
        srcset="/static/img/laith-portrait-640.webp 640w, /static/img/laith-portrait.webp 1100w"
        sizes="(min-width: 1024px) 30vw, 80vw"
        data-plate="assets/plates/portrait.png"
        width="1100"
        height="1716"
        alt={profile.photo.alt}
        fetchpriority="high"
        decoding="async"
      />
      <p class="hero-intro">
        <T t={profile.intro} />
      </p>
      <ContactRows ui={ui} class="hero-contact" email={profile.email} phone={profile.phone} phoneDisplay={profile.phoneDisplay} />
      <SlashLinks ui={ui} class="hero-socials" links={profile.socials} />
      {profile.cvUrl ? (
        <a class="btn btn-outline hero-cv" href={profile.cvUrl} download="">
          <Icon name="download" />
          <span>{ui.hero.cv}</span>
        </a>
      ) : null}
      <a class="hero-scroll" href="#skills">
        <span class="hero-scroll-rule" aria-hidden="true" />
        <span class="hero-scroll-label">{ui.hero.scroll}</span>
        <span class="sr-only"> {ui.hero.scrollTo}</span>
      </a>
      <div class="hero-ticker" aria-hidden="true">
        <div class="marquee">
          <div class="marquee-track">
            {[0, 1].map(() => (
              <div class="marquee-group">
                {Array.from({ length: 6 }, () => (
                  <span class="ticker-item" lang="en">{profile.name}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
