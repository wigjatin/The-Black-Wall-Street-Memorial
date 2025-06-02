
import React from 'react';
import HeroSection from '@/components/HeroSection';
import BlackWallStreetSection from '@/components/BlackWallStreetSection';
import MassacreSection from '@/components/MassacreSection';
import SurvivorVoicesSection from '@/components/SurvivorVoicesSection';
import AftermathSection from '@/components/AftermathSection';
import RemembranceSection from '@/components/RemembranceSection';
import ReferencesSection from '@/components/ReferencesSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BlackWallStreetSection />
      <MassacreSection />
      <SurvivorVoicesSection />
      <AftermathSection />
      <RemembranceSection />
      <ReferencesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
