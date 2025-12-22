import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import hosp1 from '../assets/hosp1.jpg';
import hosp2 from '../assets/hosp2.jpg';
import hosp3 from '../assets/hosp3.jpg';
import hosp4 from '../assets/hosp4.jpg';
import hosp5 from '../assets/hosp5.jpg';
import hosp6 from '../assets/hosp6.jpg';

const Carousel = () => {
    const images = [hosp1, hosp2, hosp3, hosp4, hosp5, hosp6];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-scroll every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="max-w-[1400px] w-full m-auto py-4 px-4 relative group">
            {/* Image Container with fixed aspect ratio */}
            <div className="relative w-full h-[450px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-stone-200">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Hospital view ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    />
                ))}

                {/* Overlay gradient for better button visibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-20" />

                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 z-30 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
                    <ChevronLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 z-30 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
                    <ChevronRight onClick={nextSlide} size={30} />
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center py-2 gap-2 mt-4">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer transition-all duration-300 h-2.5 rounded-full ${currentIndex === slideIndex ? 'bg-emerald-600 w-8' : 'bg-emerald-300 w-2.5 hover:bg-emerald-400'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
