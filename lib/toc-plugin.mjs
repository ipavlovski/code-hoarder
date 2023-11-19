import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

// heavily based on the following logic:
// https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents

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

export default function tocPlugin() {
  return (tree) => {
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
}
