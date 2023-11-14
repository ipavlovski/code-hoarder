import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '2rem',
  })

  return (
    <div className={styles}>
      {children}
    </div>
  )
}
