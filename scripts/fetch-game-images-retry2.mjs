// Third-chance fetcher for the 14 events that still missed after the first
// two passes. Pick obviously-image-having Wikipedia articles tied to the
// event (related person, monument, related campaign, related artist).

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const RETRIES = {
  '1367-kremlin-stone': 'Spasskaya Tower',
  '1547-coronation': 'Cap of Monomakh',
  '1550-sudebnik-ivan4': 'Macarius, Metropolitan of Moscow',
  '1552-kazan': 'Kazan',
  '1556-astrakhan': 'Astrakhan',
  '1581-yermak-cross': 'Vasily Surikov',
  '1703-petersburg': 'Hermitage Museum',
  '1709-poltava': 'Charles XII',
  '1814-paris': 'War of the Sixth Coalition',
  '1825-decembrists': 'Decembrist movement',
  '1961-gagarin': 'Astronaut',
  '1962-cuban': 'Operation Anadyr',
  '1979-afghan': 'Mujahideen',
  '1985-perestroika': 'Glasnost',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages' +
    '&piprop=thumbnail&pithumbsize=800&redirects=1&titles=' +
    encodeURIComponent(title);
  return new Promise(resolve => {
    https
      .get(url, { headers: { 'User-Agent': 'RusHistoryEdu/1.0' } }, res => {
        let body = '';
        res.on('data', c => (body += c));
        res.on('end', () => {
          if (res.statusCode !== 200) return resolve(null);
          try {
            const pages = JSON.parse(body).query.pages;
            const page = Object.values(pages)[0];
            resolve(page?.thumbnail?.source ?? null);
          } catch {
            resolve(null);
          }
        });
      })
      .on('error', () => resolve(null));
  });
}

async function fetchImage(title) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const src = await fetchOnce(title);
    if (src) return src;
    await sleep(800 * (attempt + 1));
  }
  return null;
}

const dst = path.resolve('src/data/gameImages.json');
const existing = JSON.parse(fs.readFileSync(dst, 'utf8'));

let i = 0;
const total = Object.keys(RETRIES).length;
const stillMissing = [];
for (const [id, title] of Object.entries(RETRIES)) {
  i++;
  if (existing[id]) { process.stderr.write(`[${i}/${total}] ${id} → keep\n`); continue; }
  const src = await fetchImage(title);
  existing[id] = src;
  process.stderr.write(`[${i}/${total}] ${id} (${title}) → ${src ? 'ok' : 'STILL MISS'}\n`);
  if (!src) stillMissing.push(`${id} (${title})`);
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(existing, null, 2), 'utf8');
process.stderr.write(`\nStill missing (${stillMissing.length}): ${stillMissing.join(', ') || '—'}\n`);
