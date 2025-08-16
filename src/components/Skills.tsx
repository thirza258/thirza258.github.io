import React, { useState } from 'react';
import { thirzaAhmadTsaqifEnglish, thirzaAhmadTsaqifIndonesia, thirzaAhmadTsaqifJapanese } from '../cv/cv';
import { useLanguage } from '../context/LanguageContext';
import { SkillCardProps, TechnicalSkill } from '../interface/interface';


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



const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="skills" className="border-2 border-black rounded-lg mb-4 overflow-hidden bg-white text-black hover:shadow-2xl transition-all duration-300 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white w-full flex justify-between items-center p-5 text-left font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
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
          <ul className="list-disc list-outside ml-5 space-y-3 text-black">
            {skill.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          {skill.images && skill.images.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg text-black">Related Projects & Certificates:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skill.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-md object-cover w-full h-auto border-2 border-black hover:border-gray-800 transition-all duration-300"
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

const Skills = () => {
  const { language } = useLanguage();
  const skills = language === "ID" ? thirzaAhmadTsaqifIndonesia.technicalSkills : language === "EN" ? thirzaAhmadTsaqifEnglish.technicalSkills : thirzaAhmadTsaqifJapanese.technicalSkills;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="z-10 mb-12">
          <h2 className="font-bold text-5xl md:text-6xl">Technical Skills</h2>
          <p className="text-lg text-gray-600 mt-2">The only source of knowledge is experience.</p>
          <p className="text-sm text-gray-500 mt-1">- Albert Einstein</p>
        </div>
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