const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Portfolio 1",
      href: "/",
      img: "/assets/img/portfolio-apple.jpeg",
    },
  ];

  return (
<div>
  <div className="container mx-auto py-16 md:py-20" id="portfolio">
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      Portfolio
    </h2>
    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
      Here's what I have done in the past
    </h3>
    <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-2">
      {portfolio.map((port, index) => (
        <a
          key={index}
          href={port.href}
          className="block transform transition-all hover:scale-105"
        >
          <img src={port.img} className="w-full shadow" alt={port.title} />
        </a>
      ))}
    </div>
  </div>
</div>



  );
};

export default Portfolio;
