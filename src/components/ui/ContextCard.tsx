import React, { ReactNode } from "react";

interface ContextCardProps {
  title: string;
  content?: string | string[];
  children?: ReactNode;
}

const ContextCard: React.FC<ContextCardProps> = ({ title, content, children }) => {
  return (
    <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
      <h4 className="font-medium text-indigo-800 mb-2">{title}</h4>
      {children ? (
        children
      ) : typeof content === "string" ? (
        <p className="text-slate-700">{content}</p>
      ) : Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-1 text-slate-700">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500 italic">N/A</p>
      )}
    </div>
  );
};

export default ContextCard;