'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Code2, 
  Database, 
  LineChart, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'trading-strategies',
    title: 'Trading Strategies',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
    description: 'Advanced algorithmic trading strategies powered by AI and machine learning for maximum market performance.',
    features: [
      'Algorithmic trading systems',
      'Risk management protocols',
      'Market analysis tools',
      'Custom indicators',
      'Backtesting frameworks'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'betting-applications',
    title: 'Betting Applications',
    icon: <Target size={24} className="text-purple-500" />,
    description: 'Cutting-edge betting platforms with intelligent odds calculation and risk assessment for optimal results.',
    features: [
      'Odds optimization engines',
      'Real-time market data',
      'Statistical analysis models',
      'User engagement features',
      'Risk calculation systems'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis',
    icon: <BarChart3 size={24} className="text-emerald-400" />,
    description: 'Deep financial insights through advanced data analysis and visualization techniques.',
    features: [
      'Predictive market modeling',
      'Investment portfolio analysis',
      'Economic trend forecasting',
      'Performance tracking',
      'Comparative benchmark analysis'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: <Code2 size={24} className="text-amber-400" />,
    description: 'Bespoke software solutions tailored to your specific business requirements and technical specifications.',
    features: [
      'Custom web applications',
      'Mobile app development',
      'Desktop software solutions',
      'Backend systems',
      'API development'
    ],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    icon: <Database size={24} className="text-pink-400" />,
    description: 'Seamless API integration with third-party services and platforms to enhance your system capabilities.',
    features: [
      'Financial data APIs',
      'Payment gateway integration',
      'Authentication systems',
      'Cloud service connections',
      'Custom API development'
    ],
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: <LineChart size={24} className="text-blue-400" />,
    description: 'Transform raw data into meaningful insights with our advanced analytics and visualization solutions.',
    features: [
      'Big data processing',
      'Machine learning models',
      'Predictive analytics',
      'Interactive dashboards',
      'Automated reporting'
    ],
    color: 'from-blue-500 to-indigo-500'
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  
  return (
    <section className="py-24 relative" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">Our Services</h2>
          <p className="text-gray-300 text-lg">
            We provide cutting-edge software solutions for trading and betting markets, 
            powered by advanced algorithms and data analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Services tabs */}
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center
                          ${activeService === service.id 
                            ? 'bg-slate-800/70 border border-gray-700 shadow-lg' 
                            : 'bg-slate-900/30 hover:bg-slate-800/50'}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className={`mr-4 w-10 h-10 rounded-lg flex items-center justify-center
                               bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`font-medium ${activeService === service.id ? 'text-white' : 'text-gray-300'}`}>
                    {service.title}
                  </h3>
                </div>
                {activeService === service.id && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Right side - Active service details */}
          <div>
            {services.map((service) => (
              <div 
                key={service.id}
                className={`transition-all duration-500 transform
                           ${activeService === service.id 
                             ? 'opacity-100 translate-x-0' 
                             : 'opacity-0 translate-x-10 absolute pointer-events-none'}`}
              >
                <div className="card p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                                 bg-gradient-to-r ${service.color} mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-white transition-colors"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}