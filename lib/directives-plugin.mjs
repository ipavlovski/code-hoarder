import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'

export default function directivesPlugin() {
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
