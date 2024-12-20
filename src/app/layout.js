'use client'

import { Inter } from "next/font/google"
import { SessionProvider, useSession } from "next-auth/react"
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
          {/* Add NavBar here */}
          {console.log("nav bar should be here")}
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
