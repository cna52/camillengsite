import { cp, mkdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const client = new URL('../dist/client/', import.meta.url);

await mkdir(client, { recursive: true });
await rename(new URL('index.html', dist), new URL('index.html', client));
await cp(new URL('assets/', dist), new URL('assets/', client), { recursive: true });

const publicAssets = ['collage-reference.png', 'flowers.gif', 'flowers.mp4', 'hero-lily-dark.png'];
for (const asset of publicAssets) {
  await rename(new URL(asset, dist), new URL(asset, client));
}

await mkdir(new URL('server/', dist), { recursive: true });
await writeFile(
  new URL('server/index.js', dist),
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);
