'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedElement from '../components/animations/AnimatedElement';
import animationHooks from '../hooks/useAnimations';

export default function AnimationShowcase() {
  const { useInView, useCountUp, useTypewriter, useStaggered } = animationHooks;
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Demo section animations
  const section1 = useInView(0.1);
  const section2 = useInView(0.1);
  const section3 = useInView(0.1);
  const section4 = useInView(0.1);
  
  // Count up animation
  const count1 = useCountUp(97, 0, 2000, 0, section2.isInView);
  const count2 = useCountUp(500, 0, 2000, 300, section2.isInView);
  
  // Typewriter animation
  const { displayText } = useTypewriter(
    "Pioneering the future of algorithmic trading and intelligent betting applications.",
    50,
    0,
    section3.isInView
  );
  
  // Staggered animation
  const { isVisible } = useStaggered(6, 200, 0, section4.isInView);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 animate-tech-pattern opacity-20 z-0"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className={`text-gradient animate-text-glow mb-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              Animation Showcase
            </h1>
            <p className={`text-xl text-gray-300 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              Explore the modern, futuristic animations available for the TanatradingLabs website.
            </p>
          </div>
        </div>
      </section>
      
      {/* Basic Animations */}
      <section ref={section1.ref} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className={`text-2xl font-bold mb-12 text-center ${section1.isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Basic Animations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fade In */}
            <AnimatedElement animation="fade-in" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Fade In</h3>
              <p className="text-gray-300 mb-4">
                A subtle animation that fades an element into view.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="fade-in"&gt;
              </code>
            </AnimatedElement>
            
            {/* Slide Up */}
            <AnimatedElement animation="slide-up" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Slide Up</h3>
              <p className="text-gray-300 mb-4">
                Element slides up into position while fading in.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="slide-up"&gt;
              </code>
            </AnimatedElement>
            
            {/* Slide Down */}
            <AnimatedElement animation="slide-down" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Slide Down</h3>
              <p className="text-gray-300 mb-4">
                Element slides down into position while fading in.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="slide-down"&gt;
              </code>
            </AnimatedElement>
            
            {/* Slide Left */}
            <AnimatedElement animation="slide-left" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Slide Left</h3>
              <p className="text-gray-300 mb-4">
                Element slides in from the right while fading in.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="slide-left"&gt;
              </code>
            </AnimatedElement>
            
            {/* Slide Right */}
            <AnimatedElement animation="slide-right" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Slide Right</h3>
              <p className="text-gray-300 mb-4">
                Element slides in from the left while fading in.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="slide-right"&gt;
              </code>
            </AnimatedElement>
            
            {/* Scale Up */}
            <AnimatedElement animation="scale-up" className="card p-6">
              <h3 className="text-xl font-bold mb-4">Scale Up</h3>
              <p className="text-gray-300 mb-4">
                Element scales up from 75% to 100% while fading in.
              </p>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                &lt;AnimatedElement animation="scale-up"&gt;
              </code>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Continuous Animations */}
      <section ref={section2.ref} className="py-16 md:py-24 relative bg-slate-900/50">
        <div className="absolute inset-0 animate-tech-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <h2 className={`text-2xl font-bold mb-12 text-center ${section2.isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Continuous Animations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Float */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Float</h3>
              <p className="text-gray-300 mb-4">
                Creates a gentle floating motion, perfect for UI elements.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 animate-float"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-float"
              </code>
            </div>
            
            {/* Pulse */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Pulse</h3>
              <p className="text-gray-300 mb-4">
                Pulsating effect that subtly changes opacity.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse-slow"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-pulse-slow"
              </code>
            </div>
            
            {/* Glow */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Glow</h3>
              <p className="text-gray-300 mb-4">
                Creates a pulsating glow effect around an element.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 animate-glow"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-glow"
              </code>
            </div>
            
            {/* Rotating */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Rotate</h3>
              <p className="text-gray-300 mb-4">
                Continuous rotation animation, great for loading indicators.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 animate-rotate"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-rotate"
              </code>
            </div>
            
            {/* Border Glow */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Border Glow</h3>
              <p className="text-gray-300 mb-4">
                Animated glowing border effect.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-slate-800 animate-border-glow"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-border-glow"
              </code>
            </div>
            
            {/* Scanner Effect */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Scanner</h3>
              <p className="text-gray-300 mb-4">
                Futuristic scanning effect across an element.
              </p>
              <div className="flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-lg bg-slate-800 animate-scanner"></div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300">
                className="animate-scanner"
              </code>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Animations */}
      <section ref={section3.ref} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className={`text-2xl font-bold mb-12 text-center ${section3.isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Interactive Animations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Count Up */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Count Up</h3>
              <p className="text-gray-300 mb-4">
                Animated number counting effect, perfect for statistics.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{count1}%</div>
                  <p className="text-gray-400">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{count2}K+</div>
                  <p className="text-gray-400">Transactions</p>
                </div>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300 mt-6">
                const count = useCountUp(97, 0, 2000)
              </code>
            </div>
            
            {/* Typewriter */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Typewriter</h3>
              <p className="text-gray-300 mb-4">
                Text typing animation that reveals content character by character.
              </p>
              <div className="h-20 bg-slate-800 rounded-lg p-4 flex items-center mt-4">
                <p className="text-cyan-400">
                  {displayText}
                  <span className="animate-typing">|</span>
                </p>
              </div>
              <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300 mt-6">
                const {'{displayText}'} = useTypewriter("Text to type", 50)
              </code>
            </div>
          </div>
        </div>
      </section>
      
      {/* Staggered Animations */}
      <section ref={section4.ref} className="py-16 md:py-24 relative bg-slate-900/50">
        <div className="absolute inset-0 animate-tech-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <h2 className={`text-2xl font-bold mb-12 text-center ${section4.isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Staggered Animations
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-center mb-12">
              Elements appear one after another with a staggered delay.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-purple-600 to-pink-500' :
                    index % 3 === 1 ? 'from-cyan-500 to-blue-500' :
                    'from-emerald-500 to-green-500'
                  } flex items-center justify-center h-20 transition-all duration-500 ${
                    isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <span className="font-bold text-white">Item {index + 1}</span>
                </div>
              ))}
            </div>
            
            <code className="block bg-slate-800 p-2 rounded text-xs text-gray-300 mt-12 mx-auto max-w-lg">
              const {'{isVisible}'} = useStaggered(6, 200)<br />
              ...<br />
              {'{[0, 1, 2, 3, 4, 5].map((index) => ('}<br />
              &nbsp;&nbsp;&lt;div key={'{index}'} className={`${'{isVisible(index) ? "opacity-100" : "opacity-0"}'}`}&gt;<br />
              {'))}'}
            </code>
          </div>
        </div>
      </section>
      
      {/* Implementation Guide */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Implementation Guide</h2>
            
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">How to Use These Animations</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">1. Import the Required Components</h4>
                  <code className="block bg-slate-800 p-3 rounded text-xs text-gray-300">
                    import AnimatedElement from '@/components/animations/AnimatedElement';<br />
                    import animationHooks from '@/hooks/useAnimations';
                  </code>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">2. Basic Animations with AnimatedElement</h4>
                  <p className="text-gray-300 mb-2">
                    Wrap any element with the AnimatedElement component:
                  </p>
                  <code className="block bg-slate-800 p-3 rounded text-xs text-gray-300">
                    &lt;AnimatedElement<br />
                    &nbsp;&nbsp;animation="slide-up"<br />
                    &nbsp;&nbsp;delay={300}<br />
                    &nbsp;&nbsp;duration={800}<br />
                    &nbsp;&nbsp;className="card"<br />
                    &gt;<br />
                    &nbsp;&nbsp;&lt;h3&gt;Your content here&lt;/h3&gt;<br />
                    &lt;/AnimatedElement&gt;
                  </code>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">3. Using CSS Animation Classes</h4>
                  <p className="text-gray-300 mb-2">
                    Apply animation classes directly to elements:
                  </p>
                  <code className="block bg-slate-800 p-3 rounded text-xs text-gray-300">
                    &lt;div className="animate-float"&gt;Floating element&lt;/div&gt;
                  </code>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">4. Interactive Animations with Hooks</h4>
                  <p className="text-gray-300 mb-2">
                    Use the animation hooks for more interactive effects:
                  </p>
                  <code className="block bg-slate-800 p-3 rounded text-xs text-gray-300">
                    const {'{ useInView, useCountUp }'} = animationHooks;<br />
                    <br />
                    // In your component<br />
                    const section1 = useInView(0.1);<br />
                    const count = useCountUp(100, 0, 2000, 0, section1.isInView);<br />
                    <br />
                    return (<br />
                    &nbsp;&nbsp;&lt;div ref={'{section1.ref}'}&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{'{count}'}%&lt;/div&gt;<br />
                    &nbsp;&nbsp;&lt;/div&gt;<br />
                    );
                  </code>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/" 
                className="btn-primary inline-flex items-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}