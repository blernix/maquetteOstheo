import React from 'react';
import Hero from '@/components/home/Hero';
import Prestations from '@/components/home/Prestations';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import InfoPratiques from '@/components/home/InfoPratiques';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Prestations />
      <About />
      <Testimonials />
      <InfoPratiques />
      <CTA />
    </>
  );
}
