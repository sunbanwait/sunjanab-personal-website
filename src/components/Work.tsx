import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoScout",
    award: "Hack for Humanity 2026",
    description: "A full-stack Chrome extension that detects fast-fashion websites in real-time and recommends sustainable, eco-friendly clothing alternatives using a unique database to create a matching system.",
    tech: ["React", "Python", "Firebase", "JavaScript", "Chrome Extension"],
    tag: "Chrome Extension",
    accent: "rgba(242, 137, 114, 0.6)" // coral outline
  },
  {
    title: "FaceNav",
    award: "ACM Winter Challenge – 2nd Place",
    description: "A hands-free mouse control interface using computer vision to assist students with motor impairments in navigating Camino, Santa Clara University's portal.",
    tech: ["Python", "Computer Vision", "UI Navigation", "OpenCV"],
    tag: "Assistive Tech",
    accent: "rgba(209, 144, 36, 0.6)" // ochre outline
  },
  {
    title: "HighView Portal",
    award: "AWS INRIX Hackathon 2025",
    description: "A collaborative web platform for non-profits to track and manage student engagement. Led front-end development, optimizing the admin dashboard layout.",
    tech: ["React", "JavaScript", "HTML5"],
    tag: "Web Platform",
    accent: "rgba(242, 137, 114, 0.6)"
  },
  {
    title: "Ocular Disease Detection",
    award: "Honors Data Science Capstone",
    description: "Developed a Convolutional Neural Network (CNN) to detect ocular diseases, achieving 85% accuracy and 87% sensitivity over 3,000+ retinal images.",
    tech: ["Python", "TensorFlow", "Pandas", "CNN Models"],
    tag: "AI & Data Science",
    accent: "rgba(209, 144, 36, 0.6)"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "PHP"] },
  { category: "Applications & Tech", items: ["React.js", "Node.js", "Pandas", "TensorFlow", "GitHub", "VS Code"] },
  { category: "Operating Systems", items: ["macOS", "Linux"] }
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

  return (
    <section 
      className="w-full min-h-screen bg-plum text-bg-warm flex items-center relative py-16 border-y border-plum/20" 
      id="work"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-10">
        
        {/* Section Header */}
        <motion.div 
          className="border-b border-bg-warm/15 pb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-bg-warm tracking-tight">Projects</h2>
        </motion.div>

        {/* Projects Cards List (One per row, thinner and compact) */}
        <motion.div 
          className="flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group border rounded-3xl p-5 md:p-6 bg-bg-warm/5 border-bg-warm/10"
              variants={cardVariants}
              whileHover={{ 
                y: -3, 
                backgroundColor: "rgba(253, 249, 241, 0.07)",
                borderColor: project.accent,
                transition: { duration: 0.3 }
              }}
            >
              <div className="space-y-3.5">
                
                {/* Top Row: Meta Subtitles (Larger and highly readable) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <span className="font-serif text-xs md:text-sm italic text-coral tracking-wider font-bold">
                    {project.tag}
                  </span>
                  {project.award && (
                    <span className="text-xs md:text-sm font-sans uppercase tracking-wider text-ochre font-semibold">
                      {project.award}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif text-bg-warm group-hover:text-coral transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base font-sans font-normal leading-relaxed opacity-95">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="pt-1.5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2.5 py-0.5 bg-bg-warm/10 text-bg-warm/90 text-xs font-sans font-normal rounded-full border border-bg-warm/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="pt-10 border-t border-bg-warm/15">
          <h3 className="text-2xl md:text-3xl font-serif text-bg-warm mb-6">Technical Toolkit</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skillGroup) => (
              <motion.div 
                key={skillGroup.category}
                className="space-y-4 p-5 rounded-2xl bg-bg-warm/5 border border-bg-warm/10"
                variants={cardVariants}
              >
                <h4 className="text-xs font-serif text-ochre uppercase tracking-widest font-semibold">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-plum/30 text-bg-warm text-xs rounded-full border border-bg-warm/10 hover:border-coral transition-colors duration-300 font-normal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
