// Second-chance fetcher: same as fetch-game-images.mjs but only for the events
// whose first-pass page-image lookup came back null (Wikipedia has no
// `pageimage` metadata on many articles even when they obviously have images).
// For each, we try an adjacent article that DOES advertise a page image —
// usually a monument, a successor, or a related artwork. Result is merged
// into the existing gameImages.json (existing URLs are not overwritten).

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const RETRIES = {
  '1054-yaroslav-death': 'Saint Sophia Cathedral in Novgorod',
  '1097-lyubech': 'Lyubech',
  '1257-mongol-census': 'Mongol Empire',
  '1263-nevsky-death': 'Alexander Nevsky Lavra',
  '1325-kalita-rule': 'Ivan Kalita',
  '1359-donskoy-rule': 'Donskoy Monastery',
  '1367-kremlin-stone': 'Cathedral of the Dormition, Moscow',
  '1547-coronation': "Monomakh's Cap",
  '1550-sudebnik-ivan4': "Saint Basil's Cathedral",
  '1552-kazan': 'Kazan Kremlin',
  '1556-astrakhan': 'Astrakhan Kremlin',
  '1565-oprichnina': 'Alexandrov Kremlin',
  '1581-yermak-cross': 'Conquest of Siberia by Yermak',
  '1682-streltsy-uprising': 'Streltsy',
  '1689-peter-rule': 'Peter and Paul Fortress',
  '1700-northern-war': 'Battle of Narva (1700)',
  '1703-petersburg': 'Peter and Paul Cathedral',
  '1709-poltava': 'Charles XII of Sweden',
  '1814-paris': 'Treaty of Paris (1814)',
  '1825-decembrists': 'Senate Square, Saint Petersburg',
  '1853-crimean-war': 'Siege of Sevastopol (1854–1855)',
  '1861-emancipation': 'Russian Empire',
  '1864-zemstvo': 'Russian peasantry',
  '1881-alexander2-death': 'Church of the Savior on Blood',
  '1924-lenin-death': "Lenin's Mausoleum",
  '1929-collectivization': 'Kolkhoz',
  '1937-terror': 'Nikolai Yezhov',
  '1939-molotov': 'Vyacheslav Molotov',
  '1941-barbarossa': 'Eastern Front (World War II)',
  '1956-20congress': 'Nikita Khrushchev',
  '1961-gagarin': 'Vostok 1',
  '1962-cuban': 'Fidel Castro',
  '1979-afghan': 'Soviet–Afghan War',
  '1985-perestroika': 'Mikhail Gorbachev',
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
  // Don't overwrite a URL that the first pass already found.
  if (existing[id]) {
    process.stderr.write(`[${i}/${total}] ${id} → keep first-pass\n`);
    continue;
  }
  const src = await fetchImage(title);
  existing[id] = src;
  process.stderr.write(`[${i}/${total}] ${id} (${title}) → ${src ? 'ok' : 'STILL MISS'}\n`);
  if (!src) stillMissing.push(`${id} (${title})`);
  await sleep(300);
}

fs.writeFileSync(dst, JSON.stringify(existing, null, 2), 'utf8');
process.stderr.write(`\nMerged into ${dst}\n`);
process.stderr.write(`Still missing (${stillMissing.length}): ${stillMissing.join(', ') || '—'}\n`);
