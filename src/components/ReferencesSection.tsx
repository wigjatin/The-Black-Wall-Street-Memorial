
import React from 'react';

const ReferencesSection = () => {
  const references = [
    {
      title: "Oklahoma Historical Society",
      citation: "Oklahoma Historical Society. 'Tulsa Race Massacre.' Encyclopedia of Oklahoma History and Culture. Accessed 2024.",
      url: "https://www.okhistory.org/publications/enc/entry?entry=TU013"
    },
    {
      title: "Tulsa Race Massacre Commission Report", 
      citation: "Oklahoma Commission to Study the Tulsa Race Massacre of 1921. 'Tulsa Race Massacre.' Final Report, 2001.",
      url: "https://www.okleg.state.ok.us/osir/massacre/TulsaRaceMassacre-FinalReport.pdf"
    },
    {
      title: "Smithsonian Magazine",
      citation: "Smithsonian Magazine. 'The Devastation of Black Wall Street.' May 2021.",
      url: "https://www.smithsonianmag.com/history/tulsa-race-massacre-devastation-black-wall-street-180977715/"
    },
    {
      title: "National Geographic Documentary",
      citation: "National Geographic. 'Rise Up: The Legacy of Greenwood.' Documentary Series, 2021.",
      url: "https://www.nationalgeographic.com/tv/shows/rise-up"
    },
    {
      title: "Congressional Testimony",
      citation: "Fletcher, Viola; Van Ellis, Hughes; Randle, Lessie Benningfield. Testimony before U.S. House Judiciary Subcommittee. May 19, 2021.",
      url: "https://www.congress.gov/event/117th-congress/house-event/112479"
    },
    {
      title: "Tulsa World Archives",
      citation: "Tulsa World Historical Archives. 'Coverage of the 1921 Tulsa Race Massacre.' Various dates, 1921-2021.",
      url: "https://tulsaworld.com/news/local/tulsa-race-massacre"
    },
    {
      title: "The Burning by Tim Madigan",
      citation: "Madigan, Tim. 'The Burning: Massacre, Destruction, and the Tulsa Race Riot of 1921.' Thomas Dunne Books, 2001.",
      url: "https://www.amazon.com/Burning-Massacre-Destruction-Tulsa-1921/dp/0312302479"
    },
    {
      title: "Greenwood Cultural Center",
      citation: "Greenwood Cultural Center. 'Preserving the History of Black Wall Street.' Educational Resources and Exhibits.",
      url: "https://www.greenwoodculturalcenter.com"
    }
  ];

  return (
    <section id="references" className="py-20 bg-memorial-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Sources & References
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            This memorial was built using historical documents, survivor testimonies, 
            and scholarly research to ensure accuracy and respect for the victims and survivors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {references.map((reference, index) => (
            <div 
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-inter font-semibold text-charcoal mb-3">
                {reference.title}
              </h3>
              <p className="font-inter text-sm text-charcoal/70 leading-relaxed mb-4">
                {reference.citation}
              </p>
              <a 
                href={reference.url}
                className="font-inter text-sm text-gold hover:text-gold/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in-up">
          <div className="bg-charcoal text-white rounded-lg p-8 text-center">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Academic Integrity
            </h3>
            <p className="font-inter text-white/80 leading-relaxed max-w-3xl mx-auto">
              This digital memorial was created as an educational resource for Hackstory 2025. 
              All historical facts have been verified through multiple sources. We encourage 
              continued research and learning about this crucial period in American history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
