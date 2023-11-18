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

const findPostsInDir = async () => {
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
  return posts
}

export default async function Home() {
  const posts = await findPostsInDir()

  const styles = {
    container: css({
      display: 'grid',
      gridGap: '20px',
      minHeight: '100vh',
      gridTemplateColumns: {
        md: '1fr 640px 1fr',
        lg: '1fr 240px 640px 240px 1fr',
      },
    }),
    item: css({
      gridColumn: '2 / span 1',
      lg: {
        gridColumn: '3 / span 1',
      },
    }),
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {posts.map((post) => <PostListing key={post.href} post={post} />)}
      </div>
    </div>
  )
}
