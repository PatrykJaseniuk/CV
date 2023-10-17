import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patryk Jaseniuk',
  description: 'CV Patryka Jaseniuka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
