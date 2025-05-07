import Link from 'next/link';
import { Award, Users, Lightbulb, Target, Clock, Globe } from 'lucide-react';

export default function AboutPage() {
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
            <h1 className="text-gradient mb-6">About TanatradingLabs</h1>
            <p className="text-xl text-gray-300">
              We are a team of passionate innovators dedicated to revolutionizing trading and betting 
              markets with cutting-edge software solutions.
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] rounded-xl glass-effect overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 mx-auto">
                  <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">T</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mt-6">TanatradingLabs</h2>
                <p className="text-gray-300 mt-2">Established 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gradient mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At TanatradingLabs, our mission is to empower traders, bettors, and financial professionals 
                with innovative software solutions that provide a competitive edge in today's dynamic markets.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We leverage the latest advances in artificial intelligence, machine learning, and data analytics 
                to create powerful tools that transform raw data into actionable insights.
              </p>
              <p className="text-lg text-gray-300">
                Our commitment to excellence, innovation, and client success drives everything we do, from initial 
                concept to final deployment and ongoing support.
              </p>
            </div>
            
            <div className="relative">
              <div className="card p-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 mr-4">
                      <Target size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Precision</h3>
                      <p className="text-gray-300">Delivering accurate, reliable solutions for optimal performance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mr-4">
                      <Lightbulb size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-gray-300">Constantly pushing boundaries with cutting-edge technologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                      <p className="text-gray-300">Working closely with clients to deliver tailored solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900/50">
        <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gradient mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-300">
              Our values form the foundation of everything we do, guiding our decisions 
              and shaping our approach to client partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every aspect of our work, 
                from code quality to client communication.
              </p>
            </div>
            
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We embrace new technologies and approaches, constantly 
                innovating to stay ahead of market trends.
              </p>
            </div>
            
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mb-6">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-300">
                Our systems are built for maximum reliability and uptime, 
                ensuring consistent performance when it matters most.
              </p>
            </div>
            
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Client Focus</h3>
              <p className="text-gray-300">
                We put our clients at the center of everything we do, 
                ensuring their success is our primary goal.
              </p>
            </div>
            
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-6">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
              <p className="text-gray-300">
                We take a global approach to markets, understanding the 
                interconnected nature of today's financial ecosystem.
              </p>
            </div>
            
            <div className="card p-8 hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <p className="text-gray-300">
                We never stop learning and improving, constantly refining 
                our approaches and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gradient mb-6">Our Team</h2>
            <p className="text-lg text-gray-300">
              Meet the talented people behind TanatradingLabs, a diverse group of experts 
              dedicated to pushing the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="font-bold text-xl text-white">JD</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">John Doe</h3>
              <p className="text-purple-400 mb-4">CEO & Founder</p>
              <p className="text-gray-400 text-sm mb-6">
                Former quantitative analyst with 15+ years of experience in financial markets.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v.5c.36-.5.89-1 1.5-1 1.22 0 2.5 1 2.5 3v3.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="font-bold text-xl text-white">JS</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
              <p className="text-cyan-400 mb-4">CTO</p>
              <p className="text-gray-400 text-sm mb-6">
                AI specialist with a background in developing algorithmic trading systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v.5c.36-.5.89-1 1.5-1 1.22 0 2.5 1 2.5 3v3.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="font-bold text-xl text-white">MR</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
              <p className="text-emerald-400 mb-4">Lead Developer</p>
              <p className="text-gray-400 text-sm mb-6">
                Full-stack developer specializing in financial software and real-time systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v.5c.36-.5.89-1 1.5-1 1.22 0 2.5 1 2.5 3v3.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Join Our Team */}
          <div className="text-center mt-16">
            <div className="inline-block px-6 py-3 rounded-full bg-slate-800/50 border border-purple-500/30 mb-6">
              <span className="text-gray-300">
                We're always looking for talented individuals to join our team
              </span>
            </div>
            
            <Link 
              href="/careers" 
              className="btn-primary inline-flex items-center"
            >
              View Open Positions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Trading Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of satisfied clients who have revolutionized their approach 
              to trading and betting markets with our innovative software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}