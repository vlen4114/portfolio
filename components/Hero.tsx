import React from 'react';
import { LinkedInIcon, GithubIcon, DownloadIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <AnimatedSection 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated tech background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-float-delay"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] [background-size:40px_40px] dark:bg-[url('/grid-pattern-dark.svg')] opacity-10 dark:opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-16 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">Vasan Lennin</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0">
              AI/ML Specialist | Cloud-Native Developer | Full-Stack Engineer
            </p>
            
            {/* Achievement badge */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="inline-flex items-center bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                CGPA: 9.61
              </span>
              <span className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                1x Hackathon Winner
              </span>
            </div>

            {/* Social and CTA */}
            <div className="mt-8 flex justify-center md:justify-start items-center space-x-6">
              <a href="https://www.linkedin.com/in/vasanlennin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-500 transition-colors hover:-translate-y-1">
                <LinkedInIcon className="w-8 h-8"/>
              </a>
              <a href="https://github.com/vlen4114" target="_blank" rel="noopener noreferrer" aria-label="Github"
                 className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-500 transition-colors hover:-translate-y-1">
                <GithubIcon className="w-8 h-8"/>
              </a>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact"
                 className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-md px-8 py-3 text-lg transition-all transform hover:scale-105 shadow-lg shadow-sky-500/20">
                Get In Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1blvsGVfH830F3VOf8Kh0NDpz3My1_4Pu" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-md px-8 py-3 text-lg transition-all">
                <DownloadIcon className="w-5 h-5 mr-2"/>
                Download CV
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-shrink-0 relative group">
            <div className="relative w-64 h-64 md:w-80 md:h-80 p-1.5 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 shadow-xl animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900">
                <img src="/vas.png" alt="Vasan Lennin" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating tech badges around the image */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-md border border-slate-200 dark:border-slate-700 group-hover:animate-pulse">
              <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">AI/ML</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-md border border-slate-200 dark:border-slate-700 group-hover:animate-pulse">
              <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;