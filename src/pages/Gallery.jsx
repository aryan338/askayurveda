import React from 'react';

const GalleryPage = () => {
    // Dynamically import all images from the gallery folder
    // eager: true loads them synchronously so we can use them immediately
    // as: 'url' gives us the string path to the image
    const imagesDict = import.meta.glob('../assets/gallery/*.jpg', { eager: true, as: 'url' });

    // Convert dictionary to array of objects
    const photos = Object.values(imagesDict).map((src, index) => ({
        id: index,
        src: src,
        alt: `Gallery Image ${index + 1}`
    }));

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    A glimpse into our serene environment and facilities dedicated to your healing.
                </p>
                <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                    <div key={photo.id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            {/* <span className="text-white opacity-0 group-hover:opacity-100 font-semibold px-4 py-2 bg-emerald-600/90 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {photo.alt}
                            </span> */}
                            {/* Commented out caption as we don't have specific names for these images yet */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
