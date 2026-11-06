import type { Certification, ExperienceEntry, VolunteeringEntry } from '../content/types'
import { Section, SectionHeading, T, TagList, type Tone } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/** Earliest start year across the entries, e.g. 2025. */
const since = (entries: ExperienceEntry[]) =>
  Math.min(...entries.map((e) => Number(e.period.match(/[0-9]{4}/)?.[0] ?? 9999)))

/** Experience timeline (FR-012) — rows in the DevSync rule language; the dates order them. */
export function Experience({ tone, entries, ui }: { tone: Tone; entries: ExperienceEntry[]; ui: Ui }) {
  return (
    <Section id="experience" tone={tone} labelledBy="experience-title">
      <SectionHeading id="experience-title" label={ui.experience.label(since(entries))}>
        {ui.experience.title}
      </SectionHeading>
      <ol class="timeline">
        {entries.map((e) => (
          <li class="timeline-row" data-reveal="">
            <div class="timeline-main">
              <p class="timeline-period">{e.period}</p>
              <h3 class="timeline-org">
                <T t={e.organization} />
              </h3>
              <p class="timeline-role">
                <T t={e.role} />
              </p>
            </div>
            <div class="timeline-detail">
              {e.points.map((p) => (
                <p>
                  <T t={p} />
                </p>
              ))}
              <TagList tags={e.tags} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Certifications({ tone, items, ui }: { tone: Tone; items: Certification[]; ui: Ui }) {
  if (!items.length) return null
  return (
    <Section id="certifications" tone={tone} labelledBy="certifications-title">
      <SectionHeading id="certifications-title" label={ui.certifications.label(items.length)}>
        {ui.certifications.title}
      </SectionHeading>
      <ul class="cred-grid">
        {items.map((c, i) => (
          <li class="cred" data-reveal="" style={`--reveal-i:${i}`}>
            <p class="cred-date">{c.date ?? <span class="sr-only">{ui.certifications.undated}</span>}</p>
            <h3 class="cred-name">
              <T t={c.name} />
            </h3>
            <p class="cred-issuer">
              <T t={c.issuer} />
            </p>
            {c.note ? <p class="cred-text">{c.note}</p> : null}
            {c.url ? (
              <a class="cred-link" href={c.url} target="_blank" rel="noopener noreferrer">
                {ui.certifications.view} <Icon name="external" />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Volunteering({ tone, items, ui }: { tone: Tone; items: VolunteeringEntry[]; ui: Ui }) {
  if (!items.length) return null
  return (
    <Section id="volunteering" tone={tone} labelledBy="volunteering-title">
      <SectionHeading id="volunteering-title" label={ui.volunteering.label}>
        {ui.volunteering.title}
      </SectionHeading>
      <ul class="cred-grid cred-grid-wide">
        {items.map((v, i) => (
          <li class="cred" data-reveal="" style={`--reveal-i:${i}`}>
            <p class="cred-date">{v.period}</p>
            <h3 class="cred-name">
              <T t={v.organization} />
            </h3>
            <p class="cred-issuer">
              <T t={v.role} />
            </p>
            <p class="cred-text">
              <T t={v.summary} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
