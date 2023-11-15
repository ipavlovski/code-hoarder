import { ReactNode } from '@mdx-js/react/lib'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
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
    // fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '1.7rem',
    marginBottom: '.8rem',
    letterSpacing: 'wider'
  })

  return <h3 className={styles}>{children}</h3>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Header1 children={children} />,
    h2: ({ children }) => <Header2 children={children} />,
    h3: ({ children }) => <Header3 children={children} />,
    img: (props) => (
      // @ts-ignore
      <Image
        sizes='100vw'
        {
          // style={{ width: '100%', height: 'auto' }}
          ...{ ...props, width: 500, height: 500 }
        } />
    ),
    ...components,
  }
}
