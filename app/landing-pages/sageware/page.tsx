import { Metadata } from 'next';
import { HeroGlass } from './_components/HeroGlass';
import { ProblemSolution } from './_components/ProblemSolution';
import { SocialProof } from './_components/SocialProof';
import { SimplePricing } from './_components/SimplePricing';
import { FinalCTA } from './_components/FinalCTA';

export const metadata: Metadata = {
  title: 'Sageware - Turn Data Into Decisions in Real-Time',
  description: 'AI-powered business intelligence platform with sub-100ms query performance. Trusted by 10,000+ data teams worldwide. Start your free trial today.',
};

export default function SagewarePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroGlass />
      <ProblemSolution />
      <SocialProof />
      <SimplePricing />
      <FinalCTA />
    </main>
  );
}
