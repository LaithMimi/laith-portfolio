import type { ProcessStep } from '../content/types'
import { Index, Section, SectionHeading, T, type Tone } from '../components/primitives'
import type { Ui } from '../i18n/ui'

/** Three sequential steps (FR-011) — the numbering carries the order. */
export function Process({ tone, steps, ui }: { tone: Tone; steps: ProcessStep[]; ui: Ui }) {
  return (
    <Section id="process" tone={tone} labelledBy="process-title">
      <SectionHeading id="process-title" label={ui.process.label(steps.length)}>
        {ui.process.title}
      </SectionHeading>
      <ol class="process">
        {steps.map((s, i) => (
          <li class="process-step" data-reveal="" style={`--reveal-i:${i}`}>
            <Index i={i} />
            <h3 class="process-title">
              <T t={s.title} />
            </h3>
            <p class="process-text">
              <T t={s.description} />
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
