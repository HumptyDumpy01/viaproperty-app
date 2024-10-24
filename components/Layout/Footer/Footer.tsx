// 'use client';

/*type FooterType = {
  // children: ReactNode;
}*/

import React from 'react';
import FooterColOne from '@/components/Layout/Footer/FooterColOne';
import FooterColTwo from '@/components/Layout/Footer/FooterColTwo';

export default function Footer(/*{  }: FooterType*/) {
  return (
    <>
      <footer className={`pb-16 pt-8 text-white w-full bg-slate-950`}>
        <div className={`max-w-[84rem] mx-auto w-full`}>
          <div className={`bp-1160:grid bp-1160:grid-cols-5 bp-1160:gap-5`}>
            <FooterColOne />
            <FooterColTwo />
          </div>
        </div>
      </footer>
    </>
  );
}
