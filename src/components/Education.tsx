import React from 'react';

import universityLogo from '../assets/makara.png'; // or .svg

const Education: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* University Logo */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-first md:order-last p-4 md:p-6">
        <img
          src={universityLogo}
          alt="Universitas Indonesia Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 lg:p-16">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Academic & Training
          </h1>
          <p className="mt-3 text-sm sm:text-base italic text-gray-600">
            “I love being a student, if I could, I'd stay in school forever.”
            <span className="ml-2">— Andrea Barber</span>
          </p>
        </div>

        {/* Spacer */}
        <div className="my-6 md:my-8"></div>

        {/* University */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Universitas Indonesia
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-gray-800">
            Information Systems
          </p>
          <p className="text-lg sm:text-xl text-gray-800">
            Faculty of Computer Science
          </p>
        </div>

        {/* Certifications & Training */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
            Certifications & Training
          </h3>

          <ul className="space-y-3 text-sm sm:text-base text-gray-800">
            <li>
              <strong>freeCodeCamp</strong> — Responsive Web Design, JavaScript,
              Frontend & Backend Development, Python, Relational Database,
              C# Foundations
            </li>

            <li>
              <strong>Full Stack Open</strong> — Full Stack Web Development
            </li>

            <li>
              <strong>Asia to Japan & PSJ UI</strong> — Japanese Language N5–N4
              (2 Semesters)
            </li>

            <li>
              <strong>Udemy</strong> — Backend Development (Go, PostgreSQL,
              Kubernetes, gRPC), Complete 2022 Data Science & ML Bootcamp,
              Java Data Structures & Algorithms
            </li>

            <li>
              <strong>Microsoft</strong> — Data Science, AI & Machine Learning
              Bootcamp
            </li>

            <li>
              <strong>Cisco Networking Academy</strong> — Python Essentials
              1–2, JavaScript Essentials 1–2
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
