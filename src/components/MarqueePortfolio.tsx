"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

interface Business {
    title: string;
    description: string;
    href: string;
    tag: string;
    image: string;
    comingSoon?: boolean;
}

export default function MarqueePortfolio({ businesses }: { businesses: Business[] }) {
    // Duplicate businesses to create a seamless infinite loop
    const duplicatedBusinesses = [...businesses, ...businesses, ...businesses];

    const [paused, setPaused] = useState(false);

    return (
        <section id="portfolio" className="border-t border-gray-100 bg-white py-16 overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-center text-center">
                <h2 className="text-3xl sm:text-4xl font-playfair tracking-tight mb-4 text-gray-900">Our Portfolio</h2>
                <p className="text-gray-500 font-light max-w-xl mb-6">
                    Explore our diverse range of operating companies driving growth globally. Swipe on mobile or let it glide on larger screens.
                </p>
                <Link href="/about" className="text-[11px] uppercase tracking-[0.2em] font-bold pb-1 border-b border-gray-900 hover:text-gray-500 transition-colors">
                    View All Subsidiaries
                </Link>
            </div>

            <div className="md:hidden px-4">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {businesses.map((business, idx) => (
                        <Link
                            key={`${business.href}-mobile-${idx}`}
                            href={business.href}
                            className="flex-shrink-0 w-[82vw] max-w-[320px] snap-start flex flex-col group/card"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#f9f9f9] overflow-hidden border border-gray-100">
                                <Image
                                    src={business.image}
                                    alt={business.title}
                                    fill
                                    className="object-cover mix-blend-multiply opacity-90"
                                    sizes="82vw"
                                />
                            </div>

                            <div className="bg-white py-4 px-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-gray-900 mb-1 line-clamp-1">
                                        {business.title} <span className="text-gray-500 font-normal">[{business.tag}]</span>
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between mt-6">
                                    <span className="text-[13px] font-bold text-gray-900">{business.comingSoon ? "COMING SOON" : "EXPLORE"}</span>
                                    <ArrowRightIcon className="w-4 h-4 text-gray-600" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="relative hidden md:block w-full flex overflow-x-hidden group">
                <div className="flex w-max animate-marquee" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
                    {duplicatedBusinesses.map((business, idx) => (
                        <Link
                            key={idx}
                            href={business.href}
                            onPointerEnter={() => setPaused(true)}
                            onPointerLeave={() => setPaused(false)}
                            className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[400px] mx-2 flex flex-col group/card"
                        >
                            {/* Image Section - mimicking the light gray background in your reference */}
                            <div className="relative w-full aspect-[4/3] bg-[#f9f9f9] overflow-hidden">
                                <Image
                                    src={business.image}
                                    alt={business.title}
                                    fill
                                    className="object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover/card:scale-105"
                                    sizes="(max-width: 768px) 80vw, 400px"
                                />
                            </div>

                            {/* Details Section - underneath the image */}
                            <div className="bg-white py-4 px-1 flex flex-col justify-between transition-colors">
                                <div>
                                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-gray-900 mb-1 line-clamp-1">
                                        {business.title} <span className="text-gray-500 font-normal">[{business.tag}]</span>
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between mt-6">
                                    <span className="text-[13px] font-bold text-gray-900">{business.comingSoon ? "COMING SOON" : "EXPLORE"}</span>
                                    <ArrowRightIcon className="w-4 h-4 text-gray-600 group-hover/card:text-gray-900 group-hover/card:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}