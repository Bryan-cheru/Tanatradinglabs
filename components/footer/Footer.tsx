'use client';

import Link from 'next/link';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-24 pb-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg"></div>
                <div className="absolute inset-0.5 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">T</span>
                </div>
              </div>
              <span className="font-bold text-xl">
                <span className="text-white">Tanatarding</span>
                <span className="text-cyan-400">Labs</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Pioneering the future of trading strategies and betting applications with innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Products', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Trading Strategies', 
                'Betting Applications', 
                'Financial Analysis', 
                'Custom Software', 
                'API Integration',
                'Data Analytics'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/services#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@TanatradingLabs.com" className="text-gray-400 hover:text-white flex items-start">
                  <Mail size={20} className="mr-3 mt-1 text-cyan-400" />
                  <span>info@TanatradingLabs.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white flex items-start">
                  <Phone size={20} className="mr-3 mt-1 text-cyan-400" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-cyan-400" />
                <span className="text-gray-400">
                  TanatradingLabs HQ<br />
                  123 Tech Avenue<br />
                  Innovation District<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} TanatradingLabs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}