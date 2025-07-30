import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
  return (
<nav className="p-4 shadow-md bg-[#DBEEF7] text-gray-900 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/soph.studio.logo.png"
          alt="Logo"
          width={300}
          height={30}
          className="cursor-pointer"
        />
      </Link>

      <div className="space-x-4">
        <Link href="/products" className="hover:underline">Produkte</Link>
        <Link href="/galery" className="hover:underline">Galerie</Link>
        <Link href="/about" className="hover:underline">Über mich</Link>
      </div>
    </nav>
  )
}
