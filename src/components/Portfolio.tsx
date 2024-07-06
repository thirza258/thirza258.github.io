const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            title: "Portfolio 1",
            href: "/",
            img: "/assets/img/portfolio-apple.jpeg"
        }
    ]

    return (
        <div>
            <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"/>
        {portfolio.map((port, index) => {
            return (
            <a key={index} href={port.href} className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src={port.img} className="w-full shadow" alt={port.title}/>
            </a>
            )
        })};
        </div>
        </div>
    )
}

export default Portfolio;