import React from "react";

interface CommentaryQuoteProps {
  author: string;
  work: string;
  quote: string;
}

const CommentaryQuote: React.FC<CommentaryQuoteProps> = ({ author, work, quote }) => {
  return (
    <div className="border-l-4 border-indigo-300 pl-3 py-1">
      <p className="italic text-slate-700 text-sm">"{quote}"</p>
      <p className="text-xs text-slate-500 mt-1">— {author}, <span className="italic">{work}</span></p>
    </div>
  );
};

export default CommentaryQuote;