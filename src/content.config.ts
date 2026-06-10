import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    lab: z.string(),
    dates: z.string(),
    status: z.string(),
    abstract: z.string(),
    methods: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    order: z.number(),
    featured: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    diagramCaption: z.string().optional(),
  }),
});

export const collections = { research };
