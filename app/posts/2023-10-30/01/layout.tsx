import { css } from 'styled-system/css'
// import { metadata } from './page.mdx'

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
