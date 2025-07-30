import React from 'react';
import { SKILLS_DATA } from '../data';
import AnimatedSection from './AnimatedSection';

const proficiencyLevels: Record<string, number> = {
  // AI & Machine Learning
  'Python': 95, 'Pandas': 90, 'NumPy': 85, 'NLP': 80, 'LLMs': 75,
  // Web & Software Development
  'React.js': 85, 'Node.js': 80, 'Next.js': 75, 'Flask': 85, 'JavaScript': 90, 'HTML/CSS': 95,
  // DevOps & Cloud
  'Docker': 85, 'Kubernetes': 80, 'AWS (EKS, ECR)': 75, 'Jenkins': 70,
  // CRM & SaaS
  'Salesforce Platform': 85
};

const Skills: React.FC = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="skills">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
          My <span className="text-sky-500">Technical</span> Expertise
        </h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div 
              key={category} 
              className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  {category}
                </h3>
                <div className="ml-auto w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center">
                        <svg className="w-4 h-4 mr-2 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {skill}
                      </span>
                      <span className="text-xs font-bold text-sky-500">
                        {proficiencyLevels[skill] || 80}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: '0%',
                          animation: `skill-progress 1s ease-out forwards`,
                          animationDelay: `${Math.random() * 0.5}s`,
                          '--target-width': `${proficiencyLevels[skill] || 80}%`
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;