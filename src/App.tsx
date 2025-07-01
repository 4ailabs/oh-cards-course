import React from 'react';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Sessions from './components/Sessions';
import Included from './components/Included';
import Investment from './components/Investment';
import Audience from './components/Audience';
import InteractiveDemo from './components/InteractiveDemo';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';

const App: React.FC = () => {
    return (
        <div className="bg-white antialiased text-gray-800">
            <main>
                <Hero />
                <Achievements />
                <Sessions />
                <Included />
                <Investment />
                <Audience />
                <InteractiveDemo />
                <Testimonials />
                <Cta />
            </main>
        </div>
    );
};

export default App;
