'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { LandingPage, Dashboard } from '@/types';

interface ProjectCardProps {
  projects: (LandingPage | Dashboard)[];
  type: 'landing' | 'dashboard';
}

export function ProjectCard({ projects, type }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const currentProject = projects[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipping]);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const getImageUrl = () => {
    if (type === 'landing') {
      return (currentProject as LandingPage).image;
    } else {
      return (currentProject as Dashboard).screenshots[0];
    }
  };

  const getUrl = () => {
    if (type === 'landing') {
      return (currentProject as LandingPage).vercelUrl;
    } else {
      return (currentProject as Dashboard).vercelUrl;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Preview Card */}
      <div
        className={`relative bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border-2 border-indigo/20 dark:border-mint/20 shadow-2xl transition-all duration-300 ${isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
          }`}
      >
        {/* Preview Image/Screenshot */}
        <div className="aspect-video bg-gradient-to-br from-indigo/5 to-mint/5 dark:from-indigo/10 dark:to-mint/10 relative overflow-hidden">
          <img
            src={getImageUrl()}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {currentProject.title}
          </h3>
          <p className="text-white/90 mb-4 max-w-2xl">
            {currentProject.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {currentProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Preview Button */}
          <a
            href={getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-indigo-mint hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Preview Live
          </a>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={isFlipping}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900/50 border-2 border-indigo/20 dark:border-mint/20 rounded-lg hover:border-indigo dark:hover:border-mint transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-5 h-5 text-indigo dark:text-mint group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-indigo dark:text-mint">Previous</span>
        </button>

        {/* Counter */}
        <div className="text-center">
          <span className="text-2xl font-bold text-indigo dark:text-mint">
            {currentIndex + 1}
          </span>
          <span className="text-slate-600/60 dark:text-white/60 mx-2">of</span>
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {projects.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isFlipping}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900/50 border-2 border-indigo/20 dark:border-mint/20 rounded-lg hover:border-indigo dark:hover:border-mint transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span className="font-semibold text-indigo dark:text-mint">Next</span>
          <ChevronRight className="w-5 h-5 text-indigo dark:text-mint group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="text-center mt-4 text-sm text-slate-600/60 dark:text-white/60">
        Use arrow keys ← → to navigate
      </div>
    </div>
  );
}
