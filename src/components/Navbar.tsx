import { useState } from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';
import { nevatalUrl } from '../lib/nevatal';

type NavLink = {
    href: string;
    label: string;
    external?: boolean;
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const navLinks: NavLink[] = [
        { href: '#cardport', label: 'About Me' },
        { href: '#portfolio', label: 'Projects' },
        { href: nevatalUrl('nav'), label: 'Studio →', external: true },
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
                        className="md:hidden text-black hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    {...(link.external
                                        ? {
                                              target: '_blank',
                                              rel: 'noopener noreferrer me',
                                              'aria-label':
                                                  'Studio — opens nevatal.id in a new tab',
                                          }
                                        : {})}
                                    className={
                                        link.external
                                            ? 'flex w-full items-center justify-between gap-3 border-t border-gray-200 pt-4 text-black hover:text-[#0069d6] font-semibold md:w-auto md:border-0 md:pt-0 md:justify-start'
                                            : 'text-black hover:text-primary font-medium'
                                    }
                                >
                                    <span className="inline-flex items-center gap-2">
                                        {link.external && (
                                            <span
                                                className="h-1.5 w-1.5 rounded-full bg-[#0069d6]"
                                                aria-hidden="true"
                                            />
                                        )}
                                        {link.label}
                                    </span>
                                    {link.external && (
                                        <i className="bx bx-link-external text-sm md:hidden" aria-hidden="true"></i>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Language toggle - always visible */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        {(["ID", "EN"] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang as Language)}
                                className={`px-2 py-1 text-sm font-semibold rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
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
