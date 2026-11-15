import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Research: one Markdown file per project or publication.
// For a project the body is its description; for a publication, its abstract.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Used for ordering (newest first). Publications show the year only.
    date: z.coerce.date(),
    kind: z.enum(['project', 'publication']),
    // Projects: text shown in the date column, e.g. "2023 to 2024".
    // Use '' to show nothing. If left out, the date is shown.
    period: z.string().optional(),
    // Projects: where the work is or was done.
    place: z.string().optional(),
    // Publications: file names (without .md) of the projects this paper
    // belongs to. It is then listed under those projects as a related paper.
    projects: z.array(z.string()).default([]),
    // Publications: e.g. "Submitted" or "Invited for revision".
    status: z.string().optional(),
    // Publications: position within the same year, lowest first.
    order: z.number().default(100),
    authors: z.string().optional(),
    venue: z.string().optional(),
    // A file in public/ (e.g. /papers/my-paper.pdf) or a full URL.
    pdf: z.string().optional(),
    link: z.string().url().optional(),
    // Projects: optional photo, kept next to the .md file, e.g. ./photo.jpg
    image: image().optional(),
  }),
});

// News: one Markdown file per conference, public engagement event or note.
// Each becomes a card on the News page; the body is the text on the card.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Used for ordering (newest first) and shown as "Apr 2026".
      date: z.coerce.date(),
      // Shown instead of the date when set, e.g. "2024".
      when: z.string().optional(),
      // What you did there, e.g. "Oral presentation" or "Public engagement".
      kind: z.string(),
      // Which filter button the card belongs to.
      category: z.enum(['research', 'conference', 'public', 'award', 'note']),
      place: z.string().optional(),
      // Optional photo: put the file next to the .md file, e.g. ./photo.jpg
      image: image().optional(),
      link: z.string().url().optional(),
      // A LinkedIn post to show on the card. Use the part after "urn:li:" in
      // LinkedIn's "Embed this post" code, e.g. 'share:7491242351655469056'.
      linkedin: z.string().optional(),
      // The height LinkedIn's embed code gives for that post, in pixels.
      linkedinHeight: z.number().default(800),
    }),
});

// Books: one small YAML file per book, cover image alongside in covers/.
const books = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      rating: z.number().min(0).max(5).multipleOf(0.5).optional(),
      // true while you are still reading it: shown under "Currently reading".
      reading: z.boolean().default(false),
      // A photo of the book or its cover. Without one, a plain title card is shown.
      cover: image().optional(),
      read: z.coerce.date().optional(),
      link: z.string().url().optional(),
    }),
});

export const collections = { research, news, books };
