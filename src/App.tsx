import React from 'react';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Features } from './components/sections/Features';
import { FAQ } from './components/sections/FAQ';
import { Pricing } from './components/sections/Pricing';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

export default function App() {
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