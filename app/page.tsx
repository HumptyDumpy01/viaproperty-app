import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CustomerImg1 from '@/assets/home/customer-testimonials/customer-1.png';
import CustomerImg2 from '@/assets/home/customer-testimonials/customer-2.png';
import CustomerImg3 from '@/assets/home/customer-testimonials/customer-3.png';
import CustomerImg4 from '@/assets/home/customer-testimonials/customer-4.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Navigation />
      <Hero />
      <About />
      <OurServices />
      <FeaturedProperties />
      <BuyProperty />
      <section className={`mb-14`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <div className={`flex gap-32`}>
            <div className={`min-w-[590px] pr-36 border-r-4 border-r-zinc-300`}>
              <div className={`-mb-8`}>
                <HeadingAndLink heading={`we like to do things differently`} headingSpan={`what our customers think`}
                                headingCapitalized showLink={false} linkLabel={``} linkHref={``} />
              </div>
              <div className={`flex items-center`}>
                <Image className={`w-14 h-14 -mr-4`} src={CustomerImg1} alt={`Customer Image 1`} />
                <Image className={`w-14 h-14 -mr-4`} src={CustomerImg2} alt={`Customer Image 2`} />
                <Image className={`w-14 h-14 -mr-4`} src={CustomerImg3} alt={`Customer Image 3`} />
                <Image className={`w-14 h-14 -mr-4`} src={CustomerImg4} alt={`Customer Image 4`} />
                <p className={`ml-8`}><span className={`font-semibold text-zinc-700`}>+271</span> more positive reviews
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className={`text-zinc-800`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor
                  incididunt ut labore et
                  dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  . <br className={`mb-4`} /> Lorem
                  ipsum dolor sit amet, <span
                    className={`inline-block text-red-500 font-semibold`}>consectetur adipiscing elit, sed do</span> eiusmod
                  tempor
                  incididunt ut.
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed!</p>
                <div className={`flex gap-6 items-center  mt-10`}>
                  <div>
                    <Image className={`w-16 h-16`} src={CustomerImg1} alt={`Customer Image 1`} />
                  </div>
                  <div className={`flex flex-col gap-0.5 items-center`}>
                    <h3 className={`text-zinc-800 font-semibold`}>Brad Hunter</h3>
                    <p className={`text-sm text-zinc-500`}>Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
