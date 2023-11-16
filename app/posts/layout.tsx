import Comments from 'components/comments'
import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '3rem',
    fontWeight: 'regular',
    display: 'grid',
    gridTemplateColumns: '1fr 240px 640px 240px 1fr',
    gridGap: '20px',
    position: 'relative',
    '& main': {
      minHeight: '83vh',
      maxWidth: '80ch',
    },
  })

  return (
    <div className={styles}>
      <div style={{ gridColumn: 3 }}>
        <main>
          {children}
        </main>
        <Comments />
      </div>
    </div>
  )
}
