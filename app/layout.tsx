import NavBar from '@/components/navigation/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/footer'
import { neueMontreal } from './fonts'

export const metadata: Metadata = {
  title: 'OH.STUDIO',
  description: 'A brand and product designer working with clients globally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={neueMontreal.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
