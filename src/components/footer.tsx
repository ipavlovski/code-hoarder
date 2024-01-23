import { css } from 'styled-system/css'

export default function Footer() {
  const styles = css({
    borderTop: 'solid 2px white',
    padding: '.5rem',
  })

  return <div className={styles}>Made with coffee in NS.</div>
}
