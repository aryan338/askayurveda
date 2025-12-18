import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, User, Activity, Heart } from 'lucide-react';
import Carousel from '../components/Carousel';

const HomePage = () => {
    return (
        <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            {/* Hero Section with Carousel */}
            <section className="relative pt-24 pb-12 bg-stone-50 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-100/30 rounded-bl-[100px] -z-10 hidden md:block" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-200/10 rounded-tr-[100px] -z-10" />

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <Star size={14} className="fill-current" />
                            <span>Authentic Ayurvedic Care</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Restore Balance to <span className="text-emerald-600">Your Life</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                            Ayurveda is not just about treating disease; it's about learning how to live.
                            Experience holistic healing customized to your unique body type.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                            >
                                Book Appointment <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/about"
                                className="bg-white text-emerald-900 border border-emerald-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Carousel Component */}
                    <Carousel />
                </div>
            </section>

            {/* Features / Intro */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Mundada Ayurveda?</h2>
                        <p className="text-gray-600">We blend ancient wisdom with modern comfort to provide treatments that address the root cause of your ailments.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <User className="w-6 h-6" />,
                                title: "Expert Doctors",
                                desc: "Led by Dr. Praphulla & Dr. Harsha, experienced practitioners dedicated to your well-being."
                            },
                            {
                                icon: <Activity className="w-6 h-6" />,
                                title: "Root Cause Treatment",
                                desc: "We don't just mask symptoms. We analyze your Doshas to treat the underlying imbalance."
                            },
                            {
                                icon: <Heart className="w-6 h-6" />,
                                title: "Holistic Approach",
                                desc: "Combining herbal remedies, diet (Ahar), and lifestyle (Vihar) for complete health."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-emerald-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-emerald-100">
                                <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-emerald-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your healing journey?</h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Online consultations are available. Get a personalized health assessment from the comfort of your home.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors shadow-lg inline-block"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
