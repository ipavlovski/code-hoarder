import { ReactNode } from '@mdx-js/react/lib'
import { css } from 'styled-system/css'

const headerValueToId = (value: string) => value.replace(/[\W_]+/g, '-').toLowerCase()

function Header1({ children }: { children: ReactNode }) {
  const styles = css({
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '2.1rem',
    marginBottom: '1rem',
    position: 'relative',
    color: 'hsl(0, 0%, 80%)',
    _before: {
      position: 'absolute',
      top: '-1px',
      left: '-1.4rem',
      color: '#bc2b87',
      content: '"#"',
      fontWeight: 'bold',
      fontSize: '1.4rem',
    },
  })

  const id = headerValueToId(children!.toString())
  return (
    <h1 id={id} className={styles}>
      <a href={`#${id}`}>{children}</a>
    </h1>
  )
}

function Header2({ children }: { children: ReactNode }) {
  const styles = css({
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
    letterSpacing: 'wide',
    marginTop: '1.9rem',
    marginBottom: '.9rem',
  })

  const id = headerValueToId(children!.toString())
  return (
    <h2 id={id} className={styles}>
      <a href={`#${id}`}>{children}</a>
    </h2>
  )
}

function Header3({ children }: { children: ReactNode }) {
  const styles = css({
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '1.7rem',
    marginBottom: '.8rem',
    letterSpacing: 'wider',
  })

  const id = headerValueToId(children!.toString())
  return (
    <h3 id={id} className={styles}>
      <a href={`#${id}`}>{children}</a>
    </h3>
  )
}

export { Header1, Header2, Header3 }
