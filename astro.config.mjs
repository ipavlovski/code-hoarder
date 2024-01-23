import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkDirective from 'remark-directive'
import rehypePrettyCodeOptions from './src/lib/code-options.mjs'
import directivesPlugin from './src/lib/directives.mjs'

export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkDirective, directivesPlugin],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})
