// Copies the encoded videos from the `media` branch worktree into public/media for local preview.
// CI does the same with actions/checkout (ref: media, path: public/media). public/media is gitignored.
import { cp, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const src = resolve(process.env.MEDIA_DIR ?? '../SpareForge-Web-media');
const dst = resolve('public/media');
try {
  await access(src);
} catch {
  console.warn(`[media] ${src} not found. Videos will 404 locally; posters still work.`);
  process.exit(0);
}
for (const dir of ['hero', 'trailer', 'shorts', 'loops']) {
  await cp(`${src}/${dir}`, `${dst}/${dir}`, { recursive: true, force: true });
}
console.log(`[media] synced ${src} -> ${dst}`);
