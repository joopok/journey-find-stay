
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedStays from '@/components/FeaturedStays';
import ThemedAreas from '@/components/ThemedAreas';
import RegionMap from '@/components/RegionMap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedStays />
      <ThemedAreas />
      <RegionMap />
      <Footer />
    </div>
  );
};

export default Index;
