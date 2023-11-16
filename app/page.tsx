import fs from 'fs'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'

type PostMetadata = { href: string; title: string; date: string }

function PostListing({ post: { href, title, date } }: { post: PostMetadata }) {
  const styles = css({
    fontSize: '.9rem',
    padding: '.1em',
    textTransform: 'capitalize',
    display: 'flex',
    color: 'gray.300',
    gap: '1.5rem',
    '& span': {
      fontStyle: 'normal',
      color: 'gray.400',
      fontFamily: 'monospace',
    },
    '&:hover a': {
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
    display: 'grid',
    gridTemplateColumns: '1fr 240px 640px 240px 1fr',
    gridGap: '20px',
  })

  const posts: PostMetadata[] = []
  const dirs = fs.readdirSync('./app/posts', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .reverse()
  for (const date of dirs) {
    for (const num of fs.readdirSync(`./app/posts/${date}`)) {
      const { metadata } = await import(`./posts/${date}/${num}/page.mdx`)
      posts.push({
        href: `/posts/${date}/${num}`,
        title: metadata.title,
        date: date,
      })
    }
  }

  return (
    <div className={styles}>
      <div style={{ gridColumn: 3 }}>
        {posts.map((post) => <PostListing key={post.href} post={post} />)}
      </div>
    </div>
  )
}
