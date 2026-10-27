// src/content.config.ts — collection « blog » de GROUPE SELION (22/10/2026).
// Articles repris de myselion4nonprofit/src/content/blog (company: "SELION"), un fichier par
// article et par langue : src/content/blog/<slug>.<langue>.mdx. Le titre H1 est dans l'article.
// Champs identiques au blog du monorepo, pour copier les futurs articles sans retouche.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // generateId : garde le suffixe de langue (« slug.fr ») que l'id par défaut d'Astro supprime.
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      uuid: z.string().optional(),
      customSlug: z.string().optional(),
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      image: image().optional(),
      author: z.string().optional(),
      company: z.string(),
      segment: z.string(),
      category: z.string().optional(),
      articleType: z.string().optional(),
      contexte: z.enum(['local', 'regional', 'national', 'international']).optional(),
      zone: z.string().optional(),
      tags: z.array(z.string()).optional(),
      audioUrl: z.string().url().optional(),
      videoUrl: z.string().url().optional(),
      backlinkUrl: z.string().url().optional(),
    }),
});

export const collections = { blog };
