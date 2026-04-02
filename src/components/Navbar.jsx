import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';
import { treatmentData } from '../data/treatments';

const Navbar = ({ isScrolled, theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTreatmentsMobileOpen, setIsTreatmentsMobileOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'ayurveda', label: 'Ayurveda', path: '/ayurveda' },
        { id: 'fertility', label: 'Fertility', path: '/treatments/maternity-fertility' },
        { id: 'treatments', label: 'Treatments', path: '/treatments' },
        { id: 'gallery', label: 'Gallery', path: '/gallery' },
        { id: 'yoga', label: 'Yoga', path: '/yoga' },
    ];

    // Logic: Navbar is transparent ONLY if we are at the top of the Home page.
    const isTransparent = location.pathname === '/' && !isScrolled;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${!isTransparent ? 'bg-stone-50/90 dark:bg-emerald-950/90 backdrop-blur-md shadow-md text-gray-900 dark:text-emerald-50' : 'bg-transparent text-emerald-900 dark:text-emerald-50'
                }`}
        >
            {/* Top Bar for Address, Phone, Socials */}
            <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-8 opacity-100'} bg-emerald-900/95 backdrop-blur text-emerald-50 text-xs hidden md:flex items-center w-full border-b border-emerald-800/50`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
                    <div className="flex gap-6 items-center h-full">
                        <div className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
                            <MapPin size={12} />
                            <a href="https://maps.app.goo.gl/ZEm2G4B4GqBq8eWD9" target="_blank" rel="noopener noreferrer">
                                Goverdhan Ghat Road, Nanded - 431601
                            </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Phone size={12} />
                            <a href="tel:+919422171607" className="hover:text-emerald-200 transition-colors">+91 94221 71607</a>
                            <span>/</span>
                            <a href="tel:+919423778570" className="hover:text-emerald-200 transition-colors">+91 94237 78570</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="hover:text-emerald-300 transition-colors"><Facebook size={13} /></a>
                        <a href="#" className="hover:text-emerald-300 transition-colors"><Instagram size={13} /></a>
                        <a href="#" className="hover:text-emerald-300 transition-colors"><Twitter size={13} /></a>
                    </div>
                </div>
            </div>

            <div className={`container mx-auto px-4 md:px-6 flex justify-between items-center transition-all duration-300 ${!isTransparent && isScrolled ? 'py-2' : 'py-3'}`}>
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${!isTransparent ? 'bg-emerald-600 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20' : 'bg-emerald-600/20 backdrop-blur-sm'
                        }`}>
                        <img src={logo} alt="Mundada Ayurveda Logo" className="w-7 h-7 object-contain" />
                    </div>
                    <h1 className={`text-lg md:text-xl font-bold tracking-normal transition-colors duration-300 ${!isTransparent ? 'text-emerald-900 dark:text-emerald-50' : 'text-emerald-900 dark:text-emerald-100'
                        }`}>
                        Mundada Ayurveda Hospital
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        if (link.id === 'treatments') {
                            return (
                                <div key={link.id} className="relative group">
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => {
                                            const isTreatmentsActive = location.pathname.startsWith('/treatments');
                                            return `font-medium transition-colors hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 pb-4 -mb-4 ${isActive || isTreatmentsActive
                                                ? 'text-emerald-600 dark:text-emerald-400'
                                                : !isTransparent ? 'text-gray-600 dark:text-emerald-200/70' : 'text-emerald-800 dark:text-emerald-100'
                                                }`;
                                        }}
                                    >
                                        {link.label}
                                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </NavLink>
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-emerald-950 rounded-xl shadow-xl shadow-emerald-900/10 border border-emerald-100 dark:border-emerald-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-center scale-95 group-hover:scale-100 z-50">
                                        <div className="p-3 grid grid-cols-1 gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                            {treatmentData.map((trt) => (
                                                <Link 
                                                    key={trt.id} 
                                                    to={`/treatments/${trt.id}`}
                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-gray-700 dark:text-emerald-100 transition-colors"
                                                >
                                                    <div className="bg-emerald-100 dark:bg-emerald-900/60 p-1.5 rounded-md text-emerald-600 dark:text-emerald-400">
                                                        <trt.icon size={16} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium">{trt.title}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                            <div className="my-1 border-t border-emerald-100 dark:border-emerald-800/50"></div>
                                            <Link 
                                                to="/treatments"
                                                className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 p-2"
                                            >
                                                View All Treatments &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className={({ isActive }) => {
                                    return `font-medium transition-colors hover:text-emerald-500 dark:hover:text-emerald-400 ${isActive
                                        ? 'text-emerald-600 dark:text-emerald-400'
                                        : !isTransparent ? 'text-gray-600 dark:text-emerald-200/70' : 'text-emerald-800 dark:text-emerald-100'
                                        }`;
                                }}
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${!isTransparent ? 'hover:bg-emerald-100 dark:hover:bg-emerald-900' : 'hover:bg-white/20'
                            }`}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-emerald-800" />}
                    </button>
                    <a
                        href="tel:+919422171607"
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
                    >
                        <Phone size={18} />
                        Call Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-emerald-800 dark:text-emerald-100"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-stone-50 dark:bg-emerald-950 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-2 border-t dark:border-emerald-900 max-h-[85vh] overflow-y-auto">
                    {navLinks.map((link) => {
                        if (link.id === 'treatments') {
                            return (
                                <div key={link.id} className="flex flex-col">
                                    <div className="flex items-center justify-between py-1">
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) => {
                                                const isTreatmentsActive = location.pathname.startsWith('/treatments');
                                                return `flex-grow text-left py-2 px-4 rounded-lg font-medium transition-colors ${isActive || isTreatmentsActive
                                                    ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100'
                                                    : 'text-gray-600 dark:text-emerald-200/70 hover:bg-emerald-50 dark:hover:bg-emerald-900/30'
                                                    }`;
                                            }}
                                        >
                                            {link.label}
                                        </NavLink>
                                        <button 
                                            className="p-3 mr-2 text-gray-500 dark:text-emerald-400"
                                            onClick={() => setIsTreatmentsMobileOpen(!isTreatmentsMobileOpen)}
                                        >
                                            <ChevronDown size={20} className={`transform transition-transform ${isTreatmentsMobileOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                    
                                    {/* Mobile Treatments Dropdown */}
                                    {isTreatmentsMobileOpen && (
                                        <div className="ml-6 mr-4 mb-2 mt-1 flex flex-col border-l-2 border-emerald-100 dark:border-emerald-900/50 pl-4 space-y-2">
                                            {treatmentData.map((trt) => (
                                                <Link
                                                    key={trt.id}
                                                    to={`/treatments/${trt.id}`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-sm py-2 px-2 text-gray-600 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200"
                                                >
                                                    {trt.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => {
                                    return `text-left py-3 px-4 rounded-lg font-medium transition-colors ${isActive
                                        ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100'
                                        : 'text-gray-600 dark:text-emerald-200/70 hover:bg-emerald-50 dark:hover:bg-emerald-900/30'
                                        }`;
                                }}
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                    
                    <div className="mt-4 pt-4 border-t dark:border-emerald-900 flex flex-col gap-3">
                        <div className="flex items-center justify-between px-4">
                            <span className="text-sm font-medium text-gray-500 dark:text-emerald-400">Switch Theme</span>
                            <button
                                onClick={() => {
                                    toggleTheme();
                                    setIsMenuOpen(false);
                                }}
                                className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full"
                            >
                                {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-emerald-800 dark:text-emerald-100" />}
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-2 mt-2 px-4 text-sm text-gray-600 dark:text-emerald-300">
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-emerald-600 dark:text-emerald-400" />
                                <a href="tel:+919422171607">+91 94221 71607</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-emerald-600 dark:text-emerald-400" />
                                <span>Goverdhan Ghat Road, Nanded</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="tel:+919422171607"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 mx-4 bg-emerald-600 text-white py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 mb-4"
                    >
                        <Phone size={20} />
                        Call Now
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

