import React, { useState } from "react";
import RosarySVG from "./RosarySVG";
import { mysteries } from "./liturgyData";

interface RosaryVisualizerProps {
  activeRosaryBead: number | null;
  setActiveRosaryBead: (bead: number | null) => void;
}

const RosaryVisualizer: React.FC<RosaryVisualizerProps> = ({ activeRosaryBead, setActiveRosaryBead }) => {
  const [selectedMysterySet, setSelectedMysterySet] = useState("joyful");
  const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);

  // Handle bead clicks (simplified: just highlights mystery)
  const handleBeadClick = (index) => {
     if (index >= 0 && index < 5) { // Only handle decade beads for mystery change
        setCurrentMysteryIndex(index);
        // In a full version, setActiveRosaryBead could track individual beads
     }
  };

  const currentMysteries = mysteries[selectedMysterySet];
  const currentMystery = currentMysteries[currentMysteryIndex];

  return (
    <div className="space-y-8">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Interactive Rosary</h3>

        {/* Mystery Set Selection */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {Object.keys(mysteries).map(key => (
            <button
              key={key}
              onClick={() => { setSelectedMysterySet(key); setCurrentMysteryIndex(0); }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedMysterySet === key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} Mysteries
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          {/* Rosary Visual (Simplified SVG) */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <RosarySVG activeMysteryIndex={currentMysteryIndex} onBeadClick={handleBeadClick} />
          </div>

          {/* Mystery Details Panel */}
          <div className="w-full lg:w-1/2 bg-indigo-50 p-4 rounded-lg border border-indigo-100 min-h-[250px] flex flex-col justify-center items-center text-center">
            <h4 className="text-lg font-semibold text-indigo-800 mb-2">
              {currentMysteryIndex + 1}. {currentMystery.name}
            </h4>
            <p className="text-slate-700 mb-4">({selectedMysterySet.charAt(0).toUpperCase() + selectedMysterySet.slice(1)} Mystery)</p>
            <div className="p-3 bg-indigo-100 rounded w-full">
              <h5 className="font-medium text-indigo-700 text-sm mb-1">Fruit of the Mystery:</h5>
              <p className="text-indigo-900 font-medium">{currentMystery.fruit}</p>
            </div>
            {/* Add scripture references or meditation points here */}
            <p className="text-xs text-slate-500 mt-4">Click beads on the visualizer to cycle through mysteries.</p>
          </div>
        </div>
      </div>

      {/* How to Pray the Rosary (Placeholder) */}
      <div className="bg-white p-5 rounded-lg shadow-md">
           <h3 className="text-xl font-semibold mb-3 text-center text-indigo-800">Structure of the Rosary Prayer</h3>
           <p className="text-sm text-slate-600 text-center">
               The Rosary combines vocal prayer (Our Father, Hail Mary, Glory Be) with meditation on the Mysteries of Christ's life, death, and resurrection, guided by the beads.
           </p>
           {/* Could add a step-by-step guide here */}
       </div>
    </div>
  );
};

export default RosaryVisualizer;