import { Metadata } from 'next';
import { FloatingNav } from './_components/FloatingNav';
import { HeroReal } from './_components/HeroReal';
import { ServicesEnterprise } from './_components/ServicesEnterprise';
import { ServicesStartup } from './_components/ServicesStartup';
import { WhyChooseUs } from './_components/WhyChooseUs';
import { ContactSection } from './_components/ContactSection';
import { Footer } from './_components/Footer';

export const metadata: Metadata = {
  title: 'Sageware Solutions - Custom Software Development Philippines',
  description: 'Tailored software solutions for enterprises and startups. Custom software, web & mobile apps, MVP development, and technical leadership based in the Philippines.',
};

export default function SagewarePage() {
  return (
    <main className="min-h-screen bg-white">
      <FloatingNav />
      <HeroReal />
      <ServicesEnterprise />
      <ServicesStartup />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
