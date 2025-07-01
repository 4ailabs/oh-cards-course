import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const audienceTags = [
    "Psicólogo, terapeuta o coach",
    "Profesional creativo",
    "Consultor o facilitador",
    "Emprendedor o líder",
    "Educador o trabajador social",
    "Persona curiosa"
];

const Audience: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
                        <Star size={40} className="text-amber-500" />
                        Perfecto si Eres...
                    </h2>
                </div>
                <div className="text-center max-w-4xl mx-auto">
                    {audienceTags.map((tag, index) => (
                        <span key={index} className="bg-amber-100 text-amber-800 py-2 px-4 sm:py-3 sm:px-5 rounded-lg font-semibold text-center m-1 sm:m-2 inline-flex items-center gap-2 shadow-sm text-sm sm:text-base">
                            <Sparkles size={16} className="opacity-70" /> {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Audience;
