'use client'

import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-system/css'

function useHighlighted(id: string) {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    })

    const elements = document.querySelectorAll('h1, h2, h3')
    elements.forEach((elem) => observer.current?.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return [activeId === id, setActiveId] as const
}

const headerValueToId = (value: string) => value.replace(/[\W_]+/g, '-').toLowerCase()

type Heading = {
  value: string
  depth: number
  children: Heading[]
}

const TOCLink = ({ node: { depth, value } }: { node: Heading }) => {
  const id = headerValueToId(value)
  const [highlighted, setHighlighted] = useHighlighted(id)

  return (
    <a
      href={`#${id}`}
      style={{ paddingLeft: `${(depth - 1) * 1}rem`, color: highlighted ? '#bc2b87' : undefined }}>
      {value}
    </a>
  )
}

function renderNodes(nodes: Heading[]) {
  const styles = css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '& a:hover': {
      color: '#bc2b87',
    },
  })

  return (
    <ul>
      {nodes.map((node) => (
        // <li key={node.data.hProperties.id}>
        <li key={node.value} className={styles}>
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
      top: '2rem',
      height: '100%',
      width: '100%',
      pointerEvents: 'none',
    }),
    grid: css({
      position: 'sticky',
      top: '1rem',
      right: '0',
      fontWeight: 'regular',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '640px 240px 1fr',
      zIndex: 10,
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
      pointerEvents: 'all',
    }),
    title: css({
      fontWeight: 'bold',
      marginBottom: '.5rem',
    }),
  }

  const toc = JSON.parse(headings) as Heading[]
  console.dir(toc, { depth: null })

  if (toc.length == 0) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3 className={styles.title}>On this page:</h3>
          {renderNodes(toc)}
        </div>
      </div>
    </div>
  )
}

export default TOC
