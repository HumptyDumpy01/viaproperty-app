import React from 'react';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import CustomerTestimonials from '@/components/Home/Layout/CustomerTestimonialsSection';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import LatestPosts from '@/components/Home/Layout/LatestPosts';
import Button from '@/components/UI/Button/Button';
import ViapropertyLogoFull from '@/assets/logo-full.png';
import Image from 'next/image';
import MetaIcon from '@/components/UI/Icon/MetaIcon';
import Clock from '@/components/UI/Icon/Clock';
import Link from 'next/link';

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
      <footer className={`mb-16 text-white`}>
        <div className={`max-w-[84rem] mx-auto w-full`}>
          <div className={`grid grid-cols-3 gap-5`}>
            <div className={`bg-slate-950 text-white pt-11 rounded-2xl text-center pb-12`}>
              <h1 className={`text-5xl font-bold leading-tight mb-5`}>Download <br /> Mobile App!</h1>
              <p className={`px-11 text-sm mb-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                incididunt ut labore et
                dolore magna aliqua. </p>
              <div className={`flex justify-center`}>
                <Button label={`Download`} />
              </div>
            </div>
            <div className={`col-span-2 bg-slate-950 rounded-2xl pt-12 px-12 pb-10`}>
              <div className={`grid grid-cols-4`}>
                <div className={`col-span-2 flex flex-col text-white`}>
                  <div className={`mb-9`}>
                    <Image src={ViapropertyLogoFull} alt={`Viaproperty Logo`} />
                  </div>
                  <div className={`mb-9`}>
                    <p className={`text-zinc-500 mb-2.5`}>1-(800)-435-1414-1413-341</p>
                    <p>viaproperty.test@gmail.com</p>
                  </div>
                  <div className={`flex items-center gap-3`}>
                    <MetaIcon type={`facebook`} background={true} />
                    <MetaIcon type={`instagram`} background={true} />
                    <MetaIcon type={`x`} background={true} />
                    <MetaIcon type={`viaproperty`} background={true} />
                    <MetaIcon type={`linkedin`} background={true} />
                  </div>
                </div>
                <div className={`text-white ml-auto`}>
                  <ul className={`font-semibold text-xl space-y-2`}>
                    <li>
                      <Link href={`#`}>About Us</Link>
                    </li>
                    <li>
                      <Link href={`#`}>Mobile App</Link>
                    </li>
                    <li>
                      <Link href={`#`}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className={`text-white ml-auto`}>
                  <ul className={`font-semibold text-xl space-y-2`}>
                    <li>
                      <Link href={`#`}>Support</Link>
                    </li>
                    <li>
                      <Link href={`#`}>Q and A</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`mt-12 flex items-center gap-5 max-w-[450px]`}>
                <div>
                  <Clock />
                </div>
                <p className={`text-sm leading-relaxed`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor
                  incididunt ut labore
                  et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
