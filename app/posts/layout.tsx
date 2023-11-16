import Comments from 'components/comments'
import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '3rem',
    fontWeight: 'regular',
    '& main': {
      minHeight: '83vh',
      maxWidth: '80ch',
    }
  })

  return (
    <div className={styles}>
      <main>
        {children}
      </main>
      <Comments />
    </div>
  )
}
