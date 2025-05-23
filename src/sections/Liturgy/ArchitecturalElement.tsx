import React from "react";

interface ArchitecturalElementProps {
  id: string;
  x: string | number;
  y: string | number;
  width: string | number;
  height: string | number;
  fill: string;
  active: string | null;
  setActive: (id: string) => void;
  label: string;
  rotateLabel?: boolean;
  isCircle?: boolean;
  isSemicircle?: boolean;
}

const ArchitecturalElement: React.FC<ArchitecturalElementProps> = ({ 
  id, 
  x, 
  y, 
  width, 
  height, 
  fill, 
  active, 
  setActive, 
  label, 
  rotateLabel = false, 
  isCircle = false, 
  isSemicircle = false 
}) => {
  const isActive = active === id;
  // Simple color darkening for active state
  const activeFill = darkColor(fill); // Helper function to darken the color
  const baseFill = fill;

  const commonProps = {
    onClick: () => setActive(id),
    fill: isActive ? activeFill : baseFill,
    stroke: "#4338ca",
    strokeWidth: isActive ? "2" : "1",
    className: "cursor-pointer transition-all duration-150 hover:opacity-80",
    filter: isActive ? "url(#glow)" : ""
  };

  let element;
  let textX = Number(x) + Number(width) / 2;
  let textY = Number(y) + Number(height) / 2;
  let textTransform = rotateLabel ? `rotate(-90 ${textX} ${textY})` : "";

  if (isCircle) {
    const r = Math.min(Number(width), Number(height)) / 2;
    const cx = Number(x) + r;
    const cy = Number(y) + r;
    element = <circle cx={cx} cy={cy} r={r} {...commonProps} />;
    textX = cx;
    textY = cy + 4; // Adjust text position for circle
    textTransform = ""; // No rotation for circle label usually
  } else if (isSemicircle) {
    // Basic semicircle path
    const pathData = `M${x},${y} a${width},${Number(height)/2} 0 0,1 0,${height} Z`;
    element = <path d={pathData} {...commonProps} />;
    textX = Number(x) + Number(width) / 4; // Adjust text position
    textY = Number(y) + Number(height) / 2 + 4;
    textTransform = `rotate(-90 ${textX} ${textY})`;
  } else {
    element = <rect x={x} y={y} width={width} height={height} {...commonProps} />;
  }

  return (
    <g>
      {/* Add a filter for glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {element}
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#3730a3" // Darker indigo for text
        fontSize={Math.min(Number(width), Number(height)) < 40 ? "8" : "10"} // Smaller font for smaller elements
        fontWeight="medium"
        className="pointer-events-none select-none" // Make text non-interactive
        transform={textTransform}
      >
        {label}
      </text>
    </g>
  );
};

// Helper function to darken a color
const darkColor = (color: string): string => {
  // Map common fills to darker versions
  const mapping: Record<string, string> = {
    "#e0e7ff": "#c7d2fe", // indigo-100 -> indigo-200
    "#ede9fe": "#ddd6fe", // violet-50 -> violet-100
    "#ddd6fe": "#c4b5fd", // violet-100 -> violet-300
    "#c7d2fe": "#a5b4fc", // indigo-200 -> indigo-300
    "#a5b4fc": "#818cf8", // indigo-300 -> indigo-400
    "#eef2ff": "#c7d2fe", // indigo-50 -> indigo-200
    "#d1d5db": "#9ca3af", // gray-300 -> gray-400
  };
  return mapping[color] || color;
};

export default ArchitecturalElement;