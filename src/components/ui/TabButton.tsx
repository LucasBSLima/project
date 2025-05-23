import React from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ease-in-out ${
        active
          ? "border-b-2 border-indigo-500 text-indigo-800"
          : "text-slate-600 hover:text-indigo-600 border-b-2 border-transparent"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;