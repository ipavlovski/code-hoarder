import Link from 'next/link'
import { Flex } from 'styled-system/jsx'
import Image from 'next/image'
import { css } from 'styled-system/css'
import { CgProfile } from 'react-icons/cg'
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
  return (
    <Flex align='center' justify='space-between' m='0rem 3rem'>
      <Logo />
      <CgProfile size='2rem'/>
    </Flex>
  )
}

