import React from 'react';

const Writings: React.FC = () => {
  const writings = [
    {
      title: "My Experiences Using Amazon Q for Creating the Literal Storyboard Game",
      platform: "AWS Builder",
      date: "January 2025", 
      description: "It’s a good chatbot for a new AI. For a relatively new tool, Amazon Q shows great potential. While it excels in generating code for simpl....",
      link: "https://builder.aws.com/content/2rbrpn8ptGnRcDOJG9iCNt0wzDw/my-experiences-using-amazon-q-for-creating-the-literal-storyboard-game"
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
