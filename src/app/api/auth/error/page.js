import { useSearchParams } from 'next/navigation';

export default function AuthError() {
  const searchParams = useSearchParams()
  const errorType = searchParams.get('error')

  return (
    <main style={{ margin: "2rem" }}>
      <h1>Something went off track!</h1>
      {errorType && <p>Error code: {errorType}</p>}
      <p>Please try again or let us know if it persists.</p>
    </main>
  )
}
