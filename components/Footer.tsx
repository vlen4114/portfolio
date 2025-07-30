import React from 'react';
import { LinkedInIcon, GithubIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700/50">
      <div className="container mx-auto px-6 md:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Vasan Lennin. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/vasanlennin/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-500 transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/vlen4114" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-500 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="mailto:vasanlennin4114@gmail.com" 
              aria-label="Email"
              className="text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-500 transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
          
          {/* Optional Back to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-500 transition-colors hidden md:block"
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;