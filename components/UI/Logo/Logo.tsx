// 'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type LogoType = {
  label: string;
  link?: boolean
  href?: string;
  // children: ReactNode;
}

export default function Logo({ label, link = false, href = `#` }: LogoType) {
  return (
    <>
      {link && (
        <>
          <Link href={href} className={`flex items-center gap-1 mr-5 bp-1178:mr-16`}>
            <Image className={`w-[45.7px]`} src={`/logo.png`} alt={`Viaproperty logo`} />
            <h3
              className={`text-[13.163px] uppercase font-bold bg-clip-text text-transparent bg-linear-main-red font-montserrat-alternates`}>{label}</h3>
          </Link>
        </>
      )}
      {!link && (
        <>
          <div className={`flex items-center gap-1 mr-5 bp-1178:mr-16`}>
            <Image className={`w-[45.7px]`} src={`/logo.png`} alt={`Viaproperty logo`} />
            <h3
              className={`text-[13.163px] uppercase font-bold bg-clip-text text-transparent bg-linear-main-red font-montserrat-alternates`}>{label}</h3>
          </div>
        </>
      )}
    </>
  );
}
