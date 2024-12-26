'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <div className="p-8">Loading...</div>
  }

  if (!session) {
    router.push('/')
    return null
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={session.user.image}
          alt={session.user.name}
          className="w-24 h-24 rounded-full border-4 border-orange-500"
        />
        <div>
          <h1 className="text-3xl font-bold">{session.user.name}</h1>
          <p className="text-gray-600">{session.user.email}</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Shipped Projects</h2>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            onClick={() => router.push('/projects/new')}
          >
            Ship New Project
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600">No projects shipped yet!</p>
          <button
            className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            onClick={() => router.push('/projects/new')}
          >
            Ship Your First Project
          </button>
        </div>
      </div>
    </main>
  )
}