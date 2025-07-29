import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <main className="p-8 max-w-3xl mx-auto text-center">
        <Image
          src="/soph.studio.logo.png"
          alt="Logo"
          width={400}
          height={80}
          className="mx-auto mb-6"
        />

        <p className="mb-8 text-justify">
  Bei soph.studio entstehen mit viel Liebe zum Detail handgemachte Taschen und Unikate, die den Alltag verschönern. 
  Jedes Produkt ist ein kleines Kunstwerk, nachhaltig gefertigt und mit echter Hingabe vollendet. 
  Ob als stilvolles Accessoire, als individuelles Geschenk oder als Ausdruck deines persönlichen Stils, hier findest du einzigartige Stücke, die Herz und Charakter verbinden. 
  Entdecke eine Kollektion, in der Qualität, Kreativität und Persönlichkeit im Mittelpunkt stehen.
</p>



        <Image
          src="/soph.studio.jpg"
          alt="Startbild"
          width={500}
          height={500}
          className="mx-auto rounded-xl shadow-md"
        />
      </main>

      <Footer />
    </div>
  )
}
