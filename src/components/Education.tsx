import React from 'react';

import universityLogo from '../assets/makara.png'; // or .svg

const Education: React.FC = () => {
    return (
      <section className="flex w-full min-h-screen bg-white">
        {/* Left Column: Text Content (50% width) */}
        <div className="w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24">
          
          {/* Academic and Training Header */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Academic and Training
            </h1>
            <p className="mt-5 text-lg lg:text-xl italic text-gray-600">
              "I love being a student, if I could, I'd stay in school forever."
              <br />
              -Andrea Barber
            </p>
          </div>
  
          {/* Spacer Div for vertical distance */}
          <div className="my-10 md:my-16"></div>
  
          {/* University Details */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Universitas Indonesia
            </h2>
            <p className="mt-4 text-2xl lg:text-3xl text-gray-800">
              Majoring in Information System
            </p>
            <p className="mt-1 text-2xl lg:text-3xl text-gray-800">
              Faculty of Computer Science
            </p>
          </div>
        </div>
  
        {/* Right Column: University Logo (50% width) */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <img
            src={universityLogo}
            alt="Universitas Indonesia Logo"
            className="w-full max-w-lg" // Adjust max-w-* to scale the logo as needed
          />
        </div>
      </section>
    );
  };
  
  export default Education;