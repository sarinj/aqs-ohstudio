import NavBar from '@/components/navigation/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/footer'
import { regularFont } from './fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={regularFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
