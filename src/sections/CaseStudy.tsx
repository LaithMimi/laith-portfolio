import type { Project } from '../content/types'
import { T, TagList } from '../components/primitives'
import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

/**
 * Case-study dialog (FR-009, FR-021). Native <dialog> traps focus and closes on Escape;
 * site.js restores focus. Without JS a noscript style shows these as static blocks.
 */
export function CaseStudy({ project, ui }: { project: Project; ui: Ui }) {
  const cs = project.caseStudy
  const id = `case-${project.slug}`
  return (
    <dialog id={id} class="case-study" aria-labelledby={`${id}-title`}>
      <div class="case-inner">
        <header class="case-head">
          <div>
            <h3 class="case-title" id={`${id}-title`}>
              <T t={project.title} />
            </h3>
            <p class="case-tagline">
              <T t={cs.tagline} />
            </p>
            <p class="case-badges">
              <span aria-hidden="true">&lt;/ </span>
              {project.badges.join(' · ')}
              <span aria-hidden="true"> &gt;</span>
            </p>
          </div>
          <button class="case-close" type="button" data-case-close="" aria-label={ui.caseStudy.close}>
            <Icon name="close" />
          </button>
        </header>

        <div class="case-grid">
          <section class="case-block">
            <h4>{ui.caseStudy.problem}</h4>
            <p>
              <T t={cs.problem} />
            </p>
          </section>
          <section class="case-block">
            <h4>{ui.caseStudy.solution}</h4>
            <p>
              <T t={cs.solution} />
            </p>
          </section>
          {cs.impact.length ? (
            <section class="case-block">
              <h4>{ui.caseStudy.impact}</h4>
              <p>
                {cs.impact.map((part) => (
                  <>
                    <T t={part} />{' '}
                  </>
                ))}
              </p>
            </section>
          ) : null}
          {cs.role.length ? (
            <section class="case-block">
              <h4>{ui.caseStudy.role}</h4>
              <ul>
                {cs.role.map((r) => (
                  <li>
                    <T t={r} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {cs.features.length ? (
            <section class="case-block">
              <h4>{ui.caseStudy.features}</h4>
              <ul class="case-features">
                {cs.features.map((f) => (
                  <li>
                    <T t={f} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {cs.stack.length ? (
            <section class="case-block">
              <h4>{ui.caseStudy.stack}</h4>
              <TagList tags={cs.stack} />
            </section>
          ) : null}
        </div>

        {project.links?.live || project.links?.repo ? (
          <footer class="case-links">
            {project.links.live ? (
              <a class="btn btn-primary" href={project.links.live} target="_blank" rel="noopener noreferrer">
                <span>{ui.caseStudy.live}</span>
                <Icon name="external" />
              </a>
            ) : null}
            {project.links.repo ? (
              <a class="btn btn-outline" href={project.links.repo} target="_blank" rel="noopener noreferrer">
                <span>{ui.caseStudy.repo}</span>
                <Icon name="github" />
              </a>
            ) : null}
          </footer>
        ) : null}
      </div>
    </dialog>
  )
}
