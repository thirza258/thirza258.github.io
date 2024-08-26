import { useState } from "react";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Portfolio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-apple.jpeg",
    },
    {
      id: 2,
      title: "Portfolio 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook.jpeg",
    },
    {
      id: 3,
      title: "Portfolio 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro.jpeg",
    },
    {
      id: 4,
      title: "Portfolio 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-2.jpeg",
    },
    {
      id: 5,
      title: "Portfolio 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-3.jpeg",
    },
    {
      id: 6,
      title: "Portfolio 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu. Sed sit amet accumsan arcu.",
      href: "/",
      img: "/assets/img/portfolio-macbook-pro-4.jpeg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1));
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
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${portfolio.length * 100}%` }}>
          {portfolio.map((port, index) => (
            <div key={index} className="relative w-[294px] h-[439px] flex-shrink-0 transition-transform duration-500 flex-grow-0">
              <div className="absolute inset-0 w-full h-full bg-gray-400"></div>
              <div className="absolute bottom-0 w-[85%] bg-black bg-opacity-80 p-4 flex flex-col rounded-lg justify-center ml-12" style={{ height: "60%" }}>
                <h2 className="text-white text-xl font-bold">{port.title}</h2>
                <p className="text-white mt-2">{port.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Prev</button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Next</button>
    </div>
      </div>
    </div>
  );
};

export default Portfolio;
