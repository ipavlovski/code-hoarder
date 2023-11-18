import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { css } from 'styled-system/css'

function Logo() {
  const styles = css({
    filter: 'invert(100%)',
  })

  return (
    <Link href='/'>
      <Image alt='logo' src='/signature-3.svg' width={150} height={90} className={styles} />
    </Link>
  )
}

export default function Navbar() {
  const styles = {
    container: css({
      position: 'sticky',
      top: '0',
      zIndex: 10,
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: {
        md: '1fr 640px 1fr',
        lg: '1fr 240px 640px 240px 1fr',
      },
    }),
    item: css({
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '.5rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(13.4px)',
      padding: '.5rem 2rem',
      marginY: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      gridColumn: '2 / span 1',
      lg: {
        gridColumn: '3 / span 1',
      },
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
