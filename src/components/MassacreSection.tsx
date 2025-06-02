
import React from 'react';
import TimelineCard from './TimelineCard';

const MassacreSection = () => {
  const timelineEvents = [
    {
      time: "May 30, 1921",
      title: "The Accusation",
      description: "Dick Rowland, a 19-year-old Black shoeshiner, allegedly assaulted Sarah Page, a white elevator operator. The incident was likely a stumble or misunderstanding.",
      location: "Drexel Building"
    },
    {
      time: "May 31, Evening",
      title: "Mob Gathers",
      description: "A white mob of thousands surrounds the courthouse demanding Rowland be lynched. Armed Black veterans arrive to protect him.",
      location: "Tulsa Courthouse"
    },
    {
      time: "May 31, 10 PM",
      title: "First Shots Fired",
      description: "A confrontation between the groups leads to gunfire. The white mob, now deputized by city officials, marches toward Greenwood.",
      location: "Courthouse steps"
    },
    {
      time: "June 1, Dawn",
      title: "Planes Drop Fire",
      description: "Private aircraft drop incendiary bombs and shoot at fleeing residents. This was one of the first aerial attacks on American soil.",
      location: "Over Greenwood"
    },
    {
      time: "June 1, Morning",
      title: "Systematic Destruction",
      description: "35 city blocks burned. Over 1,000 homes destroyed. Hundreds killed. Survivors were marched to internment camps.",
      location: "Entire Greenwood District"
    },
    {
      time: "June 1, Noon",
      title: "Martial Law Declared",
      description: "National Guard finally restores order. The prosperous Black Wall Street lay in ashes. Many bodies were buried in unmarked graves.",
      location: "Tulsa, Oklahoma"
    }
  ];

  return (
    <section id="story" className="py-20 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black/50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            May 31–June 1, 1921
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            In less than 24 hours, one of America's most prosperous Black communities was reduced to ashes. 
            This was not a riot—it was a massacre.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-memorial-red/30"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-memorial-red rounded-full border-4 border-charcoal z-10"></div>
                
                {/* Timeline Card */}
                <div className="ml-16 w-full">
                  <TimelineCard 
                    {...event}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-memorial-red/20 border border-memorial-red/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
              The Human Cost
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">300+</div>
                <div className="text-white/70">Estimated deaths</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">10,000</div>
                <div className="text-white/70">Left homeless</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">35</div>
                <div className="text-white/70">City blocks destroyed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassacreSection;
