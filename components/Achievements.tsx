import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data';
import AnimatedSection from './AnimatedSection';

const Achievements: React.FC = () => {
    return (
        <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="achievements">
            <div className="container mx-auto px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
                    <span className="text-sky-500">Achievements</span> & Recognition
                </h2>
                <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-12"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {ACHIEVEMENTS_DATA.map((achievement, index) => (
                        <div 
                            key={index} 
                            className="relative bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Gradient background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Medal icon with shine effect */}
                            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-sky-100/50 dark:bg-sky-900/30 flex items-center justify-center">
                                <svg 
                                    className="w-6 h-6 text-sky-500" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5"
                                >
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path d="M12 15v5m4-7l1 3m-9-3l-1 3m4-13V4M6.2 7.8L5 6m13.8 1.8L19 6m-7-.2l-1-3m4 3l1-3m-8 5l-3-1m5 8l-3 1m8-5l3-1m-5 8l3 1" />
                                </svg>
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-sky-500 mr-3"></span>
                                    {achievement.title}
                                </h3>
                                <p className="mt-3 text-slate-600 dark:text-slate-400 pl-6 border-l-2 border-sky-500/30">
                                    {achievement.description}
                                </p>
                                
                                {/* Achievement metadata */}
                                {achievement.date && (
                                    <div className="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-500">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        {achievement.date}
                                    </div>
                                )}
                                
                                {achievement.prize && (
                                    <div className="mt-2 flex items-center text-sm text-slate-500 dark:text-slate-500">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {achievement.prize}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Achievements;