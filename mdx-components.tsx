import { ReactNode } from '@mdx-js/react/lib'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { css } from 'styled-system/css'

function Header2({ children }: { children: ReactNode }) {
  const styles = css({
    fontSize: '16px',
    marginY: '1rem',
  })

  return <h2 className={styles}>{children}</h2>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '20px' }}>{children}</h1>,
    h2: ({ children }) => <Header2 children={children} />,
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
