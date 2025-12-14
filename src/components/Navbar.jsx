import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = ({ activePage, setActivePage, isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'ayurveda', label: 'Ayurveda' },
        { id: 'treatments', label: 'Treatments' },
        { id: 'contact', label: 'Contact' },
    ];

    // Logic: Navbar is transparent ONLY if we are at the top of the Home page.
    // Otherwise (scrolled OR not on home page), it is white with shadow.
    const isTransparent = activePage === 'home' && !isScrolled;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${!isTransparent ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setActivePage('home')}
                >
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                        <img src={logo} alt="Mundada Ayurveda Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold leading-none ${!isTransparent ? 'text-emerald-900' : 'text-emerald-900'}`}>
                            Mundada
                        </h1>
                        <span className={`text-sm tracking-widest uppercase ${!isTransparent ? 'text-emerald-600' : 'text-emerald-700'}`}>
                            Ayurveda
                        </span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setActivePage(link.id)}
                            className={`font-medium transition-colors hover:text-emerald-500 ${activePage.split('-')[0] === link.id
                                ? 'text-emerald-600'
                                : !isTransparent ? 'text-gray-600' : 'text-emerald-800'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => setActivePage('contact')}
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30"
                    >
                        Book Consult
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-emerald-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => {
                                setActivePage(link.id);
                                setIsMenuOpen(false);
                            }}
                            className={`text-left py-3 px-4 rounded-lg font-medium ${activePage.split('-')[0] === link.id ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setActivePage('contact');
                            setIsMenuOpen(false);
                        }}
                        className="mt-4 bg-emerald-600 text-white py-3 rounded-lg font-bold"
                    >
                        Book Consultation
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
