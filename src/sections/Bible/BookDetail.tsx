import React from "react";
import CommentaryQuote from "../../components/ui/CommentaryQuote";
import ExpandableSection from "../../components/ui/ExpandableSection";
import InfoSection from "../../components/ui/InfoSection";

interface BookDetailProps {
  book: string;
  info: any;
  onBack: () => void;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, info, onBack, expandedSection, toggleSection }) => {
  // Handle cases where info might not be available (for books without detailed data yet)
  if (!info) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <button onClick={onBack} className="mr-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            ← Back to Overview
          </button>
          <h3 className="text-xl font-semibold text-indigo-900">{book}</h3>
        </div>
        <p className="text-slate-600">Detailed information is not yet available for this book in the prototype.</p>
      </div>
    );
  }

  // Render detailed information if available
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header with Back button and Book Title */}
      <div className="flex items-center mb-6 pb-4 border-b border-slate-200">
        <button onClick={onBack} className="mr-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
           </svg>
           Back
        </button>
        <h3 className="text-2xl font-serif text-indigo-900">{book}</h3>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        {/* Left Column */}
        <div>
          <InfoSection title="Author" content={info.author} />
          <InfoSection title="Date" content={info.date} />
          <InfoSection title="Structure" content={info.structure} />
          <InfoSection title="Major Themes">
            <ul className="list-disc list-inside space-y-1">
              {info.themes.map(theme => <li key={theme}>{theme}</li>)}
            </ul>
          </InfoSection>
        </div>

        {/* Right Column */}
        <div>
          <InfoSection title="Commentary" content={info.commentary} />
          <InfoSection title="Theological Significance" content={info.theologicalSignificance} />
          <InfoSection title="Literary Features" content={info.literaryFeatures} />
        </div>
      </div>

      {/* Expandable Sections for deeper dives */}
      <div className="mt-6 space-y-2">
        {/* Key Scenes/Passages */}
        {info.keyScenes && (
          <ExpandableSection title="Key Scenes & Passages" isExpanded={expandedSection === "scenes"} onToggle={() => toggleSection("scenes")}>
            <div className="space-y-4">
              {info.keyScenes.map((scene, index) => (
                <div key={index} className="border-l-4 border-indigo-200 pl-4 py-1">
                  <h5 className="font-medium text-indigo-800">{scene.title}</h5>
                  <p className="text-xs text-indigo-600 mb-1">{scene.reference}</p>
                  <p className="mb-1">{scene.summary}</p>
                  <p className="text-xs italic text-slate-600">{scene.theological}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}

        {/* Typology Connections */}
        {info.typology && (
          <ExpandableSection title="Typological Connections" isExpanded={expandedSection === "typology"} onToggle={() => toggleSection("typology")}>
            <div className="space-y-4">
              {info.typology.map((item, index) => (
                <div key={index} className="bg-indigo-50 p-3 rounded">
                  <h5 className="font-medium text-indigo-800 text-sm">{item.type}</h5>
                  <p>{item.explanation}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}

        {/* I Am Statements (Specific to John's Gospel) */}
        {info.iAmStatements && (
          <ExpandableSection title="'I Am' Statements of Christ" isExpanded={expandedSection === "iAm"} onToggle={() => toggleSection("iAm")}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {info.iAmStatements.map((statement, index) => (
                <div key={index} className="bg-indigo-50 p-3 rounded flex items-center space-x-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0">
                     <span className="text-indigo-800 text-xs font-bold">{index + 1}</span>
                   </div>
                   <div>
                     <p className="font-medium text-indigo-800">"{statement.statement}"</p>
                     <p className="text-xs text-slate-600">{statement.reference}</p>
                   </div>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}

        {/* Apocalyptic Symbolism (Specific to Revelation) */}
        {info.symbolism && (
          <ExpandableSection title="Apocalyptic Symbolism" isExpanded={expandedSection === "symbolism"} onToggle={() => toggleSection("symbolism")}>
            <div className="space-y-3">
              {info.symbolism.map((symbol, index) => (
                <div key={index} className="flex items-start">
                  <div className="font-medium text-indigo-800 w-1/3 pr-2">{symbol.symbol}:</div>
                  <div className="w-2/3">{symbol.meaning}</div>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}

        {/* Interpretive Traditions (Specific to Revelation) */}
        {info.interpretiveTraditions && (
          <ExpandableSection title="Interpretive Traditions" isExpanded={expandedSection === "interpretive"} onToggle={() => toggleSection("interpretive")}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {info.interpretiveTraditions.map((tradition, index) => (
                <div key={index} className="bg-indigo-50 p-3 rounded">
                  <h5 className="font-medium text-indigo-800 text-sm">{tradition.approach} Approach</h5>
                  <p>{tradition.explanation}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}
      </div>

      {/* Church Fathers' Commentary Section */}
      <div className="mt-8 p-4 bg-indigo-50 rounded border border-indigo-100">
        <h4 className="font-medium text-indigo-800 mb-3">Church Fathers' Commentary Snippets</h4>
        <div className="space-y-4">
          {/* Example Quotes - In a real app, these would be specific to the book */}
          <CommentaryQuote
            author="St. Augustine"
            work="City of God"
            quote={`On ${book}: "In this book, we see the blueprint of salvation history unfold..."`}
          />
          <CommentaryQuote
            author="St. Thomas Aquinas"
            work="Summa Theologica"
            quote={`Regarding ${book}: "The theological implications establish foundational doctrines..."`}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;