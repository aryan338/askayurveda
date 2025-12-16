import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const AyurvedaPage = () => {
    const [activeTab, setActiveTab] = useState('principles');

    const content = {
        principles: {
            title: "Core Principles",
            text: "Ayurveda is based on the theory of Tridosha. Health exists when there is a balance between these three fundamental bodily bio-elements or doshas called Vata, Pitta, and Kapha.",
            items: [
                { title: "Vata", desc: "Energy of movement. Governs breathing, blinking, muscle and tissue movement, pulsation of the heart.", color: "bg-blue-100 text-blue-800" },
                { title: "Pitta", desc: "Energy of digestion and metabolism. Governs digestion, absorption, assimilation, nutrition, metabolism.", color: "bg-orange-100 text-orange-800" },
                { title: "Kapha", desc: "Energy of lubrication and structure. Governs the body's structure, growth, and lubrication of joints.", color: "bg-green-100 text-green-800" }
            ]
        },
        dincharya: {
            title: "Dincharya (Daily Regimen)",
            text: "A daily routine is absolutely necessary to bring radical change in body, mind, and consciousness. Dincharya establishes balance in one's constitution.",
            list: [
                "Wake up before sunrise (Brahma Muhurta)",
                "Eliminate natural urges",
                "Cleanse senses (teeth brushing, tongue scraping, eye washing)",
                "Oil massage (Abhyanga)",
                "Exercise (Vyayama) & Yoga",
                "Bathing and Meditation"
            ]
        },
        prakruti: {
            title: "Prakruti (Body Constitution)",
            text: "Prakruti is your unique physical and psychological nature. It is determined at the time of conception and remains the same throughout life. Understanding your Prakruti helps in:",
            list: [
                "Selecting the right diet",
                "Choosing appropriate lifestyle habits",
                "Predicting susceptibility to diseases",
                "Deciding the line of treatment"
            ]
        }
    };

    return (
        <div className="pt-24 pb-20 bg-transparent min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Ayurvedic Wisdom</h1>
                    <p className="text-gray-600">Explore the ancient science of life and how it applies to you.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row min-h-[500px]">
                    {/* Sidebar */}
                    <div className="md:w-64 bg-emerald-50 border-r border-emerald-100 p-4">
                        <div className="space-y-2">
                            <button
                                onClick={() => setActiveTab('principles')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'principles' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                The Tridoshas
                            </button>
                            <button
                                onClick={() => setActiveTab('dincharya')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'dincharya' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                Dincharya
                            </button>
                            <button
                                onClick={() => setActiveTab('prakruti')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'prakruti' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                Prakruti
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{content[activeTab].title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">{content[activeTab].text}</p>

                        {content[activeTab].items && (
                            <div className="grid gap-6">
                                {content[activeTab].items.map((item, i) => (
                                    <div key={i} className={`p-6 rounded-xl ${item.color}`}>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="opacity-90 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {content[activeTab].list && (
                            <ul className="space-y-4">
                                {content[activeTab].list.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5">
                                            <ChevronRight size={16} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AyurvedaPage;
