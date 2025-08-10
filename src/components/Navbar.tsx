import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-black hover:text-primary"
                    >
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                    </button>

                    {/* Navigation links - hidden on mobile, visible on desktop */}
                    <div className={`
                        absolute md:relative top-16 md:top-0 left-0 md:left-auto
                        w-full md:w-auto bg-white md:bg-transparent
                        ${isMenuOpen ? 'block' : 'hidden'} md:block
                    `}>
                        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
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
                    </div>

                    {/* Language toggle - always visible */}
                    <div className="flex space-x-2 md:space-x-4">
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