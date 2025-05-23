import React from "react";

interface BibleSectionProps {
  title: string;
  books: string[];
  handleBookClick: (book: string) => void;
  activeBook: string | null;
}

const BibleSection: React.FC<BibleSectionProps> = ({ title, books, handleBookClick, activeBook }) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium text-indigo-700 mb-2 text-sm">{title}</h4>
      <div className="flex flex-wrap gap-1">
        {/* Map through books and create buttons */}
        {books.map(book => (
          <button
            key={book}
            onClick={() => handleBookClick(book)}
            className={`px-2 py-1 text-xs rounded-full transition-colors duration-150 ${
              activeBook === book // Highlight if active
                ? "bg-indigo-600 text-white"
                : "bg-white border border-indigo-200 text-indigo-800 hover:bg-indigo-100"
            }`}
          >
            {book}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BibleSection;