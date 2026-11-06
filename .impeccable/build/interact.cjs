// Interaction checks (quickstart §4–§5): node .impeccable/build/interact.cjs <playwright-dir> [url]
const [, , pwDir, url = 'http://localhost:5173/'] = process.argv
const { chromium } = require(pwDir)

;(async () => {
  const browser = await chromium.launch({ channel: 'chrome' })
  const results = []
  const check = (name, ok, detail = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`)

  // --- Keyboard: every case study opens, traps, closes on Escape, returns focus.
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    const slugs = await page.$$eval('[data-case]', (els) => els.map((e) => e.getAttribute('data-case')))
    for (const slug of slugs) {
      await page.focus(`[data-case="${slug}"]`)
      await page.keyboard.press('Enter')
      const open = await page.$eval(`#case-${slug}`, (d) => d.open)
      const focusInside = await page.evaluate((s) => document.getElementById(`case-${s}`).contains(document.activeElement), slug)
      // Tab several times: focus must stay inside the modal dialog.
      for (let i = 0; i < 6; i++) await page.keyboard.press('Tab')
      const stillInside = await page.evaluate((s) => document.getElementById(`case-${s}`).contains(document.activeElement) || document.activeElement === document.body, slug)
      await page.keyboard.press('Escape')
      const closed = await page.$eval(`#case-${slug}`, (d) => !d.open)
      const returned = await page.evaluate((s) => document.activeElement?.getAttribute('data-case') === s, slug)
      check(`case study ${slug}: open/focus/trap/escape/return`, open && focusInside && stillInside && closed && returned, JSON.stringify({ open, focusInside, stillInside, closed, returned }))
    }
    // Backdrop click closes.
    await page.click(`[data-case="${slugs[0]}"]`)
    await page.mouse.click(5, 5)
    check('dialog closes on backdrop click', await page.$eval(`#case-${slugs[0]}`, (d) => !d.open))

    // Services: exclusive accordion.
    const s = await page.$$('details.service')
    await s[1].$eval('summary', (el) => el.click())
    const openCount = await page.$$eval('details.service', (els) => els.filter((e) => e.open).length)
    check('services: only one item open', openCount === 1, `open=${openCount}`)
    // Hire Me goes to #contact.
    const hire = await page.$eval('details.service[open] .btn', (a) => a.getAttribute('href'))
    check('services: Hire Me -> #contact', hire === '#contact')

    // Skip link is first focusable.
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.keyboard.press('Tab')
    check('skip link first in tab order', await page.evaluate(() => document.activeElement?.classList.contains('skip-link')))

    // Nav gets a background after scrolling.
    await page.mouse.wheel(0, 600)
    await page.waitForTimeout(300)
    check('nav is-scrolled after scroll', await page.$eval('[data-nav]', (h) => h.classList.contains('is-scrolled')))
    await ctx.close()
  }

  // --- Mobile menu.
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    const linksHidden = await page.$eval('#nav-panel', (p) => getComputedStyle(p).display === 'none')
    await page.click('[data-nav-toggle]')
    const expanded = await page.$eval('[data-nav-toggle]', (b) => b.getAttribute('aria-expanded'))
    const visible = await page.$eval('#nav-panel', (p) => getComputedStyle(p).display !== 'none')
    await page.keyboard.press('Escape')
    const closed = await page.$eval('[data-nav-toggle]', (b) => b.getAttribute('aria-expanded'))
    check('mobile menu toggles and closes on Escape', linksHidden && expanded === 'true' && visible && closed === 'false', JSON.stringify({ linksHidden, expanded, visible, closed }))
    const sw = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)
    check('mobile: no horizontal scroll', sw)
    await ctx.close()
  }

  // --- No JavaScript.
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false })
    const page = await ctx.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    const dialogsVisible = await page.$$eval('dialog.case-study', (ds) => ds.every((d) => getComputedStyle(d).display !== 'none'))
    check('no-JS: case studies visible', dialogsVisible)
    const revealVisible = await page.$$eval('[data-reveal]', (els) => els.every((e) => getComputedStyle(e).opacity === '1'))
    check('no-JS: revealed content visible', revealVisible)
    const stats = await page.$$eval('[data-count]', (els) => els.map((e) => e.textContent))
    check('no-JS: stats show final values', stats.every((t) => t !== '0'), stats.join(','))
    const navVisible = await page.$eval('#nav-panel', (p) => getComputedStyle(p).display !== 'none')
    check('no-JS: nav links visible', navVisible)
    await ctx.close()
  }

  // --- Reduced motion: final values, no running marquee.
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    const anim = await page.$eval('.hero-ticker .marquee-track', (t) => getComputedStyle(t).animationName)
    check('reduced motion: ticker not animating', anim === 'none', anim)
    await ctx.close()
  }

  await browser.close()
  console.log(results.join('\n'))
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
