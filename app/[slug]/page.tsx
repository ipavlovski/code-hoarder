import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const files = fs.readdirSync('posts')
  return files.map((file) => {
    return {
      slug: file,
    }
  })
}

export default async function Page({ params }: { params: { slug: string } }) {
  // await
  return <MDXRemote
    source={`# Hello World

  This is from **Server** Components ${params.slug}!
  `}/>
}
