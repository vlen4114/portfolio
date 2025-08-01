
export const SKILLS_DATA = {
  'AI & Machine Learning': ['Python', 'Pandas', 'NumPy', 'NLP', 'LLMs'],
  'Web & Software Development': ['React.js', 'Node.js', 'Next.js', 'Flask', 'JavaScript', 'HTML/CSS'],
  'DevOps & Cloud': ['Docker', 'Kubernetes', 'AWS (EKS, ECR)', 'Jenkins'],
  'CRM & SaaS': ['Salesforce Platform'],
};

export const EXPERIENCE_DATA = [
  {
    company: 'Techforce',
    role: 'Salesforce Administrator Trainee',
    type: 'internship',
    duration: 'Aug 2024 - Nov 2024',
    description: 'Developed a complete Employee Onboarding System on the Salesforce platform as part of a 12-week intensive program.',
    logo: '/public/logos/techforce-logo.png'
  },
  {
    company: 'IDS e Solutions Pvt Ltd',
    role: 'Full Stack Developer Intern',
    duration: 'Jun 2024 - Aug 2024',
    type: 'internship',
    description: 'Led development of a secure, role-based CRM portal, enhancing operational efficiency across five company branches.',
    achievements: [
      'Built secure role-based access workflows for CRM portal',
      'Automated critical reporting workflows',
      'Integrated automated mailing system for branch operations'
    ],
    logo: '/public/logos/ids-logo.png'
  },
  {
    company: 'Intel Corporation',
    role: 'Industrial Trainee',
    type: 'training',
    duration: 'May 2024 - Jul 2024',
    description: 'Contributed to AI/ML projects in healthcare analytics domain.',
    achievements: [
      'Conducted EDA on medical datasets for disease prediction insights',
      'Fine-tuned Llama 2 7b achieving 92% prediction accuracy',
      'Partnered with cross-functional teams to translate findings into recommendations'
    ],
    logo: '/public/logos/intel-logo.png' // Add actual path
  },
];

export const PROJECTS_DATA = [
  {
    title: 'Cloud Native Monitoring Dashboard',
    type: 'DevOps',
    description: 'Real-time system monitoring dashboard with alert triggers for critical states',
    image: '/public/projects/sys-dash.png',
    tags: ['Flask', 'AWS EKS', 'Docker', 'Kubernetes', 'Plotly'],
    metrics: [
      'Real-time CPU/memory/disk monitoring',
      'Alert triggers for critical system states',
      'Deployed on scalable AWS EKS cluster'
    ],
    github: 'https://github.com/vlen4114/system-monitoring-dashboard'
  },
  {
    title: 'Samvidhan AI - Legal Chatbot',
    type: 'AI/ML',
    description: 'NLP-powered chatbot for automating legal document drafting',
    image: '/public/projects/samvidhan.png',
    tags: ['Python', 'NLP', 'LLMs', 'Legal Tech'],
    metrics: [
      'Automated contract generation',
      'Reduced legal document creation time by 70%',
      'Customizable templates for small businesses'
    ],
    github: 'https://github.com/yourusername/legal-chatbot'
  },
  {
    title: 'Human-Machine Interface for SRM AI Lab',
    type: 'Web Development',
    description: 'Interactive dashboard for real-time sensor data visualization',
    image: '/public/projects/rasp.jpeg',
    tags: ['Next.js', 'Firebase', 'IoT', 'Raspberry Pi'],
    metrics: [
      'Real-time visualization of sensor data',
      'Automatic device detection system',
      'Used by 50+ students in AI lab'
    ],
    github: 'https://github.com/yourusername/hmi-dashboard',
    demo: 'https://hmi-demo.example.com'
  },
  {
    title: 'Dark Patterns Recognizer',
    type: 'Browser Extension',
    description: 'ML-powered detection of deceptive design in e-commerce',
    image: '/public/projects/dp.png',
    tags: ['Machine Learning', 'JavaScript', 'Browser API'],
    metrics: [
      '89% accuracy in pattern detection',
      'Featured in national hackathon',
      '10,000+ test cases analyzed'
    ],
    github: 'https://github.com/yourusername/dark-patterns'
  }
];

export const ACHIEVEMENTS_DATA = [
  {
      title: '2nd Runner Up, Appizap Hackathon 2024',
      description: 'Developed an Human Machine Interface(HMI) using Appizap platform(No code - low code) that impressed judges with its technical sophistication and real-world applicability',
      date: 'Oct 2024',
      prize: 'Cash Prize: 1100 AED (~25,000 INR)'
  },
  {
      title: 'Finalist, Dark Patterns Buster Hackathon \'23',
      description: 'National-level event organized by Ministry of Consumer Affairs, Government of India & IIT (BHU) to combat deceptive design practices in e-commerce',
      date: 'Feb 2024',
      prize: 'Top 150 among 3000+ teams'
  },
  // Add more achievements as needed
];