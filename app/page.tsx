import fs from 'fs'
// import matter from 'gray-matter'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'

export default async function Home() {
  const paths = fs.readdirSync('./app/posts').map((date) =>
    fs.readdirSync(`./app/posts/${date}`).map((post) => `/posts/${date}/${post}`)
  ).flat()

  // const posts = paths.map((path) => {
  //   const source = fs.readFileSync(`./app${path}/page.mdx`)
  //   const { data, content } = matter(source)
  //   return {
  //     path,
  //     title: data.title as string,
  //   }
  // })

  const posts2: any = []
  for (const path of paths) {
    // @ts-ignore
    const { metadata } = await import(`.${path}/page.mdx`)
    posts2.push({ path, title: metadata.title })
  }

  const styles = css({
    fontSize: '3xl',
    fontWeight: 'bold',
    padding: '.3em',
    rounded: 'xl',
    textTransform: 'uppercase',
    _hover: {
      background: 'emerald.800',
    },
  })

  return (
    <VStack height='100vh' background='slate.500' color='slate.100'>
      {/* @ts-ignore */}
      {posts2.map(({ path, title }) => <Link href={path} key={path}>{title}</Link>)}
    </VStack>
  )
}
