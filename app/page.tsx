import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import FeaturedProperty1 from '@/assets/home/featured/featured-1.png';
import FeaturedProperty2 from '@/assets/home/featured/featured-2.png';
import FeaturedProperty3 from '@/assets/home/featured/featured-3.png';
import FeaturedProperty4 from '@/assets/home/featured/featured-4.png';
import FeaturedProperty5 from '@/assets/home/featured/featured-5.png';
import CardProperty from '@/components/UI/Card/CardProperty';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Navigation />
      <Hero />
      <About />
      <OurServices />
      <section className={`mb-20`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <HeadingAndLink heading={`Featured Properties`} headingSpan={`viaproperty recommends!`} linkLabel={`see all`}
                          linkHref={`/properties?tags=featured`} />
          <div className={`flex gap-7 overflow-x-auto overflow-y-hidden pb-8 `}>
            <CardProperty href={`properties/1`} heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                          altImg={`A featured property 1`} srcImg={FeaturedProperty1} createdAt={`4`} type={`rent`}
                          paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...`}
                          total={`5,459`} />
            <CardProperty href={`properties/2`} heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                          altImg={`A featured property 2`} srcImg={FeaturedProperty2} createdAt={`7`} type={`buy`}
                          paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...`}
                          total={`1,459,000`} />
            <CardProperty href={`properties/3`} heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                          altImg={`A featured property 3`} srcImg={FeaturedProperty3} createdAt={`2`} type={`rent`}
                          paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...`}
                          total={`2,459`} />
            <CardProperty href={`properties/4`} heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                          altImg={`A featured property 4`} srcImg={FeaturedProperty4} createdAt={`9`} type={`buy`}
                          paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...`}
                          total={`1,459,000`} />
            <CardProperty href={`properties/5`} heading={`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
                          altImg={`A featured property 5`} srcImg={FeaturedProperty5} createdAt={`3`} type={`rent`}
                          paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...`}
                          total={`3,459`} />

          </div>
        </div>
      </section>
    </main>
  );
}
