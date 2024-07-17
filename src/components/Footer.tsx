const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2024. All right reserved.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="https://www.linkedin.com/in/thirza-ahmad" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="https://github.com/thirza258" className="pl-4">
              <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="https://dev.to/thirza258" className="pl-4">
              <i className="bx bxl-dev-to text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="https://dev.to/thirza258" className="pl-4">
              <i className="bx bxl-medium-square text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
