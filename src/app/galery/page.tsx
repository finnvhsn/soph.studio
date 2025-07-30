import NavBar from "../components/NavBar"
import Image from "next/image"
import Footer from "../components/Footer"

export default function Galery() {
  const images = [
    "/pics/green red bag half.jpg",
    "/pics/brown_white_bag.jpg",
    "/pics/green-blue-bag-half.jpg",
    "/pics/white red bag.jpg",
    "/pics/yellow white bag.jpg",
    "/pics/darkblue bag.jpg",
    "/pics/bear bag.jpg",
    "/pics/red green B.jpg"
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Galerie</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-xl shadow-md overflow-hidden">
              <Image
                src={src}
                alt={`Galeriebild ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
