import React from 'react';
import myPhoto from '../assets/my_photo.png'; // Update this path to your photo
import { thirzaAhmadTsaqifEnglish } from '../cv/cv';
import devpost from '../assets/devpost.png';

type PortfolioGridProps = {};

// A small reusable component for the grid items
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-transparent rounded-2xl p-6 border-2 border-black transition-all duration-300 hover:border-gray-600 ${className}`}>
    {children}
  </div>
);

const CardPort: React.FC<PortfolioGridProps> = () => {
    const myHeader = thirzaAhmadTsaqifEnglish.summary;
    const list_skills = ["Python", "Java", "Typescript", "SQL", "Git", "HTML", "CSS", "Javascript", "Dart", "C#", "Go"];
    const list_frameworks = ["React", "Flutter", "Django", "Express", "ASP.NET", "PostgreSQL", "MongoDB", "Firebase", "Jupyter"];
    const allSkills = [...list_skills, ...list_frameworks];

  return (
    <div className="text-black min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid Layout */}
        <main id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">

          {/* Profile Card */}
          <Card className="lg:col-span-2 flex flex-col sm:flex-row items-center gap-6">
            <img src={myPhoto} alt="Thirza" className="w-32 h-32 rounded-xl object-cover" />
            <div className="text-center sm:text-left">
              <p className="text-black text-sm">A FULL STACK DEVELOPER</p>
              <h2 className="text-3xl font-bold mt-1">Thirza</h2>
              <p className="text-black mt-2">{myHeader}</p>
            </div>
          </Card>


          {/* Social Profiles Card */}
          <Card>
            <p className="text-black text-sm">Lets Connect!</p>
            <h3 className="text-2xl font-semibold mt-2">Profiles</h3>
            <div className="flex items-center space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/thirza-ahmad" className="pl-0"><i className="bx bxl-linkedin text-3xl text-black hover:text-blue-400"></i></a>
                <a href="https://github.com/thirza258" className="pl-0"><i className="bx bxl-github text-3xl text-black hover:text-gray-600"></i></a>
                <a href="https://dev.to/thirza258" className="pl-0"><i className="bx bxl-dev-to text-3xl text-black hover:text-gray-600"></i></a>
                <a href="https://medium.com/@thirza258" className="pl-0"><i className="bx bxl-medium-square text-3xl text-black hover:text-gray-600"></i></a>
                <a
              href="https://devpost.com/thirza258?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Devpost Profile"
            >
              <img src={devpost} alt="Devpost" className="w-8 h-8" />
            </a>
            </div>
          </Card>

          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-5xl font-semibold">+15</p>
            <p className="text-black mt-2 leading-tight">TOTAL PROJECTS</p>
          </Card>
          {/* Let's Work Together Card */}
          <Card className="lg:col-span-2 flex flex-col justify-between items-start">
            <div id="contact">
              <p className="text-5xl font-bold">Let's</p>
              <p className="text-5xl font-bold">work <span className="text-blue-400">together.</span></p>
            </div>
            <div className="flex items-center justify-end w-full gap-2 mt-4">
              <a href="/CV_ThirzaAhmadTsaqif.pdf" download className="flex items-center gap-2 hover:text-gray-600">
                <span className="text-lg font-bold">Download My CV</span>
                <i className='bx bx-download text-2xl'></i>
              </a>
            </div>
          </Card>

        </main>
        
        {/* Horizontal Skills Carousel */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-12">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {allSkills.map((skill, index) => (
                    <li key={`skill-a-${index}`} className="text-black text-lg font-semibold">{skill}</li>
                ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {allSkills.map((skill, index) => (
                    <li key={`skill-b-${index}`} className="text-black text-lg font-semibold">{skill}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPort;