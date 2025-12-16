import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const images = [
        'https://placehold.co/1200x600/10B981/ffffff?text=Mundada+Ayurveda+Center',
        'https://placehold.co/1200x600/059669/ffffff?text=Traditional+Healing',
        'https://placehold.co/1200x600/047857/ffffff?text=Peaceful+Environment',
    ];

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
        <div className="max-w-[1400px] h-[400px] md:h-[600px] w-full m-auto py-4 px-4 relative group">
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
                <ChevronLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
                <ChevronRight onClick={nextSlide} size={30} />
            </div>
            {/* Dots */}
            <div className="flex top-4 justify-center py-2 gap-2 mt-4">
                {images.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer transition-all duration-300 w-3 h-3 rounded-full ${currentIndex === slideIndex ? 'bg-emerald-600 w-6' : 'bg-emerald-300'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
