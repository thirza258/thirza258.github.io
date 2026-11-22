import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const target = path.join(rootDir, 'src', 'data', 'nevatal-metrics.json');

const isMetric = (value) => typeof value === 'number' && Number.isFinite(value) && value >= 0;

const validate = (data) =>
  data &&
  isMetric(data.products) &&
  isMetric(data.aiTools) &&
  isMetric(data.articles) &&
  isMetric(data.proxmoxClouds) &&
  typeof data.updated === 'string';

const readFallback = () => JSON.parse(fs.readFileSync(target, 'utf-8'));

const main = async () => {
  const fallback = readFallback();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const response = await fetch('https://nevatal.id/metrics.json', {
      signal: controller.signal,
      headers: { accept: 'application/json' },
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!validate(data)) {
      throw new Error('metrics.json did not match the expected shape');
    }

    fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, 'utf-8');
    console.log(
      `Synced Nevatal metrics: ${data.products} products, ${data.aiTools} AI tools, ${data.articles} articles.`
    );
  } catch (error) {
    console.warn(
      `Could not sync Nevatal metrics (${error.message}); using committed fallback ${fallback.products}/${fallback.aiTools}/${fallback.articles}.`
    );
  }
};

await main();
