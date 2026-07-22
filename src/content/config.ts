import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Compliance', 'AI Tools', 'Business', 'Skip Tracing', 'Software Reviews', 'From the Field']),
    author: z.string().default('Pete Campbell'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
