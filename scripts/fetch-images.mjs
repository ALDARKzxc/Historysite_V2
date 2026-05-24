// One-off helper: fetch a fitting lead image (portrait/painting/photo) for each
// epoch and topic from Wikipedia's pageimages API, then print an id -> url map.
import https from 'node:https';

const TITLES = {
  // --- Epochs (cover images) ---
  'ancient-rus': 'Christianization of Kievan Rus',
  'mongol-invasion': 'Mongol invasion of Kievan Rus',
  'rise-of-moscow': 'Battle of Kulikovo',
  'muscovite-state': 'Ivan the Terrible',
  'time-of-troubles': 'Time of Troubles',
  'peter-the-great': 'Peter the Great',
  'catherine-great': 'Catherine the Great',
  'napoleon': 'French invasion of Russia',
  'great-reforms': 'Alexander II of Russia',
  'late-empire': 'Nicholas II of Russia',
  'civil-war': 'Russian Civil War',
  'stalins-ussr': 'Joseph Stalin',
  'great-patriotic-war': 'Battle of Stalingrad',
  'cold-war': 'Yuri Gagarin',
  'perestroika': 'Mikhail Gorbachev',
  'modern-russia': 'Boris Yeltsin',

  // --- Topics ---
  'varangians': 'Varangians',
  'rurik': 'Rurik',
  'oleg-prophetic': 'Oleg the Wise',
  'kievan-rus': "Kievan Rus'",
  'baptism-rus': 'Christianization of Kievan Rus',
  'yaroslav-wise': 'Yaroslav the Wise',

  'genghis-khan': 'Genghis Khan',
  'mongol-invasion-rus': 'Mongol invasion of Kievan Rus',
  'golden-horde': 'Golden Horde',
  'alexander-nevsky': 'Alexander Nevsky',

  'ivan-kalita': 'Ivan I of Moscow',
  'kulikovo': 'Battle of Kulikovo',
  'ivan-iii': 'Ivan III of Russia',

  'ivan-terrible': 'Ivan the Terrible',
  'oprichnina': 'Oprichnina',
  'siberia-yermak': 'Yermak Timofeyevich',

  'false-dmitry': 'False Dmitry I',
  'minin-pozharsky': 'Monument to Minin and Pozharsky',

  'peter-reforms': 'Peter the Great',
  'saint-petersburg': 'Bronze Horseman',
  'battle-poltava': 'Battle of Poltava',
  'northern-war': 'Great Northern War',

  'enlightened-absolutism': 'Catherine the Great',
  'pugachev': 'Yemelyan Pugachev',
  'crimea-annexation': 'Grigory Potemkin',

  'patriotic-war': 'French invasion of Russia',
  'borodino': 'Battle of Borodino',
  'decembrists': 'Decembrist revolt',

  'abolition-serfdom': 'Emancipation reform of 1861',
  'trans-siberian': 'Trans-Siberian Railway',

  'nicholas-ii': 'Nicholas II of Russia',
  'bloody-sunday': 'Bloody Sunday (1905)',
  'october-revolution': 'October Revolution',
  'rasputin': 'Grigori Rasputin',

  'civil-war-russia': 'Russian Civil War',
  'romanov-execution': 'Execution of the Romanov family',
  'ussr-formation': 'Vladimir Lenin',

  'collectivization': 'Collectivization in the Soviet Union',
  'great-terror': 'Great Purge',
  'gulag': 'Gulag',

  'operation-barbarossa': 'Operation Barbarossa',
  'battle-stalingrad': 'Battle of Stalingrad',
  'siege-leningrad': 'Siege of Leningrad',
  'victory-day': 'Victory Day (9 May)',

  'sputnik': 'Sputnik 1',
  'gagarin': 'Yuri Gagarin',
  'cuban-crisis': 'Cuban Missile Crisis',
  'khrushchev-thaw': 'Nikita Khrushchev',

  'perestroika-topic': 'Perestroika',
  'chernobyl': 'Chernobyl disaster',
  'ussr-dissolution': 'Dissolution of the Soviet Union',

  'yeltsin': 'Boris Yeltsin',
  'russia-1990s': 'History of Russia (1992–present)',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchOnce(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages' +
    '&piprop=thumbnail&pithumbsize=800&redirects=1&titles=' +
    encodeURIComponent(title);
  return new Promise(resolve => {
    https
      .get(url, { headers: { 'User-Agent': 'RusHistoryEdu/1.0 (student educational project; contact: example@example.com)' } }, res => {
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
for (const [id, title] of Object.entries(TITLES)) {
  const src = await fetchImage(title);
  out[id] = src;
  if (!src) missing.push(`${id} (${title})`);
  await sleep(500);
}

console.log(JSON.stringify(out, null, 2));
console.error('\nMISSING (' + missing.length + '): ' + missing.join(', '));
