// Build guard. Fails `astro build` when shipped HTML still contains an owner placeholder
// or anything that looks like a public game download. Both must never reach spareforge.net.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PLACEHOLDERS = [/\[OWNER TO PROVIDE[^\]]*\]/i, /FEHLT\s*\]/, /\[HAUSNUMMER/i, /\[contact email\]/i, /\[Country\]/];
// No build files and no itch download/store buttons. The itch profile URL itself may appear as a plain profile link.
const DOWNLOADS = [/href="[^"]+\.(zip|exe|pck|msi)"/i, /href="[^"]*itch\.io[^"]*\/(download|purchase)[^"]*"/i];

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

export default function placeholderCheck() {
  return {
    name: 'spareforge-placeholder-check',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const problems = [];
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          for (const re of [...PLACEHOLDERS, ...DOWNLOADS]) {
            const m = html.match(re);
            if (m) problems.push(`${file.slice(root.length)}: ${m[0]}`);
          }
        }
        if (problems.length) {
          throw new Error(`Release blocked, fix these first:\n  ${problems.join('\n  ')}`);
        }
        logger.info('No owner placeholders and no download links in the build.');
      },
    },
  };
}
