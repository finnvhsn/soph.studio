import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-gray-900 text-center">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
        <p className="mb-6">
          Angaben gemäß § 5 TMG
        </p>
        <p className="mb-4">
          soph.studio<br />
          Sophia Musterfrau<br />
          Musterstraße 12<br />
          12345 Musterstadt
        </p>
        <p className="mb-4">
          Telefon: 01234 567890<br />
          E-Mail: kontakt@soph.studio
        </p>
        <p className="mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
          Sophia Musterfrau<br />
          Adresse wie oben
        </p>
        <p className="text-sm text-gray-600">
          Dieses Impressum dient ausschließlich zu Demonstrationszwecken und ist nicht rechtsverbindlich.
        </p>
      </main>
      <Footer />
    </div>
  )
}
