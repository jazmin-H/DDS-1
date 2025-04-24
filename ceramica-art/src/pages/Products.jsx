"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const allProducts = [
  {
    id: 1,
    name: "Jarrón",
    image: "/images/product1.jpg",
    description: "Jarrón decorativo hecho a mano con arcilla natural.",
    price: 45.99,
    category: "decoracion",
  },
  {
    id: 2,
    name: "Taza Rústica",
    image: "/images/product2.jpg",
    description: "Taza artesanal con acabado rústico y diseño único.",
    price: 24.99,
    category: "vajilla",
  },
  {
    id: 3,
    name: "Plato Decorativo",
    image: "/images/product3.jpg",
    description: "Plato decorativo con motivos tradicionales pintados a mano.",
    price: 39.99,
    category: "decoracion",
  },
  {
    id: 4,
    name: "Set de Tazas",
    image: "/images/product4.jpg",
    description: "Set de 4 tazas artesanales con diseños variados.",
    price: 79.99,
    category: "vajilla",
  },
  {
    id: 5,
    name: "Maceta Artesanal",
    image: "/images/product5.jpg",
    description: "Maceta decorativa para plantas pequeñas y medianas.",
    price: 34.99,
    category: "jardin",
  },
  {
    id: 6,
    name: "Bowl Decorativo",
    image: "/images/product6.jpg",
    description: "Bowl multiusos con acabado esmaltado y diseño único.",
    price: 29.99,
    category: "vajilla",
  },
  {
    id: 7,
    name: "Figura Decorativa",
    image: "/images/product7.jpg",
    description: "Escultura pequeña para decoración de interiores.",
    price: 49.99,
    category: "decoracion",
  },
  {
    id: 8,
    name: "Plato de Pared",
    image: "/images/product8.jpg",
    description: "Plato decorativo para colgar en la pared con diseños tradicionales.",
    price: 54.99,
    category: "decoracion",
  },
  {
    id: 9,
    name: "Macetero Colgante",
    image: "/images/product9.jpg",
    description: "Macetero para colgar con cuerda trenzada incluida.",
    price: 42.99,
    category: "jardin",
  },
]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState([])
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const searchTerm = searchParams.get("search")?.toLowerCase()

    let filtered =
      selectedCategory === "all" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, location.search])

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h1>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${selectedCategory === "all" ? "bg-[#c8553d] text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("all")}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedCategory === "vajilla" ? "bg-[#c8553d] text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("vajilla")}
          >
            Vajilla
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedCategory === "decoracion" ? "bg-[#c8553d] text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("decoracion")}
          >
            Decoración
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedCategory === "jardin" ? "bg-[#c8553d] text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("jardin")}
          >
            Jardín
          </button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
