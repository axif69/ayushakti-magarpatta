import { chromium } from 'playwright-core';
import fs from 'fs';

const targetDir = 'C:/Users/USER/.gemini/antigravity/brain/0ce9154d-e339-4001-a2b4-246d1a53b36c';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true
  });

  // Mobile screenshot (Android viewport)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: `${targetDir}/mobile_home.png` });
  console.log('Saved mobile_home.png');

  // Desktop screenshot
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: `${targetDir}/desktop_home.png` });
  console.log('Saved desktop_home.png');

  // Treatments page
  await desktopPage.goto('http://127.0.0.1:5173/#/treatments', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: `${targetDir}/desktop_treatments.png` });
  console.log('Saved desktop_treatments.png');

  // Programs page
  await desktopPage.goto('http://127.0.0.1:5173/#/programs', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: `${targetDir}/desktop_programs.png` });
  console.log('Saved desktop_programs.png');

  await browser.close();
}

run().catch(console.error);
