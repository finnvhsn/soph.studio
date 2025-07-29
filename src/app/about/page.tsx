import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Ich bin Sophia, angehende Hebamme und passionierte Häklerin.
        </p>
      </main>
      <Footer />
    </div>
  )
}
