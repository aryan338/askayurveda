import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AyurvedaPage from './pages/Ayurveda';
import TreatmentsPage from './pages/Treatments';
import TreatmentDetailPage from './pages/TreatmentDetail';
import ContactPage from './pages/Contact';
import { treatmentData } from './data/treatments';

const App = () => {
    // activePage can be 'home', 'about', 'treatments', 'contact', or 'treatment-detail-ID'
    const [activePage, setActivePage] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle Scroll for Navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    const renderPage = () => {
        if (activePage.startsWith('treatment-detail-')) {
            const treatmentId = activePage.split('-')[2];
            const selectedTreatment = treatmentData.find(t => t.id === treatmentId);
            return <TreatmentDetailPage treatment={selectedTreatment} setActivePage={setActivePage} />;
        }

        switch (activePage) {
            case 'home': return <HomePage setActivePage={setActivePage} />;
            case 'about': return <AboutPage />;
            case 'ayurveda': return <AyurvedaPage />;
            case 'treatments': return <TreatmentsPage setActivePage={setActivePage} />;
            case 'contact': return <ContactPage />;
            default: return <HomePage setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
            <Navbar activePage={activePage} setActivePage={setActivePage} isScrolled={isScrolled} />

            <main className="flex-grow">
                {renderPage()}
            </main>

            <Footer setActivePage={setActivePage} />
        </div>
    );
};

export default App;
