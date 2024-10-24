// 'use client';

import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

type CustomerTestimonialType = {
  paragraph: ReactNode;
  srcImg: StaticImageData;
  AltImg: string;
  initials: string;
  status: string;
}

export default function CustomerTestimonial({ paragraph, AltImg, srcImg, initials, status }: CustomerTestimonialType) {
  return (
    <>
      <div>
        <p className={`text-zinc-800 bp-620:text-[17px] leading-relaxed text-sm`}>{paragraph}</p>
        <div className={`flex gap-6 items-center  mt-10`}>
          <div>
            <Image className={`w-16 h-16`} src={srcImg} alt={AltImg} />
          </div>
          <div className={`flex flex-col gap-0.5 items-center`}>
            <h3 className={`text-zinc-800 font-semibold`}>{initials}</h3>
            <p className={`text-sm text-zinc-500`}>{status}</p>
          </div>
        </div>
      </div>
    </>
  );
}
