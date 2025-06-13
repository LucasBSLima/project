import React, { useState } from "react";
import TabButton from "../../components/ui/TabButton";
import LiturgicalCalendar from "./LiturgicalCalendar";
import ChurchArchitecture from "./ChurchArchitecture";
import RosaryVisualizer from "./RosaryVisualizer";
import SacramentalSystem from "./SacramentalSystem";

const LiturgicalSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState("calendar"); // Default to calendar view

  return (
    <div className="pb-8">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-indigo-900">
        Liturgy & Practice: Sacred Time, Space, and Symbol
      </h2>

      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-indigo-200 mb-6 justify-center">
        <TabButton active={activeTab === "calendar"} onClick={() => setActiveTab("calendar")} label="Liturgical Calendar" />
        <TabButton active={activeTab === "architecture"} onClick={() => setActiveTab("architecture")} label="Sacred Architecture" />
        <TabButton active={activeTab === "rosary"} onClick={() => setActiveTab("rosary")} label="Rosary Devotion" />
        <TabButton active={activeTab === "sacraments"} onClick={() => setActiveTab("sacraments")} label="Sacramental System" />
      </div>

      {/* Content based on active tab */}
      {activeTab === "calendar" && <LiturgicalCalendar />}
      {activeTab === "architecture" && <ChurchArchitecture />}
      {activeTab === "rosary" && <RosaryVisualizer />}
      {activeTab === "sacraments" && <SacramentalSystem />}
    </div>
  );
};

export default LiturgicalSystem;