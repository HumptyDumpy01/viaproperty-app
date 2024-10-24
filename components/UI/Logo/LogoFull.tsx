// 'use client';

/*type LogoFullType = {
  // children: ReactNode;
}*/

import Image from 'next/image';
import ViapropertyLogoFull from '@/assets/logo-full.png';
import React from 'react';

export default function LogoFull(/*{  }: LogoFullType*/) {
  return (
    <>
      <div className={`mb-9`}>
        <Image src={ViapropertyLogoFull} alt={`Viaproperty Logo`} />
      </div>
    </>
  );
}
