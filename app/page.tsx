import fs from 'fs'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'

type PostMetadata = { href: string; title: string; date: string }

function PostListing({ post: { href, title, date } }: { post: PostMetadata }) {
  const styles = css({
    fontSize: '.9rem',
    padding: '.1em',
    textTransform: 'uppercase',
    display: 'flex',
    color: 'gray.300',
    gap: '1rem',
    _hover: {
      color: 'gray.100',
    },
  })

  return (
    <div className={styles}>
      <span>{date}</span>
      <Link href={href} key={href}>{title}</Link>
    </div>
  )
}

export default async function Home() {
  const styles = css({
    minHeight: '100vh',
    marginX: '3rem',
  })

  const posts: PostMetadata[] = []
  for (const date of fs.readdirSync('./app/posts')) {
    for (const num of fs.readdirSync(`./app/posts/${date}`)) {
      const { metadata } = await import(`./posts/${date}/${num}/page.mdx`)
      posts.push({
        href: `/posts/${date}/${num}`,
        title: metadata.title,
        date: date
      })
    }
  }

  return (
    <div className={styles}>
      {posts.map((post) => <PostListing key={post.href} post={post} />)}
    </div>
  )
}
