import type { Testimonial } from '../content/types'
import { Marquee, Section, SectionHeading, type Tone } from '../components/primitives'
import type { Ui } from '../i18n/ui'

/** Looping quote strip (FR-013). Renders nothing until real testimonials exist. */
export function Testimonials({ tone, items, ui }: { tone: Tone; items: Testimonial[]; ui: Ui }) {
  if (!items.length) return null
  return (
    <Section id="testimonials" tone={tone} labelledBy="testimonials-title">
      <SectionHeading id="testimonials-title" label={ui.testimonials.label}>
        {ui.testimonials.title}
      </SectionHeading>
      <Marquee
        pausable
        scrollable
        class="quotes"
        items={items.map((t) => (
          <figure class="quote">
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>
              <span class="quote-author">{t.author}</span>
              <span class="quote-role">{t.authorRole}</span>
            </figcaption>
          </figure>
        ))}
      />
    </Section>
  )
}
