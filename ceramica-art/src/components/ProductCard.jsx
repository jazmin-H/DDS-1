"use client"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

const ProductCard = ({ product }) => {
  const { name, image, description, price } = product; // Asegúrate de incluir 'image'
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handlePayNow = () => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    setShowToast(true);
    setTimeout(() => navigate("/pagos"), 1000);
  };

  return (
    <div className="card group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Contenedor de imagen con manejo de errores */}
      <div className="aspect-square overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={`${name} - Producto de cerámica artesanal`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800' fill='%23c8553d'%3E%3Crect width='800' height='800' fill='%23f8f4e3'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle'%3E" + 
                            encodeURIComponent(name) + "%3C/text%3E%3C/svg%3E";
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#f8f4e3] flex items-center justify-center">
            <span className="text-[#c8553d] font-semibold text-center p-4">
              {name}
            </span>
          </div>
        )}
      </div>

      {/* Detalles del producto */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{name}</h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2 min-h-[40px]">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-[#c8553d] font-bold text-lg">
            ${price.toFixed(2)}
          </span>
          <button
            className="bg-[#c8553d] hover:bg-[#b74c36] text-white py-2 px-4 rounded-full transition-colors"
            onClick={handlePayNow}
          >
            Comprar ahora
          </button>
        </div>
      </div>

      {/* Toast de confirmación */}
      {showToast && (
        <Toast
          message="¡Redirigiendo a pagos!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;