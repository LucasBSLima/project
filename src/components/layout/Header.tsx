import React from "react";
import NavButton from "../ui/NavButton";

interface HeaderProps {
  activeSection: string;
  navigateTo: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, navigateTo }) => {
  return (
    <header className="bg-indigo-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-serif mb-4 md:mb-0 text-center md:text-left">
            Cognitive Atlas of Sacred Tradition
          </h1>
          <nav className="flex flex-wrap justify-center gap-2">
            {/* Navigation Buttons */}
            <NavButton active={activeSection === "home"} onClick={() => navigateTo("home")} label="Home" />
            <NavButton active={activeSection === "bible"} onClick={() => navigateTo("bible")} label="Bible Explorer" />
            <NavButton active={activeSection === "theology"} onClick={() => navigateTo("theology")} label="Theology" />
            <NavButton active={activeSection === "history"} onClick={() => navigateTo("history")} label="Church History" />
            <NavButton active={activeSection === "liturgy"} onClick={() => navigateTo("liturgy")} label="Liturgy & Practice" />
            <NavButton active={activeSection === "culture"} onClick={() => navigateTo("culture")} label="Cultural Impact" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;