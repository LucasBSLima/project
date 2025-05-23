import React, { ReactNode } from "react";

interface ExpandableSectionProps {
  title: string;
  children: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div className="border-t border-slate-200 py-3">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left font-medium text-indigo-800 hover:text-indigo-900 transition-colors"
      >
        <span>{title}</span>
        {/* Simple +/- icon for expansion state */}
        <span className="text-xl font-light">{isExpanded ? '−' : '+'}</span>
      </button>

      {/* Content revealed when expanded */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-100 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;