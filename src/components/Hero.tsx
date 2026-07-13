import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import portrait from '../assets/sunjanab.png';

export const Hero: React.FC = () => {
  // Typewriter effect state
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const text1 = "Hello!";
  const text2 = "I am Sunjana Banwait.";

  useEffect(() => {
    let i = 0;
    let j = 0;
    const timer = setInterval(() => {
      if (i < text1.length) {
        setLine1(text1.substring(0, i + 1));
        i++;
      } else if (j < text2.length) {
        setLine2(text2.substring(0, j + 1));
        j++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Resolve image source safely (handles string or object imports)
  const portraitSrc = typeof portrait === 'string' ? portrait : (portrait as any).src;

  // Parallax scroll transforms
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const yImage = useTransform(scrollY, [0, 500], [0, -30]);

  // Initial load transition variants (used for elements other than typed H1)
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section
      className="w-full min-h-screen bg-bg-warm flex flex-col justify-center relative py-16 md:py-24 overflow-hidden"
      id="hero"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center flex-grow z-10">

        {/* Left Column (Text): Large, Bold Serif Bio in Plum */}
        <motion.div
          className="md:col-span-7 space-y-6 text-left"
          style={{ y: yText }}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-plum leading-tight min-h-[6.5rem] md:min-h-[9rem] flex flex-col justify-end"
          >
            <div>
              {line1}
            </div>
            <div className="flex items-center">
              {line2}
              <span className={`inline-block w-1.5 h-9 md:h-12 ml-1.5 bg-plum align-middle transition-opacity duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </h1>

          <motion.p
            custom={1}
            variants={elementVariants}
            className="text-base md:text-lg lg:text-xl font-sans font-normal text-ink leading-relaxed max-w-xl"
          >
            I am a Computer Science and Engineering student at Santa Clara University with a minor in Political Science. I am passionate about building impactful technology, from accessible tools to ethical AI, constantly exploring how software engineering can better serve our communities.
          </motion.p>

          <motion.div
            custom={2}
            variants={elementVariants}
            className="pt-4 flex gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 border border-plum text-plum bg-transparent font-sans font-medium text-xs tracking-widest uppercase hover:bg-plum hover:text-bg-warm transition-all duration-300 rounded-sm"
              id="hero-btn-work"
            >
              Explore Portfolio
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Image): Circular Portrait with border & parallax */}
        <motion.div
          className="md:col-span-5 flex justify-center items-center"
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 aspect-square">
            <img
              src={portraitSrc}
              alt="Sunjana Banwait Portrait"
              className="w-full h-full object-cover rounded-full border-[8px] border-plum"
              id="hero-portrait"
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Center: Bouncing Scroll Prompts Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-plum/50">Scroll</span>
        <motion.a
          href="#work"
          className="pointer-events-auto cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-label="Scroll down to projects"
        >
          <svg className="w-5 h-5 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};
