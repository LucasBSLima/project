import React from "react";
import { culturalItems } from "./cultureData";

interface CulturalImpactProps {
  expandedArtwork: any;
  setExpandedArtwork: (artwork: any) => void;
}

const CulturalImpact: React.FC<CulturalImpactProps> = ({ expandedArtwork, setExpandedArtwork }) => {
  return (
    <div className="pb-8">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-indigo-900">
        Cultural Impact: Faith Shaping Art, Music, and Thought
      </h2>
      <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
        Catholic faith and tradition have profoundly influenced Western (and global) culture across various domains.
        Explore examples of art, music, architecture, and literature shaped by theological ideas and devotional life.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {culturalItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-shadow hover:shadow-xl"
            onClick={() => setExpandedArtwork(item)}
          >
            {/* Image Placeholder */}
            <div className="relative h-48 bg-slate-200">
               <img
                 src={item.imageUrl}
                 alt={item.title}
                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 loading="lazy" // Lazy load images
                 onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                   const target = e.target as HTMLImageElement;
                   target.onerror = null; 
                   target.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Error'; 
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-3">
                  <h4 className="text-white font-semibold text-lg leading-tight">{item.title}</h4>
                  <p className="text-indigo-200 text-xs">{item.artist} ({item.year})</p>
               </div>
            </div>
            {/* Short Description */}
            <div className="p-4">
              <p className="text-sm text-slate-600 mb-3">{item.description}</p>
              <div className="text-right">
                 <span className="text-indigo-600 text-sm font-medium group-hover:text-indigo-800 transition-colors">
                    View Details →
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalImpact;