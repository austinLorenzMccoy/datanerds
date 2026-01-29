import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DataNerds - Master Data Science Without Breaking the Bank',
  description: 'Free data science learning platform with AI tutoring, job board, Web3 track, and active community. Join 1,200+ aspiring data scientists today.',
  generator: 'DataNerds',
  keywords: ['data science', 'machine learning', 'python', 'sql', 'free courses', 'AI tutor', 'data analytics'],
  authors: [{ name: 'DataNerds Team' }],
  openGraph: {
    title: 'DataNerds - Master Data Science Without Breaking the Bank',
    description: 'Free data science learning platform with AI tutoring, job board, and active community.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataNerds - Master Data Science Without Breaking the Bank',
    description: 'Free data science learning platform with AI tutoring, job board, and active community.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E27',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
