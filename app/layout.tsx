import type { Metadata } from 'next'
import { Head } from 'next/document'
import './globals.css'

export const metadata: Metadata = {
  title: 'CEO Technology',
  description: 'Web dev Agency',
  generator: '',
  icons: ["/public/coeTechnology-logoo.png"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  )
}
