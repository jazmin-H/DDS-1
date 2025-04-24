const About = () => {
  return (
    <div>
      {/* Hero image */}
      <div className="w-full h-[250px] md:h-[400px] relative">
        {/* About hero image placeholder - Reemplazar con /images/about-hero.jpg */}
        <div className="w-full h-full bg-[#c8553d]/30 flex items-center justify-center">
          <span className="text-[#c8553d] font-semibold">[Imagen: Nuestro Taller]</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Sobre Nosotros</h1>
        </div>
      </div>
      <section className="section bg-[#f8f4e3]">
         <div className="container">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-6">Cerámica Artesanal</h2>
               <p className="text-lg mb-4">
                 En Cerámica Artesanal, cada pieza es creada con dedicación y amor por el arte tradicional. Nuestro taller
                 familiar lleva más de 20 años preservando técnicas ancestrales y combinándolas con diseños contemporáneos.
               </p>
               <p className="text-lg">
                 Utilizamos arcillas y pigmentos naturales para crear piezas únicas que aportan calidez y autenticidad a
                 cualquier espacio. Cada objeto cuenta una historia y lleva consigo la esencia de nuestras manos artesanas.
               </p>
          </div>
        </div>
      </section>
      {/* History section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Trayectoria</h2>

            <div className="space-y-12">
              {/* Timeline item 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    {/* History image 1 placeholder - Reemplazar con /images/history1.jpg */}
                    <div className="w-full h-full bg-[#f8f4e3] flex items-center justify-center">
                      <span className="text-[#c8553d] font-semibold">[Imagen: Inicios]</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-[#c8553d]">2000 - Los inicios</h3>
                  <p className="mt-3">
                   Nacimos en un pequeño taller, donde rescatamos los métodos tradicionales de la cerámica artesanal. 
                   Con herramientas sencillas y mucha dedicación, comenzamos a dar forma a piezas que pronto ganaron reconocimiento.
                  </p>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 md:order-2">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    {/* History image 2 placeholder - Reemplazar con /images/history2.jpg */}
                    <div className="w-full h-full bg-[#f8f4e3] flex items-center justify-center">
                      <span className="text-[#c8553d] font-semibold">[Imagen: Crecimiento]</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-xl font-semibold text-[#c8553d]">2010 - Expansión</h3>
                  <p className="mt-3">
                   Ampliamos nuestro espacio y técnicas, incorporando nuevos diseños y formando a futuros artesanos. 
                   Nuestro trabajo empezó a destacar en ferias y mercados locales.
                  </p>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    {/* History image 3 placeholder - Reemplazar con /images/history3.jpg */}
                    <div className="w-full h-full bg-[#f8f4e3] flex items-center justify-center">
                      <span className="text-[#c8553d] font-semibold">[Imagen: Actualidad]</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-[#c8553d]">Actualidad - Innovación y Tradición</h3>
                  <p className="mt-3">
                   Seguimos honrando el oficio manual mientras exploramos nuevas formas y aplicaciones, desde piezas decorativas hasta vajillas y elementos para el hogar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="section bg-[#f8f4e3]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Proceso Artesanal</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Selección de Arcilla</h3>
              <p>
                Seleccionamos cuidadosamente las mejores arcillas naturales, prestando atención a su textura y
                propiedades para cada tipo de pieza.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modelado</h3>
              <p>
                Cada pieza es modelada a mano o en torno, dándole forma con paciencia y dedicación. Este proceso puede
                tomar horas dependiendo de la complejidad.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secado</h3>
              <p>
                Las piezas se dejan secar naturalmente durante varios días, controlando cuidadosamente la temperatura y
                humedad para evitar grietas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Primera Cocción</h3>
              <p>
                Realizamos una primera cocción a alta temperatura para endurecer la arcilla y prepararla para el
                esmaltado.
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Esmaltado y Decoración</h3>
              <p>
                Aplicamos esmaltes y pigmentos naturales, creando diseños únicos para cada pieza. Utilizamos técnicas
                tradicionales de pintura a mano.
              </p>
            </div>

            {/* Step 6 */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl text-[#c8553d] font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cocción Final</h3>
              <p>
                Una segunda cocción a temperatura controlada fija los esmaltes y colores, dando el acabado final a cada
                pieza única.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About
