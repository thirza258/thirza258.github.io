import React from 'react';

const Writings: React.FC = () => {
  const writings = [
    {
      title: "Building AI-Powered Root Cause Analysis Tools",
      platform: "Medium",
      date: "March 2024",
      description: "A deep dive into developing RCA tools using RAG and LLMs",
      link: "https://medium.com/@thirza258/building-ai-powered-root-cause-analysis-tools"
    },
    {
      title: "Computer Vision for Workplace 5S Implementation",
      platform: "Dev.to", 
      date: "February 2024",
      description: "How we used CV to automate 5S workplace organization assessment",
      link: "https://dev.to/thirza258/computer-vision-5s-implementation"
    },
    {
      title: "Implementing RAG with Local GPU Infrastructure",
      platform: "Medium",
      date: "January 2024", 
      description: "Technical guide on self-hosting RAG systems with GPU acceleration",
      link: "https://medium.com/@thirza258/implementing-rag-local-gpu"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Technical Writings
        </h2>
        <p className="mt-3 text-xl text-gray-500">
          Sharing knowledge and experiences through technical articles
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {writings.map((article, index) => (
          <a 
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">{article.platform}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600">
              {article.description}
            </p>
            <div className="mt-4 flex items-center text-primary hover:text-blue-600">
              <span>Read article</span>
              <i className="bx bx-right-arrow-alt ml-2"></i>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Writings;
