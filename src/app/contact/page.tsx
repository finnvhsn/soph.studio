import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Hier kommt später dein Kontaktformular oder deine E-Mail-Adresse hin.</p>
      </main>
      <Footer />
    </div>
    
  )
}
