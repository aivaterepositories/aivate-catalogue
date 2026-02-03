'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { Workflow } from '@/types';

interface WorkflowCardProps {
  workflows: Workflow[];
}

export function WorkflowCard({ workflows }: WorkflowCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentWorkflow = workflows[currentIndex];

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
    setIsHovered(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % workflows.length);
      setIsFlipping(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setIsHovered(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + workflows.length) % workflows.length);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Workflow Card */}
      <div
        className={`relative bg-white dark:bg-slate/50 rounded-2xl overflow-hidden border-2 border-indigo/20 dark:border-mint/20 shadow-2xl transition-all duration-300 ${
          isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Workflow Screenshot */}
        <div className="aspect-video bg-gradient-to-br from-indigo/5 to-mint/5 dark:from-indigo/10 dark:to-mint/10 relative overflow-hidden">
          <img
            src={currentWorkflow.screenshot}
            alt={currentWorkflow.title}
            className="w-full h-full object-cover"
          />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-slate/95 dark:bg-slate backdrop-blur-sm transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="h-full flex flex-col justify-center p-8 md:p-12">
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-indigo-mint flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-mint">
                  {currentWorkflow.title}
                </h3>
              </div>

              {/* Use Case */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-mint/20 rounded-full text-sm font-semibold text-mint">
                  {currentWorkflow.useCase}
                </span>
              </div>

              {/* Function Description */}
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                {currentWorkflow.function}
              </p>

              {/* Actions */}
              <div className="mb-6">
                <h4 className="text-mint font-semibold mb-2">Key Actions:</h4>
                <ul className="space-y-1">
                  {currentWorkflow.actions.slice(0, 3).map((action, idx) => (
                    <li key={idx} className="text-white/80 flex items-start gap-2">
                      <span className="text-mint mt-1">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                  {currentWorkflow.actions.length > 3 && (
                    <li className="text-mint/60 text-sm">
                      +{currentWorkflow.actions.length - 3} more actions
                    </li>
                  )}
                </ul>
              </div>

              {/* Integrations */}
              <div className="flex flex-wrap gap-2">
                {currentWorkflow.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hover Hint */}
          <div
            className={`absolute top-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-lg text-white text-sm transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Hover to see details
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="p-6 bg-white/50 dark:bg-slate/30 backdrop-blur-sm border-t border-indigo/10 dark:border-mint/10">
          <h3 className="text-xl font-bold text-indigo dark:text-mint mb-2">
            {currentWorkflow.title}
          </h3>
          <p className="text-slate/70 dark:text-white/70">
            {currentWorkflow.description}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={isFlipping}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate/50 border-2 border-indigo/20 dark:border-mint/20 rounded-lg hover:border-indigo dark:hover:border-mint transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-5 h-5 text-indigo dark:text-mint group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-indigo dark:text-mint">Previous</span>
        </button>

        {/* Counter */}
        <div className="text-center">
          <span className="text-2xl font-bold text-indigo dark:text-mint">
            {currentIndex + 1}
          </span>
          <span className="text-slate/60 dark:text-white/60 mx-2">of</span>
          <span className="text-2xl font-bold text-slate dark:text-white">
            {workflows.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isFlipping}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate/50 border-2 border-indigo/20 dark:border-mint/20 rounded-lg hover:border-indigo dark:hover:border-mint transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span className="font-semibold text-indigo dark:text-mint">Next</span>
          <ChevronRight className="w-5 h-5 text-indigo dark:text-mint group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="text-center mt-4 text-sm text-slate/60 dark:text-white/60">
        Hover to see workflow details • Use arrow keys ← → to navigate
      </div>
    </div>
  );
}
