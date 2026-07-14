import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: "Santa Clara University",
    degree: "B.S. in Computer Science & Engineering",
    period: "2025 – 2029",
    details: "Mindset Scholar (Ciocca Center), Grand Challenges Scholars Program, SWE PR Chair & Activity Coordinator, ACM Outreach Coordinator, AI Collaborate, IM Volleyball."
  },
  {
    institution: "Oakwood School, Morgan Hill",
    degree: "High School Diploma",
    period: "2021 – 2025",
    details: "Student Council President '25, Varsity Volleyball Captain, Legacy Award Recipient '25, Earth Club Founder/Co-President, Girls Who Code President, SASA Co-President."
  }
];

const work = [
  {
    role: "Public Relations Chair & SWE++ Activity Coordinator",
    company: "Society of Women Engineers (SCU Chapter)",
    period: "Apr 2026 – Present",
    category: "LEADERSHIP",
    summary: "Leading chapter public relations and marketing initiatives. Coordinating weekly SWE++ coding outreach activities and curriculum for middle school girls.",
    pills: ["Leadership", "Public Relations", "Event Coordination", "Outreach"]
  },
  {
    role: "Outreach Coordinator",
    company: "Association for Computing Machinery (SCU ACM)",
    period: "Apr 2026 – Present",
    category: "LEADERSHIP",
    summary: "Driving campus and community outreach, connecting students with computing resources, workshops, and collaborative tech initiatives.",
    pills: ["Community Building", "Tech Outreach", "Public Speaking"]
  },
  {
    role: "Private Studio",
    company: "Piano Instructor",
    period: "Jan 2021 – Present (5+ yrs)",
    category: "TEACHING",
    summary: "Operating a private studio providing individualized piano instruction to beginner students and children. Designing foundational music theory curriculum and tailoring lesson plans to individual student progress.",
    pills: ["Curriculum Design", "Instruction", "Music Theory", "Communication"]
  },
  {
    role: "Software & Brand Management Intern",
    company: "Surrasa Skin and Wellness",
    period: "Jun 2025 – Sep 2025",
    category: "ENGINEERING & BRAND",
    summary: "Rebuilt and optimized the company website to improve performance, navigation, and UI/UX. Translated business and client needs into responsive web features while leading digital marketing, video editing, and social media content creation.",
    pills: ["Web Development", "UI/UX", "Digital Marketing", "Brand Strategy"]
  },
  {
    role: "Coding Camp Instructor & Curriculum Developer",
    company: "YMCA of the USA",
    period: "Jun 2024 – Sep 2024",
    category: "TEACHING",
    summary: "Developed interactive coding curriculum and led twice-weekly computer literacy, internet safety, and basic programming classes for over 25 students.",
    pills: ["Curriculum Development", "Computer Literacy", "Teaching", "Leadership"]
  }
];

export const Resume: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      className="w-full min-h-screen bg-coral text-plum flex items-center relative py-24 border-b border-plum/20" 
      id="resume"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center space-y-16">
        
        {/* Section Header */}
        <motion.div 
          className="border-b border-plum/10 pb-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-plum tracking-tight">
            Experience & Education
          </h2>
        </motion.div>

        {/* Education Timeline (Credential Cards) */}
        <div className="space-y-8 text-left">
          <h3 className="text-2xl font-serif text-plum font-semibold tracking-tight border-b border-plum/5 pb-2">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <motion.div 
                key={edu.institution}
                className="p-6 rounded-2xl bg-white text-plum border border-plum/10 border-l-4 border-l-ochre space-y-3 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-xl font-serif font-black text-plum">{edu.institution}</h4>
                  <span className="text-xs font-sans font-semibold text-plum/60 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm font-sans font-bold text-ink">{edu.degree}</p>
                <p className="text-xs md:text-sm text-ink/80 font-sans font-normal leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline (Card Stack) */}
        <div className="space-y-8 text-left">
          <h3 className="text-2xl font-serif text-plum font-semibold tracking-tight border-b border-plum/5 pb-2">Experience</h3>
          
          <motion.div 
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {work.map((exp) => (
              <motion.div 
                key={exp.role} 
                className="p-6 rounded-2xl border border-plum/10 bg-white text-plum flex flex-col justify-between hover:border-coral transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-sans font-semibold text-plum/50">{exp.period}</span>
                  <span className="px-2 py-0.5 border border-ochre/30 text-ochre text-[10px] font-sans font-black tracking-wider rounded-full uppercase bg-ochre/5">
                    {exp.category}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h4 className="text-xl font-serif font-black text-plum leading-tight">{exp.company}</h4>
                  <p className="text-sm font-sans font-bold text-ink">{exp.role}</p>
                </div>

                <p className="text-xs md:text-sm text-ink/80 font-sans font-normal leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-plum/5">
                  {exp.pills.map((pill) => (
                    <span 
                      key={pill}
                      className="px-2.5 py-0.5 bg-plum/5 text-plum text-[10px] md:text-xs font-sans rounded-full border border-plum/5"
                    >
                      {pill}
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
