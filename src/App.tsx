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

const SECTION_IDS = [
  "header",
  "cardport",
  "portfolio",
  "experiences",
  "education",
  "writings",
  "skills",
  "contact",
] as const;

function App() {
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserScrollingRef = useRef(false);

  useEffect(() => {
    const shouldAutoScroll =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const getSectionElements = () =>
      SECTION_IDS
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);

    const updateCurrentSection = () => {
      const sections = getSectionElements();

      if (sections.length === 0) return;

      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = window.scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentIndexRef.current = closestIndex;
    };

    const scrollToSection = (index: number) => {
      const sectionId = SECTION_IDS[index];
      const section = document.getElementById(sectionId);

      if (!section) return;

      section.scrollIntoView({
        behavior: shouldAutoScroll ? "smooth" : "auto",
        block: "start",
      });
    };

    const startAutoScroll = () => {
      clearAllTimers();

      if (!shouldAutoScroll) return;

      intervalRef.current = setInterval(() => {
        if (isUserScrollingRef.current) return; // Don't auto-scroll if user is scrolling
        currentIndexRef.current = (currentIndexRef.current + 1) % SECTION_IDS.length;
        scrollToSection(currentIndexRef.current);
      }, 8000);
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
        timeoutRef.current = setTimeout(() => {
          if (!isUserScrollingRef.current) {
            startAutoScroll();
          }
        }, 15000);
      }, 150);
    };

    const handleResize = () => {
      updateCurrentSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const initialTimeout = setTimeout(() => {
      if (!isUserScrollingRef.current) {
        startAutoScroll();
      }
    }, 2000);

    updateCurrentSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
      <section id="writings">
        <Writings />
      </section>
      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
