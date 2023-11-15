import withMDX from './mdx.config.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // reactStrictMode: true
  // Optionally, add any other Next.js config below
}


// Merge MDX config with Next.js config
export default withMDX(nextConfig)
