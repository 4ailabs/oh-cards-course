import React from 'react';
import { Phone } from 'lucide-react';

const Cta: React.FC = () => {
    return (
        <section id="inscripciones" className="py-10 sm:py-20 md:py-24 bg-gradient-to-br from-sky-100 to-white text-gray-800">
            <div className="max-w-6xl mx-auto px-3 sm:px-5 text-center">
                <div className="inline-block bg-amber-400 text-amber-900 font-bold rounded-full px-4 py-1 mb-4 text-xs tracking-widest shadow-md">¡Contáctanos!</div>
                <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-lg mx-auto shadow-2xl border border-sky-200 relative">
                    <h3 className="font-bold text-2xl sm:text-3xl mb-4 flex items-center justify-center gap-3">
                        <Phone size={36} className="text-amber-500" />
                        Información e Inscripciones
                    </h3>
                    <p className="mb-6 text-sm sm:text-base">Escribe "INFORMACIÓN OH CARDS" para recibir todos los detalles.</p>
                    <div className="space-y-6">
                        <div>
                            <p className="mb-2 font-semibold text-base sm:text-lg">WhatsApp:</p>
                            <a href="https://wa.me/+525579076626" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-bold transition-colors text-base sm:text-lg">
                                Enviar mensaje
                            </a>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold text-base sm:text-lg">Email:</p>
                            <a href="mailto:contacto@institucentrobioenergetica.com" className="text-amber-600 hover:text-amber-700 font-bold transition-colors text-base sm:text-lg break-all p-1 block">
                                contacto@institucentrobioenergetica.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
