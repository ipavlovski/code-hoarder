import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '20px' }}>{children}</h1>,
    img: (props) => (
      // @ts-ignore
      <Image
        sizes='100vw'
        // style={{ width: '100%', height: 'auto' }}
        {...{ ...props, width: 500, height: 500 }} />
    ),
    ...components,
  }
}
