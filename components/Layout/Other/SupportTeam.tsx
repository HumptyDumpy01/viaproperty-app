// 'use client';

/*type SupportTeamType = {
  // children: ReactNode;
}*/

import Image from 'next/image';
import SupportManager1 from '@/assets/home/contact-us/support-1.png';
import SupportManager2 from '@/assets/home/contact-us/support-2.png';
import SupportManager3 from '@/assets/home/contact-us/support-3.png';
import SupportManager4 from '@/assets/home/contact-us/support-4.png';
import React from 'react';

export default function SupportTeam(/*{  }: SupportTeamType*/) {
  return (
    <>
      <div className={`flex bg-linear-white-to-red rounded-full py-3 px-3 items-center w-80 relative
              mb-10`}>
        <div className={`flex`}>
          <Image className={`w-10 h-10 -mr-4`} src={SupportManager1} alt={`Boby Maker - Manager`} />
          <Image className={`w-10 h-10 -mr-3`} src={SupportManager2} alt={`Mark Johnson - Manager`} />
          <Image className={`w-10 h-10 -mr-3`} src={SupportManager3} alt={`Nikolai Hustav - Manager`} />
          <Image className={`w-10 h-10`} src={SupportManager4} alt={`John Doe - Manager`} />
        </div>
        <h3 className={`absolute -right-32 top-5 text-[14px] font-semibold`}>
          <span className={`text-white`}>Contact our w</span>onderful support!</h3>
      </div>
    </>
  );
}
