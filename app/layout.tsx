import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Nikshith Nooka | AI/ML Portfolio',
  description: 'Portfolio of Nikshith Nooka - AI/ML Undergraduate, Hackathon Champion, Google Campus Ambassador',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-950 dark:via-purple-950 dark:to-cyan-950 text-gray-800 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {/* Floating Orbs */}
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
