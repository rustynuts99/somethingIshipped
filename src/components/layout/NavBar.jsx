'use client'

// import { profile } from "console"
import Link from 'next/link'

import { signIn, signOut, useSession } from "next-auth/react"

const NavBar = () => {
  const { data: session } = useSession()

  return (

    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
    {/* Logo */}
    <Link href="/">
      <div className="text-lg font-bold cursor-pointer">Something I Shipped</div>
    </Link>

    <div className="flex space-x-4">
      <Link href="/">
        <span className="hover:text-orange-500 cursor-pointer">Home</span>
      </Link>
      <Link href="/about">
        <span className="hover:text-orange-500 cursor-pointer">About</span>
      </Link>
      {session && (
        <Link href="/profile">
          <span className="hover:text-orange-500 cursor-pointer">Profile</span>
        </Link>
      )}
    </div>




      {/* Conditional Rendering Based on Session */}
      <div>
        {session ? (
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <img
              src={session.user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            {/* Logout Button */}
            <button
              className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
            onClick={() => signIn("github")}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}

export default NavBar

// export default function NavBar() {
//     return (
//       <nav className="bg-gray-800 text-white p-4">
//         <p>NavBar Component Rendered!</p>
//       </nav>
//     );
//   }
  

