import Navbar from 'components/navbar'
import { Cormorant_Infant, Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { css } from 'styled-system/css'

const montserrat = Montserrat({ subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'] })
const cormorant = Cormorant_Infant({ subsets: ['latin'], weight: ['400', '700'] })

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
