import React from "react";

interface InfoItemProps {
  label: string;
  value: string;
  isColor?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, isColor = false }) => {
  return (
    <div>
      <h5 className="font-medium text-indigo-700 text-xs uppercase tracking-wider mb-0.5">{label}:</h5>
      {isColor ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-slate-300" style={{ backgroundColor: value }}></div>
          <span className="text-sm text-slate-700">{value}</span>
        </div>
      ) : (
        <p className="text-sm text-slate-700">{value}</p>
      )}
    </div>
  );
};

export default InfoItem;