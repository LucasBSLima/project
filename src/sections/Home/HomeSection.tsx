import React from "react";
import FeatureCard from "../../components/ui/FeatureCard";

const HomeSection: React.FC = () => {
  return (
    <div className="text-center py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-indigo-900">
        Welcome to the Cognitive Atlas
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-700">
        Explore the internal structure, historical development, theological layers, and cultural impact
        of Sacred Scripture and Catholic tradition through interactive visualizations.
      </p>

      {/* Feature cards highlighting main sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <FeatureCard
          title="Scriptural Architecture"
          description="Explore the Bible as a designed system of meaning with interconnected themes, typology, and narrative structures."
          icon="📜" // Scroll emoji
        />
        <FeatureCard
          title="Theological Networks"
          description="Visualize how doctrines connect to scripture, history, saints, and practices in an integrated system."
          icon="✝️" // Cross emoji
        />
        <FeatureCard
          title="Historical Continuity"
          description="Trace the development of Catholic thought through councils, controversies, and cultural adaptations over 2000 years."
          icon="⏳" // Hourglass emoji
        />
      </div>

      {/* List of features */}
      <div className="mt-8 p-5 bg-indigo-50 rounded-lg border border-indigo-100 max-w-4xl mx-auto shadow-sm">
        <h3 className="text-xl font-serif text-indigo-900 mb-4">Interactive Atlas Features</h3>
        <ul className="text-left grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-700">
          {/* List items with consistent styling */}
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Biblical text structure & commentary explorer</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Theological doctrine relationship mapping</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Interactive Church history timeline</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Visual liturgical calendar & sacred space</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Rosary mystery meditation interface</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Sacred art theological analysis</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Sacramental system overview</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2 font-bold">–</span>
            <span>Cultural impact gallery</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSection;