import React from 'react';
import { Target, Search, Handshake, Lightbulb } from 'lucide-react';

const achievements = [
  { icon: <Target size={32} />, title: 'Dominar la Técnica', description: 'Aprende la técnica fundamental "Uno a Uno" y comprende la base científica y ética del método.' },
  { icon: <Search size={32} />, title: 'Explorar Tu Historia', description: 'Identifica patrones entre tu pasado, presente y futuro y diseña tu camino de crecimiento personal.' },
  { icon: <Handshake size={32} />, title: 'Mejorar Relaciones', description: 'Explora dinámicas familiares y laborales, y aprende a dar y recibir feedback de forma innovadora.' },
  { icon: <Lightbulb size={32} />, title: 'Resolver Problemas', description: 'Aplica una técnica de 4 pasos para despertar tu potencial creativo y resolver cualquier desafío.' },
];

const AchievementCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-1 hover:shadow-xl p-6 sm:p-8 text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
      {icon}
    </div>
    <h3 className="font-bold text-xl text-amber-600 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Achievements: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
            <Target size={40} className="text-amber-500" />
            ¿Qué Vas a Lograr en Este Taller?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
