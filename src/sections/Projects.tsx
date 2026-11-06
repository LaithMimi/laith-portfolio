import type { Project } from '../content/types'
import { Section, SectionHeading, T, TagList, type Tone } from '../components/primitives'
import { Icon } from '../components/icons'
import { CaseStudy } from './CaseStudy'
import type { Ui } from '../i18n/ui'

/** "// Explore Work" grid; each card opens its case study (FR-009). */
export function Projects({ tone, projects, ui }: { tone: Tone; projects: Project[]; ui: Ui }) {
  return (
    <Section id="projects" tone={tone} labelledBy="projects-title">
      <SectionHeading id="projects-title" label={ui.projects.label}>
        {ui.projects.title}
      </SectionHeading>
      <p class="section-lede" data-reveal="">
        {ui.projects.lede}
      </p>
      <ul class="project-grid">
        {projects.map((p, i) => (
          <li class="project" data-reveal="" style={`--reveal-i:${i % 2}`}>
            <a class="project-link" href={`#case-${p.slug}`} data-case={p.slug} aria-haspopup="dialog">
              {p.thumbnail ? (
                <div class="project-media">
                  <img
                    src={p.thumbnail.src}
                    srcset={p.thumbnail.srcset}
                    width={p.thumbnail.width}
                    height={p.thumbnail.height}
                    alt={p.thumbnail.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
              <div class="project-body">
                <h3 class="project-title">
                  <T t={p.title} />
                </h3>
                <p class="project-summary">
                  <T t={p.summary} />
                </p>
                <p class="project-badges">{p.badges.join(' · ')}</p>
                <TagList tags={p.tags} />
                <span class="project-more">
                  {ui.projects.more} <Icon name="arrow" class="icon-dir" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {projects.map((p) => (
        <CaseStudy project={p} ui={ui} />
      ))}
    </Section>
  )
}
