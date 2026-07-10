import React from 'react';
import { motion } from 'framer-motion';

const funFacts = [
  {
    icon: "🎹",
    title: "Piano Instructor",
    text: "Operating a private music teaching business since 2021. I love breaking down complex musical theory into intuitive, accessible lessons for kids."
  },
  {
    icon: "🏐",
    title: "Volleyball Coach",
    text: "Coaching summer camps and youth teams at North Coast Volleyball Club. Teaching strategic setups, sportsmanship, and quick-reflex coordination."
  },
  {
    icon: "💻",
    title: "Cozy extension developer",
    text: "Creator of extensions like InnerWeather. I specialize in designing cozy, user-friendly UI/UX layouts paired with clean, privacy-first local storage."
  },
  {
    icon: "🎙️",
    title: "KSCU Radio Host",
    text: "Actively involved in SCU campus life as SWE PR Chair, ACM Outreach Coordinator, and spin tracks/hosts shows on KSCU student campus radio."
  }
];

export const About: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      className="w-full min-h-screen bg-coral text-plum flex items-center relative py-24" 
      id="about"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Bio */}
        <motion.div 
          className="lg:col-span-6 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-serif text-sm italic text-plum/70 tracking-widest uppercase">02 • profile</span>
          <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tight text-plum">
            Grounded in community, driven by engineering.
          </h2>
          <p className="text-lg text-plum/90 font-sans font-light leading-relaxed max-w-md">
            Beyond coding, I spend my time teaching piano, coaching volleyball, and organizing tech outreach activities at Santa Clara University. I believe that engineering is at its best when it connects and uplifts people.
          </p>
        </motion.div>

        {/* Right Side: Fun Facts Grid */}
        <motion.div 
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {funFacts.map((fact) => (
            <motion.div
              key={fact.title}
              className="p-6 md:p-8 rounded-3xl bg-bg-warm border border-plum/10 flex flex-col space-y-4 hover:border-plum"
              variants={slideInVariants}
              whileHover={{ 
                scale: 1.025,
                rotate: [0, 0.5, -0.5, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-3xl">{fact.icon}</div>
              <h3 className="text-xl font-serif text-plum">{fact.title}</h3>
              <p className="text-xs md:text-sm text-ink/80 font-sans font-light leading-relaxed">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
