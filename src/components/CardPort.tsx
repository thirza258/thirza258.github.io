const CardPort = () => {
    const list_skills = ["Python", "Java", "Typescript","SQL", "Git", "HTML", "CSS", "Javascript", "Dart", "C#", "Go"]
    const list_frameworks = ["React", "Flutter", "Django", "Express", "ASP.NET","PostgreSQL", "MongoDB", "Firebase", "Jupyter"]
    
    const getRandomColor = () => {
        const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500", "text-indigo-500", "text-gray-500"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const numSkills = list_skills.length;
    const baseFontSize = 24; // base font size in pixels
    const maxFontSize = 36; // max font size in pixels
    const minFontSize = 16; // min font size in pixels

    const calculateFontSize = () => {
        const range = maxFontSize - minFontSize;
        const fontSize = baseFontSize - Math.floor(numSkills / 2); // Adjust baseFontSize based on the number of skills
        return Math.max(minFontSize, Math.min(maxFontSize, fontSize)); // Ensure font size is within range
    };

    return (
        <div className="bg-grey-50 px-10 w-[100wh] h-[100vh]" id="about">
  <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
      
      <h4
        className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        Saya Thirza, seorang Full Stack Developer dan Mahasiswa
      </h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div
        className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
      >
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-2xl text-primary"></i>
          </div>
        </div>
        <div
          className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
        >
          <a href="/">
            <i
              className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a href="/" className="pl-4">
            <i
              className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a href="/" className="pl-4">
            <i
              className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a href="/" className="pl-4">
            <i
              className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a href="/" className="pl-4">
            <i
              className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
                {list_skills.map((skill, index) => {
                    const fontSize = `${calculateFontSize()}px`;
                    return (
                        <div key={index}>
                            <div className="flex items-end justify-between">
                                <h4 className={`font-body font-semibold ${getRandomColor()} text-lg`} style={{ fontSize }}>
                                    {skill}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

  </div>
</div>
    )
}

export default CardPort;