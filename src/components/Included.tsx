import React from 'react';
import { Gem, CheckCircle2 } from 'lucide-react';

const includedItems = [
    { pre: '', bold: '4 sesiones en vivo', post: ' con facilitación especializada.' },
    { pre: 'Acceso a la ', bold: 'App oficial de OH Cards', post: ' durante el taller.' },
    { pre: '', bold: 'Manual digital profesional', post: ' con todas las técnicas.' },
    { pre: '', bold: 'Grabaciones', post: ' de las sesiones para estudio posterior.' },
    { pre: '', bold: 'Certificado digital', post: ' de 12 horas de formación.' },
    { pre: 'Acceso a ', bold: 'plataforma educativa', post: ' por 30 días.' },
    { pre: '', bold: 'Descuento del 15%', post: ' en la compra de cartas físicas originales.' },
];

const colorClasses = [
  "bg-amber-50 text-amber-800 border-amber-100",
  "bg-sky-50 text-sky-800 border-sky-100",
  "bg-green-50 text-green-800 border-green-100",
  "bg-violet-50 text-violet-800 border-violet-100",
  "bg-pink-50 text-pink-800 border-pink-100",
  "bg-cyan-50 text-cyan-800 border-cyan-100",
  "bg-orange-50 text-orange-800 border-orange-100",
];

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
