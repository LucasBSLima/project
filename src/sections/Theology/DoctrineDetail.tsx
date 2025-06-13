import React from "react";
import InfoSection from "../../components/ui/InfoSection";
import CommentaryQuote from "../../components/ui/CommentaryQuote";
import type { Doctrine } from "../../types";

interface DoctrineDetailProps {
  doctrine: Doctrine | undefined;
  onBack: () => void;
}

const DoctrineDetail: React.FC<DoctrineDetailProps> = ({ doctrine, onBack }) => {
  if (!doctrine) return null; // Should not happen if logic is correct, but good practice

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header with Back button and Doctrine Name */}
      <div className="flex items-center mb-6 pb-4 border-b border-slate-200">
        <button onClick={onBack} className="mr-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
           </svg>
           Back
        </button>
        <h3 className="text-2xl font-serif text-indigo-900">{doctrine.name}</h3>
      </div>

      <p className="text-lg mb-6 text-slate-700">{doctrine.description}</p>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        {/* Left Column */}
        <div>
          <InfoSection title="Scriptural Foundation">
            <ul className="list-disc list-inside space-y-1">
              {doctrine.scriptural.map(verse => (
                <li key={verse}><span className="font-medium">{verse}</span></li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="Historical Development (Councils)">
             <ul className="list-disc list-inside space-y-1">
               {doctrine.councils.map(council => <li key={council}>{council}</li>)}
             </ul>
          </InfoSection>

          <InfoSection title="Symbolic Representation">
            <div className="flex flex-wrap gap-2">
              {doctrine.symbols.map(symbol => (
                <span key={symbol} className="px-2 py-1 bg-indigo-50 text-indigo-800 text-xs rounded">{symbol}</span>
              ))}
            </div>
          </InfoSection>
        </div>

        {/* Right Column */}
        <div>
          <InfoSection title="Liturgical & Devotional Practice">
            <p>{doctrine.practice}</p>
          </InfoSection>

          <InfoSection title="Catechism References">
            <p className="bg-indigo-100 p-2 rounded text-indigo-900 font-mono text-sm">{doctrine.catechism}</p>
          </InfoSection>

          <InfoSection title="Notable Artwork Example">
            <p className="italic">{doctrine.artwork}</p>
            {/* Placeholder for an image */}
            <div className="mt-2 h-40 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
              <img
                src={`https://placehold.co/300x150/e0e7ff/4338ca?text=${encodeURIComponent(doctrine.artwork)}`}
                alt={doctrine.artwork}
                className="max-h-full max-w-full object-contain rounded"
                // Basic error handling for placeholder
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = 'https://placehold.co/300x150/cccccc/ffffff?text=Image+Not+Found'; 
                }}
              />
            </div>
          </InfoSection>
        </div>
      </div>

      {/* Patristic Commentary Section */}
      <div className="mt-6 p-4 bg-indigo-50 rounded border border-indigo-100">
        <h4 className="font-medium text-indigo-800 mb-3">Patristic Commentary Snippets</h4>
        <div className="space-y-4">
          {doctrine.patristic.map((quote, index) => (
            <CommentaryQuote
              key={index}
              author={quote.father}
              work="Various Writings" // Generic work title for example
              quote={quote.text}
            />
          ))}
        </div>
      </div>

      {/* Related Doctrines (Placeholder/Example) */}
      <div className="mt-6 p-4 bg-white rounded border border-indigo-100 shadow-sm">
        <h4 className="font-medium text-indigo-800 mb-2">Related Doctrines</h4>
        <div className="flex flex-wrap gap-2">
          {/* Example: Link back to other doctrines (in a real app, this would update activeDoctrine) */}
          {["trinity", "incarnation", "eucharist", "mariology"]
            .filter(id => id !== doctrine.id) // Exclude the current doctrine
            .map(id => (
              <button
                key={id}
                onClick={() => alert(`Navigate to ${id}`)} // Replace alert with actual navigation
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)} {/* Capitalize */}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DoctrineDetail;