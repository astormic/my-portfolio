import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Research: one Markdown file per project or publication.
// The body of the file is the abstract.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['project', 'publication']),
    authors: z.string().optional(),
    venue: z.string().optional(),
    // A file in public/ (e.g. /papers/my-paper.pdf) or a full URL.
    pdf: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

// Outreach: talks, workshops, articles, school visits.
const outreach = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/outreach' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.string(),
    place: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

// Books: one small YAML file per book, cover image alongside in covers/.
const books = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      rating: z.number().min(0).max(5).multipleOf(0.5),
      cover: image(),
      read: z.coerce.date().optional(),
      link: z.string().url().optional(),
    }),
});

export const collections = { research, outreach, books };
