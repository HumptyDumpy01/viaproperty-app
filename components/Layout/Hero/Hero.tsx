'use client';

/*type HomeHeroType = {
  // children: ReactNode;
}*/

import React from 'react';
import HeroFirstCol from '@/components/Layout/Hero/HeroFirstCol';
import HeroSecondCol from '@/components/Layout/Hero/HeroSecondCol';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';

export default function Hero(/*{  }: HomeHeroType*/) {
  return (
    <>
      <header>
        <div
          className={`max-w-7xl mx-auto w-full mt-9 pt-12 pb-11 rounded-2xl pr-14 `}>
          <div className={`bp-1235:flex-row flex-col flex pl-16`}>
            <HeroFirstCol />
            <div className={`hidden bp-620:flex`}>
              <CustomApolloProvider>
                <HeroSecondCol />
              </CustomApolloProvider>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
