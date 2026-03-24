import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'RECCON - Recolección y Contabilidad',
  description:
    'Controla tu cosecha de café con precisión y sin complicaciones. Registro digital, cálculo automático de pagos y reportes Excel.',
  generator: 'v0.app',
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: '#2D8B4E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
