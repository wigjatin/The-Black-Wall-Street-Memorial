
import React from 'react';

const AftermathSection = () => {
  const stats = [
    {
      number: "$1.8M",
      description: "Property damage in 1921 dollars",
      modern: "($27M+ today)"
    },
    {
      number: "0",
      description: "Insurance claims honored",
      modern: "(Policies voided due to 'riot' clause)"
    },
    {
      number: "0",
      description: "Arrests of white attackers",
      modern: "(Black defenders were arrested instead)"
    },
    {
      number: "100 years",
      description: "Of official silence",
      modern: "(First state investigation in 2001)"
    }
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Silenced by History
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The massacre didn't end with the fires. A systematic cover-up ensured that 
            this American tragedy was erased from history books and public memory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-white font-medium mb-2">
                  {stat.description}
                </div>
                <div className="font-inter text-sm text-white/60">
                  {stat.modern}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="font-playfair text-3xl font-bold text-white mb-6">
              The Cover-Up
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="font-inter font-semibold text-white mb-3">Media Silence</h4>
                <p className="text-white/80 font-inter">
                  Local newspapers were ordered to destroy their coverage. 
                  The story was buried nationally, with most Americans never hearing about it.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="font-inter font-semibold text-white mb-3">Legal Obstruction</h4>
                <p className="text-white/80 font-inter">
                  Grand jury records were sealed. Insurance companies refused to pay claims. 
                  City ordinances prevented rebuilding.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="font-inter font-semibold text-white mb-3">Historical Erasure</h4>
                <p className="text-white/80 font-inter">
                  The massacre was removed from textbooks and historical records. 
                  For decades, it was Oklahoma's best-kept secret.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-memorial-red/20 border border-memorial-red/30 rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
                Official Findings
              </h3>
              
              <blockquote className="font-inter text-lg italic text-white/90 mb-6 leading-relaxed">
                "The Tulsa Race Massacre was not a riot. It was a deliberate and coordinated attack 
                by white Tulsans and their government against Black Tulsans and their property."
              </blockquote>
              
              <div className="text-white/70 font-inter">
                — Oklahoma Commission to Study the Tulsa Race Massacre of 1921 (2001)
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 font-inter text-sm">
                  It took 80 years for Oklahoma to officially acknowledge what happened. 
                  No reparations have been paid to survivors or their descendants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AftermathSection;
