import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('artifacts', 'scroll-test');
await fs.mkdir(outputDir, { recursive: true });
const baseUrl = process.env.PORTFOLIO_TEST_URL ?? 'http://localhost:3000';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const metrics = [];

const collect = async (label) => {
  const shotPath = path.join(outputDir, `${label}.png`);

  const data = await page.evaluate(() => {
    const pin = document.querySelector('.projects-horizontal-pin');
    const cv = document.getElementById('cv');
    const active = document.querySelector('.projects-horizontal-slide.is-active');
    const cta = active ? active.querySelector('.cta-btn') : null;
    const counter = document.querySelector('[data-project-counter]');

    const pinRect = pin ? pin.getBoundingClientRect() : null;
    const cvRect = cv ? cv.getBoundingClientRect() : null;
    const ctaRect = cta ? cta.getBoundingClientRect() : null;

    const buttonVisible = Boolean(
      ctaRect && ctaRect.top >= 0 && ctaRect.bottom <= window.innerHeight
    );

    return {
      scrollY: window.scrollY,
      viewportHeight: window.innerHeight,
      pinTop: pinRect ? pinRect.top : null,
      pinBottom: pinRect ? pinRect.bottom : null,
      cvTop: cvRect ? cvRect.top : null,
      counter: counter ? counter.textContent?.trim() : null,
      buttonVisible,
    };
  });

  await page.screenshot({ path: shotPath, fullPage: false });
  metrics.push({ label, screenshot: shotPath, ...data });
};

const scrollToTop = async (top, delayMs = 220) => {
  await page.evaluate((targetTop) => {
    window.scrollTo({ top: targetTop, behavior: 'instant' });
  }, top);
  await page.waitForTimeout(delayMs);
};

const readCounterInfo = async () => {
  return page.evaluate(() => {
    const counter = document.querySelector('[data-project-counter]');
    const text = counter ? counter.textContent?.trim() ?? '' : '';
    const match = text.match(/(\d+)\s*\/\s*(\d+)/);

    if (!match) {
      return null;
    }

    return {
      index: Number(match[1]),
      total: Number(match[2]),
    };
  });
};

const findRepresentativeMidTop = async (startTop, endTop) => {
  const distance = Math.max(0, endTop - startTop);
  if (distance === 0) {
    return startTop;
  }

  const fallbackTop = startTop + distance * 0.35;
  const steps = 28;

  for (let step = 1; step < steps; step += 1) {
    const top = startTop + (distance * step) / steps;
    await scrollToTop(top, 140);

    const info = await readCounterInfo();
    if (!info || info.total < 3) {
      continue;
    }

    if (info.index >= 2 && info.index <= info.total - 1) {
      return top;
    }
  }

  return fallbackTop;
};

try {
  await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(700);

  const offsets = await page.evaluate(() => {
    const projects = document.getElementById('projects');
    const cv = document.getElementById('cv');

    if (!projects || !cv) {
      throw new Error('Required sections not found');
    }

    const absTop = (element) => element.getBoundingClientRect().top + window.scrollY;

    const projectsTop = absTop(projects);
    const cvTop = absTop(cv);
    return {
      projectsTop,
      cvTop,
      endTop: Math.max(projectsTop, cvTop - 12),
    };
  });

  const startTop = offsets.projectsTop + 1;
  const midTop = await findRepresentativeMidTop(startTop, offsets.endTop);

  await scrollToTop(startTop, 650);
  await collect('projects-start');

  await scrollToTop(midTop, 140);
  await collect('projects-mid');

  await scrollToTop(offsets.endTop, 650);
  await collect('projects-end');

  const start = metrics.find((item) => item.label === 'projects-start');
  const mid = metrics.find((item) => item.label === 'projects-mid');
  const end = metrics.find((item) => item.label === 'projects-end');

  const pinTopDrift = Math.max(
    Math.abs(start?.pinTop ?? 9999),
    Math.abs(mid?.pinTop ?? 9999)
  );

  const buttonsVisibleInPinned = Boolean(start?.buttonVisible) && Boolean(mid?.buttonVisible);

  const cvGapSmall = typeof end?.cvTop === 'number'
    ? end.cvTop <= 40
    : false;

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    checks: {
      pinTopStable: pinTopDrift <= 3,
      pinTopDrift,
      buttonsVisibleInPinned,
      cvGapSmall,
    },
    metrics,
  };

  await fs.writeFile(
    path.join(outputDir, 'report.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );

  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
