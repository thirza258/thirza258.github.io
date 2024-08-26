const CardPort = () => {
  const list_skills = [
    "Python",
    "Java",
    "Typescript",
    "SQL",
    "Git",
    "HTML",
    "CSS",
    "Javascript",
    "Dart",
    "C#",
    "Go",
  ];

  const list_frameworks = [
    "React",
    "Flutter",
    "Django",
    "Express",
    "ASP.NET",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Jupyter",
  ];

  const getRandomColor = () => {
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
      "text-indigo-500",
      "text-gray-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const numSkills = list_skills.length;
  const baseFontSize = 24; // base font size in pixels
  const maxFontSize = 36; // max font size in pixels
  const minFontSize = 16; // min font size in pixels

  const calculateFontSize = () => {
    const fontSize = baseFontSize - Math.floor(numSkills / 2); // Adjust baseFontSize based on the number of skills
    return Math.max(minFontSize, Math.min(maxFontSize, fontSize)); // Ensure font size is within range
  };

  return (
    <div className="bg-grey-50 px-10 w-[100wh] h-[100vh]" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Thirza, a Full Stack Developer and Student
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Enthusiastic, self motivated, and hard working student. Currently an
            Information System student in University of Indonesia. Creative
            person who likes programming and design. Seeking a position as a
            software engineer to gain experience and enhance problem solving
            skills.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a
                href="https://www.linkedin.com/in/thirza-ahmad"
                className="pl-4"
              >
                <i className="bx bxl-linkedin text-2xl text-black hover:text-yellow"></i>
              </a>
              <a href="https://github.com/thirza258" className="pl-4">
                <i className="bx bxl-github text-2xl text-black hover:text-yellow"></i>
              </a>
              <a href="https://dev.to/thirza258" className="pl-4">
                <i className="bx bxl-dev-to text-2xl text-black hover:text-yellow"></i>
              </a>
              <a href="https://dev.to/thirza258" className="pl-4">
                <i className="bx bxl-medium-square text-2xl text-black hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}
          >
            {list_skills.map((skill, index) => {
              const fontSize = `${calculateFontSize()}px`;
              return (
                <div key={index}>
                  <div className="flex items-end justify-between">
                    <h4
                      className={`font-body font-semibold ${getRandomColor()} text-lg`}
                      style={{ fontSize }}
                    >
                      {skill}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Frameworks I've worked with
        </h3>
      </div>
      
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10`}
      >
        {list_frameworks.map((framework, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-center">
                <h4
                  className={`font-body font-semibold ${getRandomColor()} text-lg`}
                >
                  {framework}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardPort;
