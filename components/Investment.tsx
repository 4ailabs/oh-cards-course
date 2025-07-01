import React from 'react';
import { Gift } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
          <Gift size={40} className="text-amber-500" />
          Oferta Especial de Lanzamiento
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Aprovecha esta oportunidad única para invertir en tu desarrollo profesional.
        </p>
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-2xl p-8 sm:p-10 text-center max-w-md mx-auto shadow-2xl">
          <p className="text-base sm:text-lg text-gray-300 mb-4">Pago por sesión: $750 pesos</p>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2">
            Inversión Total: <span className="line-through">$3000 pesos</span>
          </p>
          <p className="text-5xl sm:text-6xl font-extrabold text-amber-400 my-4">$2400 pesos</p>
          <div className="bg-amber-400 text-amber-900 rounded-full py-2 px-5 inline-block font-bold mb-6 text-sm sm:text-base">
            ¡Paga en una sola exhibición y ahorra $600!
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            <strong className="font-bold">¿Ya tomaste el curso?</strong> Obtén un 5% de descuento adicional.
          </p>
        </div>
        <div className="mt-10">
          <a href="#inscripciones" className="bg-gradient-to-br from-amber-500 to-orange-500 text-white py-3 px-7 sm:py-4 sm:px-8 rounded-full font-bold inline-block transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-md sm:text-lg">
            Quiero Mi Lugar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Investment;