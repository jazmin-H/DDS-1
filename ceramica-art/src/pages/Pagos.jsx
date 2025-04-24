"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Pagos = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const selectedProduct = sessionStorage.getItem("selectedProduct")
    if (selectedProduct) {
      setProduct(JSON.parse(selectedProduct))
    } else {
      navigate("/products")
    }
  }, [navigate])

  if (!product) {
    return (
      <div className="section">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Cargando...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Finalizar compra</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                {/* Contenedor de imagen real */}
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800' fill='%23c8553d'%3E%3Crect width='800' height='800' fill='%23f8f4e3'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle'%3E" + 
                                    encodeURIComponent(product.name) + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-full aspect-square bg-[#f8f4e3] flex items-center justify-center rounded-md">
                    <span className="text-[#c8553d] font-semibold">[Imagen: {product.name}]</span>
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-[#c8553d] mb-6">${product.price}</div>

                <button className="w-full bg-[#009ee3] hover:bg-[#008dcb] text-white py-3 px-4 rounded-md flex items-center justify-center transition-colors mb-4">
                  {/* Logo de MercadoPago (asegúrate de tener el archivo en public/images/) */}
                  <img 
                    src="/images/mercadopago.png" 
                    alt="MercadoPago" 
                    className="h-6 mr-2" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                  Pagar con MercadoPago
                </button>

                <Link
                  to="/products"
                  className="block text-center text-[#c8553d] hover:text-[#a73f2d] transition-colors"
                >
                  Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagos