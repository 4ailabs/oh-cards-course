import React from 'react';
import { Calendar } from 'lucide-react';

const sessions = [
    { 
        number: 1, 
        title: 'Fundamentos y Primera Experiencia', 
        description: 'Dominar la técnica fundamental "Uno a Uno", experimentar tu primera transformación personal y comprender la base científica y ética del método.', 
        date: 'Sábado 5 de julio - 10:00 AM a 1:00 PM',
        colorClasses: {
            bg: 'bg-amber-50',
            circleBg: 'bg-amber-200',
            circleText: 'text-amber-800',
            dateText: 'text-amber-600'
        }
    },
    { 
        number: 2, 
        title: 'Viaje Temporal Personal', 
        description: 'Explorar patrones entre tu pasado, presente y futuro, identificar recursos internos ocultos y diseñar tu camino de crecimiento personal.', 
        date: 'Lunes 14 de julio - 6:00 PM a 9:00 PM',
        colorClasses: {
            bg: 'bg-sky-50',
            circleBg: 'bg-sky-200',
            circleText: 'text-sky-800',
            dateText: 'text-sky-600'
        }
    },
    { 
        number: 3, 
        title: 'Dinámicas Grupales y Relacionales', 
        description: 'Dar y recibir feedback constructivo, explorar dinámicas familiares y laborales, y crear conexiones auténticas con otros.', 
        date: 'Lunes 21 de julio - 6:00 PM a 9:00 PM',
        colorClasses: {
            bg: 'bg-teal-50',
            circleBg: 'bg-teal-200',
            circleText: 'text-teal-800',
            dateText: 'text-teal-600'
        }
    },
    { 
        number: 4, 
        title: 'Creatividad y Resolución de Problemas', 
        description: 'Técnica revolucionaria de 4 pasos para resolver cualquier desafío, despertar tu potencial creativo y aplicar innovación a problemas reales.', 
        date: 'Lunes 28 de julio - 6:00 PM a 9:00 PM',
        colorClasses: {
            bg: 'bg-rose-50',
            circleBg: 'bg-rose-200',
            circleText: 'text-rose-800',
            dateText: 'text-rose-600'
        }
    }
];

const SessionCard: React.FC<typeof sessions[0]> = ({ number, title, description, date, colorClasses }) => (
    <div className={`${colorClasses.bg} rounded-xl p-6 mb-4 shadow-lg flex flex-col md:flex-row items-start gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
        <div className={`${colorClasses.circleBg} ${colorClasses.circleText} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0 mx-auto md:mx-0`}>
            {number}
        </div>
        <div className="flex-grow text-center md:text-left">
            <h3 className="font-bold text-lg sm:text-xl text-[#5D4333] mb-2">{title}</h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">{description}</p>
            <p className={`font-semibold ${colorClasses.dateText} text-sm`}>{date}</p>
        </div>
    </div>
);


const Sessions: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
                        <Calendar size={40} className="text-amber-500" />
                        El Viaje: 4 Sesiones de Transformación
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {sessions.map((session, index) => (
                        <SessionCard key={index} {...session} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sessions;
