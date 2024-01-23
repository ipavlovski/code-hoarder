import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import remarkDirective from 'remark-directive'
import directivesPlugin from './src/lib/directives.mjs'


export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkDirective, directivesPlugin],
    rehypePlugins: [],
  },
})