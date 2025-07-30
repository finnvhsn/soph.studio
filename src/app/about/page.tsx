import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto text-justify">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Ich bin Sophia, eine angehende Hebamme mit viel Herzblut für meinen Beruf und einer großen Leidenschaft für kreatives Gestalten.
          Schon seit vielen Jahren liebe ich es, mit meinen Händen Schönes zu schaffen, insbesondere durch das Häkeln. Diese kreative Ausdrucksform begleitet mich durch meinen Alltag und bietet mir einen liebevollen Ausgleich zur intensiven, aber erfüllenden Ausbildung in der Geburtshilfe.
          Mit Geduld, Präzision und Hingabe entstehen unter meinen Händen handgemachte Unikate, die nicht nur funktional, sondern auch individuell und mit Seele gefertigt sind.
          Meine Arbeiten spiegeln meine Persönlichkeit wider: warmherzig, detailverliebt und stets bestrebt, Menschen mit kleinen Dingen eine Freude zu machen.
        </p>
      </main>
      <Footer />
    </div>
  )
}

