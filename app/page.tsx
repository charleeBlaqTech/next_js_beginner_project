import Image from 'next/image'
import Link from 'next/link';
import ProductsCard from './components/ProductsCard';

export default function Home() {
  return (
      <main>
          <h1 style={{textAlign:"center"}}>MY FIRST NEXT JS BEGINNER APP</h1>
          <div className="links" style={mainStyle}>
            <Link href="/users">Users</Link>
            <Link href="/users/new">new user</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/posts/new">new post</Link>
          </div>
          <ProductsCard/>
      </main>
  )
}


const mainStyle= {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem"
}