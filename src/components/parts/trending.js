import puppeteer from 'puppeteer';

const getTrends = async (country, timeframe) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  let url = `https://trends.google.com/trends/trendingsearches/daily?geo=${country}&hl=en-GB`;
  if (timeframe === 'realtime') {
    url = `https://trends.google.com/trends/trendingsearches/realtime?geo=${country}&hl=en-GB&category=all`;
  }
  https://trends.google.com/trends/trendingsearches/daily?geo=IN&hl=en-GB

  await page.goto(url, { waitUntil: 'networkidle2' });

  const trends = await page.evaluate(() => {
    const results = [];
    const items = document.querySelectorAll('.feed-item');

    items.forEach(item => {
      const title = item.querySelector('.title span')?.textContent;
      const link = item.querySelector('.details-link')?.href;
      const snippet = item.querySelector('.summary-text')?.textContent;

      if (title && link && snippet) {
        results.push({ title, link, snippet });
      }
    });

    return results;
  });

  await browser.close();
  return trends;
};

export default async (req, res) => {
  const { country = 'US', timeframe = 'daily' } = req.query;

  try {
    const trends = await getTrends(country, timeframe);
    res.status(200).json(trends);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trends' });
  }
};
