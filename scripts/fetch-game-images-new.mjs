// Fetch images for the 31 new events added for the Russian Empire / USSR /
// post-Soviet expansion. Same pattern as scripts/fetch-game-images-fix.mjs:
// prefer ru.wikipedia.org, fall back to en. Existing entries are not touched.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const TARGETS = {
  // XVIII
  '1718-alexei-death':          { host: 'ru.wikipedia.org', title: 'Алексей Петрович (царевич)' },
  '1722-table-of-ranks':        { host: 'ru.wikipedia.org', title: 'Табель о рангах' },
  '1755-moscow-university':     { host: 'ru.wikipedia.org', title: 'Московский государственный университет' },
  '1762-nobility-liberty':      { host: 'ru.wikipedia.org', title: 'Манифест о вольности дворянства' },
  '1767-legislative-commission':{ host: 'ru.wikipedia.org', title: 'Уложенная комиссия' },
  '1772-poland-partition-1':    { host: 'ru.wikipedia.org', title: 'Первый раздел Речи Посполитой' },
  '1774-kainarji':              { host: 'ru.wikipedia.org', title: 'Кючук-Кайнарджийский мирный договор' },
  '1790-izmail':                { host: 'ru.wikipedia.org', title: 'Штурм Измаила' },

  // XIX
  '1809-finland':               { host: 'ru.wikipedia.org', title: 'Великое княжество Финляндское' },
  '1815-vienna-congress':       { host: 'ru.wikipedia.org', title: 'Венский конгресс' },
  '1830-polish-uprising':       { host: 'ru.wikipedia.org', title: 'Польское восстание (1830)' },
  '1837-pushkin-duel':          { host: 'ru.wikipedia.org', title: 'Дуэль Пушкина и Дантеса' },
  '1856-paris-treaty':          { host: 'ru.wikipedia.org', title: 'Парижский мирный договор (1856)' },
  '1863-polish-uprising-2':     { host: 'ru.wikipedia.org', title: 'Польское восстание (1863)' },
  '1877-russoturkish':          { host: 'ru.wikipedia.org', title: 'Русско-турецкая война (1877—1878)' },
  '1898-rsdlp':                 { host: 'ru.wikipedia.org', title: 'I съезд РСДРП' },

  // XX
  '1903-rsdlp-split':           { host: 'ru.wikipedia.org', title: 'II съезд РСДРП' },
  '1907-stolypin-reform':       { host: 'ru.wikipedia.org', title: 'Столыпинская аграрная реформа' },
  '1911-stolypin-killed':       { host: 'ru.wikipedia.org', title: 'Убийство Столыпина' },
  '1916-brusilov':              { host: 'ru.wikipedia.org', title: 'Брусиловский прорыв' },
  '1918-brest-litovsk':         { host: 'ru.wikipedia.org', title: 'Брестский мир' },
  '1920-polish-war':            { host: 'ru.wikipedia.org', title: 'Советско-польская война' },
  '1921-nep':                   { host: 'ru.wikipedia.org', title: 'Новая экономическая политика' },
  '1934-kirov-killed':          { host: 'ru.wikipedia.org', title: 'Убийство Кирова' },
  '1949-atomic-bomb':           { host: 'ru.wikipedia.org', title: 'РДС-1' },
  '1968-prague-spring':         { host: 'ru.wikipedia.org', title: 'Пражская весна' },

  // XXI
  '1993-constitution':          { host: 'ru.wikipedia.org', title: 'Конституция Российской Федерации' },
  '1998-default':               { host: 'ru.wikipedia.org', title: 'Экономический кризис в России (1998)' },
  '1999-putin-acting':          { host: 'ru.wikipedia.org', title: 'Президентство Владимира Путина' },
  '2008-georgia-war':           { host: 'ru.wikipedia.org', title: 'Вооружённый конфликт в Южной Осетии (2008)' },
  '2014-sochi-olympics':        { host: 'ru.wikipedia.org', title: 'Зимние Олимпийские игры 2014' },
};

// Last-resort en.wikipedia.org fallbacks if ru fails.
const EN_FALLBACK = {
  '1718-alexei-death':       'Alexei Petrovich, Tsarevich of Russia',
  '1755-moscow-university':  'Moscow State University',
  '1762-nobility-liberty':   'Peter III of Russia',
  '1767-legislative-commission': 'Legislative Commission',
  '1772-poland-partition-1': 'First Partition of Poland',
  '1774-kainarji':           'Treaty of Kuchuk-Kainarji',
  '1790-izmail':             'Siege of Izmail',
  '1809-finland':            'Grand Duchy of Finland',
  '1815-vienna-congress':    'Congress of Vienna',
  '1830-polish-uprising':    'November Uprising',
  '1837-pushkin-duel':       'Alexander Pushkin',
  '1856-paris-treaty':       'Treaty of Paris (1856)',
  '1863-polish-uprising-2':  'January Uprising',
  '1877-russoturkish':       'Russo-Turkish War (1877–1878)',
  '1898-rsdlp':              'Russian Social Democratic Labour Party',
  '1903-rsdlp-split':        '2nd Congress of the Russian Social Democratic Labour Party',
  '1907-stolypin-reform':    'Stolypin reform',
  '1911-stolypin-killed':    'Pyotr Stolypin',
  '1916-brusilov':           'Brusilov offensive',
  '1918-brest-litovsk':      'Treaty of Brest-Litovsk',
  '1920-polish-war':         'Polish–Soviet War',
  '1921-nep':                'New Economic Policy',
  '1934-kirov-killed':       'Sergei Kirov',
  '1949-atomic-bomb':        'RDS-1',
  '1968-prague-spring':      'Prague Spring',
  '1993-constitution':       'Constitution of Russia',
  '1998-default':            '1998 Russian financial crisis',
  '1999-putin-acting':       'Vladimir Putin',
  '2008-georgia-war':        'Russo-Georgian War',
  '2014-sochi-olympics':     '2014 Winter Olympics',
  '1722-table-of-ranks':     'Table of Ranks',
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

async function fetchImage(host, title) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const src = await fetchOnce(host, title);
    if (src) return src;
    await sleep(500 * (attempt + 1));
  }
  return null;
}

const dst = path.resolve('src/data/gameImages.json');
const ex = JSON.parse(fs.readFileSync(dst, 'utf8'));

let i = 0;
const total = Object.keys(TARGETS).length;
const stillMissing = [];
for (const [id, { host, title }] of Object.entries(TARGETS)) {
  i++;
  if (ex[id]) { process.stderr.write(`[${i}/${total}] ${id} → keep existing\n`); continue; }
  let src = await fetchImage(host, title);
  if (!src && EN_FALLBACK[id]) {
    process.stderr.write(`[${i}/${total}] ${id} ru miss → trying en:"${EN_FALLBACK[id]}"\n`);
    src = await fetchImage('en.wikipedia.org', EN_FALLBACK[id]);
  }
  if (src) {
    ex[id] = src;
    process.stderr.write(`[${i}/${total}] ${id} ok\n`);
  } else {
    process.stderr.write(`[${i}/${total}] ${id} STILL MISS\n`);
    stillMissing.push(id);
  }
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
process.stderr.write(`\nStill missing (${stillMissing.length}): ${stillMissing.join(', ') || '—'}\n`);
