import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-16 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
      <div className="space-x-4">
        <Link href="/contact" className="hover:underline">Kontakt</Link>
        <Link href="/impressum" className="hover:underline">Impressum</Link>
      </div>
      <p className="mt-2">© {new Date().getFullYear()} soph.studio</p>
    </footer>
  )
}
