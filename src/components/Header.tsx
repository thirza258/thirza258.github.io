import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import devpost from '../assets/devpost.png';
import { nevatalUrl } from '../lib/nevatal';
import { trackEvent } from '../lib/analytics';
import { scrollToSection, setIntent } from '../lib/intent';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const handleHiringClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIntent('hiring');
    trackEvent('intent_selected', { intent: 'hiring' });
    scrollToSection('career');
    window.history.replaceState(null, '', '#career');
  };

  const handleStudioClick = () => {
    setIntent('studio');
    trackEvent('intent_selected', { intent: 'studio' });
  };

  return (
    <div className="min-h-screen w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
      
      <main className="w-full flex flex-col md:flex-row justify-between items-start md:items-end">
        
        <div className="w-full md:w-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight font-sans">
            <TypeAnimation
              sequence={[
                "Hi, I'm Thirza",
                1000,
                "Hi, I'm a Programmer", 
                1000,
                "Hi, I'm Thirza",
                1000,
                "Hi, I'm a Developer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Backend &amp; AI engineer building production systems — and Nevatal, the studio where
            they ship.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Start here:</span>
            <a
              href="#career"
              onClick={handleHiringClick}
              aria-label="For hiring — jump to career highlights"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-4 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              For Hiring <span aria-hidden="true">↓</span>
            </a>
            <a
              href={nevatalUrl('hero_split')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleStudioClick}
              aria-label="For the studio — open nevatal.id in a new tab"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-4 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              For the Studio <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cardport"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('cardport');
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-black
                        border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-200
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto mt-12 md:mt-0 md:pb-2 text-left md:text-right">
          <p className="text-base sm:text-lg">
            Let's connect
          </p>
          
          <div className="flex items-center justify-start md:justify-end space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/thirza-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <i className="bx bxl-linkedin text-3xl"></i>
            </a>
            <a
              href="https://github.com/thirza258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <i className="bx bxl-github text-3xl"></i>
            </a>
            <a
              href="https://dev.to/thirza258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Dev.to Profile"
            >
              <i className="bx bxl-dev-to text-3xl"></i>
            </a>
            <a
              href="https://medium.com/@thirza258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Medium Profile"
            >
              <i className="bx bxl-medium-square text-3xl"></i>
            </a>
            <a
              href="https://devpost.com/thirza258?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Devpost Profile"
            >
              <img src={devpost} alt="Devpost" className="w-8 h-8 flex-shrink-0" />
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Header;