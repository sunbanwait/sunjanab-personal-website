import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoScout",
    image: "/assets/ecoscout.jpg",
    award: "Hack for Humanity 2026",
    description: "A full-stack Chrome extension that detects fast-fashion websites in real-time and recommends sustainable, eco-friendly clothing alternatives using a unique database to create a matching system.",
    tech: ["React", "Python", "Firebase", "JavaScript", "Chrome Extension"],
    tag: "Chrome Extension",
    links: [
      { label: "GitHub", url: "https://github.com/sunbanwait/Eco-scout", type: "github" },
      { label: "Devpost", url: "https://devpost.com/software/eco-scout", type: "external" }
    ],
    accent: "rgba(242, 137, 114, 0.8)" // original coral outline
  },
  {
    title: "FaceNav",
    image: "/assets/facenav.jpg",
    award: "ACM Winter Challenge – 2nd Place",
    description: "A hands-free mouse control interface using computer vision to assist students with motor impairments in navigating Camino, Santa Clara University's portal.",
    tech: ["Python", "Computer Vision", "UI Navigation", "OpenCV"],
    tag: "Assistive Tech",
    links: [
      { label: "GitHub", url: "https://github.com/sunbanwait/ACM-Winter-Challenge2025", type: "github" },
      { label: "Video Demo", url: "https://www.youtube.com/watch?v=QPXTKLSdJy0", type: "youtube" }
    ],
    accent: "rgba(209, 144, 36, 0.8)" // ochre outline
  },
  {
    title: "InnerWeather",
    image: "/assets/innerweather2.png",
    award: "Published Web Store Extension",
    description: "A cozy, privacy-first mood-tracking and mini-journaling Chrome extension built on front-end architectures featuring custom calendar grids and mood cycle logs.",
    tech: ["React", "JavaScript", "CSS Custom Properties", "Chrome Extension API"],
    tag: "Chrome Extension",
    links: [
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/innerweather/idemjjieojpapobgibfaabepklenafhg", type: "webstore" }
    ],
    accent: "rgba(242, 137, 114, 0.8)"
  },
  {
    title: "HighView Portal",
    image: "/assets/highview2.png",
    award: "AWS INRIX Hackathon 2025",
    description: "A collaborative web platform for non-profits to track and manage student engagement. Led front-end development, optimizing the admin dashboard layout.",
    tech: ["React", "JavaScript", "HTML5"],
    tag: "Web Platform",
    links: [
      { label: "GitHub", url: "https://github.com/sunbanwait/AWSxINRIX-Hack-2025", type: "github" },
      { label: "Devpost", url: "https://devpost.com/software/highview-portal", type: "external" }
    ],
    accent: "rgba(242, 137, 114, 0.8)"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "PHP"] },
  { category: "Applications & Tech", items: ["React.js", "Node.js", "Pandas", "TensorFlow", "GitHub", "VS Code"] },
  { category: "Operating Systems", items: ["macOS", "Linux"] },
  { category: "Soft Skills", items: ["Leadership", "Communication", "Collaboration", "Community Oriented"] }
];

export const Work: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'github':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'webstore':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        );
    }
  };

  // Duplicate the skills array for a seamless infinite loop in the marquee DOM
  const doubledSkills = [...skills, ...skills];

  return (
    <section 
      className="w-full min-h-screen bg-plum text-bg-warm flex items-center relative py-20 border-y border-plum/20" 
      id="work"
    >
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-12">
        
        {/* Centered Section Header */}
        <motion.div 
          className="text-center flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-bg-warm tracking-tight">Featured Projects</h2>
          <div className="w-12 h-1 bg-coral-bright rounded-full mt-1" />
        </motion.div>

        {/* 2-Column Grid Layout of Premium Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group border rounded-[2rem] p-5 md:p-6 bg-bg-warm text-plum border-plum/10 shadow-xl flex flex-col justify-between min-h-[440px] md:min-h-[465px]"
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.15)",
                borderColor: project.accent,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card top: Photo Icon Banner */}
              <div className="w-full h-32 md:h-36 rounded-2xl overflow-hidden mb-4 relative border border-plum/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card middle: Text info */}
              <div className="space-y-2.5 flex-grow text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-xl md:text-2xl font-serif font-black text-plum group-hover:text-coral-bright transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs font-sans uppercase tracking-wider text-ochre font-semibold">
                    {project.award}
                  </span>
                </div>

                <p className="text-sm font-sans font-normal text-ink/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2.5 py-0.5 bg-plum/5 text-plum text-xs font-sans font-normal rounded-full border border-plum/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card bottom: Dynamic Link Buttons */}
              <div className="mt-4 pt-3 border-t border-plum/5">
                <div className={project.links.length === 2 ? "grid grid-cols-2 gap-3" : "w-full"}>
                  {project.links.map((link) => (
                    <a 
                      key={link.label}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="py-2.5 border border-plum/10 rounded-xl hover:bg-plum hover:text-bg-warm transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-sans font-semibold text-plum bg-plum/[0.02]"
                    >
                      {renderIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section (with CSS Infinite Marquee Loop) */}
        <div className="pt-10 border-t border-bg-warm/15">
          <h3 className="text-2xl md:text-3xl font-serif text-bg-warm mb-6 text-center">Technical Toolkit</h3>
          
          <div className="w-full overflow-hidden py-4 relative">
            <div className="flex gap-6 animate-marquee flex-nowrap hover:[animation-play-state:paused] cursor-pointer w-max">
              {doubledSkills.map((skillGroup, idx) => (
                <div 
                  key={`${skillGroup.category}-${idx}`}
                  className="space-y-4 p-5 rounded-2xl bg-plum border border-bg-warm/15 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] transition-all duration-300 hover:border-coral-bright hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <h4 className="text-xs font-serif text-ochre uppercase tracking-widest font-semibold">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 bg-plum/30 text-bg-warm text-xs rounded-full border border-bg-warm/10 hover:border-coral-bright transition-colors duration-300 font-normal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
