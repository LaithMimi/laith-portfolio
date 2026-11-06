// Review captures at true 1x: node .impeccable/build/capture.cjs <playwright-dir> [url]
// Uses the installed Chrome; reduced motion settles reveals/entrance so nothing reads as missing.
const [, , pwDir, url = 'http://localhost:5173/', tag = ''] = process.argv
const { chromium } = require(pwDir)

const shots = [
  { file: '.impeccable/review/hero-repro.png', width: 2048, height: 1360, fullPage: false },
  { file: '.impeccable/review/desktop.png', width: 1440, height: 957, fullPage: true },
  { file: '.impeccable/review/mobile.png', width: 390, height: 844, fullPage: true, mobile: true },
  { file: '.impeccable/review/desktop-1280.png', width: 1280, height: 800, fullPage: false },
  { file: '.impeccable/review/desktop-1600.png', width: 1600, height: 900, fullPage: false },
]

;(async () => {
  const browser = await chromium.launch({ channel: 'chrome' })
  for (const s of shots) {
    const ctx = await browser.newContext({
      viewport: { width: s.width, height: s.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
      isMobile: !!s.mobile,
      hasTouch: !!s.mobile,
    })
    const page = await ctx.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(500)
    const file = tag ? s.file.replace(/.png$/, `-${tag}.png`) : s.file
    await page.screenshot({ path: file, fullPage: s.fullPage })
    const info = await page.evaluate(() => ({ w: innerWidth, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }))
    console.log(file, JSON.stringify(info))
    await ctx.close()
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
