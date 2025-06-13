import React, { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomeSection from "../sections/Home/HomeSection";
import BibleExplorer from "../sections/Bible/BibleExplorer";
import TheologySystem from "../sections/Theology/TheologySystem";
import ChurchHistoryTimeline from "../sections/History/ChurchHistoryTimeline";
import LiturgicalSystem from "../sections/Liturgy/LiturgicalSystem";
import CulturalImpact from "../sections/Culture/CulturalImpact";
import ArtworkModal from "../sections/Culture/ArtworkModal";

export default function CatholicCognitiveAtlas() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeBook, setActiveBook] = useState(null);
  const [activeDoctrine, setActiveDoctrine] = useState(null);
  const [timelinePosition, setTimelinePosition] = useState(500); // Default year for timeline
  const [expandedArtwork, setExpandedArtwork] = useState(null);

  // Handle section navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    // Reset sub-selections when changing main sections to avoid stale state
    setActiveBook(null);
    setActiveDoctrine(null);
    setExpandedArtwork(null);
  };

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col font-sans">
      {/* Header with navigation */}
      <Header activeSection={activeSection} navigateTo={navigateTo} />

      {/* Main content area */}
      <main className="flex-grow overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Conditional Rendering based on activeSection state */}
          {activeSection === "home" && <HomeSection />}
          {activeSection === "bible" && (
            <BibleExplorer
              activeBook={activeBook}
              setActiveBook={setActiveBook}
            />
          )}
          {activeSection === "theology" && (
            <TheologySystem
              activeDoctrine={activeDoctrine}
              setActiveDoctrine={setActiveDoctrine}
            />
          )}
          {activeSection === "history" && (
            <ChurchHistoryTimeline
              position={timelinePosition}
              setPosition={setTimelinePosition}
            />
          )}
          {activeSection === "liturgy" && <LiturgicalSystem />}
          {activeSection === "culture" && (
            <CulturalImpact setExpandedArtwork={setExpandedArtwork} />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal for Expanded Artwork */}
      {expandedArtwork && (
        <ArtworkModal artwork={expandedArtwork} onClose={() => setExpandedArtwork(null)} />
      )}
    </div>
  );
}