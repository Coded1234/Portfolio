"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  images: string[];
}

export default function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 z-0">
      <div className="absolute inset-0">
        <Image
          key={currentImage}
          src={currentImage}
          alt=""
          fill
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className="object-cover pointer-events-none select-none"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none select-none" />
    </div>
  );
}