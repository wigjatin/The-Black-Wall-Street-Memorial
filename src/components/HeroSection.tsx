
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-800"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 42, 42, 0.7), rgba(42, 42, 42, 0.5)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in-up">
        <div className="mb-4">
          <span className="font-inter text-lg text-gold/80 uppercase tracking-wider">Hackstory</span>
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Black Wall Street
        </h1>
        <h2 className="font-playfair text-2xl md:text-3xl mb-8 text-gold italic">
          The Forgotten Massacre
        </h2>
        <p className="font-inter text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          The <span className="font-semibold text-memorial-red">Tulsa Race Massacre of 1921</span> — A Story of Prosperity, Terror, and Silence
        </p>
        
        <Button 
          onClick={scrollToStory}
          className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Explore the Story
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
