'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  animation: 
    | 'fade-in' 
    | 'slide-up' 
    | 'slide-down' 
    | 'slide-left' 
    | 'slide-right' 
    | 'scale-up' 
    | 'rotate-in'
    | 'bounce'
    | 'pulse'
    | 'float';
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  threshold?: number; // intersection threshold (0 to 1)
  once?: boolean; // animate only once
  className?: string; // additional classNames
}

export default function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  once = true,
  className = ''
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || !once)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!entry.isIntersecting && !once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold, once, hasAnimated]);
  
  // Animation classes
  const animationClasses = {
    'fade-in': `transition-opacity duration-[${duration}ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    'slide-up': `transition-all duration-[${duration}ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`,
    'slide-down': `transition-all duration-[${duration}ms] transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`,
    'slide-left': `transition-all duration-[${duration}ms] transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`,
    'slide-right': `transition-all duration-[${duration}ms] transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`,
    'scale-up': `transition-all duration-[${duration}ms] transform ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`,
    'rotate-in': `transition-all duration-[${duration}ms] transform ${isVisible ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`,
    'bounce': `${isVisible ? 'animate-bounce' : 'opacity-0'}`,
    'pulse': `${isVisible ? 'animate-pulse' : 'opacity-0'}`,
    'float': `${isVisible ? 'animate-float' : 'opacity-0'}`,
  };
  
  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${className}`}
      style={{ 
        animationDuration: animation === 'bounce' || animation === 'pulse' || animation === 'float' 
          ? `${duration}ms` 
          : undefined 
      }}
    >
      {children}
    </div>
  );
}