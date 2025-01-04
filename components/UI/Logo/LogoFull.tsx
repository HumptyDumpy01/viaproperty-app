// 'use client';

/*type LogoFullType = {
  // children: ReactNode;
}*/

import Image from 'next/image';
import React from 'react';

export default function LogoFull(/*{  }: LogoFullType*/) {
  return (
    <>
      <div className={`mb-9`}>
        <Image width={200} height={40} src={`/logo-full.png`} alt={`Viaproperty Logo`} />
      </div>
    </>
  );
}
