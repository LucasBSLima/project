import React, { useState } from "react";
import ContextCard from "../../components/ui/ContextCard";
import { architecturalElements } from "./liturgyData";
import ArchitecturalElement from "./ArchitecturalElement";

const ChurchArchitecture: React.FC = () => {
  const [activeElement, setActiveElement] = useState(null);

  return (
    <div className="space-y-8">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Sacred Architecture Map (Conceptual Plan)</h3>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* SVG Map */}
          <div className="w-full lg:w-2/3 flex-shrink-0">
            <div className="bg-slate-50 rounded border border-slate-200 p-4 flex items-center justify-center aspect-video lg:aspect-auto lg:h-[450px]">
              {/* Simplified SVG representation of a church layout */}
              <svg width="100%" height="100%" viewBox="0 0 500 350" preserveAspectRatio="xMidYMid meet">
                 {/* Main Outline */}
                 <path d="M50,50 h50 v50 h-50 v150 h50 v50 h-50 v-250 Z M100,100 h200 v150 h-200 Z M300,50 h50 v250 h-50 Z M350,100 h100 v150 h-100 Z" fill="#f1f5f9" stroke="#6366f1" strokeWidth="1"/>

                 {/* Clickable Elements */}
                 <ArchitecturalElement id="narthex" x="50" y="50" width="50" height="250" fill="#e0e7ff" active={activeElement} setActive={setActiveElement} label="Narthex" rotateLabel={true}/>
                 <ArchitecturalElement id="nave" x="100" y="100" width="200" height="150" fill="#ede9fe" active={activeElement} setActive={setActiveElement} label="Nave"/>
                 <ArchitecturalElement id="baptistery" x="115" y="200" width="30" height="30" fill="#ddd6fe" active={activeElement} setActive={setActiveElement} label="Font" isCircle={true}/>
                 <ArchitecturalElement id="transept" x="300" y="50" width="50" height="250" fill="#e0e7ff" active={activeElement} setActive={setActiveElement} label="Transept"/>
                 <ArchitecturalElement id="sanctuary" x="350" y="100" width="100" height="150" fill="#c7d2fe" active={activeElement} setActive={setActiveElement} label="Sanctuary"/>
                 <ArchitecturalElement id="ambo" x="365" y="115" width="20" height="30" fill="#ddd6fe" active={activeElement} setActive={setActiveElement} label="Ambo"/>
                 <ArchitecturalElement id="altar" x="400" y="150" width="40" height="50" fill="#a5b4fc" active={activeElement} setActive={setActiveElement} label="Altar"/>
                 <ArchitecturalElement id="tabernacle" x="415" y="210" width="15" height="20" fill="#eef2ff" active={activeElement} setActive={setActiveElement} label="Tab."/>
                 <ArchitecturalElement id="apse" x="450" y="125" width="50" height="100" fill="#d1d5db" active={activeElement} setActive={setActiveElement} label="Apse" isSemicircle={true}/>
              </svg>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Simplified layout. Click elements for details.
            </p>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:w-1/3 bg-indigo-50 p-4 rounded-lg border border-indigo-100 min-h-[300px] flex flex-col justify-center">
            {activeElement && architecturalElements[activeElement] ? (
              <div className="animate-fadeIn">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">
                  {architecturalElements[activeElement].title}
                </h4>
                <p className="text-sm text-slate-700 mb-3">{architecturalElements[activeElement].description}</p>
                <div className="p-3 bg-indigo-100 rounded">
                  <h5 className="font-medium text-indigo-700 mb-1 text-xs uppercase tracking-wider">Theological Significance:</h5>
                  <p className="text-sm text-indigo-900">{architecturalElements[activeElement].theological}</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-600">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Church Architecture</h4>
                <p className="text-sm mb-3">Catholic church design reflects theological realities. The building itself is a teacher.</p>
                <p className="text-sm text-indigo-600 font-medium">Select an element on the map to learn more.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Context Section */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Orientation & Symbolism</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <ContextCard title="Ad Orientem (Facing East)">
             <p className="mb-1">Traditional orientation for prayer, facing the rising sun.</p>
             <ul className="list-disc list-inside space-y-1 text-slate-600">
                 <li>Symbolizes awaiting Christ's return.</li>
                 <li>Direction of the Garden of Eden.</li>
                 <li>Focuses worship towards God.</li>
             </ul>
          </ContextCard>
          <ContextCard title="Sacred Thresholds">
             <p className="mb-1">Progression through the church mirrors a spiritual journey:</p>
             <ul className="list-disc list-inside space-y-1 text-slate-600">
                 <li><strong>World → Narthex:</strong> Preparation</li>
                 <li><strong>Narthex → Nave:</strong> Entering the Community</li>
                 <li><strong>Nave → Sanctuary:</strong> Approaching the Divine</li>
             </ul>
          </ContextCard>
        </div>
      </div>
    </div>
  );
};

export default ChurchArchitecture;