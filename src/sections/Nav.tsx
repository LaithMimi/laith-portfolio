import { Icon } from '../components/icons'
import type { Ui } from '../i18n/ui'

export type NavItem = { href: string; label: string }

/** Fixed top bar (FR-006): wordmark, section links, "Start Project". Collapses below 1024px. */
export function Nav({ name, items, ui, alternate }: { name: string; items: NavItem[]; ui: Ui; alternate: { href: string; lang: string } }) {
  return (
    <header class="site-nav" id="top" data-nav="">
      <div class="nav-inner">
        <a class="nav-logo" href="#hero" aria-label={`${name}, ${ui.nav.backToTop}`}>
          {name}
        </a>
        <nav class="nav-links" id="nav-panel" aria-label={ui.nav.sections}>
          <ul>
            {items.map((item) => (
              <li>
                <a href={item.href} data-nav-link="">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a class="nav-lang" href={alternate.href} hreflang={alternate.lang} lang={alternate.lang} aria-label={ui.nav.switchToLabel}>
          {ui.nav.switchTo}
        </a>
        <a class="btn btn-primary nav-cta" href="#contact">
          <span>{ui.nav.startProject}</span>
          <Icon name="arrow" class="icon-dir" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-panel" data-nav-toggle="">
          <span class="sr-only">{ui.nav.menu}</span>
          <Icon name="menu" class="nav-toggle-open" />
          <Icon name="close" class="nav-toggle-close" />
        </button>
      </div>
    </header>
  )
}
