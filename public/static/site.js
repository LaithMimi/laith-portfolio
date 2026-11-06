/*
 * Laith Mimi portfolio — client behaviour (plain ES2020, no build step).
 * Every feature is progressive: the page is complete without this file (constitution I, FR-023).
 */
;(() => {
  'use strict'

  const motionOk = () => window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))

  /* ---------------------------------------------------------- scroll reveal */
  function initReveal() {
    const items = $$('[data-reveal]')
    if (!items.length) return
    if (!motionOk() || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )
    items.forEach((el) => io.observe(el))
  }

  /* ---------------------------------------------------------- count-up stats */
  function initCountUp() {
    const nums = $$('[data-count]')
    if (!nums.length || !motionOk() || !('IntersectionObserver' in window)) return
    const run = (el) => {
      const target = Number(el.getAttribute('data-count'))
      if (!Number.isFinite(target) || target <= 0) return
      const duration = 1200
      const start = performance.now()
      const ease = (t) => 1 - Math.pow(1 - t, 4)
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        el.textContent = String(Math.round(target * ease(t)))
        if (t < 1) requestAnimationFrame(tick)
      }
      el.textContent = '0'
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          io.unobserve(e.target)
          run(e.target)
        }
      },
      { threshold: 0.6 }
    )
    nums.forEach((el) => io.observe(el))
  }

  /* ---------------------------------------------------------- navigation */
  function initNav() {
    const header = document.querySelector('[data-nav]')
    if (!header) return
    const toggle = header.querySelector('[data-nav-toggle]')
    const panel = document.getElementById('nav-panel')

    // Background once scrolled.
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', window.scrollY > 8)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Mobile menu.
    if (toggle && panel) {
      const setOpen = (open) => {
        toggle.setAttribute('aria-expanded', String(open))
        header.classList.toggle('is-open', open)
      }
      toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'))
      panel.addEventListener('click', (e) => {
        if (e.target.closest('a')) setOpen(false)
      })
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false)
          toggle.focus()
        }
      })
    }

    // Scrollspy: mark the link of the section in view.
    const links = $$('[data-nav-link]', header)
    if (!links.length || !('IntersectionObserver' in window)) return
    const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const link = byId.get(e.target.id)
          if (!link) continue
          if (e.isIntersecting) {
            links.forEach((l) => l.removeAttribute('aria-current'))
            link.setAttribute('aria-current', 'true')
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    byId.forEach((_, id) => {
      const section = document.getElementById(id)
      if (section) io.observe(section)
    })
  }

  /* ---------------------------------------------------------- case-study dialogs */
  function initDialogs() {
    const triggers = $$('[data-case]')
    if (!triggers.length || typeof HTMLDialogElement !== 'function') return
    let lastTrigger = null

    const open = (slug, trigger) => {
      const dialog = document.getElementById(`case-${slug}`)
      if (!dialog || dialog.open) return
      lastTrigger = trigger || null
      dialog.showModal()
      document.documentElement.classList.add('has-dialog')
      const close = dialog.querySelector('[data-case-close]')
      if (close) close.focus()
      if (location.hash !== `#case-${slug}`) history.replaceState(null, '', `#case-${slug}`)
    }

    triggers.forEach((t) =>
      t.addEventListener('click', (e) => {
        e.preventDefault()
        open(t.getAttribute('data-case'), t)
      })
    )

    $$('dialog.case-study').forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close()
      })
      $$('[data-case-close]', dialog).forEach((b) => b.addEventListener('click', () => dialog.close()))
      dialog.addEventListener('close', () => {
        document.documentElement.classList.remove('has-dialog')
        if (location.hash.startsWith('#case-')) history.replaceState(null, '', location.pathname + location.search)
        if (lastTrigger) lastTrigger.focus()
        lastTrigger = null
      })
    })

    const fromHash = () => {
      const m = location.hash.match(/^#case-([\w-]+)$/)
      if (m) open(m[1], document.querySelector(`[data-case="${m[1]}"]`))
    }
    window.addEventListener('hashchange', fromHash)
    fromHash()
  }

  const start = () => {
    initReveal()
    initCountUp()
    initNav()
    initDialogs()
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start)
  else start()
})()
