import { Hero } from '../components/Hero';
import { WhatWeDo } from '../components/WhatWeDo';
import { Benefits } from '../components/Benefits';
import { HowItWorks } from '../components/HowItWorks';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Benefits />
      <HowItWorks />
      <CTA />
    </main>
  );
}