'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CTO, TradeFusion Inc.',
    avatar: '/images/testimonials/avatar-1.png', // Placeholder path
    rating: 5,
    text: 'TanatradingLabs has completely transformed our trading infrastructure. Their algorithmic strategies increased our ROI by 32% in just three months. The team\'s expertise and support are unmatched in the industry.',
    company: 'TradeFusion Inc.',
    companyLogo: '/images/clients/company-1.svg' // Placeholder path
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    position: 'Head of Analytics, BetWin Global',
    avatar: '/images/testimonials/avatar-2.png', // Placeholder path
    rating: 5,
    text: "The BetMaster AI platform has revolutionized how we approach sports betting analytics. The predictive accuracy exceeds anything we've used before, and the customizable dashboards allow our team to focus on what matters most.",
    company: 'BetWin Global',
    companyLogo: '/images/clients/company-2.svg' // Placeholder path
  },
  {
    id: 3,
    name: 'David Chen',
    position: 'Investment Director, Horizon Capital',
    avatar: '/images/testimonials/avatar-3.png', // Placeholder path
    rating: 5,
    text: 'We have implemented QuantTrader Pro across our entire trading division, and the results speak for themselves. The platforms ability to identify market opportunities and execute with precision has dramatically improved our performance.',
    company: 'Horizon Capital',
    companyLogo: '/images/clients/company-3.svg' // Placeholder path
  },
  {
    id: 4,
    name: 'Emma Rodriguez',
    position: 'CEO, Apex Betting Solutions',
    avatar: '/images/testimonials/avatar-4.png', // Placeholder path
    rating: 4,
    text: 'The team at TanatradingLabs delivered a custom betting application that perfectly aligned with our business requirements. Their technical expertise and understanding of the betting industry made them the ideal partner for our project.',
    company: 'Apex Betting Solutions',
    companyLogo: '/images/clients/company-4.svg' // Placeholder path
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating]);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">
            Hear from the companies that have partnered with us and experienced 
            the power of our software solutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-[400px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 card p-8
                            ${activeIndex === index 
                              ? 'opacity-100 translate-x-0 z-10' 
                              : index === (activeIndex - 1 + testimonials.length) % testimonials.length
                                ? 'opacity-0 -translate-x-full z-0' 
                                : index === (activeIndex + 1) % testimonials.length
                                  ? 'opacity-0 translate-x-full z-0'
                                  : 'opacity-0 z-0'}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Testimonial content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        <Quote size={32} className="text-purple-500 mr-3" />
                      </div>
                      
                      <p className="text-gray-300 text-lg italic mb-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < testimonial.rating ? 'text-amber-400' : 'text-gray-600'} mr-1`}
                            fill={i < testimonial.rating ? '#fbbf24' : 'none'}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Author info */}
                    <div className="md:w-1/3 flex flex-col items-center md:items-end">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 overflow-hidden">
                        {/* Placeholder for avatar */}
                        <div className="w-full h-full bg-slate-700 flex items-center justify-center text-lg font-bold text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm mb-4 text-center md:text-right">{testimonial.position}</p>
                      
                      <div className="w-24 h-12 rounded-md glass-effect p-2 flex items-center justify-center">
                        {/* Placeholder for company logo */}
                        <span className="text-sm font-medium text-gray-300">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full
                       bg-slate-800/80 border border-gray-700 flex items-center justify-center
                       text-gray-300 hover:text-white transition-colors z-20"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full
                       bg-slate-800/80 border border-gray-700 flex items-center justify-center
                       text-gray-300 hover:text-white transition-colors z-20"
              onClick={nextTestimonial}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300
                          ${activeIndex === index 
                            ? 'bg-cyan-400 w-6' 
                            : 'bg-gray-600 hover:bg-gray-500'}`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => {
                    setIsAnimating(false);
                  }, 500);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}