import frame from "../assets/Frame_hero.png";

const Header = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slide"
        style={{
          backgroundImage: `url(${frame})`,
          zIndex: -1,
        }}
      ></div>

     

      {/* Language Toggle Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button className="px-2 py-1 text-sm font-semibold text-black bg-white rounded hover:bg-gray-200">
          ID
        </button>
        <button className="px-2 py-1 text-sm font-semibold text-black bg-white rounded hover:bg-gray-200">
          EN
        </button>
        <button className="px-2 py-1 text-sm font-semibold text-black bg-white rounded hover:bg-gray-200">
          JP
        </button>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <img
              src="../assets/new_frame_hero.png"
              className="h-48 rounded-full sm:h-56"
              alt="author"
            />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-black sm:text-left sm:text-5xl md:text-6xl">
              Halo, saya <span className="text-primary">Thirza</span>
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-black">
                  Let's connect
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start ">
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
                <a href="https://medium.com/@thirza258" className="pl-4">
                  <i className="bx bxl-medium-square text-2xl text-black hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
