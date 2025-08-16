import React from 'react';

import universityLogo from '../assets/makara.png'; // or .svg

const Education: React.FC = () => {
    return (
      <section id="education" className="flex flex-col md:flex-row w-full min-h-screen bg-white">
        {/* University Logo - Shows first on mobile */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-first md:order-last p-6 md:p-8">
          <img
            src={universityLogo}
            alt="Universitas Indonesia Logo"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Content - Shows second on mobile */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-24">
          
          {/* Academic and Training Header */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Academic and Training
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl italic text-gray-600">
              "I love being a student, if I could, I'd stay in school forever."
              <br className="hidden sm:block" />
              <span className="sm:ml-2">-Andrea Barber</span>
            </p>
          </div>
  
          {/* Spacer Div for vertical distance */}
          <div className="my-8 md:my-12 lg:my-16"></div>
  
          {/* University Details */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Universitas Indonesia
            </h2>
            <p className="mt-3 text-xl sm:text-2xl lg:text-3xl text-gray-800">
              Majoring in Information System
            </p>
            <p className="mt-1 text-xl sm:text-2xl lg:text-3xl text-gray-800">
              Faculty of Computer Science
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;