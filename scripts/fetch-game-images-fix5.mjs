// Two final targeted replacements for events whose images on the prod build
// still came out generic (a coat of arms for the State Duma, the USSR flag
// for the founding of the USSR). Use the article on the specific historical
// document/event that has the canonical iconic illustration in its lead.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const TARGETS = {
  '1906-duma':         { host: 'ru.wikipedia.org', title: 'Манифест 17 октября 1905 года' },
  '1922-ussr-founded': { host: 'ru.wikipedia.org', title: 'Договор об образовании СССР' },
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(host, title) {
  const url =
    `https://${host}/w/api.php?action=query&format=json&prop=pageimages` +
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

const dst = path.resolve('src/data/gameImages.json');
const ex = JSON.parse(fs.readFileSync(dst, 'utf8'));

for (const [id, { host, title }] of Object.entries(TARGETS)) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const src = await fetchOnce(host, title);
    if (src) {
      ex[id] = src;
      process.stderr.write(`${id} ← ${host}:"${title}" ok\n`);
      break;
    }
    await sleep(600 * (attempt + 1));
    if (attempt === 2) process.stderr.write(`${id} STILL BAD\n`);
  }
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
