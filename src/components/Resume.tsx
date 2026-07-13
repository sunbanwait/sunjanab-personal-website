import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: "Santa Clara University",
    degree: "Bachelor of Science: Computer Science & Engineering",
    period: "2025 - 2029",
    details: "Grand Challenges Scholar, Mindset Scholar (Ciocca Center), ACM Outreach Coordinator, SWE PR Chair, Activity Coordinator for SWE++, AI Collaborate, & KSCU Radio Host."
  },
  {
    institution: "Oakwood School",
    degree: "High School Diploma",
    period: "2021 - 2025",
    details: "Honors Advanced CS: Data Structures & Algorithms, Honors Data Science & Machine Learning, AP CSA, AP Chemistry, AP Calculus AB. Legacy Award '25, Student Council President '25, Commencement Speaker '25, Varsity Volleyball Captain '25."
  }
];

const work = [
  {
    role: "Software & Brand Management Intern",
    company: "Surrasa Skin (San Jose, CA)",
    period: "May – September 2025",
    bullets: [
      "Rebuilt the company website to improve performance, navigation, and UI, and developed an interactive product-matching quiz.",
      "Worked closely with the founder to translate business and client needs into website features.",
      "Led digital marketing initiatives, including video editing, photo editing, and social media content creation."
    ]
  },
  {
    role: "Piano Instructor",
    company: "Private Practice (Morgan Hill, CA)",
    period: "2021 – Present",
    bullets: [
      "Operate a private piano teaching business, providing customized lessons to children and beginner students.",
      "Design individualized lesson plans to build foundational music theory and performance skills.",
      "Communicate progress and curriculum updates to parents, tailoring instruction to student needs."
    ]
  },
  {
    role: "Volleyball Coach",
    company: "North Coast Volleyball Club (Morgan Hill, CA)",
    period: "2023 – 2025",
    bullets: [
      "Coached summer camps and youth training programs for 40+ players across multiple age groups.",
      "Served as Assistant Coach for the 12U team during the Spring season, supporting practices and tournaments.",
      "Developed drills, guided skill development, and provided individualized feedback to players."
    ]
  }
];

export const Resume: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      className="w-full min-h-screen bg-ochre text-plum flex items-center relative py-24" 
      id="resume"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-16">
        
        {/* Section Header */}
        <motion.div 
          className="space-y-4 border-b border-plum/10 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-serif text-sm italic text-plum/70 tracking-widest uppercase">03 • credentials</span>
          <h2 className="text-5xl md:text-8xl font-serif text-plum tracking-tight">Resume</h2>
          <p className="text-lg text-plum/85 font-sans font-normal max-w-xl">
            A background in engineering, design, athletic coaching, and music instruction.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-serif text-plum font-bold tracking-tight border-b border-plum/5 pb-2">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <motion.div 
                key={edu.institution}
                className="p-6 rounded-2xl bg-bg-warm/40 border border-plum/10 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-xl font-serif font-bold text-plum">{edu.institution}</h4>
                  <span className="text-xs font-sans font-medium text-plum/80 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm font-sans font-semibold text-plum/90">{edu.degree}</p>
                <p className="text-xs md:text-sm text-plum/80 font-sans font-normal leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-8 pt-8">
          <h3 className="text-2xl font-serif text-plum font-bold tracking-tight border-b border-plum/5 pb-2">Experience</h3>
          
          <div className="relative pl-8 md:pl-12">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-[3px] top-2 bottom-2 w-[2px] bg-plum/15 origin-top"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {work.map((exp) => (
                <motion.div 
                  key={exp.role} 
                  className="relative space-y-3"
                  variants={itemVariants}
                >
                  <span className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full border-2 border-plum bg-ochre z-10" />

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h4 className="text-xl md:text-2xl font-serif text-plum font-bold">{exp.role}</h4>
                    <span className="text-xs md:text-sm font-sans font-medium text-plum/80">
                      {exp.company} &bull; {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm text-plum/95 font-sans font-normal leading-relaxed marker:text-coral">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Resume Action Details */}
        <motion.div 
          className="flex justify-start pt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="mailto:sbanwait@scu.edu" 
            className="inline-flex items-center space-x-3 px-8 py-4 bg-plum text-bg-warm font-sans font-medium text-xs tracking-widest uppercase rounded-full shadow-lg hover:bg-plum/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Request Full PDF CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
