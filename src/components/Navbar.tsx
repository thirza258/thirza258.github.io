const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left side navigation links */}
                    <div className="flex space-x-8">
                        <a href="#home" className="text-black hover:text-primary font-medium">
                            Home
                        </a>
                        <a href="#projects" className="text-black hover:text-primary font-medium">
                            Projects
                        </a>
                        <a href="#experiences" className="text-black hover:text-primary font-medium">
                            Experiences
                        </a>
                        <a href="#skills" className="text-black hover:text-primary font-medium">
                            Skills
                        </a>
                        <a href="#about" className="text-black hover:text-primary font-medium">
                            About
                        </a>
                    </div>

                    {/* Right side language toggle */}
                    <div className="flex space-x-4">
                        <button className="px-2 py-1 text-sm font-semibold text-black bg-white/50 rounded hover:bg-gray-200">
                            ID
                        </button>
                        <button className="px-2 py-1 text-sm font-semibold text-black bg-white/50 rounded hover:bg-gray-200">
                            EN
                        </button>
                        <button className="px-2 py-1 text-sm font-semibold text-black bg-white/50 rounded hover:bg-gray-200">
                            JP
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;