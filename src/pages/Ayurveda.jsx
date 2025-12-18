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
        },
        elements: {
            title: "Pancha Mahabhutas (Five Elements)",
            text: "According to Ayurveda, everything in the universe, including the human body, is composed of five basic elements. These elements combine to form the Doshas.",
            items: [
                { title: "Akasha (Space)", desc: "The empty space where everything exists. Associated with sound and hearing.", color: "bg-gray-50 text-gray-800" },
                { title: "Vayu (Air)", desc: "The energy of movement and kinetic force. Associated with touch.", color: "bg-blue-50 text-blue-800" },
                { title: "Agni (Fire)", desc: "The energy of light, heat, and transformation. Associated with vision.", color: "bg-orange-50 text-orange-800" },
                { title: "Jala (Water)", desc: "The energy of liquid and cohesion. Associated with taste.", color: "bg-blue-100 text-blue-900" },
                { title: "Prithvi (Earth)", desc: "The energy of solidity and structure. Associated with smell.", color: "bg-stone-100 text-stone-800" }
            ]
        },
        physiology: {
            title: "Body Physiology",
            text: "The body is maintained by Dhatus (tissues), cleansed by Malas (wastes), and powered by Agni (metabolic fire).",
            list: [
                "Sapta Dhatus (7 Tissues): Rasa (Plasma), Rakta (Blood), Mamsa (Muscle), Meda (Fat), Asthi (Bone), Majja (Marrow), Shukra (Reproductive tissue).",
                "Tri Malas (3 Wastes): Purisha (Feces), Mutra (Urine), Sweda (Sweat). Proper elimination is key to health.",
                "Agni (Digestive Fire): The biological fire responsible for digestion, absorption, and assimilation. Balanced Agni is the foundation of life."
            ]
        },
        mind: {
            title: "Trigunas (Mental Qualities)",
            text: "The mind allows us to think and discern. It is influenced by three qualities (Gunas) that determine our mental and emotional state.",
            items: [
                { title: "Sattva", desc: "The quality of balance, harmony, purity, and clarity. Leads to happiness and wisdom.", color: "bg-emerald-100 text-emerald-800" },
                { title: "Rajas", desc: "The quality of movement, activity, passion, and restlessness. Leads to action but also pain.", color: "bg-red-100 text-red-800" },
                { title: "Tamas", desc: "The quality of inertia, dullness, darkness, and lethargy. Leads to ignorance and delusion.", color: "bg-gray-100 text-gray-800" }
            ]
        }
    };

    return (
        <div className="pt-24 pb-20 bg-transparent min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Ayurveda</h1>
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
                            <button
                                onClick={() => setActiveTab('elements')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'elements' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                Pancha Mahabhutas
                            </button>
                            <button
                                onClick={() => setActiveTab('physiology')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'physiology' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                Physiology (Dhatus/Agni)
                            </button>
                            <button
                                onClick={() => setActiveTab('mind')}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'mind' ? 'bg-emerald-600 text-white' : 'text-emerald-900 hover:bg-emerald-100'}`}
                            >
                                Trigunas (Mind)
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
