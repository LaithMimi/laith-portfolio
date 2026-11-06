import type { Profile, SkillGroup, Stat } from '../content/types'
import { Button, Section, SectionHeading, T, type Tone } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/** Skills + about + stats (FR-008). Tooltips stay reachable without hover (sr-only copy). */
export function Skills(props: { tone: Tone; ui: Ui; profile: Profile; groups: SkillGroup[]; stats: Stat[] }) {
  const { profile, groups, stats, ui } = props
  return (
    <Section id="skills" tone={props.tone} labelledBy="skills-title">
      <SectionHeading id="skills-title" label={ui.skills.label}>
        {ui.skills.title}
      </SectionHeading>
      <div class="skills-layout">
        <ul class="skill-groups" aria-label={ui.skills.groups}>
          {groups.map((g, gi) => (
            <li class="skill-group" data-reveal="" style={`--reveal-i:${gi}`}>
              <div class="skill-group-head">
                <h3 class="skill-group-name">
                  <T t={g.name} />
                </h3>
                <Icon name="code" class="skill-group-icon" />
              </div>
              <ul class="skill-list">
                {g.skills.map((s) => (
                  <li class="skill" lang="en" title={s.tooltip} tabindex={s.tooltip ? 0 : undefined}>
                    {s.name}
                    {s.tooltip ? <span class="sr-only" lang={ui.lang}>: {s.tooltip}</span> : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div class="about" data-reveal="">
          {profile.about.map((p) => (
            <p>
              <T t={p} />
            </p>
          ))}
          {profile.education ? (
            <p class="about-edu">
              <span class="about-edu-degree">{profile.education.degree}</span>
              <span class="about-edu-meta">
                {profile.education.school} · {profile.education.period}
              </span>
              {profile.education.detail ? <span class="about-edu-meta">{profile.education.detail}</span> : null}
            </p>
          ) : null}
          {profile.cvUrl ? (
            <Button href={profile.cvUrl} download icon="download" iconFirst>
              {ui.skills.resume}
            </Button>
          ) : null}
        </div>
      </div>
      {stats.length ? (
        <dl class="stats">
          {stats.map((s, i) => (
            <div class="stat" data-reveal="" style={`--reveal-i:${i}`}>
              <dt class="stat-label">
                <T t={s.label} />
              </dt>
              <dd class="stat-value">
                {s.prefix ? <span class="stat-affix">{s.prefix}</span> : null}
                <span data-count={String(s.value)}>{s.value}</span>
                {s.suffix ? <span class="stat-affix">{s.suffix}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </Section>
  )
}
