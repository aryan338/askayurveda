import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AyurvedaPage from './pages/Ayurveda';
import TreatmentsPage from './pages/Treatments';
import TreatmentDetailPage from './pages/TreatmentDetail';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import YogaPage from './pages/Yoga';
import { treatmentData } from './data/treatments';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);

        // Dynamic Title Update for SEO
        const pageTitles = {
            '/': 'Mundada Ayurved Hospital | Best Ayurvedic Treatments in Nanded',
            '/about': 'About Us | Expert Doctors at Mundada Ayurved Hospital',
            '/ayurveda': 'Concept of Ayurveda | Ancient Wisdom for Modern Health',
            '/treatments': 'Ayurvedic Treatments & Panchkarma in Nanded',
            '/yoga': 'Yoga for Healthy Living | Wellness Programs',
            '/gallery': 'Hospital Gallery | Facilities and Environment',
            '/contact': 'Contact Us | Book Appointment at Mundada Ayurved Hospital',
        };

        // Handle dynamic treatment detail titles
        if (pathname.startsWith('/treatments/')) {
            const treatmentId = pathname.split('/').pop();
            const titleId = treatmentId.charAt(0).toUpperCase() + treatmentId.slice(1);
            document.title = `${titleId} Treatment | Mundada Ayurved Hospital`;
        } else {
            document.title = pageTitles[pathname] || 'Mundada Ayurved Hospital';
        }
    }, [pathname]);
    return null;
};

const TreatmentDetailWrapper = () => {
    const { pathname } = useLocation();
    const treatmentId = pathname.split('/').pop();
    const selectedTreatment = treatmentData.find(t => t.id === treatmentId);
    return <TreatmentDetailPage treatment={selectedTreatment} />;
};

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Check for saved theme or system preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Apply theme changes to document
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Handle Scroll for Navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="font-sans text-gray-900 bg-stone-50 dark:bg-emerald-950 dark:text-emerald-50 min-h-screen flex flex-col transition-colors duration-300">
                <Navbar isScrolled={isScrolled} theme={theme} toggleTheme={toggleTheme} />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/ayurveda" element={<AyurvedaPage />} />
                        <Route path="/treatments" element={<TreatmentsPage />} />
                        <Route path="/treatments/:id" element={<TreatmentDetailWrapper />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/yoga" element={<YogaPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>

                <Footer />

                {/* Floating Call Button for Mobile/Desktop */}
                <a
                    href="tel:+919422171607"
                    className="fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all z-50 group flex items-center gap-2 hover:px-6"
                    aria-label="Call Hospital"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
                        Call Now
                    </span>
                </a>
            </div>
        </Router>
    );
};

export default App;
