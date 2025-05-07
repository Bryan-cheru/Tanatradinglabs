'use client';

import { Database, Link2, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function APIIntegration() {
  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center 
                       bg-gradient-to-r from-pink-500 to-red-500 mr-6">
          <Database size={32} className="text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">API Integration</h3>
          <p className="text-gray-300 mb-6">
            Seamless API integration with third-party services and platforms to enhance your system capabilities.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <Link2 size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Financial data APIs</h4>
                <p className="text-gray-400 text-sm">Connect to market data providers for real-time financial information.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <Lock size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Payment gateway integration</h4>
                <p className="text-gray-400 text-sm">Secure payment processing through industry-leading providers.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <Cloud size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Cloud service connections</h4>
                <p className="text-gray-400 text-sm">Leverage cloud infrastructure for scalable solutions.</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/services/api-integration" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 mt-6 transition-colors"
          >
            <span>Learn more</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}