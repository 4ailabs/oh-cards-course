import React from 'react';
import { Phone } from 'lucide-react';

const Cta: React.FC = () => {
    return (
        <section id="inscripciones" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-800 to-gray-700 text-white">
            <div className="max-w-6xl mx-auto px-5 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Fortalece tu Práctica Profesional</h2>
                <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 text-gray-300">
                    Invierte en tu desarrollo con metodologías innovadoras y científicamente fundamentadas. Las OH Cards abren puertas a tus recursos internos y despliegan tu potencial.
                </p>
                <div className="bg-white text-gray-800 rounded-xl p-8 sm:p-10 max-w-lg mx-auto shadow-2xl">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 flex items-center justify-center gap-3">
                        <Phone size={28} className="text-amber-500" />
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
                            <a href="mailto:contacto@institucentrobioenergetica.com" className="text-amber-600 hover:text-amber-700 font-bold transition-colors text-base sm:text-lg">
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