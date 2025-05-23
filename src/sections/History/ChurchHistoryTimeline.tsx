import React, { useState } from "react";
import ContextCard from "../../components/ui/ContextCard";
import { events } from "./historyData";
import { getContextContent } from "./historyHelpers";
import EraSegment from "./EraSegment";
import EventCategory from "./EventCategory";

interface ChurchHistoryTimelineProps {
  position: number;
  setPosition: (position: number) => void;
}

const ChurchHistoryTimeline: React.FC<ChurchHistoryTimelineProps> = ({ position, setPosition }) => {
  // Handle timeline slider changes
  const handleTimelineChange = (newPosition) => {
    setPosition(newPosition);
  };

  // Filter events to show within a range around the current position
  const range = 200; // Show events +/- 200 years from the slider position
  const visibleEvents = events
    .filter(event => event.year >= position - range && event.year <= position + range)
    .sort((a, b) => a.year - b.year); // Sort visible events chronologically

  // State for tracking the selected event for detail view
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="pb-8">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-indigo-900">
        Church History Timeline: 2,000 Years of Tradition
      </h2>

      {/* Timeline Slider Control */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-md sticky top-[88px] z-40"> {/* Make slider sticky */}
        <div className="flex items-center justify-between mb-2 text-xs text-slate-500">
          <span>~33 AD</span>
          <span className="font-medium text-indigo-800 text-lg">{position} AD</span>
          <span>~{new Date().getFullYear()} AD</span>
        </div>
        <input
          type="range"
          min="0"
          max={new Date().getFullYear()} // Set max to current year
          value={position}
          onChange={(e) => handleTimelineChange(parseInt(e.target.value))}
          className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" // Style the slider
        />
      </div>

      {/* Key Historical Eras Visualization */}
      <div className="mb-8 overflow-x-auto">
        <div className="min-w-[900px] bg-white p-3 rounded-lg shadow">
          <div className="relative h-[40px] flex">
            {/* Define eras with percentages and colors */}
            <EraSegment name="Apostolic Age" start={0} end={100} color="bg-sky-100" textColor="text-sky-800" />
            <EraSegment name="Patristic Era" start={100} end={600} color="bg-blue-100" textColor="text-blue-800" />
            <EraSegment name="Early Medieval" start={600} end={1000} color="bg-indigo-100" textColor="text-indigo-800" />
            <EraSegment name="High Medieval" start={1000} end={1300} color="bg-purple-100" textColor="text-purple-800" />
            <EraSegment name="Late Medieval/Renaissance" start={1300} end={1500} color="bg-fuchsia-100" textColor="text-fuchsia-800" />
            <EraSegment name="Reformation/Counter-Ref" start={1500} end={1700} color="bg-red-100" textColor="text-red-800" />
            <EraSegment name="Enlightenment/Revolutions" start={1700} end={1900} color="bg-orange-100" textColor="text-orange-800" />
            <EraSegment name="Modern/Contemporary" start={1900} end={new Date().getFullYear()} color="bg-emerald-100" textColor="text-emerald-800" />
          </div>
          {/* Add year markers if needed */}
        </div>
      </div>

      {/* Timeline Events Display */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">
          Key Events ({Math.max(0, position - range)} - {Math.min(new Date().getFullYear(), position + range)} AD)
        </h3>

        <div className="relative pl-8 border-l-2 border-indigo-200">
          {visibleEvents.length > 0 ? (
            visibleEvents.map((event, index) => (
              <div key={event.year + '-' + index} className="mb-6 relative">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full cursor-pointer transition-all duration-150 ${
                    selectedEvent === event.year + '-' + index
                      ? 'bg-indigo-700 ring-4 ring-indigo-200 scale-110' // Highlight selected
                      : 'bg-indigo-500 hover:bg-indigo-600'
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === event.year + '-' + index ? null : event.year + '-' + index)}
                  title={`Click to view details for ${event.year}`}
                ></div>

                {/* Event Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-bold text-indigo-800 mr-3">{event.year} AD</span>
                    <span className="text-slate-800">{event.event}</span>
                  </div>
                  <EventCategory category={event.category} />
                </div>

                {/* Expanded Details */}
                {selectedEvent === event.year + '-' + index && (
                  <div className="mt-2 ml-4 p-3 bg-indigo-50 rounded border border-indigo-100 text-sm text-slate-700 animate-fadeIn">
                    <p>{event.details}</p>
                    {/* Add related tags or links here if needed */}
                  </div>
                )}
              </div>
            ))
          ) : (
            // Message when no events are in the visible range
            <p className="text-center text-slate-500 py-12">
              No major events listed for this specific time window. Adjust the timeline slider to explore different eras.
            </p>
          )}
        </div>
      </div>

      {/* Historical Context Section (Dynamically updates based on slider position) */}
      <div className="mt-8 bg-white p-5 rounded-lg shadow-md">
         <h3 className="text-xl font-semibold mb-4 text-indigo-800">Historical Context ({position} AD)</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
             <ContextCard title="Key Figures" content={getContextContent(position, 'figures')} />
             <ContextCard title="Social/Political Context" content={getContextContent(position, 'social')} />
             <ContextCard title="Intellectual/Cultural Currents" content={getContextContent(position, 'intellectual')} />
         </div>
      </div>
    </div>
  );
};

export default ChurchHistoryTimeline;