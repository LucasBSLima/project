import React, { useState } from "react";
import ContextCard from "../../components/ui/ContextCard";
import { liturgicalSeasons, seasonAngles } from "./liturgyData";
import { polarToCartesian } from "../../utils/helpers";
import InfoItem from "./InfoItem";

const LiturgicalCalendar: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState(null);

  // SVG path calculation helper
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
        "M", x, y,
        "L", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "Z"
    ].join(" ");
    return d;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Liturgical Calendar Wheel</h3>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Calendar Wheel SVG */}
          <div className="w-full lg:w-2/3 flex-shrink-0">
            <div className="bg-slate-50 rounded-full border-4 border-indigo-100 p-2 flex items-center justify-center aspect-square max-w-md mx-auto">
              <svg width="100%" height="100%" viewBox="0 0 400 400">
                <defs>
                   <filter id="glow-calendar" x="-50%" y="-50%" width="200%" height="200%">
                     <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                     <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                   </filter>
                </defs>
                {/* Map through seasons to create segments */}
                {Object.entries(seasonAngles).map(([key, angles]) => {
                  const season = liturgicalSeasons[key];
                  const isActive = activeSeason === key;
                  return (
                    <path
                      key={key}
                      d={describeArc(200, 200, 180, angles.start, angles.end)}
                      fill={season.color}
                      fillOpacity={isActive ? 1 : 0.7}
                      stroke={isActive ? "white" : season.color}
                      strokeWidth={isActive ? 4 : 1}
                      onClick={() => setActiveSeason(key)}
                      className="cursor-pointer transition-all duration-200 hover:opacity-90"
                      filter={isActive ? "url(#glow-calendar)" : ""}
                    />
                  );
                })}
                {/* Center Circle */}
                <circle cx="200" cy="200" r="60" fill="white" stroke="#a5b4fc" strokeWidth="2"/>
                <text x="200" y="205" textAnchor="middle" fontSize="18" fill="#4338ca" fontWeight="bold">Year</text>
              </svg>
            </div>
             <p className="text-xs text-slate-500 mt-2 text-center">
               Click a season on the wheel for details. Wheel is conceptual.
             </p>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:w-1/3 bg-indigo-50 p-4 rounded-lg border border-indigo-100 min-h-[300px] flex flex-col justify-center">
             {activeSeason && liturgicalSeasons[activeSeason] ? (
               <div className="animate-fadeIn space-y-3">
                 <h4 className="text-lg font-semibold mb-1" style={{ color: liturgicalSeasons[activeSeason].color }}>
                   {liturgicalSeasons[activeSeason].name}
                 </h4>
                 <InfoItem label="Color(s)" value={liturgicalSeasons[activeSeason].color} isColor={true} />
                 <InfoItem label="Key Themes" value={liturgicalSeasons[activeSeason].themes} />
                 <InfoItem label="Key Scripture" value={liturgicalSeasons[activeSeason].scripture} />
                 <InfoItem label="Common Practices" value={liturgicalSeasons[activeSeason].practices} />
               </div>
             ) : (
               <div className="text-center text-slate-600">
                 <h4 className="text-lg font-semibold text-indigo-800 mb-2">The Liturgical Year</h4>
                 <p className="text-sm mb-3">The Church relives the entire mystery of Christ, from Incarnation to Pentecost, through the cycle of seasons.</p>
                 <p className="text-sm text-indigo-600 font-medium">Select a season on the wheel.</p>
               </div>
             )}
           </div>
        </div>
      </div>

      {/* Sanctoral Cycle Explanation */}
      <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-center text-indigo-800">Temporal vs. Sanctoral Cycle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <ContextCard title="Temporal Cycle (Seasons)">
                  Focuses on the unfolding mysteries of Christ's life (Advent, Christmas, Lent, Easter, Ordinary Time). This forms the main structure shown on the wheel.
              </ContextCard>
              <ContextCard title="Sanctoral Cycle (Saints)">
                  Commemorates Mary, martyrs, and other saints on fixed dates throughout the year, intersecting with the Temporal Cycle. Includes Solemnities, Feasts, and Memorials.
              </ContextCard>
          </div>
      </div>
    </div>
  );
};

export default LiturgicalCalendar;