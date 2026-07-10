import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { 
      id: 'hero', 
      label: '1. The Hero', 
      description: 'Student @ SCU, developer & designer.',
    },
    { 
      id: 'work', 
      label: '2. The Work', 
      description: 'Skills & featured projects (FaceNav, EcoScout).',
    },
    { 
      id: 'about', 
      label: '3. The Human', 
      description: 'Piano, volleyball, cozy developer details.',
    },
    { 
      id: 'resume', 
      label: '4. The Resume', 
      description: 'Credentials & direct email contact.',
    }
  ];

  // Track scroll progress of the viewport (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer Scroll Spy to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP VERTICAL TIMELINE SIDEBAR (md and up)                              */}
      {/* ========================================================================= */}
      <aside className="hidden md:flex flex-col justify-between w-[320px] h-screen fixed top-0 left-0 bg-bg-warm border-r border-plum/10 py-16 px-10 z-40 select-none">
        
        {/* Top: Branding logo */}
        <div className="space-y-1">
          <a 
            href="#hero" 
            className="font-serif text-3xl font-black tracking-tight text-plum hover:text-coral transition-colors duration-300 focus:outline-none"
            id="nav-sidebar-logo"
          >
            sunjana.b
          </a>
          <p className="text-[10px] uppercase tracking-widest text-ochre font-serif">
            Portfolio &bull; CSE @ SCU
          </p>
        </div>

        {/* Middle: Vertical Timeline Navigation */}
        <div className="relative flex flex-col space-y-12 pl-2 my-auto">
          
          {/* Vertical progress line running behind the nodes */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[3px] bg-plum/15 z-0 origin-top">
            {/* The progress fill indicator */}
            <div 
              className="w-full bg-gradient-to-b from-coral to-ochre transition-all duration-100 origin-top"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Timeline Nodes */}
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <div key={sec.id} className="relative flex items-start z-10">
                
                {/* Node circle */}
                <a 
                  href={`#${sec.id}`}
                  className="flex items-center justify-center focus:outline-none w-5 h-5 rounded-full mt-1.5 cursor-pointer"
                  aria-label={`Scroll to ${sec.label}`}
                >
                  <div 
                    className={`w-5 h-5 rounded-full border-[3px] border-plum transition-all duration-500 flex items-center justify-center ${
                      isActive 
                        ? 'bg-plum scale-110 shadow-[0_0_10px_rgba(140,49,91,0.25)]' 
                        : 'bg-bg-warm hover:bg-coral/20'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-bg-warm" />
                    )}
                  </div>
                </a>

                {/* Node Label & Description */}
                <div className="pl-5 space-y-1 flex flex-col text-left">
                  <a 
                    href={`#${sec.id}`}
                    className={`font-serif text-sm lg:text-base tracking-tight transition-all duration-300 ${
                      isActive ? 'text-plum font-bold' : 'text-ink/70 hover:text-plum'
                    }`}
                  >
                    {sec.label}
                  </a>
                  <span className="text-[10px] lg:text-[11px] text-ink/60 font-sans font-light leading-snug max-w-[200px]">
                    {sec.description}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom: Social links & Contact info */}
        <div className="space-y-6 pt-6 border-t border-plum/10">
          
          <div className="flex items-center space-x-5 text-ink/70">
            <a 
              href="https://github.com/sunbanwait" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-plum hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
              id="sidebar-social-github"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sunjana-banwait/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-plum hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
              id="sidebar-social-linkedin"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>

          <div className="space-y-1">
            <a 
              href="mailto:sbanwait@scu.edu" 
              className="block text-[11px] font-sans text-ink/60 hover:text-plum transition-colors duration-300"
            >
              sbanwait@scu.edu
            </a>
            <span className="block text-[10px] font-sans text-ink/40">
              Silicon Valley, CA
            </span>
          </div>

        </div>

      </aside>

      {/* ========================================================================= */}
      {/* MOBILE COMPACT HORIZONTAL TIMELINE DOCK (md down)                          */}
      {/* ========================================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-bg-warm/95 border-t border-plum/10 py-5 px-4 backdrop-blur-md shadow-2xl">
        <div className="max-w-md mx-auto relative flex flex-col items-center">
          
          {/* Horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[14px] h-[3px] bg-plum/15 z-0">
            <div 
              className="h-full bg-gradient-to-r from-coral to-ochre transition-all duration-100 origin-left"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Nodes */}
          <div className="w-full grid grid-cols-4 relative z-10">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              const sectionNumber = sec.label.split('.')[0];
              return (
                <div key={sec.id} className="flex flex-col items-center">
                  
                  {/* Circle */}
                  <a
                    href={`#${sec.id}`}
                    className="flex items-center justify-center focus:outline-none"
                    aria-label={`Scroll to ${sec.label}`}
                  >
                    <div 
                      className={`w-6 h-6 rounded-full border-[3px] border-plum transition-all duration-300 flex items-center justify-center ${
                        isActive ? 'bg-plum scale-105' : 'bg-bg-warm'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-bg-warm" />}
                    </div>
                  </a>

                  {/* Label */}
                  <a
                    href={`#${sec.id}`}
                    className={`mt-2 font-serif text-xs transition-all duration-300 ${
                      isActive ? 'text-plum font-bold' : 'text-ink/60'
                    }`}
                  >
                    {sectionNumber}. {sec.label.split(' ').slice(2).join(' ')}
                  </a>

                </div>
              );
            })}
          </div>

        </div>
      </nav>
    </>
  );
};
