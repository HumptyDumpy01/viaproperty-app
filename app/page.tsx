import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import OurServices from '@/components/Home/Layout/OurServices';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import BuyProperty from '@/components/Home/Layout/BuyProperty';
import CustomerTestimonials from '@/components/Home/Layout/CustomerTestimonialsSection';
import Button from '@/components/UI/Button/Button';

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
      <section className={`mb-20`}>
        <div className={`flex flex-col max-w-[1393px] h-[518px] mx-auto bg-slate-950 rounded-2xl pt-20`}>
          <div className={`text-center text-white`}>
            <h2 className={`text-6xl font-semibold`}>Jump in! <br className={`mb-2`} />
              Sign up to <span
                className={`bg-clip-text text-transparent bg-linear-main-red`}>viaproperty</span> news!</h2>
            <p className={`mt-6 mb-11`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor</p>
            <form className={`flex items-center justify-center gap-8 mb-8`}>
              <input type="email"
                     name={`email`}
                     className={`h-16 pl-7 rounded-full w-80
                     `} placeholder={`Type your email`} />
              <Button type={`md`} label={`Sign up`} />
            </form>

            <div className={`flex gap-7 items-center mx-auto justify-center`}>
              <div className={`flex gap-2.5 items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path
                    d="M1.71954 5.6584L4.41497 8.35383M8.18858 4.04114L10.884 1.3457M6.03223 5.6584L8.72766 8.35383L15.1967 1.3457"
                    stroke="white" stroke-width="1.61726" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>You’ll receive latest news!</p>
              </div>

              <div className={`flex gap-2.5 items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path
                    d="M1.71954 5.6584L4.41497 8.35383M8.18858 4.04114L10.884 1.3457M6.03223 5.6584L8.72766 8.35383L15.1967 1.3457"
                    stroke="white" stroke-width="1.61726" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Cancel any time!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
