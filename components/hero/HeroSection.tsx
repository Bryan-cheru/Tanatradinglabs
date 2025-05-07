'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, LineChart, MousePointer } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <div className={`absolute top-1/4 right-10 w-20 h-20 rounded-xl border border-purple-500/30 backdrop-blur-sm
                     transition-all duration-1000 delay-300 ${isVisible ? 'opacity-30' : 'opacity-0'} animate-float`}>
        <Code className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500" size={32} />
      </div>
      
      <div className={`absolute bottom-1/3 left-20 w-16 h-16 rounded-xl border border-cyan-400/30 backdrop-blur-sm
                     transition-all duration-1000 delay-500 ${isVisible ? 'opacity-30' : 'opacity-0'} animate-float`}
           style={{ animationDelay: '2s' }}>
        <LineChart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400" size={24} />
      </div>
      
      <div className={`absolute top-2/3 right-1/4 w-12 h-12 rounded-xl border border-pink-500/30 backdrop-blur-sm
                     transition-all duration-1000 delay-700 ${isVisible ? 'opacity-30' : 'opacity-0'} animate-float`}
           style={{ animationDelay: '1s' }}>
        <MousePointer className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500" size={20} />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-purple-500/30 mb-6">
                <span className="text-sm text-gray-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Next-gen software solutions
                </span>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-gradient glow">Revolutionary</span>
                <span className="block">Software Solutions for</span>
                <span className="block">Trading & Betting</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Pioneering the future of algorithmic trading and intelligent betting applications with cutting-edge technology and innovative strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center justify-center">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-r from-purple-500 to-pink-500"
                    ></div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-gray-300">Trusted by <span className="text-white font-semibold">500+</span> clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="lg:w-1/2">
            <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Main visual container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Core circle */}
                <div className="absolute inset-1/4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse-slow"></div>
                
                {/* Orbit rings */}
                <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full"></div>
                <div className="absolute inset-10 border border-cyan-400/30 rounded-full"></div>
                <div className="absolute inset-20 border border-pink-500/20 rounded-full"></div>
                
                {/* Floating elements on orbits */}
                <div className="absolute w-6 h-6 rounded-full bg-purple-500 top-10 left-1/2 transform -translate-x-1/2 animate-float"
                     style={{ animationDelay: '0s' }}></div>
                
                <div className="absolute w-4 h-4 rounded-full bg-cyan-400 top-1/2 right-10 transform -translate-y-1/2 animate-float"
                     style={{ animationDelay: '1s' }}></div>
                
                <div className="absolute w-5 h-5 rounded-full bg-pink-500 bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
                     style={{ animationDelay: '2s' }}></div>
                
                {/* Central element */}
                <div className="absolute inset-1/3 rounded-lg glass-effect flex items-center justify-center">
                  <div className="font-bold text-4xl text-gradient">TL</div>
                </div>
              </div>
              
              {/* Stats/features cards floating around */}
              <div className="absolute -top-10 -right-10 p-4 rounded-lg glass-effect w-40 transform rotate-6 animate-float"
                   style={{ animationDelay: '1.5s' }}>
                <div className="text-cyan-400 font-semibold">97%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 p-4 rounded-lg glass-effect w-48 transform -rotate-3 animate-float"
                   style={{ animationDelay: '0.8s', animationDuration: '7s' }}>
                <div className="text-purple-400 font-semibold">500K+</div>
                <div className="text-sm text-gray-300">Transactions Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}