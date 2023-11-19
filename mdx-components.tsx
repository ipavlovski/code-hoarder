import type { MDXComponents } from 'mdx/types'

import DirectiveParser from 'components/mdx/directives'
import { Header1, Header2, Header3 } from 'components/mdx/headlines'
import Img from 'components/mdx/image'
import TOC from 'components/mdx/toc'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Header1>{children}</Header1>,
    h2: ({ children }) => <Header2>{children}</Header2>,
    h3: ({ children }) => <Header3>{children}</Header3>,
    toc: ({ headings }) => <TOC headings={headings} />,
    directive: (props) => <DirectiveParser {...props} />,
    img: (props) => <Img {...props} />,
    ...components,
  }
}
