import React from "react";

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-200 ease-in-out ${
        active
          ? "bg-indigo-700 text-white shadow-inner"
          : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default NavButton;