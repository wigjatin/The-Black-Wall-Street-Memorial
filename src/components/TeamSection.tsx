
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-parchment">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            About Me
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            This memorial was created by a solo developer for Hackstory 2025, 
            committed to preserving and sharing this vital piece of American history.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-scale-in max-w-md">
            <img 
              src="/lovable-uploads/bcc8c8a7-c68b-4058-9891-b02c20fb60f6.png"
              alt="Jatin Wig"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            
            <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              Jatin Wig
            </h3>
            
            <div className="text-gold font-inter font-medium mb-2">
              Solo Developer & Creator
            </div>
            
            <div className="text-charcoal/60 font-inter text-sm mb-6">
              Hackstory 2025 Participant
            </div>
            
            <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-6">
              Passionate about using technology to preserve and share important historical narratives. 
              Dedicated to ensuring stories like the <span className="font-semibold text-memorial-red">Tulsa Race Massacre of 1921</span> are never forgotten.
            </p>

            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/jatin-wig/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="mailto:wigjatin2@gmail.com"
                className="flex items-center space-x-2 bg-charcoal hover:bg-charcoal/80 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="bg-charcoal text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Why I Built This
            </h3>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              As a solo developer, I believe it's our responsibility to learn from history and ensure 
              that stories like the <span className="font-semibold text-memorial-red">Tulsa Race Massacre of 1921</span> are never forgotten. This digital memorial 
              represents my commitment to truth, justice, and remembrance.
            </p>
            <p className="font-inter text-white/60 text-sm">
              Built with 💻 by Jatin Wig for Hackstory 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
