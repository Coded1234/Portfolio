'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from "@/components/FadeIn";

export default function LightboxGallery({ gallery, title }: { gallery: string[], title: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (idx: number) => {
        setCurrentIndex(idx);
        setIsOpen(true);
    };

    const nextImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % gallery.length);
    };
    const prevImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((imgUrl, idx) => (
                    <FadeIn key={idx} delay={idx * 100} className={`relative group overflow-hidden bg-gray-100 cursor-pointer ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/5] lg:aspect-square'}`}>
                        <div onClick={() => openLightbox(idx)} className="absolute inset-0 z-20" />
                        <Image
                            src={imgUrl}
                            alt={`${title} Preview ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                        {/* Hover Icon Reveal */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                            <span className="bg-white/90 text-gray-900 text-xs font-semibold uppercase tracking-widest px-6 py-3 shadow-2xl">
                                Expand View
                            </span>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
                    {/* Close Button */}
                    <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50">
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={prevImg}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 md:p-4 z-50"
                    >
                        <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <Image
                            src={gallery[currentIndex]}
                            alt={`Expanded view of ${title}`}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 1024px) 100vw, 80vw"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextImg}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 md:p-4 z-50"
                    >
                        <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    {/* Counter Counter */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm font-semibold">
                        {currentIndex + 1} / {gallery.length}
                    </div>
                </div>
            )}
        </>
    );
}