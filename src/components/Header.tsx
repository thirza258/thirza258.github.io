import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import devpost from '../assets/devpost.png';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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