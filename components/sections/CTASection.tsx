'use client';

import Link from 'next/link';
import { ArrowRight, MessageSquare, Calendar, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="card border border-gray-700/50 overflow-hidden relative">
            {/* Background glow effects */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Content */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to <span className="text-gradient">revolutionize</span> your trading and betting strategies?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Get in touch with our team of experts to discuss how our 
                    cutting-edge software solutions can give you the competitive edge.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact options */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                    bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Send a Message</h4>
                        <p className="text-gray-400 text-sm">Get a response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                    bg-gradient-to-r from-cyan-500 to-blue-500 mr-4">
                        <Calendar size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Book a Demo</h4>
                        <p className="text-gray-400 text-sm">See our solutions in action</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                    bg-gradient-to-r from-emerald-500 to-green-500 mr-4">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Call Us</h4>
                        <p className="text-gray-400 text-sm">Speak with an expert</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="glass-effect p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-6">Get Started</h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                   text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                   text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="interest" className="block text-gray-300 text-sm mb-2">I'm interested in</label>
                        <select 
                          id="interest" 
                          className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                   text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select an option</option>
                          <option value="trading">Trading Strategies</option>
                          <option value="betting">Betting Applications</option>
                          <option value="financial">Financial Analysis</option>
                          <option value="custom">Custom Software</option>
                        </select>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="w-full btn-primary bg-gradient-to-r from-purple-600 to-blue-500"
                        >
                          Contact Us
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional links */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <span className="text-gray-400">
              Looking for more information?
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center">
                FAQs
                <ArrowRight size={14} className="ml-1" />
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Case Studies
                <ArrowRight size={14} className="ml-1" />
              </Link>
              <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Documentation
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}