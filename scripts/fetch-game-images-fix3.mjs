// Final stubborn-four pass. For the events whose article has NO `pageimage`
// metadata on either en or ru Wikipedia, fall back to enumerating ALL images
// on the article via prop=images, then asking imageinfo for an 800px thumb
// of each, skipping icons/flags/coats/maps, and picking the first usable one.

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const STUCK = {
  '1257-mongol-census':  { host: 'en.wikipedia.org', title: 'Mongol Yoke' },
  '1979-afghan':         { host: 'en.wikipedia.org', title: 'Soviet–Afghan War' },
  '1985-perestroika':    { host: 'en.wikipedia.org', title: 'Perestroika' },
  '1991-ussr-collapse':  { host: 'en.wikipedia.org', title: 'Dissolution of the Soviet Union' },
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getJson(url) {
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'RusHistoryEdu/1.0' } }, res => {
      let body = '';
      res.on('data', c => (body += c));
      res.on('end', () => {
        if (res.statusCode !== 200) return resolve(null);
        try { resolve(JSON.parse(body)); } catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

// Skip heraldry, flags, icons, maps, audio, video — anything that isn't an
// actual painting/photo/etc.
const BAD_NAME = /\b(?:flag|coat[_ ]of[_ ]arms|logo|seal|escutcheon|emblem|map|crest|icon|noia|symbol)\b/i;
const BAD_EXT  = /\.(?:svg|ogg|ogv|webm|mp3|wav|midi?)$/i;

async function imagesOn(host, article) {
  const url =
    `https://${host}/w/api.php?action=query&format=json&prop=images&imlimit=40&redirects=1&titles=` +
    encodeURIComponent(article);
  const data = await getJson(url);
  if (!data) return [];
  const page = Object.values(data.query.pages)[0];
  return (page?.images ?? []).map(im => im.title);
}

async function thumbFor(file, host) {
  // imageinfo with iiurlwidth gives a sized thumb URL ready to use.
  const url =
    `https://${host}/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size` +
    '&iiurlwidth=800&titles=' + encodeURIComponent(file);
  const data = await getJson(url);
  if (!data) return null;
  const page = Object.values(data.query.pages)[0];
  return page?.imageinfo?.[0]?.thumburl ?? page?.imageinfo?.[0]?.url ?? null;
}

const dst = path.resolve('src/data/gameImages.json');
const ex = JSON.parse(fs.readFileSync(dst, 'utf8'));

let i = 0;
const total = Object.keys(STUCK).length;
for (const [id, { host, title }] of Object.entries(STUCK)) {
  i++;
  const files = await imagesOn(host, title);
  process.stderr.write(`[${i}/${total}] ${id} ← ${title}: ${files.length} files on page\n`);
  let picked = null;
  for (const f of files) {
    if (BAD_NAME.test(f) || BAD_EXT.test(f)) continue;
    const url = await thumbFor(f, host);
    if (!url) continue;
    picked = url;
    process.stderr.write(`    picked: ${f}\n`);
    break;
  }
  if (picked) ex[id] = picked;
  else process.stderr.write(`    STILL BAD\n`);
  await sleep(400);
}

fs.writeFileSync(dst, JSON.stringify(ex, null, 2), 'utf8');
process.stderr.write(`\nDone.\n`);
