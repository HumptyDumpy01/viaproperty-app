// 'use client';

/*type FooterColOneType = {
  // children: ReactNode;
}*/

import Button from '@/components/UI/Button/Button';
import React from 'react';

export default function FooterColOne(/*{  }: FooterColOneType*/) {
  return (
    <>
      <div className={`col-span-2 bg-slate-950 text-white pt-11 bp-1160:rounded-2xl text-center pb-12`}>
        <h1 className={`bp-480:text-5xl text-4xl font-bold leading-tight mb-5
        `}>Download <br /> Mobile App!</h1>
        <p className={`px-11 text-sm mb-10 leading-relaxed`}>
          Discover the ultimate property experience with the Viaproperty mobile app!
          Whether you&#39;re looking to buy, sell, or rent, our app provides seamless access to the best properties on the
          market.
          Download now and take the first step towards your dream home!
        </p>
        <div className={`flex justify-center`}>
          <Button label={`Download`} />
        </div>
      </div>
    </>
  );
}
