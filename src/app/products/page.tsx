import NavBar from "../components/NavBar"
import Image from "next/image"
import Footer from "../components/Footer"

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <main className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">Produkte</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Tasche 1 */}
          <div className="bg-[#DBEEF7] p-6 rounded-xl shadow-md text-center">
            <Image
              src="/pics/yellow white bag.jpg"
              alt="Yellow-White Bag"
              width={300}
              height={300}
              className="mx-auto rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sunny Classic</h3>
            <p className="mb-2">Fröhliche kleine Tasche aus Baumwolle in Gelb-Weiß mit Innenfutter.</p>
            <p className="text-lg font-medium text-gray-700">39,00 €</p>
          </div>

          {/* Tasche 2 */}
          <div className="bg-[#DBEEF7] p-6 rounded-xl shadow-md text-center">
            <Image
              src="/pics/darkblue bag.jpg"
              alt="Darkblue Bag"
              width={300}
              height={300}
              className="mx-auto rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Blue Comfort</h3>
            <p className="mb-2">Zeitlose Häkeltasche in Dunkelblau, elegant und praktisch zugleich.</p>
            <p className="text-lg font-medium text-gray-700">42,00 €</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
