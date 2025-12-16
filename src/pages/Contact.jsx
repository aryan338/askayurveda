import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => (
    <div className="pt-24 pb-20 bg-transparent min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-gray-600 text-lg">
                            Whether you need to book an appointment or have a query about our treatments, we are here to help.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                <a
                                    href="https://maps.app.goo.gl/ZEm2G4B4GqBq8eWD9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-emerald-600 transition-colors block"
                                >
                                    Mundada Ayurveda Hospital<br />Nanded, Maharashtra
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                <a href="tel:+919422171607" className="text-gray-600 hover:text-emerald-600 transition-colors block">+91 94221 71607</a>
                                <a href="tel:+919423778570" className="text-gray-600 hover:text-emerald-600 transition-colors block">+91 94237 78570</a>
                                <p className="text-sm text-gray-400">Mon-Sat, 9am - 7pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                <a href="mailto:prashantayur94@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors block">prashantayur94@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-emerald-600">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Consultation</h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Service Needed</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                                <option>General Consultation</option>
                                <option>Panchkarma Therapy</option>
                                <option>Skin Treatment</option>
                                <option>Joint Pain</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Briefly describe your health concern..."></textarea>
                        </div>

                        <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
