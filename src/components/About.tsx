import React from 'react';
import { motion } from 'framer-motion';

const bentoItems = [
  {
    id: "music",
    title: "Classical Keys",
    text: "I've been playing piano for years and love arranging duets and teaching beginner students.",
    image: "/assets/music.jpg",
    className: "md:col-span-2 md:row-span-1",
    fallbackBg: "bg-plum/10"
  },
  {
    id: "trails",
    title: "Trail Seeker",
    text: "Always happiest outdoors exploring national parks, going on hikes, and finding new trails.",
    image: "/assets/trails.jpg",
    className: "md:col-span-1 md:row-span-2 h-full",
    fallbackBg: "bg-ochre/10"
  },
  {
    id: "volleyball",
    title: "On the Court",
    text: "From varsity captain to intramural player and youth coach, volleyball is my go-to energy reset.",
    image: null, // Colored fallback block
    className: "md:col-span-1 md:row-span-1",
    fallbackBg: "bg-coral-bright/20"
  },
  {
    id: "maker",
    title: "Maker Mindset",
    text: "I love hands-on building, whether it's intricate Lego architecture or analogue radio setups.",
    image: "/assets/maker.jpg",
    className: "md:col-span-1 md:row-span-1",
    fallbackBg: "bg-plum/20"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full flex flex-col bg-bg-warm">
      
      {/* SECTION 4: Beyond the Code */}
      <section 
        className="w-full py-24 border-t border-plum/10" 
        id="about"
      >
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-12">
          
          {/* Section Header */}
          <motion.div 
            className="space-y-3 border-b border-plum/10 pb-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-plum tracking-tight leading-none">
              Beyond the Code
            </h2>
            <p className="text-base md:text-lg text-ink/80 font-sans font-normal max-w-xl">
              A few snapshots of what fuels my creativity when I'm off the clock.
            </p>
          </motion.div>

          {/* Interactive Photo Mosaic (Bento/Masonry Grid) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {bentoItems.map((item) => (
              <motion.div
                key={item.id}
                className={`group relative rounded-[2rem] border border-plum/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer ${item.className} ${item.fallbackBg}`}
                variants={cardVariants}
              >
                {/* Image or Fallback background */}
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-coral-bright/10 to-ochre/15">
                    {/* Volleyball SVG Icon inside colored block */}
                    <svg className="w-16 h-16 text-plum/20 group-hover:text-coral-bright/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                )}

                {/* Hover Tint Overlay & Sliding Fact Caption */}
                <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/85 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 z-10">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-1.5 text-left">
                    <span className="text-xs font-serif italic text-ochre tracking-widest uppercase block">
                      {item.title}
                    </span>
                    <p className="text-sm font-sans text-bg-warm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLOSING BANNER & FOOTER */}
      <footer className="w-full bg-plum text-bg-warm relative py-16 border-t border-plum/20 overflow-hidden">
        
        {/* Large Opaque White Polka Dot Checkerboard Background Pattern */}
        <div 
          className="absolute inset-0 opacity-100 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255, 255, 255, 1) 18%, transparent 19%),
              radial-gradient(rgba(255, 255, 255, 1) 18%, transparent 19%)
            `,
            backgroundSize: '180px 180px',
            backgroundPosition: '0 0, 90px 90px'
          }}
        />

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10">
          
          {/* Solid Linen Card for high text legibility over polka dots */}
          <div className="p-6 md:p-10 rounded-[2rem] bg-bg-warm border border-plum/10 shadow-2xl max-w-3xl w-full text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-plum tracking-tight leading-tight">
              Let's build something impactful together.
            </h2>
            
            {/* Interactive Email Button */}
            <div className="pt-2">
              <a 
                href="mailto:sbanwait@scu.edu" 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-ochre text-ink font-sans font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg hover:scale-105 active:scale-95 hover:bg-ochre/95 transition-all duration-300"
              >
                <span>Say Hello ✦</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
