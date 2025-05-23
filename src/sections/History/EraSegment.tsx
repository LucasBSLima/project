import React from "react";

interface EraSegmentProps {
  name: string;
  start: number;
  end: number;
  color: string;
  textColor: string;
}

const EraSegment: React.FC<EraSegmentProps> = ({ name, start, end, color, textColor }) => {
  const totalDuration = new Date().getFullYear(); // Use current year as total duration
  const widthPercent = ((end - start) / totalDuration) * 100;
  const leftPercent = (start / totalDuration) * 100;

  return (
    <div
      className={`absolute top-0 h-full ${color} flex items-center justify-center border-r border-white`}
      style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
      title={`${name} (${start}-${end} AD)`}
    >
      <span className={`text-xs font-medium ${textColor} px-1 truncate`}>{name}</span>
    </div>
  );
};

export default EraSegment;