import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Devlog posts, one Markdown file per language: src/content/devlog/{en,de}/<slug>.md
const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'de']),
    version: z.string(),
    summary: z.string(),
  }),
});

export const collections = { devlog };
