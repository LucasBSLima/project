import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="text-4xl mb-4 text-center text-indigo-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-indigo-800 text-center">{title}</h3>
      <p className="text-slate-600 text-sm text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;