import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
            badge: z.string().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

const projects_info = defineCollection({
    loader: glob({ base: './src/content/projects_info', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(), 
            heroImage: z.optional(image()),
            badge: z.string().optional(),
        }),
});

export const collections = { 
    blog,          
    projects_info   
};