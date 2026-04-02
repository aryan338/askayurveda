import React, { useState } from 'react';
import { ChevronRight, Sun, Moon, Wind, Flame, Star, Activity, Heart, Shield, Apple, Brain } from 'lucide-react';

const AyurvedaPage = () => {
    const [activeTab, setActiveTab] = useState('principles');

    const content = {
        principles: {
            title: "Core Principles of Ayurveda",
            icon: <Star />,
            text: "Ayurveda is an ancient medical science which teaches us how to be healthy and lead a long and fruitful life. Hundreds of diseases are explained along with causes, symptoms, and remedies based on the Tridosha theory. Health exists when there is a balance between these three fundamental bodily bio-elements: Vata, Pitta, and Kapha.",
            details: [
                {
                    title: "Concept of Tridosha",
                    desc: "Everything in the universe is composed of five elements (Pancha Mahabhutas). In the human body, these elements combine to form the three Doshas which govern all biological, psychological, and physiopathological functions of the body, mind, and consciousness."
                },
                {
                    title: "Vata (Space + Air)",
                    desc: "Governs all movement in the body—breathing, heart pulsation, muscle movement, and nerve impulses. When balanced, it promotes creativity and flexibility. When imbalanced, it leads to fear, anxiety, and tremors."
                },
                {
                    title: "Pitta (Fire + Water)",
                    desc: "Governs digestion, metabolism, and energy production. When balanced, it promotes understanding and intelligence. When imbalanced, it leads to anger, jealousy, and inflammatory conditions."
                },
                {
                    title: "Kapha (Water + Earth)",
                    desc: "Governs the body's structure, growth, and lubrication. It provides the glue that holds the cells together. When balanced, it expresses love and forgiveness. When imbalanced, it leads to attachment, greed, and congestion."
                }
            ]
        },
        dincharya: {
            title: "Dincharya (Daily Regimen)",
            icon: <Sun />,
            text: "Ayurveda emphasizes the importance of Dincharya or daily routine as instrumental in the prevention of disease and promotion of ideal health. Following a daily routine brings radical change in body, mind, and consciousness.",
            list: [
                { title: "Rising Early", desc: "Rise at Brahma muhurta (4:00 AM - 5:00 AM) to receive the greatest influence of freshness and strength." },
                { title: "Evacuation", desc: "First thing in the morning, evacuate bowels and bladder naturally to start the day light." },
                { title: "Dental Care", desc: "Clean teeth with herbal brushes (bitter/astringent) and scrape the tongue to remove Ama (toxins)." },
                { title: "Oil Massage (Abhyanga)", desc: "Massage with warm herbal oil to delay aging, relieve fatigue, and improve sleep." },
                { title: "Exercise (Vyayama)", desc: "Perform physical exercise up to half of your capacity to produce lightness and increase Agni." },
                { title: "Bathing", desc: "Use lukewarm water and herbal powders for rubbing. Bathing improves appetite, strength, and lifespan." }
            ]
        },
        prakruti: {
            title: "Prakruti (Your Unique Constitution)",
            icon: <Activity />,
            text: "Prakruti is your unique physical and psychological nature, determined at the time of conception. Just as every family has different natures, every individual responds differently to the same environment and food.",
            details: [
                {
                    title: "Three-fold System",
                    desc: "Prakruti is a result of interaction between Pancha Mahabhutas, Trigunas, and Tri-Doshas. It remains unchanged throughout life."
                },
                {
                    title: "Factors Deciding Prakruti",
                    desc: "Parental constitution, parents' diet/routine before conception, fertilization time/place, and mother's diet/routine during pregnancy."
                },
                {
                    title: "Why it Matters?",
                    desc: "Knowing your Prakruti helps in selecting the right diet, appropriate lifestyle habits, and predicting susceptibility to specific diseases."
                }
            ]
        },
        diagnosis: {
            title: "Ayurveda Diagnosis",
            icon: <Brain />,
            text: "In Ayurveda, diagnosis is not just identifying the physical abnormality but evaluating the underlying imbalances in the functioning modes of the body.",
            list: [
                { title: "Nadi Pariksha", desc: "Pulse diagnosis to understand the status of Doshic balance and organ health." },
                { title: "Jihwa Pariksha", desc: "Tongue examination to detect the presence of toxins (Ama) and digestive strength." },
                { title: "Mala-Mutra Pariksha", desc: "Examination of stool and urine to understand metabolism and excretory functions." },
                { title: "Darshana, Prashna, Sparshana", desc: "Observation, Questioning, and Palpation to get a holistic view of the patient's health." }
            ]
        },
        physiology: {
            title: "Body Physiology (Dhatus & Agni)",
            icon: <Flame />,
            text: "The body is maintained by tissues (Dhatus), powered by metabolic fire (Agni), and cleansed by wastes (Malas).",
            details: [
                {
                    title: "Sapta Dhatus (7 Tissues)",
                    desc: "Rasa (Plasma), Rakta (Blood), Mamsa (Muscle), Meda (Fat), Asthi (Bone), Majja (Marrow), and Shukra (Reproductive tissue). Each nourishes the next."
                },
                {
                    title: "Agni (Digestive Fire)",
                    desc: "The biological fire responsible for digestion and transformation. Balanced Agni (Sama-Agni) is the core of perfect health."
                },
                {
                    title: "Ojas",
                    desc: "The pure essence of all tissues, responsible for immunity, vitality, and overall well-being."
                }
            ]
        },
        trigunas: {
            title: "Trigunas (Qualities of Mind)",
            icon: <Moon />,
            text: "Ayurveda describes three universal energies that control the psyche and mental state. Balance between these leads to mental peace and clarity.",
            list: [
                { title: "Sattva", desc: "Quality of balance, harmony, purity, and clarity. Leads to happiness and spiritual growth." },
                { title: "Rajas", desc: "Quality of movement, activity, and passion. When excessive, it leads to restlessness and agitation." },
                { title: "Tamas", desc: "Quality of inertia, dullness, and heaviness. When excessive, it leads to lethargy and delusion." }
            ]
        }
    };

    return (
        <div className="pt-24 pb-20 bg-stone-50 dark:bg-emerald-950 min-h-screen animate-in fade-in duration-500 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Science of Ayurveda</h1>
                    <p className="text-gray-600 dark:text-emerald-100/70 text-lg">Understand the ancient wisdom that helps us live in harmony with nature.</p>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full shadow-sm" />
                </div>

                <div className="bg-white dark:bg-emerald-900/20 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[600px] transition-all">
                    {/* Sidebar / Tabs */}
                    <div className="md:w-72 bg-stone-50 dark:bg-emerald-900/40 border-r border-emerald-100 dark:border-emerald-800 p-6">
                        <div className="space-y-3">
                            {Object.keys(content).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`w-full text-left px-5 py-4 rounded-xl font-bold flex items-center gap-3 transition-all ${activeTab === key
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-none translate-x-2'
                                        : 'text-gray-600 dark:text-emerald-100/60 hover:bg-emerald-50 dark:hover:bg-emerald-800/40 hover:text-emerald-700 dark:hover:text-emerald-300'
                                        }`}
                                >
                                    <span className={activeTab === key ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}>
                                        {React.cloneElement(content[key].icon, { size: 20 })}
                                    </span>
                                    {content[key].title.split(' (')[0].split(' of ')[0]}
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-emerald-900 rounded-2xl text-white">
                            <p className="font-serif italic text-sm opacity-90">
                                "Health is balance. Ayurveda is the path to that balance."
                            </p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 md:p-12 overflow-y-auto dark:bg-emerald-900/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 rounded-lg flex items-center justify-center">
                                {content[activeTab].icon}
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{content[activeTab].title}</h2>
                        </div>

                        <p className="text-gray-600 dark:text-emerald-100/70 leading-relaxed text-lg mb-10 border-b border-stone-100 dark:border-emerald-800 pb-8">
                            {content[activeTab].text}
                        </p>

                        {content[activeTab].details && (
                            <div className="grid gap-6">
                                {content[activeTab].details.map((item, i) => (
                                    <div key={i} className="group p-6 rounded-2xl bg-white dark:bg-emerald-900/30 border border-stone-100 dark:border-emerald-800 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/30 transition-all">
                                        <h3 className="font-bold text-emerald-900 dark:text-emerald-100 text-lg mb-3 flex items-center gap-2">
                                            <div className="w-1.5 h-6 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-emerald-100/60 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {content[activeTab].list && (
                            <div className="grid sm:grid-cols-2 gap-6">
                                {content[activeTab].list.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-stone-50 dark:bg-emerald-900/40 border border-stone-100 dark:border-emerald-800 shadow-sm">
                                        <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs shadow-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-emerald-100/60 leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AyurvedaPage;
