import Comments from 'components/comments'
import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    fontWeight: 'regular',
    display: 'grid',
    gridColumnGap: '20px',
    gridRowGap: '4px',
    position: 'relative',
    // minHeight: '100vh',
    gridTemplateColumns: {
      md: '1fr 640px 1fr',
      lg: '1fr 240px 640px 240px 1fr',
    },
    '& > :not(section):not(.callout)': {
      gridColumn: '2 / span 1',
      lg: {
        gridColumn: '3 / span 1',
      },
    },
  })

  return (
    <div className={styles}>
      {children}
      <Comments />
    </div>
  )
}
