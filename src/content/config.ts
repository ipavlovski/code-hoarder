import { defineCollection, z } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    createdAt: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string().optional(),
    tags: z.string().array().optional(),
    updated: z.object({ date: z.string(), note: z.string() }).array().optional(),
  }),
})

export type PostDataProps = CollectionEntry<'posts'>['data']

export const collections = {
  posts: postCollection,
}
