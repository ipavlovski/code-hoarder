import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

function Logo() {
  const styles = css({
    filter: 'invert(100%)',
  })

  return (
    <Link href='/'>
      <Image alt='logo' src='/signature-2.svg' width={200} height={90} className={styles} />
    </Link>
  )
}

export default function Navbar() {

  const styles = {
    container: css({
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: {
        md: '1fr 640px 1fr',
        lg: '1fr 240px 640px 240px 1fr',
      },
    }),
    item: css({
      gridColumn: '2 / span 1',
      lg: {
        gridColumn: '3 / span 1',
      },
    }),
  }

  return (
    <div className={styles.container}>
      <Flex className={styles.item} align='center' justify='space-between'>
        <Logo />
        <CgProfile size='2rem' />
      </Flex>
    </div>
  )
}
