import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About Us', path: '/about' },
        { id: 'ayurveda', label: 'Ayurveda', path: '/ayurveda' },
        { id: 'treatments', label: 'Treatments', path: '/treatments' },
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
                    className="flex items-center cursor-pointer"
                >
                    <div className="h-12 md:h-14 rounded-lg overflow-hidden">
                        <img src={logo} alt="Mundada Ayurveda Logo" className="w-full h-full object-contain" />
                    </div>
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
                    <Link
                        to="/contact"
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30"
                    >
                        Book Consult
                    </Link>
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
