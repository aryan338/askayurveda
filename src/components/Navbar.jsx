import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About Us', path: '/about' },
        { id: 'ayurveda', label: 'Ayurveda', path: '/ayurveda' },
        { id: 'treatments', label: 'Treatments', path: '/treatments' },
        { id: 'yoga', label: 'Yoga', path: '/yoga' },
        { id: 'gallery', label: 'Gallery', path: '/gallery' },
        { id: 'contact', label: 'Contact', path: '/contact' },
    ];

    // Logic: Navbar is transparent ONLY if we are at the top of the Home page.
    const isTransparent = location.pathname === '/' && !isScrolled;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${!isTransparent ? 'bg-stone-50/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${!isTransparent ? 'bg-emerald-600 shadow-lg shadow-emerald-200' : 'bg-emerald-600/20 backdrop-blur-sm'
                        }`}>
                        <img src={logo} alt="Mundada Ayurveda Logo" className="w-7 h-7 object-contain" />
                    </div>
                    <h1 className={`text-lg md:text-xl font-bold tracking-normal transition-colors duration-300 ${!isTransparent ? 'text-emerald-900' : 'text-emerald-900'
                        }`}>
                        Mundada Ayurveda Hospital
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) => {
                                const isTreatmentsActive = link.id === 'treatments' && location.pathname.startsWith('/treatments');
                                return `font-medium transition-colors hover:text-emerald-500 ${isActive || isTreatmentsActive
                                    ? 'text-emerald-600'
                                    : !isTransparent ? 'text-gray-600' : 'text-emerald-800'
                                    }`;
                            }}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <a
                        href="tel:+919422171607"
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        Call Now
                    </a>
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
                <div className="absolute top-full left-0 w-full bg-stone-50 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => {
                                const isTreatmentsActive = link.id === 'treatments' && location.pathname.startsWith('/treatments');
                                return `text-left py-3 px-4 rounded-lg font-medium ${isActive || isTreatmentsActive ? 'bg-emerald-100 text-emerald-800' : 'text-gray-600'
                                    }`;
                            }}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 bg-emerald-600 text-white py-3 rounded-lg font-bold text-center"
                    >
                        Book Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
