// import { ReactNode } from '@mdx-js/react/lib'
import type { CSSProperties, ReactNode } from 'react'

const headerValueToId = (value: string) => value.replace(/[\W_]+/g, '-').toLowerCase()

import styles from './mdx.module.css'

function Header1({ children }: { children: ReactNode }) {

  const id = headerValueToId(children!.toString())
  return (
    <h1 id={id} className={styles.header1} >
      <a href={`#${id}`} >{children}</a>
    </h1>
  )
}

function Header2({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
    letterSpacing: 'wide',
    marginTop: '1.9rem',
    marginBottom: '.9rem',
  }

  const id = headerValueToId(children!.toString())
  return (
    <h2 id={id} style={style}>
      <a href={`#${id}`}>{children}</a>
    </h2>
  )
}

function Header3({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '1.7rem',
    marginBottom: '.8rem',
    letterSpacing: 'wider',
  }

  const id = headerValueToId(children!.toString())
  return (
    <h3 id={id} style={style}>
      <a href={`#${id}`}>{children}</a>
    </h3>
  )
}

export { Header1, Header2, Header3 }
