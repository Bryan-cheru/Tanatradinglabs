'use client';

import { useEffect, useRef, useState } from 'react';

// Hook for triggering animations when element is in viewport
export function useInView(threshold = 0.1, once = true) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || !once)) {
          setIsInView(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && !once) {
          setIsInView(false);
        }
      },
      { threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  return { ref, isInView };
}

// Hook for counting up numbers
export function useCountUp(
  end: number, 
  start = 0, 
  duration = 2000, 
  delay = 0,
  isInView = true
) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) return;
    
    const timeout = setTimeout(() => {
      const steps = Math.ceil((end - start) / (duration / 16));
      
      const updateCount = () => {
        countRef.current += steps;
        
        if (
          (steps > 0 && countRef.current >= end) || 
          (steps < 0 && countRef.current <= end)
        ) {
          setCount(end);
          return;
        }
        
        setCount(countRef.current);
        timerRef.current = setTimeout(updateCount, 16);
      };
      
      updateCount();
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [end, start, duration, delay, isInView]);

  return count;
}

// Hook for typing text animation
export function useTypewriter(
  text: string,
  speed = 50,
  delay = 0,
  isInView = true
) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) return;
    
    const timeout = setTimeout(() => {
      setIsTyping(true);
      
      const typeChar = () => {
        if (indexRef.current < text.length) {
          setDisplayText(prev => prev + text.charAt(indexRef.current));
          indexRef.current += 1;
          timerRef.current = setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeChar();
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, speed, delay, isInView]);

  return { displayText, isTyping };
}

// Hook for staggered animations on child elements
export function useStaggered(
  count: number,
  staggerDelay = 100,
  baseDelay = 0,
  isInView = true
) {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;
    
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < count; i++) {
      const timer = setTimeout(() => {
        setVisibleIndices(prev => [...prev, i]);
      }, baseDelay + i * staggerDelay);
      
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [count, staggerDelay, baseDelay, isInView]);

  const isVisible = (index: number) => visibleIndices.includes(index);

  return { isVisible };
}

// Hook for parallax scrolling effect
export function useParallax(speed = 0.1) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const elementTop = ref.current.getBoundingClientRect().top + scrollY;
      const relativeScroll = scrollY - elementTop;
      
      setOffset(relativeScroll * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { ref, offset };
}

// Export all hooks as a single object
const animationHooks = {
  useInView,
  useCountUp,
  useTypewriter,
  useStaggered,
  useParallax
};

export default animationHooks;