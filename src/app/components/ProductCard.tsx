type ProductProps = {
  title: string
  description: string
}

export default function ProductCard({ title, description }: ProductProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
