'use client'

import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react"  // Import directly
import NavBar from "@/components/layout/NavBar"
import "./globals.css"

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}