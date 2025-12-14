import React from 'react';

const AboutPage = () => (
    <div className="pt-24 pb-20 container mx-auto px-4 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Mundada Ayurveda</h1>
                <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative">
                    {/* Image Placeholder: This is where you will insert the URL of your Doctor or Hospital photo */}
                    <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://placehold.co/400x500/065F46/ffffff?text=Dr.+Praphulla+%26+Dr.+Harsha"
                            alt="Dr. Praphulla and Dr. Harsha - Lead Doctors"
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.src = 'https://placehold.co/400x500/999/fff?text=Image+Load+Failed'}
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-emerald-100 max-w-xs">
                        <p className="text-emerald-800 font-serif italic text-lg">"Ayurveda teaches us how to be healthy and lead a fruitful life."</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Welcome to Our Hospital</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Mundada Ayurveda is dedicated to the ancient science of life. Hundreds of diseases are very well explained along with causes, symptoms, and remedies on the lines of the Dosha theory.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We believe that symptomatic treatment is not enough. Our qualified Ayurvedic doctors work to identify and treat the root cause of your ailment. Through this website, we strive to educate our patients about diet, lifestyle, and herbal remedies that build resistance and promote an active life.
                    </p>

                    <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-600">
                        <h3 className="font-bold text-emerald-900 mb-2">Our Doctors</h3>
                        <p className="text-gray-700">
                            <strong className="text-emerald-700">Dr. Praphulla</strong> & <strong className="text-emerald-700">Dr. Harsha</strong>
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Leading experts with years of clinical experience in Ayurvedic medicine.</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">1</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Educate</h4>
                        <p className="text-sm text-gray-600">Spreading knowledge about Dincharya (daily regimen) and proper diet.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">2</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Heal</h4>
                        <p className="text-sm text-gray-600">Providing genuine herbal remedies and Panchkarma therapies.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">3</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Sustain</h4>
                        <p className="text-sm text-gray-600">Helping patients maintain long-term health through lifestyle changes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;
