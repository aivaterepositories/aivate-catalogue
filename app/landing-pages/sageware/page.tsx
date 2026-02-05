import { Metadata } from 'next';
import { Hero } from './_components/Hero';
import { Features } from './_components/Features';
import { Pricing } from './_components/Pricing';
import { TrialCTA } from './_components/TrialCTA';

export const metadata: Metadata = {
  title: 'Sageware - AI-Powered Business Intelligence Platform',
  description: 'Transform raw data into actionable insights with Sageware\'s AI-powered analytics platform. Trusted by 10,000+ companies worldwide.',
};

export default function SagewarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Pricing />
      <TrialCTA />
    </main>
  );
}
