import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';

export default function Home() {
  return (
    <main className={``}>
      <Navigation />
      <Hero />
      <About />
    </main>
  );
}
