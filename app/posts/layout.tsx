import { css } from 'styled-system/css'
import Comments from 'components/comments'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '3rem',
  })

  return (
    <div className={styles}>
      {children}
      <Comments />
    </div>
  )
}
