// Inject the fetched image URLs into epochs.ts (coverImage + topic image)
// and articles.ts (heroImage), keyed by the nearest preceding `id: '...'`.
import { readFileSync, writeFileSync } from 'node:fs';

const map = JSON.parse(readFileSync('scripts/image-urls.json', 'utf8'));

function apply(path, keys) {
  const lines = readFileSync(path, 'utf8').split('\n');
  let currentId = null;
  let changed = 0;
  const idRe = /\bid: '([a-z0-9-]+)'/;

  const out = lines.map(line => {
    const idMatch = line.match(idRe);
    if (idMatch) currentId = idMatch[1];

    for (const key of keys) {
      // match `key: '...'` (key is a whole word, e.g. coverImage / image / heroImage)
      const re = new RegExp(`(?<![A-Za-z])${key}: '[^']*'`);
      if (re.test(line) && currentId && map[currentId]) {
        changed++;
        return line.replace(re, `${key}: '${map[currentId]}'`);
      }
    }
    return line;
  });

  writeFileSync(path, out.join('\n'));
  console.log(`${path}: ${changed} image(s) updated`);
}

// In epochs.ts: epoch coverImage and topic image.
apply('src/data/epochs.ts', ['coverImage', 'image']);
// In articles.ts: heroImage for the full articles.
apply('src/data/articles.ts', ['heroImage']);
