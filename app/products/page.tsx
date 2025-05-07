import Link from 'next/link';
import { Star, CheckCircle, BarChart2, Users, ArrowRight } from 'lucide-react';

// Product data
const products = [
  {
    id: 'quant-trader-pro',
    title: 'QuantTrader Pro',
    category: 'Trading Platform',
    rating: 4.9,
    users: '12K+',
    image: '/images/products/quant-trader.png', // This would be a placeholder image path
    description: 'Advanced algorithmic trading platform with AI-powered market analysis and automated execution.',
    longDescription: 'QuantTrader Pro is our flagship trading platform that combines cutting-edge AI technologies with robust execution capabilities. Designed for professional traders and financial institutions, it offers unparalleled market analysis, real-time data processing, and automated trading strategies to give you a competitive edge in today\'s dynamic markets.',
    features: [
      'Real-time market data integration',
      'Customizable trading algorithms',
      'Backtesting capabilities',
      'Risk management tools',
      'Performance analytics dashboard',
      'Multi-market support',
      'API connectivity',
      'Automated execution',
      'Custom indicator development',
      'Machine learning signals'
    ],
    benefits: [
      'Increase trading efficiency with automation',
      'Make data-driven decisions with advanced analytics',
      'Reduce emotional bias in trading',
      'Identify market opportunities faster',
      'Manage risk more effectively'
    ],
    pricing: [
      {
        plan: 'Standard',
        price: '$499',
        period: 'per month',
        features: [
          'Real-time market data',
          'Basic algorithmic trading',
          'Standard backtesting',
          'Limited technical indicators',
          'Email support'
        ]
      },
      {
        plan: 'Professional',
        price: '$999',
        period: 'per month',
        features: [
          'All Standard features',
          'Advanced algorithmic trading',
          'Comprehensive backtesting',
          'All technical indicators',
          'Custom indicator development',
          'Risk management suite',
          'Priority support'
        ],
        recommended: true
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: [
          'All Professional features',
          'Dedicated account manager',
          'Custom algorithm development',
          'Private API access',
          'Integration support',
          'On-premise deployment option',
          '24/7 premium support'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'QuantTrader Pro has revolutionized our trading operations. The automated strategies and risk management tools have increased our returns by 32% while reducing operational overhead.',
        author: 'John Smith',
        position: 'CTO, TradeFusion Inc.'
      },
      {
        quote: 'The backtesting capabilities alone are worth the investment. We\'ve been able to refine our strategies with unprecedented precision.',
        author: 'Sarah Johnson',
        position: 'Head of Trading, Apex Capital'
      }
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
    longDescription: 'BetMaster AI is a cutting-edge betting platform that uses advanced machine learning algorithms to analyze historical data, predict outcomes, and optimize betting strategies. Perfect for sports betting professionals and betting companies looking to enhance their prediction accuracy and minimize risk.',
    features: [
      'Predictive analytics engine',
      'Odds comparison across platforms',
      'Automated betting strategies',
      'Risk assessment tools',
      'Historical performance tracking',
      'Multi-sport coverage',
      'Real-time market monitoring',
      'Customizable prediction models',
      'Portfolio optimization',
      'Variance analysis'
    ],
    benefits: [
      'Make more accurate betting predictions',
      'Optimize betting strategies in real-time',
      'Diversify across multiple markets efficiently',
      'Track performance with detailed analytics',
      'Manage risk more effectively'
    ],
    pricing: [
      {
        plan: 'Starter',
        price: '$299',
        period: 'per month',
        features: [
          'Basic predictive analytics',
          'Limited sports coverage',
          'Manual betting recommendation',
          'Performance tracking',
          'Email support'
        ]
      },
      {
        plan: 'Advanced',
        price: '$699',
        period: 'per month',
        features: [
          'All Starter features',
          'Advanced predictive analytics',
          'Comprehensive sports coverage',
          'Automated betting recommendations',
          'Risk assessment tools',
          'Historical data analysis',
          'Priority support'
        ],
        recommended: true
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: [
          'All Advanced features',
          'Custom prediction models',
          'Dedicated account manager',
          'API access',
          'Integration support',
          'Private model training',
          '24/7 premium support'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'BetMaster AI has transformed how we approach sports betting. The predictive accuracy is remarkable, giving us a significant edge in the market.',
        author: 'Michael Chen',
        position: 'Director of Analytics, BetWin Global'
      },
      {
        quote: 'The platform\'s ability to analyze patterns across multiple sports simultaneously has opened up new opportunities we never would have identified manually.',
        author: 'Emily Rodriguez',
        position: 'CEO, SportsBet Pro'
      }
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
    longDescription: 'FinViz Analytics is a powerful financial visualization platform designed to help traders, investors, and financial analysts make sense of complex market data. With interactive charts, customizable dashboards, and advanced pattern recognition algorithms, FinViz transforms raw data into actionable insights.',
    features: [
      'Interactive data visualizations',
      'Pattern recognition algorithms',
      'Market sentiment analysis',
      'Customizable reporting',
      'Portfolio performance tracking',
      'Real-time data integration',
      'Correlation analysis',
      'Sector rotation tracking',
      'Economic indicator dashboards',
      'Export and sharing capabilities'
    ],
    benefits: [
      'Identify market patterns and trends quickly',
      'Visualize complex financial data intuitively',
      'Make more informed investment decisions',
      'Monitor portfolio performance in real-time',
      'Communicate insights effectively with stakeholders'
    ],
    pricing: [
      {
        plan: 'Basic',
        price: '$199',
        period: 'per month',
        features: [
          'Basic visualizations',
          'Limited data sources',
          'Standard dashboards',
          'Daily data updates',
          'Email support'
        ]
      },
      {
        plan: 'Premium',
        price: '$499',
        period: 'per month',
        features: [
          'All Basic features',
          'Advanced visualizations',
          'Multiple data sources',
          'Custom dashboards',
          'Real-time data updates',
          'Pattern recognition',
          'Priority support'
        ],
        recommended: true
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: [
          'All Premium features',
          'Dedicated account manager',
          'API access',
          'Custom visualization development',
          'Integration with proprietary data',
          'White-labeling options',
          '24/7 premium support'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'FinViz Analytics has become an indispensable tool for our research team. The visualization capabilities have drastically improved our ability to identify opportunities in the market.',
        author: 'Robert Yang',
        position: 'Research Director, Global Investments Ltd.'
      },
      {
        quote: 'The pattern recognition algorithms in FinViz have helped us identify market trends weeks before they become apparent to others. This edge has been invaluable.',
        author: 'Jennifer Park',
        position: 'Portfolio Manager, Horizon Capital'
      }
    ],
    color: 'from-emerald-500 to-green-400'
  }
];

export default function ProductsPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-gradient mb-6">Our Products</h1>
            <p className="text-xl text-gray-300">
              Cutting-edge software solutions designed to give you the competitive edge 
              in trading and betting markets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Showcase */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          id={product.id} 
          className={`py-16 md:py-24 relative ${index % 2 === 1 ? 'bg-slate-900/50' : ''}`}
        >
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              {/* Product Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Product Image/Visual */}
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect p-1">
                    {/* Product UI mockup (placeholder) */}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-r ${product.color} opacity-30`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 rounded-lg glass-effect border border-gray-700 p-4">
                        {/* Mock UI elements */}
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
                
                {/* Product Info */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    
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
                    
                    <p className="text-xl text-gray-300">{product.longDescription}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${product.color} mr-3 mt-1 flex-shrink-0`}></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 flex space-x-4">
                      <Link 
                        href={`#${product.id}-details`}
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
              
              {/* Product Details */}
              <div id={`${product.id}-details`}>
                {/* Benefits */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8">Why Choose {product.title}?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="card p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} mb-4 flex items-center justify-center`}>
                          <CheckCircle size={24} className="text-white" />
                        </div>
                        <p className="text-lg text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8">Pricing Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {product.pricing.map((plan, idx) => (
                      <div 
                        key={idx} 
                        className={`card p-6 relative overflow-hidden ${plan.recommended ? 'border-purple-500' : ''}`}
                      >
                        {plan.recommended && (
                          <div className="absolute top-0 right-0">
                            <div className="bg-purple-500 text-white text-xs px-4 py-1 rounded-bl-lg">
                              Recommended
                            </div>
                          </div>
                        )}
                        
                        <h4 className="text-xl font-bold mb-2">{plan.plan}</h4>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-400"> {plan.period}</span>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start">
                              <CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          href="/contact" 
                          className={`block text-center py-3 px-4 rounded-lg border transition-all
                                    ${plan.recommended 
                                      ? `bg-gradient-to-r ${product.color} text-white` 
                                      : 'border-gray-700 text-gray-300 hover:border-purple-500'}`}
                        >
                          Get Started
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Testimonials */}
                <div>
                  <h3 className="text-2xl font-bold mb-8">What Our Clients Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {product.testimonials.map((testimonial, idx) => (
                      <div key={idx} className="card p-6">
                        <div className="mb-4">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className="text-amber-400 mr-1 inline-block" 
                              fill="#fbbf24" 
                            />
                          ))}
                        </div>
                        <blockquote className="text-gray-300 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-medium text-white">{testimonial.author}</p>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-6">
              Ready to Revolutionize Your Trading Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Start your journey with our advanced software solutions and gain the competitive 
              edge in today's dynamic markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule a Demo
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}