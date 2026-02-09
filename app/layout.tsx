import React from "react"
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bella Tavola - Authentic Italian Dining',
  description: 'Welcome to Bella Tavola. Explore our menu, make reservations, and connect with us on social media.',
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
