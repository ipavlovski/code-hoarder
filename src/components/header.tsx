import logo from 'public/signature.svg'
import { CgProfile } from 'react-icons/cg'
import { css } from 'styled-system/css'

function Logo() {
  const styles = css({
    filter: 'invert(100%)',
  })

  return (
    <a href='/'>
      <img alt='logo' src={logo.src} width={150} height={90} className={styles} />
    </a>
  )
}

export default function Header() {
  const styles = {
    container: css({
      position: 'sticky',
      top: '0',
      zIndex: 100,
      pointerEvents: 'none',
    }),
    item: css({
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '.5rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(13.4px)',
      padding: '.5rem 1rem',
      marginY: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      pointerEvents: 'all',
      marginX: '2rem',
    }),
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Logo />
        <CgProfile size='2rem' />
      </div>
    </div>
  )
}
