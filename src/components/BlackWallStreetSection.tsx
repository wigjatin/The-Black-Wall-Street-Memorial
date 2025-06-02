
import React from 'react';

const BlackWallStreetSection = () => {
  const businesses = [
    "600+ Black-owned businesses",
    "21 restaurants and cafés", 
    "2 movie theaters",
    "6 private airplanes",
    "A hospital and school system",
    "Banks, law offices, and newspapers"
  ];

  return (
    <section id="story" className="py-20 bg-parchment">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Historic Greenwood District"
              className="rounded-lg shadow-2xl w-full h-96 object-cover sepia"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Greenwood: A Vision of Black Excellence
            </h2>
            
            <p className="font-inter text-lg text-charcoal/80 mb-8 leading-relaxed">
              Before 1921, the Greenwood District of Tulsa, Oklahoma was a thriving Black neighborhood. 
              With over 600 businesses, theaters, law offices, banks, and schools — it became known as 
              "Black Wall Street."
            </p>

            <p className="font-inter text-lg text-charcoal/80 mb-8 leading-relaxed">
              Despite the harsh realities of segregation, the residents of Greenwood created a 
              self-sufficient community that rivaled any district in America. Money circulated 
              within the community multiple times before leaving, creating unprecedented wealth 
              and prosperity for Black families.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businesses.map((business, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-inter text-charcoal/70">{business}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackWallStreetSection;
