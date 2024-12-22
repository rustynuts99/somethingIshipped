'use client'

import { useSession, signIn } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  console.log("Session status:", status)
  console.log("Session data:", session)

  const handleSignIn = () => {
    signIn('github', {
      callbackUrl: 'http://localhost:3000'
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-orange-500 text-white text-center py-5">
        <p>🚀 We're in beta! More features coming soon!</p>
      </div>
      <button
        onClick={handleSignIn}
        className="px-4 py-2 font-bold text-white bg-black rounded hover:bg-gray-800"
      >
        Sign in with GitHub
      </button>
      
      {/* Debug info */}
      <div className="mt-4 text-sm text-gray-600">
        Status: {status}
        {session && <div>User: {session.user?.name}</div>}
      </div>
    </main>
  )
}