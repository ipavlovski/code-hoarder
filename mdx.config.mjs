import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'

import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

function parseNode(node, output, indexMap) {
  const parsedNode = {
    value: toString(node),
    depth: node.depth,
    children: [],
  }

  if (node.depth === 1) {
    output.push(parsedNode)
    indexMap[node.depth] = parsedNode
  } else {
    const parent = indexMap[node.depth - 1]
    if (parent) {
      parent.children.push(parsedNode)
      indexMap[node.depth] = parsedNode
    }
  }
}

// heavily based on the following logic:
// https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents
const tocPlugin = () => (tree) => {
  const headings = []
  const indexMap = {}
  visit(tree, 'heading', (node) => parseNode(node, headings, indexMap))

  const toc = {
    data: {
      type: 'list',
      hName: 'toc',
      hProperties: { headings: JSON.stringify(headings) },
    },
  }

  tree.children.push(toc)
}

function directivesHandler() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    visit(tree, (node) => {
      if (['textDirective', 'leafDirective', 'containerDirective'].includes(node.type)) {
        const data = node.data || (node.data = {})
        data.hName = 'directive'
        data.hProperties = {
          contents: toString(node.children),
          name: node.name,
          type: node.type,
          id: node.attributes?.id,
        }
      }
    })
  }
}

/**
 * This is a plugin for remark in mdx.
 * This should be a function that may take some options and
 * should return a function with the following signature
 * @param tree - the MDXAST
 * @param file - the file node
 * @return void - it should mutate the tree if needed
 */
const frontmatterPlugin = () => (tree, file) => {
  if (tree.children[0].type === 'thematicBreak') {
    const firstHeadingIndex = tree.children.findIndex((t) => t.type === 'heading')
    if (firstHeadingIndex !== -1) {
      // we will mutate the tree.children by removing these nodes
      tree.children.splice(0, firstHeadingIndex + 1)
    }
  }
}

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  // See Options section below.
  theme: 'one-dark-pro',
  // grid: false,
  // keepBackground: false,

  // https://stackoverflow.com/questions/76549262
  onVisitLine(node) {
    if (node.children.length === 0) {
      // if code block has a empty line, add a space instead of keeping it blank
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className
    // console.log('Highlighted Line', { node })
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push('line-highlighted')
    } else {
      node.properties.className = ['line-highlighted']
    }
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word-highlighted']
  },
}

const mdxOptions = {
  // remarkPlugins: [remarkGfm, frontmatterPlugin],
  remarkPlugins: [remarkGfm, tocPlugin, remarkDirective, directivesHandler],
  rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
})

export default withMDX
