import React from 'react';
import type { Theme } from '../types';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navLinks = ['Experience', 'Projects', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="container mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-500 transition-colors"
          aria-label="Home"
        >
          Vasan Lennin
        </a>
        
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-500 transition-colors font-medium relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-slate-900/95 backdrop-blur-lg">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-500 transition-colors font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;