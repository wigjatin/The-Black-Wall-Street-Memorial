
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Black Wall Street Memorial
            </h3>
            <p className="font-inter text-white/70 leading-relaxed mb-6">
              A digital memorial and educational resource dedicated to preserving 
              the memory of the <span className="font-semibold text-memorial-red">Tulsa Race Massacre of 1921</span> and honoring the 
              resilience of survivors and their descendants.
            </p>
            <div className="font-inter text-white/60 text-sm">
              Built with 💻 by Jatin Wig for Hackstory 2025
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Explore</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('story')}
                className="block font-inter text-white/70 hover:text-white transition-colors"
              >
                Black Wall Street
              </button>
              <button 
                onClick={() => scrollToSection('references')}
                className="block font-inter text-white/70 hover:text-white transition-colors"
              >
                References
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block font-inter text-white/70 hover:text-white transition-colors"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:wigjatin2@gmail.com"
                className="block font-inter text-white/70 hover:text-white transition-colors"
              >
                wigjatin2@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/jatin-wig/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-inter text-white/70 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
              <div className="font-inter text-white/70">
                Educational Use Only
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-inter text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Black Wall Street Memorial. Created for educational purposes.
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/70 hover:text-white"
              >
                Share this Memorial
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/70 hover:text-white"
              >
                Donate to Survivors
              </Button>
            </div>
          </div>
        </div>

        {/* Memorial Quote */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-4xl mx-auto">
            <blockquote className="font-playfair text-lg italic text-white/90 mb-4">
              "A people without the knowledge of their past history, origin and culture 
              is like a tree without roots."
            </blockquote>
            <div className="font-inter text-white/70 text-sm">
              — Marcus Garvey
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
