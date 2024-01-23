// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
import type { CollectionEntry } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    createdAt: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string().optional(),
    tags: z.string().array().optional(),
    updated: z.object({date: z.string(), note: z.string()}).array().optional(),
  }),
})

export type PostDataProps = CollectionEntry<'posts'>['data']

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postCollection,
}
