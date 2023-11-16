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
  const styles = css({

    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 240px 640px 240px 1fr',
    gridGap: '20px',
  })

  return (
    <div className={styles}>
      <Flex style={{ gridColumn: 3 }} align='center' justify='space-between'>
        <Logo />
        <CgProfile size='2rem' />
      </Flex>
    </div>
  )
}
