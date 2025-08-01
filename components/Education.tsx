import React from 'react';
import AnimatedSection from './AnimatedSection';

const EDUCATION_DATA = [
  {
    level: 'Under Graduation',
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech Computer Science Engineering (AI/ML)',
    duration: 'Expected May 2026',
    grade: 'CGPA: 9.61',
    description: 'Specializing in Artificial Intelligence and Machine Learning. Coursework includes Data Structures, Algorithms, Machine Learning, Deep Learning, and Cloud Computing.',
    logo: '/logos/srm.png',
    website: 'https://www.srmist.edu.in/'
  },
  {
    level: 'Senior Secondary',
    institution: 'The PSBB Millennium School',
    degree: 'CBSE - PCM with Computer Science',
    duration: 'July 2022',
    grade: 'Percentage: 86.00%',
    description: 'Focus on Physics, Chemistry, Mathematics with Computer Science. Active participant in science fairs and coding competitions.',
    logo: '/logos/psbb.png',
    website: 'https://www.psbbmillenniumschool.org/'
  },
  {
    level: 'Secondary',
    institution: 'The PSBB Millennium School',
    degree: 'CBSE',
    duration: 'July 2020',
    grade: 'Percentage: 90.20%',
    description: 'Science, Standard Mathematics, Social Science, English and Tamil. NCC Cadet.',
    logo: '/logos/psbb.png',
    website: 'https://www.psbbmillenniumschool.org/'
  }
];

const Education: React.FC = () => {
  const handleLogoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="education">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
          Academic <span className="text-sky-500">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-16"></div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {EDUCATION_DATA.map((edu, index) => {
              const isRightSide = index % 2 !== 0;
              const isLastItem = index === EDUCATION_DATA.length - 1;
              
              const contentBlock = (
                <div className={`md:w-1/2 ${isRightSide ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className={`relative pl-12 md:pl-0 ${isRightSide ? 'md-right' : 'md-left'}`}>
                    {/* Timeline decorator */}
                    <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500 transform -translate-x-2 md:-translate-x-1/2 z-10"></div>
                    
                    {/* Education card */}
                    <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start">
                        {/* Institution logo with zoom and click effect */}
                        <div 
                          onClick={() => handleLogoClick(edu.website)}
                          className="mr-4 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600 
                                    transition-transform duration-300 hover:scale-110 hover:shadow-md cursor-pointer"
                          title={`Visit ${edu.institution} website`}
                        >
                          {edu.logo ? (
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`} 
                              className="w-full h-full object-contain p-1 hover:scale-105 transition-transform duration-200"
                            />
                          ) : (
                            <span className="text-xs font-medium text-slate-400">{edu.institution.charAt(0)}</span>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          {/* Added degree level in blue */}
                          <p className="text-sm font-medium text-sky-500 dark:text-sky-400 mb-1">
                            {edu.level}
                          </p>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{edu.institution}</h3>
                          <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">{edu.degree}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 px-2 py-1 rounded-full">
                              {edu.grade}
                            </span>
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                              {edu.duration}
                            </span>
                          </div>
                          <p className="mt-3 text-slate-600 dark:text-slate-400">{edu.description}</p>
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

export default Education;