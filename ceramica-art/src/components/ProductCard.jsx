"use client"

const ProductCard = ({ product }) => {
  const { name, image, description, price } = product;

  return (
    <div className="card group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Contenedor de imagen (sin cambios) */}
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

 {/* Detalles del producto (versión con precio a la izquierda) */}
     <div className="p-4">
         <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{name}</h3>
         <p className="text-gray-600 mt-2 text-sm line-clamp-2 min-h-[40px]">
           {description}
         </p>
       <div className="mt-4"> {/* Contenedor simplificado - precio a la izquierda por defecto */}
         <span className="text-[#c8553d] font-bold text-lg">
           ${price.toFixed(2)}
         </span>
          {/* Espacio reservado si luego agregas otro elemento a la derecha */}
       </div>
     </div>
    </div>
  );
};

export default ProductCard;