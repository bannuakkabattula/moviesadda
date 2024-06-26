import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <title>Movies Adda</title>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  )
}
