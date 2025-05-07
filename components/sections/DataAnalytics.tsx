'use client';

import { LineChart, Database, BarChart2, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function DataAnalytics() {
  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center 
                       bg-gradient-to-r from-blue-500 to-indigo-500 mr-6">
          <LineChart size={32} className="text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
          <p className="text-gray-300 mb-6">
            Transform raw data into meaningful insights with our advanced analytics and visualization solutions.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <Database size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Big data processing</h4>
                <p className="text-gray-400 text-sm">Handle large datasets efficiently with our optimized processing pipelines.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <BarChart2 size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Machine learning models</h4>
                <p className="text-gray-400 text-sm">Leverage AI-powered algorithms to uncover patterns and make predictions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-500 mr-3 flex-shrink-0 flex items-center justify-center">
                <PieChart size={12} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Interactive dashboards</h4>
                <p className="text-gray-400 text-sm">Visualize your data with customizable, real-time dashboards.</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/services/data-analytics" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-6 transition-colors"
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