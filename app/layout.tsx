import { Inter } from 'next/font/google'
import { Cormorant_Infant } from 'next/font/google'
import Link from 'next/link'
import { Flex } from 'styled-system/jsx'
import './globals.css'
import Image from 'next/image'
import { css } from 'styled-system/css'

const inter = Inter({ subsets: ['latin'] })
const cormorant = Cormorant_Infant({ subsets: ['latin'], weight: ['400', '700'] })

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const hackFont = localFont({
  src: [
    {
      path: '../assets/fonts/hack/Hack-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/hack/Hack-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/hack/Hack-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/hack/Hack-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata = {
  title: 'Code Hoarder',
  description: 'its code herder, not hoarder.',
}

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

function Navbar() {
  return (
    <Flex align='center' justify='space-between' m='0rem 3rem'>
      <Logo />
      <h3>stuff</h3>

    </Flex>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={hackFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
