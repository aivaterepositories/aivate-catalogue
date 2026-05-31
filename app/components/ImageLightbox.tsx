'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function ImageLightbox({ images, currentIndex, onClose, onNavigate }: ImageLightboxProps) {
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
            if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, images.length, onClose, onNavigate]);

    // Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const hasMultipleImages = images.length > 1;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 group"
                    aria-label="Close lightbox"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
                </button>

                {/* Image Counter */}
                {hasMultipleImages && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}

                {/* Main Image */}
                <motion.div
                    className="relative max-w-7xl max-h-[90vh] w-full mx-4"
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-full object-contain rounded-xl shadow-2xl"
                    />
                </motion.div>

                {/* Navigation Buttons */}
                {hasMultipleImages && (
                    <>
                        {/* Previous */}
                        <button
                            onClick={() => onNavigate(currentIndex - 1)}
                            disabled={currentIndex === 0}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
                        </button>

                        {/* Next */}
                        <button
                            onClick={() => onNavigate(currentIndex + 1)}
                            disabled={currentIndex === images.length - 1}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </>
                )}

                {/* Backdrop click to close */}
                <div
                    className="absolute inset-0 -z-10"
                    onClick={onClose}
                />
            </motion.div>
        </AnimatePresence>
    );
}
