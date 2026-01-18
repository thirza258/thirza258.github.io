import React from 'react';

const Writings: React.FC = () => {
  const writings = [
    {
  title: "How I SSH the Cloudflare Tunnel–Based Home Server",
  platform: "dev.to",
  date: "January 2025",
  description: "A practical walkthrough on securely accessing a home server via SSH using Cloudflare Tunnel, eliminating the need for static IPs and open inbound ports.",
  link: "https://dev.to/thirza258/how-i-ssh-the-cloudflare-tunnel-based-home-server-2fpj"
  },
  {
    title: "How I Handle Dynamic IP for My Home Server",
    platform: "dev.to",
    date: "January 2025",
    description: "An overview of strategies for managing dynamic IP addresses in a home server setup, ensuring reliable remote access and service availability.",
    link: "https://dev.to/thirza258/how-i-handle-dynamic-ip-for-my-home-server-40np"
  },
  {
    title: "Nevatal Joins Hacktoberfest 2025: Build the Future of AI Functions Hub",
    platform: "dev.to",
    date: "October 2025",
    description: "An announcement and overview of Nevatal’s participation in Hacktoberfest 2025, focusing on open-source collaboration and building an AI Functions Hub.",
    link: "https://dev.to/thirza258/nevatal-joins-hacktoberfest-2025-build-the-future-of-ai-functions-hub-49ai"
  },
    {
      title: "My Experiences Using Amazon Q for Creating the Literal Storyboard Game",
      platform: "AWS Builder",
      date: "January 2025", 
      description: "It’s a good chatbot for a new AI. For a relatively new tool, Amazon Q shows great potential. While it excels in generating code for simpl....",
      link: "https://builder.aws.com/content/2rbrpn8ptGnRcDOJG9iCNt0wzDw/my-experiences-using-amazon-q-for-creating-the-literal-storyboard-game"
    },
  ];

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="z-10 mb-12">
        <h2 className="font-bold text-5xl md:text-6xl">Technical Writings</h2>
        <p className="text-lg text-gray-600 mt-2">Sharing knowledge and experiences through technical articles</p>
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
