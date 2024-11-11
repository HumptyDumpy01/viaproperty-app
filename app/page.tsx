import React from 'react';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import CustomerTestimonials from '@/components/Home/Layout/CustomerTestimonialsSection';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import LatestPosts from '@/components/Home/Layout/LatestPosts';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';

export default function Home() {
  return (
    <main className={`overflow-hidden px-3 bp-480:px-6`}>
      <Hero />
      <About />
      <OurServices />
      <FeaturedProperties
        headingLabel={`Featured Properties`}
        headingSpan={`viaproperty recommends!`}
        headingHref={`/properties?tags=featured`} />
      <BuyProperty />
      <CustomerTestimonials />
      <CallToActionBlock />
      <CustomApolloProvider>
        <LatestPosts />
      </CustomApolloProvider>
    </main>
  );
}
