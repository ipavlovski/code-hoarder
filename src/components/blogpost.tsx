import { css } from 'styled-system/css'

export default function Blogpost(
  { href, title, createdAt }: { href?: string; title: string; createdAt: string },
) {
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
      <span>{createdAt}</span>
      <a href={href} key={href}>{title}</a>
    </div>
  )
}
