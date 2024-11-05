// 'use client';

type CheckoutPropertyImagesType = {
  images: StaticImageData[];
  // children: ReactNode;
}

import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function CheckoutPropertyImages({ images }: CheckoutPropertyImagesType) {
  return (
    <>
      <div
        className={`grid grid-cols-proceed-with-purchase grid-rows-proceed-with-purchase gap-3.5 pb-12 border-b border-b-blue-100 mb-9`}>
        <div className={`w-full h-full row-span-3 rounded-[30px]`}>
          <Image className={`object-cover w-full h-full rounded-[30px]`} src={images[0]} alt={`Property Image`} />
        </div>
        <div>
          <Image className={`object-cover w-full h-full rounded-[30px]`} src={images[1]} alt={`Property Image`} />
        </div>
        <div className={`row-span-2`}>
          <Image className={`object-cover w-full h-full rounded-[30px]`} src={images[2]} alt={`Property Image`} />
        </div>

        <div className={`row-span-2`}>
          <Image className={`object-cover w-full h-full rounded-[30px]`} src={images[3]} alt={`Property Image`} />
        </div>
      </div>
    </>
  );
}
