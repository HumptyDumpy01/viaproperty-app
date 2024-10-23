import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Navigation />
      <Hero />
      <About />
      <OurServices />
    </main>
  );
}
