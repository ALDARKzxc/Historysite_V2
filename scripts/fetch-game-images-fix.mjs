// Final fix-up pass for game card images.
// The pageimages API on en.wikipedia.org returned several poorly-matched
// images (modern city skylines for "Conquest of Kazan", a Soviet flag SVG
// for "USSR founded", an Islamic-jurisprudence diagram for "Soviet–Afghan
// War", etc.). This pass replaces those entries with:
//   (a) URLs picked from ru.wikipedia.org for events whose Russian article
//       has the iconographic painting/photo in its lead, and
//   (b) a small set of hand-picked, well-known Wikimedia Commons URLs that
//       the project already uses for hero images in articles (Gagarin in
//       his orange suit, the Reichstag flag, the Kustodiev "Reading of the
//       Manifesto", etc.).
// Existing-but-OK entries are NOT touched.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

// Direct hardcoded Wikimedia URLs — used for events where I know exactly the
// canonical historic image. These take precedence over any wiki fetch.
const HARDCODED = {
  '1945-victory':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Reichstag_flag_original.jpg/960px-Reichstag_flag_original.jpg',
  '1961-gagarin':       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Yuri_Gagarin_with_awards_%28cropped%29_2.jpg/960px-Yuri_Gagarin_with_awards_%28cropped%29_2.jpg',
  '1861-emancipation':  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Reading_of_the_Manifest_%28Liberation_of_peasants%29_-_Kustodiev%2C_1907.jpg/960px-Reading_of_the_Manifest_%28Liberation_of_peasants%29_-_Kustodiev%2C_1907.jpg',
};

// Russian-Wikipedia replacements: { id: ruWikipediaArticleTitle }.
const RU_RETRIES = {
  '1097-lyubech':           'Любечский съезд',
  '1125-monomakh-death':    'Владимир Всеволодович Мономах',
  '1257-mongol-census':     'Численники',
  '1359-donskoy-rule':      'Дмитрий Донской',
  '1547-coronation':        'Иван Грозный',
  '1550-sudebnik-ivan4':    'Судебник 1550 года',
  '1552-kazan':             'Взятие Казани',
  '1556-astrakhan':         'Астраханские походы',
  '1581-yermak-cross':      'Сибирский поход Ермака',
  '1689-peter-rule':        'Великое посольство',
  '1703-petersburg':        'Основание Санкт-Петербурга',
  '1814-paris':             'Взятие Парижа (1814)',
  '1853-crimean-war':       'Оборона Севастополя (1854—1855)',
  '1864-zemstvo':           'Земская реформа (1864)',
  '1891-transsib':          'Транссибирская магистраль',
  '1906-duma':              'Государственная дума Российской империи I созыва',
  '1914-ww1':               'Россия в Первой мировой войне',
  '1922-ussr-founded':      'Образование СССР',
  '1929-collectivization':  'Коллективизация в СССР',
  '1979-afghan':            'Афганская война (1979—1989)',
  '1985-perestroika':       'Перестройка',
  '1991-ussr-collapse':     'Распад СССР',
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

let replaced = 0;
const stillMissing = [];

// 1) Apply hardcoded URLs (overrides any existing).
for (const [id, url] of Object.entries(HARDCODED)) {
  ex[id] = url;
  process.stderr.write(`${id} → hardcoded\n`);
  replaced++;
}

// 2) Apply ru.wikipedia.org replacements (overrides existing).
let i = 0;
const ruTotal = Object.keys(RU_RETRIES).length;
for (const [id, title] of Object.entries(RU_RETRIES)) {
  i++;
  const src = await fetchImage('ru.wikipedia.org', title);
  if (src) {
    ex[id] = src;
    process.stderr.write(`[${i}/${ruTotal}] ${id} ← ru:"${title}" ok\n`);
    replaced++;
  } else {
    process.stderr.write(`[${i}/${ruTotal}] ${id} ← ru:"${title}" STILL MISS (keeping existing)\n`);
    stillMissing.push(`${id} (ru:${title})`);
  }
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
process.stderr.write(`\nReplaced ${replaced} entries.\n`);
process.stderr.write(`Still bad (${stillMissing.length}): ${stillMissing.join(', ') || '—'}\n`);
