"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Only start loading the video when it scrolls into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters viewport
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Once in view, set the src and attempt to play
  useEffect(() => {
    const video = videoRef.current;
    if (!isInView || !video) return;

    video.src = src;
    video.load();

    const handleCanPlay = () => {
      video.play()
        .then(() => {
          setIsLoaded(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked or failed, keeping poster visible:", err);
          // Keep isLoaded false so the poster remains visible instead of blank
        });
    };

    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [isInView, src]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Shimmer placeholder if no poster is provided and video hasn't loaded */}
      {!isLoaded && !poster && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {/* Poster image that fades out when loaded */}
      {poster && (
        <Image
          src={poster}
          alt="Video poster"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${className} absolute inset-0 object-cover z-10 transition-opacity duration-1000 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          priority={false}
        />
      )}

      <video
        ref={videoRef}
        className={`${className} transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  );
}
