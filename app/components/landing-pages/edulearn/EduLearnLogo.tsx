'use client';

/**
 * EduLearn Logo SVG Component
 * SVG hex values map to edulearn theme tokens:
 *   #14B8A6 / #0F766E → edulearn-primary (#0D9488)
 *   #FF6B6B / #FF8E8E → edulearn-accent (#FF6B6B)
 */
import React from 'react';

interface EduLearnLogoProps {
    className?: string;
}

export const EduLearnLogo: React.FC<EduLearnLogoProps> = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Gradient Definitions */}
            <defs>
                <linearGradient id="edulearn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#0F766E" />
                </linearGradient>
                <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="100%" stopColor="#FF8E8E" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background Circle */}
            <circle cx="50" cy="50" r="48" fill="url(#edulearn-gradient)" opacity="0.1" />

            {/* Main Book Shape */}
            <path
                d="M30 25 L30 75 L50 70 L70 75 L70 25 L50 30 Z"
                fill="url(#edulearn-gradient)"
                filter="url(#glow)"
            />

            {/* Book Spine */}
            <rect x="48" y="25" width="4" height="45" fill="#0F766E" opacity="0.3" />

            {/* Accent Bookmark */}
            <path
                d="M60 25 L60 50 L65 45 L70 50 L70 25 Z"
                fill="url(#accent-gradient)"
            />

            {/* Abstract Learning Lines */}
            <path
                d="M35 40 L45 40"
                stroke="#F8FAFC"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M35 48 L42 48"
                stroke="#F8FAFC"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path
                d="M35 56 L45 56"
                stroke="#F8FAFC"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
            />

            {/* Sparkle Effect */}
            <circle cx="40" cy="32" r="2" fill="#FF6B6B" opacity="0.8" />
            <circle cx="55" cy="38" r="1.5" fill="#FF8E8E" opacity="0.6" />
            <circle cx="38" cy="62" r="1.5" fill="#14B8A6" opacity="0.7" />
        </svg>
    );
};
