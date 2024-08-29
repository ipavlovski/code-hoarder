import { defineCollection, z } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

import type { ImageMetadata } from 'astro';
export const images = import.meta.glob<{ default: ImageMetadata }>('/src/content/posts/**/*.{jpeg,jpg,png,gif}');

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    tags: z.string().array().optional(),
    updated: z.object({ date: z.string(), note: z.string() }).array().optional(),
  }),
})

console.log(images)

export type PostDataProps = CollectionEntry<'posts'>['data']

export const collections = {
  posts: postCollection,
}

