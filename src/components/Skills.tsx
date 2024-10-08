import front_end_logo from "../assets/front_end_logo.png";
import backend_dev_logo from "../assets/backend_dev_logo.png";
import mobile_dev_logo from "../assets/mobile_dev_logo.png";
import blender_logo from "../assets/blender_icon.png";

const Skills = () => {
  const skills = [
    {
      icon: front_end_logo,
      text: "Mendesain Website dan Memprogram Website ",
      title: "Front End Development",
      framework: [
        "React",
        "Typescript",
        "Javascript",
        "TailwindCSS",
        "Bootstrap",
        "Material-UI",
      ],
    },
    {
      icon: mobile_dev_logo,
      title: "Mobile Development",
      text: "Memprogram Aplikasi Mobile",
      framework: ["Flutter", "Java", "Dart", "XML"],
    },
    {
      icon: backend_dev_logo,
      title: "BACK END DEVELOPMENT",
      text: "Memprogram Server, Database dan Membuat API",
      framework: [
        "NodeJS",
        "Express",
        "MongoDB",
        "Firebase",
        "PostgreSQL",
        "ASP.NET",
        "Django",
        "Go",
      ],
    },
    // {
    //   icon: "/assets/img/icon-development-white.svg",
    //   title: "Desktop DEVELOPMENT",
    //   text: "Memprogram Aplikasi Desktop",
    //   framework: ["C#", "C++", "Qt", ".NET"],
    // },
    // {
    //   icon: "/assets/img/icon-development-white.svg",
    //   title: "Data Analysis",
    //   text: "Menganalisis Data dan Membuat Visualisasi Data",
    //   framework: [
    //     "Python",
    //     "Pandas",
    //     "Numpy",
    //     "Matplotlib",
    //     "Seaborn",
    //     "Jupyter",
    //     "SQL",
    //   ],
    // },
    {
      icon: blender_logo,
      title: "3D Design",
      text: "Mendesain Objek 3D",
      framework: ["Blender"],
    },
  ];

  return (
    <div>
  <div className="container py-16 md:py-20 mx-auto" id="services">
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      Here's what I'm good at
    </h2>
    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
      Ini adalah jasa yang saya tawarkan
    </h3>

    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group rounded px-8 py-12 shadow hover:bg-primary flex flex-col items-center text-center"
        >
          <div className="h-24 w-24 xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={`${skill.icon}`} alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={`${skill.icon}`} alt="development icon" />
            </div>
          </div>
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
            {skill.title}
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            {skill.text}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 group-hover:text-white">
            {skill.framework.map((framework, index) => (
              <div key={index} className="flex items-center justify-center">
                <h4 className="font-body font-semibold text-lg">{framework}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Skills;
