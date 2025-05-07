import Link from 'next/link';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Code2, 
  Database, 
  LineChart, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

// Service data type definition
type ServiceCaseStudy = {
  title: string;
  excerpt: string;
  link: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  caseStudy: ServiceCaseStudy;
};

// Service data
const services: Service[] = [
  {
    id: 'trading-strategies',
    title: 'Trading Strategies',
    description: 'Advanced algorithmic trading strategies powered by AI and machine learning for maximum market performance.',
    icon: <TrendingUp size={40} className="text-cyan-400" />,
    color: 'from-cyan-500 to-blue-500',
    features: [
      {
        title: 'Algorithmic Trading Systems',
        description: 'Custom-built algorithmic trading systems designed to execute trades automatically based on predefined criteria and market conditions.'
      },
      {
        title: 'Risk Management Protocols',
        description: 'Sophisticated risk management protocols that protect your investments and optimize your risk-reward ratio.'
      },
      {
        title: 'Market Analysis Tools',
        description: 'Advanced tools for analyzing market trends, patterns, and behaviors to identify profitable trading opportunities.'
      },
      {
        title: 'Custom Indicators',
        description: 'Proprietary technical indicators tailored to your specific trading style and market preferences.'
      },
      {
        title: 'Backtesting Frameworks',
        description: 'Comprehensive backtesting frameworks to validate your trading strategies against historical market data.'
      }
    ],
    benefits: [
      'Increased trading efficiency and accuracy',
      'Reduced emotional decision-making',
      'Data-driven trading strategies',
      'Adaptive algorithms that learn from market conditions',
      'Real-time market analysis and execution'
    ],
    caseStudy: {
      title: 'How TradeFusion Inc. Increased ROI by 32%',
      excerpt: 'Learn how our algorithmic trading strategies helped TradeFusion Inc. achieve a 32% increase in return on investment within just three months.',
      link: '/case-studies/tradefusion-roi-increase'
    }
  },
  {
    id: 'betting-applications',
    title: 'Betting Applications',
    description: 'Cutting-edge betting platforms with intelligent odds calculation and risk assessment for optimal results.',
    icon: <Target size={40} className="text-purple-500" />,
    color: 'from-purple-500 to-pink-500',
    features: [
      {
        title: 'Odds Optimization Engines',
        description: 'Sophisticated engines that calculate and optimize betting odds in real-time based on comprehensive market data and statistical models.'
      },
      {
        title: 'Real-time Market Data',
        description: 'Integration with real-time market data feeds to ensure your betting decisions are based on the most current information.'
      },
      {
        title: 'Statistical Analysis Models',
        description: 'Advanced statistical models that analyze historical data to identify patterns and predict future outcomes with higher accuracy.'
      },
      {
        title: 'User Engagement Features',
        description: 'Interactive features designed to enhance user engagement and provide a superior betting experience.'
      },
      {
        title: 'Risk Calculation Systems',
        description: 'Comprehensive risk assessment systems that evaluate potential losses and help manage betting portfolios effectively.'
      }
    ],
    benefits: [
      'Data-driven betting decisions',
      'Higher prediction accuracy',
      'Diversified betting portfolios',
      'Automated risk management',
      'Enhanced betting strategy optimization'
    ],
    caseStudy: {
      title: 'BetWin Global\'s Revolutionary Analytics Platform',
      excerpt: 'Discover how our custom betting application transformed BetWin Global\'s approach to sports analytics and improved prediction accuracy by 28%.',
      link: '/case-studies/betwin-global-analytics'
    }
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis',
    description: 'Deep financial insights through advanced data analysis and visualization techniques.',
    icon: <BarChart3 size={40} className="text-emerald-400" />,
    color: 'from-emerald-500 to-teal-500',
    features: [
      {
        title: 'Predictive Market Modeling',
        description: 'Sophisticated predictive models that forecast market trends and movements based on historical data and current conditions.'
      },
      {
        title: 'Investment Portfolio Analysis',
        description: 'Comprehensive analysis of investment portfolios to optimize asset allocation and maximize returns.'
      },
      {
        title: 'Economic Trend Forecasting',
        description: 'Advanced forecasting of economic trends to help anticipate market shifts and make proactive investment decisions.'
      },
      {
        title: 'Performance Tracking',
        description: 'Detailed tracking of investment performance against benchmarks and custom metrics.'
      },
      {
        title: 'Comparative Benchmark Analysis',
        description: 'In-depth analysis comparing your performance against industry benchmarks and competitors.'
      }
    ],
    benefits: [
      'Data-driven financial decision making',
      'Clear visualization of complex financial data',
      'Identification of market opportunities',
      'Early detection of market risks',
      'Strategic portfolio optimization'
    ],
    caseStudy: {
      title: "Horizon Capital's Market Analysis Transformation",
      excerpt: 'See how our financial analysis tools helped Horizon Capital identify new market opportunities and achieve a 22% portfolio growth in volatile conditions.',
      link: '/case-studies/horizon-capital-market-analysis'
    }
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke software solutions tailored to your specific business requirements and technical specifications.',
    icon: <Code2 size={40} className="text-amber-400" />,
    color: 'from-amber-500 to-orange-500',
    features: [
      {
        title: 'Custom Web Applications',
        description: 'Tailored web applications designed to address your unique business challenges and operational requirements.'
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that provide seamless user experiences across devices.'
      },
      {
        title: 'Desktop Software Solutions',
        description: 'Powerful desktop applications engineered for performance and reliability in enterprise environments.'
      },
      {
        title: 'Backend Systems',
        description: 'Robust backend systems that power your applications with scalable and secure infrastructure.'
      },
      {
        title: 'API Development',
        description: 'Custom API development enabling seamless integration with third-party services and platforms.'
      }
    ],
    benefits: [
      'Solutions tailored to your specific needs',
      'Scalable architecture for future growth',
      'Improved operational efficiency',
      'Enhanced user experience',
      'Competitive advantage through proprietary technology'
    ],
    caseStudy: {
      title: 'Apex Solutions\' Enterprise System Overhaul',
      excerpt: 'Learn how our custom software development team redesigned Apex Solutions\' enterprise system, resulting in a 40% increase in operational efficiency.',
      link: '/case-studies/apex-solutions-system-overhaul'
    }
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Seamless API integration with third-party services and platforms to enhance your system capabilities.',
    icon: <Database size={40} className="text-pink-400" />,
    color: 'from-pink-500 to-red-500',
    features: [
      {
        title: 'Financial Data APIs',
        description: 'Integration with leading financial data providers to access real-time market information and historical data.'
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Secure integration with payment processors and gateways to enable seamless transactions.'
      },
      {
        title: 'Authentication Systems',
        description: 'Implementation of robust authentication systems to ensure secure access to your applications.'
      },
      {
        title: 'Cloud Service Connections',
        description: 'Connections to cloud services for enhanced functionality, scalability, and reliability.'
      },
      {
        title: 'Custom API Development',
        description: 'Development of custom APIs tailored to your specific business requirements and technical specifications.'
      }
    ],
    benefits: [
      'Seamless data exchange between systems',
      'Enhanced functionality through third-party services',
      'Improved system interoperability',
      'Reduced development time and costs',
      'Scalable integration solutions'
    ],
    caseStudy: {
      title: 'FinTech Innovator\'s Multi-Platform Integration',
      excerpt: 'Discover how our API integration services helped a leading FinTech company connect multiple platforms, resulting in a unified system and 35% faster processing times.',
      link: '/case-studies/fintech-multi-platform-integration'
    }
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights with our advanced analytics and visualization solutions.',
    icon: <LineChart size={40} className="text-blue-400" />,
    color: 'from-blue-500 to-indigo-500',
    features: [
      {
        title: 'Big Data Processing',
        description: 'Processing and analysis of large datasets to extract valuable insights and patterns.'
      },
      {
        title: 'Machine Learning Models',
        description: 'Development of custom machine learning models for predictive analytics and pattern recognition.'
      },
      {
        title: 'Predictive Analytics',
        description: 'Advanced predictive analytics to forecast trends, behaviors, and outcomes based on historical data.'
      },
      {
        title: 'Interactive Dashboards',
        description: 'Custom interactive dashboards that visualize complex data in an intuitive and accessible format.'
      },
      {
        title: 'Automated Reporting',
        description: 'Automated generation of reports and insights to streamline decision-making processes.'
      }
    ],
    benefits: [
      'Data-driven decision making',
      'Identification of hidden patterns and trends',
      'Improved forecasting accuracy',
      'Enhanced visualization of complex data',
      'Automated insight generation'
    ],
    caseStudy: {
      title: 'DataCorp\'s Transformation Through Analytics',
      excerpt: 'See how our data analytics solutions helped DataCorp transform their business operations and achieve a 45% increase in operational efficiency.',
      link: '/case-studies/datacorp-analytics-transformation'
    }
  }
];

