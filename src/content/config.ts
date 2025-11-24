import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    published: z.boolean(),
    tags: z.array(z.string()).optional()
  })
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean(),
  })
});

export const collections = {
  projects,
  posts,
};

