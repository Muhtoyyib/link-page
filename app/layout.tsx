import React from "react"
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chevan',
  description:
    'Chevan Hospitality (Bar & Restaurant) delivers unforgettable food and drink experiences in Lagos.',
  icons: {
    icon: '/Chevan-removebg.png',
    apple: '/Chevan-removebg.png',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
