import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Fan SoundZzz</h3>
            <p className="text-indigo-300 max-w-md">
              The perfect fan sounds to help you fall asleep faster and stay asleep longer.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://buymeacoffee.com/asheint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-amber-900 font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              <Coffee className="w-5 h-5" />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-indigo-800/30 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-indigo-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fan SoundZzz - All Rights Reserved
          </p>
          
          {/* <div className="flex gap-6">
            <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;