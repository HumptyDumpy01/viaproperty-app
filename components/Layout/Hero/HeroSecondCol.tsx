// 'use client';

/*type HeroSecondColType = {
  // children: ReactNode;
}*/

import Image from 'next/image';
import HeroImg1 from '@/assets/home/hero-second-col/image-1.png';
import HeroImg2 from '@/assets/home/hero-second-col/image-2.jpg';
import HeroImg3 from '@/assets/home/hero-second-col/image-3.png';
import React from 'react';
import ButtonGoTo from '@/components/UI/Button/ButtonGoTo';
import Badge from '@/components/UI/Badge/Badge';
import CallToAction from '@/components/Layout/Cta/CallToAction';

export default function HeroSecondCol(/*{  }: HeroSecondColType*/) {
  return (
    <>
      <div className={`grid grid-cols-3 gap-6`}>
        <div className={`self-center bp-1235:self-end`}>
          <Image className={`object-fit ml-auto rounded-2xl`} src={HeroImg1} alt={`Hero Image 1`} />
        </div>
        <div className={`relative`}>
          <Image className={`object-cover w-full h-full rounded-3xl`} src={HeroImg2} alt={`Hero Image 2`} />
          <ButtonGoTo href={`/properties/1`} type={`white`} absolute />
          <div className={`hidden bp-790:flex`}>
            <Badge city={`California`} absolute price={`215,000$`} title={`Wooden House`} />
          </div>
        </div>
        <div className={`relative`}>
          <div className={`relative`}>
            <Image src={HeroImg3} alt={`Hero Image 3`} />
            <div className={`hidden bp-790:flex`}>
              <Badge city={`California`} absolute price={`215,000$`} title={`Wooden House`} />
            </div>
            <ButtonGoTo href={`/properties/1`} type={`red`} absolute />
          </div>
          <div className={`hidden bp-1235:block`}>
            <CallToAction href={`/properties?filter=onSale`} span={`on sale!`} buttonLabel={`See More`}
                          message={`Fantastic properties on sale!`} />
          </div>
        </div>
      </div>
    </>
  );
}
