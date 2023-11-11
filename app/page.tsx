import Link from 'next/link'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'

export default function Home() {
  const styles = css({
    fontSize: '3xl',
    fontWeight: 'bold',
    padding: '.3em',
    rounded: 'xl',
    textTransform: 'uppercase',
    _hover: {
      background: 'emerald.800',
    },
  })

  // <div className={styles}>Hello panda 🐼!</div>
  return (
    <VStack height='100vh' background='slate.500' color='slate.100'>
      <Link href='/mdx-test-1'>This is a test page</Link>
      <Link href='/2023-11/231111-01'>Nov 11, 2023 - first post</Link>
      <Link href='/2023-11/231111-02'>Nov 11, 2023 - second post</Link>
    </VStack>
  )
}
