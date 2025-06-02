
import React from 'react';

const SurvivorVoicesSection = () => {
  const testimonies = [
    {
      quote: "We ran, but the flames chased us. They were dropping something down on us. From the airplane.",
      author: "Viola Fletcher",
      context: "Survivor, testified before Congress at age 107"
    },
    {
      quote: "They didn't just destroy buildings. They destroyed lives, dreams, and the hope of generations.",
      author: "Hughes Van Ellis",
      context: "Survivor, brother of Viola Fletcher"
    },
    {
      quote: "I saw bodies thrown in trucks like cord wood. They had to bury them somewhere, but nobody talks about where.",
      author: "Olivia Hooker",
      context: "Survivor, later became Navy's first Black WAVE"
    },
    {
      quote: "They came through shooting and burning. We lost everything we worked for. Everything.",
      author: "George Monroe",
      context: "Survivor, lost his grocery store and home"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-memorial-cream to-parchment relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Witnesses and Memories
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            The voices of survivors carry the weight of history. Their testimonies, recorded decades later, 
            ensure that the truth of that day will never be forgotten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonies.map((testimony, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 animate-scale-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <blockquote className="font-playfair text-lg italic text-charcoal mb-6 leading-relaxed">
                "{testimony.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-inter font-semibold text-charcoal">
                  {testimony.author}
                </div>
                <div className="font-inter text-sm text-charcoal/60 mt-1">
                  {testimony.context}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-charcoal text-white rounded-lg p-8 max-w-4xl mx-auto">
            <p className="font-inter text-lg italic">
              "For decades, survivors were told to never speak of what happened. 
              The massacre was erased from textbooks, newspapers, and public memory. 
              Only in recent years have their voices finally been heard."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurvivorVoicesSection;
