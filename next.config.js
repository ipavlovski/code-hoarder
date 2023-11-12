const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
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

  reactStrictMode: true,
  swcMinify: true,

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
