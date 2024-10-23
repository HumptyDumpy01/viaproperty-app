// 'use client';

/*type HeroFirstColType = {
  // children: ReactNode;
}*/

import React from 'react';
import Button from '@/components/UI/Button/Button';
import SupportTeam from '@/components/Layout/Other/SupportTeam';

export default function HeroFirstCol(/*{  }: HeroFirstColType*/) {
  return (
    <>
      <div className={`flex flex-col my-auto min-w-[450px]`}>
        <h1 className={`text-5xl font-bold tracking-wide leading-11
                bg-clip-text text-transparent bg-linear-main-red mb-6`}>Exquisite design <br />
          combined with <br />
          posh interior</h1>
        <p className={`max-w-md text-[15px] mb-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
          dolore magna aliqua.</p>
        <SupportTeam />
        <Button label={`Shop Now!`} />
      </div>
    </>
  );
}
