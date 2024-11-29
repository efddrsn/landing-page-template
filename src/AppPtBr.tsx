import React from 'react';
import { Hero } from './components/sections/HeroPtBr';
import { Process } from './components/sections/ProcessPtBr';
import { Features } from './components/sections/FeaturesPtBr';
import { FAQ } from './components/sections/FAQPtBr';
import { Pricing } from './components/sections/PricingPtBr';
import { CTA } from './components/sections/CTAPtBr';
import { Footer } from './components/sections/FooterPtBr';

export default function AppPtBr() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Process />
      <Features />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}