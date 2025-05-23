import React, { useState } from "react";
import BibleSection from "./BibleSection";
import NarrativeStage from "./NarrativeStage";
import BookDetail from "./BookDetail";
import { bibleStructure, bookInfo } from "./bibleData";

interface BibleExplorerProps {
  activeBook: string | null;
  setActiveBook: (book: string | null) => void;
}

const BibleExplorer: React.FC<BibleExplorerProps> = ({ activeBook, setActiveBook }) => {
  const handleBookClick = (book) => {
    // Toggle book detail view or select a new book
    setActiveBook(activeBook === book ? null : book);
  };

  // State for managing expanded sections within the BookDetail component
  const [expandedSection, setExpandedSection] = useState(null);
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="pb-8">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-indigo-900">
        Bible Explorer: The Sacred Architecture of Scripture
      </h2>

      {/* Show overview or book detail */}
      {!activeBook ? (
        <div className="space-y-8">
          {/* Bible Structure Visualization */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Biblical Canon Structure</h3>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Old Testament Column */}
              <div className="flex-1 border-r border-slate-200 pr-4">
                <h3 className="text-lg font-semibold mb-4 text-indigo-800 text-center">Old Testament</h3>
                <BibleSection title="Torah (Pentateuch)" books={bibleStructure.oldTestament.torah} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Historical Books" books={bibleStructure.oldTestament.historical} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Wisdom Literature" books={bibleStructure.oldTestament.wisdom} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Major Prophets" books={bibleStructure.oldTestament.prophets.major} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Minor Prophets" books={bibleStructure.oldTestament.prophets.minor} handleBookClick={handleBookClick} activeBook={activeBook} />
              </div>

              {/* New Testament Column */}
              <div className="flex-1 pl-4">
                <h3 className="text-lg font-semibold mb-4 text-indigo-800 text-center">New Testament</h3>
                <BibleSection title="Gospels" books={bibleStructure.newTestament.gospels} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Historical" books={bibleStructure.newTestament.historical} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Pauline Epistles" books={bibleStructure.newTestament.paulineEpistles} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="General Epistles" books={bibleStructure.newTestament.generalEpistles} handleBookClick={handleBookClick} activeBook={activeBook} />
                <BibleSection title="Apocalyptic" books={bibleStructure.newTestament.apocalyptic} handleBookClick={handleBookClick} activeBook={activeBook} />
              </div>
            </div>
          </div>

          {/* Biblical Narrative Arc Visualization */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Biblical Narrative Arc</h3>
            <div className="overflow-x-auto">
              <div className="min-w-[800px] flex justify-between items-start relative py-4">
                {/* Narrative Stages */}
                <NarrativeStage title="Creation" reference="Gen 1-2" />
                <NarrativeStage title="Fall" reference="Gen 3" />
                <NarrativeStage title="Covenant" reference="OT" />
                <NarrativeStage title="Incarnation" reference="Gospels" />
                <NarrativeStage title="Church" reference="Acts-Epistles" />
                <NarrativeStage title="New Creation" reference="Rev 21-22" />
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-200 -translate-y-1/2 -z-10"></div>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600 mt-2">
              The redemptive-historical narrative unifying Scripture from creation to new creation.
            </p>
          </div>

          {/* Featured Books Section */}
          <div className="bg-white p-5 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4 text-center text-indigo-800">Featured Books</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {["Genesis", "John", "Revelation"].map(book => (
                     <div
                         key={book}
                         className="bg-indigo-50 rounded-lg shadow p-4 border-l-4 border-indigo-500 hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
                         onClick={() => setActiveBook(book)}
                     >
                         <div>
                            <h4 className="font-semibold text-lg text-indigo-800 mb-2">{book}</h4>
                            <p className="text-xs text-slate-600 mb-2">
                                {bookInfo[book]?.author} - {bookInfo[book]?.date}
                            </p>
                            <p className="text-sm text-slate-700">
                                {bookInfo[book]?.commentary.substring(0, 100)}...
                            </p>
                         </div>
                         <button
                             className="mt-3 text-indigo-600 text-sm font-medium hover:text-indigo-800 self-start"
                             onClick={(e) => {
                                 e.stopPropagation(); // Prevent card click when button is clicked
                                 setActiveBook(book);
                             }}
                         >
                             Explore Details →
                         </button>
                     </div>
                 ))}
             </div>
          </div>
        </div>
      ) : (
        // Render Book Detail component if a book is selected
        <BookDetail
          book={activeBook}
          info={bookInfo[activeBook]} // Pass specific book info
          onBack={() => setActiveBook(null)} // Function to go back to overview
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />
      )}
    </div>
  );
};

export default BibleExplorer;