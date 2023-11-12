import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: 'blue' }}>
      <Head>
        <title>LOL 123 </title>
      </Head>
      {children}
    </div>
  )
}
