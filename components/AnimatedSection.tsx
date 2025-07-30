import React, { forwardRef } from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  animationType?: 'fadeUp' | 'fade' | 'slideLeft' | 'slideRight';
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      className = '',
      threshold = 0.1,
      rootMargin = '0px',
      delay = 0,
      animationType = 'fadeUp',
      ...props
    },
    ref
  ) => {
    const { ref: scrollRef, isVisible } = useScrollObserver({ 
      threshold,
      rootMargin 
    });

    const animationClasses = {
      fadeUp: 'translate-y-8',
      fade: 'opacity-0',
      slideLeft: 'translate-x-8',
      slideRight: '-translate-x-8'
    };

    const animationResetClasses = {
      fadeUp: 'translate-y-0',
      fade: 'opacity-100',
      slideLeft: 'translate-x-0',
      slideRight: 'translate-x-0'
    };

    return (
      <section
        ref={ref || scrollRef}
        className={`transform transition-all duration-700 ease-in-out ${className} ${
          isVisible 
            ? `opacity-100 ${animationResetClasses[animationType]}` 
            : `opacity-0 ${animationClasses[animationType]}`
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;