import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Flex } from 'styled-system/jsx'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Hoarder',
  description: 'its code herder, not hoarder.',
}

function Navbar() {
  return (
    <Flex align='center' justify='space-between' m='2rem 3rem'>
      <Link href='/'>
        <h1>LOGO</h1>
      </Link>
      <h3>stuff</h3>
    </Flex>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
