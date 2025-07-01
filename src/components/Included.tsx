import React from 'react';
import { Gem, CheckCircle2 } from 'lucide-react';

const Included: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center md:justify-start gap-3">
                           <Gem size={40} className="text-amber-500" />
                           Lo Que Incluye Tu Inversión
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Recibirás un paquete completo de recursos y apoyo para garantizar una experiencia de aprendizaje profunda y duradera.
                        </p>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-blue-100 text-blue-800 border-blue-200">
                        <CheckCircle2 size={24} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base"><strong className="font-semibold text-gray-800">4 sesiones en vivo</strong> con facilitación especializada.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-green-100 text-green-800 border-green-200">
                        <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Acceso a la <strong className="font-semibold text-gray-800">App oficial de OH Cards</strong> durante el taller.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-yellow-100 text-yellow-800 border-yellow-200">
                        <CheckCircle2 size={24} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base"><strong className="font-semibold text-gray-800">Manual digital profesional</strong> con todas las técnicas.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-red-100 text-red-800 border-red-200">
                        <CheckCircle2 size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base"><strong className="font-semibold text-gray-800">Grabaciones</strong> de las sesiones para estudio posterior.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-purple-100 text-purple-800 border-purple-200">
                        <CheckCircle2 size={24} className="text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base"><strong className="font-semibold text-gray-800">Certificado digital</strong> de 12 horas de formación.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-pink-100 text-pink-800 border-pink-200">
                        <CheckCircle2 size={24} className="text-pink-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Acceso a <strong className="font-semibold text-gray-800">plataforma educativa</strong> por 30 días.</span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg shadow-sm border bg-gray-100 text-gray-800 border-gray-200">
                        <CheckCircle2 size={24} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base"><strong className="font-semibold text-gray-800">Descuento del 15%</strong> en la compra de cartas físicas originales.</span>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Included;
