// Second fix-up pass: 11 events whose ru.wikipedia.org articles also lacked
// pageimage metadata. Try alternative ru titles, then fall back to hand-picked
// Commons URLs for the few that still won't budge.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

// Try these ru.wikipedia.org titles first (overrides existing entry on success).
const RU_RETRIES = {
  '1257-mongol-census':    'Монголо-татарское иго',
  '1703-petersburg':       'Санкт-Петербург',
  '1864-zemstvo':          'Земство',
  '1891-transsib':         'Транссиб',
  '1906-duma':             'Государственная дума Российской империи',
  '1914-ww1':              'Первая мировая война',
  '1922-ussr-founded':     'Союз Советских Социалистических Республик',
  '1929-collectivization': 'Коллективизация',
  '1979-afghan':           'Война в Афганистане (1979—1989)',
  '1985-perestroika':      'Михаил Сергеевич Горбачёв',
  '1991-ussr-collapse':    'Беловежские соглашения',
};

// If a ru retry still fails, use these hand-picked Commons URLs. These are
// long-standing public-domain or freely-licensed files that have been on
// Commons for years and won't 404.
const FALLBACK = {
  '1257-mongol-census':    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mongolian_horseman_with_a_bow.jpg/960px-Mongolian_horseman_with_a_bow.jpg',
  '1703-petersburg':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Bronze_Horseman_%28St._Petersburg%2C_Russia%29.jpg/960px-The_Bronze_Horseman_%28St._Petersburg%2C_Russia%29.jpg',
  '1864-zemstvo':          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Konstantin_Makovsky_-_Boyar_Wedding_Feast.JPG/960px-Konstantin_Makovsky_-_Boyar_Wedding_Feast.JPG',
  '1891-transsib':         'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/VL_85-022_container_train.jpg/960px-VL_85-022_container_train.jpg',
  '1906-duma':             'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Repin_17October.jpg/960px-Repin_17October.jpg',
  '1914-ww1':              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Russian_artillery_in_East_Prussia.jpg/960px-Russian_artillery_in_East_Prussia.jpg',
  '1922-ussr-founded':     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Treaty_on_the_creation_of_the_USSR.jpg/960px-Treaty_on_the_creation_of_the_USSR.jpg',
  '1929-collectivization': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bezbozhnik_u_stanka_15-1929.jpg/960px-Bezbozhnik_u_stanka_15-1929.jpg',
  '1979-afghan':           'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Evstafiev-afghan-apc-passes-russian.jpg/960px-Evstafiev-afghan-apc-passes-russian.jpg',
  '1985-perestroika':      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mikhail_Gorbachev_1987_%28cropped%29.jpg/960px-Mikhail_Gorbachev_1987_%28cropped%29.jpg',
  '1991-ussr-collapse':    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/1991_coup_attempt2.jpg/960px-1991_coup_attempt2.jpg',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(host, title) {
  const url =
    `https://${host}/w/api.php?action=query&format=json&prop=pageimages` +
    '&piprop=thumbnail&pithumbsize=800&redirects=1&titles=' +
    encodeURIComponent(title);
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

async function checkUrl(url) {
  return new Promise(resolve => {
    https.get(url, { method: 'HEAD' }, res => resolve(res.statusCode >= 200 && res.statusCode < 400))
      .on('error', () => resolve(false));
  });
}

async function fetchImage(host, title) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const src = await fetchOnce(host, title);
    if (src) return src;
    await sleep(600 * (attempt + 1));
  }
  return null;
}

const dst = path.resolve('src/data/gameImages.json');
const ex = JSON.parse(fs.readFileSync(dst, 'utf8'));

let i = 0;
const total = Object.keys(RU_RETRIES).length;
const stillBad = [];
for (const [id, title] of Object.entries(RU_RETRIES)) {
  i++;
  const src = await fetchImage('ru.wikipedia.org', title);
  if (src) {
    ex[id] = src;
    process.stderr.write(`[${i}/${total}] ${id} ← ru:"${title}" ok\n`);
  } else if (FALLBACK[id]) {
    const ok = await checkUrl(FALLBACK[id]);
    if (ok) {
      ex[id] = FALLBACK[id];
      process.stderr.write(`[${i}/${total}] ${id} ← hardcoded fallback ok\n`);
    } else {
      process.stderr.write(`[${i}/${total}] ${id} ← hardcoded fallback 404! KEEP existing\n`);
      stillBad.push(`${id}`);
    }
  } else {
    process.stderr.write(`[${i}/${total}] ${id} STILL BAD\n`);
    stillBad.push(`${id}`);
  }
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
process.stderr.write(`\nStill bad (${stillBad.length}): ${stillBad.join(', ') || '—'}\n`);
