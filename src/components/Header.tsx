import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Github, Star } from 'lucide-react';

const Header = () => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/repos/asheint/fan-soundzzz');

        if (!response.ok) {
          throw new Error('Could not fetch repository data');
        }

        const data = await response.json();
        setStarCount(data.stargazers_count);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching star count:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    };

    fetchStarCount();

    // Optional: Set up polling to update the star count periodically
    const intervalId = setInterval(fetchStarCount, 300000); // Update every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 py-6 px-6 z-50 w-full backdrop-blur-md bg-black/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Moon className="w-8 h-8 text-indigo-400 mr-3" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Fan SoundZzz
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/asheint/fan-soundzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-indigo-900/30 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
            {!isLoading && (
              <div className="flex items-center ml-1 bg-indigo-900/40 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
                <span className="text-xs font-medium">{starCount}</span>
              </div>
            )}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;