import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Bookorbit',
  description: 'Buy all books at one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav><Link href="/"><h1>Bookorbit</h1></Link></nav>
        {children}</body>
    </html>
  )
}
