import React from "react";
import { polarToCartesian } from "../../utils/helpers";

interface RosarySVGProps {
  activeMysteryIndex: number;
  onBeadClick: (index: number) => void;
}

const RosarySVG: React.FC<RosarySVGProps> = ({ activeMysteryIndex, onBeadClick }) => {
  const center = { x: 150, y: 150 };
  const radius = 100;
  const smallRadius = 10; // Radius for Hail Mary beads
  const largeRadius = 12; // Radius for Our Father beads
  const mysteryBeadRadius = 14; // Radius for the decade/mystery bead

  // Calculate positions for decade beads (5 mysteries)
  const mysteryPositions = Array.from({ length: 5 }).map((_, i) => {
    const angle = (i * 360 / 5) - 90; // Start from top
    return polarToCartesian(center.x, center.y, radius, angle);
  });

  // Calculate positions for Hail Mary beads between mysteries (simplified - 10 beads per decade)
  const hailMaryPositions = [];
  for (let i = 0; i < 5; i++) {
    const startAngle = (i * 360 / 5) - 90;
    const endAngle = ((i + 1) * 360 / 5) - 90;
    for (let j = 1; j <= 10; j++) {
      // Interpolate angle
      const angle = startAngle + (j * (endAngle - startAngle) / 11);
      hailMaryPositions.push(polarToCartesian(center.x, center.y, radius, angle));
    }
  }

  // Positions for the introductory beads + crucifix
  const introYStart = center.y + radius + 20;
  const introBeadPositions = [
    { x: center.x, y: introYStart }, // Our Father
    { x: center.x, y: introYStart + 25 }, // Hail Mary 1
    { x: center.x, y: introYStart + 45 }, // Hail Mary 2
    { x: center.x, y: introYStart + 65 }, // Hail Mary 3
  ];
  const crucifixPos = { x: center.x, y: introYStart + 95 };

  return (
    <svg width="300" height="350" viewBox="0 0 300 350">
      {/* Lines connecting beads (conceptual) */}
      <circle cx={center.x} cy={center.y} r={radius} fill="none" stroke="#d1d5db" strokeWidth="1" />
      <line x1={center.x} y1={center.y + radius} x2={center.x} y2={introYStart} stroke="#d1d5db" strokeWidth="1" />
      <line x1={center.x} y1={introYStart + 65} x2={center.x} y2={crucifixPos.y - 10} stroke="#d1d5db" strokeWidth="1" />

      {/* Hail Mary Beads */}
      {hailMaryPositions.map((pos, i) => (
        <circle key={`hm-${i}`} cx={pos.x} cy={pos.y} r={smallRadius} fill="#a5b4fc" stroke="#6366f1" strokeWidth="1" />
      ))}

      {/* Mystery/Our Father Beads */}
      {mysteryPositions.map((pos, i) => (
        <circle
          key={`mystery-${i}`}
          cx={pos.x} cy={pos.y}
          r={mysteryBeadRadius}
          fill={i === activeMysteryIndex ? "#4f46e5" : "#818cf8"} // Highlight active mystery
          stroke="#3730a3"
          strokeWidth={i === activeMysteryIndex ? "2" : "1"}
          onClick={() => onBeadClick(i)}
          className="cursor-pointer transition-all duration-150 hover:opacity-80"
          filter={i === activeMysteryIndex ? "url(#glow-calendar)" : ""}
        />
      ))}

      {/* Introductory Beads */}
      <circle cx={introBeadPositions[0].x} cy={introBeadPositions[0].y} r={largeRadius} fill="#818cf8" stroke="#3730a3" strokeWidth="1" />
      <circle cx={introBeadPositions[1].x} cy={introBeadPositions[1].y} r={smallRadius} fill="#a5b4fc" stroke="#6366f1" strokeWidth="1" />
      <circle cx={introBeadPositions[2].x} cy={introBeadPositions[2].y} r={smallRadius} fill="#a5b4fc" stroke="#6366f1" strokeWidth="1" />
      <circle cx={introBeadPositions[3].x} cy={introBeadPositions[3].y} r={smallRadius} fill="#a5b4fc" stroke="#6366f1" strokeWidth="1" />

      {/* Crucifix (Simplified) */}
      <rect x={crucifixPos.x - 5} y={crucifixPos.y - 10} width="10" height="20" fill="#6b7280" />
      <rect x={crucifixPos.x - 10} y={crucifixPos.y - 5} width="20" height="5" fill="#6b7280" />
    </svg>
  );
};

export default RosarySVG;