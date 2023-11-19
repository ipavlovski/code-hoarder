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

export default rehypePrettyCodeOptions
