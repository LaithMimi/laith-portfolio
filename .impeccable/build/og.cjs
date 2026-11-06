// Render the 1200x630 social cards from the dev-only /__og/:locale route.
// node .impeccable/build/og.cjs <playwright-dir> [base-url]
const [, , pwDir, base = 'http://localhost:5173'] = process.argv
const { chromium } = require(pwDir)

;(async () => {
  const browser = await chromium.launch({ channel: 'chrome' })
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  for (const locale of ['en', 'ar']) {
    await page.goto(`${base}/__og/${locale}`, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(300)
    const file = `public/static/og-${locale}.png`
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1200, height: 630 } })
    console.log('wrote', file)
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
