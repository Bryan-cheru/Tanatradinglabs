'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, BarChart2, Users } from 'lucide-react';

const products = [
  {
    id: 'quant-trader-pro',
    title: 'QuantTrader Pro',
    category: 'Trading Platform',
    rating: 4.9,
    users: '12K+',
    image: '/images/products/quant-trader.png', // This would be a placeholder image path
    description: 'Advanced algorithmic trading platform with AI-powered market analysis and automated execution.',
    features: [
      'Real-time market data integration',
      'Customizable trading algorithms',
      'Backtesting capabilities',
      'Risk management tools',
      'Performance analytics dashboard'
    ],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'bet-master-ai',
    title: 'BetMaster AI',
    category: 'Betting Application',
    rating: 4.8,
    users: '8K+',
    image: '/images/products/bet-master.png', // This would be a placeholder image path
    description: 'Intelligent betting platform that leverages machine learning to predict outcomes and optimize bets.',
    features: [
      'Predictive analytics engine',
      'Odds comparison across platforms',
      'Automated betting strategies',
      'Risk assessment tools',
      'Historical performance tracking'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'finviz-analytics',
    title: 'FinViz Analytics',
    category: 'Financial Analytics',
    rating: 4.7,
    users: '5K+',
    image: '/images/products/finviz.png', // This would be a placeholder image path
    description: 'Comprehensive financial visualization and analysis suite for traders and financial professionals.',
    features: [
      'Interactive data visualizations',
      'Pattern recognition algorithms',
      'Market sentiment analysis',
      'Customizable reporting',
      'Portfolio performance tracking'
    ],
    color: 'from-emerald-500 to-green-400'
  }
];

export default function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  
  return (
    <section className="py-24 relative overflow-hidden" id="products">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-32 -left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">Featured Products</h2>
          <p className="text-gray-300 text-lg">
            Our flagship software solutions designed to give you the competitive edge 
            in trading and betting markets.
          </p>
        </div>
        
        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {products.map((product) => (
            <button
              key={product.id}
              className={`px-6 py-3 rounded-full transition-all duration-300
                        ${activeProduct === product.id 
                          ? 'bg-gradient-to-r ' + product.color + ' text-white shadow-lg shadow-' + product.color.split('-')[1] + '-500/20' 
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800'}`}
              onClick={() => setActiveProduct(product.id)}
            >
              {product.title}
            </button>
          ))}
        </div>
        
        {/* Product Display */}
        <div className="relative min-h-[500px]">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`transition-all duration-500 transform absolute inset-0
                        ${activeProduct === product.id 
                          ? 'opacity-100 translate-y-0 z-10' 
                          : 'opacity-0 translate-y-10 -z-10'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Product image */}
                <div className="order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-effect p-1">
                    {/* Here we would normally use the product image, but for this prototype we'll use a placeholder */}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-r ${product.color} opacity-30`}></div>
                    
                    {/* Product UI mockup (placeholder) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 rounded-lg glass-effect border border-gray-700 p-4">
                        {/* Chart visualization mockup */}
                        <div className="h-1/2 mb-4 relative overflow-hidden rounded-md bg-slate-900/80">
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-1/4">
                            {/* Fake chart line */}
                            <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                              <path 
                                d="M0,10 Q10,5 20,10 T40,10 T60,5 T80,15 T100,10" 
                                fill="none" 
                                stroke="rgb(34, 211, 238)" 
                                strokeWidth="0.5"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Mock UI elements */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-800/80 rounded-md p-2">
                            <div className="w-full h-2 bg-slate-700 rounded-full mb-1"></div>
                            <div className="w-2/3 h-2 bg-slate-700 rounded-full"></div>
                          </div>
                          <div className="bg-slate-800/80 rounded-md p-2">
                            <div className="w-full h-2 bg-slate-700 rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-slate-700 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 border border-gray-700 text-xs text-white">
                      {product.category}
                    </div>
                  </div>
                </div>
                
                {/* Right side - Product details */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{product.title}</h3>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Star size={16} className="text-amber-400 mr-1" fill="#fbbf24" />
                        <span className="text-white font-medium">{product.rating}</span>
                        <span className="text-gray-400 text-sm ml-1">/ 5.0</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Users size={16} className="text-purple-400 mr-1" />
                        <span className="text-white font-medium">{product.users}</span>
                        <span className="text-gray-400 text-sm ml-1">users</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300">{product.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-white font-medium">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${product.color} mr-3 mt-1 flex-shrink-0`}></div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 flex space-x-4">
                      <Link 
                        href={`/products/${product.id}`}
                        className={`btn-primary bg-gradient-to-r ${product.color}`}
                      >
                        Learn More
                      </Link>
                      
                      <Link 
                        href="/contact"
                        className="btn-secondary"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products link */}
        <div className="text-center mt-16">
          <Link 
            href="/products"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}