import { SetStateAction, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { thirzaAhmadTsaqifEnglish, thirzaAhmadTsaqifIndonesia, thirzaAhmadTsaqifJapanese } from '../cv/cv';
import ProjectDetailPanel from './ProjectDetailPanel';
import { Project } from '../interface/interface';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false); // State for entry animation
  const { language } = useLanguage();
  const projects = language === "ID" ? thirzaAhmadTsaqifIndonesia.projects : language === "EN" ? thirzaAhmadTsaqifEnglish.projects : thirzaAhmadTsaqifJapanese.projects;
  
  useEffect(() => {
    setHasLoaded(true);
    console.log(hasLoaded)
  }, []);

  const handlePrev = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };
  const handleCardClick = (project: Project) => {
    setSelectedProject(project as unknown as SetStateAction<null>);
  };

  const handleClosePanel = () => {
    setSelectedProject(null);
  };

  return (
    <div id="portfolio" className='p-4'>
      <div className="z-10 mb-6 p-6">
        <h2 className="font-bold text-5xl md:text-6xl">Selected Works</h2>
        <p className="text-lg text-gray-600 mt-2">Every project has challenges, and every project has its rewards.</p>
        <p className="text-sm text-gray-500 mt-1">- Stephen Schwartz</p>
      </div>
  
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-black overflow-hidden">
        <div className="absolute inset-0 z-0"></div>

        {/* Carousel Container */}
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center z-10">
          {projects.map((project, index) => {
            const isCurrent = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
            const isNext = index === (currentIndex + 1) % projects.length;

            let transform = '';
            let zIndex = 0;
            let opacity = 0;
            let filter = 'blur(8px)';
            let display = 'none';

            if (isCurrent) {
              transform = 'translateX(0) scale(1)';
              zIndex = 20;
              opacity = 1;
              filter = 'blur(0px)';
              display = 'block';
            } else if (isPrev) {
              transform = 'translateX(-90%) scale(0.75)';
              zIndex = 10;
              opacity = 0.5;
              display = 'block';
            } else if (isNext) {
              transform = 'translateX(90%) scale(0.75)';
              zIndex = 10;
              opacity = 0.5;
              display = 'block';
            }
            
            return (
              <div
                key={project.name}
                className={`absolute w-4/5 md:w-[80%] h-full transition-all duration-500 ease-in-out ${isCurrent ? 'cursor-pointer hover:scale-105' : ''}`}
                style={{ transform, zIndex, opacity, filter, display }}
                onClick={isCurrent ? () => handleCardClick(project as Project) : undefined}
                aria-label={isCurrent ? `View details for ${project.name}` : ''}
                role={isCurrent ? 'button' : undefined}
                tabIndex={isCurrent ? 0 : -1}
                onKeyDown={isCurrent ? (e) => e.key === 'Enter' && handleCardClick(project as Project) : undefined}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src={project.mainPhoto}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white/20 backdrop-blur-lg p-6 flex flex-col justify-center z-10">
                    <h3 className="text-gray-900 text-2xl md:text-4xl font-bold drop-shadow-lg">
                      {project.name}
                    </h3>
                    {isCurrent && (
                      <p className="text-gray-900 text-sm md:text-base mt-2 drop-shadow-md">
                        {project.description.join(' ').substring(0, 150)}...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="group absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-30 flex items-center justify-center w-14 h-14 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all duration-300"
          aria-label="Previous Project"
        >
          <FaChevronLeft className="text-gray-600 text-xl group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          className="group absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-30 flex items-center justify-center w-14 h-14 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all duration-300"
          aria-label="Next Project"
        >
          <FaChevronRight className="text-gray-600 text-xl group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* RENDER THE PANEL conditionally */}
      {selectedProject && <ProjectDetailPanel project={selectedProject} onClose={handleClosePanel} />}
    </div>
  );
};


export default Portfolio;