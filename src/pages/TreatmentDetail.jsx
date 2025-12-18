import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Clock } from 'lucide-react';

const TreatmentDetailPage = ({ treatment }) => {
    // If no treatment is found, redirect back to the list
    if (!treatment) {
        return <Navigate to="/treatments" replace />;
    }

    const Icon = treatment.icon;

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 md:px-6 animate-in fade-in duration-500">
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/treatments"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold mb-8 transition-colors"
                >
                    <ArrowLeft size={18} /> Back to Treatments List
                </Link>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-emerald-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">{treatment.title}</h1>
                    </div>

                    {/* Facility Photo Placeholder: Insert the URL for the specific therapy room photo here */}
                    <img
                        src={`https://placehold.co/800x200/ECFDF5/047857?text=${treatment.title}+Therapy+Facility+Photo`}
                        alt={`${treatment.title} Therapy Room`}
                        className="w-full h-48 object-cover rounded-xl mb-8"
                        onError={(e) => e.target.src = 'https://placehold.co/800x200/999/fff?text=Image+Load+Failed'}
                    />


                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 border-b pb-8 border-gray-100">
                        {treatment.detailContent.overview}
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <Heart size={20} /> Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                {treatment.detailContent.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="text-emerald-600 mt-0.5 shrink-0">
                                            <Star size={18} fill="currentColor" />
                                        </div>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                <Clock size={20} /> The Process
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {treatment.detailContent.process}
                            </p>
                            <Link
                                to="/contact"
                                className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors inline-block"
                            >
                                Inquire about this Treatment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentDetailPage;
