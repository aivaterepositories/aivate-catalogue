const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureScreenshot(url, filename, viewport = { width: 1600, height: 1000 }) {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000); // Let animations settle

    const outputPath = path.join(__dirname, '../public/portfolio', filename);
    await page.screenshot({ path: outputPath, type: 'png' });

    console.log(`✓ Captured: ${filename}`);
  } catch (error) {
    console.error(`✗ Failed to capture ${filename}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  const screenshots = [
    { url: 'https://drjamesgordon.com', filename: 'gordon-ai-studio.png' },
    { url: 'https://crm.temppower.com', filename: 'temp-power-systems.png' },
  ];

  for (const shot of screenshots) {
    await captureScreenshot(shot.url, shot.filename);
  }
}

main();
