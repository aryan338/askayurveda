import React from 'react';

const AboutPage = () => (
    <div className="pt-28 md:pt-36 pb-20 container mx-auto px-4 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Mundada Ayurveda</h1>
                <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative">
                    {/* Image Placeholder */}
                    <div className="aspect-[3/4] bg-gray-200 dark:bg-emerald-900/40 rounded-2xl overflow-hidden shadow-lg border border-transparent dark:border-emerald-800">
                        <img
                            src="https://placehold.co/400x500/065F46/ffffff?text=Dr.+Praphulla+%26+Dr.+Harsha"
                            alt="Dr. Praphulla and Dr. Harsha - Lead Doctors"
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.src = 'https://placehold.co/400x500/999/fff?text=Image+Load+Failed'}
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-emerald-900 p-6 rounded-xl shadow-xl border border-emerald-100 dark:border-emerald-800 max-w-xs transition-colors">
                        <p className="text-emerald-900 dark:text-emerald-50 font-medium text-lg mb-2 text-center">
                            स्वस्थस्य स्वास्थ्यरक्षणम्, आतुरस्य विकारप्रशमनम्।
                        </p>
                        <p className="text-emerald-800 dark:text-emerald-100 font-serif italic text-md text-center">
                            "Ayurveda teaches us how to be physically and mentally healthy to lead a long and fruitful life."
                        </p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Our Hospital</h2>
                    <p className="text-gray-600 dark:text-emerald-100/70 leading-relaxed">
                        Mundada Ayurveda is dedicated to the ancient science of life. Hundreds of diseases are very well explained along with causes, symptoms, and remedies on the lines of the Dosha theory.
                    </p>
                    <p className="text-gray-600 dark:text-emerald-100/70 leading-relaxed">
                        We believe that symptomatic treatment is not enough. Our qualified Ayurvedic doctors work to identify and treat the root cause of your ailment. Through this website, we strive to educate our patients about diet, lifestyle, and herbal remedies that build resistance and promote an active life.
                    </p>
                </div>
            </div>

            <div className="bg-emerald-50/30 dark:bg-emerald-900/20 rounded-3xl p-8 md:p-12 border border-emerald-50 dark:border-emerald-800 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Mission</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl border-2 border-white dark:border-emerald-400">1</div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Educate</h4>
                        <p className="text-sm text-gray-600 dark:text-emerald-100/70">Spreading knowledge about Dincharya (daily regimen), Rutucharya (seasonal regimen), and Yoga.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl border-2 border-white dark:border-emerald-400">2</div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Heal</h4>
                        <p className="text-sm text-gray-600 dark:text-emerald-100/70">Providing genuine herbal remedies and Panchkarma therapies.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl border-2 border-white dark:border-emerald-400">3</div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sustain</h4>
                        <p className="text-sm text-gray-600 dark:text-emerald-100/70">Helping patients maintain long-term health through lifestyle changes.</p>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Medical Team</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Dr. Praphulla */}
                    <div className="bg-white dark:bg-emerald-900/20 p-8 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800 text-center transition-all hover:-translate-y-1">
                        <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-emerald-800 rounded-full overflow-hidden mb-6 border-4 border-emerald-100 dark:border-emerald-900/50 shadow-inner">
                            <img
                                src="https://placehold.co/200x200/065F46/ffffff?text=Dr.+Praphulla"
                                alt="Dr. Praphulla"
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.src = 'https://placehold.co/200x200/999/fff?text=Image+Load+Failed'}
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Praphulla Mundada</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Chief Ayurvedic Physician</p>
                        <p className="text-gray-600 dark:text-emerald-100/70 text-sm leading-relaxed">
                            A leading expert with decades of clinical experience in Ayurvedic medicine. Dr. Praphulla specializes in root-cause diagnosis and chronic disease management.
                        </p>
                    </div>

                    {/* Dr. Harsha */}
                    <div className="bg-white dark:bg-emerald-900/20 p-8 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800 text-center transition-all hover:-translate-y-1">
                        <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-emerald-800 rounded-full overflow-hidden mb-6 border-4 border-emerald-100 dark:border-emerald-900/50 shadow-inner">
                            <img
                                src="https://placehold.co/200x200/065F46/ffffff?text=Dr.+Harsha"
                                alt="Dr. Harsha"
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.src = 'https://placehold.co/200x200/999/fff?text=Image+Load+Failed'}
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Harsha Mundada</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Senior Ayurvedic Consultant</p>
                        <p className="text-gray-600 dark:text-emerald-100/70 text-sm leading-relaxed">
                            Dedicated to holistic healing and women's health. Dr. Harsha brings compassion and vast knowledge in Panchkarma and diet-based therapies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;
