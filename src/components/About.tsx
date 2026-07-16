import React from 'react';
import { motion } from 'framer-motion';

// WHERE TO INSERT PHOTOS & VIDEOS:
// Place your media files (images/videos) in the "public/assets/" directory of this project.
// Update the paths below to match your filenames (e.g. "/assets/my-photo.jpg" or "/assets/my-video.mp4").
const bentoItems = [
  {
    id: "music",
    title: "Classical Keys",
    text: "I've been playing piano and singing for years, arranging duets and teaching beginner students.",
    image: "/assets/singing.jpg",
    video: null, // Insert video path here if you want to use a video instead (e.g., "/assets/music.mp4")
    className: "md:col-span-2 md:row-span-1",
    fallbackBg: "bg-plum/10"
  },
  {
    id: "trails",
    title: "Trail Seeker",
    text: "Always happiest outdoors exploring national parks, going on hikes, and finding new trails.",
    image: "/assets/sittinglog.jpg",
    video: null, // Insert video path here (e.g., "/assets/hiking.mp4")
    className: "md:col-span-1 md:row-span-2 h-full",
    fallbackBg: "bg-ochre/10"
  },
  {
    id: "volunteering",
    title: "Community Impact",
    text: "Whether leading SWE++ coding workshops or coordinating campus student outreach, I love connecting people with computing resources.",
    image: "/assets/volunteering.jpg",
    video: null, // Insert video path here (e.g., "/assets/volunteering.mp4")
    className: "md:col-span-1 md:row-span-1",
    fallbackBg: "bg-coral-bright/20"
  },
  {
    id: "pismo",
    title: "Coastal Wanderer",
    text: "Sunset captures and beach walks along Pismo Beach are my favorite ways to disconnect and find fresh perspectives.",
    image: "/assets/pismo.jpg",
    video: null, // Insert video path here (e.g., "/assets/maker.mp4")
    className: "md:col-span-1 md:row-span-1",
    fallbackBg: "bg-plum/20"
  },
  {
    id: "kitty",
    title: "Friendly Felines",
    text: "I have a habit of stopping to pet any friendly cat I come across while exploring my neighborhood.",
    image: "/assets/kitty.jpg",
    video: null, // Insert video path here (e.g., "/assets/cat.mp4")
    className: "md:col-span-1 md:row-span-1",
    fallbackBg: "bg-coral-bright/10"
  },
  {
    id: "museum",
    title: "Curious Minds",
    text: "I'm happiest when I'm learning something new, whether diving into science exhibitions or discovering history museums.",
    image: "/assets/museum.jpg",
    video: null, // Insert video path here (e.g., "/assets/exhibit.mp4")
    className: "md:col-span-2 md:row-span-1",
    fallbackBg: "bg-ochre/25"
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
      
      {/* SECTION 4: About Me */}
      <section 
        className="w-full py-24 border-t border-plum/10" 
        id="about"
      >
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-12">
          
          {/* Section Header */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-plum/10 pb-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left side: Section Title */}
            <div className="lg:col-span-5 flex items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-plum tracking-tight leading-none">
                About Me
              </h2>
            </div>
            
            {/* Right side: Personalized Biography */}
            <div className="lg:col-span-7 flex items-center">
              <p className="text-base md:text-lg text-ink/90 font-sans font-normal leading-relaxed">
                I’m a computer science student, but many of my favorite moments happen away from a screen. I’ve taught piano, coached volleyball, and love spending time outdoors, exploring museums, and stopping to pet every friendly cat I come across. I also enjoy casually vlogging and editing videos as creative outlets. Whether I’m building something or getting involved in projects that make a positive impact on my community, I’m happiest when I’m learning something new or helping someone else do the same.
              </p>
            </div>
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
                {/* Video, Image, or Fallback rendering */}
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-coral-bright/10 to-ochre/15">
                    {/* Fallback Volleyball SVG icon */}
                    <svg className="w-16 h-16 text-plum/20 group-hover:text-coral-bright/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                )}

                {/* Hover Tint Overlay & Sliding Fact Caption */}
                <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/85 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 z-10">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out text-left">
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
              Let's Connect!
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
