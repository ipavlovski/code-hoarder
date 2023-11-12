// const frontmatterPlugin = require('./lib/frontmatter')

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

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin],
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Disabling on production builds because we're running checks on PRs via GitHub Actions.
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverActions: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // reactStrictMode: true,
  // swcMinify: true,

  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
module.exports = withMDX(nextConfig)