export default function ServicesPage() {
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
            <h1 className="text-gradient mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              We provide cutting-edge software solutions for trading and betting markets, 
              powered by advanced algorithms and data analytics.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`} 
                className="card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="flex items-center text-sm">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-16 md:py-24 relative">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Service Info */}
                <div>
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Case Study */}
                <div className="card p-0 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Case Study</h3>
                    <h4 className="text-lg font-medium mb-4">{service.caseStudy.title}</h4>
                    <p className="text-gray-300 mb-6">{service.caseStudy.excerpt}</p>
                    <Link 
                      href={service.caseStudy.link} 
                      className={`inline-flex items-center text-sm bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
                    >
                      Read Case Study
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="card p-6">
                    <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className={`btn-primary bg-gradient-to-r ${service.color}`}
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative bg-slate-900/50">
        <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gradient mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Find answers to common questions about our services and how we can help you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">What makes your software solutions different?</h3>
                <p className="text-gray-300">
                  Our solutions stand out due to our deep expertise in financial markets, 
                  advanced algorithmic approaches, and focus on creating tailored systems that 
                  address your specific needs rather than one-size-fits-all products.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
                <p className="text-gray-300">
                  Implementation timelines vary based on the complexity of your requirements. 
                  Simple integrations can be completed in a few weeks, while more complex custom 
                  solutions may take several months. We provide detailed project timelines during 
                  our initial consultation.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer ongoing support and maintenance?</h3>
                <p className="text-gray-300">
                  Yes, we offer comprehensive support and maintenance packages for all our solutions. 
                  This includes regular updates, performance optimization, bug fixes, and technical support. 
                  We also provide training and documentation to ensure your team can effectively use our systems.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">What industries do you work with?</h3>
                <p className="text-gray-300">
                  While we specialize in financial services, trading, and betting markets, our solutions 
                  can be adapted for various industries that benefit from data analytics, algorithmic 
                  decision-making, and custom software development. We've worked with clients in fintech, 
                  investment banking, sports betting, retail trading, and more.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">How do you ensure the security of your solutions?</h3>
                <p className="text-gray-300">
                  Security is our top priority. We implement industry-leading security practices including 
                  encryption, secure authentication, regular security audits, and adherence to compliance 
                  standards. Our development process includes rigorous security testing at every stage to 
                  ensure your data and systems remain protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact our team today to discuss how our software solutions can give you 
              the competitive edge in trading and betting markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}