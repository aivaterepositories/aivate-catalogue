import React from 'react';
import { EduLearnHeader } from '@/app/components/landing-pages/edulearn/EduLearnHeader';
import { EduLearnHero } from '@/app/components/landing-pages/edulearn/EduLearnHero';
import { EduLearnFeatures } from '@/app/components/landing-pages/edulearn/EduLearnFeatures';
import { EduLearnCourses } from '@/app/components/landing-pages/edulearn/EduLearnCourses';
import { EduLearnTestimonials } from '@/app/components/landing-pages/edulearn/EduLearnTestimonials';
import { EduLearnPricing } from '@/app/components/landing-pages/edulearn/EduLearnPricing';
import { EduLearnFooter } from '@/app/components/landing-pages/edulearn/EduLearnFooter';

export default function Home() {
  return (
    <div className="bg-edulearn-premium font-sans text-slate selection:bg-teal-100 selection:text-teal-900">
      <EduLearnHeader />
      <main>
        <EduLearnHero />
        <EduLearnFeatures />
        <EduLearnCourses />
        <EduLearnTestimonials />
        <EduLearnPricing />
      </main>
      <EduLearnFooter />
    </div>
  );
}
