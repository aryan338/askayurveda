import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, User, Activity, Heart } from 'lucide-react';
import Carousel from '../components/Carousel';

const HomePage = () => {
    return (
        <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            {/* Hero Section with Carousel */}
            <section className="relative pt-24 pb-12 bg-stone-50 dark:bg-emerald-950 overflow-hidden transition-colors duration-300">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-100/30 dark:bg-emerald-900/10 rounded-bl-[100px] -z-10 hidden md:block" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-200/10 dark:bg-emerald-800/10 rounded-tr-[100px] -z-10" />

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <Star size={14} className="fill-current" />
                            <span>Authentic Ayurvedic Care</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            Restore Balance to <span className="text-emerald-600 dark:text-emerald-400">Your Life</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-emerald-100/70 leading-relaxed max-w-2xl mx-auto mb-8">
                            Mundada Ayurved Hospital is Nanded's leading center for authentic Ayurveda treatments. Specialized care for Piles, Fistula, Fertility, and Maternity Care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919422171607"
                                className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-outgoing"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="m16 2 6 6" /><path d="m22 2-6 6" /></svg>
                                Call for Appointment
                            </a>
                            <Link
                                to="/contact"
                                className="bg-white dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800 px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-800/50 transition-colors"
                            >
                                Inquire Online
                            </Link>
                        </div>
                    </div>

                    {/* Carousel Component */}
                    <Carousel />
                </div>
            </section>

            {/* Features / Intro */}
            <section className="py-20 bg-stone-50 dark:bg-emerald-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Mundada Ayurveda?</h2>
                        <p className="text-gray-600 dark:text-emerald-100/70">We blend ancient wisdom with modern comfort to provide treatments that address the root cause of your ailments.</p>
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
                            <div key={idx} className="bg-emerald-50 dark:bg-emerald-900/40 p-8 rounded-2xl hover:shadow-lg transition-all border border-emerald-100 dark:border-emerald-800 shadow-sm">
                                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md shadow-emerald-200 dark:shadow-none">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-emerald-100/60 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content from Legacy Site: News & Testimonials */}
            <section className="py-20 bg-stone-100 dark:bg-emerald-950 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-white dark:bg-emerald-900/20 p-10 rounded-3xl shadow-sm border border-stone-200 dark:border-emerald-800">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <ArrowRight className="text-emerald-600 dark:text-emerald-400" /> News & Events
                            </h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-emerald-500 pl-4 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors">
                                    <p className="font-bold text-gray-900 dark:text-white mb-1">Online Consultancy</p>
                                    <p className="text-sm text-gray-600 dark:text-emerald-100/60 leading-relaxed">
                                        Eminent Ayurvedic Doctors provide complimentary online consultation regarding Health & Beauty. Get a head start on your wellness journey.
                                    </p>
                                </div>
                                <div className="border-l-4 border-emerald-500 pl-4 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors">
                                    <p className="font-bold text-gray-900 dark:text-white mb-1">New Panchkarma Facility</p>
                                    <p className="text-sm text-gray-600 dark:text-emerald-100/60 leading-relaxed">
                                        Our expanded rejuvenation center in Nanded is now open, featuring specialized Shirodhara and Basti rooms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/40 p-10 rounded-3xl shadow-sm border border-emerald-100 dark:border-emerald-800">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Star className="text-emerald-600 dark:text-emerald-400" /> Testimonials
                            </h3>
                            <div className="italic text-gray-700 dark:text-emerald-100 leading-relaxed mb-8 text-lg">
                                "The Panchkarma treatment I received at Mundada Hospital was life-changing. I felt a profound sense of detoxification and mental peace that I hadn't experienced in years."
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                                    RJ
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">Recent Patient</p>
                                    <p className="text-xs text-gray-500 dark:text-emerald-400">Chronic Pain Relief Treatment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-emerald-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <Activity className="absolute top-10 left-10 w-48 h-48" />
                    <Activity className="absolute bottom-10 right-10 w-64 h-64" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your healing journey?</h2>
                    <p className="text-emerald-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                        Online consultations are available. Get a personalized health assessment from the comfort of your home.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white dark:bg-emerald-100 text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 dark:hover:bg-white transition-all shadow-xl inline-block hover:scale-105 active:scale-95"
                    >
                        Schedule Your Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
