import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Moon } from 'lucide-react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animated dots for loading indicator
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: [0, -12, 0] },
  };
  
  // Staggered transition for dots with proper type annotation
  const dotTransition = (delay: number): Transition => ({
    duration: 1,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
    delay: delay,
  });
  
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
      <div className="flex flex-col items-center justify-center h-full max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Moon className="w-24 h-24 text-indigo-400" />
          </motion.div>
          
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
            Fan SoundZzz
          </h1>
          <p className="text-xl text-indigo-300 font-light">Your perfect sleep companion</p>
        </motion.div>
        
        {/* Modern dot loading animation */}
        <motion.div className="flex justify-center gap-5 mb-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={dotTransition(i * 0.2)}
              className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="backdrop-blur-sm bg-black/10 rounded-lg p-6 max-w-md"
        >
          <p className="text-lg text-indigo-200">
            Crafting your perfect sleep environment with soothing fan sounds...
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-indigo-300/70 text-sm">Relax and unwind</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;