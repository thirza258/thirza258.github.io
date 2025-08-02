import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 1. Your project data, updated with an 'img' property for the background.
// TODO: Replace these placeholder images with your actual project images.
const projects = [
  {
    name: 'Integrated Information Systems (SIT)',
    organization: 'BEM UI',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: [
      'Developed and maintained a comprehensive website that managed BEM UI\'s affairs—social media publications, financial processes (reimbursement and income/expenditure), and partnership/sponsorship documentation—improving operational efficiency.',
      'Implemented the system using the Django Framework with Firebase, streamlining functionality and authentication processes for enhancement in user access speed and security.',
      'Deployed the project project on Railway.',
      'Developed and maintained a LINE Messaging API to facilitate organizational mail and publication tasks, reducing communication delays and enabling direct access to features, benefiting over 200 active users.',
    ],
  },
  {
    name: 'RAGReader',
    context: 'NextAI Hackathon Submission',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    links: {
      githubBackend: '[Github Backend]',
      githubFrontend: '[Github Frontend]',
      devpost: '[Devpost]',
    },
    description: [
      'Developed a RAG-based website that retrieves content from a provided URL or file and generates responses based on user prompts.',
      'Built the backend using Django REST Framework and the frontend with Vite, React, TypeScript, and Tailwind CSS',
      'Implemented LangChain as the RAG pipeline for efficient retrieval-augmented generation.',
      'Integrated multiple generative AI models, including OpenAI, Claude, and Mistral, to enhance response quality.',
    ],
  },
  {
    name: 'Open Recruitment Website API',
    organization: 'BEM Fasilkom UI',
    img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: [
      "Developed a recruitment website for selecting the next term's BEM Fasilkom UI members.",
      'Built using Go with the Gin framework and PostgreSQL.',
      'Adhere to API Documentation and contract to increasing integration with Frontend',
    ],
  },
  {
    name: 'API LPJ Online',
    organization: 'BEM Fasilkom UI',
    img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: [
      'Developed a robust website API to manage programs and reports for BEM Fasilkom UI, reducing manual processing time and increasing data accessibility for over 200 users.',
      'Utilized Django REST Framework and PostgreSQL, enhancing data handling efficiency and scalability, and achieving a query response time improvement',
      'Ensured strict adherence to the API Contract, resulting in a seamless integration with existing systems and a 100% compatibility rate to Frontend application.',
      'Implemented SonarQube for continuous code quality monitoring.',
    ],
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    // The main container needs to be relative to position the buttons
    <div className='p-4'>
      <div className="z-10 mb-6 p-6">
        <h2 className="font-bold text-5xl md:text-6xl">Selected Works</h2>
        <p className="text-lg text-gray-600 mt-2">Every project has challenges, and every project has its rewards.</p>
        <p className="text-sm text-gray-500 mt-1">- Stephen Schwartz</p>
      </div>
  
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden">
      {/* Optional: Faint background pattern or color */}
      <div className="absolute inset-0 bg-white z-0"></div>

      
      {/* Carousel Container */}
      <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center z-10">
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
            transform = 'translateX(-80%) scale(0.75)';
            zIndex = 10;
            opacity = 0.5;
            display = 'block';
          } else if (isNext) {
            transform = 'translateX(80%) scale(0.75)';
            zIndex = 10;
            opacity = 0.5;
            display = 'block';
          }

          return (
            <div
              key={project.name}
              className="absolute w-4/5 md:w-[65%] h-full transition-all duration-500 ease-in-out"
              style={{ transform, zIndex, opacity, filter, display }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={project.img}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <h3 className="text-black text-3xl md:text-5xl font-extrabold text-center transform -rotate-6 select-none">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- MODIFIED NAVIGATION BUTTONS --- */}
      {/* The buttons are now direct children of the main relative container */}
      
      {/* Left Navigation Button */}
      <button
        onClick={handlePrev}
        className="group absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-30 flex items-center justify-center w-14 h-14 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all duration-300"
        aria-label="Previous Project"
      >
        <FaChevronLeft className="text-gray-600 text-xl group-hover:scale-110 transition-transform" />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={handleNext}
        className="group absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-30 flex items-center justify-center w-14 h-14 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all duration-300"
        aria-label="Next Project"
      >
        <FaChevronRight className="text-gray-600 text-xl group-hover:scale-110 transition-transform" />
      </button>
  

    </div>
    </div>
  );
};

export default Portfolio;