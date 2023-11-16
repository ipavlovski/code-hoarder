'use client'

import { useEffect, useRef, useState } from 'react'

function useHighlighted(id) {
  const observer = useRef()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    })

    const elements = document.querySelectorAll('h2, h3, h4')
    elements.forEach((elem) => observer.current.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return [activeId === id, setActiveId]
}

type Heading = {
  value: string
  depth: number
  children: Heading[]
}

const TOCLink = ({ node }: { node: Heading }) => {
  const fontSizes = { 2: 'base', 3: 'sm', 4: 'xs' }
  const id = node.value
  // const [highlighted, setHighlighted] = useHighlighted(id)
  return (
    // <a
    //   href={`#${id}`}
    //   className={`block text-${fontSizes[node.depth]} hover:accent-color py-1 ${
    //     highlighted && 'accent-color'
    //   }`}
    //   onClick={(e) => {
    //     e.preventDefault()
    //     setHighlighted(id)
    //     document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
    //   }}>
    //   {node.value}
    // </a>
    <a>
      {node.value}
    </a>
  )
}

function renderNodes(nodes: Heading[]) {
  return (
    <ul>
      {nodes.map((node) => (
        // <li key={node.data.hProperties.id}>
        <li key={node.value}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  )
}

function TOC({ headings }: { headings: string }) {
  const toc = JSON.parse(headings) as Heading[]
  console.dir(toc, { depth: null })

  if (toc.length == 0) return null

  return (
    <div>
      <h3>Table of contents</h3>
      {renderNodes(toc)}
    </div>
  )
}

export default TOC
