import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';

export default function Home() {
  return (
    <main className={``}>
      <Navigation />
      <Hero />
      <section className={`mt-16 mb-20`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <div className={`flex gap-72`}>
            <div>
              <span className={`uppercase text-xs inline-block mb-2.5`}>Why us?</span>
              <h2 className={`bg-clip-text text-5xl font-bold text-transparent bg-linear-main-red mb-6`}>About</h2>
            </div>
            <div className={`flex gap-12`}>
              <div>
                <p className={`text-zinc-800 text-[15px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                  eiusmod
                  tempor incididunt ut labore
                  et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur,</p>
                <div>
                <span
                  className={`bg-clip-text text-[136px] font-bold text-transparent bg-linear-main-red mb-6
                  inline-block border-b-2 border-zinc-300 w-full`}>788</span>
                  <h3 className={`text-3xl uppercase font-bold text-zinc-800`}>completed deals</h3>
                </div>
                <div>
                <span
                  className={`bg-clip-text text-[136px] font-bold text-transparent bg-linear-main-red mb-6
                  inline-block border-b-2 border-zinc-300 w-full`}>5</span>
                  <h3 className={`text-3xl uppercase font-bold text-zinc-800`}>years of experience</h3>
                </div>
              </div>
              <div>
                <p className={`text-zinc-800  text-[15px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  tempor incididunt ut labore
                  et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
                <div>
                <span
                  className={`bg-clip-text text-[136px] font-bold text-transparent bg-linear-main-red mb-6
                  inline-block border-b-2 border-zinc-300 w-full`}>699</span>
                  <h3 className={`text-3xl uppercase font-bold text-zinc-800`}>satisfied customers</h3>
                </div>
                <div>
                <span
                  className={`bg-clip-text text-[136px] font-bold text-transparent bg-linear-main-red mb-6
                  inline-block border-b-2 border-zinc-300 w-full`}>295</span>
                  <h3 className={`text-3xl uppercase font-bold text-zinc-800`}>cities around usa</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
