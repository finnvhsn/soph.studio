export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="p-4 shadow-md bg-blue-600 text-white flex justify-between">
        <div className="text-xl font-bold">My Landingpage</div>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#products" className="hover:underline">Products</a>
        </div>
      </nav>

      <main className="p-8">
        <section id="about" className="my-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>Hier kannst du kurz etwas über dich schreiben.</p>
        </section>

        <section id="products" className="my-16">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <p>Stelle hier deine Produkte, Projekte oder Ideen vor.</p>
        </section>
      </main>
    </div>
  )
}
