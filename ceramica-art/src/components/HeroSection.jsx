const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero image placeholder - Reemplazar con /images/hero-ceramic.jpg */}
      <div className="w-full h-[250px] md:h-[400px] bg-[#f8f4e3] flex items-center justify-center">
        <div className="hero-overlay">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Arte en Cerámica</h1>
            <p className="text-lg md:text-xl mb-6">Piezas únicas hechas a mano con pasión y tradición</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
