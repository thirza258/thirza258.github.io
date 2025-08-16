import { useEffect, useRef } from "react";
import Header from "./components/Header";
import CardPort from "./components/CardPort";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Writings from "./components/Writings";
import "./index.css";

function App() {
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserScrollingRef = useRef(false);
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("section");
    const sections = sectionsRef.current;

    if (sections.length === 0) return;

    const clearAllTimers = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const startAutoScroll = () => {
      clearAllTimers();
      
      intervalRef.current = setInterval(() => {
        if (isUserScrollingRef.current) return; // Don't auto-scroll if user is scrolling
        
        currentIndexRef.current = (currentIndexRef.current + 1) % sections.length;
        sections[currentIndexRef.current].scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 8000); // Increased from 5000ms to 8000ms for slower auto-scroll
    };

    const updateCurrentSection = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If at bottom of page, set to last section
      if (scrollTop + windowHeight >= documentHeight - 50) {
        currentIndexRef.current = sections.length - 1;
        return;
      }

      // Find which section is most visible
      let maxVisibleArea = 0;
      let mostVisibleIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleIndex = index;
        }
      });

      currentIndexRef.current = mostVisibleIndex;
    };

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      isUserScrollingRef.current = true;
      clearAllTimers();

      // Clear the previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Update current section immediately
      updateCurrentSection();

      // Set user scrolling to false after scrolling stops
      scrollTimeout = setTimeout(() => {
        isUserScrollingRef.current = false;
        
        // Restart auto-scroll after user stops scrolling for 15 seconds
        timeoutRef.current = setTimeout(() => {
          if (!isUserScrollingRef.current) {
            startAutoScroll();
          }
        }, 15000); // Increased from 10000ms to 15000ms
      }, 150); // Wait 150ms after scroll stops
    };

    // Handle wheel events to detect user scrolling
    const handleWheel = () => {
      isUserScrollingRef.current = true;
    };

    // Handle touch events for mobile
    const handleTouchStart = () => {
      isUserScrollingRef.current = true;
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    // Start auto-scroll initially
    const initialTimeout = setTimeout(() => {
      if (!isUserScrollingRef.current) {
        startAutoScroll();
      }
    }, 2000); // Start after 2 seconds

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      clearAllTimers();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <section id="header">
        <Header />
      </section>
      <section id="cardport">
        <CardPort />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="writings">
        <Writings />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;