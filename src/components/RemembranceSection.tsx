
import React from 'react';
import { Button } from '@/components/ui/button';

const RemembranceSection = () => {
  const resources = [
    {
      title: "Tulsa Historical Society",
      description: "Primary source documents and survivor testimonies",
      link: "https://www.tulsahistory.org"
    },
    {
      title: "Rise Up: The Legacy of Greenwood",
      description: "Documentary series by National Geographic",
      link: "https://www.nationalgeographic.com/tv/shows/rise-up"
    },
    {
      title: "The Burning: Massacre, Destruction, and the Tulsa Race Riot of 1921",
      description: "Comprehensive book by Tim Madigan",
      link: "https://www.amazon.com/Burning-Massacre-Destruction-Tulsa-1921/dp/0312302479"
    },
    {
      title: "Greenwood Rising Museum",
      description: "Virtual exhibits and educational resources",
      link: "https://www.greenwoodrising.org"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-parchment to-memorial-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Rebuilding and Remembrance
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Today, we honor the resilience of survivors and their descendants while working 
            to ensure this history is never forgotten again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="font-playfair text-3xl font-bold text-charcoal mb-6">
              Modern Greenwood
            </h3>
            
            <p className="font-inter text-lg text-charcoal/80 mb-6 leading-relaxed">
              While the original Black Wall Street was never fully rebuilt, the Greenwood District 
              today houses important memorials, museums, and businesses that honor its legacy.
            </p>
            
            <p className="font-inter text-lg text-charcoal/80 mb-6 leading-relaxed">
              Survivors and their descendants continue to fight for recognition and reparations. 
              In 2021, the centennial year, national attention finally returned to this American tragedy.
            </p>

            <div className="bg-charcoal text-white rounded-lg p-6">
              <h4 className="font-playfair text-xl font-semibold mb-3">Justice Delayed</h4>
              <p className="font-inter">
                Viola Fletcher, Hughes Van Ellis, and Lessie Benningfield Randle—the last known 
                survivors—continue their legal fight for reparations at ages 108, 101, and 106 respectively.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern Greenwood memorial"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h3 className="font-playfair text-3xl font-bold text-charcoal mb-8 text-center">
            Learn More
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-inter font-semibold text-charcoal mb-3">
                  {resource.title}
                </h4>
                <p className="font-inter text-charcoal/70 mb-4">
                  {resource.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-gold text-gold hover:bg-gold hover:text-charcoal"
                  onClick={() => window.open(resource.link, '_blank', 'noopener,noreferrer')}
                >
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gold/10 border border-gold/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
              "Never Again"
            </h3>
            <p className="font-inter text-lg text-charcoal/80 leading-relaxed">
              The story of Black Wall Street reminds us that prosperity built by marginalized communities 
              has always been fragile in America. By remembering this history, we commit to protecting 
              the dreams and achievements of all communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemembranceSection;
