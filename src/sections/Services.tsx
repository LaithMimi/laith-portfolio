import type { Service } from '../content/types'
import { Index, Section, SectionHeading, T, type Tone } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/** Numbered (01)–(04) exclusive accordion (FR-010): native <details name>, works without JS. */
export function Services({ tone, services, ui }: { tone: Tone; services: Service[]; ui: Ui }) {
  return (
    <Section id="services" tone={tone} labelledBy="services-title">
      <SectionHeading id="services-title" label={ui.services.label(services.length)}>
        {ui.services.title}
      </SectionHeading>
      <div class="services">
        {services.map((s, i) => (
          <details class="service" name="services" open={i === 0} data-reveal="" style={`--reveal-i:${i}`}>
            <summary class="service-summary">
              <Index i={i} paren />
              <h3 class="service-title">
                <T t={s.title} />
              </h3>
              <Icon name="chevron" class="service-chevron" />
            </summary>
            <div class="service-body">
              <p>
                <T t={s.description} />
              </p>
              <a class="btn btn-primary" href="#contact">
                <span>{ui.services.hire}</span>
                <Icon name="arrow" class="icon-dir" />
              </a>
            </div>
          </details>
        ))}
      </div>
    </Section>
  )
}
