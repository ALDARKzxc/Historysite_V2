// Fetch a unique lead image for every event in the "Which came first?" game pool.
// Same approach as scripts/fetch-images.mjs but keyed by event-id (year + slug)
// and writes to src/data/gameImages.json so it can be imported as JSON.
//
// Usage:  node scripts/fetch-game-images.mjs
//
// Where titles collide between events (e.g., 1462 / 1505 both about Ivan III),
// the second event is mapped to an *adjacent* Wikipedia article (the successor,
// a related artwork, a named monument) so the player never sees the same image
// twice in one round.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const TITLES = {
  // IX век
  '862-varangians': 'Varangians',
  '879-rurik-death': 'Rurik',
  '882-oleg-unites': 'Oleg of Novgorod',

  // X
  '907-tsargrad': "Rus'–Byzantine War (907)",
  '945-igor-death': 'Igor of Kiev',
  '957-olga-baptism': 'Olga of Kiev',
  '965-khazars': 'Sviatoslav I of Kiev',
  '988-baptism': "Christianization of Kievan Rus'",

  // XI
  '1019-yaroslav-rule': 'Yaroslav the Wise',
  '1037-sophia-kyiv': 'Saint Sophia Cathedral, Kyiv',
  '1054-yaroslav-death': 'Russkaya Pravda',
  '1097-lyubech': 'Council of Liubech',

  // XII
  '1113-monomakh-rule': 'Vladimir II Monomakh',
  '1125-monomakh-death': 'Monomakh\'s Cap',
  '1147-moscow-founded': 'Yury Dolgorukiy',
  '1169-bogolyubsky-kyiv': 'Andrey Bogolyubsky',
  '1185-igor-polovtsy': "The Tale of Igor's Campaign",

  // XIII
  '1223-kalka': 'Battle of the Kalka River',
  '1237-batu': "Mongol invasion of Kievan Rus'",
  '1240-neva': 'Battle of the Neva',
  '1242-ice': 'Battle on the Ice',
  '1257-mongol-census': 'Mongol Yoke',
  '1263-nevsky-death': 'Alexander Nevsky',

  // XIV
  '1325-kalita-rule': 'Ivan I of Moscow',
  '1359-donskoy-rule': 'Dmitry Donskoy',
  '1367-kremlin-stone': 'Moscow Kremlin',
  '1378-vozha': 'Battle of the Vozha River',
  '1380-kulikovo': 'Battle of Kulikovo',
  '1382-tokhtamysh': 'Tokhtamysh',

  // XV
  '1462-ivan3-rule': 'Ivan III of Russia',
  '1471-shelon': 'Battle of Shelon',
  '1478-novgorod-annexed': 'Novgorod Republic',
  '1480-ugra': 'Great Stand on the Ugra River',
  '1497-sudebnik': 'Sudebnik of 1497',

  // XVI
  '1505-ivan3-death': 'Vasili III of Russia',
  '1533-ivan4-three': 'Elena Glinskaya',
  '1547-coronation': 'Ivan the Terrible',
  '1550-sudebnik-ivan4': 'Sudebnik of 1550',
  '1552-kazan': 'Siege of Kazan (1552)',
  '1556-astrakhan': 'Astrakhan Khanate',
  '1565-oprichnina': 'Oprichnina',
  '1581-yermak-cross': 'Yermak Timofeyevich',
  '1584-grozny-death': 'Ivan the Terrible and His Son Ivan',
  '1589-patriarchate': 'Patriarch Job of Moscow',

  // XVII
  '1605-falsedmitry': 'False Dmitry I',
  '1610-poles-moscow': 'Polish–Muscovite War (1605–1618)',
  '1612-minin-pozharsky': 'Monument to Minin and Pozharsky',
  '1613-mikhail': 'Michael of Russia',
  '1649-ulozhenie': 'Sobornoye Ulozhenie',
  '1654-pereyaslav': 'Pereyaslav Council',
  '1666-raskol': 'Raskol',
  '1670-razin': 'Stepan Razin',
  '1682-streltsy-uprising': 'Moscow uprising of 1682',
  '1689-peter-rule': 'Peter the Great',

  // XVIII
  '1700-northern-war': 'Great Northern War',
  '1703-petersburg': 'Saint Petersburg',
  '1709-poltava': 'Battle of Poltava',
  '1721-empire': 'Treaty of Nystad',
  '1725-peter-death': 'Bronze Horseman',
  '1741-elizabeth': 'Elizabeth of Russia',
  '1762-catherine2': 'Catherine the Great',
  '1773-pugachev': 'Yemelyan Pugachev',
  '1783-crimea': 'Annexation of Crimea by the Russian Empire',
  '1796-catherine-death': 'Paul I of Russia',

  // XIX
  '1801-alexander1': 'Alexander I of Russia',
  '1807-tilsit': 'Treaties of Tilsit',
  '1812-borodino': 'Battle of Borodino',
  '1814-paris': 'Battle of Paris (1814)',
  '1825-decembrists': 'Decembrist revolt',
  '1853-crimean-war': 'Crimean War',
  '1861-emancipation': 'Emancipation reform of 1861',
  '1864-zemstvo': 'Zemstvo',
  '1881-alexander2-death': 'Alexander II of Russia',
  '1891-transsib': 'Trans-Siberian Railway',
  '1894-nicholas2': 'Nicholas II of Russia',

  // XX
  '1904-russojapanese': 'Russo-Japanese War',
  '1905-bloody-sunday': 'Bloody Sunday (1905)',
  '1906-duma': 'State Duma of the Russian Empire',
  '1914-ww1': 'Russia in World War I',
  '1917-feb': 'February Revolution',
  '1917-oct': 'October Revolution',
  '1918-romanovs': 'Execution of the Romanov family',
  '1922-ussr-founded': 'Soviet Union',
  '1924-lenin-death': 'Vladimir Lenin',
  '1929-collectivization': 'Collectivization in the Soviet Union',
  '1937-terror': 'Great Purge',
  '1939-molotov': 'Molotov–Ribbentrop Pact',
  '1941-barbarossa': 'Operation Barbarossa',
  '1942-stalingrad': 'Battle of Stalingrad',
  '1943-kursk': 'Battle of Kursk',
  '1944-leningrad-lifted': 'Siege of Leningrad',
  '1945-victory': 'Victory Day (9 May)',
  '1953-stalin-death': 'Joseph Stalin',
  '1956-20congress': 'On the Cult of Personality and Its Consequences',
  '1957-sputnik': 'Sputnik 1',
  '1961-gagarin': 'Yuri Gagarin',
  '1962-cuban': 'Cuban Missile Crisis',
  '1979-afghan': 'Soviet–Afghan War',
  '1985-perestroika': 'Perestroika',
  '1986-chernobyl': 'Chernobyl disaster',
  '1989-afghan-withdrawal': 'Soviet withdrawal from Afghanistan',
  '1991-ussr-collapse': 'Dissolution of the Soviet Union',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages' +
    '&piprop=thumbnail&pithumbsize=800&redirects=1&titles=' +
    encodeURIComponent(title);
  return new Promise(resolve => {
    https
      .get(url, { headers: { 'User-Agent': 'RusHistoryEdu/1.0 (student educational project)' } }, res => {
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

const out = {};
const missing = [];
let i = 0;
const total = Object.keys(TITLES).length;
for (const [id, title] of Object.entries(TITLES)) {
  i++;
  const src = await fetchImage(title);
  out[id] = src;
  if (!src) missing.push(`${id} (${title})`);
  process.stderr.write(`[${i}/${total}] ${id} → ${src ? 'ok' : 'MISS'}\n`);
  await sleep(300);
}

const dst = path.resolve('src/data/gameImages.json');
fs.writeFileSync(dst, JSON.stringify(out, null, 2), 'utf8');
process.stderr.write(`\nSaved ${dst}\n`);
process.stderr.write(`MISSING (${missing.length}): ${missing.join(', ') || '—'}\n`);
