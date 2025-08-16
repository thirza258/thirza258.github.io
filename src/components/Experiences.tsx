import React from 'react';
// Make sure this import path is correct for your project structure
import { thirzaAhmadTsaqifEnglish, thirzaAhmadTsaqifIndonesia, thirzaAhmadTsaqifJapanese } from "../cv/cv";
import { useLanguage } from '../context/LanguageContext';

const Experiences: React.FC = () => {
  const { language } = useLanguage();
  const experiences = language === "ID" ? thirzaAhmadTsaqifIndonesia.experiences : language === "EN" ? thirzaAhmadTsaqifEnglish.experiences : thirzaAhmadTsaqifJapanese.experiences;

  const formatExperienceDate = (dateStr: string): string => {
    if (dateStr === 'Present') {
      return 'Present';
    }

    const date = new Date(`${dateStr} 1`);

    if (isNaN(date.getTime())) {
      return dateStr; 
    }

    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="container mx-auto py-8" id="experiences">
      <div className="z-10 mb-12">
          <h2 className="font-bold text-5xl md:text-6xl">Career Highlights</h2>
          <p className="text-lg text-gray-600 mt-2">The only source of knowledge is experience.</p>
          <p className="text-sm text-gray-500 mt-1">- Albert Einstein</p>
        </div>
      <div className="relative px-10">
        <div 
          className="absolute ms-10 h-full w-0.5 bg-gray-300" 
          style={{ left: '20px' }} 
        >
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-10">
            <div 
              className="absolute z-10 bg-gray-800 rounded-full flex items-center justify-center py-1 px-3"
              style={{ 
                left: '20px',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <span className="text-white text-xs font-semibold whitespace-nowrap">
                {formatExperienceDate(exp.startDate)} - {formatExperienceDate(exp.endDate)}
              </span>
            </div>

            <div 
              className="ml-24 transition-all duration-300 ease-in-out hover:scale-105 group"
            > 
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 relative group-hover:z-20">
                <div className="flex items-start mb-4">
                  <img 
                    src={exp.photo} 
                    alt={`${exp.company} logo`} 
                    className="w-12 h-12 mr-4 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{exp.title}</h3>
                    <p className="text-sm font-semibold text-blue-600">{exp.company}</p>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-sm text-gray-700 mb-4">{exp.description}</p>
                )}

                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;