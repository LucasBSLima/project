import React from "react";
import TheologyTree from "./TheologyTree";
import DoctrineCard from "./DoctrineCard";
import DoctrineDetail from "./DoctrineDetail";
import { doctrines } from "./theologyData";

interface TheologySystemProps {
  activeDoctrine: string | null;
  setActiveDoctrine: (id: string | null) => void;
}

const TheologySystem: React.FC<TheologySystemProps> = ({ activeDoctrine, setActiveDoctrine }) => {
  return (
    <div className="pb-8">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-indigo-900">
        Theology System: The Architecture of Catholic Doctrine
      </h2>

      {/* Show overview or doctrine detail */}
      {!activeDoctrine ? (
        <div className="space-y-8">
          {/* Theology Tree Visualization */}
          <TheologyTree doctrines={doctrines} setActiveDoctrine={setActiveDoctrine} />

          {/* Doctrine Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctrines.map(doctrine => (
              <DoctrineCard
                key={doctrine.id}
                doctrine={doctrine}
                onClick={() => setActiveDoctrine(doctrine.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        // Render Doctrine Detail component if a doctrine is selected
        <DoctrineDetail
          doctrine={doctrines.find(d => d.id === activeDoctrine)} // Find the selected doctrine data
          onBack={() => setActiveDoctrine(null)} // Function to go back
        />
      )}
    </div>
  );
};

export default TheologySystem;