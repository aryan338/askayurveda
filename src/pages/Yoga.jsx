import React from 'react';
import { Wind, Activity, Heart, Sparkles, Brain, Star } from 'lucide-react';

const YogaPage = () => {
    const limbs = [
        { title: "Yam", desc: "Universal moral commandments and ethical standards." },
        { title: "Niyam", desc: "Self-purification and study through personal discipline." },
        { title: "Asanas", desc: "Postural exercises to make the body strong and flexible." },
        { title: "Pranayam", desc: "Breathing exercises to master the vital energy (Prana)." },
        { title: "Pratyahara", desc: "Withdrawal of senses to strengthen internal awareness." },
        { title: "Dharna", desc: "Concentration—the first level of mental focus." },
        { title: "Dhyan", desc: "Meditation—the second level of deep concentration." },
        { title: "Samadhi", desc: "The final goal of union with the cosmic energy." }
    ];

    const principles = [
        {
            title: "Connect & Align",
            icon: <Activity className="w-6 h-6" />,
            text: "Yoga means 'to add' or 'to connect'. It is the way to connect internal and external energies, ensuring a regularized flow of life force (Prana)."
        },
        {
            title: "Sense Control",
            icon: <Brain className="w-6 h-6" />,
            text: "Yoga is 'Chitta Vruti Nirodhah'—controlling the senses and uncontrolled movements of the mind to achieve true concentration."
        },
        {
            title: "Vital Energy",
            icon: <Wind className="w-6 h-6" />,
            text: "Pranayam (breathing exercises) masters the Prana. By controlled breathing, we provide maximum energy to the body for detoxification."
        }
    ];

    return (
        <div className="pt-28 md:pt-36 pb-20 bg-stone-50 dark:bg-emerald-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Yoga for Healthy Living</h1>
                        <p className="text-xl text-gray-600 dark:text-emerald-100/70 italic">"Connecting the internal and external energies for a balanced life."</p>
                        <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-8 rounded-full shadow-sm" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in duration-1000 delay-200">
                        {principles.map((p, i) => (
                            <div key={i} className="bg-white dark:bg-emerald-900/20 p-8 rounded-3xl shadow-sm border border-emerald-50 dark:border-emerald-800 hover:shadow-xl transition-all text-center">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                                <p className="text-gray-600 dark:text-emerald-100/60 leading-relaxed text-sm">{p.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-emerald-900/10 rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-stone-100 dark:border-emerald-800 relative overflow-hidden mb-16 animate-in zoom-in duration-700 delay-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-800/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
                            <Sparkles className="text-emerald-500" />
                            The Eight Limbs of Yoga
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                            {limbs.map((limb, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="bg-emerald-50 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{limb.title}</h4>
                                        <p className="text-gray-500 dark:text-emerald-100/60 text-sm leading-relaxed">{limb.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-emerald-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white text-center relative overflow-hidden transition-colors">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 italic">Ready to transform your life?</h2>
                            <p className="text-emerald-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                                Our doctors integrate specialized Yogic asanas tailored to your Prakruti (constitution) as part of our holistic healing protocols.
                            </p>
                            <a
                                href="#/contact"
                                className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors inline-block text-lg shadow-lg"
                            >
                                Inquire About Wellness Programs
                            </a>
                        </div>
                        <div className="absolute inset-0 opacity-10">
                            <Star className="absolute top-10 left-10 w-24 h-24" />
                            <Star className="absolute bottom-10 right-10 w-32 h-32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YogaPage;
