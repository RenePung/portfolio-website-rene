import './globals.css'
import { Inter } from 'next/font/google' // importing inter google font 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rene | Personal Portfolio',
  description: 'Rene is an aspiring full stack developer and programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {children}</body>
    </html>
  )
}
