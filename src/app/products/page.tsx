import NavBar from "../components/NavBar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
export default function Products() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard title="Tasche 1" description="Lorem Ipsum" />
          <ProductCard title="Tasche 2" description="Lorem Ipsum" />
          <ProductCard title="Tasche 3" description="Lorem Ipsum" />
          <ProductCard title="Tasche 4" description="Lorem Ipsum" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
