import React, { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  content?: string;
  children?: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content, children }) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium text-indigo-700 mb-1">{title}</h4>
      {content ? (
        <p className="text-slate-700 text-sm">{content}</p>
      ) : (
        <div className="text-slate-700 text-sm">{children}</div>
      )}
    </div>
  );
};

export default InfoSection;