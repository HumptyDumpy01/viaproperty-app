import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Navigation />
      <Hero />
      <About />
      <OurServices />
      <section>
        <div className={`max-w-7xl mx-auto w-full`}>
          <HeadingAndLink heading={`Featured Properties`} headingSpan={`viaproperty recommends!`} linkLabel={`see all`}
                          linkHref={`/properties?tags=featured`} />
          <div className={`flex gap-7`}>
            <div className={`flex flex-col`}>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
