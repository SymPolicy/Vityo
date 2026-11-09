const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');
(async () => {
  const executablePath = process.env.VITYO_CHROME_PATH || process.env.CHROME_EXECUTABLE || '/usr/bin/chromium';
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:4181/vityo-hyper-vis.html');
  await page.waitForTimeout(2000); // 等待 Canvas 动画开始
  const outDir = path.join(__dirname, '.artifacts');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'debug_screenshot.png');
  await page.screenshot({ path: outPath });
  await browser.close();
  console.log(`Screenshot captured to ${outPath}`);
})();
