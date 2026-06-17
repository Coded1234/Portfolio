"use client";

import { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function LazyVideo({ src, className = "", poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver — only load video when near viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play video once it's loaded and visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    video.load();

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay may be blocked — that's fine
      });
    };

    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className={className}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        />
      )}
    </div>
  );
}

