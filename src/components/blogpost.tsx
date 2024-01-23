import { css } from 'styled-system/css'

const date = '2023-10-30'

export default function Blogpost({ href, title}: {href?: string, title: string}) {
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
      <a href={href} key={href}>{title}</a>
    </div>
  )
}