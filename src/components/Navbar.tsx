import { useState } from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const navLinks = [
        { href: '#cardport', label: 'About Me' },
        { href: '#portfolio', label: 'Projects' },
        { href: '#experiences', label: 'Experiences' },
        { href: '#education', label: 'Education' },
        { href: '#writings', label: 'Writings' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        title='Mobile Menu'
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        className="md:hidden text-black hover:text-primary"
                    >
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                    </button>

                    {/* Navigation links - hidden on mobile, visible on desktop */}
                    <div
                      id="primary-navigation"
                      className={`
                        absolute md:relative top-16 md:top-0 left-0 md:left-auto
                        w-full md:w-auto bg-white md:bg-transparent
                        ${isMenuOpen ? 'block' : 'hidden'} md:block
                    `}
                    >
                        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-black hover:text-primary font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://nevatal.id"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-blue-600 hover:text-blue-800 font-semibold md:hidden inline-flex items-center gap-1"
                            >
                                <span>nevatal.id Studio</span>
                                <i className="bx bx-link-external text-sm"></i>
                            </a>
                        </div>
                    </div>

                    {/* nevatal.id badge & Language toggle - always visible */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <a
                            href="https://nevatal.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-sm"
                            title="Visit nevatal.id Studio"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>nevatal.id</span>
                            <i className="bx bx-link-external text-xs"></i>
                        </a>
                        {(["ID", "EN"] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang as Language)}
                                className={`px-2 py-1 text-sm font-semibold rounded
                                    ${language === lang ? "text-black outline outline-1 outline-black" : "bg-white/50 text-black hover:bg-gray-200"}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
