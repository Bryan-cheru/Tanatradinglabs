'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Products', path: '/products' },
  { title: 'About Us', path: '/about' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 lg:px-10
        ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg"></div>
            <div className="absolute inset-0.5 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">T</span>
            </div>
          </div>
          <span className="font-bold text-xl">
            <span className="text-white">Tanatrading</span>
            <span className="text-cyan-400">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className="text-gray-300 hover:text-white hover:text-gradient transition-all duration-300"
            >
              {link.title}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-lg z-40 p-6">
          <div className="flex flex-col space-y-6 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-xl text-gray-300 hover:text-white transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary w-full text-center mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}