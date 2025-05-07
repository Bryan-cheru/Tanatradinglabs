
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/hero/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}