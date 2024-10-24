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
      <footer className={`mb-16 text-white`}>
        <div className={`max-w-[84rem] mx-auto w-full`}>
          <div className={`grid grid-cols-5 gap-5`}>
            <FooterColOne />
            <FooterColTwo />
          </div>
        </div>
      </footer>
    </>
  );
}
