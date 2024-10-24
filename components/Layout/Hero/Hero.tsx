// 'use client';

/*type HomeHeroType = {
  // children: ReactNode;
}*/

import React from 'react';
import HeroFirstCol from '@/components/Layout/Hero/HeroFirstCol';
import HeroSecondCol from '@/components/Layout/Hero/HeroSecondCol';

export default function Hero(/*{  }: HomeHeroType*/) {
  return (
    <>
      <header>
        <div
          className={`max-w-7xl mx-auto w-full mt-9 bg-zinc-50 pt-12 pb-11 rounded-2xl pr-14 bp-620:bg-linear-white-to-blue`}>
          <div className={`bp-1235:flex-row flex-col flex pl-16`}>
            <HeroFirstCol />
            <div className={`hidden bp-620:flex`}>
              <HeroSecondCol />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
