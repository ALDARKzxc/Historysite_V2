import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const RETRIES = {
  '1825-decembrists': 'Pavel Pestel',
  '1961-gagarin': 'Soviet space program',
  '1962-cuban': 'John F. Kennedy',
  '1985-perestroika': 'Cold War',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages' +
    '&piprop=thumbnail&pithumbsize=800&redirects=1&titles=' + encodeURIComponent(title);
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'RusHistoryEdu/1.0' } }, res => {
      let body = '';
      res.on('data', c => (body += c));
      res.on('end', () => {
        if (res.statusCode !== 200) return resolve(null);
        try { const p = Object.values(JSON.parse(body).query.pages)[0]; resolve(p?.thumbnail?.source ?? null); }
        catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

async function fetchImage(t) {
  for (let i = 0; i < 4; i++) { const s = await fetchOnce(t); if (s) return s; await sleep(800 * (i + 1)); }
  return null;
}

const dst = path.resolve('src/data/gameImages.json');
const ex = JSON.parse(fs.readFileSync(dst, 'utf8'));
for (const [id, t] of Object.entries(RETRIES)) {
  if (ex[id]) { process.stderr.write(`${id} → keep\n`); continue; }
  const s = await fetchImage(t);
  ex[id] = s;
  process.stderr.write(`${id} (${t}) → ${s ? 'ok' : 'STILL MISS'}\n`);
  await sleep(300);
}
fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
