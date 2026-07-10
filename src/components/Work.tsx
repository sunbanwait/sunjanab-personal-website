import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoScout",
    award: "Hack for Humanity 2026",
    description: "A full-stack Chrome extension that detects fast-fashion websites in real-time and recommends sustainable, eco-friendly clothing alternatives using a smart matching engine.",
    tech: ["React", "Python", "Firebase", "Chrome Extension API"],
    tag: "Chrome Extension",
    accent: "rgba(242, 137, 114, 0.6)" // coral outline
  },
  {
    title: "FaceNav",
    award: "ACM Winter Challenge – 2nd Place",
    description: "A hands-free mouse control interface using computer vision to assist students with motor impairments in navigating Camino, SCU's university portal.",
    tech: ["Python", "Computer Vision", "UI Navigation", "OpenCV"],
    tag: "Assistive Tech",
    accent: "rgba(209, 144, 36, 0.6)" // ochre outline
  },
  {
    title: "InnerWeather",
    award: "Published Web Store Extension",
    description: "A cozy, privacy-first mood-tracking Chrome extension featuring a custom calendar interface, mood cycling tracker, and local storage architecture.",
    tech: ["React", "CSS Custom Properties", "Chrome Web Store API"],
    tag: "Chrome Extension",
    accent: "rgba(242, 137, 114, 0.6)"
  },
  {
    title: "HighView Portal",
    award: "AWS INRIX Hackathon 2025",
    description: "A collaborative web platform for non-profits to track and manage student engagement. Led front-end development, optimizing the admin dashboard layout.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "AWS"],
    tag: "Web Platform",
    accent: "rgba(209, 144, 36, 0.6)"
  },
  {
    title: "Ocular Disease Detection",
    award: "Data Science Capstone",
    description: "Developed a Convolutional Neural Network (CNN) to detect ocular diseases, achieving 85% accuracy and 87% sensitivity over 3,000+ retinal images.",
    tech: ["Python", "TensorFlow", "Pandas", "CNN Models"],
    tag: "AI & Data Science",
    accent: "rgba(242, 137, 114, 0.6)"
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      className="w-full min-h-screen bg-plum text-bg-warm flex items-center relative py-24 border-y border-plum/20" 
      id="work"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-16">
        
        {/* Section Header */}
        <motion.div 
          className="space-y-4 border-b border-bg-warm/15 pb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-serif text-sm italic text-coral tracking-widest uppercase">01 • portfolio</span>
          <h2 className="text-5xl md:text-8xl font-serif text-bg-warm tracking-tight">Work</h2>
          <p className="text-lg text-bg-warm/75 font-sans font-light max-w-xl">
            A listing of hacks, published extensions, and AI projects built during winter challenges and hackathons.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
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
              className="group flex flex-col justify-between border rounded-3xl p-8 bg-bg-warm/5 border-bg-warm/15"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                backgroundColor: "rgba(253, 249, 241, 0.07)",
                borderColor: project.accent,
                transition: { duration: 0.3 }
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs italic text-coral tracking-wider font-semibold">
                    {project.tag}
                  </span>
                  {project.award && (
                    <span className="text-[10px] font-sans uppercase tracking-widest text-ochre font-medium">
                      {project.award}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-serif text-bg-warm group-hover:text-coral transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-bg-warm/80 font-sans font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-bg-warm/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-0.5 bg-bg-warm/10 text-bg-warm/90 text-xs font-sans font-light rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="pt-16 border-t border-bg-warm/15">
          <h3 className="text-3xl font-serif text-bg-warm mb-8">Technical Toolkit</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skillGroup) => (
              <motion.div 
                key={skillGroup.category}
                className="space-y-4 p-6 rounded-2xl bg-bg-warm/5 border border-bg-warm/10"
                variants={cardVariants}
              >
                <h4 className="text-xs font-serif text-ochre uppercase tracking-widest font-semibold">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-plum/30 text-bg-warm text-xs rounded-full border border-bg-warm/10 hover:border-coral transition-colors duration-300 font-light"
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
