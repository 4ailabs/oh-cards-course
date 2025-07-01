import React from 'react';
import { Trophy } from 'lucide-react';

const testimonials = [
    { text: "La metodología OH Cards me permitió integrar técnicas proyectivas de manera estructurada y ética en mi práctica clínica.", author: "Dra. María González", role: "Psicóloga Clínica" },
    { text: "Como coach empresarial, estas herramientas facilitaron procesos de insight más profundos en mis sesiones de desarrollo de liderazgo.", author: "Lic. Carlos Mendoza", role: "Coach Ejecutivo" },
    { text: "En mi trabajo como consultora, las OH Cards se convirtieron en una metodología clave para sesiones de innovación y resolución creativa.", author: "Mtra. Ana Rodríguez", role: "Consultora Organizacional" }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ text, author, role }) => (
    <div className="bg-stone-50 border-l-4 border-amber-500 p-5 sm:p-6 rounded-lg mb-6 shadow-md">
        <p className="text-base sm:text-lg italic text-gray-700 mb-4">"{text}"</p>
        <p className="font-bold text-right text-gray-800 m-0 text-sm sm:text-base">- {author}, <span className="font-normal text-gray-600">{role}</span></p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white mt-16">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
                        <Trophy size={40} className="text-amber-500" />
                        Testimonios Profesionales
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
