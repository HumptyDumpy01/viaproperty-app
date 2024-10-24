import React from 'react';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import CustomerTestimonials from '@/components/Home/Layout/CustomerTestimonialsSection';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import LatestPosts from '@/components/Home/Layout/LatestPosts';
import Footer from '@/components/Layout/Footer/Footer';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Hero />
      <About />
      <OurServices />
      <FeaturedProperties />
      <BuyProperty />
      <CustomerTestimonials />
      <CallToActionBlock />
      <LatestPosts />
      <Footer />
    </main>
  );
}
