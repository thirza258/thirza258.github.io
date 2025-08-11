import React, { useState } from 'react';
import { thirzaAhmadTsaqifEnglish, thirzaAhmadTsaqifIndonesia, thirzaAhmadTsaqifJapanese } from '../cv/cv';
import { useLanguage } from '../context/LanguageContext';



const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transform text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


// --- SkillCard Component (Internal to this file) ---
interface SkillCardProps {
  skill: TechnicalSkill;
}

interface TechnicalSkill {
  skill: string;
  details: string[];
  images?: { src: string; alt: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gray-300 rounded-lg mb-4 overflow-hidden dark:bg-slate-800 dark:text-white bg-white text-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-slate-800 w-full flex justify-between items-center p-5 text-left font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-expanded={isOpen}
      >
        <span>{skill.skill}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {/* Collapsible Content */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5 pt-2">
          <ul className="list-disc list-outside ml-5 space-y-3 text-gray-700">
            {skill.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          {skill.images && skill.images.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg text-gray-900">Related Projects & Certificates:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skill.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-md object-cover w-full h-auto shadow-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Main Skills Component (Exported) ---
const Skills = () => {
  const { language } = useLanguage();
  const skills = language === "ID" ? thirzaAhmadTsaqifIndonesia.technicalSkills : language === "EN" ? thirzaAhmadTsaqifEnglish.technicalSkills : thirzaAhmadTsaqifJapanese.technicalSkills;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-white mb-10">
          Technical Skills
        </h2>
        <div className="space-y-4">
          {skills.map((skill: TechnicalSkill) => (
            <SkillCard key={skill.skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;