"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const navigate = useNavigate()
  const searchTimeoutRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      // Focus the search input when opened
      setTimeout(() => {
        document.getElementById("search-input")?.focus()
      }, 100)
    }
  }

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    // Implementar debounce
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (value.trim()) {
        navigate(`/products?search=${encodeURIComponent(value.trim())}`)
      }
    }, 300)
  }

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#c8553d]">
            🍶 Cerámica Artesanal
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#c8553d] transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-[#c8553d] transition-colors">
              Productos
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#c8553d] transition-colors">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#c8553d] transition-colors">
              Contacto
            </Link>
          </div>

          {/* Search icon */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                className="text-gray-700 hover:text-[#c8553d] transition-colors"
                onClick={toggleSearch}
                aria-label="Buscar"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Search input */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg p-2 z-10">
                  <div className="relative">
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8553d]"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <svg
                      className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-[#c8553d] transition-colors" onClick={toggleMenu}>
                Inicio
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-[#c8553d] transition-colors"
                onClick={toggleMenu}
              >
                Productos
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#c8553d] transition-colors" onClick={toggleMenu}>
                Sobre Nosotros
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#c8553d] transition-colors" onClick={toggleMenu}>
                Contacto
              </Link>

              {/* Search in mobile menu */}
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8553d]"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <svg
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
