import { ReactNode } from '@mdx-js/react/lib'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { css } from 'styled-system/css'

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

  return <h1 className={styles}>{children}</h1>
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

  return <h2 className={styles}>{children}</h2>
}

function Header3({ children }: { children: ReactNode }) {
  const styles = css({
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '1.7rem',
    marginBottom: '.8rem',
    letterSpacing: 'wider',
  })

  return <h3 className={styles}>{children}</h3>
}

// note: cover vs. fill, and h-value (200px, 400px, etc.)
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
function Img(props: ImgProps) {
  const styles = css({
    pos: 'relative',
    display: 'block',
    h: '200px',
    w: 'full',
    my: '1rem'
  })

  return (
    <div className={styles}>
      <Image
        src={props.src!}
        alt={props.alt!}
        fill
        style={{ objectFit: 'cover', borderRadius: '8px' }} />
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Header1>{children}</Header1>,
    h2: ({ children }) => <Header2>{children}</Header2>,
    h3: ({ children }) => <Header3>{children}</Header3>,
    img: (props) => <Img {...props} />,
    ...components,
  }
}
