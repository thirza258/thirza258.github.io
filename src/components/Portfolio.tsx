import { useState, useRef } from "react";

const Portfolio = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const portfolio = [
    {
      id: 1,
      title: "Portfolio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-apple.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Portfolio 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Portfolio 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Portfolio 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-2.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 5,
      title: "Portfolio 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-3.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 6,
      title: "Portfolio 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-4.jpeg",
      lang: ["React", "Node.js", "MongoDB"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="container mx-auto py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done in the past
        </h3>
        <div className="relative mt-10">
          <div className="overflow-hidden relative">
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 space-x-6 overflow-x-scroll scrollbar-hide"
            >
              {portfolio.map((port, index) => (
                <div
                  key={index}
                  className="relative w-[294px] h-[439px] flex-shrink-0 transition-transform duration-500 bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Image or Background */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full bg-gray-400"></div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                    <h2 className="text-white text-2xl font-bold">
                      {port.title}
                    </h2>
                    <p className="text-white mt-2 text-sm">
                      {port.description}
                    </p>
                    <div className="flex space-x-2 mt-4">
              {port.lang.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              &lt;
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
