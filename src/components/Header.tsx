import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import devpost from '../assets/devpost.png';

// It's good practice to define props, even if they are empty for now.
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    // Set a minimum height of the screen to ensure it fills the viewport
    // on all devices. Padding is adjusted for different screen sizes.
    <div className="min-h-screen w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
      
      {/* 
        Main content container.
        - flex-col on mobile, md:flex-row on medium screens and up.
        - items-start to align content to the top on mobile.
        - md:items-end to align items at the bottom of their container on larger screens.
        - justify-between to push the two main sections apart.
      */}
      <main className="w-full flex flex-col md:flex-row justify-between items-start md:items-end">
        
        {/* Large headline text */}
        <div className="w-full md:w-auto">
          {/* 
            Responsive font sizes.
            - Starts at 4xl on extra-small screens.
            - Increases for sm, md, lg, and xl breakpoints.
            - `leading-tight` or `leading-none` helps manage line height.
          */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-black leading-tight font-sans">
            <TypeAnimation
              sequence={[
                "Hello, I'm Thirza",
                1000,
                "Hello, I'm a Programmer", 
                1000,
                "Hello, I'm Thirza",
                1000,
                "Hello, I'm a Developer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>
        </div>
        
        {/* "Let's connect" section */}
        {/* 
          - mt-12 on mobile to create space below the title.
          - md:mt-0 to remove top margin on larger screens as it's now side-by-side.
          - md:pb-2 to slightly adjust vertical alignment with the large text.
          - text-left on mobile, md:text-right on larger screens.
        */}
        <div className="w-full md:w-auto mt-12 md:mt-0 md:pb-2 text-left md:text-right">
          <p className="text-base sm:text-lg">
            Let's connect
          </p>
          
          {/* 
            Social Media Links.
            - justify-start on mobile, md:justify-end on larger screens.
            - Increased icon size for better touch targets on mobile (text-3xl).
          */}
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
              <img src={devpost} alt="Devpost" className="w-8 h-8" />
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Header;