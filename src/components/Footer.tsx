

import { useState, useEffect } from "react";
import LegalModal from "./LegalModal";

const Footer = () => {
  // Making the year dynamic is a good practice.
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<{ open: boolean; tab: "privacy" | "terms" }>({
    open: false,
    tab: "privacy",
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#privacy") {
        setLegalModal({ open: true, tab: "privacy" });
      } else if (hash === "#terms") {
        setLegalModal({ open: true, tab: "terms" });
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    // Use a semantic <footer> tag for better SEO and accessibility.
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* 
          - flex-col on mobile to stack elements vertically.
          - sm:flex-row to place them side-by-side on small screens and up.
          - items-center to vertically align content.
          - justify-between to push content to the edges on larger screens.
        */}
        <div className="flex flex-col sm:flex-row items-center justify-between">

          {/* Copyright notice and Legal Links */}
          <div className="text-sm text-center sm:text-left mb-4 sm:mb-0 space-y-1">
            <p>
              © Copyright {currentYear}. All right reserved.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400">
              <button
                onClick={() => setLegalModal({ open: true, tab: "privacy" })}
                className="hover:text-yellow-400 transition-colors underline"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setLegalModal({ open: true, tab: "terms" })}
                className="hover:text-yellow-400 transition-colors underline"
              >
                Terms of Service
              </button>
              <span>·</span>
              <span>This project is under <a href="https://nevatal.id" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 underline">nevatal.id</a> for educational purposes.</span>
            </div>
          </div>

          {/* 
            Social media links container.
            - Using space-x-6 on the parent is cleaner than adding padding to each link.
          */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/thirza-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/thirza258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a
              href="https://dev.to/thirza258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev.to Profile"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <i className="bx bxl-dev-to text-2xl"></i>
            </a>
            {/* Corrected the link and icon for Medium */}
            <a
              href="https://medium.com/@thirza258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Profile"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <i className="bx bxl-medium-square text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-300">
          <p className="mb-2">Check out my creative works!</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://p-l-a-y2.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 px-4 py-2 bg-[#FA5C5C] rounded-lg hover:bg-[#ff4444] transition-colors duration-300"
            >
              <i className="bx bxl-itch-io text-xl"></i>
              <span>Assets on itch.io</span>
            </a>
            <a
              href="https://www.cgtrader.com/designers/thirzq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 px-4 py-2 bg-[#4CAF50] rounded-lg hover:bg-[#45a049] transition-colors duration-300"
            >
              <i className="bx bx-cube-alt text-xl"></i>
              <span>3D Models on CGTrader</span>
            </a>
          </div>
        </div>
      </div>
      <LegalModal
        isOpen={legalModal.open}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal((prev) => ({ ...prev, open: false }))}
      />
    </footer>
  );
};

export default Footer;