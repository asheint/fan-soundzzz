import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ControlPanel from './components/ControlPanel';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import AudioController from './components/AudioController';
import LoadingScreen from './components/LoadingScreen';

function App() {
  // Create particle effect for background
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'fixed inset-0 pointer-events-none z-[-1]';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.3}`;
        
        // Animation
        particle.style.animation = `float ${Math.random() * 30 + 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }
      
      document.body.appendChild(particlesContainer);
      
      return () => {
        document.body.removeChild(particlesContainer);
      };
    };
    
    const cleanup = createParticles();
    
    return cleanup;
  }, []);
  
  return (
    <>
      <div className="gradient-bg"></div>
      <LoadingScreen />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          
          <section id="controls" className="pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  Customize Your Fan Sound
                </span>
              </h2>
              <ControlPanel />
            </div>
          </section>
          
          <section id="benefits" className="py-16">
            <BenefitsSection />
          </section>
        </main>
        
        <Footer />
      </div>
      
      {/* Non-visual components */}
      <AudioController />
    </>
  );
}

export default App;