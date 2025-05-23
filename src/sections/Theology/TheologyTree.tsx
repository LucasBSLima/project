import React from "react";
import { nodePositions } from "./theologyData";

interface TheologyTreeProps {
  doctrines: any[];
  setActiveDoctrine: (id: string) => void;
}

const TheologyTree: React.FC<TheologyTreeProps> = ({ doctrines, setActiveDoctrine }) => {
  // Function to get position, defaults to center if not found
  const getPosition = (id) => nodePositions[id] || { x: "50%", y: "50%" };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6 overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Doctrinal Relationship Map (Conceptual)</h3>

      <div className="min-w-[600px] h-[450px] flex items-center justify-center bg-slate-50 rounded border border-slate-200 p-4 relative">
        {/* Central Node: God */}
        <div className="absolute" style={{ top: getPosition('god').y, left: getPosition('god').x, transform: 'translate(-50%, -50%)' }}>
          <div className="w-28 h-28 rounded-full bg-indigo-700 flex items-center justify-center text-white shadow-lg text-center font-medium">
            God
          </div>
        </div>

        {/* Doctrine Nodes */}
        {doctrines.map(doctrine => (
          <React.Fragment key={doctrine.id}>
            {/* Connection Line from God to Doctrine */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <line
                x1={getPosition('god').x} y1={getPosition('god').y}
                x2={getPosition(doctrine.id).x} y2={getPosition(doctrine.id).y}
                stroke="#a5b4fc" strokeWidth="2"
              />
            </svg>
            {/* Doctrine Node */}
            <div
              className="absolute cursor-pointer hover:scale-105 transition-transform z-10"
              style={{ top: getPosition(doctrine.id).y, left: getPosition(doctrine.id).x, transform: 'translate(-50%, -50%)' }}
              onClick={() => setActiveDoctrine(doctrine.id)}
            >
              <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow text-center text-sm p-1">
                {doctrine.name}
              </div>
              {/* Optional: Add a small symbol */}
              {doctrine.symbols && doctrine.symbols[0] && (
                 <div className="absolute top-[-10px] right-[-5px] text-lg text-indigo-300 bg-white rounded-full px-1 shadow-sm">
                   {doctrine.symbols[0].length > 3 ? doctrine.symbols[0][0] : doctrine.symbols[0]} {/* Use first symbol or first letter */}
                 </div>
              )}
            </div>
          </React.Fragment>
        ))}
        {/* Note: Add secondary connection lines between related doctrines if desired */}
      </div>
      <p className="text-center text-sm text-slate-600 mt-2">
        Click on any doctrine node to explore its connections and details. Lines indicate primary relationship to God.
      </p>
    </div>
  );
};

export default TheologyTree;