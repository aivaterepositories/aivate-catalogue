'use client';

import React, { useState, useEffect, useRef } from 'react';

export const EternalCube: React.FC = () => {
    const [rotation, setRotation] = useState({ x: -20, y: 35 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate rotation based on cursor position relative to center
            const xRot = ((clientY / innerHeight) - 0.5) * -40; // Max 20deg tilt
            const yRot = ((clientX / innerWidth) - 0.5) * 40;   // Max 20deg swivel

            setRotation({
                x: xRot - 10, // Base tilt
                y: yRot + 45  // Base rotation
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const faces = [
        { transform: 'rotateY(0deg) translateZ(100px)', label: 'Dimension 1' },
        { transform: 'rotateY(90deg) translateZ(100px)', label: 'Dimension 2' },
        { transform: 'rotateY(180deg) translateZ(100px)', label: 'Dimension 3' },
        { transform: 'rotateY(-90deg) translateZ(100px)', label: 'Dimension 4' },
        { transform: 'rotateX(90deg) translateZ(100px)', label: 'Dimension 5' },
        { transform: 'rotateX(-90deg) translateZ(100px)', label: 'Dimension 6' },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center perspective-1000 scale-75 md:scale-100"
        >
            <div
                className="relative w-48 h-48 transform-3d transition-transform duration-700 ease-out"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                <div className="absolute inset-4 rounded-full bg-accent/20 blur-2xl animate-pulse" />
                <div className="absolute inset-12 border border-accent/40 rounded-full transform-3d animate-spin-slow">
                    <div className="absolute inset-4 bg-gradient-to-br from-indigo via-purple-500 to-mint opacity-30 blur-lg rounded-full" />
                </div>

                {faces.map((face, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group overflow-hidden"
                        style={{ transform: face.transform }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                        <div className="w-8 h-8 border border-mint/20 rounded-sm rotate-45 group-hover:scale-150 group-hover:border-mint/50 transition-all duration-300" />

                        <div className="absolute top-0 left-0 w-4 h-[1px] bg-mint/30" />
                        <div className="absolute top-0 left-0 w-[1px] h-4 bg-mint/30" />
                        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-indigo/30" />
                        <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-indigo/30" />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-indigo/5 rounded-full blur-[100px] -z-10 animate-pulse" />
        </div>
    );
};
