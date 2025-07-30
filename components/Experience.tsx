import React from 'react';
import { EXPERIENCE_DATA } from '../data';
import AnimatedSection from './AnimatedSection';

const Experience: React.FC = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="experience">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
          Professional <span className="text-sky-500">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-16"></div>
        
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {EXPERIENCE_DATA.map((item, index) => {
              const isRightSide = index % 2 !== 0;
              const isLastItem = index === EXPERIENCE_DATA.length - 1;
              
              const contentBlock = (
                <div className={`md:w-1/2 ${isRightSide ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className={`relative pl-12 md:pl-0 ${isRightSide ? 'md-right' : 'md-left'}`}>
                    <div className="timeline-decorator group">
                      {/* Animated dot with pulse effect */}
                      <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500 transform -translate-x-2 md:-translate-x-1/2 z-10 group-hover:animate-pulse"></div>
                      
                      {/* Experience card */}
                      <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <p className="text-sm font-semibold text-sky-500 dark:text-sky-400">{item.company}</p>
                              {item.type === 'internship' && (
                                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 rounded-full">
                                  Internship
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">{item.role}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              {item.duration}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                            
                            {/* Key achievements */}
                            {item.achievements && (
                              <div className="mt-4 space-y-2">
                                {item.achievements.map((achievement, i) => (
                                  <div key={i} className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-2 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          {/* Company logo placeholder - replace with actual logos */}
                          <div className="ml-4 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600">
                            {item.logo ? (
                              <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-contain p-1" />
                            ) : (
                              <span className="text-xs font-medium text-slate-400">{item.company.charAt(0)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

              const spacerBlock = <div className="hidden md:block md:w-1/2"></div>;

              return (
                <div key={index} className={`flex md:items-center ${!isLastItem && 'md:mb-12'}`}>
                  {isRightSide ? (
                    <>
                      {spacerBlock}
                      {contentBlock}
                    </>
                  ) : (
                    <>
                      {contentBlock}
                      {spacerBlock}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;