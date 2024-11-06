// 'use client';

/*type HeroFirstColType = {
  // children: ReactNode;
}*/

import React from 'react';
import SupportTeam from '@/components/Layout/Other/SupportTeam';
import BulkyLink from '@/components/UI/Link/BulkyLink';

export default function HeroFirstCol(/*{  }: HeroFirstColType*/) {
  return (
    <>
      <div className={`flex flex-col my-auto bp-620:min-w-[450px] mx-auto bp-1235:mx-0 mb-9 bp-1235:mb-0`}>
        <h1 className={`text-2xl bp-464:text-4xl bp-620:text-5xl font-bold tracking-wide leading-tight
                bg-clip-text text-transparent bg-linear-main-red mb-6`}>Exquisite design <br />
          combined with <br />
          posh interior</h1>
        <p className={`max-w-md bp-620:text-[15px] text-[13px] mb-6`}>Want to buy or rent a
          property with us? Our team is dedicated to providing you with the best service and ensuring a smooth
          transaction. Please review the details of your purchase or rental agreement, and more!</p>

        <div className={`bp-620:flex hidden`}>
          <SupportTeam />
        </div>
        <BulkyLink linkStyle={`red`} href={`/properties`} label={`Explore Properties!`} />
      </div>
    </>
  );
}
