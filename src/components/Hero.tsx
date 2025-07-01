import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f4f0] to-[#e8ddd4] relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4c88?q=80&w=1200&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest mb-2 font-semibold text-gray-500 anim-base anim-fade-in-up">Taller Online</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#5D4333] mb-4 leading-tight anim-h1">OH CARDS</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6 anim-base anim-fade-in-up anim-delay-400">Herramientas Proyectivas para el Desarrollo Profesional y Personal</p>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-gray-700 leading-relaxed anim-base anim-fade-in-up anim-delay-600">
            ¿Buscas técnicas innovadoras que integren creatividad y metodología sólida en tu práctica profesional? Descubre un método reconocido internacionalmente que combina <strong className="font-bold text-gray-800">88 imágenes y 88 palabras</strong> para crear <strong className="font-bold text-gray-800">7,744 combinaciones únicas</strong> que facilitan el autoconocimiento.
          </p>
          <a href="#inscripciones" className="bg-gradient-to-br from-amber-500 to-orange-500 text-white py-3 px-7 sm:py-4 sm:px-8 rounded-full font-bold inline-block transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-md sm:text-lg anim-base anim-fade-in-up anim-delay-800">
            Inscríbete Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
