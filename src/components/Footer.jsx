import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = ({ setActivePage }) => (
    <footer className="bg-emerald-900 text-emerald-100 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        {/* Logo in Footer */}
                        <div className="w-8 h-8 rounded bg-white p-0.5 overflow-hidden">
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-bold text-white">Mundada Ayurveda</span>
                    </div>
                    <p className="text-emerald-200/80 text-sm leading-relaxed">
                        Ancient wisdom for modern wellness. Treating the root cause, not just the symptoms, for a balanced and healthy life.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        {['Home', 'About', 'Ayurveda', 'Treatments', 'Contact'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setActivePage(item.toLowerCase())}
                                    className="hover:text-white transition-colors text-sm"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Treatments</h3>
                    <ul className="space-y-2 text-sm text-emerald-200/80">
                        <li>
                            <button onClick={() => setActivePage('treatment-detail-panchkarma')} className="hover:text-white transition-colors text-left">
                                Panchkarma Therapy
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage('treatment-detail-shirodhara')} className="hover:text-white transition-colors text-left">
                                Shirodhara
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage('treatment-detail-ksharsutra')} className="hover:text-white transition-colors text-left">
                                Ksharsutra for Fistula
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage('treatment-detail-womens-health')} className="hover:text-white transition-colors text-left">
                                Women's Health
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage('ayurveda')} className="hover:text-white transition-colors text-left">
                                Diet & Lifestyle
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                            <a
                                href="https://maps.app.goo.gl/ZEm2G4B4GqBq8eWD9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Mundada Ayurveda Hospital,<br />Nanded, Maharashtra
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-emerald-400 shrink-0" />
                            <div className="flex flex-col">
                                <a href="tel:+919422171607" className="hover:text-emerald-300 transition-colors">+91 94221 71607</a>
                                <a href="tel:+919423778570" className="hover:text-emerald-300 transition-colors">+91 94237 78570</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-emerald-400 shrink-0" />
                            <a href="mailto:prashantayur94@gmail.com" className="hover:text-emerald-300 transition-colors">prashantayur94@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-400">
                <p>© 2025 Mundada Ayurveda Hospital. All rights reserved.</p>
                <div className="flex gap-4">
                    <Facebook size={20} className="cursor-pointer hover:text-white" />
                    <Instagram size={20} className="cursor-pointer hover:text-white" />
                    <Twitter size={20} className="cursor-pointer hover:text-white" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
