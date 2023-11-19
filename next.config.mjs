import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'

import rehypePrettyCodeOptions from './lib/code-options.mjs'
import directivesPlugin from './lib/directives-plugin.mjs'
import tocPlugin from './lib/toc-plugin.mjs'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, tocPlugin, remarkDirective, directivesPlugin],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // reactStrictMode: true
  // Optionally, add any other Next.js config below
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
