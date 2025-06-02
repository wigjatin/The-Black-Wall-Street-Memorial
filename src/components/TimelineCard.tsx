
import React from 'react';

interface TimelineCardProps {
  time: string;
  title: string;
  description: string;
  location?: string;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ time, title, description, location, index }) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 animate-fade-in-up hover:bg-white/20 transition-all duration-300"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-memorial-red text-white px-3 py-1 rounded-full text-sm font-semibold">
          {time}
        </div>
        {location && (
          <div className="ml-3 text-white/70 text-sm">
            📍 {location}
          </div>
        )}
      </div>
      
      <h3 className="font-playfair text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-white/90 font-inter leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TimelineCard;
