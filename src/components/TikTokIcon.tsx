import React from 'react';

export const TikTokIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
    <svg
        viewBox="0 0 50 50"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        {/* Rounded square background */}
        <rect x="4" y="4" width="42" height="42" rx="8" ry="8" fill="none" />

        {/* Musical-note-like glyph inspired by the TikTok mark */}
        <path d="M32.5 12.5v9.6c-1.1-.2-2.2-.3-3.3-.3-3.8 0-7.3 2.1-9.1 5.5-1.9 3.5-1.6 7.7.7 10.7 2.3 3 6.1 4.8 9.9 4.8 4.8 0 9.1-3 11-7.5V27c-1.5 1-3.3 1.6-5.1 1.6-2.6 0-5.1-1-6.9-2.8-2-2-2.7-4.9-1.9-7.6 0 0 .1-.3.1-.4l7.6-1.8V12.5h0z" />
    </svg>
);

export default TikTokIcon;
