import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
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
          Bei soph.studio entstehen mit viel Liebe zum Detail handgemachte Taschen 
          und liebevoll gestaltete Unikate, die den Alltag bereichern und verschönern. 
          Jedes einzelne Produkt ist ein kleines Kunstwerk, sorgfältig entworfen, nachhaltig gefertigt 
          und mit echter Hingabe vollendet. Ob als stilvolles Accessoire, als persönliches Geschenk 
          oder als Ausdruck deiner Individualität: Hier findest du besondere Stücke, 
          die mit Herz, Charakter und einem feinen Gespür für Ästhetik gefertigt wurden. 
          Entdecke eine Kollektion, in der Qualität, Kreativität und Persönlichkeit in jedem Detail spürbar sind.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Image
            src="/pics/green-blue-bag-half.jpg"
            alt="Green-Blue Bag"
            width={300}
            height={300}
            className="rounded-xl shadow-md"
          />
          <Image
          src="/pics/brown_white_bag.jpg"
          alt="Brown Bag"
          width={300}
          height={300}
          className="rounded-xl shadow-md"
        />
        </div>
      </main>
      <Footer />
    </div>
  )
}
