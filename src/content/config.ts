import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    dropDate: z.coerce.date().optional(),
    issueNumber: z.number().int().positive().optional(),
    author: z.string().default('Daniel Brosed Giral · VaultBit Advisory'),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    ogImage: z.string().optional(),
    canal: z.string().optional(),
    canonicalExternal: z.string().url().optional(),
    draft: z.boolean().default(false),
    readingTimeMin: z.number().optional(),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  newsletter,
};
