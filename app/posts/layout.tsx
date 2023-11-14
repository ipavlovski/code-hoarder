import Comments from 'components/comments'
import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '3rem',
    '& main': {
      minHeight: '83vh'
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
