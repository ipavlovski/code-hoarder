import createMDX from '@next/mdx'
import fs from 'node:fs'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

/**
 * This is a plugin for remark in mdx.
 * This should be a function that may take some options and
 * should return a function with the following signature
 * @param tree - the MDXAST
 * @param file - the file node
 * @return void - it should mutate the tree if needed
 */
const frontmatterPlugin = () => (tree, file) => {
  if (tree.children[0].type === 'thematicBreak') {
    const firstHeadingIndex = tree.children.findIndex((t) => t.type === 'heading')
    if (firstHeadingIndex !== -1) {
      // we will mutate the tree.children by removing these nodes
      tree.children.splice(0, firstHeadingIndex + 1)
    }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // reactStrictMode: true
  // Optionally, add any other Next.js config below
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
  theme: 'one-dark-pro',
  // keepBackground: false,

  // https://stackoverflow.com/questions/76549262
  onVisitLine(node) {
    if (node.children.length === 0) {
      // if code block has a empty line, add a space instead of keeping it blank
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className
    // console.log('Highlighted Line', { node })
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push('line-highlighted')
    } else {
      node.properties.className = ['line-highlighted']
    }
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word-highlighted']
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, frontmatterPlugin],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
