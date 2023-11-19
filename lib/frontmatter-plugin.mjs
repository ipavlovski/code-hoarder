/**
 * This is a plugin for remark in mdx.
 * This should be a function that may take some options and
 * should return a function with the following signature
 * @param tree - the MDXAST
 * @param file - the file node
 * @return void - it should mutate the tree if needed
 */
export default function frontmatterPlugin() {
  return (tree, file) => {
    if (tree.children[0].type === 'thematicBreak') {
      const firstHeadingIndex = tree.children.findIndex((t) => t.type === 'heading')
      if (firstHeadingIndex !== -1) {
        // we will mutate the tree.children by removing these nodes
        tree.children.splice(0, firstHeadingIndex + 1)
      }
    }
  }
}
