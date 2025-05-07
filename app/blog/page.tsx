import Link from 'next/link';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 'algorithmic-trading-strategies-2025',
    title: 'Top Algorithmic Trading Strategies for 2025',
    excerpt: 'Explore the most effective algorithmic trading strategies that are revolutionizing financial markets in 2025.',
    author: 'John Doe',
    date: 'May 2, 2025',
    category: 'Trading Strategies',
    readTime: '8 min read',
    image: '/images/blog/algorithmic-trading.png', // placeholder path
    tags: ['Algorithmic Trading', 'Machine Learning', 'Market Analysis']
  },
  {
    id: 'ai-betting-applications',
    title: 'How AI is Transforming Betting Applications',
    excerpt: 'Discover how artificial intelligence and machine learning are creating more accurate predictions and transforming the betting industry.',
    author: 'Jane Smith',
    date: 'April 28, 2025',
    category: 'Betting Applications',
    readTime: '6 min read',
    image: '/images/blog/ai-betting.png', // placeholder path
    tags: ['Artificial Intelligence', 'Betting', 'Predictive Analytics']
  },
  {
    id: 'financial-data-visualization',
    title: 'The Power of Financial Data Visualization',
    excerpt: 'Learn how effective data visualization can help traders identify patterns and make better decisions in complex financial markets.',
    author: 'Michael Rodriguez',
    date: 'April 20, 2025',
    category: 'Data Analytics',
    readTime: '5 min read',
    image: '/images/blog/data-visualization.png', // placeholder path
    tags: ['Data Visualization', 'Financial Analysis', 'Trading']
  },
  {
    id: 'risk-management-protocols',
    title: 'Essential Risk Management Protocols for Traders',
    excerpt: 'Explore the critical risk management protocols that every trader should implement to protect their investments.',
    author: 'Sarah Johnson',
    date: 'April 15, 2025',
    category: 'Risk Management',
    readTime: '7 min read',
    image: '/images/blog/risk-management.png', // placeholder path
    tags: ['Risk Management', 'Trading', 'Investment Protection']
  },
  {
    id: 'api-integration-financial-services',
    title: 'API Integration in Financial Services',
    excerpt: 'Understanding the importance of seamless API integration for modern financial services and trading platforms.',
    author: 'David Chen',
    date: 'April 10, 2025',
    category: 'API Integration',
    readTime: '9 min read',
    image: '/images/blog/api-integration.png', // placeholder path
    tags: ['API', 'Integration', 'Financial Services', 'Technology']
  },
  {
    id: 'machine-learning-market-prediction',
    title: 'Machine Learning Models for Market Prediction',
    excerpt: 'A deep dive into the most effective machine learning models for predicting market trends and movements.',
    author: 'Amanda Wilson',
    date: 'April 5, 2025',
    category: 'Machine Learning',
    readTime: '10 min read',
    image: '/images/blog/machine-learning.png', // placeholder path
    tags: ['Machine Learning', 'Market Prediction', 'AI', 'Trading']
  }
];

// Sample categories
const categories = [
  { name: 'Trading Strategies', count: 12 },
  { name: 'Betting Applications', count: 8 },
  { name: 'Data Analytics', count: 10 },
  { name: 'API Integration', count: 6 },
  { name: 'Machine Learning', count: 15 },
  { name: 'Risk Management', count: 7 }
];

// Sample popular tags
const popularTags = [
  { name: 'Algorithmic Trading', count: 18 },
  { name: 'Machine Learning', count: 24 },
  { name: 'Data Analysis', count: 16 },
  { name: 'API', count: 13 },
  { name: 'Risk Management', count: 9 },
  { name: 'Market Prediction', count: 21 },
  { name: 'Betting', count: 15 },
  { name: 'Financial Services', count: 11 },
  { name: 'Technology', count: 19 },
  { name: 'Artificial Intelligence', count: 26 }
];

export default function BlogPage() {
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
            <h1 className="text-gradient mb-6">TanatradingLabs Blog</h1>
            <p className="text-xl text-gray-300">
              Insights, trends, and expert knowledge about trading strategies, 
              betting applications, and innovative software solutions.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="card p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                      <Tag size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock size={14} className="mr-1" />
                    10 min read
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">
                  The Future of Algorithmic Trading: Trends and Predictions for 2025 and Beyond
                </h2>
                
                <p className="text-gray-300 mb-6">
                  Explore the cutting-edge technologies and strategies that will define 
                  algorithmic trading in 2025 and beyond, from AI-driven decision making to 
                  quantum computing applications.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mr-3"></div>
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-gray-400 text-sm">May 5, 2025</p>
                  </div>
                </div>
                
                <Link 
                  href="/blog/future-algorithmic-trading-trends" 
                  className="btn-primary inline-flex items-center"
                >
                  Read Article
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="card p-0 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                    {/* Post Image */}
                    <div className="h-48 bg-gradient-to-r from-purple-600/70 to-blue-500/70 relative">
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-xs text-white">
                        {post.category}
                      </div>
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/blog/${post.id}`} className="hover:text-purple-400 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <User size={14} className="text-gray-400 mr-1" />
                          <span className="text-gray-400 text-xs">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <span className="text-gray-400 text-xs">{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{post.date}</span>
                        
                        <Link 
                          href={`/blog/${post.id}`} 
                          className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                        >
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Link 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white"
                  >
                    1
                  </Link>
                  
                  <Link 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                  >
                    2
                  </Link>
                  
                  <Link 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                  >
                    3
                  </Link>
                  
                  <Link 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-slate-800/50 border border-gray-700 rounded-lg pl-4 pr-10 py-3
                             text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                    <Search size={18} />
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name} className="flex items-center justify-between">
                      <Link 
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                      <span className="text-gray-500 text-sm">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.id} className="flex items-start space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600/70 to-blue-500/70 rounded-md flex-shrink-0"></div>
                      <div>
                        <Link 
                          href={`/blog/${post.id}`} 
                          className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
                        >
                          {post.title}
                        </Link>
                        <p className="text-gray-400 text-xs mt-1">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link 
                      key={tag.name} 
                      href={`/blog/tag/${tag.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="px-3 py-1 rounded-full bg-slate-800 border border-gray-700 text-gray-300 
                               hover:bg-purple-500/20 hover:border-purple-500 hover:text-white text-xs
                               transition-colors"
                    >
                      {tag.name} ({tag.count})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 md:py-24 relative bg-slate-900/50">
        <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Stay up-to-date with the latest trends and insights in trading strategies, 
              betting applications, and innovative software solutions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}