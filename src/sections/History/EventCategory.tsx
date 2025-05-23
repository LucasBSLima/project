import React from "react";

interface EventCategoryProps {
  category: string;
}

const EventCategory: React.FC<EventCategoryProps> = ({ category }) => {
  // Map category keys to Tailwind classes
  const categoryStyles = {
    council: "bg-blue-100 text-blue-800",
    papal: "bg-yellow-100 text-yellow-800",
    schism: "bg-red-100 text-red-800",
    conflict: "bg-orange-100 text-orange-800",
    foundational: "bg-green-100 text-green-800",
    imperial: "bg-purple-100 text-purple-800",
    celebration: "bg-indigo-100 text-indigo-800",
    persecution: "bg-rose-100 text-rose-800",
    dogma: "bg-emerald-100 text-emerald-800",
    default: "bg-slate-100 text-slate-800" // Fallback style
  };

  return (
    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${categoryStyles[category] || categoryStyles.default}`}>
      {category}
    </span>
  );
};

export default EventCategory;