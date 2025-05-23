import React, { useState } from "react";
import InfoItem from "./InfoItem";
import { sacraments } from "./liturgyData";

const SacramentalSystem: React.FC = () => {
  const [activeSacrament, setActiveSacrament] = useState(null);

  const getSacramentById = (id) => {
    for (const category in sacraments) {
      const found = sacraments[category].find(sac => sac.id === id);
      if (found) return found;
    }
    return null;
  }

  const currentSacrament = activeSacrament ? getSacramentById(activeSacrament) : null;

  return (
    <div className="space-y-8">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">The Seven Sacraments</h3>
        <p className="text-center text-slate-600 mb-6 text-sm">
          "Visible signs of invisible grace, instituted by Christ and entrusted to the Church,
          by which divine life is dispensed to us." (CCC 1131)
        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sacrament Selection */}
          <div className="w-full lg:w-1/3 space-y-4">
            {Object.entries(sacraments).map(([category, list]) => (
              <div key={category}>
                <h4 className="font-medium text-indigo-700 mb-2 capitalize">{category}</h4>
                <div className="space-y-2">
                  {list.map(sac => (
                    <button
                      key={sac.id}
                      onClick={() => setActiveSacrament(sac.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center gap-2 text-sm ${
                        activeSacrament === sac.id
                          ? 'bg-indigo-600 text-white shadow'
                          : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      }`}
                    >
                      <span className="text-lg">{sac.symbol}</span>
                      <span>{sac.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sacrament Details Panel */}
          <div className="w-full lg:w-2/3 bg-indigo-50 p-4 rounded-lg border border-indigo-100 min-h-[350px] flex flex-col justify-center">
            {currentSacrament ? (
              <div className="animate-fadeIn space-y-3">
                <h4 className="text-lg font-semibold text-indigo-800 mb-1 flex items-center gap-2">
                   <span className="text-2xl">{currentSacrament.symbol}</span>
                   {currentSacrament.name}
                </h4>
                <InfoItem label="Matter (Visible Sign)" value={currentSacrament.matter} />
                <InfoItem label="Form (Words)" value={currentSacrament.form} />
                <InfoItem label="Ordinary Minister" value={currentSacrament.minister} />
                <InfoItem label="Primary Effect(s)" value={currentSacrament.effect} />
                <InfoItem label="Key Scriptural Basis" value={currentSacrament.scripture} />
              </div>
            ) : (
              <div className="text-center text-slate-600">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">Sacramental Economy</h4>
                <p className="text-sm mb-3">The sacraments are the primary means through which Christ dispenses the graces won by His Paschal Mystery.</p>
                <p className="text-sm text-indigo-600 font-medium">Select a sacrament to learn more.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacramentalSystem;