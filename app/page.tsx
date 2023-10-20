import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <main>
          <h1>MY FIRST NEXT JS BEGINNER APP</h1>
          <Link href="/users">go Users page</Link>
      </main>
  )
}
