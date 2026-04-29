const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3004/landing-pages/edulearn');

  // Check computed color of the H1 text
  const color = await page.eval('h1', (el) => getComputedStyle(el).color);
  const backgroundColor = await page.eval('section', (el) => getComputedStyle(el).backgroundColor);

  console.log(`H1 Color: ${color}`);
  console.log(`Section Background: ${backgroundColor}`);

  await browser.close();
})();
