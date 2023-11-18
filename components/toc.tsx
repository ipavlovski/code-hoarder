'use client'

import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-system/css'

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
    <a href={`#${id}`}>
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
  const styles = {
    wrapper: css({
      position: 'absolute',
      top: '5rem',
      height: '100%',
      width: '100%',
    }),
    grid: css({
      position: 'sticky',
      top: '1rem',
      right: '0',
      fontWeight: 'regular',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '640px 240px 1fr',
      zIndex: 100,
      gridGap: '20px',
      hideBelow: 'lg',
    }),
    item: css({
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '.5rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(13.4px)',
      padding: '1rem',
      gridColumn: '2 / span 1',
    }),
  }

  const toc = JSON.parse(headings) as Heading[]
  console.dir(toc, { depth: null })

  if (toc.length == 0) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>Table of contents</h3>
          {renderNodes(toc)}
        </div>
      </div>
    </div>
  )
}

export default TOC
