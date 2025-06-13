import React from "react";
import type { Doctrine } from "../../types";

interface DoctrineCardProps {
  doctrine: Doctrine;
  onClick: () => void;
}

const DoctrineCard: React.FC<DoctrineCardProps> = ({ doctrine, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-5 rounded-lg shadow border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-800">{doctrine.name}</h3>
        <p className="text-slate-700 mb-3 text-sm">{doctrine.description}</p>

        {/* Key Info Snippets */}
        <div className="mb-3">
          <h4 className="text-xs font-medium text-indigo-700 mb-1 uppercase tracking-wider">Scriptural Basis:</h4>
          <div className="flex flex-wrap gap-1">
            {doctrine.scriptural.slice(0, 3).map(verse => ( // Show first 3 verses
              <span key={verse} className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-800 text-xs rounded">
                {verse}
              </span>
            ))}
            {doctrine.scriptural.length > 3 && <span className="text-xs text-slate-400">...</span>}
          </div>
        </div>

        <div className="mb-3">
          <h4 className="text-xs font-medium text-indigo-700 mb-1 uppercase tracking-wider">Key Council(s):</h4>
          <p className="text-sm text-slate-600">{doctrine.councils.join(", ")}</p>
        </div>
      </div>

      {/* Footer of the card */}
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100">
        <span className="text-xs text-slate-500">Catechism: {doctrine.catechism}</span>
        <span className="text-indigo-600 text-sm font-medium hover:text-indigo-800 flex items-center">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default DoctrineCard;