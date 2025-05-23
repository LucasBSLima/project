import React from "react";

interface NarrativeStageProps {
  title: string;
  reference: string;
}

const NarrativeStage: React.FC<NarrativeStageProps> = ({ title, reference }) => {
  return (
    <div className="text-center w-1/6 px-1 relative z-10">
      <div className="bg-indigo-100 rounded-full p-2 mb-1 mx-auto w-16 h-16 flex items-center justify-center border-2 border-indigo-300 shadow">
        <span className="text-indigo-800 text-xs font-medium">{title}</span>
      </div>
      <p className="text-xs text-slate-500">{reference}</p>
    </div>
  );
};

export default NarrativeStage;