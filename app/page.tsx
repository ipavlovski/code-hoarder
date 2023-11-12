import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'

export default async function Home() {
  const paths = fs.readdirSync('./app/posts').map((date) =>
    fs.readdirSync(`./app/posts/${date}`).map((post) => `/posts/${date}/${post}`)
  ).flat()
  const posts = paths.map((path) => {
    const source = fs.readFileSync(`./app${path}/page.mdx`)
    const { data, content } = matter(source)
    return {
      path,
      title: data.title as string,
    }
  })

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

  // <div className={styles}>Hello panda 🐼!</div>
  return (
    <VStack height='100vh' background='slate.500' color='slate.100'>
      {posts.map(({ path, title }) => <Link href={path} key={path}>{title}</Link>)}
      {
        /* <Link href='/mdx-test-1'>This is a test page</Link>
      <Link href='/posts/2023-11/231111-01'>Nov 11, 2023 - first post</Link>
      <Link href='/posts/2023-11/231111-02'>Nov 11, 2023 - second post</Link>
      <Link href='/posts/2023-11/231111-02'>{files[0]}</Link> */
      }
    </VStack>
  )
}
