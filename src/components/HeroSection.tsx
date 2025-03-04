import { motion } from 'framer-motion';
import FanScene from './FanScene';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Fall Asleep Faster</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                With Soothing Fan Sounds
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-indigo-200 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the perfect white noise that masks disruptive sounds, reduces anxiety, and creates the ideal sleep environment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#controls" className="btn btn-primary">
                Try It Now
              </a>
              <a href="#benefits" className="btn btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full blur-2xl"></div>
            <FanScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;