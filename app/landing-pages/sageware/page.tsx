import { Metadata } from 'next';
import { FloatingNav } from './_components/FloatingNav';
import { HeroModern } from './_components/HeroModern';
import { LogoCloud } from './_components/LogoCloud';
import { BentoFeatures } from './_components/BentoFeatures';
import { WallOfLove } from './_components/WallOfLove';
import { PricingModern } from './_components/PricingModern';
import { FinalCTAModern } from './_components/FinalCTAModern';

export const metadata: Metadata = {
  title: 'Sageware - Turn Data Into Decisions in Real-Time',
  description: 'AI-powered business intelligence platform with sub-100ms query performance. Trusted by 10,000+ data teams worldwide. Start your free trial today.',
};

export default function SagewarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <FloatingNav />
      <HeroModern />
      <LogoCloud />
      <BentoFeatures />
      <WallOfLove />
      <PricingModern />
      <FinalCTAModern />
    </main>
  );
}
