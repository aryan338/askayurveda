import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { treatmentData } from '../data/treatments';

const TreatmentsPage = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Treatments</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of authentic Ayurvedic therapies tailored to your specific condition.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatmentData.map((t, i) => {
                    const Icon = t.icon; // Get the Icon component
                    return (
                        <Link
                            key={i}
                            to={`/treatments/${t.id}`}
                            className="text-left group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-emerald-50 hover:border-emerald-200 cursor-pointer w-full block"
                        >
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {t.desc}
                            </p>
                            <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Details <ArrowRight size={14} />
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TreatmentsPage;
