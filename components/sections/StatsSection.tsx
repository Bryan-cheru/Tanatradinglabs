'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Globe, Award } from 'lucide-react';

const stats = [
  {
    id: 'clients',
    value: 500,
    label: 'Global Clients',
    description: 'Trusted by companies worldwide',
    icon: <Users size={24} className="text-purple-500" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'transactions',
    value: 5000000,
    suffix: 'M+',
    display: '5M+',
    label: 'Transactions Processed',
    description: 'Secure and efficient processing',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'countries',
    value: 30,
    label: 'Countries Served',
    description: 'Global presence and support',
    icon: <Globe size={24} className="text-emerald-400" />,
    color: 'from-emerald-500 to-green-400'
  },
  {
    id: 'awards',
    value: 25,
    label: 'Industry Awards',
    description: 'Recognition for excellence',
    icon: <Award size={24} className="text-amber-400" />,
    color: 'from-amber-500 to-orange-500'
  }
];

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const step = Math.ceil(end / (duration / 50));
    const updateCount = () => {
      countRef.current += step;
      const nextCount = Math.min(countRef.current, end);
      setCount(nextCount);
      
      if (nextCount < end) {
        timeRef.current = setTimeout(updateCount, 50);
      }
    };
    
    updateCount();
    
    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, [end, duration]);

  return count;
}

function StatCard({ stat, inView }: { stat: any; inView: boolean }) {
  const count = useCountUp(inView ? stat.value : 0);
  
  return (
    <div className="card relative overflow-hidden group hover:scale-105 transition-all duration-500">
      {/* Background gradient */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-r 
                      ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center
                       bg-gradient-to-r ${stat.color} mb-4`}>
          {stat.icon}
        </div>
        
        <h3 className="text-4xl font-bold mb-2">
          {stat.display || count.toLocaleString()}{stat.suffix || ''}
        </h3>
        
        <p className="text-gradient font-medium mb-1">{stat.label}</p>
        <p className="text-gray-400 text-sm">{stat.description}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="py-24 relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">Our Impact by Numbers</h2>
          <p className="text-gray-300 text-lg">
            We've achieved remarkable results for our clients through our innovative software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}