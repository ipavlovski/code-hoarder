import { type PostDataProps } from 'src/content/config'
import getTagIcon from 'src/lib/tag-icon'
import { css } from 'styled-system/css'

function DateCreated({ createdAt }: { createdAt: string }) {
  const styles = css({
    fontStyle: 'normal',
    color: 'gray.400',
    fontFamily: 'monospace',
    fontSize: '.8rem',
  })

  return <span className={styles}>{createdAt}</span>
}

function Category({ category }: { category: string }) {
  const styles = css({
    fontStyle: 'normal',
    color: 'slate.300',
    fontFamily: 'monospace',
    width: '9ch',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '.8rem',
    '&:hover': {
      cursor: 'pointer',
      color: 'pink.300',
      transition: 'color 300ms ease',
    },
  })
  return <div className={styles}>{category}</div>
}

function Title({ href, title }: { href: string; title: string }) {
  const styles = css({
    fontSize: '.9rem',
    textTransform: 'capitalize',
    color: 'gray.300',
    '&:hover': {
      color: 'pink.300',
    },
  })

  return <a href={href} key={href} className={styles}>{title}</a>
}

function Tags({ tags }: { tags: string[] | undefined }) {
  if (!tags) return

  const styles = css({
    display: 'flex',
    gap: '.25rem',
    '& svg:hover': {
      cursor: 'pointer',
      color: 'pink.300',
      transition: 'color 300ms ease',
    },
  })

  return (
    <div className={styles}>
      {tags.map((tag) => {
        const tagIcon = getTagIcon(tag)
        return <tagIcon.icon title={`tag:${tag}`} />
      })}
    </div>
  )
}

export default function Blogpost(props: { href: string; postData: PostDataProps }) {
  const { href, postData: { title, createdAt, category, tags } } = props

  const styles = css({
    display: 'flex',
    alignItems: 'end',
    gap: '.75rem',
    padding: '.1em',
    '& > *:last-child': {
      marginLeft: 'auto',
    },
  })

  return (
    <div className={styles}>
      <DateCreated createdAt={createdAt} />
      <Category category={category} />
      <Title href={href} title={title} />
      <Tags tags={tags} />
    </div>
  )
}
