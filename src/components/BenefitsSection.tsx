import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Consistent White Noise",
      description: "Fan sounds create the perfect white noise that masks disruptive environmental sounds.",
      icon: (
        <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H7M17 12H21M12 3V7M12 17V21M5.6 5.6L8.5 8.5M18.4 5.6L15.5 8.5M5.6 18.4L8.5 15.5M18.4 18.4L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Reduces Anxiety",
      description: "The rhythmic, consistent nature of fan sounds creates a calming effect that reduces anxiety.",
      icon: (
        <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 13C9 13 10 15 12 15C14 15 15 13 15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Masks Disruptive Sounds",
      description: "Fan sounds help maintain sleep by masking sudden changes in environmental noise.",
      icon: (
        <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 16L7 12L10 15L17 8L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 16L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 8L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Natural Sleep Environment",
      description: "Unlike artificial white noise, fan sounds have a natural, organic quality that's more soothing.",
      icon: (
        <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.00001C10 4.00001 5.5 4.50001 5.5 8.00001C5.5 11.5 10 9.00001 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18C14 20 18.5 19.5 18.5 16C18.5 12.5 14 15 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Fan Sounds Help You Sleep Better</h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            Fan sounds have become increasingly popular as a natural sleep aid, creating the perfect acoustic environment for restful sleep.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="infographic"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-900/30 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-indigo-200">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 glass rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Fan Sounds vs Other White Noise Options</h3>
          <p className="text-indigo-200 mb-4">
            While there are many white noise options available, fan sounds are uniquely effective for several reasons. 
            Unlike pure white noise machines that can sound static and artificial, fan sounds have a natural, organic 
            quality that many people find more soothing. The rhythmic, consistent nature of a fan sound creates 
            a perfect background noise that's neither too intrusive nor too quiet.
          </p>
          <p className="text-indigo-200">
            Research suggests that consistent background noise like fan sounds can help maintain sleep throughout the night
            by masking sudden changes in environmental noise that might otherwise wake you. The gentle acoustic masking
            effect of fan sounds creates an optimal sleep environment, especially in noisy urban settings or for light sleepers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;