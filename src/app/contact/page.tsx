import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="mb-6 text-justify">
          Du hast Fragen zu meinen Produkten, möchtest eine individuelle Bestellung aufgeben oder einfach nur Hallo sagen?
          Ich freue mich über deine Nachricht!
        </p>
        <p className="text-gray-700">
          <span className="block mt-2 font-medium text-blue-700">kontakt@soph.studio</span>
        </p>
      </main>
      <Footer />
    </div>
  )
}
