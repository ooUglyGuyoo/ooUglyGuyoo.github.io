const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/opt/hermes/.playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell',
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 2000 } });
  await page.goto('https://www.lyceric.com/projects/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/opt/data/projects/web-lyceric/.verify-live.png', fullPage: true });
  const cards = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.grid__item')).map((it, i) => {
      const r = it.getBoundingClientRect();
      const teaser = it.querySelector('.archive__item-teaser');
      const title = it.querySelector('.archive__item-title');
      const div = it.querySelector('.archive__item-divider');
      const t = teaser ? teaser.getBoundingClientRect() : null;
      const d = div ? div.getBoundingClientRect() : null;
      const tt = title ? title.getBoundingClientRect() : null;
      return { i, h: Math.round(r.height), bottom: Math.round(r.bottom),
               teaserRatio: t ? +(t.width / t.height).toFixed(2) : 0,
               titleLines: tt ? Math.round(tt.height / parseFloat(getComputedStyle(title).lineHeight)) : 0,
               divBottom: d ? Math.round(d.bottom) : null };
    });
  });
  console.log(JSON.stringify(cards));
  await browser.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
