// 'use client';

type LogoType = {
  label: string;
  // children: ReactNode;
}

import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import React from 'react';

export default function Logo({ label }: LogoType) {
  return (
    <>
      <div className={`flex items-center gap-1 mr-5 bp-1178:mr-16`}>
        <Image className={`w-[45.7px]`} src={LogoImg} alt={`Viaproperty logo`} />
        <h3
          className={`text-[13.163px] uppercase font-bold bg-clip-text text-transparent bg-linear-main-red font-montserrat-alternates`}>{label}</h3>
      </div>
    </>
  );
}
