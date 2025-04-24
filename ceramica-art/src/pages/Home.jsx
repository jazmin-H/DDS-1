import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import ProductCard from "../components/ProductCard"

const featuredProducts = [
  {
    id: 1,
    name: "Jarrón Terracota",
    image: "/images/product1.jpg",
    description: "Jarrón decorativo hecho a mano con arcilla natural.",
    price: 45.99,
  },
  {
    id: 2,
    name: "Taza Rústica",
    image: "/images/product2.jpg",
    description: "Taza artesanal con acabado rústico y diseño único.",
    price: 24.99,
  },
  {
    id: 3,
    name: "Plato Decorativo",
    image: "/images/product3.jpg",
    description: "Plato decorativo con motivos tradicionales pintados a mano.",
    price: 39.99,
  },
]

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* Featured products */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
