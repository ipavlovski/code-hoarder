import { css } from 'styled-system/css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = css({
    marginX: '3rem',
  })

  return (
    <div className={styles}>
      {children}
    </div>
  )
}
