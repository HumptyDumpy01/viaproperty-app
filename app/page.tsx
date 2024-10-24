import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import CustomerTestimonials from '@/components/Home/Layout/CustomerTestimonialsSection';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Navigation />
      <Hero />
      <About />
      <OurServices />
      <FeaturedProperties />
      <BuyProperty />
      <CustomerTestimonials />
      <section>
        <div className={`flex flex-col`}>
        </div>
      </section>
    </main>
  );
}
