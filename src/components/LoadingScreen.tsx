import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      className="loading-screen"
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          document.body.style.overflow = 'auto';
        }
      }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
      >
        Fan SoundZzz
      </motion.div>
      
      <div className="loading-spinner mb-6"></div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-indigo-300"
      >
        Tuning your perfect sleep environment...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;