import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Every post on the site is one Markdown file in src/content/feed/.
 * The `type` field decides how it looks: vlog | writing | project | reading | hobby
 * See README.md for copy-paste templates.
 */

const common = {
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
};

const feed = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/feed' }),
  schema: z.discriminatedUnion('type', [
    z.object({
      ...common,
      type: z.literal('vlog'),
      /** Paste the YouTube video ID (the part after v= in the URL). Leave "" until the video exists. */
      youtube: z.string().default(''),
      duration: z.string().optional(), // e.g. "08:24"
      location: z.string().optional(), // e.g. "Kansai"
    }),
    z.object({
      ...common,
      type: z.literal('writing'),
      description: z.string(),
    }),
    z.object({
      ...common,
      type: z.literal('project'),
      description: z.string(),
      tech: z.string().optional(), // e.g. "React"
      status: z.string().optional(), // e.g. "in progress"
      link: z.string().url().optional(), // live demo or repo
    }),
    z.object({
      ...common,
      type: z.literal('reading'),
      author: z.string(),
      description: z.string().optional(),
      status: z.string().default('Now reading'),
    }),
    z.object({
      ...common,
      type: z.literal('hobby'),
      description: z.string(),
      meta: z.string().optional(), // e.g. "35mm"
    }),
  ]),
});

export const collections = { feed };
