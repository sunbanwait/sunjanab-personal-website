import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      className="w-full min-h-screen bg-bg-warm flex items-center relative overflow-hidden" 
      id="hero"
    >
      {/* Background ambient accent */}
      <motion.div 
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-coral/5 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="w-full max-w-5xl mx-auto px-6 md:px-12 py-24 flex flex-col justify-center space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Tag */}
        <motion.div 
          className="flex items-center space-x-3 text-ochre font-serif text-sm md:text-base tracking-widest uppercase"
          variants={itemVariants}
        >
          <span className="inline-block w-8 h-[1px] bg-ochre"></span>
          <span>sunjana banwait • cse @ scu</span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-plum leading-none tracking-tight max-w-4xl"
            variants={titleVariants}
          >
            Engineering <span className="italic text-coral font-normal">aesthetic</span> & impactful software.
          </motion.h1>
        </div>

        {/* Bio Description */}
        <motion.p 
          className="text-lg md:text-2xl text-ink/80 font-sans font-light leading-relaxed max-w-2xl"
          variants={itemVariants}
        >
          I am a Computer Science & Engineering student at Santa Clara University. I build cozy Chrome extensions, computer vision mouse interfaces, and design-forward web platforms focused on visual balance, accessibility, and high performance.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          className="flex flex-wrap gap-6 pt-2"
          variants={itemVariants}
        >
          <a 
            href="#work" 
            className="px-8 py-4 bg-plum text-bg-warm font-sans font-medium text-xs tracking-widest uppercase rounded-full shadow-md hover:bg-plum/90 transition-all duration-300 focus:outline-none"
            id="hero-cta-work"
          >
            See Projects
          </a>
          <a 
            href="#resume" 
            className="px-8 py-4 border border-plum/30 text-plum font-sans font-medium text-xs tracking-widest uppercase rounded-full hover:bg-plum/5 hover:border-plum transition-all duration-300 focus:outline-none"
            id="hero-cta-resume"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
