import type { Metadata } from 'next'
import { Head } from 'next/document'
import './globals.css'

export const metadata: Metadata = {
  title: 'COE HUB Technology',
  description: 'Web dev Agency',
  icons: ["./coelogo-nobg.png"],
  openGraph: {
    title: 'COE HUB Technology',
    description: 'Web dev Agency',
    images: {
      url: './coelogo.png',
      width: 1200,
      height: 630,
      alt: 'COE HUB Technology Logo',
    }
  }
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
