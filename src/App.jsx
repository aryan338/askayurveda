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
import { treatmentData } from './data/treatments';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
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
            <div className="font-sans text-gray-900 bg-stone-50 min-h-screen flex flex-col">
                <Navbar isScrolled={isScrolled} />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/ayurveda" element={<AyurvedaPage />} />
                        <Route path="/treatments" element={<TreatmentsPage />} />
                        <Route path="/treatment-detail/:id" element={<TreatmentDetailWrapper />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
