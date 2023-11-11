import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Flex } from 'styled-system/jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Hoarder',
  description: 'its code herder, not hoarder.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Flex align='center' justify='space-between' m='.25rem 1rem'>
          <Link href='/'>
            <h1>LOGO</h1>
          </Link>
          <h3>stuff</h3>
        </Flex>
        {children}
      </body>
    </html>
  )
}
